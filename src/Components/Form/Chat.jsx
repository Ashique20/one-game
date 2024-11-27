import React from "react";
import { motion } from "framer-motion";
import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";
import { Link } from "react-router-dom";
const Chat =()=>{
  // used Aos for scroll animation
  useEffect(()=>{
    Aos.init({duration:2000})
  },[])
    return(
    //     
    <div  className="card lg:card-side bg-base-100 shadow-xl border-b-" style={{ backgroundImage: `url("https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltbded518020183769/5eb26f5389bac8148a8006cc/agent-background-generic.JPG ") ` }} >
      {/* used framer motion to hover the chat card */}
<div data-aos="fade-up-right" className="justify-center items-center h-screen flex  mt-20 ">
         <motion.div 
         whileHover={{
          scale: 1.1,
          boxShadow:"0px 0px 8px rgb(255,255,255)"
        }}
         className="card  bg-[#1F2833] shadow-xl lg:ml-40 ">
           <div className="card-body h-96  w-96">
           
           <h1 className="font-mono text-8xl">Let's Chat</h1>
         <Link to='/form'>  <button className="btn btn-outline btn-accent w-60 mt-20  ml-[12%]">Say Hi!</button></Link>
          </div>
        
        </motion.div>
      </div>
      {/* Mario Image */}
  <div className="card-body">
  <figure><img data-aos="fade-up-right" className="w-96 mt-40" src="https://i.pinimg.com/originals/46/53/d8/4653d885a6dd4bff3b6bcea47a8f8d5a.png" alt="Album"/></figure>
  </div>
</div>
    )
}

export default Chat;