import React from 'react';
import css from "./Portfolio.module.scss";
import { fadeIn, staggerChildren, textVariant } from '../../utils/motion';
import { motion } from 'framer-motion';

const Portfolio = () => {
  return (
    <motion.section
    variants={staggerChildren}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    className={`paddings ${css.wrapper}`}>

      <a className="anchor" id="portfolio"></a>

      <div className={`innerWidth flexCenter ${css.container}`}>


        <motion.div variants={textVariant(.4)} className={`flexCenter ${css.heading}`}>
          <div>
            <span className="primaryText">My Latest Projects</span>
            <p style={{marginTop: "10px"}}>Perfect solution for digital experience</p>
          </div>
          <a className="secondaryText" href="https://github.com/abhijithp327">Explore More Works</a>
        </motion.div>


        <div className={`flexCenter ${css.showCase}`}>
            <motion.img variants={fadeIn("up", "tween", .5, .6)} src="./foodapp.png" alt="project" />
            <motion.img variants={fadeIn("up", "tween", .7, .6)} src="./digitic.png" alt="project" />
            <motion.img variants={fadeIn("up", "tween", .9, .6)} src="./ui.png" alt="project" />
        </div>
      </div>
    </motion.section>
  )
}

export default Portfolio;