import React, { useState } from 'react';
import './style.css';
import CurrencyConverter from './components/CurrencyConverter';
import CountryInfo from './components/CountryInfo'; 

function App() {
  // Управление состоянием валют и суммой для конвертера
  const [fromCurrency, setFromCurrency] = useState('KZT');
  const [toCurrency, setToCurrency] = useState('RUB');
  const [amount, setAmount] = useState('');

  // Определение популярных обменов валют
  const popularExchanges = [
    { from: 'USD', to: ['CHF', 'JPY'] },
    { from: 'USD', to: ['CNY', 'EUR'] },
    { from: 'USD', to: ['GBP', 'HKD'] },
    { from: 'USD', to: ['AUD', 'NZD'] },
    { from: 'USD', to: ['CAD', 'SEK'] }
  ];

  // Обработчик клика для популярных обменов валют
  const handlePopularExchangeClick = (from, to) => {
    setFromCurrency(from);
    setToCurrency(to);
    setAmount(1);
  };

  // Обработчик клика для перемещения к секции "Популярные обмены валют"
  const handleMenuClick = (section) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Информация о различных странах
  const countriesData = [
    {
      name: 'Казахстан',
      flag: 'https://www.akorda.kz/assets/media/flag.jpg',
      currencyCode: 'KZT',
      currencySymbol: '₸',
      currencyRate: '0.0023 USD',
      capital: 'Астана',
      population: '18,776,707',
      region: 'Азия'
    },
    {
      name: 'Россия',
      flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Flag_of_Russia.svg/250px-Flag_of_Russia.svg.png',
      currencyCode: 'RUB',
      currencySymbol: '₽',
      currencyRate: '0.0115 USD',
      capital: 'Москва',
      population: '146,599,183',
      region: 'Европа'
    },
    {
      name: 'США',
      flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg/250px-Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg.png',
      currencyCode: 'USD',
      currencySymbol: '$',
      currencyRate: '1 USD',
      capital: 'Вашингтон',
      population: '331,002,651',
      region: 'Америка'
    },
    {
      name: 'Китай',
      flag: 'https://masterflag.ru/img/info-flagi/world/kitay.png',
      currencyCode: 'CNY',
      currencySymbol: '¥',
      currencyRate: '0.16 USD',
      capital: 'Пекин',
      population: '1,439,323,776',
      region: 'Азия'
    },
    {
      name: 'Швейцария',
      flag: 'https://flagof.ru/wp-content/uploads/2018/10/flagge-der-schweiz-schweizerfahne-hintergrundbilder-bestimmtfur-flagge-von-schweiz.jpg',
      currencyCode: 'CHF',
      currencySymbol: 'CHF',
      currencyRate: '1.11 USD',
      capital: 'Берн',
      population: '8,654,622',
      region: 'Европа'
    },
    {
      name: 'Япония',
      flag: 'https://upload.wikimedia.org/wikipedia/commons/9/9e/Flag_of_Japan.svg',
      currencyCode: 'JPY',
      currencySymbol: '¥',
      currencyRate: '0.0091 USD',
      capital: 'Токио',
      population: '126,476,461',
      region: 'Азия'
    },
    {
      name: 'Чехия',
      flag: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Flag_of_the_Czech_Republic.svg',
      currencyCode: 'CZK',
      currencySymbol: 'Kč',
      currencyRate: '0.047 USD',
      capital: 'Прага',
      population: '10,708,981',
      region: 'Европа'
    }
  ];
  

  // Управление выбранной страной
  const [selectedCountry, setSelectedCountry] = useState(null);

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
      <div className="app">
        <h1>Информация о странах</h1>
        <div className="country-list">
          {countriesData.map((country, index) => (
            <button key={index} onClick={() => setSelectedCountry(country)}>
              <img src={country.flag} alt={country.name} style={{ width: '50px', height: 'auto' }} />
              {country.name}
            </button>
          ))}
        </div>
        {selectedCountry && <CountryInfo country={selectedCountry} />}
      </div>
    </div>
  );
}

export default App;
