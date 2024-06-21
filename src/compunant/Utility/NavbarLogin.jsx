import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../assets/logo.jpg";
import cart from "../../assets/cart.png";
import user from "../../assets/user.png";
import { useShoppingCart } from "../../compunant/context/ShoppingCartContext";

function Navbarlogin() {
  const handel = () => {
    localStorage.clear();
    window.location.reload();
  };
  const { openCart, cartQuantity } = useShoppingCart();
  return (
    <Navbar expand="lg" className="nav sticky-top">
      <Container>
        <Navbar.Brand href="/">
          <img src={logo} className="img" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-light" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto gap-5">
            <Nav.Link>
              <img className="cart_1" src={cart} onClick={openCart} />
              <span>العربة</span>
              <div className="quantity">{cartQuantity}</div>
            </Nav.Link>
            <Nav.Link href="/register">
              <img onClick={handel} src={user} className="user" />
              <span>دخول</span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbarlogin;
