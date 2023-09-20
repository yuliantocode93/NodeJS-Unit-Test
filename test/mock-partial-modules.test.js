import { getAllProducts } from "../src/database";
import { productService } from "../src/product-service";

jest.mock("../src/database.js", () => {
    const originalModule = jest.requireActual("../src/database.js");

    return {
        __esModule: true,
        ...originalModule,
        getAllProducts: jest.fn(),
        // getProductById: jest.fn()
    }
});

test.failing("mock modules getProductById", () => {
  getProductById.mockImplementation((id) => {
    return {
      id: id,
      name: "Product Mock",
    };
  });
  const product = productService.findById(1);

  expect(product).toEqual({
    id: 1,
    name: "Product Mock",
  });
});

test("mock modules getAllProducts", () => {
  const products = [
    {
      id: 1,
      name: "Product Mock",
    },
    {
      id: 2,
      name: "Product Mock",
    },
  ];
  getAllProducts.mockImplementation(() => {
    return products;
  });
  expect(productService.findAll()).toEqual(products);
});