import React from "react";
import { Card, Button } from "react-bootstrap";
import Rating from "./Rating";
import { CartState } from "../context/Context";

function SingleProduct({ prod }) {
  const {
    state: { cart },
    dispatch,
  } = CartState();
  return (
    <div className="products">
      <Card>
        <Card.Img variant="top" src={prod.image} alt={prod.name} />
        <Card.Body>
          <Card.Title>{prod.name}</Card.Title>
          <Card.Subtitle className="pb-3">
            <span>{prod.price.split(".")[0]} $</span>
            {prod.fastDelivery ? (
              <div>Fast delivery</div>
            ) : (
              <div> 5 days delivery</div>
            )}
          </Card.Subtitle>
          <Rating rating={prod.ratings} />

          {cart.some((p) => p.id === prod.id) ? (
            <Button
              onClick={() =>
                dispatch({
                  type: "REMOVE_FROM_CART",
                  payload: prod,
                })
              }
              variant="danger"
            >
              Remove from cart
            </Button>
          ) : (
            <Button
              onClick={() =>
                dispatch({
                  type: "ADD_TO_CART",
                  payload: prod,
                })
              }
              variant="primary"
              disabled={prod.inStock}
            >
              {prod.inStock ? "Out of stock" : "Add to cart"}
            </Button>
          )}
        </Card.Body>
      </Card>
    </div>
  );
}

export default SingleProduct;
