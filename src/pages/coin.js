import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/common/header";
import CircularIndeterminate from "../components/common/loader";
import { coinObject } from "../functions/convertObject";
import List from "../components/dashboard/List";
import CoinInfo from "../components/coin/coinInfo";
import { getCoinData } from "../functions/getCoinData";
import { getCoinPrices } from "../functions/getCoinPrices";
import LineChart from "../components/coin/lineChart";
import { convertDate } from "../functions/convertDate";
import SelectDays from "../components/coin/SelectDays";
import { settingChartData } from "../functions/settingChartData";
import ToggleOptions from "../components/coin/ToggleOptions";
import Footer from "../components/common/footer";

const CoinPage = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [coinData, setCoinData] = useState();
  const [days, setDays] = useState(30);
  const [chartData, setChartData] = useState({});
  const [priceType, setPriceTypes] = useState("prices");

  useEffect(() => {
    if (id) {
      getData();
    }
  }, [id, days]);

  async function getData() {
    const data = await getCoinData(id);
    if (data) {
      coinObject(setCoinData, data);
      const prices = await getCoinPrices(id, days, priceType);
      if (prices.length > 0) {
        console.log("Prices fetched successfully:", prices);
        settingChartData(setChartData, prices);
        setIsLoading(false);
      }
    }
    setIsLoading(false);
  }

  const handleDaysChange = async (event) => {
    setIsLoading(true);
    setDays(event.target.value);
    const prices = await getCoinPrices(id, event.target.value, priceType);
    if (prices.length > 0) {
      settingChartData(setChartData, prices);
      setIsLoading(false);
    }
  };

  const handleToggleChange = async (event, newType) => {
    setIsLoading(true);
    setPriceTypes(newType);
    console.log(newType);
    const prices = await getCoinPrices(id, days, newType);
    if (prices.length > 0) {
      settingChartData(setChartData, prices);
      setIsLoading(false);
    }
  };

  return (
    <>
      <Header />
      {isLoading ? (
        <CircularIndeterminate />
      ) : coinData ? (
        <>
          <div className="grey-wrapper">
            <List coin={coinData} />
          </div>
          <div className="grey-wrapper">
            <SelectDays days={days} handleDaysChange={handleDaysChange} />
            <ToggleOptions
              priceType={priceType}
              handleToggleChange={handleToggleChange}
            />
            <LineChart chartData={chartData} priceType={priceType}/>
          </div>
          <CoinInfo heading={coinData.name} des={coinData.desc} />
        </>
      ) : (
        <p>Data not available</p>
      )}
      <Footer/>
    </>
  );
};

export default CoinPage;
