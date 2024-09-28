import React from "react";
import {useNavigate} from "react-router-dom";
import './Home-CYC.css';
const Choose_Your_City=({message})=>{

    const cities=message;

    const navigate=useNavigate();

  const handleSearch = (city) => {
    const newcity=city;
    navigate('/properties', { state: newcity});
  };

    return(
        <>
         <div className='side-header'>
          <p><span>Choose</span> <b>your city</b></p>
         </div>
         <div className="choose-city">
           <div className="product-list">
            {cities.map(city => (
            <div key={city.id} className="product-item" onClick={()=>handleSearch(city.city_id)}>
             <div className='cityImg'>
               <img src={city.city_image} alt={city.city_name} className="product-image" />
             </div>
             <div className="product-details">
               <h3 className="product-name">{city.city_name}</h3>
               <p className="product-price">{`PROJECTS ${cities.filter(product_now =>product_now.city_name==city.city_name).length}`}</p>
             </div>
            </div>
             ))}
           </div>
         </div>
        </>
    )
}
export default Choose_Your_City;