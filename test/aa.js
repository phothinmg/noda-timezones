import {
  getTimeZoneNames,
  zoneCurrentTime,
  zoneData,
  currentTimeInCity,
} from "../dist/index.js";

// console.log(zoneCurrentTime("Asia/Yangon").toLocaleString());
// console.log(getTimeZoneNames().usa);
// console.log(getTimeZoneNames().asia);
console.log(zoneData("Asia/Yangon"));

// console.log(currentTimeInCity("Bangkok").toLocaleString());
