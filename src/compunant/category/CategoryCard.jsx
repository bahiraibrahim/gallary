/* eslint-disable react/prop-types */
import { Card, Container } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import FormatCurrency from "../../pages/cart/FormatCurrency";
import cart from "../../assets/cart-down.png";
import heart from "../../assets/heart.png";
import { useState } from "react";


const CategoryCard = ({ id, title, Price, image,details }) => {
  const [click, setClick] = useState("#022a31");
  console.log(id);
  const myfun = () => {
    if (click === "#022a31") {
      setClick("red");
    } else {
      setClick("#022a31");
    }
  };

  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();

  const quantity = getItemQuantity(id);

  const [showDetails, setShowDetails] = useState(false);
  const handleImageClick = () => {
    setShowDetails(!showDetails);
  };
  return (
    <Container>
      <Card
        id="card"
        className="card-category"
        sm="6"
        xs="8"
        md="4"
        lg="5"
        style={{ width: "100%" }}
      >
        <Card.Img
          variant="top"
          src={image}
          alt={Price}
          style={{ height: "200px", objectFit: "cover" }}
          className="img-card"
          onClick={handleImageClick}
        />
        {showDetails && (
          <div>
            <h5>{details} </h5>
            <p>{Price}</p>
          </div>
        )}
        <Card.Body className="d-flex flex-column">
          <Card.Title className=" mb-4">
            <span className="title ">{title}</span>
            <div>
              <span className="ms-2 text-muted mb-3 mt-2">
                {FormatCurrency(Price)}
              </span>
            </div>
          </Card.Title>
          <div className="mt-auto d-flex justify-content-between">
            <button
              className="w-25 h-50"
              onClick={myfun}
              style={{ backgroundColor: click }}
            >
              <img className="cart_1" src={heart} />
            </button>
            {quantity === 0 ? (
              <button
                className="button-cart-item"
                onClick={() => increaseCartQuantity(id)}
              >
                <img className="cart_1" src={cart} />
              </button>
            ) : (
              <div
                className="d-flex align-items-center flex-column"
                style={{ gap: "0.5rem", marginTop: "-35px" }}
              >
                <div
                  className="d-flex align-items-center justify-content-center"
                  style={{ gap: "0.5rem" }}
                >
                  <button
                    className="button-cart-item"
                    onClick={() => decreaseCartQuantity(id)}
                  >
                    -
                  </button>
                  <span className="fs-5 title">{quantity} in cart</span>
                  <button
                    className="button-cart-item"
                    onClick={() => increaseCartQuantity(id)}
                  >
                    +
                  </button>
                </div>
                <button
                  size="sm"
                  onClick={() => removeFromCart(id)}
                  className="button-cart"
                >
                  Remove
                </button>
              </div>
            )}
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default CategoryCard;
