import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocation } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import MailList from '../../components/mailList/MailList';
import Navbar from '../../components/navbar/Navbar';
import './hotel.css';

const Hotel = () => {
  const [sliderNumber, setSliderNumber] = useState(0);
  const [open, setOpen] = useState(false);

  const handleOpen = (index) => {
    setSliderNumber(index);
    setOpen(true);
  }

  const handleMove =(direction) => {
    let newSliderNumber ;
    if(direction ==='l'){
      newSliderNumber = sliderNumber === 0 ?  photos.length-1 : sliderNumber - 1
    }else{
       newSliderNumber = sliderNumber === photos.length-1 ? 0 : sliderNumber + 1
  
    }
    setSliderNumber(newSliderNumber);
  }
  const photos = [
    {
       src:'https://t-cf.bstatic.com/xdata/images/hotel/square600/265267113.webp?k=bca6d3452a0af611decc227023a12ed4da6cdd6b5418fbc7ca452bbf633f2a12&o=&s=1'
      
    },
    {
      src:'https://t-cf.bstatic.com/xdata/images/hotel/square600/113662226.webp?k=0dc2a1b6ade1b7c550db532eac0a3c684dab2a64c77ca1cec7f6548ec25a85f7&o=&s=1'
    },
    {
      src:'https://t-cf.bstatic.com/xdata/images/hotel/square600/271123005.webp?k=8cc23241df53e7af16652b1ec1481fd2ed0d63267fb756996d5f8ac9856b5715&o=&s=1'
    },
    {
       src:'https://t-cf.bstatic.com/xdata/images/hotel/square600/157255460.webp?k=aba676e82aee2fa82ae65af312d4b32f92216e61f180400895f65add0d95df98&o=&s=1'
      
    },
    {
       src:'https://t-cf.bstatic.com/xdata/images/hotel/square600/329180680.webp?k=dfb6d6960ee70c7d304fec2a9e6a8b69b2a741231e3b2d2928f840078cf5eff3&o=&s=1'
      
    },
    {
       src:'https://t-cf.bstatic.com/xdata/images/hotel/square600/379717661.webp?k=7c2c6dbe7fc36e2d8df2d2990b60904077f09f704cc066a860ccb3eaf0b388f3&o=&s=1'
      
    },
    {
       src:'https://t-cf.bstatic.com/xdata/images/hotel/square600/299404332.webp?k=2114095c28fbfd61de976645539a43a7ebd6eed4760b636b40a995c291f03b8b&o=&s=1'
      
    },
    {
       src:'https://t-cf.bstatic.com/xdata/images/hotel/square600/120849918.webp?k=f3f9e53d44dc0604de46341a85e63ce680198b96299fb5982c22c9487e0c2f5b&o=&s=1'
      
    },
    {
       src:'https://t-cf.bstatic.com/xdata/images/hotel/square600/37258145.webp?k=3556384dd7504ccb196e6a8c462f9d4a95ef657b5fd843dec956aa25df3078df&o=&s=1'
      
    },
  ]
  return (
    <div>
      <Navbar />
      <Header type='list'/>
      <div className="hotelContainer">
       {open && (<div className="slider">
          <FontAwesomeIcon
           icon={faCircleXmark}
            className='close'
            onClick={()=>setOpen(false)}
            />
          <FontAwesomeIcon
           icon={faCircleArrowLeft} 
           className='arrow'
           onClick={()=>handleMove('l')}
           />
              <div className="sliderWrapper">
                <img 
                  src={photos[sliderNumber].src}
                   alt="" 
                   className="sliderImg" />
              </div>
          <FontAwesomeIcon 
          icon={faCircleArrowRight}
           className='arrow'
            onClick={()=>handleMove('r')}
           />
        </div>)}
        <div className="hotelWrapper">
          <button className="bookNow">
            Reserve or Book Now!
          </button>
          <h1 className="hotelTitle">Grand Hotel</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon ={faLocation}/>
            <span>13, Maitama Road, Abuja</span>
          </div>
          <span className="hotelDistance">
            Excel location - 300m from center
          </span>
          <span className="hotelPriceHighlight">
            Book a stay at this property for over $500 and 
            get free airport taxi
          </span>
          <div className="hotelImages">
              {
                photos.map((photo, index) => (
                  <div key={index} className='hotelImgWrapper'>
                    <img 
                    src={photo.src}
                    alt=''
                    className='hotelImg' 
                    onClick={()=>handleOpen(index)}                    
                    />
                  </div>
                ))
              }
          </div>
          <div className="hotelDetails">
              <div className="hotelDetailsText">
                  <h1 className="hotelTitle">Stay in the heart of Abuja</h1>
                  <p className="hotelDesc">
                    Situated on the doorstep of Trinity College and a stone’s throw from Dublin’s financial centre, the IFSC,
                     The Lombard is an oasis from the hustle and bustle of the city.
                     Just 10-15 minutes’ walk from Trinity College, Maldron Hotel Pearse Street features bright rooms with en suite bathrooms. 
                     The Bord Gáis Energy Theatre is just a 5-minute walk away.
                     With panoramic views across Dublin Port, The Gibson Hotel is next to the 3Arena. 
                     It boasts bedrooms with en-suite bathrooms, a 24-hour gym, a fine restaurant, and secure private parking.
                  </p>
                  <p className="hotelDesc">
                    Situated on the doorstep of Trinity College and a stone’s throw from Dublin’s financial centre, the IFSC,
                     The Lombard is an oasis from the hustle and bustle of the city.
                     Just 10-15 minutes’ walk from Trinity College, Maldron Hotel Pearse Street features bright rooms with en suite bathrooms. 
                     The Bord Gáis Energy Theatre is just a 5-minute walk away.
                     With panoramic views across Dublin Port, The Gibson Hotel is next to the 3Arena. 
                     It boasts bedrooms with en-suite bathrooms, a 24-hour gym, a fine restaurant, and secure private parking.
                  </p>
              </div>
              <div className="hotelDetailsPrice">
                <h1>Perfect for a 9-night stay!</h1>
                <span>
                  Situated on the doorstep of Trinity College and a stone’s throw from Dublin’s financial centre, the IFSC,
                     The Lombard is an oasis from the hustle and bustle of the city.
                </span>
                <h2> <b>$565</b> (9 nights) </h2>
                <button>Reserve or Book Now!</button>
              </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
    </div>
  )
}

export default Hotel