import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'

import {styles} from '../styles'
import {navLinks} from '../constans'
import {logo, menu, close} from '../assets'


const Navbar = () => {  
  const [active, setActive] = useState("")
  const [toggle, setToggle] = useState(false);
  return (
  <nav
    className={` ${styles.paddingX} w-full flex
    items-center py-5 fixed top-0 z-20 bg-primary`}>
    <div className=' justify-between w-full flex 
    items-center max-w-7xl mx-auto'>
      <Link 
      to="/"
      className="flex items-center gap-2"
      onClick = {() =>{ 
        setActive("");
        window.scrollTo(0,0);}}
      >
      <img src={logo} alt="logo" className=' w-18 h-16
       object-contain '/>
        <p className=" text-white font-semibold ml-4 cursor-pointer text-[38px] flex" >Abebe &nbsp; <br  className="sm:block hidden"/>
     </p>
      
      </Link>
      <ul className=' list-none hidden sm:flex
      flex-row gap-10'>
        {navLinks.map((link) => (
          <li 
          key={link.id}
          className= {`${
            active === link.title?"text-white"
            : "text-secondary"
          } hover:text-white text-[18px] font-medium cursor-pointer`}
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
          className='w-[28px] h-[28px]
          object-contain cursor-pointer'
          onClick={() =>setToggle(!toggle)}
         />

         <div className={`${!toggle ? 'hidden' : 'flex'}
         p-6 black-gradient absolute top-20 right-0
         mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>

          <ul className=' list-none flex justify-end items-start
                flex-col gap-5'>
                  {navLinks.map((link) => (
                    <li 
                    key={link.id}
                    className= {`${
                      active === link.title?"text-white"
                      : "text-secondary"
                    } font-poppins font-pointer text-[16px] font-medium`}
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