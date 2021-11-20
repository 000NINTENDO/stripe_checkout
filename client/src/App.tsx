import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Product from "./pages/Product";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" children={<Product />} />
      </Switch>
    </Router>
  );
}

export default App;
