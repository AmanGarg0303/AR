import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between p-5 md:p-8">
      <h1 className="text-xl md:text-2xl lg:text-3xl font-bold">
        <Link to="/">FoodSpot</Link>
      </h1>

      <ul className="flex gap-4">
        <li>About</li>

        <li>Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;
