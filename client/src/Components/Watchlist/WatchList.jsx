import './WatchListStyle.css';
import SearchBar from '../SearchBar/SearchBar';
const WatchList=()=>{
    return(
        <div className='WatchList_container'>
            <div className='WatchList_search'><SearchBar/></div>
            <div className='WatchList_preview'></div>
        </div>
    )
}
export default WatchList;