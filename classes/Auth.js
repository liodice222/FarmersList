const Cart = require("./Cart")
const Customer = require("./Customer")
class Auth {
    constructor(){
        this.customers = [];

    }
    register(name, email, shippingAddress){
        let customer = new Customer(name, email, shippingAddress);
        this.customers.push(customer);
    }
    login(email){
        let customer;
        for (customer in this.customers){
            if (this.customers[customer].email === email){
                return this.customers[customer];
            } else return null;
        }
    }
}

module.exports = Auth