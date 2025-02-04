import React,{useState} from 'react';
import './style.css';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import { Link } from 'react-router-dom';
import { IconButton } from "@mui/material";
import StarBorderRoundedIcon from "@mui/icons-material/StarBorderRounded";
import { addToWatchlist } from "../../../functions/addToWatchlist";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import { hasBeenAdded } from "../../../functions/hasBeenAdded";
import { removeFromWatchlist } from "../../../functions/removeFromWatchlist";
import { toast } from 'react-toastify';

const Grid = ({coin,setMyWatchlist}) => {

  const [added, setAdded] = useState(hasBeenAdded(coin.id));

  return (
    <Link to={`/coin/${coin.id}`}>
    <div className={`grid-container ${coin.price_change_percentage_24h <0 &&"grid-container-red"}`}>
      <div className='grid-info-flex'>
        <img src={coin.image} className='grid-coin-logo'></img>
        <div className='grid-name-col'>
          <p className='grid-coin-symbol'>
            {coin.symbol}
          </p>
          <p className='grid-coin-name'>
            {coin.name}
          </p>
        </div>

      <IconButton
            onClick={(e) => {
              e.preventDefault();
              if (added) {
                removeFromWatchlist(coin.id,setAdded,setMyWatchlist);
                setAdded(false);
              } else {
                addToWatchlist(coin.id);
                setAdded(true);
                toast.success(`${coin.name} added to the watchlist!`, { theme: "dark" });
              }
            }}
          >
            {added ? (
              <StarRoundedIcon
                className={`watchlist-icon ${
                  coin.price_change_percentage_24h < 0 && "watchlist-icon-red"
                } `}
                sx={{ fontSize: "2rem !important" }}
              />
            ) : (
              <StarBorderRoundedIcon
                className={`watchlist-icon ${
                  coin.price_change_percentage_24h < 0 && "watchlist-icon-red"
                } `}
                sx={{ fontSize: "2rem !important" }}
              />
            )}
          </IconButton>
          </div> 

      { coin.price_change_percentage_24h >0 ?(
       <div className='grid-chip-flex'>
       <div className="grid-price-chip">   {coin.price_change_percentage_24h.toFixed(2)}%</div>
       <div className='grid-icon-chip'><TrendingUpIcon/></div>
     </div>
      ):(
        <div className='grid-chip-flex'>
        <div className="grid-price-chip chip-red">{coin.price_change_percentage_24h.toFixed(2)}%</div>
        <div className='grid-icon-chip chip-red'><TrendingDownIcon/></div>
      </div>
      )}
      <div className='grid-info-container'>
        <h3
        className='grid-info-price'
        style={{color:coin.price_change_percentage_24h >0 ?"var(--green)": "var(--red)"}}
        >${coin.current_price.toLocaleString()}</h3>
        <p className='grid-coin-volume'>Total Volume : {coin.total_volume.toLocaleString()}</p>
        <p className='grid-coin-volume'>Market Cap : ${coin.market_cap.toLocaleString()}</p>
      </div>
      </div>
      </Link>
  )
}

export default Grid;