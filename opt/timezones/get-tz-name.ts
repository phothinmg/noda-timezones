import data from "../../data/timezones.json";

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
 */
export default function getTimeZoneNames() {
  const africa = JSON.stringify(
    data.filter((i) => i.split("/")[0] === "Africa"),
    null,
    2
  );
  const asia = JSON.stringify(
    data.filter((i) => i.split("/")[0] === "Asia"),
    null,
    2
  );
  const am = data.filter((i) => i.split("/")[0] === "America");
  const us = data.filter((i) => i.split("/")[0] === "US");
  const usa = JSON.stringify(us);
  const cnd = data.filter((i) => i.split("/")[0] === "Canada");
  const canada = JSON.stringify(cnd);
  const brz = data.filter((i) => i.split("/")[0] === "Brazil");
  const brazil = JSON.stringify(brz);
  const max = data.filter((i) => i.split("/")[0] === "Mexico");
  const mexico = JSON.stringify(max);
  const antarctica = JSON.stringify(
    data.filter((i) => i.split("/")[0] === "Antarctica"),
    null,
    2
  );
  const ind = data.filter((i) => i.split("/")[0] === "Indian");
  const indian = JSON.stringify(ind);
  const atlantic = JSON.stringify(
    data.filter((i) => i.split("/")[0] === "Atlantic"),
    null,
    2
  );
  const australia = JSON.stringify(
    data.filter((i) => i.split("/")[0] === "Australia"),
    null,
    2
  );
  const europe = JSON.stringify(
    data.filter((i) => i.split("/")[0] === "Europe"),
    null,
    2
  );
  const arctic = JSON.stringify(
    data.filter((i) => i.split("/")[0] === "Arctic"),
    null,
    2
  );
  const pacific = JSON.stringify(
    data.filter((i) => i.split("/")[0] === "Pacific"),
    null,
    2
  );
  const chi = data.filter((i) => i.split("/")[0] === "Chile");
  const chile = JSON.stringify(chi);
  const america = JSON.stringify([...am, ...us, ...brz, ...cnd, ...chi]);
  const all = JSON.stringify(data);
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
