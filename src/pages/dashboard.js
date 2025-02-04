// import React, { useEffect, useState } from 'react'
// import Header from '../components/common/header'
// import TabComponent from '../components/dashboard/TabsComponents';
// import axios from 'axios';
// import Search from '../components/common/search';
// import PaginationControlled from '../components/dashboard/pagination';

// const Dashboard = () => {
 
//   const [coins,setCoins] = useState([]);
//   const [search,setSearch] =useState('');
//   const [page, setPage] =useState(1);
//   const [paginatedCoins, setPaginatedCoins] =([]);
//     const handlePageChange = (event,value) => {
//       setPage(value);
//       var startingIndex = (value - 1) * 10;
//       setPaginatedCoins(coins.slice(startingIndex, startingIndex + 10));
//     };
  
//   const onSearchChange=(e)=>{
//      setSearch(e.target.value);
//   };

//   var filterCoins=coins.filter((item)=>
//       item.name.toLowerCase().includes(search.toLowerCase()) || 
//       item.symbol.toLowerCase().includes(search.toLowerCase())
//   );

//   const options = {
//     method: 'GET',
//     url: 'https://api.coingecko.com/api/v3/coins/markets',
//     params: {vs_currency: 'usd'},
//     headers: {accept: 'application/json', 'x-cg-demo-api-key': 'CG-8YhbVKc37jAyjbqD7iJiCg6V'}
//   };
  

//   useEffect(()=>{
//     axios
//   .request(options)
//   .then((res) =>{
//     console.log(res.data);
//     setCoins(res.data);
//     setPaginatedCoins(res.data.slice(0, 10));
//   }).catch(err => console.error(err));
//   },[])

//   return (
//     <div>
//         <Header/>
//         <Search search={search} onSearchChange={onSearchChange}/>
//         <TabComponent coins={search ? filterCoins: paginatedCoins}/>
//         {!search && (<PaginationControlled page={page} handlePageChange={handlePageChange} />)}
        
//     </div>
//   )
// }

// export default Dashboard;
import React, { useEffect, useState } from "react";
import Header from "../components/common/header";
import TabComponent from "../components/dashboard/TabsComponents";
import axios from "axios";
import Search from "../components/common/search";
import PaginationControlled from "../components/dashboard/pagination";
import CircularIndeterminate from "../components/common/loader";
import TopButton from "../components/common/topButton";
import { get100Coins } from "../functions/get100Coins";
import Footer from "../components/common/footer";


const Dashboard = () => {
  const [coins, setCoins] = useState([]);
  const [paginatedCoins, setPaginatedCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  const handlePageChange = (event, value) => {
    setPage(value);
    const startingIndex = (value - 1) * 10;
    setPaginatedCoins(coins.slice(startingIndex, startingIndex + 10));
  };

  const onSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const filterCoins = coins.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase()) ||
    item.symbol.toLowerCase().includes(search.toLowerCase())
  );

  // const options = {
  //   method: "GET",
  //   url: "https://api.coingecko.com/api/v3/coins/markets",
  //   params: { vs_currency: "usd" },
  //   headers: { accept: "application/json" },
  // };

  useEffect(() => {
      getData();
  }, []);

  const getData = async () =>{
    const myCoins = await get100Coins();
    if(myCoins){
      setCoins(myCoins);
      setPaginatedCoins(myCoins.slice(0, 10));
      setIsLoading(false);
    }
  }

  console.log("Coins state:", coins);
  console.log("Paginated Coins state:", paginatedCoins);

  return (
    <>
      <Header />
      {/* <TopButton/> */}
      <TopButton/>
      {isLoading ? (
      <CircularIndeterminate/>):(
      <div>
      <Search search={search} onSearchChange={onSearchChange} />
      <TabComponent coins={search ? filterCoins : paginatedCoins || []} />
      {!search && (
        <PaginationControlled page={page} handlePageChange={handlePageChange} />
      )}
      </div>
      )
      }
      <Footer/>
    </>
  );
};

export default Dashboard;
