import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [visitedCountries, setVisitedCountires] = useState([]);
  const [visitedCountriesFlags, setVisitedCountriesFlags] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  const handleVisitedCountriesFlags = (flag) => {
    console.log(flag);
    const newVisitedCountriesFlags = [...visitedCountriesFlags, flag];
    setVisitedCountriesFlags(newVisitedCountriesFlags);
  };

  const handleVisitedCountry = (country) => {
    console.log(country);
    const newVisitedCountries = [...visitedCountries, country];
    setVisitedCountires(newVisitedCountries);
  };

  return (
    <div>
      <h3>Countries {countries.length}</h3>
      <div className="flag-container">
        {visitedCountriesFlags.map((flag , indx) => (
          
            <img key={indx} src={flag} alt="" />
          
        ))}
      </div>
      <div>
        <h5>Visited Countries : {visitedCountries.length}</h5>
        <ul>
          {visitedCountries.map((country) => (
            <li key={country.cca3}> {country.name.common}</li>
          ))}
        </ul>
      </div>
      <div className="countries-container">
        {countries.map((country) => (
          <Country
            key={country.cca3}
            handleVisitedCountry={handleVisitedCountry}
            handleVisitedCountriesFlags={handleVisitedCountriesFlags}
            country={country}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
