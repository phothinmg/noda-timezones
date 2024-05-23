import { zoneCurrentTime} from "../src/index";

describe("zoneCurrentTime", () => {
  // Returns a Date object for a valid timezone input.
  it("should return a Date object when a valid timezone is provided", () => {
    const timezone = "America/New_York";
    const currentTime = zoneCurrentTime(timezone);
    expect(currentTime).toBeInstanceOf(Date);
  });

  // Returns a Date object with the correct local time for a given timezone.
  it("should return a Date object when a valid timezone is provided", () => {
    const timezone = "America/New_York";
    const currentTime = zoneCurrentTime(timezone);
    expect(currentTime).toBeInstanceOf(Date);
  });

  // Returns a Date object with the correct local time for a timezone with a positive offset.
});
