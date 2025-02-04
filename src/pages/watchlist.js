import React, { useEffect, useState } from "react";
import { get100Coins } from "../functions/get100Coins";
import CircularIndeterminate from "../components/common/loader";
import Header from "../components/common/header";
import TabComponent from "../components/dashboard/TabsComponents";
import { Link } from "react-router-dom";
import Button from "../components/common/button";

function WatchlistPage() {
  const coins = JSON.parse(localStorage.getItem("watchlist"));
  const [myWatchlist, setMyWatchlist] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    setLoading(true);
    const allCoins = await get100Coins();
    if (coins) {
      setMyWatchlist(allCoins.filter((item) => coins.includes(item.id)));
    }
    setLoading(false);
  };

  return (
    <div>
      {loading || !coins ? (
        <CircularIndeterminate />
      ) : (
        <div style={{ minHeight: "90vh" }}>
          {myWatchlist?.length == 0 || !coins ? (
            <div>
              <Header />
              <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>
                No Items in the Watchlist
              </h1>
              <div style={{ display: "flex", justifyContent: "center" }}>
                {/* <a href="/dashboard"> */}
                <Link to="/dashboard">
                  <Button text={"Dashboard"} />
                </Link>
              </div>
            </div>
          ) : (
            <div style={{ height: "95vh" }}>
              <Header />
              <TabComponent coins={myWatchlist} isWatchlistPage={true} setMyWatchlist={setMyWatchlist}/>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default WatchlistPage;
