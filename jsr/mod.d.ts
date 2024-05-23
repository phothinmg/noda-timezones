type ZoneData = {
    id: string;
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
} | undefined;
/**
 * **Zone Data provided by Noda Time**
 *
 * https://nodatime.org/
 *
 * Returns the zone object corresponding to the given timezone.
 * @param timezone - The timezone for which the zone object is required.
 * @returns The zone object corresponding to the given timezone.
 *
 * @example
 *
 * const zoneData = zoneData("Asia/Yangon");
 * console.log(zoneData);
 */
declare function zoneData(timezone: string): ZoneData;
/**
 * Returns all the zone data.
 * @returns An array containing all the zone data.
 */
declare function allZonesData(): ({
    id: string;
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
    nextTransition: {};
} | {
    id: string;
    aliases: string[];
    location: null;
    offsets: string[];
    currentOffset: string;
    nextTransition: {};
})[];
/**
 * **Retrieves the current local time for a given timezone.**
 * @param timezone - The timezone for which the current local time needs to be retrieved.
 * @returns The current local time as a Date object.
 *
 * @example
 * const zoneTime = zoneCurrentTime("Asia/Yangon").toLocaleString();
 * console.log(zoneTime);
 */
declare const zoneCurrentTime: (timezone: string) => Date;
/**
 * Calculates the current time in a specified city.
 * @param city - The name of the city.
 * @returns The current time in the specified city.
 *
 * @example
 * const cityTime = currentTimeInCity("Bangkok").toLocaleString();
 * console.log(time);
 */
declare function currentTimeInCity(city: string): Date;
type TimezoneNames = {
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
 * Retrieves the names of different time zones categorized by region.
 *
 * @returns An object containing the names of time zones categorized by region.
 * The object has the following properties:
 * - all: A stringified JSON array of all time zone names.
 * - africa: A stringified JSON array of time zone names in Africa.
 * - usa: A stringified JSON array of time zone names in the United States.
 * - canada: A stringified JSON array of time zone names in Canada.
 * - brazil: A stringified JSON array of time zone names in Brazil.
 * - mexico: A stringified JSON array of time zone names in Mexico.
 * - antarctica: A stringified JSON array of time zone names in Antarctica.
 * - indian: A stringified JSON array of time zone names in the Indian Ocean.
 * - atlantic: A stringified JSON array of time zone names in the Atlantic Ocean.
 * - australia: A stringified JSON array of time zone names in Australia.
 * - europe: A stringified JSON array of time zone names in Europe.
 * - arctic: A stringified JSON array of time zone names in the Arctic Ocean.
 * - pacific: A stringified JSON array of time zone names in the Pacific Ocean.
 * - chile: A stringified JSON array of time zone names in Chile.
 * - asia: A stringified JSON array of time zone names in Asia.
 * - america: A stringified JSON array of time zone names in the Americas.
 *
 * @example
 *
 * const timezoneNamesInAsia: TimezoneNames = getTimeZoneNames();
 * console.log(timezoneNamesInAsia.asia);
 */
declare function getTimeZoneNames(): {
    all: string[];
    africa: string;
    usa: string;
    canada: string;
    brazil: string;
    mexico: string;
    antarctica: string;
    indian: string;
    atlantic: string;
    australia: string;
    europe: string;
    arctic: string;
    pacific: string;
    chile: string;
    asia: string[];
    america: string;
};

export { type TimezoneNames, type ZoneData, allZonesData, currentTimeInCity, getTimeZoneNames, zoneCurrentTime, zoneData };
