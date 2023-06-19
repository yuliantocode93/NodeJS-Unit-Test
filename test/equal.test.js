test("test toBe", () => {
  const name = "yuli";
  const hello = `hello ${name}`;

  expect(hello).toBe("hello yuli");
});

test("test toEqual", () => {
  let person = { id: "yuli" };
  Object.assign(person, { name: "yuli" });

  expect(person).toEqual({ id: "yuli", name: "yuli" });
});
