const addCommas = require("./addCommas");

describe("#addCommas", () => {
  test("it is a function", () => {
    expect(typeof addCommas).toBe("function");
  });
  test ("10 === 10", () => {
    const num = addCommas(10);
    expect(num).toEqual("10");
  });
  test("1000 === 1,000", () => {
    const num = addCommas(1000);
    expect(num).toEqual("1,000");
  });
  test("10000 === 10,000", () => {
    const num = addCommas(10000);
    expect(num).toEqual("10,000");
  })
  test("1000000 === 1,000,000", () => {
    const num = addCommas(1000000);
    expect(num).toEqual("1,000,000");
  })
});
