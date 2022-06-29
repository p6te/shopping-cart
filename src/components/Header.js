import React from "react";
import { Navbar, Container, Nav, Form, Dropdown, Badge } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Navbar bg="dark" variant="dark" style={{ height: 80 }}>
      <Container className="d-flex ">
        <Navbar.Brand>
          <Link to="/">Shopping card</Link>
        </Navbar.Brand>

        <Navbar.Text className="search flex-fill" style={{ maxWidth: 700 }}>
          <Form.Control
            placeholder="Search a product"
            className="m-auto w-100 d-inline-block"
            aria-label="Search"
          />
        </Navbar.Text>

        <Nav>
          <Dropdown className="m-3 " align="end">
            <Dropdown.Toggle variant="success">
              <FaShoppingCart color="white" fontSize="25px" />
              <Badge className="bg-transparent">13</Badge>
            </Dropdown.Toggle>

            <Dropdown.Menu style={{ minWidth: 370 }} className="mt-2">
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;
