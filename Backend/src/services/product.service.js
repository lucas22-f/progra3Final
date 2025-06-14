import ProductDao from "../DAO/ProductDao.js";

export default {
    getProducts: () => {
        return ProductDao.getAll();
    },
    deleteProduct: (id) => {
        return ProductDao.delete(id)
    }
}