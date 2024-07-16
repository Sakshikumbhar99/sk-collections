import React, { useState, useEffect } from "react";
import "../portfolio/style.css";
import Header from "../../components/header/index.jsx";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import ArrowUpwardRoundedIcon from "@mui/icons-material/ArrowUpwardRounded";

// images
import image1 from "../../assets/images/1.jpg";
import image2 from "../../assets/images/2.jpeg";
import image3 from "../../assets/images/27.webp";
import image4 from "../../assets/images/4.jpeg";
import image5 from "../../assets/images/19.jpg";
import image6 from "../../assets/images/14.jpeg";
import image7 from "../../assets/images/7.jpg";
import image8 from "../../assets/images/8.jpg";
import image9 from "../../assets/images/9.jpeg";
import image10 from "../../assets/images/10.jpg";
import image11 from "../../assets/images/11.jpeg";
import image12 from "../../assets/images/12.jpg";
import image13 from "../../assets/images/13.jpeg";
import image14 from "../../assets/images/6.jpeg";
import image15 from "../../assets/images/36.webp";
import image16 from "../../assets/images/16.jpeg";
import image17 from "../../assets/images/17.jpeg";
import image18 from "../../assets/images/18.jpg";
import image19 from "../../assets/images/5.jpeg";
import image20 from "../../assets/images/20.jpeg";
import image21 from "../../assets/images/21.jpeg";
import image22 from "../../assets/images/22.jpg";
import image23 from "../../assets/images/23.jpg";
import image24 from "../../assets/images/24.jpg";
import image25 from "../../assets/images/25.jpg";
import image26 from "../../assets/images/26.jpg";
import image27 from "../../assets/images/3.jpg";
import image28 from "../../assets/images/28.jpg";
import image29 from "../../assets/images/33.jpg";
import image30 from "../../assets/images/30.jpg";
import image31 from "../../assets/images/31.jpg";
import image32 from "../../assets/images/32.jpg";
import image33 from "../../assets/images/29.jpg";
import image34 from "../../assets/images/34.jpeg";
import image35 from "../../assets/images/35.jpg";
import image36 from "../../assets/images/15.jpg";
import image37 from "../../assets/images/38.jpeg";
import image38 from "../../assets/images/37.jpeg";
import image39 from "../../assets/images/39.jpeg";
import image40 from "../../assets/images/40.jpg";
import image41 from "../../assets/images/41.jpeg";
import image42 from "../../assets/images/42.jpeg";
import image43 from "../../assets/images/43.jpg";
import image44 from "../../assets/images/44.jpeg";
import image45 from "../../assets/images/45.jpeg";
import image46 from "../../assets/images/46.jpg";
import image47 from "../../assets/images/51.jpg";
import image48 from "../../assets/images/48.jpg";
import image49 from "../../assets/images/49.jpg";
import image50 from "../../assets/images/50.jpg";
import image51 from "../../assets/images/47.jpeg";
import image52 from "../../assets/images/52.jpg";
import image53 from "../../assets/images/53.jpg";
import image54 from "../../assets/images/54.jpeg";
import image55 from "../../assets/images/59.jpeg";
import image56 from "../../assets/images/56.jpg";
import image57 from "../../assets/images/57.jpeg";
import image58 from "../../assets/images/58.jpg";
import image59 from "../../assets/images/55.jpeg";
import image60 from "../../assets/images/60.jpg";

const images = [
  { src: image1, alt: "Image 1", className: "nature"},
  { src: image2, alt: "Image 2", className: "flower"},
  { src: image3, alt: "Image 3", className: "favourite"  },
  { src: image4, alt: "Image 4", className: "nature"     },
  { src: image5, alt: "Image 5", className: "flower"     },
  { src: image6, alt: "Image 6", className: "flower"     },
  { src: image7, alt: "Image 7", className: "nature"     },
  { src: image8, alt: "Image 8", className: "nature"     },
  { src: image9, alt: "Image 9", className: "wallpapers" },
  { src: image10, alt: "Image 10", className: "favourite" },
  { src: image11, alt: "Image 11", className: "nature"     },
  { src: image12, alt: "Image 12", className: "favourite"  },
  { src: image13, alt: "Image 13", className: "flower"     },
  { src: image14, alt: "Image 14", className: "nature"     },
  { src: image15, alt: "Image 15", className: "nature"     },
  { src: image16, alt: "Image 16", className: ""           },
  { src: image17, alt: "Image 17", className: "flower"     },
  { src: image18, alt: "Image 18", className: "flower"     },
  { src: image19, alt: "Image 19", className: ""           },
  { src: image20, alt: "Image 20", className: "nature"     },
  { src: image21, alt: "Image 21", className: "flower"     },
  { src: image22, alt: "Image 22", className: "nature"     },
  { src: image23, alt: "Image 23", className: "nature"     },
  { src: image24, alt: "Image 24", className: "wallpapers" },
  { src: image25, alt: "Image 25", className: "nature"     },
  { src: image26, alt: "Image 26", className: "flower"     },
  { src: image27, alt: "Image 27", className: ""           },
  { src: image28, alt: "Image 28", className: ""           },
  { src: image29, alt: "Image 29", className: ""           },
  { src: image30, alt: "Image 30", className: "wallpapers" },
  { src: image31, alt: "Image 31", className: "flower"     },
  { src: image32, alt: "Image 32", className: "flower"     },
  { src: image33, alt: "Image 33", className: "nature"     },
  { src: image34, alt: "Image 34", className: "wallpapers" },
  { src: image35, alt: "Image 35", className: "wallpapers" },
  { src: image36, alt: "Image 36", className: "nature"     },
  { src: image37, alt: "Image 37", className: "wallpapers" },
  { src: image38, alt: "Image 38", className: ""           },
  { src: image39, alt: "Image 39", className: "flower"     },
  { src: image40, alt: "Image 40", className: "flower"     },
  { src: image41, alt: "Image 41", className: "flower"     },
  { src: image42, alt: "Image 42", className: "flower"     },
  { src: image43, alt: "Image 43", className: ""           },
  { src: image44, alt: "Image 44", className: ""           },
  { src: image45, alt: "Image 45", className: "flower"     },
  { src: image46, alt: "Image 46", className: ""           },
  { src: image47, alt: "Image 47", className: "flower"  },
  { src: image48, alt: "Image 48", className: ""           },
  { src: image49, alt: "Image 49", className: "flower"     },
  { src: image50, alt: "Image 50", className: "nature"     },
  { src: image51, alt: "Image 51", className: "wallpapers" },
  { src: image52, alt: "Image 52", className: ""           },
  { src: image53, alt: "Image 53", className: ""           },
  { src: image54, alt: "Image 54", className: "wallpapers" },
  { src: image55, alt: "Image 55", className: "wallpapers" },
  { src: image56, alt: "Image 56", className: "flower"     },
  { src: image57, alt: "Image 57", className: "flower"     },
  { src: image58, alt: "Image 58", className: "wallpapers" },
  { src: image59, alt: "Image 59", className: ""           },
  { src: image60, alt: "Image 60", className: "flower"     },
];

