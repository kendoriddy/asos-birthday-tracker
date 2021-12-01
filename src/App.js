import React from "react";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Empdetails from "./components/Empdetails";
import Empbirthday from "./components/Empbirthday";
import Error from "./components/Error";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <Header />
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/empdetails" component={Empdetails} exact />
      <Route path="/empbirthday" component={Empbirthday} exact />
      <Route component={Error} />
    </Switch>
      <Footer />
    </Router>
  );
};

export default App;
