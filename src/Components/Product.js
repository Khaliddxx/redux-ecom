import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Product = () => {
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
    const { id, product_title, product_main_image_url, app_sale_price } =
      product;
    return (
      <div className="four wide column" key={id}>
        <Link to={`/product/${id}`}>
          <div className="ui link cards">
            <div className="card" style={{ height: "600px" }}>
              <div className="image" style={{ content: "fit" }}>
                <img src={product_main_image_url} alt={product_title} />
              </div>
              <div className="content">
                <div className="header">{product_title}</div>
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
