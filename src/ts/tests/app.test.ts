import Cart from "../service/Cart";
import Muvie from "../domain/Muvie";

test("new card should be empty", () => {
  const cart = new Cart();
  expect(cart.items.length).toBe(0);
});

const cart = new Cart();
const muvie = new Muvie(
  2047,
  "Мстители",
  2012,
  "США",
  "Avengers Assemble!",
  "фантастика, боевик",
  "137 мин/02:37",
  100
);
cart.add(muvie);

const anotherMuvie = new Muvie(
  2122,
  "Жилец",
  1976,
  "Франция",
  "...",
  "триллер, драма",
  "126 мин/02:06",
  130
);

cart.add(anotherMuvie);

test("Muvie should add to cart", () => {
  const itemInCart = cart.items[0];
  expect(itemInCart).toEqual(muvie);
});

test("testing the method of calculate amount purchase", () => {
  expect(cart.calculateSum()).toBe(230);
});

test("testing the method of application discount", () => {
  expect(cart.calcSumWithBonus(10)).toBe(207);
});

test("the method removeItem should delete item from cart", () => {
  cart.removeItem(2122);
  expect(cart.items.length).toBe(1);
})
