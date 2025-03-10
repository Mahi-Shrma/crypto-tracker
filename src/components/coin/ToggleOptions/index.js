import React, {useState} from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import './style.css';

export default function ToggleOptions({priceType,handleToggleChange}) {

  return (
    <div className='toggle-options'>
    <ToggleButtonGroup
      value={priceType}
      exclusive
      onChange={handleToggleChange}
      sx={{
        "& .Mui-selected": {
          color: "var(--blue) !important",
        },
        borderColor: "var(--blue)",
        border: "unset !important",
        "& .MuiToggleButtonGroup-grouped": {
          border: "1px solid !important",
          borderColor: "unset",
          color: "var(--blue)",
        },
        "& .MuiToggleButton-standard": {
          color: "var(--blue)",
        },
      }}
    >
      <ToggleButton value="prices" className="toggle-btn"> Price
      </ToggleButton>
      <ToggleButton value="market_caps" className="toggle-btn"> Market Caps
      </ToggleButton>
      <ToggleButton value="total_volumes" className="toggle-btn"> Total Volume
      </ToggleButton>
    </ToggleButtonGroup>
    </div>
  );
}
