import React from 'react';
import './CountryInfo.css';  

const CountryInfo = ({ country }) => {
  return (
    <div className="country-info">
      <h2>{country.name}</h2>
      <img src={country.flag} alt={`Flag of ${country.name}`} style={{ width: '100px', height: 'auto' }} />
      <div>
        <p><strong>Код валюты:</strong> {country.currencyCode}</p>
        <p><strong>Символ валюты:</strong> {country.currencySymbol}</p>
        <p><strong>Официальный курс валюты:</strong> {country.currencyRate}</p>
        <p><strong>Столица:</strong> {country.capital}</p>
        <p><strong>Население:</strong> {country.population}</p>
        <p><strong>Регион:</strong> {country.region}</p>
      </div>
    </div>
  );
};

export default CountryInfo;
