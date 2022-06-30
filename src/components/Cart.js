import React, { useState, useEffect } from "react";
import { Form, ListGroup, Col, Button, Image, Row } from "react-bootstrap";
import { AiFillDelete } from "react-icons/ai";
import Rating from "./Rating";
import { CartState } from "../context/Context";

function Cart() {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  console.log(cart);

  const [total, setTotal] = useState();
  const [items, setItems] = useState();

  useEffect(() => {
    setTotal(
      cart.reduce(
        (acc, curr) => acc + parseInt(curr.price) * parseInt(curr.qty),
        0
      )
    );
    setItems(cart.reduce((acc, curr) => acc + parseInt(curr.qty), 0));
  }, [cart]);



  return (
    <div className="home">
      <div className="productContainer">
        <ListGroup>
          {cart.map((prod) => (
            <ListGroup.Item key={prod.id}>
              <Row>
                <Col md={2}>
                  <Image src={prod.image} alt={prod.name} fluid rounded />
                </Col>
                <Col md={2}>
                  <span>{prod.name}</span>
                </Col>
                <Col md={2}>{prod.price} $</Col>
                <Col md={2}>
                  <Rating rating={prod.ratings} />
                </Col>
                <Col md={2}>
                  {console.log(prod)}
                  <Form.Select
                    aria-label="Select quantity of product"
                    value={prod.qty}
                    onChange={(e) =>
                      dispatch({
                        type: "CHANGE_CART_QTY",
                        payload: {
                          id: prod.id,
                          qty: e.target.value,
                        },
                      })
                    }
                  >
                    {[...Array(prod.inStock).keys()].map((x) => (
                      <option key={x + 1}>{x + 1}</option>
                    ))}
                  </Form.Select>
                </Col>
                <Col md={2}>
                  <Button
                    type="button"
                    variant="light"
                    onClick={() =>
                      dispatch({
                        type: "REMOVE_FROM_CART",
                        payload: prod,
                      })
                    }
                  >
                    <AiFillDelete fontSize="20px" />
                  </Button>
                </Col>
              </Row>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
      <div className="filters summary">
        <span className="title">Subtotal ({items}) items</span>
        <span style={{ fontWeight: 700, fontSize: 20 }}>Total: {total} $</span>
        <Button type="button" disabled={cart.length === 0}>
          Proceed to Checkout
        </Button>
      </div>
    </div>
  );
}

export default Cart;
