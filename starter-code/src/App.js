import React, { Component } from "react";
import "./App.css";
import CountryDetail from "./CountryDetail.js";
import Navbar from "./Navbar.js";
import JSONcountries from "./countries.json";
import CountriesList from "./CountriesList.js";

class App extends Component {
  state = {
    countries: JSONcountries
  };

  render() {
    console.log(this.state);
    const countriesList = this.state.countries.map((country, index) => {
      return <CountriesList key={index} data={country} />;
    });

    const countryDetails = this.state.countries.map((country, index) => {
      return <CountryDetail key={index} data={country} />;
    });

    return (
      <div className="App">
        <Navbar />
        <div class="row">
          <div class="col-5"><div class="list-group">{countriesList}</div></div>
          <div class="col-7">{countryDetails}</div>
        </div>
        <CountryDetail />
      </div>
    );
  }
}

export default App;
