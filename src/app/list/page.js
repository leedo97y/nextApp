import Image from "next/image";

export default function List() {
  let listData = [
    {
      id: 0,
      img: "/wasabi.jpeg",
      name: "Wasabi",
      price: "120$",
    },
    {
      id: 1,
      img: "/strawberry.jpeg",
      name: "Strawberry",
      price: "80$",
    },
  ];

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
              <div className="productInfo">
                <p className="productName">{item.name}</p>
                <p className="price">{item.price}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
