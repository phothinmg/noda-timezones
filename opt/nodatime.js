import path from "path";
import * as cheerio from "cheerio";
import { writeJson } from "array-json";

async function nodatime() {
  await fetch("https://nodatime.org/TimeZones")
    .then((res) => res.text())
    .then(async (data) => {
      const $ = cheerio.load(data);
      let da = [];
      const tzData = $("table tbody tr")
        .toArray()
        .reduce((_, row) => {
          const a = {
            id: $(row.children[1]).text().trim(),
            country_code: $(row.children[13]).text().trim(),
            country: $(row.children[11]).text().trim(),
            current_offset: $(row.children[3]).text().trim(),
            offsets: $(row.children[7]).text().trim(),
            next_transition: $(row.children[5]).text().trim(),
            aliases: [$(row.children[9]).text().trim()],
            link: $(row.children[15]).text().trim(),
          };
          da.push(a);
        });

      await writeJson(path.join(process.cwd(), "data/nodatime.json"), da);
    });
}
nodatime();
export default nodatime;
