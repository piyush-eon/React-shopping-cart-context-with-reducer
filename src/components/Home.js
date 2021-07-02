import { CartState } from "../Context";
import Filters from "./Filters";
import SingleProduct from "./SingleProduct";

const Home = () => {
  const { products } = CartState();

  return (
    <div className="home">
      <Filters />
      <div className="productContainer">
        {products.map((prod) => (
          <SingleProduct prod={prod} key={prod.id} />
        ))}
      </div>
    </div>
  );
};

export default Home;
