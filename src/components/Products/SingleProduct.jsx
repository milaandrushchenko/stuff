import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { useGetProductQuery } from "../../features/api/apiSlice";
import { getRelatedProducts } from "../../features/products/productsSlice";
import { ROUTES } from "../../utils/routes";
import Product from "./Product";
import Products from "./Products";

export default function SingleProduct() {
  const dispatch = useDispatch();
  const {
    products: { related, list },
  } = useSelector((state) => state);
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, isLoading, isFetching, isSuccess } = useGetProductQuery({ id });
  console.log(data);

  useEffect(() => {
    if (!isFetching && !isLoading && !isSuccess) {
      navigate(ROUTES.HOME);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading, isFetching, isSuccess]);

  useEffect(() => {
    if (!data || !list.length) return;
    dispatch(getRelatedProducts(data.category.id));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, list.length]);

  return (
    <>
      <Product {...data} />
      <Products products={related} amount={5} title="Related products" />
    </>
  );
}
