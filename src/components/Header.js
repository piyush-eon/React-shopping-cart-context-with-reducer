import { FaShoppingCart } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import {
  Badge,
  Button,
  Container,
  Dropdown,
  Nav,
  Navbar,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { CartState } from "../Context";
import "./styles.css";

const Header = () => {
  const { cart, setCart } = CartState();

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
          <Link to="/">Shopping Cart</Link>
        </Navbar.Brand>
        <Nav className="ml-auto">
          <Dropdown alignRight>
            <Dropdown.Toggle variant="success">
              <FaShoppingCart color="white" fontSize="25px" />
              <Badge>{cart.length}</Badge>
            </Dropdown.Toggle>

            <Dropdown.Menu style={{ minWidth: 400 }}>
              {cart.length > 0 ? (
                <>
                  {cart.map((c) => (
                    <span className="cartitem" key={c.key}>
                      <img src={c.image} className="cartItemImg" alt={c.name} />
                      <div className="cartItemDetail">
                        <span>{c.name}</span>
                        <span>₹ {c.price.split(".")[0]}</span>
                      </div>
                      <AiFillDelete
                        fontSize="20px"
                        onClick={() =>
                          setCart(cart.filter((car) => car.id !== c.id))
                        }
                      />
                    </span>
                  ))}
                  <Link to="/cart">
                    <Button style={{ width: "95%", margin: "0 10px" }}>
                      Go To Cart
                    </Button>
                  </Link>
                </>
              ) : (
                <span style={{ padding: 10 }}>Cart is Empty!</span>
              )}
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
