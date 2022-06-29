import React from "react";
import { CartState } from "../context/Context";
import SingleProduct from "./SingleProduct";
import Filters from "./Filters";

function Home() {
  const {
    state: { products },
  } = CartState();

  console.log(products);
  return (
    <div className=" d-flex">
      <Filters />
      <div className="w-78 p-5 d-flex flex-row justify-content-around  flex-wrap ">
        {products.map((prod) => (
          <SingleProduct prod={prod} key={prod.id} />
        ))}
      </div>
    </div>
  );
}

export default Home;
