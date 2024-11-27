import React, { useEffect } from "react";
import Aos from "aos";
import 'aos/dist/aos.css'

const Media=({img,border,badge})=>{
    // used Aos for scroll animation
    useEffect(()=>{
        Aos.init({duration:1000})
      },[])
    return(
        <div >
       
        <div className="overflow-x-auto " data-aos='fade-down' >
  <table className="table  mb-4 glass ">
    {/* head */}
    <thead className="text-black text-xl">
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-20 w-20">
                <img className={border}
                  src={img}
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">Hart Hagerty</div>
              <div className="text-sm opacity-50">United States</div>
            </div>
          </div>
        </td>
        <td>
          Zemlak, Daniel and Leannon
          <br />
          <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
        </td>
        <td><img className="w-24 " src={badge} alt="" /></td>
        <th>
          <button className="text-4xl text-[#ffed2d]">#1</button>
        </th>
      </tr>
 
  
    </tbody>
    {/* foot */}
    <tfoot>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
        <th></th>
      </tr>
    </tfoot>
  </table>
</div>
       
      </div>
     
    
       
  
    )
}

export default Media;