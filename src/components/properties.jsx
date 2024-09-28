import './Properties.css'
import { useState,useEffect } from 'react';
import { useNavigate ,useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationPin, faMapLocationDot } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import ContactUs from './ContactUs';
import PropertyCard from './ListProperties';
import './ListProperties.css';
 const Properties=()=>{

  const location = useLocation();
  const newcity = location.state || {newcity};

  console.log(newcity);
      
  const [propertyData, setPropertyData] = useState([]);

  const [productData, setProductData] = useState([]);

  const fetchPropertiesByCity = async (city) => {
    try {
      const response = await axios.get(`http://localhost/prop/fetchProperties.php?city_id=${city}`);
      setPropertyData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchPropertiesByCity(newcity);
  }, [newcity]);

  console.log(propertyData);

    const navigate=useNavigate();

    const [options, setOptions] = useState([]);

    const fetchProduct = async () => {
      try {
        console.log('Fetching product data...');
        const response = await axios.get(`http://localhost/prop/fetchProperty_details.php?property_id=11`);
     // only update state if component is still mounted
          setProductData(response.data);
      } catch (error) {// only log error if component is still mounted
          console.error('Error fetching data:', error);
      }
    };

    useEffect(() => {
      fetchProduct();
    }, [newcity]);


    const handleClick = (property_id) => {

      const fetch_id=property_id;
       const product_data=productData.filter(data=>data.property_id===fetch_id);
           
       navigate('/product',{ state: product_data});
     };


  return (
    <div className='properties'>
        <div className='ListProp'>
        <div className="property-card-list">
      {propertyData.map(property => (
        <div key={property.property_id} className="propery-card-listing" onClick={() => handleClick(property.property_id)}>
          <div className="card-img">
              <div className="property-img-section">
                <div className="image">
                  <div className="rera">
                    <img
                      src={property.rera_image}
                      alt={property.property_name + ' Rera'}
                    />
                  </div>
                  <div className="slider-wrap">
                    <div className="slider-main">
                      <img
                        loading="lazy"
                        className="property-img"
                        src={property.property_image}
                        alt={property.property_name}
                      />
                    </div>
                  </div>
                </div>
                <div className="builder-logo-name">
                  <img
                    src={property.builder_logo}
                    alt=""
                  />
                  <div className="builder-name">
                    <p>{property.builder_name}</p>
                    <p>Builder</p>
                  </div>
                </div>
              </div>
          </div>
          <div className="card-content" style={{ position: 'relative' }}>
            <div className="property-name mobBlock">
              <a
                style={{ textDecoration: 'none', color: 'inherit' }}
                href={"shshshshs"}
              >
                <h3>{property.property_name}</h3>
              </a>
            </div>
            <div className="property-apartment">
              <div>
                <a
                  style={{ textDecoration: 'none', color: 'inherit' }}
                  href={"jsjhjajjha"}
                >
                  <span>{property.property_name}</span>
                </a>
              </div>
              <div className="share-container">
                <div className="share-button">
                  <span
                    className="share-btn act-click-share-btn"
                    data-target={`act-show-social-listing-${property.property_id}`}
                  >
                    <img
                      src="https://hfy-factsheet-projects.s3.ap-south-1.amazonaws.com/staticImages/common/common-images/share.png"
                      alt=""
                    />
                  </span>
                </div>
                <div style={{ display: 'none' }} id={`act-show-social-listing-${property.property_id}`}>
                  <div className="SocialCard showSocialCard">
                    <div className="ShareOption">
                      <a
                        data-action="share/whatsapp/share"
                        href={`https://wa.me?text=Check`}
                        target="_blank"
                        rel="noreferrer"
                        className="whatsapp"
                      >
                        <img
                          src="https://hfy-factsheet-projects.s3.ap-south-1.amazonaws.com/staticImages/common/icons/whatsapp_share.png"
                          alt="whatsapp"
                        />
                      </a>
                    </div>
                    <div className="ShareOption clip-borad-img">
                      <img
                        src="https://hfy-factsheet-projects.s3.ap-south-1.amazonaws.com/staticImages/common/icons/copy_clipboard.png"
                        onClick={() => {
                          navigator.clipboard.writeText("");
                          alert('Link copied to clipboard!');
                        }}
                        alt="copy"
                        className="copy"
                      />
                    </div>
                  </div>
                </div>
                <div className="property_select_btn" data-project-id={property.property_id}>
                  <img
                    src="https://hfy-factsheet-projects.s3.ap-south-1.amazonaws.com/staticImages/compare/add.svg"
                    className="select_btn_img"
                    alt=""
                    id="select_btn_img"
                  />
                </div>
              </div>
            </div>
            <div className="loc-data">
              <a
                style={{ textDecoration: 'none', color: 'inherit' }}
                href={""}
              >
                <div className="location-details">
                  <div className="location-address">
                    <img
                      src="https://hfy-factsheet-projects.s3.ap-south-1.amazonaws.com/staticImages/listing/icon/location-icon.png"
                      alt="location-icon"
                    />
                    <p>{property.property_location}</p>
                  </div>
                </div>
              </a>
              <div className="price-table">
                <div className="typology">
                  <img
                    src="https://hfy-factsheet-projects.s3.ap-south-1.amazonaws.com/staticImages/common/icons/home.svg"
                    className="mobBlock"
                    alt=""
                  />
                  <p>{`${property.bhk_available[0]} - ${property.bhk_available[property.bhk_available.length-1]} BHK `}</p>
                </div>
                <div className="price">
                  <p>{`₹ ${property.price} - ₹ ${property.price}`}</p>
                </div>
                <div className="carpet">
                  <p>{`${property.property_land} sqft`}</p>
                </div>
                <div
                  className="dropdown-act-btn"
                  onMouseOver={(e) => show_onMouseOver(e.currentTarget)}
                  onMouseOut={(e) => hide_onMouseOut(e.currentTarget)}
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="education-dropdown">
                    <div>7 More</div>
                  </div>
                  <div className="dropdown-arrow"></div>
                  <div className="nearby-places col-md-12">
                    {/* Additional dynamic content as per fetched data */}
                    {propertyData.map((detail, index) => (
                      <div key={index} className="price-list-dropdown">
                        <div className="typology">
                          <p>{`${detail.bhk_type} BHK`}</p>
                        </div>
                        <div className="price">
                          <p>{detail.price}</p>
                        </div>
                        <p className="carpet">{`${detail.property_land} sqft`}</p>
                        <button
                          className="view-phone enq_btn"
                          data-target="pricePlan"
                          data-pref="pricePlanEnquiry"
                          data-projectid={property.property_id}
                        >
                          On Request
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
        </div>
        <div className='contactBox'>
          <ContactUs />
        </div>
       </div>
      );
    }
export default Properties;