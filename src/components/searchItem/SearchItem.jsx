import React from 'react';
import './searchItem.css';

const SearchItem = () => {
  return (
    <div className='searchItem'>
       <img 
            src='https://t-cf.bstatic.com/xdata/images/hotel/square600/265267113.webp?k=bca6d3452a0af611decc227023a12ed4da6cdd6b5418fbc7ca452bbf633f2a12&o=&s=1'
             alt='dublin'
             className='siImg'
        />
        <div className="siDesc">
          <h1 className='siTitle'> Hilton Garden Inn </h1>
          <span className='siDistance'> 500m from center</span>
          <span className='siTaxiOp'> Free airport taxi</span>
          <span className='siSubtitle'> Studio apartment with air conditioning</span>
          <span className='siFeatures'> 
            Entire studio . 1 bathroom . 21m 1 full bed
          </span>
          <span className='siCancelOp'> Free cancellation</span>
          <span className='siCancelOpSubtitle'> 
            You can cancel later, so lock in this great price today!
           </span>
          <span className='siDistance'> 500m from center</span>
        </div>
        <div className="siDetails">see details</div>
    </div>
  )
}

export default SearchItem