import React from 'react'
import css from "./Hero.module.scss";
import {motion} from 'framer-motion';
import { fadeIn, slideIn, staggerContainer } from '../../utils/motion';


const Hero = () => {
  return (
   <section className={`paddings ${css.wrapper}`}>

    <motion.div
    initial="hidden"
    whileInView="show"
    variants={staggerContainer}
  viewport={{once: false, amount: 0.25}}
 className={`innerWidth ${css.container}`}>

          {/* upper elemts */}

    <div className={css.upperElements}>

        <motion.span
        variants={fadeIn("right", "tween",0.2, 1)}
         className="primaryText">

            Hey There, <br/> I'm Abhijith.
        </motion.span>
        <motion.span
        variants={fadeIn("left", "tween",0.4, 1)}
         className="secondaryText">
            I Design Beautiful Simple 
            <br/>
            things, And I love what i do 
        </motion.span>
    </div>


    {/* <!-- ========== Start My Image Section ========== --> */}

    <motion.div
    variants={fadeIn("up", "tween",0.3, 1)}
     className={css.person}>
        <motion.img
        variants={slideIn("up","tween",0.5, 1.3)}
         src="./person.png" alt="myimage" />
    </motion.div>

    {/* email */}

    <a className={css.email} href="mailto:abhijithp327@gmail.com">abhijithp327@gmail.com</a>
    
    {/* <!-- ========== End My Image  Section ========== --> */}




{/* <!-- ========== lower elements ========== --> */}
    <div className={css.lowerElements}>
    <motion.div
    variants={fadeIn("right","tween",0.3, 1)}
     className={css.experience}>
        <div className="primaryText">10</div>
        <div className="secondaryText">
            <div>Years</div>
            <div>Experience</div>
        </div>
    </motion.div>


    <motion.div
    variants={fadeIn("right", "tween",0.5, 1)}
     className={css.certificate}>
        
        <img src="./certificate.png" alt="certificate" />
        <span>CERTIFIED PROFESSIONAL</span>
        <span>FULLSTACK DEVELOPER (MERN)</span>
        </motion.div>
    </div>
    </motion.div>
   </section>
  )
}

export default Hero;