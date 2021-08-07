import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/actions/productActions";
import { Button } from "react-bootstrap";
import Product from "./Product";
import axios from "axios";

const ProductList = () => {
  const products = useSelector((state) => state.allProducts.products);
  const [length, setLength] = useState(0);
  const dispatch = useDispatch();
  const [categoryId, setCategotyId] = useState("aps");
  const [keyword, setKeyword] = useState("iphone");
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
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
  }, [products, page, keyword]);

  return (
    <React.Fragment>
      <div style={{ justifyContent: "center" }}>
        <span style={{ alignContent: "center" }}>
          <input
            type="text"
            placeholder="Enter Keyword"
            onChange={(e) => setSearch(e.target.value)}
            style={{ display: "flex", alignItems: "center" }}
          />
          <Button onClick={() => setKeyword(search)}>Search</Button>
        </span>

        {Object.keys(products).length === 0 ? (
          <h1>...Loading</h1>
        ) : (
          <div className="ui grid container">
            <Product />
          </div>
        )}
        <div className="pagination" style={{ position: "relative" }}>
          <button value={page} onClick={(e) => setPage(page - 1)}>
            &lt; &lt;
          </button>

          <span>Page: {page}</span>
          <button value={page} onClick={(e) => setPage(page + 1)}>
            &gt; &gt;
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProductList;
