import React from 'react';
import './Home.css';
import './Side-Header.css';
import axios from 'axios';
import { useRef ,useState,useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import {faSearch} from '@fortawesome/free-solid-svg-icons'
import {useNavigate} from 'react-router-dom';
import './TextReveal.css';
import Top_Selling_Projects from './Home-Top_Selling_Projects';
import Banner from './Home-Banner';
import Choose_Your_City from './Home-CYC';
import Newly_Launched_Projects from './Home-Newly_Launched_Projects';

  const logos = [
    { id: 1, imageUrl: 'https://th.bing.com/th/id/OIP.CqUSHPEq2WIqagToiFmL8gHaFj?w=211&h=180&c=7&r=0&o=5&pid=1.7' },
    { id: 2, imageUrl: 'https://th.bing.com/th/id/OIP.CqUSHPEq2WIqagToiFmL8gHaFj?w=211&h=180&c=7&r=0&o=5&pid=1.7' },
    { id: 3, imageUrl: 'https://th.bing.com/th/id/OIP.CqUSHPEq2WIqagToiFmL8gHaFj?w=211&h=180&c=7&r=0&o=5&pid=1.7' },
    { id: 4, imageUrl: 'https://th.bing.com/th/id/OIP.CqUSHPEq2WIqagToiFmL8gHaFj?w=211&h=180&c=7&r=0&o=5&pid=1.7' },
    { id: 5, imageUrl: 'https://th.bing.com/th/id/OIP.CqUSHPEq2WIqagToiFmL8gHaFj?w=211&h=180&c=7&r=0&o=5&pid=1.7' },
    { id: 6, imageUrl: 'https://th.bing.com/th/id/OIP.CqUSHPEq2WIqagToiFmL8gHaFj?w=211&h=180&c=7&r=0&o=5&pid=1.7' },
    { id: 7, imageUrl: 'https://th.bing.com/th/id/OIP.CqUSHPEq2WIqagToiFmL8gHaFj?w=211&h=180&c=7&r=0&o=5&pid=1.7' },
    { id: 8, imageUrl: 'https://th.bing.com/th/id/OIP.CqUSHPEq2WIqagToiFmL8gHaFj?w=211&h=180&c=7&r=0&o=5&pid=1.7' },
    { id: 9, imageUrl: 'https://th.bing.com/th/id/OIP.CqUSHPEq2WIqagToiFmL8gHaFj?w=211&h=180&c=7&r=0&o=5&pid=1.7' },
    { id: 10, imageUrl: 'https://th.bing.com/th/id/OIP.CqUSHPEq2WIqagToiFmL8gHaFj?w=211&h=180&c=7&r=0&o=5&pid=1.7' },
    { id: 11, imageUrl: 'https://th.bing.com/th/id/OIP.CqUSHPEq2WIqagToiFmL8gHaFj?w=211&h=180&c=7&r=0&o=5&pid=1.7' },
    { id: 12, imageUrl: 'https://th.bing.com/th/id/OIP.CqUSHPEq2WIqagToiFmL8gHaFj?w=211&h=180&c=7&r=0&o=5&pid=1.7' },
  ];


const Home = () => {
  const [cities, setCity] = useState([]);

  useEffect(()=>{
    axios.get(`http://localhost/prop/cities.php`).then((posRes)=>{
        const {data} = posRes;
        setCity(data);
    },(errRes)=>{
        console.log(errRes);
    })
},[cities]);

console.log(cities);

const navigate=useNavigate();


  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (direction === 'left') {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };

  const searchToggle=(obj, evt)=>{
    var container = $(obj).closest('.search-wrapper');
        if(!container.hasClass('active')){
            container.addClass('active');
            evt.preventDefault();
        }
        else if(container.hasClass('active') && $(obj).closest('.input-holder').length == 0){
            container.removeClass('active');
            // clear input
            container.find('.search-input').val('');
        }
}


  const [mobileNumber, setMobileNumber] = useState('');
  const [fade, setFade] = useState(false);

  const handleSubmitButton = () => {
    if (mobileNumber) {
      alert(`Mobile Number Submitted: ${mobileNumber}`);
      setFade(true);
    } else {
      alert('Please enter a mobile number');
    }
  };

  const [index, setIndex] = useState(0);
      const items =['Easy HomeLoan Sanction', '0% Brokerage Fee', 'Lowest Price Guaranteed'];
      const delay = 2000; // 2 seconds 
  return (
    
  <div className='main'>
    <Banner/>
    <Choose_Your_City message={cities}/>
    <Top_Selling_Projects/>
    <Newly_Launched_Projects/>
    <div className="content-with-buttons">
      <div className="content-buttons">
        <div className='side-header'>
           <p><span>Always In The </span> <b>News!</b></p>
        </div>
        <p>As we recently got our listing in the National Stock Exchange, we have published a news post to let you know what we have been up to.</p>
      </div>
      <div className="buttons">
        <img src='https://th.bing.com/th/id/OIP.CqUSHPEq2WIqagToiFmL8gHaFj?w=211&h=180&c=7&r=0&o=5&pid=1.7' alt="Button 1" className="button-image" />
        <img src='https://th.bing.com/th/id/OIP.CqUSHPEq2WIqagToiFmL8gHaFj?w=211&h=180&c=7&r=0&o=5&pid=1.7' alt="Button 2" className="button-image" />
        <img src='https://th.bing.com/th/id/OIP.CqUSHPEq2WIqagToiFmL8gHaFj?w=211&h=180&c=7&r=0&o=5&pid=1.7' alt="Button 3" className="button-image" />
        <img src='https://th.bing.com/th/id/OIP.CqUSHPEq2WIqagToiFmL8gHaFj?w=211&h=180&c=7&r=0&o=5&pid=1.7' alt="Button 4" className="button-image" />
      </div>
    </div>
    <div className="centered-content-with-search">
      <div className="content-consult">
        <h1 className='reveal'>Looking for the property ?</h1>
        <p className='reveal'>Consult with the Real estate expert - </p>
        <div className={`consultant ${fade ? 'fade-out' : ''}`}>
        <div className="input-container">
        <input
          type="text"
          value={mobileNumber}
          onChange={(e) => setMobileNumber(e.target.value)}
          placeholder="Enter your mobile number"
        />
        <button className="no-submit" onClick={handleSubmitButton}>Submit</button>
      </div>
    </div>
  </div>
    </div>
     <div className='side-header'>
      <p><span>Featured</span> <b>Developers</b></p>
     </div>
      <div className='Featured-Developers'>
        <div className="logo-scroll-developers">
         <div className="logo-container-developers">
          {logos.map(logo => (
            <div key={logo.id} className="logo-item">
              <img src={logo.imageUrl} alt={`Logo ${logo.id}`} />
            </div>
              ))}
            </div>
         </div>
      </div>
  </div>
  );
};

export default Home;
