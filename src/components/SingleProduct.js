import { Card, Button } from "react-bootstrap";
import { CartState } from "../Context";

const SingleProduct = ({ prod }) => {
  const { cart, setCart } = CartState();

  return (
    <div className="products">
      <Card>
        <Card.Img variant="top" src={prod.image} alt={prod.name} />
        <Card.Body>
          <Card.Title>{prod.name}</Card.Title>
          <Card.Subtitle style={{ paddingBottom: 10 }}>
            ₹ {prod.price.split(".")[0]}
          </Card.Subtitle>

          {cart.includes(prod) ? (
            <Button
              variant="danger"
              onClick={() => setCart(cart.filter((c) => c.id !== prod.id))}
            >
              Remove from Cart
            </Button>
          ) : (
            <Button
              onClick={() => setCart([...cart, prod])}
              disabled={!prod.inStock}
            >
              {!prod.inStock ? "Out of Stock" : "Add to Cart"}
            </Button>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

export default SingleProduct;
