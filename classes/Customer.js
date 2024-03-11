const Cart = require("./Cart");
const Product = require("./Product")

class Customer {
    constructor(name, email, shippingAddress){
        this.name = name;
        this.email = email;
        this.shippingAddress = shippingAddress;
        this.orderHistory = []
    }
    addToOrderHistory(cart){
        this.orderHistory.push(cart);
    }

}

module.exports = Customer