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
          className="select-coin"
          value={crypto1 || ""}
          label="Crypto 1"
          onChange={(event)=>handleCryptoChange(event,false)}
          sx={{
            height: "2.5rem",
            width: { xs: "4rem", sm: "6rem", md: "8rem" },  // Responsive width
            fontSize: { xs: "0.6rem", sm: "0.8rem", md: "1rem" }, // Responsive font size
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
          MenuProps={{
            PaperProps: {
              sx: {
                backgroundColor: "#f1f1f1", // Dark theme
                maxHeight: { xs: "150px", sm: "200px", md: "300px" },
                maxWidth: { xs: "8rem", sm: "unset" }, // Reduce dropdown height for small screens
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
          className="select-coin"
          value={crypto2 || ""}
          label="Crypto 2"
          onChange={(event)=>handleCryptoChange(event,true)}
          sx={{
            height: "2.5rem",
            width: { xs: "4rem", sm: "6rem", md: "8rem" },  // Responsive width
            fontSize: { xs: "0.6rem", sm: "0.8rem", md: "1rem" }, // Responsive font size
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
          MenuProps={{
            PaperProps: {
              sx: {
                backgroundColor: "#f1f1f1", // Dark theme
                maxHeight: { xs: "150px", sm: "200px", md: "300px" },
                maxWidth: { xs: "8rem", sm: "unset" }, // Reduce dropdown height for small screens
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