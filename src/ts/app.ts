import Cart from './service/Cart';
import Muvie from './domain/Muvie';   

const cart = new Cart();
console.log(cart.items);

cart.add(new Muvie(2047, "Мстители", 2012, "США", "Avengers Assemble!", "фантастика, боевик", "137 мин/02:37", 100))

console.log(cart.items);