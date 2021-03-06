class CoffeeBarista {
    makeCoffee(orderMenu) {
        let result = "";

        switch(orderMenu.menu) {
            case "americano":
                result = this.makeAmericano();
                break;
            case "latte":
                result = this.makeLatte();
                break;
            case "juice":
                result = this.makeJuice();
                break;
        }

        return result;
    }

    makeAmericano() {
        return "아메리카노";
    }

    makeLatte() {
        return "라떼"
    }

    makeJuice() {
        return "쥬스"
    }
}