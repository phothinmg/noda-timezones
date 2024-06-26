import nodadata from "../data/noda.json";
import caldata from "../data/caldata.json";
import data from "../data/timezones.json";

/**
 * **Type definition for utc function.**
 */
type UTC = {
  utcTimeStemp: number;
  utcDateString: string;
  utcClock: string;
};
/**
 * Function to calculate and return the UTC time details.
 * @returns An object containing utcTimeStemp, utcDateString, and utcClock.
 */
function utc(): UTC {
  // Get the local time in milliseconds
  const localTime = new Date().getTime();

  // Get the timezone offset in milliseconds
  const tzoffset = new Date().getTimezoneOffset() * 60 * 1000;

  // Calculate the UTC timestamp
  const utcTimeStemp = localTime + tzoffset;

  // Convert UTC timestamp to a string
  const utctime = new Date(utcTimeStemp).toString();

  // Extract day, month, date, and year from the UTC string
  const wd = utctime.split(" ")[0];
  const mo = utctime.split(" ")[1];
  const da = utctime.split(" ")[2];
  const yr = utctime.split(" ")[3];

  // Create a formatted UTC date string
  const utcDateString = wd + " " + mo + " " + da + " " + yr;

  // Extract the UTC clock time
  const utcClock = utctime.split(" ")[4];

  // Return an object with UTC details
  return { utcTimeStemp, utcDateString, utcClock };
}

/**
 * Function to get the UTC timestamp.
 * @returns The UTC timestamp value.
 */
function utcTimeStemp(): number {
  return utc().utcTimeStemp;
}
/**
 * ## Type definition for ZoneData.
 *
 * >> Represents the type definition for ZoneData, which can either be an object
 * containing timezone details such as id, aliases, location, offsets, currentOffset,
 * and nextTransition; or undefined if no data is available.
 */
export type ZoneData =
  | {
      id: string; // Name of timezone
      aliases: string[];
      location: {
        countryCode: string;
        countryName: string;
        comment: string;
        latitude: number;
        longitude: number;
      };
      offsets: string[];
      currentOffset: string;
      nextTransition: object;
    }
  | undefined;
/**
 * ## Zone Data provided by Noda Time
 *
 * https://nodatime.org/
 *
 * ### Input
 *   #### timezone - The timezone for which the zone object is required.
 *
 * ### Returns
 *  #### The zone object corresponding to the given timezone.
 *
 * ### Note
 *   #### If invilid timezone name return ==> undefined .
 *
 *
 *```js
 * const zoneData = zoneData("Asia/Yangon");
 * console.log(zoneData);
 * ```
 */
export function zoneData(timezone: string): ZoneData {
  const zones = nodadata.zones;
  let obj: ZoneData;

  for (const item of zones) {
    const name = [item.id, ...item.aliases];
    if (name.includes(timezone)) {
      obj = {
        ...item,
        location: item.location || {
          countryCode: "",
          countryName: "",
          comment: "",
          latitude: 0,
          longitude: 0,
        },
      };
      break;
    }
  }

  return obj;
}
/**
 * ## Retrieves the current local time for a given timezone.
 *
 * ---
 * @param timezone - The timezone for which the current local time needs to be retrieved.
 * @returns The current local time as a Date object.
 *
 * ```js
 * const zoneTime = zoneCurrentTime("Asia/Yangon").toLocaleString();
 * console.log(zoneTime);
 * ```
 */
export const zoneCurrentTime = (timezone: string): Date => {
  // Get the current UTC timestamp
  const utcTimestamp = utcTimeStemp();

  // Find the object in the caldata array that contains the given timezone
  const obj = caldata?.find((item: { tzgp: string | string[] }) =>
    item.tzgp.includes(timezone)
  );

  // Retrieve the timezone offset in milliseconds if an object is found
  const timezoneOffsetMs = obj?.offset_ms || 0;

  // Create a new Date object by adding the UTC timestamp and the timezone offset
  const local = new Date(utcTimestamp + timezoneOffsetMs);

  return local;
};
/**
 *  ## Calculates the current time in a specified city
 *
 * Only capital cities and major cities are available.
 *
 * ### Input
 *   #### city - The name of the city.
 *
 * ### Returns
 *    #### The current time in the specified city.
 *
 *
 *
 * ```js
 * const cityTime = currentTimeInCity("Bangkok").toLocaleString();
 * console.log(time);
 * ```
 */
