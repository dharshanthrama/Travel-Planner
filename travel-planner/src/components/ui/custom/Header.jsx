import React from 'react';
import { Button } from '../button';
import { Link } from 'react-router-dom';
function Header() {
  return (
    <div className='p-3 shadow-sm flex justify-between items-center px-5'>
      <div className="flex items-center space-x-2">
        <Link to={'/'}>
        <img 
  src="/moonway.jpeg" 
  alt="Logo" 
  width="67" 
  height="41" 
  className="rounded-full" 
/>
</Link>
        <span className="text-3xl font-bold">
          <Link to={'/'}>MOONWAY</Link>
          </span>
      </div>

      
      <div className="ml-auto space-x-2" >
      <Link to={"/register"}>
          <Button>Register</Button>
          </Link>
     <Link  to={"/login"}>
          <Button>Login</Button>
          </Link>
       

      </div>
    </div>
  );
}

export default Header;
