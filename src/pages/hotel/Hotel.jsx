import { faLocation } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import MailList from '../../components/mailList/MailList';
import Navbar from '../../components/navbar/Navbar';
import './hotel.css';

const Hotel = () => {
  const photos = [
    {
       src:'https://t-cf.bstatic.com/xdata/images/hotel/square600/265267113.webp?k=bca6d3452a0af611decc227023a12ed4da6cdd6b5418fbc7ca452bbf633f2a12&o=&s=1'
      
    },
    {
       src:'https://t-cf.bstatic.com/xdata/images/hotel/square600/265267113.webp?k=bca6d3452a0af611decc227023a12ed4da6cdd6b5418fbc7ca452bbf633f2a12&o=&s=1'
      
    },
    {
       src:'https://t-cf.bstatic.com/xdata/images/hotel/square600/265267113.webp?k=bca6d3452a0af611decc227023a12ed4da6cdd6b5418fbc7ca452bbf633f2a12&o=&s=1'
      
    },
    {
       src:'https://t-cf.bstatic.com/xdata/images/hotel/square600/265267113.webp?k=bca6d3452a0af611decc227023a12ed4da6cdd6b5418fbc7ca452bbf633f2a12&o=&s=1'
      
    },
    {
       src:'https://t-cf.bstatic.com/xdata/images/hotel/square600/265267113.webp?k=bca6d3452a0af611decc227023a12ed4da6cdd6b5418fbc7ca452bbf633f2a12&o=&s=1'
      
    },
    {
       src:'https://t-cf.bstatic.com/xdata/images/hotel/square600/265267113.webp?k=bca6d3452a0af611decc227023a12ed4da6cdd6b5418fbc7ca452bbf633f2a12&o=&s=1'
      
    },
    {
       src:'https://t-cf.bstatic.com/xdata/images/hotel/square600/265267113.webp?k=bca6d3452a0af611decc227023a12ed4da6cdd6b5418fbc7ca452bbf633f2a12&o=&s=1'
      
    },
    {
       src:'https://t-cf.bstatic.com/xdata/images/hotel/square600/265267113.webp?k=bca6d3452a0af611decc227023a12ed4da6cdd6b5418fbc7ca452bbf633f2a12&o=&s=1'
      
    },
  ]
  return (
    <div>
      <Navbar />
      <Header type='list'/>
      <div className="hotelContainer">
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
                    className='hotelImg' />
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