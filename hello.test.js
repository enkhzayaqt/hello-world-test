const hello = require("./hello");
describe("Hello test", () => {
  test("works", () => {
    expect(hello.hello()).toEqual("Hello World");
  });
});
