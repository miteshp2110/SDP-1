import React from 'react';
import './HomeStyle.css';
import { SymbolOverview } from "react-ts-tradingview-widgets";
import { TickerTape } from "react-ts-tradingview-widgets";
import TopStories from './TopStories';
import { MiniChart } from "react-ts-tradingview-widgets";

const Home = () => {
  return (
    <div className="Home_container">
      <div className="Text1">Learning is the first Step Towards</div>
      <div className="earning">Earning!</div>
      
      <div className="Journey_card">
        <TickerTape colorTheme="dark"></TickerTape>
      </div>

      <div className="Card" id="card1">
      <MiniChart colorTheme="dark" width="100%" symbol="TSLA"></MiniChart>
      </div>
      
      <div className="Card" id="card2">
        <TopStories /> 
      </div>
      
      <div className="Card" id="card3">
        <MiniChart colorTheme="dark" width="100%" symbol="AAPL"></MiniChart>
      </div>

      <div className="Card" id="card5">
        <SymbolOverview colorTheme="dark"
                    autosize
                    chartType="candlesticks"
                    downColor="#800080"
                    borderDownColor="#800080"
                    wickDownColor="#800080"
                    symbols="EUR"/>
      </div>

      <div className="Card" id="card6">
        <SymbolOverview colorTheme="dark"
                  autosize
                  chartType="candlesticks"
                  downColor="#800080"
                  borderDownColor="#800080"
                  wickDownColor="#800080"
                  symbols="XRP"/>
      </div>
    </div>
  );
};

export default Home;
