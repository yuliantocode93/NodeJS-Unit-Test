test ("array", () => {
    const names = ["yuli", "anto"];
    expect(names).toEqual(["yuli", "anto"]);
    expect(names).toContain("yuli");
});

test("array object", () => {
    const persons = [
        {
            name : "yuli"
        },
        {
            name: "echo"
        }
    ];
    expect(persons).toContainEqual({
        name: "yuli"
    })

})