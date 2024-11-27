import React from 'react';

import  { useEffect, useState } from "react";

import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Services =()=>{
    const [services,setService] = useState([])
// settings for slides
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 2
    };
// used axios to load data from service.json
    useEffect(() => {
        axios
          .get(
            "service.json"
          )
          .then((response) => {
            setService(response.data)
          })
          .catch((error) => console.log(error))
      }, []);

    
    console.log(services)
   
 
    return(
        
            
    
        <div className="hero  bg-fixed base-200  " style={{ backgroundImage: `url("https://wallpapercave.com/wp/wp6212351.jpg") ` }} >
          
            <div className="grid grid-cols-1 w-[80%] h-">
           {/* used <Slider to slide services */}
            <Slider {...settings}>  
       {
        // used map to show services in cards
        services?.map(service=>   
          <div key={service.id} className="p-6 ">
          {/* used framer motion to hover */}
        <figure ><motion.img whileHover={{
          scale: 1.1,
          boxShadow:"0px 0px 8px rgb(255,255,255)"
        }}
        
        className="card sm: h-60   lg:h-96  "  src={service?.img} alt="Shoes" /></figure>
        <div className="card-body ">
          <h2 className="card-title">
            {service.name}
          </h2>
          
          
        </div>
       
      </div>)
       }
       {/* used this button to navigate to All component */}
       <a> <Link to={'/all'} className="btn  btn-error mt-60 w-40  font-bold"> <p className="mt-">See All</p></Link></a>
           </Slider>
       </div>
      
      </div>
    )
}


export default Services;