export function currentTimeInCity(city: string): Date | string {
  const utc = utcTimeStemp();
  let offset = 0;

  caldata.forEach((item) => {
    const cities = item.tzgp.flatMap((i) => i.split("/").slice(-1));
    if (cities.includes(city)) {
      offset = item.offset_ms;
    }
  });

  const cityTime = offset !== 0 ? new Date(utc + offset) : `${city} dose not aviable for get current time.`;
  return cityTime;
}
/**
 * **Type definition for TimezoneNames.**
 *
 *
 * Represents the type definition for TimezoneNames, which includes categorized time zone names by region.
 * Contains properties for all time zones, Africa, USA, Canada, Brazil, Mexico, Antarctica,
 * Indian Ocean, Atlantic Ocean, Australia, Europe, Arctic Ocean, Pacific Ocean, Chile, Asia, and the Americas.
 */
export type TimezoneNames = {
  all: string[];
  africa: string[];
  usa: string[];
  canada: string[];
  brazil: string[];
  mexico: string[];
  antarctica: string[];
  indian: string[];
  atlantic: string[];
  australia: string[];
  europe: string[];
  arctic: string[];
  pacific: string[];
  chile: string[];
  asia: string[];
  america: string[];
};
/**
 * **Retrieves the names of different time zones categorized by region.**
 *
 * @returns An object containing the names of time zones categorized by region.
 * The object has the following properties:
 * - all: A  array of all time zone names.
 * - africa: A  array of time zone names in Africa.
 * - usa: A  array of time zone names in the United States.
 * - canada: A  array of time zone names in Canada.
 * - brazil: A  array of time zone names in Brazil.
 * - mexico: A  array of time zone names in Mexico.
 * - antarctica: A  array of time zone names in Antarctica.
 * - indian: A  array of time zone names in the Indian Ocean.
 * - atlantic: A  array of time zone names in the Atlantic Ocean.
 * - australia: A  array of time zone names in Australia.
 * - europe: A  array of time zone names in Europe.
 * - arctic: A  array of time zone names in the Arctic Ocean.
 * - pacific: A  array of time zone names in the Pacific Ocean.
 * - chile: A  array of time zone names in Chile.
 * - asia: A  array of time zone names in Asia.
 * - america: A  array of time zone names in the Americas.
 *
 *
 * ```js
 * const timezoneNamesInAsia: TimezoneNames = getTimeZoneNames();
 * console.log(timezoneNamesInAsia.asia);
 * ```
 */
export function getTimeZoneNames(): TimezoneNames {
  const africa = data.filter((i: string) => i.split("/")[0] === "Africa");
  const asia = data.filter((i: string) => i.split("/")[0] === "Asia");
  const am = data.filter((i: string) => i.split("/")[0] === "America");
  const usa = data.filter((i: string) => i.split("/")[0] === "US");
  const canada = data.filter((i: string) => i.split("/")[0] === "Canada");
  const brazil = data.filter((i: string) => i.split("/")[0] === "Brazil");
  const mexico = data.filter((i: string) => i.split("/")[0] === "Mexico");
  const antarctica = data.filter(
    (i: string) => i.split("/")[0] === "Antarctica"
  );
  const indian = data.filter((i: string) => i.split("/")[0] === "Indian");
  const atlantic = data.filter((i: string) => i.split("/")[0] === "Atlantic");
  const australia = data.filter((i: string) => i.split("/")[0] === "Australia");
  const europe = data.filter((i: string) => i.split("/")[0] === "Europe");
  const arctic = data.filter((i: string) => i.split("/")[0] === "Arctic");
  const pacific = data.filter((i: string) => i.split("/")[0] === "Pacific");
  const chile = data.filter((i: string) => i.split("/")[0] === "Chile");
  const america = [...am, ...usa, ...brazil, ...canada, ...chile];
  const all = data;
  return {
    all,
    africa,
    usa,
    canada,
    brazil,
    mexico,
    antarctica,
    indian,
    atlantic,
    australia,
    europe,
    arctic,
    pacific,
    chile,
    asia,
    america,
  };
}
