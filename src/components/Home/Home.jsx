import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterByPrice } from "../../features/products/productsSlice";
import Banner from "../Banner/Banner";
import Categories from "../Categories/Categories";
import Poster from "../Poster/Poster";
import Products from "../Products/Products";

export default function Home() {
  const dispatch = useDispatch();

  const {
    products: { list, filtered },
  } = useSelector((state) => state);
  const categories = useSelector((state) => state.categories.list);

  useEffect(() => {
    if (!list.length) return;
    dispatch(filterByPrice(100));
  }, [dispatch, list]);

  return (
    <>
      <Poster />
      <Products products={list} amount={5} title="Trending" />
      <Categories categories={categories} amount={5} title="Worth seeing" />
      <Banner />
      <Products products={filtered} amount={5} title="Less than 100" />
    </>
  );
}
