import React, {useState} from 'react';
import './style.css';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { createTheme, ThemeProvider } from '@mui/material';
import Grid from '../Grid/index';
import List from '../List';

export default function TabComponent({coins,isWatchlistPage}) {
  const [value, setValue] = useState('grid');
  const [myWatchlist, setMyWatchlist] = useState([]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

const theme = createTheme({
    palette:{
        primary:{
            main:"#3a80ef",
        },
    },
});

  const style={
    color: "#fff",
    width: "50vw",
    fontSize:"1.2rem",
    fontWeight:600,
    fontFamily: "Inter",
  }

  return (
    <ThemeProvider theme={theme}>
      <TabContext value={value} >
          <TabList onChange={handleChange} variant="fullWidth">
            <Tab label="Grid" value="grid" sx={style} />
            <Tab label="List" value="list" sx={style} />
          </TabList>
        <TabPanel value="grid">
          <div className='grid-flex'>
          {coins.map((coin,i)=>{
            return <Grid coin={coin} key={i} setMyWatchlist={setMyWatchlist}/>;
          })}
          </div>
        </TabPanel>
        <TabPanel value="list">
        <table className='list-table'>
        {coins.map((item,i)=>{
          return(
            <List coin={item} key={i} setMyWatchlist={setMyWatchlist}/>
          )
        })}
        </table>
        </TabPanel>
      </TabContext>
      </ThemeProvider>
  );
}
