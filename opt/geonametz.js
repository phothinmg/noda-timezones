import path from "path";
import { writeJson } from "array-json";

async function geonametz() {
  let obj = [];
  await fetch("https://download.geonames.org/export/dump/timeZones.txt")
    .then((res) => res.text())
    .then((data) => {
      var a = data.split("\n").splice(1);
      a.forEach((i) => {
        var b = i.split("\t");
        var ofh = parseFloat(b[2]);
        var ofm = ofh * 60;
        var ofs = ofm * 60;
        var ofms = ofs * 1000;
        var c = {
          countryCode: b[0],
          tzName: b[1],
          offset: {
            hour: ofh,
            minute: ofm,
            second: ofs,
            millisecond: ofms,
          },
        };
        obj.push(c);
      });
    });
  await writeJson(path.join(process.cwd(),"data/geonametz.json" ), obj.slice(0, -1));
}

export default geonametz;
