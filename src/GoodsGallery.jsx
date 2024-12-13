import React from "react";
import GoodsCard from "./GoodsCard";

function GoodsGallery() {
  const goods = [
    {
      id: 1,
      image: "https://varus.ua/img/product/300/300/2507408",
      title: "Огірок",
      price: 200,
    },
    {
      id: 2,
      image: "https://varus.ua/img/product/300/300/147011",
      title: "Морква",
      price: 300,
    },
    {
      id: 3,
      image:
        "https://images.silpo.ua/products/300x300/webp/6528553e-9744-4f40-a1f3-97c3c271e1fa.png",
      title: "Груша",
      price: 150,
    },
    {
      id: 4,
      image:
        "https://d3d173w0vohr0k.cloudfront.net/ua-ua/vegetables/1526306904/vinete-1508329352_tmb_tmb.jpg",
      title: "Баклажан",
      price: 400,
    },
    {
      id: 5,
      image: "https://www.dneprunnat.dp.ua/photo/ucf/15zo03.png",
      title: "Помідор",
      price: 350,
    },
    {
      id: 6,
      image:
        "https://img.fozzyshop.com.ua/210845-home_default/luk-repchatyj-zheltyj.jpg",
      title: "Цибуля",
      price: 250,
    },
  ];

  return (
    <div>
      <h1>Галерея товарів</h1>
      {goods.map((item) => (
        <GoodsCard
          key={item.id}
          image={item.image}
          title={item.title}
          price={item.price}
        />
      ))}
    </div>
  );
}

export default GoodsGallery;
