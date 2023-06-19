import { sayHelloAsync } from "../src/async.js";

test.concurrent("concurrent 1", async () => {
  await expect(sayHelloAsync("yuli")).resolves.toBe("Hello Yuli");
});
test.concurrent("concurrent 2", async () => {
  await expect(sayHelloAsync("yuli")).resolves.toBe("Hello Yuli");
});
test.concurrent("concurrent 3", async () => {
  await expect(sayHelloAsync("yuli")).resolves.toBe("Hello Yuli");
});
