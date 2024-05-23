import { allZonesData } from "../src/index";

describe("allZonesData", () => {
  // Returns an array of time zones with their respective data
  it("should return an array of time zones with their respective data", () => {
    const zonesData = allZonesData();
    expect(Array.isArray(zonesData)).toBe(true);
    expect(zonesData.length).toBeGreaterThan(0);
    expect(zonesData[0]).toHaveProperty("id");
    expect(zonesData[0]).toHaveProperty("aliases");
    expect(zonesData[0]).toHaveProperty("location");
    expect(zonesData[0]).toHaveProperty("offsets");
    expect(zonesData[0]).toHaveProperty("currentOffset");
    expect(zonesData[0]).toHaveProperty("nextTransition");
  });
});
