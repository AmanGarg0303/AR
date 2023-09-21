import React from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import FeaturedCategories from "../components/FeaturedCategories";
import PopularProducts from "../components/PopularProducts";
import Banner2 from "../components/Banner2";
import Statistics from "../components/Statistics";

const Home = () => {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <Banner />
      <FeaturedCategories />
      <PopularProducts />
      <Banner2 />
      <Statistics />
    </div>
  );
};

export default Home;
