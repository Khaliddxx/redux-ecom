import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/actions/productActions";
import Product from "./Product";
import axios from "axios";

const ProductList = () => {
  const product = useSelector((state) => state.product);
  const [length, setLength] = useState(0);
  const dispatch = useDispatch();
  const [categoryId, setCategotyId] = useState("aps");
  const [keyword, setKeyword] = useState("iphone");
  const [page, setPage] = useState(1);
  let flag = true;

  const fetchProducts = async () => {
    const options = {
      method: "GET",
      url: "https://amazon24.p.rapidapi.com/api/product",
      params: {
        country: "US",
        keyword: keyword,
        categoryID: categoryId,
        page: page,
      },

      headers: {
        "x-rapidapi-key": process.env.REACT_APP_AMAZON_API_KEY,
        "x-rapidapi-host": "amazon24.p.rapidapi.com",
      },
    };

    const response = await axios.request(options).catch((err) => {
      console.log(err);
    });

    dispatch(setProducts(response.data.docs));
  };

  useEffect(() => {
    fetchProducts();
    flag = false;
  }, [product]);

  return (
    <React.Fragment>
      <input
        type="text"
        placeholder="Enter Keyword"
        onChange={(e) => setKeyword(e.target.value)}
        style={{ display: "flex", alignItems: "center" }}
      />

      {/* {Object.keys(product).length === 0 ? (
        <h1>...Loading</h1>
      ) : ( */}
      <div className="ui grid container">
        <Product />
      </div>
      {/* )} */}
      <div className="pagination" style={{ position: "relative" }}>
        <button value={page} onClick={(e) => setPage(page - 1)}>
          &lt; &lt;
        </button>

        <span>Page: {page}</span>
        <button value={page} onClick={(e) => setPage(page + 1)}>
          &gt; &gt;
        </button>
      </div>
    </React.Fragment>
  );
};

export default ProductList;
