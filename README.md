## Noda Time Timezomes Info.

### About

Getting timezones info that provided by [Noda Time](https://nodatime.org/).

This package is not related to Noda Time and not all of Noda Time's APIs.

Some of the Timezones information provided by Noda Time is only created to be used in Node.js.

### Usage

```javascript
import {
  allZonesData,
  getTimeZoneNames,
  zoneCurrentTime,
  zoneData,
  currentTimeInCity,
} from "noda-timezones";

const zoneData = zoneData("Asia/Yangon");
console.log(zoneData);// Returns the zone object corresponding to the given timezone.

const zoneTime = zoneCurrentTime("Asia/Yangon").toLocaleString();
console.log(zoneTime); // Retrieves the current local time for a given timezone.

const cityTime = currentTimeInCity("Bangkok").toLocaleString();
console.log(time); // Calculates the current time in a specified city.
// Only capital cities and major cities are available.

console.log(allZonesData()) // Returns all the zone data.

const timezoneNamesInAsia: TimezoneNames = getTimeZoneNames();
console.log(timezoneNamesInAsia.asia); // Retrieves the names of different time zones categorized by region.

/*
- all: A  array of all time zone names.
- africa: A  array of time zone names in Africa.
- usa: A  array of time zone names in the United States.
- canada: A  array of time zone names in Canada.
- brazil: A  array of time zone names in Brazil.
- mexico: A  array of time zone names in Mexico.
- antarctica: A  array of time zone names in Antarctica.
- indian: A  array of time zone names in the Indian Ocean.
- atlantic: A  array of time zone names in the Atlantic Ocean.
- australia: A  array of time zone names in Australia.
- europe: A  array of time zone names in Europe.
- arctic: A  array of time zone names in the Arctic Ocean.
- pacific: A  array of time zone names in the Pacific Ocean.
- chile: A  array of time zone names in Chile.
- asia: A  array of time zone names in Asia.
- america: A  array of time zone names in the Americas.
*/
```

