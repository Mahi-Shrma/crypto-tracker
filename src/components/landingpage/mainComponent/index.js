import React from 'react';
import "./style.css";
import Button from '../../common/button';
import iphone from '../../../assets/iphone.png';
import gradient from '../../../assets/gradient.png';
import {motion} from 'framer-motion';
import { Link } from 'react-router-dom';
import Footer from '../../common/footer';

const MainComponent = () => {
  return (
    <>
    <div className='flex-info'>
        <div className='left-component'>
            <motion.h1 
            initial={{opacity:0, y:50}}
            animate={{ opacity:1, y:0}}
            transition={{duration: 0.5}}
            className='track-crypto-heading'>
                Track Crypto
            </motion.h1>
            <motion.h1 
            initial={{opacity:0, y:50}}
            animate={{ opacity:1, y:0}}
            transition={{duration: 0.5, delay:0.5}}
            className='real-time-heading'>
                Real Time.
            </motion.h1>
            <motion.p 
            initial={{opacity:0, y:50}}
            animate={{ opacity:1, y:0}}
            transition={{duration: 0.5, delay:0.75}}
            className='info-text'>
                Track crypto through a public api in real time. Visit the dashboard to do so!
            </motion.p>
            <motion.div 
            initial={{opacity:0, x:50}}
            animate={{ opacity:1, x:0}}
            transition={{duration: 0.5, delay:1.5}}
            className='btn-flex'>
                <Link to="/dashboard">
                <Button text={"Dashboard"} onClick={() => console.log("Dashboard Clicked")}/>
                </Link>
                <Button text={"Share app"} outlined={true}/>
            </motion.div>
        </div>
        <div className='right-component'>
            <motion.img src={iphone} 
            className='iphone'
            initial={{y: -10}}
            animate={{y:10}}
            transition={{
                type:"smooth",
                repeatType:"mirror",
                duration:2,
                repeat:Infinity,
            }}
            />
            <img src={gradient} className='gradient'/>
        </div>
    </div>
 <Footer style={{marginTop:"20%"}}/>
 </>
  )
}

export default MainComponent;