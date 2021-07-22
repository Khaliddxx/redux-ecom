import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/actions/productActions";
import Product from "./Product";
import axios from "axios";
import AMAZON_API_KEY from "../.env";

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
      "x-rapidapi-key": AMAZON_API_KEY,
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
