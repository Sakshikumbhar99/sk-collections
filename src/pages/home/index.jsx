import React, { useState, useEffect } from "react";
import "../home/style.css";
import Header from "../../components/header/index.jsx";
import Footer from "../../components/footer/index.jsx";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import PauseRoundedIcon from "@mui/icons-material/PauseRounded";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import KeyboardArrowLeftRoundedIcon from "@mui/icons-material/KeyboardArrowLeftRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
// import SimpleImageSlider from "react-simple-image-slider";
import image62 from "../../assets/images/62.jpeg";
import image64 from "../../assets/images/64.jpg";
import image61 from "../../assets/images/61.jpg";
import image66 from "../../assets/images/66.jpeg";
import image11 from "../../assets/images/11.jpeg";
import image14 from "../../assets/images/14.jpeg";
// import { Settings } from "@mui/icons-material";

const Home = () => {
  const images = [
    { url: image62 },
    { url: image11 },
    { url: image14 },
    { url: image61 },
    { url: image66 },
    { url: image64 },
  ];

  // play/pause & prev/next
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  useEffect(() => {
    let timeoutId;
    if (isPlaying) {
      timeoutId = setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 5000);
    }
    return () => clearTimeout(timeoutId);
  }, [isPlaying, currentIndex]);

  return (
    <>
      <Header />
      <div className="home" style={{ position: "fixed" }}>
        <div className="container">

          <div className="slider-control">
            <button className="control-btn" onClick={handlePlayPause}>
              {isPlaying ? (
                <PauseRoundedIcon style={{ fontSize: "25px" }} />
              ) : (
                <PlayArrowRoundedIcon style={{ fontSize: "25px" }} />
              )}
            </button>
            <button className="control-btn" onClick={handleNext}>
              <KeyboardArrowRightRoundedIcon style={{ fontSize: "25px" }} />
            </button>
            <button className="control-btn" onClick={handlePrevious}>
              <KeyboardArrowLeftRoundedIcon style={{ fontSize: "25px" }} />
            </button>
          </div>

          <div className="social-media-icons">
            <a
              href="https://instagram.com/sakshi_kumbhar_99?igshid=MzNlNGNkZWQ4Mg==
"
              className="social-icon"
            >
              <InstagramIcon style={{ fontSize: "18px" }} />
            </a>
            <a
              href="://www.facebook.com/profile.php?id=100094179634994&mibextid=ZbWKwL"
              className="social-icon"
            >
              <FacebookOutlinedIcon style={{ fontSize: "18px" }} />
            </a>
            <a
              href="mailto:sakshi.kumbhar465@gmail.com"
              className="social-icon"
            >
              <EmailOutlinedIcon style={{ fontSize: "18px" }} />
            </a>
            <a href="#" className="social-icon">
              <SendOutlinedIcon
                style={{ fontSize: "18px", transform: "rotate(-26deg)" }}
              />
            </a>
          </div>
        </div>

        <div className="slider-container">
          {images.map((image, index) => (
            <div
              key={index}
              className={`slider-img slider-img-${index + 1}`}
              style={{ backgroundImage: `url(${image.url})` }}
            ></div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;
