import { zoneData } from "../src/index";

describe("zoneData", () => {
  // Should return the correct object when a valid timezone is passed as argument
  it("should return the correct object when a valid timezone is passed as argument", () => {
    const timezone = "Africa/Abidjan";
    const result = zoneData(timezone);
    expect(result).toEqual({
      id: "Africa/Abidjan",
      aliases: [
        "Africa/Accra",
        "Africa/Bamako",
        "Africa/Banjul",
        "Africa/Conakry",
        "Africa/Dakar",
        "Africa/Freetown",
        "Africa/Lome",
        "Africa/Nouakchott",
        "Africa/Ouagadougou",
        "Africa/Timbuktu",
        "Atlantic/Reykjavik",
        "Atlantic/St_Helena",
        "Iceland",
      ],
      location: {
        countryCode: "CI",
        countryName: "Côte d'Ivoire",
        comment: "",
        latitude: 5.316666666666666,
        longitude: -4.033333333333333,
      },
      offsets: ["+00"],
      currentOffset: "+00 (GMT)",
      nextTransition: {},
    });
  });

  // Should return null when an empty string is passed as argument
  it("should return undefined when an empty string is passed as argument", () => {
    const timezone = "";
    const result = zoneData(timezone);
    expect(result).toBeUndefined();
  });

  // Should return null when an invalid timezone is passed as argument
  it("should return undefined when an invalid timezone is passed as argument", () => {
    const timezone = "Invalid/Timezone";
    const result = zoneData(timezone);
    expect(result).toBeUndefined();
  });

  // Should return the first object when a timezone has multiple aliases
  it("should return the first object when a timezone has multiple aliases", () => {
    const timezone = "Africa/Abidjan";
    const result = zoneData(timezone);
    expect(result).toEqual({
      id: "Africa/Abidjan",
      aliases: [
        "Africa/Accra",
        "Africa/Bamako",
        "Africa/Banjul",
        "Africa/Conakry",
        "Africa/Dakar",
        "Africa/Freetown",
        "Africa/Lome",
        "Africa/Nouakchott",
        "Africa/Ouagadougou",
        "Africa/Timbuktu",
        "Atlantic/Reykjavik",
        "Atlantic/St_Helena",
        "Iceland",
      ],
      location: {
        countryCode: "CI",
        countryName: "Côte d'Ivoire",
        comment: "",
        latitude: 5.316666666666666,
        longitude: -4.033333333333333,
      },
      offsets: ["+00"],
      currentOffset: "+00 (GMT)",
      nextTransition: {},
    });
  });


  // Should handle timezones with upper case letters in their name
  it("should return the correct object when a valid timezone with upper case letters is passed as argument", () => {
    const timezone = "Africa/Algiers";
    const result = zoneData(timezone);
    expect(result).toEqual({
      id: "Africa/Algiers",
      aliases: [],
      location: {
        countryCode: "DZ",
        countryName: "Algeria",
        comment: "",
        latitude: 36.78333333333333,
        longitude: 3.05,
      },
      offsets: ["+01"],
      currentOffset: "+01 (CET)",
      nextTransition: {},
    });
  });

  // Should return null when a timezone with no id or aliases is present in the data
  it("should return undefined when a timezone with no id or aliases is present in the data", () => {
    const timezone = "Invalid/Timezone";
    const result = zoneData(timezone);
    expect(result).toBeUndefined();
  });
});
