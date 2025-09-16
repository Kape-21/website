import type { WebTerm } from "web-term-ui";

export function executeTerminalCommand({
  command,
  term,
  platform,
  browser,
  engine,
  close,
}: {
  "command" : string;
  "term"    : WebTerm;
  "platform": string;
  "browser" : string;
  "engine"  : string;
  "close"   : () => void;
}): void {
  if (command === "weather") {
    term.write("<span class='text-red-500'>weather: no arguments</span>", {
      "html": true,
    });

    return;
  }

  if (command.startsWith("weather ")) {
    const city = command.slice(8).toLowerCase();

    term.pushBelow(`Searching '${city}' on OpenMeteo...`);

    fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1&language=en&format=json`)
      .then(response => response
        .json()
        .then(data => {
          if (data?.results?.[0] === undefined) {
            term.write(`weather: '${city}' was not found`);
            term.clearBelow();

            return;
          }

          const coords = {
            "latitude" : data?.results?.[0]?.latitude,
            "longitude": data?.results?.[0]?.longitude,
          };

          term.writeBelow(`Getting a weather for '${coords.latitude}, ${coords.longitude}' on OpenMeteo...`);

          fetch(`https://api.open-meteo.com/v1/forecast?latitude=${coords.latitude}&longitude=${coords.longitude}&current=temperature_2m,is_day`)
            .then(response => response
              .json()
              .then(data => {
                term.write(`
- day        : ${data?.current?.is_day ? "day" : "night"}
- time       : ${(new Date(data?.current?.time)).toLocaleTimeString()}
- temperature: ${data?.current?.temperature_2m}${data?.current_units?.temperature_2m}
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

  if (command === "eval") {
    if (term.header !== "# ") {
      term.write("<span class='text-red-500'>eval: no permission</span>", {
        "html": true,
      });

      return;
    }

    term.write("<span class='text-red-500'>eval: no arguments</span>", {
      "html": true,
    });

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
 eval    eval [javascript code]
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