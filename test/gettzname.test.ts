import { getTimeZoneNames } from "../src/index";
import data from "../data/timezones.json";
describe("getTimeZoneNames", () => {
  // The function returns an object with all time zones, grouped by continent.
  it("should return an object with all time zones grouped by continent", () => {
    const timeZoneNames = getTimeZoneNames();
    expect(timeZoneNames).toEqual({
      all: JSON.stringify(data),
      africa: JSON.stringify(
        data.filter((i) => i.split("/")[0] === "Africa"),
        null,
        2
      ),
      usa: JSON.stringify(data.filter((i) => i.split("/")[0] === "US")),
      canada: JSON.stringify(data.filter((i) => i.split("/")[0] === "Canada")),
      brazil: JSON.stringify(data.filter((i) => i.split("/")[0] === "Brazil")),
      mexico: JSON.stringify(data.filter((i) => i.split("/")[0] === "Mexico")),
      antarctica: JSON.stringify(
        data.filter((i) => i.split("/")[0] === "Antarctica"),
        null,
        2
      ),
      indian: JSON.stringify(data.filter((i) => i.split("/")[0] === "Indian")),
      atlantic: JSON.stringify(
        data.filter((i) => i.split("/")[0] === "Atlantic"),
        null,
        2
      ),
      australia: JSON.stringify(
        data.filter((i) => i.split("/")[0] === "Australia"),
        null,
        2
      ),
      europe: JSON.stringify(
        data.filter((i) => i.split("/")[0] === "Europe"),
        null,
        2
      ),
      arctic: JSON.stringify(
        data.filter((i) => i.split("/")[0] === "Arctic"),
        null,
        2
      ),
      pacific: JSON.stringify(
        data.filter((i) => i.split("/")[0] === "Pacific"),
        null,
        2
      ),
      chile: JSON.stringify(data.filter((i) => i.split("/")[0] === "Chile")),
      asia: JSON.stringify(
        data.filter((i) => i.split("/")[0] === "Asia"),
        null,
        2
      ),
      america: JSON.stringify([
        ...data.filter((i) => i.split("/")[0] === "America"),
        ...data.filter((i) => i.split("/")[0] === "US"),
        ...data.filter((i) => i.split("/")[0] === "Brazil"),
        ...data.filter((i) => i.split("/")[0] === "Canada"),
        ...data.filter((i) => i.split("/")[0] === "Chile"),
      ]),
    });
  });
});
