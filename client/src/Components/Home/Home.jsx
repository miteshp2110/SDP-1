import { Link } from "react-router-dom";
import "./HomeStyle.css";
import { Screener } from "react-ts-tradingview-widgets";
import { StockHeatmap } from "react-ts-tradingview-widgets";
import { MiniChart } from "react-ts-tradingview-widgets";
import { Timeline } from "react-ts-tradingview-widgets";
import { CompanyProfile } from "react-ts-tradingview-widgets";
import { SymbolOverview } from "react-ts-tradingview-widgets";
const Home = () => {
  
  
  return (
    
    <div className="Home_container">
      <div className="Text1">Learning is first Step Towards</div>

      <div className="earning">Earning!</div>
      <div className="Journey_card"><span>To track your progress</span> <Link to='/Login'><button>Login</button></Link></div>
      <div className="Card" id="card1"><StockHeatmap colorTheme="dark"></StockHeatmap></div>
      <div className="Card" id="card2"><Screener colorTheme="dark" width="100%" height={275}></Screener></div>
      <div className="Card" id="card3"><MiniChart colorTheme="dark" width="100%"></MiniChart></div>
      <div className="Card" id="card4"><Timeline colorTheme="dark" feedMode="market" market="crypto" height={400} width="100%"></Timeline></div>
      <div className="Card" id="card5"><CompanyProfile colorTheme="dark" height={400} width="100%" symbol='TSLA'></CompanyProfile></div>
      <div className="Card" id="card6"><SymbolOverview colorTheme="dark"
                autosize
                chartType="candlesticks"
                downColor="#800080"
                borderDownColor="#800080"
                wickDownColor="#800080" /></div>
    </div>
    
  );
};
export default Home;
