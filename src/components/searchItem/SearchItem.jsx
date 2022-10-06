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
        </div>
        <div className="siDetails">
            <div className="siRating">
                <span>Excellent</span>
                <button>6.8</button>
            </div>
            <div className="siDetailTexts">
                <span className="siPrice">$324</span>
                <span className="siTaxOp">Includes taxes and fees</span>
                <button className='siCheckButton'>See availability</button>
            </div>
        </div>
    </div>
  )
}

export default SearchItem