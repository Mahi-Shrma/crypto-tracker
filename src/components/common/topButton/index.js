import React, { useEffect, useRef } from 'react';
import './style.css';
import ArrowCircleUpRoundedIcon from '@mui/icons-material/ArrowCircleUpRounded';

const TopButton = () => {
  const buttonRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        buttonRef.current.style.display = 'flex';
      } else {
        buttonRef.current.style.display = 'none';
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const topFunction = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      className='top-to-btn'
      id='myBtn'
      ref={buttonRef}
      onClick={topFunction}
      style={{ display: 'none' }}
    >
      <ArrowCircleUpRoundedIcon sx={{ fontSize: 40 }} />
    </div>
  );
};

export default TopButton;


// import React from 'react';
// import './style.css';
// import ArrowCircleUpRoundedIcon from '@mui/icons-material/ArrowCircleUpRounded';

// const TopButton = () => {

//   let mybutton = document.getElementById("myBtn");

//   // When the user scrolls down 20px from the top of the document, show the button
//   window.onscroll = function() {scrollFunction()};
  
//   function scrollFunction() {
//     if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//       mybutton.style.display = "flex";
//     } else {
//       mybutton.style.display = "none";
//     }
//   }
  
//   // When the user clicks on the button, scroll to the top of the document
//   function topFunction() {
//     document.body.scrollTop = 0;
//     document.documentElement.scrollTop = 0;
//   }

//   return (
//     <div className='top-to-btn' id='myBtn' onClick={()=> topFunction()}>
//        <ArrowCircleUpRoundedIcon sx={{ fontSize: 40 }}/>
//     </div>
//   )
// }

// export default TopButton;