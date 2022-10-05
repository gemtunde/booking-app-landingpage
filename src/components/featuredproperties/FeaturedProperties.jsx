import React from 'react';
import './featuredProperties.css';

const FeaturedProperties = () => {
  return (
    <div className="fp">
        <div className="fpItem">       
            <img 
            src='https://t-cf.bstatic.com/xdata/images/hotel/square600/159183405.webp?k=66d594065e68c4bddf9dbd56e6188ef5823dfee66808b172c85542204020fff3&o=&s=1'
            alt='dublin'
            className='fpImg'
            />
            <span className="fpName">ApartStar Hotel</span>
            <span className="fpCity">Abuja</span>
            <span className="fpPrice">Starting from $1200</span>
            <div className="fpRating">
                 <button>7.6</button>
                 <span>Excellent</span>
             </div>
       </div>
        <div className="fpItem">       
            <img 
            src='https://t-cf.bstatic.com/xdata/images/hotel/square600/329180680.webp?k=dfb6d6960ee70c7d304fec2a9e6a8b69b2a741231e3b2d2928f840078cf5eff3&o=&s=1'
            alt='dublin'
            className='fpImg'
            />
            <span className="fpName">ApartStar Hotel</span>
            <span className="fpCity">Abuja</span>
            <span className="fpPrice">Starting from $1200</span>
             <div className="fpRating">
                 <button>7.6</button>
                 <span>Excellent</span>
             </div>
          
       </div>
        <div className="fpItem">       
            <img 
          src='https://t-cf.bstatic.com/xdata/images/hotel/square600/45307632.webp?k=c914fd15968d699e0f6ca3ef0d7492a7275f5f76493b25553cff7ffc1f2aa9b2&o=&s=1'
          alt='dublin'
            className='fpImg'
            />
            <span className="fpName">ApartStar Hotel</span>
            <span className="fpCity">Abuja</span>
            <span className="fpPrice">Starting from $1200</span>
            <div className="fpRating">
                 <button>7.6</button>
                 <span>Excellent</span>
             </div>
       </div>
        <div className="fpItem">       
            <img 
           src='https://t-cf.bstatic.com/xdata/images/hotel/square600/207344786.webp?k=95a878434d152788c2d6ad3ec156cb891a488ece1514068e0110e1fd6614801a&o=&s=1'
           alt='dublin'
            className='fpImg'
            />
            <span className="fpName">ApartStar Hotel</span>
            <span className="fpCity">Abuja</span>
            <span className="fpPrice">Starting from $1200</span>
            <div className="fpRating">
                 <button>7.6</button>
                 <span>Excellent</span>
             </div>
       </div>
     </div>
  )
}

export default FeaturedProperties