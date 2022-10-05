import React from 'react'
import './featured.css'

const Featured = () => {
  return (
   <div className="featured">
      <div className="featuredItem">
        <img 
        src='https://t-cf.bstatic.com/xdata/images/hotel/square600/113662226.webp?k=0dc2a1b6ade1b7c550db532eac0a3c684dab2a64c77ca1cec7f6548ec25a85f7&o=&s=1'
        alt='dublin'
        className='featuredImg'
        />
        <div className="featuredTitles">
          <h1>Dublin Skylon HotelOpens in new window</h1>
          <h3>123 Properties</h3>
        </div>
      </div>
      <div className="featuredItem">
        <img 
        src='https://t-cf.bstatic.com/xdata/images/hotel/square600/72674132.webp?k=32052e9f30ff333dd906ca571e6d14d710dc13d527577616e6363077d6c60a6a&o=&s=1'
        alt='dublin'
         className='featuredImg'
        />
        <div className="featuredTitles">
          <h1>Hilton Garden Inn Dublin City Centre</h1>
          <h3>123 Properties</h3>
        </div>
      </div>
     
      <div className="featuredItem">
        <img 
        src='https://t-cf.bstatic.com/xdata/images/hotel/square600/320599163.webp?k=c63ed9019ac9b7082fd8685afeaeb9ee420493927d84d6851fdf2299cadf0c7f&o=&s=1'
        alt='dublin'
         className='featuredImg'
        />
        <div className="featuredTitles">
          <h1>Pembroke Townhouse</h1>
          <h3>Pembroke Properties</h3>
        </div>
      </div>
   </div>
  )
}

export default Featured