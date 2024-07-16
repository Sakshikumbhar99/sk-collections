import React from "react";
import "../about/style.css";
import Header from "../../components/header/index.jsx";
import AboutMe from "../../assets/images/AboutMe.jpeg"
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
// import Footer from "../../component/footer/footer";

const About = () => {
  return (
    <>
    <Header />
    <div className="about">
      <h1>-- About Me --</h1>
      <div className="about-row">
        {/* Left Column */}
        <div className="about-left">
          <img src={AboutMe} alt="" />
        </div>

        {/* Right Column */}
        <div className="about-right">
          <div className="container">
            <p>
              Welcome, to my world of photograpy. <br />
              I`m SAKSHI SATISH KUMBHAR. Nature is my catalyst. My passion for
              nature photograpy allows to capture the world's beauty in a unique
              way. <br />
              Here you will find a collections of my favourite clicks including
              flowers, hills, temples & more. I have passion for capture the
              beauty of the world around us & I`m excited to share my world with
              you. <br /> I hope you enjoy my work. Take a look at my portfolio
              & feel free to contact with me with any question & inquires.
            </p>
          </div>
        </div>
      </div>
    </div>
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
export default About;
