// import { UserRepository } from "../src/user-repository";
// import { UserService } from "../src/user-service";

// const repository = new UserRepository();
// const service = new UserService(repository);

// test("test mock partial class findById", () => {
//   const user = {
//     id: 1,
//     name: "yuli",
//   };

//   const findByIdMock = jest.spyOn(repository, "findById");
//   findByIdMock.mockReturnValueOnce(user);

//   expect(service.findById(1)).toEqual(user);
//   expect(findByIdMock).toHaveBeenCalled();
//   expect(findByIdMock).toHaveBeenCalledWith(1);
//   expect(repository.findById).toHaveBeenCalled();
//   expect(repository.findById).toHaveBeenCalledWidth(1);
// });

// test.failing("test mock partial findAll", () => {
//   service.findAll();
// });




import { UserRepository } from "../src/user-repository";
import { UserService } from "../src/user-service";

const repository = new UserRepository();
const service = new UserService(repository);

test("test mock partial class findById", () => {
  const user = {
    id: 1,
    name: "yuli",
  };

  const findByIdMock = jest.spyOn(repository, "findById");
  findByIdMock.mockReturnValueOnce(user);

  expect(service.findById(1)).toEqual(user);
  expect(findByIdMock).toHaveBeenCalled();
  expect(findByIdMock).toHaveBeenCalledWith(1);
  expect(repository.findById).toHaveBeenCalled();
  expect(repository.findById).toHaveBeenCalledWith(1); // Corrected the typo here
});

test("test mock partial findAll", () => {
  const findAllMock = jest.spyOn(repository, "findAll");
  findAllMock.mockReturnValueOnce([]); // You can specify the return value as needed

  service.findAll();

  expect(findAllMock).toHaveBeenCalled();
});
