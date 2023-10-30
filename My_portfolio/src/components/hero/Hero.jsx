import React from 'react'
import css from "./Hero.module.scss";
import {motion} from 'framer-motion';
import { fadeIn, slideIn, staggerContainer } from '../../utils/motion';
import Resume from "./Abhijith_Resume.pdf";



const Hero = () => {
  return (
    <section className={`paddings ${css.wrapper}`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`innerWidth ${css.container}`}
    >
      <div className={css.upperElements}>
        <motion.span className="primaryText" variants={fadeIn("right", "tween", 0.2, 1)}>
          Hey There,
          <br />
          I'm Abhijith.
        </motion.span>
        <motion.span
         variants={fadeIn("left", "tween", 0.4, 1)}
         className="secondaryText"
         >
          I design beautiful simple
          <br />
          things, And I love what i do
        </motion.span>
      </div>

      <motion.div
        variants={fadeIn("up", "tween", 0.3, 1)}
        className={css.person}
      >
        <motion.img variants={slideIn("up", "tween", 0.5, 1.3)} src="./abhijithp.png" alt="abh" />
      </motion.div>

 
      <motion.a
        variants={fadeIn("left", "tween", 0.4, 1)}
       href={Resume} download className={css.email} >
                    <button className='button'>Download Cv</button>
                </motion.a>

      <div className={css.lowerElements}>
        <motion.div variants={fadeIn("right", "tween", 0.3, 1)} className={css.experience}>
          <div className="primaryText">1+</div>
          <div className="secondaryText">
            <div>Years</div>
            <div>Experience</div>
          </div>
        </motion.div>

        <motion.div variants={fadeIn("left", "tween", 0.5, 1)} className={css.certificate}>
          <img src="./certificate.png" alt="" />
          <span>CERTIFIED PROFESSIONAL</span>
          <span>FULL STACK DEVELOPER</span>
        </motion.div>
      </div>
    </motion.div>

    <motion.a
        variants={fadeIn("right", "tween", 0.5, 1)}
       href={Resume} download className={css.email2} >
                    <button className='button' >Download Cv</button>
                </motion.a>
  </section>
  )
}

export default Hero;