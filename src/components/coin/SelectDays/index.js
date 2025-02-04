import React, {useState} from 'react';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import './style.css';

export default function SelectDays({days,handleDaysChange,noPTag}) {
  

  return (
    <div sx={{ minWidth: 120 }} className="select-days">
     {!noPTag && <p>Price changes in </p> } 
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={days}
          label="Days"
          onChange={handleDaysChange}
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
          <MenuItem value={7}>7 days</MenuItem>
          <MenuItem value={30}>30 days</MenuItem>
          <MenuItem value={60}>60 days</MenuItem>
          <MenuItem value={90}>90 days</MenuItem>
          <MenuItem value={120}>120 days</MenuItem>
          <MenuItem value={365}>1 year</MenuItem>
        </Select>
    </div>
  );
}
