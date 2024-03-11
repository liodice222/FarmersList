const Product = require('./Product')

class Cart {
    constructor() {
        this.products = [];
        this.total = 0;
    }
    addProduct(newProduct) {
        this.products.push(newProduct);
        this.total += newProduct.price; 
    }
    removeProduct(oldProduct){
       let num = this.products.indexOf(oldProduct)
       this.total -= oldProduct.price;
       this.products.splice(num, 1);
      
    }
}

// QUICK TESTS

// let cart1 = new Cart();
// let prod = new Product("dog food", 2, "food for dog")
// cart1.addProduct(prod);
// let prod2 = new Product("cat food", 3, "food for cat")
// cart1.addProduct(prod2);
// console.log(cart1);
// console.log(cart1);
// cart1.removeProduct(prod);
// console.log(cart1);
module.exports = Cart