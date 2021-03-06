class CoffeeEmployee {
    constructor() {
        this.totalPrice = 10000;
        this.barista = new CoffeeBarista();
    }

    order(orderMenu) {
        this.coffeePriceCount(orderMenu.price);
        return this.barista.makeCoffee(orderMenu);
    }

    coffeePriceCount(price) {
        let result = 0;

        
        
    }
}