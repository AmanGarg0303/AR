import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="flex flex-col gap-5">
        <button className="bg-blue-400 rounded-md px-3 py-2 text-white text-lg hover:bg-blue-500">
          <Link to="/product/1">See the car in 3d</Link>
        </button>

        <br />

        <button className="bg-blue-400 rounded-md px-3 py-2 text-white text-lg hover:bg-blue-500">
          <Link to="/product/2">See the chair in 3d</Link>
        </button>
      </div>
    </div>
  );
};

export default Home;
