import React from "react";
import { CartState } from "../context/Context";

function Home() {
  const {
    state: { products },
  } = CartState();


  console.log(products);
  return <div className='home'>
    {/* <Filters/> */}
    <div className='productContainer'>
        
    </div>
  </div>;
}

export default Home;
