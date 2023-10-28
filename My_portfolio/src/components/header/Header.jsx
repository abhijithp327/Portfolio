import React, { useRef, useState } from 'react';
import css from "./Header.module.scss";
import {motion} from 'framer-motion';
import { getMenuStyles, headerVariants} from '../../utils/motion';
import {BiMenuAltRight} from "react-icons/bi";
import useHeaderShadow from '../../hooks/useHeaderShadow';
import useOutsideAlerter from '../../hooks/useOutsideAlerter';

const Header = () => {

    
    const [ menuOpened , setMenuOpened ] = useState(false);
    const headerShadow = useHeaderShadow();
    const menuRef = useRef()

useOutsideAlerter(
    {
        menuRef,
        setMenuOpened
    }
)
 

  return (
    <motion.div
    variants={headerVariants}
    initial="hidden"
    whileInView="show"
    className={`bg-primary paddings ${css.wrapper}`}
    viewport={{ once: true, amount: 0.25 }}
    style={{boxShadow: headerShadow}}
  >
    <div className={`innerWidth ${css.container} flexCenter`}>
      <div className={css.name}>ABHIJITH</div>
      <ul
        className={`flexCenter ${css.menu}`}
        ref={menuRef}
        style={getMenuStyles(menuOpened)}
      >
        <li><a href="#experties">Services</a></li>
        <li><a href="#work">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#education">Education</a></li>
        <li><a href="#contact">Contact me</a></li>
       
      </ul>

      {/* for medium and small screens */}
      <div
        className={css.menuIcon}
        onClick={() => setMenuOpened((prev) => !prev)}
      >
        <BiMenuAltRight size={30} />
      </div>
    </div>
  </motion.div>
  )
}

export default Header;