import React, { Fragment, useState } from "react";
import Image1 from "../../assets/Album1.png";
import Image2 from "../../assets/Album2.png";
import Image3 from "../../assets/Album3.png";
import Image4 from "../../assets/Album4.png";
import Image5 from "../../assets/Shirt.png";
import Image6 from "../../assets/Cofee.png";
import { Card, Button } from "react-bootstrap";
import "./Hero.css";

const Hero = (props) => {
  const [enterdItem, setEnteredItem] = useState(false);
  const Products = [
    { id: "m1", name: "Album1", price: 12.99 },
    { id: "m2", name: "Album2", price: 14.99 },
    { id: "m3", name: "Album3", price: 9.99 },
    { id: "m4", name: "Album4", price: 19.99 },
    { id: "m5", name: "Shirt", price: 19.99 },
    { id: "m6", name: "Cofee", price: 6.99 },
  ];
  let enteredAmount = 0;
  const firstHandler = () => {
    enteredAmount += 1;
    setEnteredItem(false);
    //Products[0];

    props.onAddCart(Products[0], enteredAmount);
  };
  const secondHandler = (event) => {
    setEnteredItem(false);

    enteredAmount += 1; //Products[1]
    props.onAddCart(Products[1], enteredAmount);
  };
  const thirdHandler = (event) => {
    setEnteredItem(false);

    enteredAmount += 1; //Products[2]
    props.onAddCart(Products[2], enteredAmount);
  };
  const forthHandler = (event) => {
    setEnteredItem(false);

    enteredAmount += 1; //Products[3]
    props.onAddCart(Products[3], enteredAmount);
  };
  const fifthHandler = (event) => {
    setEnteredItem(false);

    enteredAmount += 1; //Products[4]
    props.onAddCart(Products[4], enteredAmount);
  };
  const sixthHandler = (event) => {
    setEnteredItem(false);
    enteredAmount += 1; //Products[5]
    props.onAddCart(Products[5], enteredAmount);
  };
  return (
    <Fragment>
      <div className="heading">
        <h1>Music</h1>
      </div>

      <div className="container">
        <Card>
          <Card.Header>Album1</Card.Header>
          <Card.Body>
            <img src={Image1} alt="Imag" />
            <Card.Text>12.99</Card.Text>
            <Button value={enterdItem} onClick={firstHandler} variant="primary">
              Add to cart
            </Button>
          </Card.Body>
        </Card>

        <div>
          <Card>
            <Card.Header>Album1</Card.Header>
            <Card.Body>
              <img src={Image2} alt="Imag" />
              <Card.Text>14.99</Card.Text>
              <Button
                value={enterdItem}
                onClick={secondHandler}
                variant="primary"
              >
                Add to cart
              </Button>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card>
            <Card.Header>Album3</Card.Header>
            <Card.Body>
              <img src={Image3} alt="Imag" />
              <Card.Text>3.99</Card.Text>
              <Button
                value={enterdItem}
                onClick={thirdHandler}
                variant="primary"
              >
                Add to cart
              </Button>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card>
            <Card.Header>Album4</Card.Header>
            <Card.Body>
              <img src={Image4} alt="Imag" />
              <Card.Text>19.99</Card.Text>
              <Button
                value={enterdItem}
                onClick={forthHandler}
                variant="primary"
              >
                Add to cart
              </Button>
            </Card.Body>
          </Card>
        </div>
      </div>
      <div className="heading">
        <h1>MERCH</h1>
      </div>
      <div className="container1">
        <Card>
          <Card.Header>shirt</Card.Header>
          <Card.Body>
            <img src={Image5} alt="Imag" width="300px" height="300px" />
            <Card.Text>19.99</Card.Text>
            <Button value={enterdItem} onClick={fifthHandler} variant="primary">
              Add to cart
            </Button>
          </Card.Body>
        </Card>

        <Card>
          <Card.Header>cofee</Card.Header>
          <Card.Body>
            <img src={Image6} alt="Imag" width="300px" height="300px" />
            <Card.Text>6.99</Card.Text>
            <Button value={enterdItem} onClick={sixthHandler} variant="primary">
              Add to cart
            </Button>
          </Card.Body>
        </Card>
      </div>
<div className="container2">
      <Card>
        <Card.Body>
          <Button value={enterdItem} onClick={sixthHandler} variant="primary">
            see cart
          </Button>
        </Card.Body>
      </Card>
      
      </div>
    </Fragment>
  );
};

export default Hero;
