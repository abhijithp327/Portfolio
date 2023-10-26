import React from 'react';
import css from "./Footer.module.scss";
import {motion} from 'framer-motion';
import { footerVariants, staggerChildren } from '../../utils/motion';
import { BsInstagram, BsGithub, BsLinkedin } from "react-icons/bs";
import {SiGmail} from "react-icons/si";



const Footer = () => {
  return (
    <motion.section
    variants={staggerChildren}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    className={`paddings ${css.wrapper}`}>

<a className="anchor" id="contact"></a>
      
      
      <motion.div
      variants={footerVariants}
      className={`innerWidth yPaddings flexCenter ${css.container}`}>
        <div className={css.left}>
          <span className="primaryText">
            Let's make something <br />
            amazing together.
          </span>
          <span className="primaryText">
            Get In Touch <a href="mailto:abhijithp@gmail.com">With Me</a>
          </span>
        </div>

        <div className={css.right}>
          <div className={css.info}>
            <span className="secondaryText">My Social Medias</span>
            <p>Let's talk share your excitement with me </p>
          </div>
          <ul className={css.menu}>
            <li> <a href="https://github.com/abhijithp327"> <BsGithub  size='3rem' color='orange'/></a> </li>
            <li><a href="https://www.instagram.com/abhijithp1221/?next=%2F&hl=en"><BsInstagram  size='3rem' color='orange'/></a></li>
            <li><a href="https://www.linkedin.com/in/abhijithp327/"><BsLinkedin  size='3rem' color='orange'/></a></li>
            <li><a href="mailto:abhijithp@gmail.com"><SiGmail size='3rem' color='orange'/></a></li>
          </ul>
         
          
        </div>
        
      </motion.div>
    <motion.div 
    variants={footerVariants}
    className={css.copy}>
    <span  style={{fontWeight:"700"}}> &copy;2023 Abhijith P. All rights reserved</span>
    </motion.div>
    </motion.section>
  )
}

export default Footer;