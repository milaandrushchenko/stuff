import React from "react";
import { useSelector } from "react-redux";
import Banner from "../Banner/Banner";
import Categories from "../Categories/Categories";
import Poster from "../Poster/Poster";
import Products from "../Products/Products";

export default function Home() {
  const products = useSelector((state) => state.products.list);
  const categories = useSelector((state) => state.categories.list);

  return (
    <>
      <Poster />
      <Products products={products} amount={5} title="Trending" />
      <Categories categories={categories} amount={5} title="Worth seeing" />
      <Banner />
    </>
  );
}
