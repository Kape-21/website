import type { WebTerm } from "web-term-ui";
import type { LocaleType } from "@/types/locale.type.ts";
import { getWeather } from "@/lib/helpers/get-weather.ts";
import { fetchUrl } from "@/lib/helpers/fetch-url.ts";
import { pfetch } from "@/lib/helpers/pfetch.ts";

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
    fetchUrl({ command, term });

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
            term.writeBelow(`locale: invalid string '${result}'`);

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
          editor.emit("edit-cancel");
        },
        "save": () => {
          editor.emit("edit-done", editor.value);
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
      term.write(
        " help\n" +
        " clear\n" +
        " pfetch\n" +
        " ls\n" +
        " su\n" +
        " exit\n" +
        " lang\n" +
        " locale\n" +
        " eval    eval [javascript code]\n" +
        " fetch   fetch [url]\n" +
        " weather weather [city]",
      );

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

      close();
      setTimeout(() => {
        term.clearTerminal();
        term.display.pushContent("Welcome to <span class='text-mauve_latte underline'>" +
          "Freesm 1.0 LTS" +
          "</span> (GNU/Linux 6.8.0-36-generic x86_64)\n* help", true);
      }, 300);

      break;
    }
    case "asmfetch":
    case "fastfetch":
    case "neofetch": {
      term.write("Command not found. Did you mean 'pfetch'?");

      break;
    }
    case "pfetch": {
      if (
        !("getBattery" in navigator) ||
        navigator.getBattery === null ||
        typeof navigator.getBattery !== "function"
      ) {
        term.write(pfetch({ platform, browser, engine }));

        break;
      }

      try {
        navigator
          .getBattery()
          .then((batteryManager: unknown) => {
            if (
              typeof batteryManager === "object" &&
              batteryManager !== null &&
              "level" in batteryManager &&
              batteryManager.level !== null &&
              typeof batteryManager.level === "number"
            ) {
              const battery: number = batteryManager.level;

              term.write(pfetch({ platform, browser, engine, battery }));
            } else {
              term.write(pfetch({ platform, browser, engine }));
            }
          });
      } catch {
        console.log("'getBattery' is not supported'");
        term.write(pfetch({ platform, browser, engine }));
      }

      break;
    }
    default: {
      term.write(JSON.stringify(command) + ": command not found");
    }
  }
}