import { getBalance } from "../src/async.js";

test("mock async function", async () => {
  const from = jest.fn();
  from.mockResolvedValueOnce(1000);

  await expect(getBalance("yuli", from)).resolves.toEqual({
    name: "echo",
    balance: 1000,
  });

  expect(from.mock.calls.length).toBe(1);
  await expect(from.mock.results[0].value).toBe(1000);
});

test.failing("mock async function rejected", async () => {
  const from = jest.fn();
  from.mockResolvedValueOnce(new Error("Ups"));

  await getBalance("yuli", from);
});

test("mock async function error matchers", async () => {
  const from = jest.fn();
  from.mockResolvedValueOnce("rejected");

 await expect(getBalance("yuli", from)).rejects.toBe("Rejected");
});
