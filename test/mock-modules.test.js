import { getAllProducts, getProductById } from "../src/database";
import { productService } from "../src/product-service";

jest.mock("../src/database.js");

test ("mkock modules getProductById", () => {
    getProductById.mockImplementation((id) => {
        return {
            id: id,
            name: "Product Mock"
        }
    });
    const product = productService.findById(1);

    expect(product).toEqual({
        id: 1,
        name: "Product Mock"
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