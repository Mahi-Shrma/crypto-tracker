import React, { useState } from 'react';
import "./style.css";

const CoinInfo = ({heading,des}) => {

const shortDesc = des.slice(0,400)+ "<span style='color:var(--blue)'> Read More....</span>";
const longDesc =  des+"<span style='color:var(--blue)'> Read Less....</span>";
const [flag,setFlag] = useState(false);

  return (
    <div className='grey-wrapper'>
        <h2 className='coin-info-name'>{heading}</h2>
        {
          des.length>200 ?(
            <p className='coin-info-des'
            onClick={()=>setFlag(!flag)}
            dangerouslySetInnerHTML={{ __html:!flag? shortDesc:longDesc }}
            />
          ):(
            <p dangerouslySetInnerHTML={{ __html:des }}  />
          )
        }
    </div>
  )
}

export default CoinInfo;