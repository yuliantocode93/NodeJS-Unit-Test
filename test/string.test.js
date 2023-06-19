test("string", () => {
  const name = "yuli anto";

  expect(name).toBe("yuli anto");
  expect(name).toMatch(/nto/);
});
