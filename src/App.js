
import logo from './logo.svg';
import './App.css';

import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./Components/Header";
import ProductList from "./Components/ProductList";
import ProductDetails from "./Components/ProductDetails";


function App() {
  return (
    <div className="App">

      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={ProductList} />
          <Route path="/product/:productId" exact component={ProductDetails} />
          <Route>404 Not Found!</Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
