import React from 'react';
import css from "./Footer.module.scss";
import {motion} from 'framer-motion';
import { footerVariants, staggerChildren } from '../../utils/motion';

const Footer = () => {
  return (
    <motion.section
    initial="hidden"
    whileInView="show"
    variants={staggerChildren}
  viewport={{once: false, amount: 0.25}}
 className={`paddings ${css.wrapper}`}>

<a className='anchor' id='contact'></a>


        <motion.div
        variants={footerVariants}
         className={`innerWidth yPaddings flexCenter ${css.container}`}>
            <div className={css.left}>
            <span className="primaryText">
           Lets make something <br/> amazing together
            </span>

            <span className="primaryText">
                Get In <br/> <a href="mailto:abhijithp327@gmail.com">Touch With Me</a>
            </span>
            </div>

            <div className={css.right}>
               <div className={css.info}>
                <span className="secondaryText">Social Medias</span>
               </div>

               <div className={css.menu}>
                <li>ddd</li>
                <li>ssss</li>
                <li>dddd</li>
               </div>
            </div>
        </motion.div>
    </motion.section>
  )
}

export default Footer;