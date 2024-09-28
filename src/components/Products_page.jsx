import React, { useState, useEffect } from "react";
import './Products_page.css'
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp, faArrowRight, faTimes, faMapLocationDot } from '@fortawesome/free-solid-svg-icons';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import ContactUs from "./ContactUs";
import { useLocation } from "react-router-dom";

const Products_page = () => {

  const location = useLocation();
  const propertyData = location.state ||  {product_data} ;

  console.log(propertyData);

  const [newArray, setArray] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [selectedTab, setSelectedTab] = useState('overview');
  const [activeTab, setActiveTab] = useState('All');
  const [show_All, setShow_All] = useState(false);
  const [showCarousel, setShowCarousel] = useState(false);
  const [showAllFacilities, setShowAllFacilities] = useState(false);


  useEffect(() => {
    if (propertyData && propertyData.length > 0) {
      const imageUrls = propertyData.map(obj => obj.img_link);
      setArray(imageUrls);
    }
  }, [propertyData]);
    // Run when propertyData changes

  const handleTab = (tab) => {
    setSelectedTab(tab);
    document.getElementById(tab).scrollIntoView({ behavior: 'smooth' });
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setShowAll(tab === 'All');
  };

  const viewAll = () => {
    setShowAllFacilities(true);
  };

  const viewLess = () => {
    setShowAllFacilities(false);
  };

  const array_floors = ['All', ...Array.from(propertyData[0].bhk_available.split('-'))];

  const facilityData = [
    { name: 'Water Supply', key: 'water_supply', imageUrl: 'https://cdn-icons-png.flaticon.com/128/9746/9746852.png' },
    { name: 'Car Parking', key: 'car_parking', imageUrl: 'https://cdn-icons-png.flaticon.com/128/75/75905.png' },
    { name: 'Security', key: 'security', imageUrl: 'https://cdn-icons-png.flaticon.com/128/1022/1022382.png' },
    { name: 'Gym', key: 'gym', imageUrl: 'https://cdn-icons-png.flaticon.com/128/2382/2382633.png' },
    { name: 'Lifts', key: 'lifts', imageUrl: 'https://cdn-icons-png.flaticon.com/128/3321/3321009.png' },
    { name: 'Library', key: 'library', imageUrl: 'https://cdn-icons-png.flaticon.com/128/8074/8074804.png' },
    { name: 'Senior Citizens Area', key: 'senior_citizens_area', imageUrl: 'https://cdn-icons-png.flaticon.com/128/2512/2512391.png' },
  ];
console.log(propertyData[0].water_supply);
  const finalFacility = facilityData.filter(item => propertyData[0][item.key] === '1');

  const overview = `Ashar Arize is a luxurious property in Kalwa, Thane, that offers seamless connectivity to all business avenues. The property in Kalwa is located in a prime location and equipped with numerous amenities. Making it perfect for those who want a convenient and well-connected environment.

The Ashar Arize Kalwa project offers luxurious smart 1& 2BHK apartments in Kalwa. Each apartment at the Ashar Arize Kalwa property boasts a fantastic array of amenities and a beautiful view to allow its residents to unwind after a long day. One of the finest projects in Thane, these apartments are spacious, airy, and well-lit and provide a pleasant living environment. 

Ashar Arize Kalwa is an elite residential project in Thane, offering various amenities. It is a gated community with like-minded people. Experience a relaxing environment in this aesthetically pleasing environment that offers best-in-class amenities. Located just minutes from all the city's significant landmarks, the Ashar Arize Kalwa project provides luxurious and comfortable living for a lifetime.

Ashar Arize Kalwa is a one-of-a-kind project in the heart of Thane. Ashar Arize's upcoming projects in Thane offer world-class lifestyle amenities, facilities, and security features, including, 24x7 security, a Library, a Rooftop Community Hall, a Multipurpose court and Spectator plaza, a dedicated Indoor badminton, an Amphitheatre,Toddler’s play area, Kids play area, Trampoline park, Parents seating area, Floral gardens, and more.

A dedicated parking area is available for residents of Ashar Arize Kalwa. Consequently, you will always be able to find a parking space at Ashar Arize Kalwa.

The Ashar Arize Kalwa project is located near shopping centers, educational institutions, IT hubs, healthcare facilities, and entertainment venues. With easy access to highways and multiple public transport options, this new project in Thane is perfect for working professionals, families, and students. It provides the ideal balance of convenience and comfort. 

The residents of Ashar Arize Kalwa enjoy easy access to the rest of the city. The location places you in the city's center, right in the middle of all the hustle and bustle. This makes it easy to get to any destination quickly and efficiently. Ashar Arize Kalwa project offers a unique blend of high-quality homes, world-class amenities, and a prime location hence, it's the perfect place to call home.`;

  const aboutDeveloper = ``;

  return (
    <div className="main">
      <div className="gallery">
        <div className="main-image">
          <img src={newArray[0]} alt="Main" />
        </div>
        <div className="thumbnails">
          {showAll
            ? newArray.map((image, index) => (
              <div className="thumbnail" key={index}>
                <img src={image} alt={`Thumbnail ${index}`} />
              </div>
            ))
            : newArray.slice(1, 5).map((image, index) => (
              <div className="thumbnail" key={index}>
                <img src={image} alt={`Thumbnail ${index}`} />
              </div>
            ))}
          <div>
            {newArray.length >= 5 && (
              <div className="show-all" onClick={() => setShowCarousel(true)}>
                {show_All ? <FontAwesomeIcon icon={faAngleUp} size="3x" /> : <FontAwesomeIcon icon={faAngleDown} size='3x' />}
              </div>
            )}
          </div>
        </div>
      </div>
      {showCarousel && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setShowCarousel(false)}>
              <FontAwesomeIcon icon={faTimes} size="2x" />
            </span>
            <Carousel showThumbs={false} infiniteLoop useKeyboardArrows>
              {newArray.map((image, index) => (
                <div key={index} className="carousel-image-box">
                  <img src={image} alt={`Carousel ${index}`} />
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      )}
      <div className="content">
        <section className="price-floor-plan page-section" id="price-floor-section">
          <div className='main-floor-plan'>
          <div className='detail-container'>
             <div className="project-specification">
                 <div className="property-name">
                      <h1>{propertyData[0].property_name}</h1>
        {/* Share container */}
                        <div className="share-container">
          {/* Share button */}
                            <span className="share-btn act-click-share-btn" data-target="act-show-social-details-">
                                <img src="https://hfy-factsheet-projects.s3.ap-south-1.amazonaws.com/staticImages/common/common-images/share.png" alt="" />
                            </span>
          {/* Social details */}
                          <div style={{ display: 'none' }} id="act-show-social-details-">
                            <div className="SocialCard showSocialCard">
                               <div className="ShareOption">
                                  <a data-action="share/whatsapp/share" href="https://wa.me?text=Check this project at https://www.homesfy.in/projects/flats-in-Thane/Ashar-Arize-Kalwa/3833" target="_blank" className="whatsapp">
                                    <img src="https://hfy-factsheet-projects.s3.ap-south-1.amazonaws.com/staticImages/common/icons/whatsapp_share.png" alt="whatsapp" />
                                  </a>
                              </div>
                            <div className="ShareOption clip-borad-img">
                          <img src="https://hfy-factsheet-projects.s3.ap-south-1.amazonaws.com/staticImages/common/icons/copy_clipboard.png" alt="copy" onClick={""} data-text="https://www.homesfy.in/projects/flats-in-Thane/Ashar-Arize-Kalwa/3833" className="copy"/>
                            </div>
                              </div>
                               </div>
                                </div>
                            </div>

      {/* Property address */}
                          <div className="property-address">
                               <img src="https://hfy-factsheet-projects.s3.ap-south-1.amazonaws.com/staticImages/listing/icon/location-icon.png" alt="" />
                                 <p>{propertyData[0].property_location}</p>
                                      <a href="#location-section" target="_self">(show on map)</a>
                          </div>

      {/* Apartment details */}
      <div className="apartment-details">
        <div className="apartment">
          <p id="product-data">{`${propertyData[0].bhk_available[0]} - ${propertyData[0].bhk_available[propertyData[0].bhk_available.length-1]}BHK`}</p>
          <span>Apartment</span>
        </div>
        <div className="carpet-area">
          <p className="carpet" id="product-data">431 - 635 sqft </p>
          <div>
            <span>Carpet Area</span>
            <a href="#price-floor-section">
              <img src="https://hfy-factsheet-projects.s3.ap-south-1.amazonaws.com/staticImages/details/icon/info.png" alt="" />
            </a>
          </div>
        </div>
        <div className="builder-price">
          <p className="builder-price-range" id="product-data">₹ 82.91L - ₹ 1.22Cr</p>
          <div>
            <span>Price Range</span>
            <a href="#price-floor-section">
              <button className="builder-price-dropdown-btn">
                <img src="https://hfy-factsheet-projects.s3.ap-south-1.amazonaws.com/staticImages/common/common-images/next.png" alt="" />
              </button>
            </a>
          </div>
        </div>
        <div className="builder-price possession_date">
          <p className="possession-date" id="product-data">December, 2027</p>
          <div>
            <span>Possession Start Date</span>
          </div>
        </div>
      </div>

      {/* Details card */}
      <div className="details-card mobBlock">
        <div className="possesion-date">
          <img src="https://hfy-factsheet-projects.s3.ap-south-1.amazonaws.com/staticImages/common/icons/possaionDate.svg" alt="" />
          <div>
            <h4>Possession Date</h4>
            <p>December, 2027</p>
          </div>
        </div>
        <div className="configuration">
          <img src="https://hfy-factsheet-projects.s3.ap-south-1.amazonaws.com/staticImages/common/icons/Building.svg" alt="" />
          <div>
            <h4>Sizes, Units & configuration</h4>
            <p>
              431 sqft - 635 sqft
              <br />
              1 - 2 BHK
              <span> See floor Plan</span>
            </p>
          </div>
        </div>
        <div className="project-area">
          <img src="https://hfy-factsheet-projects.s3.ap-south-1.amazonaws.com/staticImages/common/icons/icon.svg" alt="" />
          <div>
            <h4>Project Area</h4>
            <p id="product-data">2.04 Acres</p>
          </div>
        </div>
        <div className="storeys">
          <img src="https://hfy-factsheet-projects.s3.ap-south-1.amazonaws.com/staticImages/common/icons/ProjectSize.svg" alt="" />
          <div>
            <h4>Project Size</h4>
            <p id="product-data">2 Towers - 40 Storeys</p>
          </div>
        </div>
        <div className="status">
          <img src="https://hfy-factsheet-projects.s3.ap-south-1.amazonaws.com/staticImages/common/icons/Launch.svg" alt="" />
          <div>
            <h4>Construction Status</h4>
            <p id="product-data">Under construction</p>
          </div>
        </div>
        <div className="rera-id">
          <img src="https://hfy-factsheet-projects.s3.ap-south-1.amazonaws.com/staticImages/common/icons/RERA.svg" alt="" />
          <div>
            <h4>Rera ID</h4>
            <p id="product-data">P51700034211</p>
          </div>
        </div>
        <div className="details-card-btn-container">
          <button className="btn-primary enq_btn" data-projectid="3833" data-pref="floorplan_enquiryForm">
            Get a call back
          </button>
          <button
            className="btn-outlined"
            data-action="share/whatsapp/share"
            onClick={() =>{}}
          >
            <img src="https://hfy-factsheet-projects.s3.ap-south-1.amazonaws.com/staticImages/common/icons/whatsapp.svg" alt="" />
          </button>
        </div>
      </div> 
    </div>
    <section className="project-highlight-section">
      <div className="project-highlights">
        <ul>
          <li>
            <p id="product-data">2.04 Acres</p>
            <p>Project Area</p>
          </li>
          <li>
            <p>
              <span id="product-data">2 Towers - 40 Storeys</span>
            </p>
            <p>Project Size</p>
          </li>
          <li>
            <p id="product-data">Under construction</p>
            <p>Construction Status</p>
          </li>
        </ul>
      </div>
    </section>
    </div>
            <div className="product-content">
              <div className="tabs-bar-main">
                <button onClick={() => handleTab('overview')} className={selectedTab === 'overview' ? 'active' : ''}>Overview</button>
                <button onClick={() => handleTab('price-floor-plan')} className={selectedTab === 'price-floor-plan' ? 'active' : ''}>Price & Floor Plan</button>
                <button onClick={() => handleTab('amenities')} className={selectedTab === 'amenities' ? 'active' : ''}>Amenities</button>
                <button onClick={() => handleTab('about-developer')} className={selectedTab === 'about-developer' ? 'active' : ''}>About Developer</button>
                <button onClick={() => handleTab('neighbourhood')} className={selectedTab === 'neighbourhood' ? 'active' : ''}>Neighbourhood</button>
                <button onClick={() => handleTab('emi-calculator')} className={selectedTab === 'emi-calculator' ? 'active' : ''}>EMI Calculator</button>
              </div>
              <div className="tabs-content">
                <div id="overview" className="tab-content">
                  <div className='side-header'>
                    <p><span>Overview</span> <b>{propertyData[0].project_name}</b></p>
                  </div>
                  <div className="overview-content">
                    <ReadMore content={overview} />
                  </div>
                </div>
                <div id="price-floor-plan" className="tab-content">
                  <div className="side-header">
                    <p><span>Price</span> <b>&amp; floor plan</b></p>
                  </div>
                  <div className="floor-tab-container">
                    {array_floors.map((tab) => (
                      <div
                        key={tab}
                        className={`tab-card ${activeTab === tab ? 'active' : ''}`}
                        onClick={() => handleTabClick(tab)}
                      >
                        <h4>{`${tab} BHK`}</h4>
                        <p>{propertyData.filter(plan => tab === 'All' || plan.bhk_type === tab).length}</p>
                      </div>
                    ))}
                  </div>
                  <div className="floor-plan-container">
                    {propertyData.filter(plan => activeTab === 'All' || plan.bhk_type === activeTab).map((plan, index) => (
                      <div key={index} className={`floor-card-${activeTab} ${showAll ? 'show' : ''}`}>
                        <div className={`floor-card ${activeTab === 'All' ? 'active' : ''}`} tab-panel={activeTab}>
                          <div className="floor-plan">
                            <div className="floor-img">
                              <div data-lightbox="">
                                <img src={plan.floor_image} alt="floor-plan" />
                              </div>
                            </div>
                            <div className="floor-price">
                              <div className="rupee-img">
                                <img src="https://hfy-factsheet-projects.s3.ap-south-1.amazonaws.com/staticImages/common/icons/rupee.svg" alt="rupee" />
                              </div>
                              <div className="price-info">
                                <p>
                                  {`${plan.price} L`}
                                </p>
                                <span className="apt-name">{`${plan.bhk_type} BHK`}</span>
                              </div>
                            </div>
                            <div className="floor-area">
                              <div className="carpet_img">
                                <img src="https://hfy-factsheet-projects.s3.ap-south-1.amazonaws.com/staticImages/common/icons/carpet.svg" alt="carpet" />
                              </div>
                              <div className="floor-info">
                                <p>{`${plan.project_area} sq.Ft`}</p>
                                <span>Carpet Area</span>
                              </div>
                            </div>
                            <div className="floor-enquire-btn">
                              <button className="btn-outlined enq_btn" data-projectid="3623" data-pref="floorplan_enquiryForm">
                                Enquire Now
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div id="amenities" className="tab-content">
                  <div className="side-header">
                    <p className="heading"><span>Amenities</span></p>
                  </div>
                  <section className="amenities page-section active-section" id="amenities-section">
                    <div>
                      <div className="amenities-list">
                        <ul className="load-more-container">
                          {finalFacility.map((facility, index) => (
                            <li key={index} className="load-more-card show">
                              <img src={facility.imageUrl} alt={facility.name} />
                              <p>{facility.name}</p>
                            </li>
                          ))}
                           {/*finalFacility.length > 4 && !showAllFacilities && (
                            <span className="btn load-more" id="amenitiesBtn" onClick={viewAll}>
                              <img src="https://hfy-factsheet-projects.s3.ap-south-1.amazonaws.com/staticImages/common/icons/down-arrow.svg" alt="Show more amenities" />
                            </span>
                          )}
                          {finalFacility.length > 4 && showAllFacilities && (
                            <span className="btn load-less" onClick={viewLess}>
                              <img src="https://hfy-factsheet-projects.s3.ap-south-1.amazonaws.com/staticImages/common/icons/down-arrow.svg" alt="Show less amenities" />
                            </span>
                          )*/} 
                        </ul>
                      </div>
                    </div>
                  </section>
                </div>
                <div id="about-developer" className="tab-content">
                  <div className="side-header">
                    <p><span>About</span> <b>{propertyData.builder_name}</b></p>
                  </div>
                  <div>
                    <ReadMore content={aboutDeveloper} />
                  </div>
                </div>
                <div id="neighbourhood" className="tab-content">
                  <div className="side-header">
                    <p><span>Neighbourhood</span></p>
                  </div>
                </div>
                <div id="emi-calculator" className="tab-content">
                  <div className="side-header">
                    <p><span>EMI</span> <b>Calculator</b></p>
                  </div>
                </div>
              </div>
            </div>
            <div className="more-less-btn">
              <div className="btn load-more-all active" tab-panel="All" id="floorplanBtn" onClick={() => setShowAll(true)} style={{ display: 'none' }}>
                <img src="https://hfy-factsheet-projects.s3.ap-south-1.amazonaws.com/staticImages/common/icons/down-arrow.svg" alt="" />
              </div>
              <button className="btn load-floor-less active" tab-panel="All" onClick={() => setShowAll(false)} style={{ display: 'flex' }}>
                <img src="https://hfy-factsheet-projects.s3.ap-south-1.amazonaws.com/staticImages/common/icons/down-arrow.svg" alt="" />
              </button>
            </div>
          </div>
          <div className='contactUs'>
            <ContactUs />
          </div>
        </section>
      </div>
    </div>
  );
};

const ReadMore = ({ content }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = (e) => {
    e.preventDefault();
    setIsExpanded(!isExpanded);
  };

  const renderContent = () => {
    if (isExpanded) {
      return content;
    }

    const lines = content.split('\n');
    const initialContent = lines.slice(0, 4).join('\n');
    return initialContent;
  };

  return (
    <div>
      <pre style={{ whiteSpace: 'pre-wrap', wordWrap: 'break-word' }}>{renderContent()}</pre>
      <a href="#" onClick={toggleReadMore} style={{ color: 'green', cursor: 'pointer' }}>
        {isExpanded ? 'Read Less-' : 'Read More+'}
      </a>
    </div>
  );
};

export default Products_page;
