import { name, price, num } from "./data.js";
import SayHello from "../list/sayHello.js";

export default function Cart() {
  return (
    <div className="cartMain">
      <h1>Cart</h1>
      <SayHello />
      <div className="itemList">
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
      </div>
    </div>
  );
}

function CartItem() {
  return (
    <div className="item">
      <p className="itemName">{name}</p>
      <p className="itemPrice">{price}</p>
      <p className="itemNumber">{num}</p>
    </div>
  );
}
