import React from "react";
import video from './video/videoplayback.mp4'
const Banner = () => {
  // Simple Banner
  return (
   
    <div>
      <div className="carousel w-full ">
        <div id="item1" className="carousel-item w-full">
      
          <video className="w-100hv " autoPlay loop muted src={video} />
        </div>
        <div id="item2" className="carousel-item w-full">
          <img
            src="https://wallpapers.com/images/hd/apex-legends-octane-black-background-59m8zdwc855zxubr.jpg"
            className="w-full"
          />
        </div>
        <div id="item3" className="carousel-item w-full">
          <img
            src="https://wallpapers.com/images/hd/pubg-mobile-lite-map-hshhtkpldiglkr8y.jpg"
            className="w-full"
          />
        </div>
        
      </div>
      <div className=" absolute top-[100%]  flex gap-10 left-[35%]  justify-center  py-2">
        <a href="#item1" >
         <img className="w-40 hover:opacity-55	 mb-4 border-2 rounded-lg" src="https://s3-eu-central-1.amazonaws.com/www-staging.esports.com/WP%20Media%20Folder%20-%20esports-com//var/app/current/web/app/uploads/2020/12/VALORANT-Agent-14-720x384.png" alt="" />
        </a>
        <a href="#item2" >
          <img className="w-40 hover:opacity-55 mb-4 border-2 rounded-lg" src="https://wallpapers.com/images/hd/apex-legends-octane-black-background-59m8zdwc855zxubr.jpg" alt="" />
        </a>
        <a href="#item3" >
          <img className="w-40 hover:opacity-55 border-2 rounded-lg" src="https://wallpapers.com/images/hd/pubg-mobile-lite-map-hshhtkpldiglkr8y.jpg" alt="" />
        </a>
        
      </div>
    </div>
  );
};

export default Banner;
