import React, { useEffect, useState } from "react";
import Header from "../components/common/header";
import SelectCoins from "../components/Compare/SelectCoins";
import SelectDays from "../components/coin/SelectDays";
import { coinObject } from "../functions/convertObject";
import { getCoinPrices } from "../functions/getCoinPrices";
import { getCoinData } from "../functions/getCoinData";
import CircularIndeterminate from "../components/common/loader";
import List from "../components/dashboard/List";
import CoinInfo from "../components/coin/coinInfo";
import { settingChartData } from "../functions/settingChartData";
import ToggleOptions from "../components/coin/ToggleOptions";
import LineChart from "../components/coin/lineChart";
import Footer from "../components/common/footer";

const ComparePage = () => {
  const [crypto1, setCrypto1] = useState("bitcoin");
  const [crypto2, setCrypto2] = useState("ethereum");
  const [crypto1Data, setCrypto1Data] = useState({});
  const [crypto2Data, setCrypto2Data] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [days, setDays] = useState(30);
  const [priceType, setPriceType] = useState("prices");
  const [chartData, setChartData] = useState({});

//  async function handleDaysChange(e) {
//   setIsLoading(true);
//     setDays(e.target.value);
//     const prices1 = await getCoinPrices(crypto1, e.target.value, priceType);
//       const prices2 = await getCoinPrices(crypto2, e.target.value, priceType);
//       settingChartData(setChartData, prices1,prices2);
//       setIsLoading(false);
//   }
async function handleDaysChange(e) {
  setIsLoading(true);
  // const newDays = e.target.value;
  setDays(e.target.value);

  try {
    const prices1 = await getCoinPrices(crypto1, e.target.value, priceType);
    const prices2 = await getCoinPrices(crypto2, e.target.value, priceType);

    if (!prices1 || !prices2) {
      throw new Error("Failed to fetch price data");
    }

    settingChartData(setChartData, prices1, prices2);
  } catch (error) {
    console.error("Error fetching coin prices:", error);
  } finally {
    setIsLoading(false);
  }
}


  // const handleToggleChange = async (event, newType) => {
  //     setIsLoading(true);
  //     setPriceType(newType);
  //     const prices1 = await getCoinPrices(crypto1, days, newType);
  //     const prices2 = await getCoinPrices(crypto2, days, newType);
  //     settingChartData(setChartData, prices1,prices2);
  //       setIsLoading(false);
  //     }
  const handleToggleChange = async (event, newType) => {
    setIsLoading(true);
    setPriceType(newType);
  
    try {
      const prices1 = await getCoinPrices(crypto1, days, newType);
      const prices2 = await getCoinPrices(crypto2, days, newType);
  
      if (!prices1 || !prices2) {
        throw new Error("Failed to fetch price data");
      }
  
      settingChartData(setChartData, prices1, prices2);
    } catch (error) {
      console.error("Error fetching price data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  // async function getData() {
  //   setIsLoading(true);
  //   const data1 = await getCoinData(crypto1);
  //   if (data1) {
  //     const data2 = await getCoinData(crypto2);
  //     coinObject(setCrypto1Data, data1);
  //   if (data2) {
  //     coinObject(setCrypto2Data, data2);
  //     const prices1 = await getCoinPrices(crypto1, days, priceType);
  //     const prices2 = await getCoinPrices(crypto2, days, priceType);
  //       // console.log("Both Prices fetched successfully:", prices1, prices2);
  //     settingChartData(setChartData, prices1,prices2);
  //     setIsLoading(false);
  //     }
  //   }
  //   // setIsLoading(false);
  // }
  async function getData() {
    setIsLoading(true);
  
    try {
      const data1 = await getCoinData(crypto1);
      const data2 = await getCoinData(crypto2);
  
      if (!data1 || !data2) {
        throw new Error("Failed to fetch coin data");
      }
  
      coinObject(setCrypto1Data, data1);
      coinObject(setCrypto2Data, data2);
  
      const prices1 = await getCoinPrices(crypto1, days, priceType);
      const prices2 = await getCoinPrices(crypto2, days, priceType);
  
      if (!prices1 || !prices2) {
        throw new Error("Failed to fetch prices");
      }
  
      settingChartData(setChartData, prices1, prices2);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  }

  async function handleCryptoChange(event, isCoin2) {
    setIsLoading(true);
    if (isCoin2) {
      setCrypto2(event.target.value);
      const data = await getCoinData(event.target.value);
      coinObject(setCrypto2Data, data);
      const prices1 = await getCoinPrices(crypto1, days, priceType);
      const prices2 = await getCoinPrices(event.target.value, days, priceType);
      settingChartData(setChartData, prices1, prices2);
      // if (prices1.length > 0 && prices2.length > 0) {
      //   setIsLoading(false);
      // }
    } else {
      setCrypto1(event.target.value);
      const data = await getCoinData(event.target.value);
      coinObject(setCrypto1Data, data);
      const prices1 = await getCoinPrices(event.target.value, days, priceType);
      const prices2 = await getCoinPrices(crypto2, days, priceType);
      settingChartData(setChartData, prices1, prices2);
      // setIsLoading(false);
    }
    setIsLoading(false);
  };
  

  return (
    <div>
      <Header />
      {isLoading ? (
        <CircularIndeterminate />
      ) : (
        <>
          <div className="coin-days-flex">
            <SelectCoins
              crypto1={crypto1}
              crypto2={crypto2}
              handleCryptoChange={handleCryptoChange}
            />
            <SelectDays
              days={days}
              handleDaysChange={handleDaysChange}
              noPTag={true}
            />
          </div>
          <div className="grey-wrapper">
            <List coin={crypto1Data} />
          </div>
          <div className="grey-wrapper">
            <List coin={crypto2Data} />
          </div>
          <div className="grey-wrapper" style={{ padding: "1rem" }}>
            <ToggleOptions
              priceType={priceType}
              handleToggleChange={handleToggleChange}
            />
            <LineChart chartData={chartData} priceType={priceType} multiAxis={"true"} style={{padding:"1rem"}}/>
          </div>
          <CoinInfo heading={crypto1Data.name} des={crypto1Data.desc} />
          <CoinInfo heading={crypto2Data.name} des={crypto2Data.desc} />
        </>
      )}
      <Footer/>
    </div>
  );
};

export default ComparePage;
