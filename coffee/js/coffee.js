class Coffee {
    constructor() {
        this.employee = new CoffeeEmployee();
    }

    coffeeMenu() {
        return [
            { menu: "americano", price: 2000 },
            { menu: "latte", price: 2500 },
            { menu: "juice", price: 3000 }
        ]
    }

    order(menu, price) {
        const coffeeMenu = this.coffeeMenu();
        const orderMenu = coffeeMenu.find((coffee) => {
            return coffee.menu === menu;
        });

        return this.employee.order(orderMenu);
    }
}