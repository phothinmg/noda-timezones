import { currentTimeInCity } from "../src/index";

describe("currentTimeInCity", () => {
  it("return date with valid city name", () => {
    const currentTime = currentTimeInCity("Bangkok");
    expect(currentTime).toBeInstanceOf(Date);
  });
  it("return error text with invalid city name", () => {
    const currentTime = currentTimeInCity("UnknowCity");
    expect(currentTime).toEqual(
      "UnknowCity dose not aviable for get current time."
    );
  });
});
