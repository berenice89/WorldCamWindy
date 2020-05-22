import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function GetAllWebcams(props) {
  // created a state to put all the webcams depending on the chosen country

  const [webcams, setWebcams] = useState([]);

  // Get the country Id from the props

  let countryId = props.match.params.id;

  // calls the API to get the data for the selected country

  useEffect(() => {
    getWebcams();
  }, []);

  const getWebcams = () => {
    axios
      .get(
        `https://api.windy.com/api/webcams/v2/list/country=${countryId}?key=XB2hPUk4tkDnV4Bs4HMHroBr83HawNUd`
      )
      .then((response) => response.data)
      .then((data) => {
        setWebcams(data.result.webcams);
      });
  };

  // Filter the webcam array and get ONLY active webcams in a new array

  const activeWebcams = [];

  webcams.map((cam) => {
    if (cam.status === "active") {
      return activeWebcams.push(cam);
    }
  });

  return (
    <div className="webcamList">
      <h1>Choose your destination</h1>
      <ul>
        {activeWebcams.map((webcam) => {
          return (
            <li key={webcam.id}>
              <Link to={`/${countryId}/${webcam.id}`}>{webcam.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default GetAllWebcams;
