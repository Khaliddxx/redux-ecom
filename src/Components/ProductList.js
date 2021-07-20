import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/actions/productActions";
import Product from "./Product";
import axios from "axios";

const ProductList = () => {
  const product = useSelector((state) => state.product);
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const response = await axios.get(options).catch((err) => {
      console.log(err);
    });
    dispatch(setProducts(response.data));
  };

  const options = {
    method: "GET",
    url: "https://amazon24.p.rapidapi.com/api/product",
    params: {
      country: "US",
      keyword: "iphone",
      categoryID: "aps",
      page: "1",
    },

    headers: {
      "x-rapidapi-key": "8ab334a608msha2bf9b0d77b8a35p14c590jsn98c0a053c6d7",
      "x-rapidapi-host": "amazon24.p.rapidapi.com",
    },
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
