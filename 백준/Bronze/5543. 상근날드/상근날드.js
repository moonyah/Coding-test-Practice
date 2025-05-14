let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let cheapBurgerPrice = Infinity;
for (let i = 0; i < 3; i++) {
  let burgerPrice = Number(input[i]);
  if (cheapBurgerPrice > burgerPrice) {
    cheapBurgerPrice = burgerPrice;
  }
}
let cheapDrinkPrice = Infinity;
for (let i = 3; i < 5; i++) {
  let drinkPrice = Number(input[i]);
  if (cheapDrinkPrice > drinkPrice) {
    cheapDrinkPrice = drinkPrice;
  }
}
console.log(cheapBurgerPrice + cheapDrinkPrice - 50);
