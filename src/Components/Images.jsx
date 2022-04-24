import React, { useState } from "react";
import Practice from "./Practice";
import Sales from "./Sales";

export default function Images() {
  const image = {
    img: "https://www.picsum.photos/400",
    description: "Bonanza bags, pure leather",
    price: 300,
  };
  //  const images = [
  //     {
  //         img: "https://www.picsum.photos/400",
  //         description: "Bonanza bags, pure leather",
  //         price: 300
  //     },
  //     {
  //         img: "https://www.picsum.photos/400",
  //         description: "Bonanza bags, pure leather",
  //         price: 300
  //     },
  //     {
  //         img: "https://www.picsum.photos/400",
  //         description: "Bonanza bags, pure leather",
  //         price: 300
  //     }
  //]
  return (
    <div>
      <Sales img={image.img} des={image.description} price={image.price} />
    </div>
  );
}
