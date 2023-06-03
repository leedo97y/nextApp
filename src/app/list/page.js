"use client";

import Image from "next/image";
import { useState } from "react";

export default function List() {
  let listData = [
    {
      id: "0",
      img: "/wasabi.jpeg",
      name: "Wasabi",
      price: "120$",
    },
    {
      id: "1",
      img: "/strawberry.jpeg",
      name: "Strawberry",
      price: "80$",
    },
  ];

  let [num, setNum] = useState([1, 1]);

  return (
    <div className="foodMain">
      <p className="listTitle">상품목록</p>
      <div className="foodCards">
        {listData.map((item) => {
          return (
            <div className="food" key={item.id}>
              <Image
                className="productImg"
                src={item.img}
                alt="product image"
                width={50}
                height={50}
              />
              <div className="info">
                <div className="productInfo">
                  <p className="productName">{item.name}</p>
                  <p className="price">{item.price}</p>
                </div>

                <div className="addDiv">
                  <button
                    onClick={() => {
                      let copy = [...num];
                      copy[item.id]--;
                      setNum(copy);
                    }}
                    className="addBtn"
                  >
                    -
                  </button>
                  <span>{num[item.id]}</span>
                  <button
                    onClick={() => {
                      let copy = [...num];
                      copy[item.id]++;
                      setNum(copy);
                    }}
                    className="addBtn"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
