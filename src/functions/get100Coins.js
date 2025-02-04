// import axios from "axios";

import axios from "axios";

const options = {
  method: "GET",
  url: "https://api.coingecko.com/api/v3/coins/markets",
  params: { vs_currency: "usd" },
  headers: { accept: "application/json" },
};

export const get100Coins = async () => {
  try {
    const res = await axios.request(options);
    console.log("API Response:", res.data);

    if (Array.isArray(res.data)) {
      return res.data; // Return the actual array
    } else {
      console.error("Unexpected API response format:", res.data);
      return [];
    }
  } catch (err) {
    console.error("Error fetching data:", err);
    return []; // Return an empty array on error
  }
};



// const options = {
//     method: "GET",
//     url: "https://api.coingecko.com/api/v3/coins/markets",
//     params: { vs_currency: "usd" },
//     headers: { accept: "application/json" },
//   };

// export const get100Coins= ()=>{
//     const myCoins = axios
//       .request(options)
//       .then((res) => {
//         console.log("API Response:", res.data);
//         if (Array.isArray(res.data)) {
//         //   setCoins(res.data);
//         //   setPaginatedCoins(res.data.slice(0, 10));
//         //   setIsLoading(false);
//         return res.data;
//         } else {
//           console.error("Unexpected API response format:", res.data);
//           return [];
//         }
//       })
//       .catch((err) => {
//         console.error("Error fetching data:", err);
//     });
//     return myCoins;
// }