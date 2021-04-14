import products from './products.js'

export default {
    getProducts: () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(products);
            }, 500);
        });
    },
    products: (action, productId) => {
        return new Promise((resolve, ) => {
            setTimeout(() => {
                resolve(productId);
            }, 100);
        });
    }
}