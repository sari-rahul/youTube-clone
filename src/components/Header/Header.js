import React from 'react';
import './_header.scss';

import { FaBars } from 'react-icons/fa';
import { AiOutlineSearch } from 'react-icons/ai';
import { MdNotifications, MdApps } from 'react-icons/md';

const Header = ({handleToggleSideBar}) => {
  return (
    <div className='border border-dark header' >
      <FaBars className='header__menu' 
        size={26}
        onClick={()=>handleToggleSideBar()} 
      />
        
      <img src="https://as2.ftcdn.net/v2/jpg/03/22/05/03/1000_F_322050377_yW8AC9NF5q3m9cB1aYw2n0HBWcmozJDo.jpg" 
        alt="" className='header__logo'/>
      <form>
        <input type="text" placeholder='Search'/>
        <button type='submit'><AiOutlineSearch size={22}/></button>
      </form> 
      <div className='header__icons'>
        <MdNotifications size={28}/>
        <MdApps size={28}/>
        <img src="https://static.vecteezy.com/ti/gratis-vektor/p1/14212681-weibliches-benutzerprofil-avatar-ist-eine-frau-eine-figur-fur-einen-bildschirmschoner-mit-emotionen-fur-das-design-von-websites-und-mobilen-appsillustration-auf-einem-weissen-getrennten-hintergrund-vektor.jpg" 
          alt="avatar" />
      </div>
    </div>
  )
}

export default Header
