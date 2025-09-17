import type { WebTerm } from "web-term-ui";
import type { LocaleType } from "@/types/locale.type.ts";
import { getWeather } from "@/lib/helpers/get-weather.ts";

export function executeTerminalCommand({
  command,
  term,
  platform,
  browser,
  engine,
  close,
  onEditor,
  locale,
  setLocale,
}: {
  "command" : string;
  "term"    : WebTerm;
  "platform": string;
  "browser" : string;
  "engine"  : string;
  "close"   : () => void;
  "onEditor": (state: {
    "opened": boolean;
    "quit"  : () => void;
    "save"  : () => void;
  }) => void;
  "locale"   : LocaleType;
  "setLocale": (locale: LocaleType) => void;
}): void {
  if (command.startsWith("fetch ")) {
    const url = command.slice(6);
    const t1 = performance.now();

    term.writeBelow(`Fetching ${url}...`);

    fetch(url)
      .then(response => response
        .json()
        .then(data => {
          const t2 = performance.now();

          term.write(`
Fetched in ${t2 - t1} ms

${JSON.stringify(data, null, 2)}
`);
          term.clearBelow();
        }))
      .catch(error => {
        term.write(
          "<span class='text-red-500'>error: " +
          error?.message +
          "</span>",
          { "html": true },
        );
        term.clearBelow();
      });

    return;
  }

  if (command.startsWith("weather ")) {
    getWeather({ command, term });

    return;
  }

  if (command.startsWith("eval ")) {
    if (term.header !== "# ") {
      term.write("<span class='text-red-500'>eval: no permission</span>", {
        "html": true,
      });

      return;
    }

    const toParse = command.slice(5);

    try {
      term.write(eval(toParse));
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      term.write(
        "<span class='text-red-500'>error: " +
        (typeof error === "string" ? error : error?.message) +
        "</span>",
        { "html": true },
      );
    }

    return;
  }

  switch (command) {
    case "eval":
    case "fetch":
    case "weather": {
      if (command === "eval" && term.header !== "# ") {
        term.write(`<span class="text-red-500">${command}: no permission</span>`, {
          "html": true,
        });

        break;
      }

      term.write(`<span class="text-red-500">${command}: no arguments</span>`, {
        "html": true,
      });

      break;
    }
    case "locale":
    case "lang": {
      const editor = term.edit(
        `locale=${locale}`,
        {
          "title": "<div class='bg-black text-white px-2'>" +
            "or [ctrl/cmd + s]: save; [esc]: quit" +
            "</div>",
          "html": true,
        },
      );

      const onSave = (result: string) => {
        const trimmed = result.trim();
        const pairs = trimmed.split("=");
        const locale: string = pairs?.[1];

        switch (locale) {
          /* govno code production */
          case "en":
          case "ru":
          case "ua": {
            setLocale?.(locale);

            break;
          }
          default: {
            term.writeBelow("Invalid locale");

            setTimeout(() => {
              term.clearBelow();
            }, 2000);

            break;
          }
        }
      };

      onEditor({
        "opened": true,
        "quit"  : () => {
          onEditor({
            "opened": false,
            "quit"  : () => {},
            "save"  : () => {},
          });
          editor.emit("edit-cancel");
        },
        "save": () => {
          onEditor({
            "opened": false,
            "quit"  : () => {},
            "save"  : () => {},
          });
          onSave(editor.value);
          editor.emit("edit-done", "");
        },
      });

      editor.on("edit-done", (result: string) => {
        onEditor({
          "opened": false,
          "quit"  : () => {},
          "save"  : () => {},
        });
        onSave(result);
      });

      break;
    }
    case "su": {
      term.setHeader("# ");
      term.write("");

      break;
    }
    case "clear": {
      term.clearTerminal();

      break;
    }
    case "help": {
      term.write(` help
 clear
 pfetch
 ls
 su
 exit
 lang
 locale
 eval    eval [javascript code]
 fetch   fetch [url]
 weather weather [city]`);

      break;
    }
    case "ls": {
      term.write(".");

      break;
    }
    case "exit": {
      if (term.header === "# ") {
        term.setHeader("$ ");
        term.write("");

        return;
      }

      term.clearTerminal();
      close();

      break;
    }
    case "neofetch": {
      term.write("Command not found. Did you mean 'pfetch'?");

      break;
    }
    case "pfetch": {
      term.write(`
      /\\        ame@chan
    //  \\\\      os      ${platform}
   //    \\ \\    browser ${browser}
 / /     _) )   engine  ${engine}
/_/___-- __-    plugins ${navigator?.plugins?.length ?? 0}
 /____--        ascii   endeavour os
                de      plasma 6.4
`);

      break;
    }
    default: {
      term.write(JSON.stringify(command) + ": command not found");
    }
  }
}