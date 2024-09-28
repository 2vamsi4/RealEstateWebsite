import React from "react";
import './Home-Banner.css';
const Banner=()=>{

    return(
        <>
          <section className="banner" id="act-home-banner">
           <div className="banner-content container">
        	<div className="banner-text">
        		<p>Discover your dream home</p>
        		<div className="discover_flex_container wrapper">
        			<h1>With</h1>
        			<div className="words">
        				<span>0% Brokerage Fee</span>
        				<span>Lowest Price Guaranteed</span>
        				<span>Easy Home Loan Sanction</span>
        				<span>0% Brokerage Fee</span>
        			</div>
        		</div>    
        	</div>   
        	<div className="search-box">
        		<input type="text" class="search-input" placeholder="Search by location or project name"/>
        		<div className="temp" id="temp" style={{display: 'none'}}></div>
        		<div>
        			<div className="search-btn"> search</div>
        		</div>
        	</div>
           </div>  
          </section>
        </>
    )
};
export default Banner;