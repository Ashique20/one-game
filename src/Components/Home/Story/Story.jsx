import  { useEffect } from "react";
import { motion } from "framer-motion";
import Aos from "aos";
import 'aos/dist/aos.css'

const Story=()=>{
  // used aos for scroll animation
  useEffect(()=>{
    Aos.init({duration:3000})
  },[])
    return(
        
         
            <div className=" min-h-screen  bg-base-200 " style={{ backgroundImage: `url("https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltbded518020183769/5eb26f5389bac8148a8006cc/agent-background-generic.JPG ") ` }} >
        <div className="card lg:card-side bg-base-100 shadow-xl" data-aos="zoom-in-right">
          {/* used framer motion to hover the image */}
  <figure>
    <motion.img 
   
   whileHover={{
    scale: 1.1}}
  
  className="lg:w-[70%] " src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/6174cd1a-f614-4c1e-9d75-4997060b6156/ddrsqbl-eb74072b-24d1-4fcf-8981-8526538e676b.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzYxNzRjZDFhLWY2MTQtNGMxZS05ZDc1LTQ5OTcwNjBiNjE1NlwvZGRyc3FibC1lYjc0MDcyYi0yNGQxLTRmY2YtODk4MS04NTI2NTM4ZTY3NmIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.XE0tgzITQOCQo38R05ZFj_RGaVYSEmx5hXh2_l4BJmY" alt="Album"/></figure>
  
  {/* div of valorant section */}
  <motion.div
  
  initial={{opacity:0}}
  animate={{opacity:1}}
  transition={{delay:2,duration:2,type:"tween"}}
  
  className="card-body lg:w-[50%] lg:mr-[20%] lg:mt-[8%]">
    <h2 className="text-6xl">VALORANT</h2>
    <p>Valorant is the most sold games of our Company.A game with full of interesting and challenging maps.A battleground multiple player game where player can make grate practice of aiming.Valorant is a team-based first-person tactical hero shooter set in the near future. Players play as one of a set of Agents, characters based on several countries and cultures around the world. In the main game mode, players are assigned to either the attacking or defending team with each team having five players on it.</p>
    
  </motion.div>
</div>
{/* div of assassins creed section */}
        <div data-aos="fade-down" className="card lg:card-side bg-base-100 shadow-xl">
  
  <div className="card-body lg:w-[50%] lg:ml-[10%] lg:mt-[8%]">
    <h2 className="text-5xl" >Assassin,s Creed</h2>
    <p>Valorant is the most sold games of our Company.A game with full of interesting and challenging maps.A battleground multiple player game where player can make grate practice of aiming.Valorant is a team-based first-person tactical hero shooter set in the near future. Players play as one of a set of Agents, characters based on several countries and cultures around the world. In the main game mode, players are assigned to either the attacking or defending team with each team having five players on it.</p>
    
  </div>
  <figure><img className="lg:w-[70%] " src="https://freepngimg.com/download/assassins_creed_unity/28908-3-assassins-creed-unity-transparent-background.png" alt="Album"/></figure>
</div>
      </div>
        
    )
}

export default Story;