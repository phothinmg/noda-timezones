export const utc = () => {
  const localTime = new Date().getTime();
  const tzoffset = new Date().getTimezoneOffset() * 60 * 1000;
  const utcTimeStemp = localTime + tzoffset;
  const utctime = new Date(utcTimeStemp).toString();
  const wd = utctime.split(" ")[0];
  const mo = utctime.split(" ")[1];
  const da = utctime.split(" ")[2];
  const yr = utctime.split(" ")[3];
  const utcDateString = wd + " " + mo + " " + da + " " + yr;
  const utcClock = utctime.split(" ")[4];
  return { utcTimeStemp, utcDateString, utcClock };
};

export const utcTimeStemp = () => {
  return utc().utcTimeStemp;
};
