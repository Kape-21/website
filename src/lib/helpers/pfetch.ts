const getBatteryStatus = (battery: number) => `battery ${battery * 100}%`;

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
  return "\n" +
    String.raw`      /\        ame@chan` +
    String.raw`    //  \\\\      os      ${platform}` +
    String.raw`   //    \\ \\    browser ${browser}` +
    String.raw` / /     _) )   engine  ${engine}` +
    String.raw`/_/___-- __-    cpu     ${navigator?.hardwareConcurrency ?? 0} threads` +
    String.raw` /____--        ascii   endeavour os` +
    String.raw`                de      plasma 6.4` +
    String.raw`                ${battery ? getBatteryStatus(battery) : ""}`;
}