const board = document.querySelector(".board");

function createBoard() {
    for(let i = 0; i < 10; i++) {
        for(let j = 0; j < 10; j++) {
            let cell = document.createElement("div");
            cell.classList.add("cell");
            board.appendChild(cell);
            if(i === 0 || i === 9 || j === 0 || j === 9) cell.classList.add("noBackgn");
           
            if( (i - 1) % 2 === 0 && j % 2 === 0) cell.classList.add("black"); 
            if(i % 2 === 0 && j % 2 !== 0) cell.classList.add("black");
            
            if(i === 0 || i === 9) {
                switch (j) {
                    case 1:
                        cell.textContent = "A";
                        break;
                    case 2:
                        cell.textContent = "B";
                        break;
                    case 3:
                        cell.textContent = "C";
                        break;
                    case 4:
                        cell.textContent = "D";
                        break;
                    case 5:
                        cell.textContent = "E";
                        break;
                    case 6:
                        cell.textContent = "F";
                        break;
                    case 7:
                        cell.textContent = "G";
                        break;
                    case 8:
                        cell.textContent = "H";
                        break;
                }
            }
            if(i === 1) {
                switch (j) {
                    case 1:
                        cell.textContent = "Л";
                        break;
                    case 2:
                        cell.textContent = "К";
                        break;
                    case 3:
                        cell.textContent = "С";
                        break;
                    case 4:
                        cell.textContent = "КР";
                        break;
                    case 5:
                        cell.textContent = "Ф";
                        break;
                    case 6:
                        cell.textContent = "С";
                        break;
                    case 7:
                        cell.textContent = "К";
                        break;
                    case 8:
                        cell.textContent = "Л";
                        break;
                }
            }
            if((i === 7 || i === 8) && (j > 0 && j < 9)) cell.classList.add("figureBlack");
            if((i === 2 || i === 7) && (j > 0 && j < 9)) cell.textContent = "П";
            
            if(i === 8) {
                switch (j) {
                    case 1:
                        cell.textContent = "Л";
                        break;
                    case 2:
                        cell.textContent = "К";
                        break;
                    case 3:
                        cell.textContent = "С";
                        break;
                    case 4:
                        cell.textContent = "Ф";
                        break;
                    case 5:
                        cell.textContent = "КР";
                        break;
                    case 6:
                        cell.textContent = "С";
                        break;
                    case 7:
                        cell.textContent = "К";
                        break;
                    case 8:
                        cell.textContent = "Л";
                        break;
                }
            }
            if(j === 0 || j === 9) {
                switch (i) {
                    case 1:
                        cell.textContent = "8";
                        break;
                    case 2:
                        cell.textContent = "7";
                        break;
                    case 3:
                        cell.textContent = "6";
                        break;
                    case 4:
                        cell.textContent = "5";
                        break;
                    case 5:
                        cell.textContent = "4";
                        break;
                    case 6:
                        cell.textContent = "3";
                        break;
                    case 7:
                        cell.textContent = "2";
                        break;
                    case 8:
                        cell.textContent = "1";
                        break;
                }
            }
        }
        
    }
}

createBoard(board);

let basket = document.querySelector(".basket");
let basketResult = document.createElement("div")
basket.appendChild(basketResult);
let userBasket = {
    car: 5,
    fruit: 10,
    shirt: 15
}




let values = Object.values(userBasket);
        function countBasketPrice(array) {
            if(array.length === 0) {
                basketResult.textContent = "Ваша корзина пуста"
            } else {
                let a = 0;
                for(let i = 0; i < array.length; i++) {
                    a += array[i];
                }
                basketResult.textContent = "В Вашей корзине " + (values.length) + " товаров на сумму " + a + " руб"
                return a;
                
            }
            
        }

    let b = countBasketPrice(values);
    