import React from "react";
import { data } from "../data/data";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <div>
      {data.map((d) => (
        <div key={d.id}>
          <Link to={`/product/${d.id}`}>
            <div className="my-5 px-3">
              <img src={d.imgUrl} alt={d.title} className="w-96" />

              <h2 className="font-medium text-center">{d.title}</h2>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Products;
