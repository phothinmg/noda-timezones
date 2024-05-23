import data from "../data/timezones.json";
import { getTimeZoneNames } from "../src/index";

describe("getTimeZoneNames", () => {
  // Verify that all time zone names are returned in the 'all' array
  it('should return all time zone names in the "all" array', () => {
    const result = getTimeZoneNames();
    expect(result.all).toEqual(data);
  });

  // Test with an empty data source to see if all categories return empty arrays
});
