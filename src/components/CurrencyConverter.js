import React, { useState, useEffect } from 'react';
import './CurrencyConverter.css';   

const exchangeRates = {
    KZT: { RUB: 0.2, CNY: 0.005, USD: 0.0023, CHF: 0.001, JPY: 0.23, EUR: 0.002, GBP: 0.0017, HKD: 0.018, AUD: 0.003, NZD: 0.0032, CAD: 0.0028, SEK: 0.015 },
    RUB: { KZT: 5, CNY: 0.025, USD: 0.0115, CHF: 0.0052, JPY: 1.31, EUR: 0.012, GBP: 0.0101, HKD: 0.11, AUD: 0.018, NZD: 0.0174, CAD: 0.015, SEK: 0.083 },
    CNY: { KZT: 200, RUB: 40, USD: 0.16, CHF: 0.071, JPY: 18.46, EUR: 0.167, GBP: 0.141, HKD: 1.5, AUD: 0.25, NZD: 0.241, CAD: 0.211, SEK: 1.17 },
    USD: { KZT: 432.75, RUB: 86.75, CNY: 6.3, CHF: 0.90, JPY: 110.12, EUR: 1, GBP: 0.84, HKD: 9, AUD: 1.48, NZD: 1.42, CAD: 1.24, SEK: 6.75 },
    CHF: { KZT: 480, RUB: 97.46, CNY: 14.10, USD: 1.11, JPY: 122.84, EUR: 1.11, GBP: 0.94, HKD: 10.07, AUD: 1.67, NZD: 1.62, CAD: 1.42, SEK: 7.78 },
    JPY: { KZT: 4.65, RUB: 0.76, CNY: 0.065, USD: 0.0091, CHF: 0.0081, EUR: 0.0089, GBP: 0.0075, HKD: 0.081, AUD: 0.013, NZD: 0.012, CAD: 0.011, SEK: 0.060 },
    EUR: { KZT: 492, RUB: 87.32, CNY: 7.17, USD: 1.13, CHF: 0.90, JPY: 112.21, GBP: 0.84, HKD: 9.02, AUD: 1.50, NZD: 1.45, CAD: 1.27, SEK: 7.05 },
    GBP: { KZT: 566, RUB: 110.41, CNY: 8.24, USD: 1.30, CHF: 1.06, JPY: 133.23, EUR: 1.19, HKD: 10.74, AUD: 1.78, NZD: 1.72, CAD: 1.51, SEK: 8.37 },
    HKD: { KZT: 64, RUB: 11.06, CNY: 0.93, USD: 0.13, CHF: 0.10, JPY: 12.29, EUR: 0.11, GBP: 0.093, AUD: 0.17, NZD: 0.16, CAD: 0.14, SEK: 0.79 },
    AUD: { KZT: 356, RUB: 61.54, CNY: 5.18, USD: 0.74, CHF: 0.60, JPY: 76.53, EUR: 0.67, GBP: 0.56, HKD: 5.78, NZD: 0.96, CAD: 0.84, SEK: 4.65 },
    NZD: { KZT: 331, RUB: 57.33, CNY: 4.82, USD: 0.69, CHF: 0.62, JPY: 80.69, EUR: 0.69, GBP: 0.62, HKD: 6.20, AUD: 1.04, CAD: 0.87, SEK: 4.79 },
    CAD: { KZT: 370, RUB: 63.24, CNY: 5.33, USD: 0.75, CHF: 0.70, JPY: 90.86, EUR: 0.79, GBP: 0.70, HKD: 6.98, AUD: 1.19, NZD: 1.15, SEK: 5.53 },
    SEK: { KZT: 56, RUB: 9.50, CNY: 0.80, USD: 0.11, CHF: 0.13, JPY: 16.67, EUR: 0.14, GBP: 0.12, HKD: 1.26, AUD: 0.22, NZD: 0.21, CAD: 0.18 }
  };
  

const CurrencyConverter = ({ setFromCurrency, setToCurrency, fromCurrency, toCurrency, amount, setAmount }) => {
  const [result, setResult] = useState('');

  useEffect(() => {
    if (amount) {
      const rate = exchangeRates[fromCurrency][toCurrency];
      setResult((amount * rate).toFixed(2));
    } else {
      setResult('');
    }
  }, [amount, fromCurrency, toCurrency]);

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  return (
    <div className="currency-converter">
      <div className="converter-container">
        <div className="input-group">
          <label>Сумма:</label>
          <input
            type="text"
            value={amount}
            onChange={handleAmountChange}
            inputMode="numeric"
            pattern="[0-9]*"
          />
        </div>
        <div className="input-group">
          <label>Из:</label>
          <select value={fromCurrency} onChange={(e) => setFromCurrency(e.target.value)}>
            <option value="KZT">Тенге</option>
            <option value="RUB">Рубль</option>
            <option value="CNY">Юань</option>
            <option value="USD">Доллар</option>
            <option value="CHF">Швейцарский франк</option>
            <option value="JPY">Японская иена</option>
            <option value="EUR">Евро</option>
            <option value="GBP">Фунт стерлингов</option>
            <option value="HKD">Гонконгский доллар</option>
            <option value="AUD">Австралийский доллар</option>
            <option value="NZD">Новозеландский доллар</option>
            <option value="CAD">Канадский доллар</option>
            <option value="SEK">Шведская крона</option>
          </select>
        </div>
        <div className="input-group">
          <label>В:</label>
          <select value={toCurrency} onChange={(e) => setToCurrency(e.target.value)}>
            <option value="KZT">Тенге</option>
            <option value="RUB">Рубль</option>
            <option value="CNY">Юань</option>
            <option value="USD">Доллар</option>
            <option value="CHF">Швейцарский франк</option>
            <option value="JPY">Японская иена</option>
            <option value="EUR">Евро</option>
            <option value="GBP">Фунт стерлингов</option>
            <option value="HKD">Гонконгский доллар</option>
            <option value="AUD">Австралийский доллар</option>
            <option value="NZD">Новозеландский доллар</option>
            <option value="CAD">Канадский доллар</option>
            <option value="SEK">Шведская крона</option>
          </select>
        </div>
        <div className="result-group">
          <label>Результат:</label>
          <input type="text" value={result} readOnly />
        </div>
      </div>
    </div>
  );
};

export default CurrencyConverter;
