import { sayHelloAsync } from "../src/async";

test ("test async function", async () => {
    const result = await sayHelloAsync("yuli")
    expect(result).toBe("hello yuli");
});

test ("test async matchers", async () => {
    await expect(sayHelloAsync("yuli")).resolves.toBe("hello yuli");
    await expect(sayHelloAsync()).rejects.toBe("name is empty");
})