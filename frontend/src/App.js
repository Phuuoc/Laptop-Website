import Header from "./component/layout/Header/Header.js"
import './App.css';
import {BrowserRouter as Router, Route } from "react-router-dom"
import Webfont from "webfontloader"
import React from "react";
import Footer from "./component/layout/Footer/Footer.js"
import "./component/Home/Home"
import Home from "./component/Home/Home";

function App() {
React.useEffect(() => {
  Webfont.load({
    google: {
      families: ["Roboto", "Droid Sans", "Chilanka"]
    },
  });

}, []);

  return (
  <Router>
    <Header />
    <Route extact path="/" component={Home}/>
    <Footer />
  </Router>
  );
}

export default App;
