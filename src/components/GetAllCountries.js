import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";

function GetAllCountries({ countries }) {
  const [selectedCountry, setSelectedCountry] = useState([]);

  // Warn users that the API is not uploaded yet
  if (!countries) {
    return <div>Chargement en cours...</div>;
  }

  // Build an array of countries to avoid immutability errors
  const allCountries = [];
  {
    countries.map((cam) => {
      return allCountries.push(cam);
    });
  }

  // Search in the built array with filter() and includes()

  const searchCountry = (needle) => {
    setSelectedCountry(
      allCountries.filter((country) => {
        return country.name.toLowerCase().includes(needle.toLowerCase());
      })
    );
  };

  return (
    <div>
      <div id="input">
        <input
          type="text"
          placeholder="Where do you want to go ?"
          onChange={(e) => {
            searchCountry(e.target.value);
          }}
        />
      </div>
      <div className="countryList">
        <ul>
          {selectedCountry.map((cam) => {
            return (
              <li key={cam.id}>
                <Link to={`/${cam.id}`}>{cam.name}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default GetAllCountries;
