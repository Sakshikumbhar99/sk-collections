import React, { useState, useEffect } from "react";
import "../contact/style.css";
import image67 from "../../assets/images/67.jpeg";
import Header from "../../components/header/index.jsx";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import ArrowUpwardRoundedIcon from "@mui/icons-material/ArrowUpwardRounded";

const Contact = () => {
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

  return (
    <>
      <Header />
      <section id="contact" style={{ backgroundImage: `url(${image67})` }}>
        <h1 className="sub-heading">-- Contact --</h1>

        <div className="contact-row">
          {/* Left Column */}
          <div className="contact-left">
            {/* Email Box */}
            <div className="icon-box">
              <div className="icon">
                <i className="fa-solid fa-envelope"></i>
              </div>
              <div className="info">
                <h4>Email</h4>
                <p>sakshi.kumbhar465@gmail.com</p>
              </div>
            </div>

            {/* Location Box */}
            <div className="icon-box">
              <div className="icon">
                <i className="fa-solid fa-location-dot"></i>
              </div>
              <div className="info">
                <h4>Location</h4>
                <p>Maharastra,India.</p>
              </div>
            </div>
            {/* Map */}
            <div className="map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3867615.1720295195!2d74.1279740959272!3d18.79958199118895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcfc41e9c9cd6f9%3A0x1b2f22924be04fb6!2sMaharashtra!5e0!3m2!1sen!2sin!4v1688389939837!5m2!1sen!2sin"
                width="520"
                height="510"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Maharashtra Location"
              ></iframe>
            </div>
          </div>

          {/* Right Column */}
          <div className="contact-right">
            <div className="container">
              <p className="sub-para">
                <span>
                  If you have any queries, please fill that form below to get in
                  touch.
                </span>
              </p>
              <div className="contact-form">
                <form
                  action="https://formspree.io/f/xrbzbbzg"
                  method="POST"
                  className="contact-inputs"
                >
                  <input
                    type="text"
                    name="username"
                    placeholder="Name"
                    autoComplete="off"
                    required
                  />
                  <input
                    type="text"
                    name="email"
                    placeholder="Email-address"
                    autoComplete="off"
                    required
                  />
                  <input
                    type="text"
                    name="phonenumber"
                    placeholder="Phone Number"
                    autoComplete="off"
                    required
                  />
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    autoComplete="off"
                    required
                  />
                  <textarea
                    name="message"
                    placeholder="Message"
                    cols="30"
                    rows="6"
                    autoComplete="off"
                    required
                  ></textarea>
                  <input type="submit" value="send" className="submit" />
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* scrollTop */}
        <div className="wrapper">
          {isVisible && (
            <div className="top-btn" onClick={goToBtn}>
              <ArrowUpwardRoundedIcon className="top-btn--icon" />
            </div>
          )}
        </div>

        {/* Footer */}
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
      </section>
    </>
  );
};

export default Contact;
