import caldata from "../../data/caldata.json";
import { utc, utcTimeStemp } from "./uct.ts";

/**
 * Retrieves the current local time for a given timezone.
 * @param timezone - The timezone for which the current local time needs to be retrieved.
 * @returns The current local time as a Date object.
 */
export const zoneCurrentTime = (timezone: string): Date => {
  // Get the current UTC timestamp
  const utcTimestamp = utcTimeStemp();

  // Find the object in the caldata array that contains the given timezone
  const obj = caldata?.find((item: { tzgp: string | string[]; }) => item.tzgp.includes(timezone));

  // Retrieve the timezone offset in milliseconds if an object is found
  const timezoneOffsetMs = obj?.offset_ms || 0;

  // Create a new Date object by adding the UTC timestamp and the timezone offset
  const local = new Date(
    Date.UTC(0, 0, 0, 0, 0, 0, utcTimestamp + timezoneOffsetMs)
  );

  return local;
};

/**
 * Calculates the current time in a specified city.
 * @param city - The name of the city.
 * @returns The current time in the specified city.
 */
export function currentTimeInCity(city: string): Date {
  const utc = utcTimeStemp();
  let offset = 0;

  caldata.forEach((item) => {
    const cities = item.tzgp.flatMap((i) => i.split("/").slice(-1));
    if (cities.includes(city)) {
      offset = item.offset_ms;
    }
  });

  const cityTime = new Date(utc + offset);
  return cityTime;
}
