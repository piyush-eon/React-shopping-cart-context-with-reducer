import { Button } from "react-bootstrap";

const Filters = () => {
  return (
    <div className="filters">
      <span className="title">Filters Products</span>
      <span>
        <input type="radio" id="ascending" name="sort" value="ascending" />
        <label htmlFor="ascending">Ascending</label>
      </span>
      <span>
        <input type="radio" id="descending" name="sort" value="descending" />
        <label htmlFor="descending">Descending</label>
      </span>
      <span>
        <input type="checkbox" id="stock" name="stock" value="Bike" />
        <label htmlFor="stock">Include Out of Stock</label>
      </span>
      <span>
        <input type="checkbox" id="delivery" name="delivery" value="Bike" />
        <label htmlFor="delivery">Fast Delivery Only</label>
      </span>
      <Button variant="light">Clear Filters</Button>
    </div>
  );
};

export default Filters;
