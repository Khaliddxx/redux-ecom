import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/actions/productActions";
import Product from "./Product";
import axios from "axios";

const ProductList = () => {
  const product = useSelector((state) => state.product);
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log(err);
      });
    dispatch(setProducts(response.data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log("Product: ", product);

  return (
    <div className="ui grid container">
      <Product />
    </div>
  );
};

export default ProductList;
