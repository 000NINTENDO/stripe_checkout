import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Product from "./pages/Product";
import Checkout from "./pages/Checkout";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/checkout" children={<Checkout />} />
        <Route path="/" children={<Product />} />
      </Switch>
    </Router>
  );
}

export default App;
