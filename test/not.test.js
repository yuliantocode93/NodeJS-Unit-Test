test ("string.not", () => {
    const name = "yuli anto";

    expect(name).not.toBe("kwon");
    expect(name).not.toEqual("yoona");
    expect(name).not.toMatch(/eunha/);
});

test("number.not", () => {
    const value = 2 + 2;

    expect(value).not.toBeGreaterThan(6);
    expect(value).not.toBeLessThan(3);
    expect(value).not.toBe(10);
});