const Product = require('./Product')

class Cart {
    constructor(prodcuts, total) {
        this.products = [];
        this.total = 0;
    }
    addProduct(newProduct) {
        this.products.push(newProduct);
        total += newProduct.price; 
    }
    removeProduct(oldProduct){
       num = this.products.indexOf(oldProduct)
       this.products.splice(num, 1)
    }
}