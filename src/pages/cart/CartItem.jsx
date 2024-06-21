/* eslint-disable react/prop-types */
import { Stack } from "react-bootstrap";
import { useShoppingCart } from "../../compunant/context/ShoppingCartContext";
import storeItems from "../../json/All.json";
import FormatCurrency from "./FormatCurrency";

const CartItem = ({ id, quantity }) => {
  const { removeFromCart, decreaseCartQuantity, increaseCartQuantity } =
    useShoppingCart();
  const item = storeItems.find((i) => i.id == id);

  if (item== null) return null;
  return (
    <>
      <div className="text-muted">
        {FormatCurrency(item.Price)}
      </div>
      <Stack
        direction="horizontal"
        gap={2}
        className="d-flex align-items-center"
      >
        <img
          src={item.image}
          alt="cart-img"
          style={{ width: "125px", height: "75px", objectFit: "cover" }}
        />

        <div className="me-auto">
          <div>
            {item.name}{" "}
            {quantity > 1 && <span className="text-muted">x{quantity}</span>}
          </div>

          <div className="cart-button">
            <button
              className="button-cart-item"
              onClick={() => decreaseCartQuantity(id)}
            >
              -
            </button>
            <button
              className="button-cart-item"
              onClick={() => increaseCartQuantity(id)}
            >
              +
            </button>
          </div>
        </div>
        <div>{FormatCurrency(item.Price * quantity)}</div>
        <button
          size="sm"
          onClick={() => removeFromCart(item.id)}
          className="button-cart-item"
        >
          &times;
        </button>
      </Stack>
    </>
  );
};

export default CartItem;
