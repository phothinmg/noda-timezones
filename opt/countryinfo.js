import path from "path";
import { writeJson } from "array-json";

async function countryinfo() {
  let obj = [];
  await fetch("https://download.geonames.org/export/dump/countryInfo.txt")
    .then((res) => res.text())
    .then((data) => {
      var a2 = data.split("EquivalentFipsCode")[1].trim();
      var b2 = a2.split("\n");
      var cc2 = [];
      b2.forEach((i) => {
        var aa2 = i.split("\t");
        var bb2 = {
          ISO: aa2[0],
          ISO3: aa2[1],
          ISONumeric: aa2[2],
          fips: aa2[3],
          country: aa2[4],
          capital: aa2[5],
          area_sqkm: aa2[6],
          population: aa2[7],
          continent: aa2[8],
          tld: aa2[9],
          geonameid: aa2[16],
          neighbours: aa2[17],
        };
        obj.push(bb2);
      });
    });
  await writeJson(path.join(process.cwd(), "data/countryinfo.json"), obj);
}

export default countryinfo;
