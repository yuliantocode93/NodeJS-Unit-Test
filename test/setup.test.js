import { sum } from "../src/sum.js";

beforeAll(() => {
  console.info("Before All");
});

afterAll(() => {
  console.info("After All");
});

beforeEach(() => {
  console.log("before Each");
});

afterEach(() => {
  console.log("after Each");
});

test("first test", () => {
  expect(sum(10, 10)).toBe(20);
  console.info("first test");
});

test("second test", () => {
  expect(sum(10, 10)).toBe(20);
  console.info("second test");
});
