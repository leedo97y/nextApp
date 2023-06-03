// import { name, price, num } from "./data.js";
import SayHello from "../list/sayHello.js";

export default function Cart() {
  let cartData = [
    { name: "Tomato", price: "30$", num: 6 },
    { name: "pasta", price: "47$", num: 1 },
    { name: "lemon", price: "22$", num: 2 },
    { name: "pepper", price: "10$", num: 2 },
  ];

  let bannerText = [
    "삼성카드 결제 행사중",
    "롯데카드 결제 행사중",
    "신한카드 포인트 적립 이벤드 진행중",
  ];

  return (
    <div className="cartMain">
      <div className="titleDiv">
        <h1>Cart</h1>
        <Button color="blue" />
      </div>
      <SayHello />
      <div className="itemList">
        {cartData.map((item) => {
          return <CartItem key={item.length} props={item} />;
        })}
      </div>
      {bannerText.map((item) => {
        return <Banner key={item.length} props={item} />;
      })}
    </div>
  );
}

function CartItem({ props }) {
  return (
    <div className="item">
      <p className="itemName">{props.name}</p>
      <p className="itemPrice">{props.price}</p>
      <p className="itemNumber">{props.num}</p>
    </div>
  );
}

function Banner({ props }) {
  return (
    <div className="bannerDiv">
      <p className="bannerText">{props}</p>
    </div>
  );
}

function Button(props) {
  return (
    <>
      <button style={{ background: props.color }} className="redBtn">
        button
      </button>
    </>
  );
}
