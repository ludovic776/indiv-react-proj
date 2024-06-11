// src/App.js

import React, { useState } from 'react';
import './style.css';
import CurrencyConverter from './components/CurrencyConverter';

function App() {
  const [fromCurrency, setFromCurrency] = useState('KZT');
  const [toCurrency, setToCurrency] = useState('RUB');
  const [amount, setAmount] = useState('');

  const popularExchanges = [
    { from: 'USD', to: ['CHF', 'JPY'] },
    { from: 'USD', to: ['CNY', 'EUR'] },
    { from: 'USD', to: ['GBP', 'HKD'] },
    { from: 'USD', to: ['AUD', 'NZD'] },
    { from: 'USD', to: ['CAD', 'SEK'] }
  ];

  const handlePopularExchangeClick = (from, to) => {
    setFromCurrency(from);
    setToCurrency(to);
    setAmount(1);
  };

  const handleMenuClick = (section) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="App">
      <nav>
        <ul>
          <li><a href="https://kurs.kz/" target="_blank" rel="noopener noreferrer">Курсы валют</a></li>
          <li><button onClick={() => handleMenuClick('popular-exchanges')}>Популярные обмены валют</button></li>
        </ul>
      </nav>
      <div className="content">
        <CurrencyConverter 
          fromCurrency={fromCurrency}
          toCurrency={toCurrency}
          amount={amount}
          setFromCurrency={setFromCurrency}
          setToCurrency={setToCurrency}
          setAmount={setAmount}
        />
        <div id="popular-exchanges" className="popular-exchanges">
          <h2>Популярные обмены валют</h2>
          <div className="exchanges-list">
            {popularExchanges.map((exchange, index) => (
              <div key={index} className="exchange-row">
                <button onClick={() => handlePopularExchangeClick(exchange.from, exchange.to[0])}>
                  1 {exchange.from} в {exchange.to[0]}
                </button>
                <button onClick={() => handlePopularExchangeClick(exchange.from, exchange.to[1])}>
                  1 {exchange.from} в {exchange.to[1]}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
