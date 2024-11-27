import React from "react";
import { toast } from "react-toastify";

const Form =()=>{
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(e.target);
    const email = formData.get('email');
    const name = formData.get('name');
    const message = formData.get('message');

    // Add logic to show toast
    showToast(email, name, message);
  };

  const showToast = (email, name, message) => {
    toast.success(`Message Sent`, {
     
    });
  };

    return(
       
        
         <div className="justify-center items-center h-screen flex text-black " style={{ backgroundImage: `url("https://wallpapers.com/images/hd/gothic-assassin-s-creed-black-flag-character-kvfim1j0ov3soy57.jpg ") ` }}>
            {/* Form STARTS from here */}
         <div className="card  bg-[#1F2833] shadow-xl ml-24">
           <div className="card-body   w-96">
           
             <div className="flex flex-col w-full border-opacity-50 ">
           <form onSubmit={handleSubmit} className="text-black">
  
  
  
                 <div className="form-control  w-full  max-w-xs ">
                   <label className="label">
                     <span className="label-text text-info">Email</span>
  
                   </label>
                   <input
                  className="input input-bordered input-info w-[100%] max-w-xs "
                   
                    type="email" placeholder="Your Email"   />
                  <label className="label">
                   
                   
  
                  </label>
                </div>
                <div className="form-control w-full max-w-xs ">
                  <label className="label">
                    <span className="label-text text-info">Name</span>
  
                  </label>
                  <input
                   className="input input-bordered input-info w-full max-w-xs"
                   
                    type="text" placeholder="Your name" required />
                
  
                  <input
                  className="input input-bordered input-info w-full max-w-xs h-40 " required
                  
                    type="text" placeholder="Your Message"   />
                  <label className="label">
                   
  
                  </label>
                </div>
               
  
  
               
  
                <input type="submit" value="Send
                " className="btn btn-outline btn-info w-[50%] max-w-xs" required />
              </form>
              
             
            </div>
  
          </div>
        </div>
      </div>
     
    
    )
}

export default Form;