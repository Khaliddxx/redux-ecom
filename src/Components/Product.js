import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Product = () => {
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
    const {
      product_id,
      product_title,
      product_main_image_url,
      app_sale_price,
    } = product;
    return (
      <div className="four wide column" key={product_id}>
        <Link to={`/product/${product_id}`}>
          <div className="ui link cards">
            <div
              className="card"
              style={{ height: "700px", borderRadius: "20px" }}
            >
              <div className="image" style={{ content: "fill" }}>
                <img src={product_main_image_url} alt={product_title} />
              </div>
              <div className="content">
                <div className="header" style={{ bottom: "0px" }}>
                  {product_title}
                </div>
                <div className="meta price">$ {app_sale_price}</div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  });
  return <>{renderList}</>;
};

export default Product;
