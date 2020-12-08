class IdManager {
    constructor() {
        this.currentId = 0;
    }
    getId() {
        return this.currentId++;
    }
}

class Good {
    constructor(id, name, price) {
    this.id = id,
    this.name = name,
    this.price = price
    }

    getElement(listener) {
        const cardEl = document.createElement("div");
        cardEl.classList.add("card");

        const headerEl = document.createElement("h2");
        headerEl.textContent = this.name;

        const priceEl = document.createElement("p");
        priceEl.classList.add("price");
        priceEl.textContent = this.price;

        cardEl.appendChild(headerEl);
        cardEl.appendChild(priceEl);

        cardEl.addEventListener("click", () => {
            listener(this.id);
        });

        return cardEl;

    }
}


class Goods {
    constructor(goodsList) {
        this._store = goodsList,
        this.cart = new Cart(),
        this.idManager = new IdManager(),
        this.render()
    }

    buy(id) {
        const good = this._store.find((el) => el.id == id);
        if(good) {
            this.cart.add(
                new Good(this.idManager.getId, good.name, good.price)
            );
        }
    }

    render() {
        const goodsEl = document.querySelector("#goods");
        this._store.forEach(good => {
            goodsEl.appendChild(good.getElement(this.buy.bind(this)))
        });
    }
}

class Cart {
    constructor() {
        this.idManager = new IdManager();
        this.cartEl = document.querySelector("#cart");
        this._store = [];
        this.render();
    }

    add(good) {
        this._store.push({id: this.idManager.getId(), ...good});
        this.render();
    }

    delete(id) {
        this._store = this._store.filter((el) => el.id !== id);
    }

    getPrice() {
        return this._store.reduce((total, good) => total + good.price, 0);
    }

    render(cart) {
        this.cartEl.textContent = "";
        const totalEl = document.createElement("p");
        totalEl.textContent = `В корзине ${this._store.length} товаров на сумму ${this.getPrice(this._store)}`;
        this.cartEl.appendChild(totalEl);
        console.log(this._store);
    }
}






const goods = new Goods([
    new Good(0, "RoyalCanin", 200),
    new Good(1, "Go!", 300),
    new Good(2, "Acana", 400)
])