const Portfolio = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeFilter, setActiveFilter] = useState("all");

  // scrollDowntoTop
  const [isVisible, setIsVisible] = useState(false);

  const goToBtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const listenToScroll = () => {
    const heightToHidden = 20;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightToHidden) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const moveNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const movePrev = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const downloadImage = () => {
    const link = document.createElement("a");
    link.href = images[currentImageIndex].src;
    link.download = images[currentImageIndex].alt;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  const filteredImages =
    activeFilter === "all"
      ? images
      : images.filter((image) => image.className === activeFilter);

  return (
    <>
      <Header />
      <section
        className="pimg2"
        id="sec-1"
        style={{ backgroundImage: `url(${image6})` }}
      >
        <div className="ptext">
          <h1>-- Portfolio --</h1>
          <a href="#sec-2">
            <div class="scroll-down"></div>
          </a>
        </div>
      </section>
      <section className="portfolio" id="sec-2">
        <div className="categories">
          <ul className="controls">
            {["all", "favourite", "flower", "nature", "wallpapers"].map(
              (filter) => (
                <li
                  key={filter}
                  className={`buttons ${
                    activeFilter === filter ? "active" : ""
                  }`}
                  data-filter={filter}
                  onClick={() => handleFilterClick(filter)}
                >
                  {filter}
                </li>
              )
            )}
          </ul>
        </div>
        <div className="gallery">
          {filteredImages.map((image, index) => (
            <div
              key={index}
              className={`image-container ${index % 2 === 0 ? "tall" : ""}`}
              onClick={() => openLightbox(index)}
            >
              <img src={image.src} alt={image.alt} />
            </div>
          ))}

          {lightboxOpen && (
            <Lightbox
              image={images[currentImageIndex]}
              onClose={closeLightbox}
              onMovePrev={movePrev}
              onMoveNext={moveNext}
              onDownload={downloadImage}
            />
          )}
        </div>
        <div className="wrapper">
          {isVisible && (
            <div className="top-btn" onClick={goToBtn}>
              <ArrowUpwardRoundedIcon className="top-btn--icon" />
            </div>
          )}
        </div>
      </section>
      <footer className="bg-dark-1">
        <section id="footer" className="py-5">
          <div className="container">
            <a href="https://instagram.com/saksh_kumbhar_99?igshid=MzNlNGNkZWQ4Mg==">
              <InstagramIcon style={{ fontSize: "18px" }} />
            </a>
            <a href="https://www.facebook.com/profile.php?id=100094179634994&mibextid=ZbWKwL">
              <FacebookOutlinedIcon style={{ fontSize: "18px" }} />
            </a>
            <a href="mailto:sakshi.kumbhar465@gmail.com">
              <EmailOutlinedIcon style={{ fontSize: "18px" }} />
            </a>
            <a href="#">
              <SendOutlinedIcon
                style={{ fontSize: "18px", transform: "rotate(-26deg)" }}
              />
            </a>
          </div>
          <h6 className="textcenter">
            &copy; 2024 Designed by Sakshi Kumbhar.
          </h6>
        </section>
      </footer>
    </>
  );
};

const Lightbox = ({ image, onClose, onMovePrev, onMoveNext, onDownload }) => (
  <div className="lightbox">
    <span className="close-button" onClick={onClose}>
      &times;
    </span>
    <button onClick={onDownload} className="download-button">
      &#8681;
    </button>
    <div className="lightbox-content">
      <img src={image.src} alt={image.alt} className="lightbox-image" />
    </div>
    <div className="lightbox-nav">
      <button onClick={onMovePrev}>&lt;</button>
      <button onClick={onMoveNext}>&gt;</button>
    </div>
  </div>
);

export default Portfolio;
