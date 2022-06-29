import React from "react";
import { CartState } from "../context/Context";
import SingleProduct from "./SingleProduct";

function Home() {
  const {
    state: { products },
  } = CartState();

  console.log(products);
  return (
    <div className="home">
      {/* <Filters/> */}
      <div className="productContainer">
        {products.map((prod) => (
          <SingleProduct prod={prod} key={prod.id} />
        ))}
      </div>
    </div>
  );
}

export default Home;
