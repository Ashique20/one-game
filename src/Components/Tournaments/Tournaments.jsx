import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";

const Tournaments = () => {
  const [tournaments, setTournaments] = useState([]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 10000, // Adjust speed for smoother scrolling
    slidesToShow: 2, 
    slidesToScroll: 2,
    arrows: false, // Hide default arrows
    autoplay: true, // Enable automatic sliding
    autoplaySpeed: 0, // Set to 0 for continuous scrolling
    pauseOnHover: false, // Disable pause on hover
    cssEase: "linear", // Ensure smooth continuous scrolling
  };

  useEffect(() => {
    fetch("tour.json")
      .then((res) => res.json())
      .then((data) => setTournaments(data));
  }, []);

  return (
    <div
      style={{
        backgroundImage:
          "url(https://wallpapers.com/images/hd/gaming-tournaments-1280-x-853-wallpaper-sk4wtz36lskudsgw.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        overflow: "hidden",
        position: "relative",
        height: "100vh",
      }}
    >
      <Slider className="hero-overlay bg-opacity-60 " {...settings}>
        {tournaments?.map((tournament) => (
          <div key={tournament._id} style={{ padding: "0 10px" }}>
            <motion.div 
            className="min-h-screen m-14 rounded-2xl"
              style={{
                backgroundImage: `url(${tournament.bg_image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
               
                // display: "flex",
                // alignItems: "center",
                // justifyContent: "center",
                // borderRadius: "1rem", // Rounded corners
                
              }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 0px 8px rgb(255,255,255)",
              }}
            >
              <h2 className="card-title text-4xl text-white">{tournament.game}</h2>
              <button className="btn mt-96 bg-opacity-70 p-6 hover:bg-opacity-20 w-40 ml-72 border-2 border-white text-white text-center">
                Show Detail
              </button>
            </motion.div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Tournaments;
