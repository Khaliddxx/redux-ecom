import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectedProduct,
  removeSelectedProduct,
} from "../redux/actions/productActions";

const ProductDetails = () => {
  const product = useSelector((state) => state.product);
  const { product_id, product_title, product_main_image_url, app_sale_price } =
    product;
  const { productId } = useParams();
  const dispatch = useDispatch();

  const fetchProductDetail = async () => {
    const options = {
      method: "GET",
      url: `https://amazon24.p.rapidapi.com/api/product/${productId}`,
      params: {
        country: "US",
      },

      headers: {
        "x-rapidapi-key": process.env.REACT_APP_AMAZON_API_KEY,
        "x-rapidapi-host": "amazon24.p.rapidapi.com",
      },
    };

    const response = await axios.request(options).catch((err) => {
      console.log(err);
    });

    console.log(response.data);
    dispatch(selectedProduct(response.data));
  };

  useEffect(() => {
    fetchProductDetail();
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, []);

  return (
    <div className="ui grid container">
      {Object.keys(product).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <div className="ui placeholder segment">
          <div className="ui two column stackable center aligned grid">
            <div className="ui vertical divider">AND</div>
            <div className="middle aligned row">
              <div className="column lp">
                <img className="ui fluid image" src={product_main_image_url} />
              </div>
              <div className="column rp">
                <h1>{product_title}</h1>
                <h2>
                  <a className="ui teal tag label">${app_sale_price}</a>
                </h2>
                <h3 className="ui brown block header">{product_id}</h3>
                <p>{}</p>
                <div className="ui vertical animated button" tabIndex="0">
                  <div className="hidden content">
                    <i className="shop icon"></i>
                  </div>
                  <div className="visible content">Add to Cart</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
