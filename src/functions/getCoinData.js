
const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      "x-cg-demo-api-key": "CG-8YhbVKc37jAyjbqD7iJiCg6V ",
    },
  };

export const getCoinData = (id)=>{
   const mydata = fetch(`https://api.coingecko.com/api/v3/coins/${id}`, options)
            .then((res) => res.json())
            .then((res) => {
            //   console.log(res);
            //   setIsLoading(false);
            //   coinObject(setCoinData, res);
            return res;
            })
            .catch((err) => {
              console.error(err);
            //   setIsLoading(false);
            });
    return mydata ;        
}