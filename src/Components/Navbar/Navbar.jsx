import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar  bg-base-100 bg-slate-900 ">
      <div className="flex-none ">

        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">

            <li>
              <details>
                <summary>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                </summary>
                <ul className="bg-slate-700  w-80 h-80 font-bold"  >
                  <li ><Link to='/' className=" hover:text-rose-800 "> Home</Link></li>
                  <li ><Link to='/tournaments' className=" hover:text-rose-800 "> Tour</Link></li>
                  <li><Link to='/form' className=" hover:text-rose-800">Communicate</Link></li>
                  <li><Link to='/media' className=" hover:text-rose-800">Media</Link></li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex-1">
            
           <h1 className="normal-case text-xl mx-[45%] hover:text-rose-800"> BigGame</h1>
        
      </div>

    </div>
  )
}

export default Navbar;