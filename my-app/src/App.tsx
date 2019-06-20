import React from "react";
import "./App.css";
import Nav from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact.jsx";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";

const App: React.FC = () => {
  return (
    <div className="App">
      <Nav />
      <div className="content">
        <Switch>
          <Route exact path="/" render={() => <Home />} />
          <Route path="/about" render={() => <About />} />
          <Route path="/contact" render={() => <Contact />} />
        </Switch>
        <Footer />
      </div>
    </div>
  );
};

export default App;
