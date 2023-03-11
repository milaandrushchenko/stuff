import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Sidebar from "../Sidebar/Sidebar";
import { useDispatch } from "react-redux";
import { getCategories } from "../../features/categories/categoriesSlice";

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  return (
    <div className="app">
      <Header />
      <div className="container">
        <Sidebar />
        <Outlet />
      </div>

      <Footer />
    </div>
  );
}
