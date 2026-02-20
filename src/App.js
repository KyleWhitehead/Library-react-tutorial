import React from "react";
import Discounted from "./Components/Discounted";
import Explore from "./Components/Explore";
import Featured from "./Components/Featured";
import Footer from "./Components/Footer";
import Highlights from "./Components/Highlights";
import Landing from "./Components/Landing";
import Nav from "./Components/Nav";
import {BrowserRouter as Router, Route } from "react-router-dom"

function App() {
  return (
    <Router>
    <div className="App">
      <Route />
      <Nav />
      <Landing />
      <Highlights />
      <Featured />
      <Discounted />
      <Explore />
      <Footer />
    </div>
    </Router>
  );
}

export default App;
