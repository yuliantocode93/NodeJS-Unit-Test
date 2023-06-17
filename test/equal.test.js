test("test toBe", () => {
    const name = "yuli";
    const hello = `Hello ${name}`;

    expect(hello).toBe('Hello yuli');
});

test ("test toEqual", () => {
    let person = {id: "yuli"};
    Object.assign(person, {name: "yuli"});

    expect(person).toEqual({id: "yuli", name:"yuli"});
})