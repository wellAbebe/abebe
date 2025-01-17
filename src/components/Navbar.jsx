import React, { useEffect, useState} from 'react'
import { Link } from 'react-router-dom'

import {styles} from '../styles'
import {navLinks} from '../constans'
import {admin, menu, close} from '../assets'


const Navbar = () => {  
  const [active, setActive] = useState("")
  const [toggle, setToggle] = useState(false);
  return (
  <nav
    className={` ${styles.paddingX} w-full flex
    py-5 fixed top-0 z-20 bg-primary`}>
    <div className=' w-full flex 
    items-center max-w-7xl mx-auto justify-between'>
      <Link 
      to="/"
      className="flex "
      onClick = {() =>{ 
        setActive("");
        window.scrollTo(0,0);}}
      >
      <img src={admin} alt="logo" className=' w-12 h-12
       rounded-lg'/>
        <p className=" text-white font-semibold ml-1 cursor-pointer text-[38px] flex" >Abebe &nbsp; <br  className="sm:block hidden"/>
     </p>
      
      </Link>
        <ul className=' list-none hidden sm:flex
        flex-row gap-5'>
          {navLinks.map((link) => (
            <li 
            key={link.id}
            className= {`${
              active === link.title?"text-white"
              : "text-secondary"
            } hover:text-white text-[14px] font-medium cursor-pointer`}
            onClick = {() =>setActive(link.title)}>
            
              <a href={`#${link.id}`}>
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      <div className='sm:hidden flex flex-1
      justify-end items-center'>

        <img 
          src={toggle ? close: menu} alt = "Menu"
          className='w-[24px] h-[24px]
          object-contain cursor-pointer'
          onClick={() =>setToggle(!toggle)}
         />

         <div className={`${!toggle ? 'hidden' : 'flex'}
         p-4 black-gradient absolute top-20 right-0
         mx-2 my-2 min-w-[140px] z-10 rounded-xl`}>

          <ul className=' list-none flex justify-end items-start
                flex-col gap-5'>
                  {navLinks.map((link) => (
                    <li 
                    key={link.id}
                    className= {`${
                      active === link.title?"text-white"
                      : "text-secondary"
                    } hover:text-white font-poppins font-pointer text-[18px] font-medium`}
                    onClick = {() =>
                      {setToggle(!toggle);
                      setActive(link.title)}
                    }>
                    
                      <a href={`#${link.id}`}>
                        {link.title}
                      </a>
                    </li>
                  ))}
                </ul>

         </div>


      </div>
    </div>
  </nav>
  )
}



export default Navbar