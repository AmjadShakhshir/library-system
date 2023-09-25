export class Cart{
    #products;
    constructor() {
        this.#products = [];
    }
    addProduct(product) {
        /*  check the existance of that product
        - if exist, increase amount
        - if not, add it
        */
        if(this.#checkExistance(product)){
            // increase amount
            // this.#products.find(p => p.id === product.id).amount++;
            this.#products.find(p => p.id === product.id).increaseAmount();
        } else {
            // add it
            this.#products.push(product);
        }
    }
    removeProduct(product) {

    }

    #checkExistance(product){
        return this.#products.find(p => p.id === product.id)
    }
}

