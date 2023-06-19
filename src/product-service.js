import { getAllProducts, getProductById } from "./database";

export class productService {
    static findById(id) {
        return getProductById(id);
    }

    static findAll() {
        return getAllProducts();
    }
}

