const repository = new UserRepository();
const srvice = new UserService(repository);

test("test mock partial class findById", () => {
  const user = {
    id: 1,
    name: "yuli",
  };

  const findByIdMock = jest.spyOn(repository, "findById");
  findByIdMock.mockReturnValue(user);

  expect(service.findById(1)).toEqual(user);
  expect(findByIdMock).toHaveBeenCalled();
  expect(findByIdMock).toHaveBeenCalledWith(1);
  expect(repository.findById).toHaveBeenCalled();
  expect(repository.findById).toHaveBeenCalledWidth(1);
});

test.failing("test mock partial findAll", () => {
  service.findAll();
});
