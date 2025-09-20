export function pfetch({
  platform,
  browser,
  engine,
  battery,
}: {
  "platform": string;
  "browser" : string;
  "engine"  : string;
  "battery"?: number;
}): string {
  return `
      /\\        ame@chan
    //  \\\\      os      ${platform}
   //    \\ \\    browser ${browser}
 / /     _) )   engine  ${engine}
/_/___-- __-    cpu     ${navigator?.hardwareConcurrency ?? 0} threads
 /____--        ascii   endeavour os
                de      plasma 6.4
` + (
    battery
      ? `                battery ${battery * 100}%`
      : ""
  );
}