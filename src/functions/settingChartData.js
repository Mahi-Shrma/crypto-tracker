import { convertDate } from "./convertDate";

export const settingChartData=(setChartData,prices1,prices2)=>{
  if (prices2) {
    setChartData({
      labels: prices2.map((price)=> convertDate(price[0]) ),
      datasets: [
        {
          label: "Crypto1",
          data: prices1.map((prices)=>prices[1]),
          fill: true,
          borderColor: "#3a80e9",
          borderWidth:2,
          backgroundColor:"rgba(58, 128,233,0.1)",
          pointRadius:0,
          tension: 0.20,
          yAxisID:'crypto1',
        },
        {
          label: "Crypto2",
          data: prices2.map((prices)=>prices[1]),
          fill: true,
          borderColor: "#61c96f",
          borderWidth:2,
          backgroundColor:"rgba(58, 128,233,0.1)",
          pointRadius:0,
          tension: 0.20,
          yAxisID:'crypto2',
        },
      ],
    });
  } else {
    setChartData({
      labels: prices1.map((price)=> convertDate(price[0]) ),
      datasets: [
        {
          label: "Crypto 1",
          data: prices1.map((prices)=>prices[1]),
          fill: true,
          borderColor: "#3a80e9",
          borderWidth:2,
          backgroundColor:"rgba(58, 128,233,0.1)",
          pointRadius:0,
          tension: 0.20,
          yAxisID:'crypto1',
        },
      ],
    });
  }
}