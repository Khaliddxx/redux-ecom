import React from "react";
import { Container } from "react-bootstrap";

const Home = () => {
  return (
    <div
      className="container"
      style={{
        textAlign: "center",
        height: "",
        margin: "auto",
        padding: "200px 0",

        backgroundColor: "#541D29",
        background:
          "linear-gradient(to right bottom, rgba(250,0,0,0.5),transparent)",
      }}
    >
      <h1>Redux Shop</h1>
      <h5>A store managing states by Redux.</h5>
      <i class="fas fa-door-open"></i>
    </div>
  );
};

export default Home;
