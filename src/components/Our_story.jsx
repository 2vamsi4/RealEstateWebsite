import React from "react";
import './Our_story.css';
import './Side-Header.css';
import { useRef ,useState,useEffect } from "react";
import './AchievementsTracker.css';
const Our_story=()=>{

  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleVideoClick = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const [achievements, setAchievements] = useState({
    2020: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    2021: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    2022: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    2023: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    2024: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    2025: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac orci in mauris gravida hendrerit."
  });

  const services = [
    { title: "Web Development", description: "Building responsive and modern websites." },
    { title: "Graphic Design", description: "Creating visual content to communicate messages." },
    { title: "Digital Marketing", description: "Promoting products or brands via digital channels." },
    { title: "SEO Optimization", description: "Improving the visibility of a website on search engines." },
    { title: "Content Writing", description: "Producing engaging and relevant content for websites." },
    { title: "App Development", description: "Creating applications for mobile devices and desktops." }
  ];

  const families = [
    { name: "Smith Family", description: "A family of five living in the suburbs." },
    { name: "Johnson Family", description: "A family of three who loves outdoor activities." },
    { name: "Williams Family", description: "A large extended family known for their reunions." },
    { name: "Brown Family", description: "A family that runs a local bakery." },
    { name: "Jones Family", description: "A small family with a passion for traveling." },
    { name: "Garcia Family", description: "A family of musicians and artists." }
  ];

  const profiles = [
    {
      name: "John Doe",
      image: "https://static.startuptalky.com/2021/05/Elon_Musk_most_famous_entreprenuers.png",
      linkedIn: "https://www.linkedin.com/in/johndoe"
    },
    {
      name: "Jane Smith",
      image: "https://static.startuptalky.com/2021/05/Elon_Musk_most_famous_entreprenuers.png",
      linkedIn: "https://www.linkedin.com/in/janesmith"
    },
    {
      name: "Alice Johnson",
      image: "https://static.startuptalky.com/2021/05/Elon_Musk_most_famous_entreprenuers.png",
      linkedIn: "https://www.linkedin.com/in/alicejohnson"
    },
    {
      name: "Bob Brown",
      image: "https://static.startuptalky.com/2021/05/Elon_Musk_most_famous_entreprenuers.png",
      linkedIn: "https://www.linkedin.com/in/bobbrown"
    },
    {
      name: "Charlie White",
      image: "https://static.startuptalky.com/2021/05/Elon_Musk_most_famous_entreprenuers.png",
      linkedIn: "https://www.linkedin.com/in/charliewhite"
    },
    {
      name: "Emily Davis",
      image: "https://static.startuptalky.com/2021/05/Elon_Musk_most_famous_entreprenuers.png",
      linkedIn: "https://www.linkedin.com/in/emilydavis"
    }
  ];


  const [selectedYear, setSelectedYear] = useState(Object.keys(achievements)[0]);
  const [progress, setProgress] = useState(0);

  const handleYearChange = (year) => {
    setSelectedYear(year);
  };

  useEffect(() => {
    const yearArray = Object.keys(achievements);
    const currentIndex = yearArray.indexOf(selectedYear);
    const newProgress = ((currentIndex + 1) / yearArray.length) * 100;
    setProgress(newProgress);
  }, [selectedYear, achievements]);

  
    return(
        <>
        <div className="main">
            <img src='https://wyckoffcomfort.com/wp-content/uploads/2018/07/family.jpg' id='top'></img>
          <div className="container">
            <div className="box">
              <div className="header">Header 1</div>
              <div className="content">Content 1</div>
            </div>
            <div className="box">
              <div className="header">Header 2</div>
              <div className="content">Content 2</div>
            </div>
            <div className="box">
              <div className="header">Header 3</div>
              <div className="content">Content 3</div>
            </div>
            <div className="box">
              <div className="header">Header 4</div>
              <div className="content">Content 4</div>
            </div>
            <div className="box">
              <div className="header">Header 5</div>
              <div className="content">Content 5</div>
            </div>
            <div className="box">
              <div className="header">Header 6</div>
              <div className="content">Content 6</div>
            </div>
            <div className="box">
              <div className="header">Header 3</div>
              <div className="content">Content 3</div>
            </div>
            <div className="box">
              <div className="header">Header 4</div>
              <div className="content">Content 4</div>
            </div>
            <div className="box">
              <div className="header">Header 5</div>
              <div className="content">Content 5</div>
            </div>
            <div className="box">
              <div className="header">Header 6</div>
              <div className="content">Content 6</div>
            </div>
          </div>
          <div className="side-header">
            <p><span>India's</span> <b>First Listed Real Estate Brokerage</b></p>
            </div>
          <div className="about-us">
            <div className="about-content">
           <div className="content">
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem deleniti deserunt quibusdam et eveniet iure quaerat ipsa quia quae fugit assumenda aspernatur incidunt, commodi minus, maxime veniam blanditiis? Harum, maiores.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti commodi voluptatem tempore ipsum assumenda a cum perspiciatis molestiae quibusdam, modi illo consequuntur! Eligendi nisi dolore, ab dolorum quod quo iure!</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt aut ex nostrum eaque! Repellendus reiciendis magni corporis tempora labore. Officiis animi porro nemo minus illo asperiores quis illum laboriosam cupiditate?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt aut ex nostrum eaque! Repellendus reiciendis magni corporis tempora labore. Officiis animi porro nemo minus illo asperiores quis illum laboriosam cupiditate?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt aut ex nostrum eaque! Repellendus reiciendis magni corporis tempora labore. Officiis animi porro nemo minus illo asperiores quis illum laboriosam cupiditate?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt aut ex nostrum eaque! Repellendus reiciendis magni corporis tempora labore. Officiis animi porro nemo minus illo asperiores quis illum laboriosam cupiditate?</p>
                </div>
                <div className="video">
                      <video
                             ref={videoRef}
                             width="300"
                             height="200"
                             onClick={handleVideoClick}
                             style={{ cursor: 'pointer' }}
                      >
                         <source src="https://www.pexels.com/video/drops-of-liquid-on-a-tray-to-be-use-as-samples-3195394/" type="video/mp4" />
                           Your browser does not support the video tag.
                      </video>
                           {!isPlaying && (
                             <div className="play-button" onClick={handleVideoClick}>
                                 ▶
                              </div>
                           )}
                </div>
              </div>
              </div>
              <div className="achievements">
              <div className="achievements-tracker">
                   <div className="achievements-block">
                        <h3>Our Journey</h3>
                      <h1>{selectedYear}</h1>
                    <p>{achievements[selectedYear]}</p>
                   </div>
            <div className="progress-bar">
          <div className="progress-bar-fill" style={{ width: `${progress}%` }}></div>
          </div>
           <div className="progress-bar-icons">
           {Object.keys(achievements).map((year) => (
             <div
            key={year}
            className={`progress-bar-icon ${selectedYear === year ? 'active' : ''}`}
            onClick={() => handleYearChange(year)}
          >
            {year}
          </div>
        ))}
          </div>
         </div>
          </div>
          <div className="our-services">
            <div className="side-header">
            <p><span>Our</span> <b>Brands / Services</b></p>
            </div>
          </div>
          <div className="services-box">
              <div className="services-list">
                 {services.map((service, index) => (
           <div key={index} className="service-item">
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
             </div>
           </div>
           <div className="leadership-team">
            <div className="side-header">
              <p><span>Leadership</span> <b>Team</b></p>
              </div>
              <div className="profiles-container">
                 {profiles.map((profile, index) => (
                 <div key={index} className="profile-box">
                     <img src={profile.image} alt={profile.name} className="profile-image" />
                    <h3>{profile.name}</h3>
                        <a href={profile.linkedIn} target="_blank" rel="noopener noreferrer" className="linkedin-icon">
                        <img src="https://th.bing.com/th?q=LinkedIn+Circle+Icon&w=120&h=120&c=1&rs=1&qlt=90&cb=1&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247" alt="LinkedIn" />
                       </a>
                  </div>
               ))}
              </div>
           </div>
       <div className="happy-families">
        <div className="side-header">
           <p><span>Happy</span> <b>Families</b></p>
           </div>
        <div className="families-box"> 
          <div className="families-list">
              {families.map((family, index) => (
          <div key={index} className="family-item">
            <h3>{family.name}</h3>
            <p>{family.description}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
        </div>
        </>
    )
}
export default Our_story;