import React, { useEffect } from "react";
import Media from "./Media";


const MediaInfo = () => {
   
    return (
        <div className="hero    text-black   " style={{ backgroundImage: `url("https://rare-gallery.com/mocahbig/394521-valorant-game-agents-hero-4k-pc-wallpaper.jpg")` }}>
            {/* sent data to Media */}
            <div></div>
           <div className="  w-[60%]  mt-20 gap-5">
           <Media img='https://img.freepik.com/premium-vector/video-gamer-design-with-headphone-esports-mascot-gaming-logo-template-illustration_196854-714.jpg ' badge='https://izzi.gg/wp-content/uploads/2022/04/avancado_valorant-300x300.png' border='border-4 rounded-full  border-red-400'></Media>
            <Media img='https://wallpapers.com/images/hd/gaming-profile-pictures-xpcd6q5uud2i45v8.jpg' border='border-4 rounded-full  border-blue-400' badge='https://izzi.gg/wp-content/uploads/2022/04/intermediario_valorant-300x300.png'></Media>
            <Media img='https://e1.pxfuel.com/desktop-wallpaper/838/654/desktop-wallpaper-hyper-gaming-logo-gaming-profile.jpg' border='border-4 rounded-full  border-black' badge='https://cdn-offer-photos.zeusx.com/f4f527c0-a2bb-4a58-9596-494083c04126.png'></Media>
            <Media img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNDkgnvrTGmrcqfXeoiO607sqLr6NTnjtMNA&s' border='border-4 rounded-full  border-yellow-400' badge='https://global-uploads.webflow.com/60b09c571daceaec248ee576/621d1f3d808d6289b8b9a2e7_Bronze-3-Valorant-Rank.png'></Media>
            <Media img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWEswGzAQjB_wDBX5GIvIFazjjfCG0kZ_UMQ&s' className='w-10' border='border-4 rounded-full  border-green-400' badge='https://global-uploads.webflow.com/60b09c571daceaec248ee576/621d2195ab800b312470e6ad_TX_CompetitiveTier_Large_11%20(1).png'></Media>
            <Media img='https://wallpapers.com/images/hd/masked-girl-gamer-logo-pjb3xoos6sed9qad.jpg' border='border-4 border-[#B026FF] rounded-full' badge='https://izzi.gg/wp-content/uploads/2022/11/nivel-2.png' ></Media>
          
            
           </div>


        </div>
    )
}

export default MediaInfo;