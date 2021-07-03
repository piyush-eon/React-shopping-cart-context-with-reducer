import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const Filters = () => {
  const [rating, setRating] = useState(0);

  return (
    <div className="filters">
      <span className="title">Filter Products</span>
      <span>
        <Form.Check
          inline
          label="Ascending"
          name="group1"
          type="radio"
          id={`inline-1`}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Descending"
          name="group1"
          type="radio"
          id={`inline-2`}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Include Out of Stock"
          name="group1"
          type="checkbox"
          id={`inline-3`}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Fast Delivery Only"
          name="group1"
          type="checkbox"
          id={`inline-4`}
        />
      </span>
      <span>
        <label style={{ paddingRight: 10 }}>Rating: </label>
        {[...Array(5)].map((_, i) => (
          <span
            key={i}
            onClick={() => setRating(i + 1)}
            style={{ cursor: "pointer" }}
          >
            {rating > i ? (
              <AiFillStar fontSize="20px" />
            ) : (
              <AiOutlineStar fontSize="20px" />
            )}
          </span>
        ))}
      </span>
      <Button variant="light">Clear Filters</Button>
    </div>
  );
};

export default Filters;
