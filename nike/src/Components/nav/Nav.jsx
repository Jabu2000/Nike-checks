import { useState } from "react";
import { GiHamburgerMenu } from 'react-icons/gi';
import { RxCross2 } from "react-icons/rx";
import { headerLogo } from "../../assets/images";
import "./nav.css";

const Nav = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='app__nav'>
      <div className='app__nav-gtp'>
        <img src={headerLogo} alt='logo' />
      </div>
      <ul className='app__nav-links'>
        <li className='p__opensans'><a href='#home'>Home</a></li>
        <li className='p__opensans'><a href='#about'>About Us</a></li>
        <li className='p__opensans'><a href='#menu'>Product</a></li>
        <li className='p__opensans'><a href='#contact'>Contact Us</a></li>
      </ul>
      <div className='app__nav-reg'>
        <a href='/'>Sign in</a>
        <span>/</span>
        <a href='/'>Explore now</a>
      </div>
      <div className='app__nav-sscreen'>
        <GiHamburgerMenu color='#000000' fontSize={27} onClick={() => setToggleMenu(true)} />

        {toggleMenu && (
          <div className='app__nav-sscreen_overlay'>
            <RxCross2 className='overlay__close' fontSize={27} onClick={() => setToggleMenu(false)} />
            <ul className='app__nav-sscrean_links'>
              <li className='p__opensans'><a href='#home'>Home</a></li>
              <li className='p__opensans'><a href='#about'>About Us</a></li>
              <li className='p__opensans'><a href='#menu'>Product</a></li>
              <li className='p__opensans'><a href='#contact'>Contact Us</a></li>
            </ul>
            <div className='app__nav-sscreen_reg'>
              <a href='/'>Sign in</a>
              <span>/</span>
              <a href='/'>Explore now</a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Nav;