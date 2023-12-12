import { useState } from "react";
import { GiHamburgerMenu } from 'react-icons/gi';
import { RxCross2 } from "react-icons/rx";
import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";

const Nav = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
      <nav className='flex justify-between items-center max-container'>
        <a href='/'>
          <img
            src={headerLogo}
            alt='logo'
            width={129}
            height={29}
            className='m-0 w-[129px] h-[29px]'
          />
        </a>
        <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className='font-montserrat leading-normal text-lg text-slate-gray'
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className='flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24'>
          <a href='/'>Sign in</a>
          <span>/</span>
          <a href='/'>Explore now</a>
        </div>
        <div className='hidden app__nav-sscreen cursor-pointer'>
        <GiHamburgerMenu color='#000000' fontSize={27} onClick={() => setToggleMenu(true)} />

        {toggleMenu && (
          <div className='app__nav-sscreen_overlay'>
            <RxCross2 className='overlay__close' fontSize={27} onClick={() => setToggleMenu(false)} />
            <ul className='app__nav-sscrean_links font-montserrat'>
              <li className='p__opensans'><a href='#home'>Home</a></li>
              <li className='p__opensans'><a href='#about-us'>About Us</a></li>
              <li className='p__opensans'><a href='#products'>Product</a></li>
              <li className='p__opensans'><a href='#contact-us'>Contact Us</a></li>
            </ul>
            <div className='flex gap-2 text-lg leading-normal font-medium font-montserrat wide:mr-24 justify-center white-400'>
              <a href='/'>Sign in</a>
              <span>/</span>
              <a href='/'>Explore now</a>
            </div>
          </div>
        )}
      </div>

      </nav>
    </header>
  );
};

export default Nav;