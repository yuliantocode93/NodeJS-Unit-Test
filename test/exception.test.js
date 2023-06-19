// import { MyException, callMe } from "../src/exception.js"

// test ("exception", () => {
//     expect(() => callMe("yuli")).toThrow();
//     expect(() => callMe("yuli")).toThrow(MyException);
//     expect(() => callMe("yuli")).toThrow("Ups my excpetions happends")
// });

import { MyException, callMe } from "../src/exception.js";

test("exception", () => {
  expect(() => callMe("yuli")).toThrow();
  expect(() => callMe("yuli")).toThrow(MyException);
  expect(() => callMe("yuli")).toThrow("Ups my exceptions happends");
});

test("exception not happens", () => {
  expect(callMe("kwon")).toBe("OK");
})
