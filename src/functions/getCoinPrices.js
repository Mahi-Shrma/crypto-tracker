const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    "x-cg-demo-api-key": "CG-8YhbVKc37jAyjbqD7iJiCg6V",
  },
};

export const getCoinPrices = async (id, days, priceType) => {
  try {
    const response = await fetch(
      `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}&interval=daily`,
      options
    );

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }

    const data = await response.json();

    console.log(">>>> DATA:", data);

    if (!data || !data[priceType]) {
      throw new Error(`Missing ${priceType} data in response`);
    }

    return data[priceType]; // Return the requested price type data
  } catch (error) {
    console.error("Error fetching market chart data:", error);
    return []; // Return an empty array to prevent crashes
  }
};




// const options = {
//     method: "GET",
//     headers: {
//       accept: "application/json",
//       "x-cg-demo-api-key": "CG-8YhbVKc37jAyjbqD7iJiCg6V ",
//     },
// };

// export const getCoinPrices = (id,days,priceType) =>{
//     const prices = fetch(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}&interval=daily`, options)
//     .then((res) => res.json()) // Parse the JSON response
//     .then((res) => {
//       console.log(">>>>DATA", res);
//       return res[priceType];
//     })
//     .catch((err) => {
//       console.error("Error fetching market chart data:", err);
//     });
//     return prices;
// }