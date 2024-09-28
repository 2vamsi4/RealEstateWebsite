import React, { useState } from 'react';
import './Home-Newly_Launched_Projects.css';

const cardData = [
  {
    id: 3129,
    href: "https://www.homesfy.in/projects/flats-in-western-mumbai/godrej-reserve-kandivali/3129",
    certifiedImgSrc: "https://hfy-factsheet-projects.s3.ap-south-1.amazonaws.com/staticImages/common/common-images/hfy-certified.png",
    propertyImgSrc: "https://hfy-factsheet-projects.s3.ap-south-1.amazonaws.com/live/3129/290-320/baner_godrej-big-bull-kandivali-east-banner.jpg",
    propertyImgAlt: "Godrej Reserve Kandivali banner",
    propertyLogoSrc: "https://hfy-factsheet-projects.s3.ap-south-1.amazonaws.com/live/logos/Godrej/logo_godrej_properties.png",
    propertyLogoAlt: "Godrej Properties logo",
    propertyTitle: "Godrej Reserve Kandivali",
    location: "Kandivali East, Mumbai, Maharashtra",
    price: "₹ 2.25Cr - ₹ 6.5Cr",
    typology: "2 - 4 bed apartment"
  },
  {
    id: 3129,
    href: "https://www.homesfy.in/projects/flats-in-western-mumbai/godrej-reserve-kandivali/3129",
    certifiedImgSrc: "https://hfy-factsheet-projects.s3.ap-south-1.amazonaws.com/staticImages/common/common-images/hfy-certified.png",
    propertyImgSrc: "https://hfy-factsheet-projects.s3.ap-south-1.amazonaws.com/live/3129/290-320/baner_godrej-big-bull-kandivali-east-banner.jpg",
    propertyImgAlt: "Godrej Reserve Kandivali banner",
    propertyLogoSrc: "https://hfy-factsheet-projects.s3.ap-south-1.amazonaws.com/live/logos/Godrej/logo_godrej_properties.png",
    propertyLogoAlt: "Godrej Properties logo",
    propertyTitle: "Godrej Reserve Kandivali",
    location: "Kandivali East, Mumbai, Maharashtra",
    price: "₹ 2.25Cr - ₹ 6.5Cr",
    typology: "2 - 4 bed apartment"
  },
  {
    id: 3129,
    href: "https://www.homesfy.in/projects/flats-in-western-mumbai/godrej-reserve-kandivali/3129",
    certifiedImgSrc: "https://hfy-factsheet-projects.s3.ap-south-1.amazonaws.com/staticImages/common/common-images/hfy-certified.png",
    propertyImgSrc: "https://hfy-factsheet-projects.s3.ap-south-1.amazonaws.com/live/3129/290-320/baner_godrej-big-bull-kandivali-east-banner.jpg",
    propertyImgAlt: "Godrej Reserve Kandivali banner",
    propertyLogoSrc: "https://hfy-factsheet-projects.s3.ap-south-1.amazonaws.com/live/logos/Godrej/logo_godrej_properties.png",
    propertyLogoAlt: "Godrej Properties logo",
    propertyTitle: "Godrej Reserve Kandivali",
    location: "Kandivali East, Mumbai, Maharashtra",
    price: "₹ 2.25Cr - ₹ 6.5Cr",
    typology: "2 - 4 bed apartment"
  },
  {
    id: 3129,
    href: "https://www.homesfy.in/projects/flats-in-western-mumbai/godrej-reserve-kandivali/3129",
    certifiedImgSrc: "https://hfy-factsheet-projects.s3.ap-south-1.amazonaws.com/staticImages/common/common-images/hfy-certified.png",
    propertyImgSrc: "https://hfy-factsheet-projects.s3.ap-south-1.amazonaws.com/live/3129/290-320/baner_godrej-big-bull-kandivali-east-banner.jpg",
    propertyImgAlt: "Godrej Reserve Kandivali banner",
    propertyLogoSrc: "https://hfy-factsheet-projects.s3.ap-south-1.amazonaws.com/live/logos/Godrej/logo_godrej_properties.png",
    propertyLogoAlt: "Godrej Properties logo",
    propertyTitle: "Godrej Reserve Kandivali",
    location: "Kandivali East, Mumbai, Maharashtra",
    price: "₹ 2.25Cr - ₹ 6.5Cr",
    typology: "2 - 4 bed apartment"
  },
  // Add more card objects here as needed
];

