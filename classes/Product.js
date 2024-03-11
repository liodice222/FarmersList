class Product {
    constructor(name, price, description, inStock) {
        this.name = name;
        this.price = price;
        this.description = description;
        this.inStock = true;
    }
    display(){
        return "Name: ${NAME}, Price: ${PRICE}, Description: ${DESCRIPTION}"
    }
}

module.exports = Product
