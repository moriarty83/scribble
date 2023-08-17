const { helloWorld } = require("../../main");

test('test hello world', () => {
    expect(helloWorld("world")).toBe("hello world!");
  });