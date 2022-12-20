const capitalize = require("./capiterlizer");

test("capiterlize progress to return Progress", () => {
  expect(capitalize("germania")).toBe("Progress");
  expect(capitalize("ken")).toBe("Sam");
  expect(capitalize("tom")).toBe("Ben");
});
