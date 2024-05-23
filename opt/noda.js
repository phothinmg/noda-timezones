import path from "path";
import { writeJson } from "array-json";
/**
 * Fetches timezone data from nodatime.org and processes it to create JSON files.
 */
async function noda() {
  // Arrays to store timezone data
  let t = [];
  let abb = [];

  // Fetch timezone data from nodatime.org
  await fetch("https://nodatime.org/TimeZones?version=2024a&format=json")
    .then(async (res) => await res.json())
    .then(async (data) => {
      // Process each timezone zone
      data.zones.forEach((i) => {
        // Extract aliases
        var a = [i.id, ...i.aliases];
        t.push(a);

        // Calculate timezone offset
        var a = i.currentOffset.split(" ")[0];
        var c = parseInt(a.split(":")[0]) * 60;
        var d = a.split(":")[1];
        let e;
        if (d === undefined) {
          e = 0;
        } else {
          e = parseInt(d);
        }
        var mi = c + e;
        var hr = mi / 60;
        var se = mi * 60;
        var ms = se * 1000;

        // Extract latitude and longitude
        let lt;
        let lg;
        if (i.location === null) {
          lt = 0;
          lg = 0;
        } else {
          lt = i.location.latitude;
          lg = i.location.longitude;
        }

        // Create timezone data object
        var x = [i.id, ...i.aliases];
        var htt = {
          tzgp: x,
          latitude: lt,
          longitude: lg,
          offset_hr: hr,
          offset_mi: mi,
          offset_se: se,
          offset_ms: ms,
        };

        // Add timezone data to array
        abb.push(htt);
      });

      // Write timezone data to a JSON file
      await writeJson(path.join(process.cwd(), "data/noda.json"), data);
    });

  // Flatten timezone data for writing to JSON files
  const tz = t.flatMap((i) => i);
  await writeJson(path.join(process.cwd(), "data/timezones.json"), tz);

  // Flatten abb array and write to JSON file
  var zz = abb.flatMap((i) => i);
  await writeJson(path.join(process.cwd(), "data/caldata.json"), zz);
}
await noda();
export default noda;
