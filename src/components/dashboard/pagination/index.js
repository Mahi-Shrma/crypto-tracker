import React,{useState} from 'react';
import Pagination from '@mui/material/Pagination';
import './style.css';

export default function PaginationControlled({page,handlePageChange}) {
  
  return (
    <div>
      <Pagination className='pagination-component'
      sx={{
        color: "var(--white)",
        "& .Mui-selected ": {
          backgroundColor: "var(--blue) !important",
          color: "#fff !important",
          borderColor: "var(--blue) !important",
        },
        "& .MuiPaginationItem-ellipsis": {
          border: "0px solid var(--grey) !important",
        },
        "& .MuiPaginationItem-text": {
          color: "var(--white)",
          border: "1px solid var(--grey)",
        },
      }}
      count={10} page={page} onChange={(event,value)=>handlePageChange(event,value)} />
    </div>
  );
}