const Newly_Launched_Projects = () => {
  const [showSocial, setShowSocial] = useState(false);

  const handleCopyText = (element) => {
    const text = element.getAttribute('data-text');
    navigator.clipboard.writeText(text).then(() => {
      alert('Link copied to clipboard');
    });
  };

  const toggleSocial = () => {
    setShowSocial(!showSocial);
  };

  return (
    <>
    <div className='side-header'>
       <p><span>Newly Launched</span> <b>Projects</b></p>
    </div>
    <div className="featured-projects-card-list">
      <div className="slider-wrap">
        <div className="slider-main" style={{ width: `${cardData.length * 407.667}px` }}>
          {cardData.map((card) => (
            <div className="slider-item" style={{ width: '407.667px' }} key={card.id}>
              <div className="featured-projects-card property-card card">
                <a
                  style={{ textDecoration: 'none', color: 'inherit' }}
                  href={card.href}
                >
                  <div className="property-img-container">
                    <img
                      loading="lazy"
                      className="certified-img"
                      src={card.certifiedImgSrc}
                      alt={card.propertyImgAlt}
                    />
                    <img
                      loading="lazy"
                      className="property-img"
                      src={card.propertyImgSrc}
                      alt={card.propertyImgAlt}
                      title={card.propertyImgAlt}
                    />
                    <div className="property-overlay"></div>
                  </div>
                  <div className="property-details">
                    <div className="property-details-heading">
                      <h3>{card.propertyTitle}</h3>
                    </div>
                    <p className="mobBlock">
                      <img
                        src="https://hfy-factsheet-projects.s3.ap-south-1.amazonaws.com/staticImages/common/common-images/location-icon.png"
                        alt={card.location}
                        title={card.location}
                      />{' '}
                      {card.location}
                    </p>
                    <ul>
                      <li className="price">
                        <p style={{ marginTop: 'auto', marginBottom: 'auto' }}>Price</p>
                        <span>
                          <p>{card.price}</p>
                        </span>
                      </li>
                      <li className="typology">
                        Typology
                        <span>
                          <p>{card.typology}</p>
                        </span>
                      </li>
                      <li className="location">
                        Location
                        <span>{card.location}</span>
                      </li>
                      <li className="offer"></li>
                      <li className="offer-mob"></li>
                    </ul>
                  </div>
                </a>
                <div className="share-container-prop">
                  <span
                    className="share-btn-prop act-click-share-btn"
                    onClick={toggleSocial}
                  >
                    <img
                      src="https://hfy-factsheet-projects.s3.ap-south-1.amazonaws.com/staticImages/common/common-images/share.png"
                      alt=""
                    />
                  </span>
                  {showSocial && (
                    <div id={`act-show-social-${card.id}`}>
                      <div className="SocialCard showSocialCard">
                        <div className="ShareOption">
                          <a
                            data-action="share/whatsapp/share"
                            href={`https://wa.me?text=Check this project at ${card.href}`}
                            target="_blank"
                            className="whatsapp"
                            rel="noopener noreferrer"
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
                            onClick={(e) => handleCopyText(e.target)}
                            data-text={card.href}
                            alt="copy"
                            className="copy"
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div className="property-btn-container" style={{display:'none'}}>
                  <button
                    className="btn-primary"
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open('tel:+917411782414', '_self');
                    }}
                  >
                    View Phone
                  </button>
                  <button
                    className="btn-outlined"
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(
                        'https://api.whatsapp.com/send?phone=+918976997450&text=Hi, I would like to know more about Godrej Reserve Kandivali',
                        '_blank'
                      );
                    }}
                  >
                    <img
                      src="https://hfy-factsheet-projects.s3.ap-south-1.amazonaws.com/staticImages/common/icons/whatsapp.svg"
                      alt="whatsapp"
                    />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default Newly_Launched_Projects;
