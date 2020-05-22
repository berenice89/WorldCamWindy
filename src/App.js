import React, { useState, useEffect } from "react";
import axios from "axios";
import GetAllCountries from "./components/GetAllCountries";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import GetAllWebcams from "./components/GetAllWebcams";
import OneWebcam from "./components/OneWebcam";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  // did "npm install --save react-router-dom"

  const [countries, setCountries] = useState([]);

  // useEffect to get the windy API

  useEffect(() => {
    getCountries();
  }, []);

  const getCountries = () => {
    axios
      .get(
        "https://api.windy.com/api/webcams/v2/list?show=countries&key=XB2hPUk4tkDnV4Bs4HMHroBr83HawNUd"
      )
      .then((response) => response.data)
      .then((data) => {
        setCountries(data.result.countries);
      });
  };

  return (
    <div id="homepage">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact>
            <GetAllCountries countries={countries} />
          </Route>
          <Route path="/:id" exact component={GetAllWebcams} />
          <Route path="/:id/:id" component={OneWebcam} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
