import { sayHello } from "../src/sayHello";

test("sayHello success", () => {
  expect(sayHello("yuli")).toBe("Hello yuli");
});
test.failing("sayHello error", () => {
  sayHello(null);
});

test("sayHello error matcher", () => {
  expect(() => sayHello(null)).toThrow();
});
