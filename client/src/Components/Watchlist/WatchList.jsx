import './WatchListStyle.css';
import SearchBar from '../SearchBar/SearchBar';
import { StockMarket } from "react-ts-tradingview-widgets";
import { SymbolInfo } from "react-ts-tradingview-widgets";
import { TechnicalAnalysis } from "react-ts-tradingview-widgets";
import { CompanyProfile } from "react-ts-tradingview-widgets";

const WatchList=()=>{
    return(
        <div className='WatchList_container'>
            <div className='WatchList_search'><StockMarket colorTheme="dark" height={800} width="100%"></StockMarket></div>
            <div className='WatchList_preview'><SymbolInfo colorTheme="dark" autosize></SymbolInfo><br/><CompanyProfile colorTheme="dark" height={500} width="100%" ></CompanyProfile></div>
        </div>
    )
}
export default WatchList;