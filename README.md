## Noda Time Timezomes Info.

### About

Getting timezones info that provided by [Noda Time](https://nodatime.org/).

This package is not related to Noda Time and not all of Noda Time's APIs.

Some of the Timezones information provided by Noda Time is only created to be used in Node.js.


## JSR 

[![JSR](https://jsr.io/badges/@ptm/noda-timezones)](https://jsr.io/@ptm/noda-timezones)

### Install 

Runtime - Deno

```bash
deno add @ptm/noda-timezones
```

Runtime - Node.js

```bash
npx jsr add @ptm/noda-timezones
```

```bash
yarn dlx jsr add @ptm/noda-timezones
```


```bash
pnpm dlx  jsr add @ptm/noda-timezones
```

Runtime - Bun

```bash
bunx dlx  jsr add @ptm/noda-timezones
```

### Usage

```typescript

import { zoneData } from "@ptm/noda-timezones";
import { zoneCurrentTime } from "@ptm/noda-timezones";
import { currentTimeInCity } from "@ptm/noda-timezones";
import { getTimeZoneNames } from "@ptm/noda-timezones";

```

### API Docs on JSR 

https://jsr.io/@ptm/noda-timezones/doc


---

## NPM 

![NPM Version](https://img.shields.io/npm/v/noda-timezones)


### Install

```bash
npm i noda-timezones
```

```bash
yarn add noda-timezones
```

```bash
pnpm i noda-timezones
```

### Usage

```javascript
import {
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

### API Docs

https://phothinmg.github.io/noda-timezones/

 


