import React, { useState } from "react";
import "./style.css";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import { Tooltip } from "@mui/material";
import { convertNumbers } from "../../../functions/convertNumbers";
import { Link } from "react-router-dom";
import { IconButton } from "@mui/material";
import StarBorderRoundedIcon from "@mui/icons-material/StarBorderRounded";
import { addToWatchlist } from "../../../functions/addToWatchlist";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import { hasBeenAdded } from "../../../functions/hasBeenAdded";
import { removeFromWatchlist } from "../../../functions/removeFromWatchlist";
import { toast } from 'react-toastify';

const List = ({ coin,setMyWatchlist }) => {
  const [added, setAdded] = useState(hasBeenAdded(coin.id));

  return (
    <Link to={`/coin/${coin.id}`}>
      <tr className="table-row">
        <Tooltip title="image" placement="bottom-start">
          <td className="list-info-flex-image">
            <img src={coin.image} className="list-coin-logo"></img>
          </td>
        </Tooltip>
        <Tooltip title="coin info" placement="bottom-start">
          <td className="list-td-info-flex">
            <div className="list-name-col">
              <p className="list-coin-symbol">{coin.symbol}</p>
              <p className="list-coin-name">{coin.name}</p>
            </div>
          </td>
        </Tooltip>
        <Tooltip title="Price change in 24h " placement="bottom-start">
          {coin.price_change_percentage_24h > 0 ? (
            <td className="list-chip-flex">
              <div className="list-price-chip">
                {" "}
                {coin.price_change_percentage_24h.toFixed(2)}%
              </div>
              <div className="list-icon-chip td-icon">
                <TrendingUpIcon />
              </div>
            </td>
          ) : (
            <td className="list-chip-flex">
              <div className="list-price-chip chip-red">
                {coin.price_change_percentage_24h.toFixed(2)}%
              </div>
              <div className="list-icon-chip chip-red td-icon">
                <TrendingDownIcon />
              </div>
            </td>
          )}
        </Tooltip>
        <Tooltip title="Current Price" placement="bottom-start">
          <td className="list-info-container">
            <h3
              className="list-info-price td-center-align"
              style={{
                color:
                  coin.price_change_percentage_24h > 0
                    ? "var(--green)"
                    : "var(--red)",
              }}
            >
              ${coin.current_price.toLocaleString()}
            </h3>
          </td>
        </Tooltip>
        <Tooltip title="list-Coin Volume" placement="bottom-start">
          <td>
            <p className="list-coin-volume td-right-align td-total-volume">
              {coin.total_volume.toLocaleString()}
            </p>
          </td>
        </Tooltip>
        <Tooltip title="Market Cap" placement="bottom-start">
          <td className="list-desktop-td-mkt">
            <p className="list-coin-volume td-right-align">
              {coin.market_cap.toLocaleString()}
            </p>
          </td>
        </Tooltip>
        <Tooltip title="Market Cap" placement="bottom-start">
          <td className="list-mobile-td-mkt">
            <p className="list-coin-volume td-right-align">
              {convertNumbers(coin.market_cap)}
            </p>
          </td>
        </Tooltip>

        <td style={{ width: "fit-content" }} className="lll">
          <IconButton
            onClick={(e) => {
              e.preventDefault();
              if (added) {
                removeFromWatchlist(coin.id, setAdded, setMyWatchlist);
                setAdded(false);
              } else {
                addToWatchlist(coin.id);
                setAdded(true);
                toast.success(`${coin.name} added to the watchlist!`, {
                  theme: "dark",
                });
              }
            }}
          >
            {added ? (
              <StarRoundedIcon
                className={`watchlist-icon ${
                  coin.price_change_percentage_24h < 0 && "watchlist-icon-red"
                } `}
              />
            ) : (
              <StarBorderRoundedIcon
                className={`watchlist-icon ${
                  coin.price_change_percentage_24h < 0 && "watchlist-icon-red"
                } `}
              />
            )}
          </IconButton>
        </td>
      </tr>
    </Link>
  );
};

export default List;
