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


 

  return (
   <motion.div
   initial="hidden"
   whileInView="show"
   variants={headerVariants}
 viewport={{once: false, amount: 0.25}}
    className={` paddings ${css.wrapper}`}
style={{boxShadow: headerShadow}}
    >
    <div className={`flexCenter innerWidth ${css.container}`}>
        <div className={css.name}>
            Abhijith
        </div>

        <ul style={getMenuStyles(menuOpened)} className={`flexCenter ${css.menu}`}>
            <li><a href="">Services</a></li>
            <li><a href="">Experience</a></li>
            <li><a href="">Portfolio</a></li>
            <li><a href="">Testimonials</a></li>
            <li><a href="">Contact</a></li>
        </ul>
{/* 
only for medium and small screen nav button for mobile */}


        <div className={css.menuIcon} 
        onClick={() => setMenuOpened((prev) => !prev)} >
            <BiMenuAltRight size={30}/>
        </div>
    </div>
   </motion.div>
  )
}

export default Header;