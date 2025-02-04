import React, { useEffect, useState } from 'react';
import "./style.css";
import { get100Coins } from '../../../functions/get100Coins';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

const SelectCoins = ({crypto1, crypto2 , handleCryptoChange}) => {

const [allCoins, setAllCoins] = useState([]);

useEffect(() => {
  getData();
}, []);

async function getData(){
    const myCoins = await get100Coins();
    setAllCoins(myCoins);
}


  return (
    <div className='coins-flex'>
        <p>Crypto 1</p>
       <Select
          value={crypto1 || ""}
          label="Crypto 1"
          onChange={(event)=>handleCryptoChange(event,false)}
          sx={{
            height: "2.5rem",
            color: "var(--white)",
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "var(--white)",
            },
            "& .MuiSvgIcon-root": {
              color: "var(--white)",
            },
            "&:hover": {
              "&& fieldset": {
                borderColor: "#3a80e9",
              },
            },
          }}
        >
            {allCoins
            .filter((item)=>item.id !== crypto2)
            .map((coin,i)=>{
               return <MenuItem key={i} value={coin.id}>{coin.name}</MenuItem>
            })}
          
        </Select>
        <p>Crypto 2</p>
       <Select
          value={crypto2 || ""}
          label="Crypto 2"
          onChange={(event)=>handleCryptoChange(event,true)}
          sx={{
            height: "2.5rem",
            color: "var(--white)",
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "var(--white)",
            },
            "& .MuiSvgIcon-root": {
              color: "var(--white)",
            },
            "&:hover": {
              "&& fieldset": {
                borderColor: "#3a80e9",
              },
            },
          }}
        >
            {allCoins
            .filter((item)=>item.id !== crypto1)
            .map((coin,i)=>{
               return <MenuItem key={i} value={coin.id}>{coin.name}</MenuItem>
            })}
          
        </Select>
    </div>
  )
}

export default SelectCoins;