const stringLength = require("./strLength");

test(" 1 character long and not longer than 10 characters", () => {
  expect(stringLength("Germania")).not.toBe(6);
  expect(stringLength("dd")).toBeGreaterThanOrEqual(1);
  expect(stringLength("tom")).toBeGreaterThan(2);
  expect(stringLength("Germania")).toBeLessThanOrEqual(8);
});
