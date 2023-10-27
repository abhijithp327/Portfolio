import React from 'react';
import css from "./Education.module.scss";
import {motion} from 'framer-motion';
import { footerVariants, staggerChildren } from '../../utils/motion';
import { comments, sliderSettings } from '../../utils/data';
import Slider from "react-slick";




const Education = () => {
    return (
        <motion.section
        variants={staggerChildren}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        section className={`paddings ${css.wrapper}`}>
    
          <a className="anchor" id="education"></a>
    
          <motion.div
          variants={footerVariants}
          className={`yPaddings innerWidth ${css.container}`}>
    
    
            <div className={`flexCenter ${css.heading}`}>
              <span className="primaryText">My Educations Details</span>
              <p style={{ marginTop: "2rem" }}>
              I have completed my graduation in Bsc Computer Science from Mahatma Gandhi University in 2022 With 7.5 CGPA.
              
              After my graduation I joined  a course where I build my knowledge and skill set in ME(A)RN Stack.
              
              After my Internship I joined in GooFree Lab Technologies.Pvt.Ltd as a Junior Fullstack Developer
              </p>
             
            </div>
    
    
    
            <div className={`yPaddings ${css.comments}`}>
              {/* to use slider , we have to inlcude css in index.html head */}
              <Slider {...sliderSettings} className={css.slider}>
                {comments.map((comment, i) => {
                  return (
                    <div className={`flexCenter ${css.comment}`}>
                      <img src={comment.img} alt="" />
                      <p>{comment.comment}</p>
                      <div className={css.line}></div>
                      <div className={css.bio}>
                        <span>{comment.name}</span>
                        <span>{comment.post}</span>
                      </div>
                    </div>
                  );
                })}
              </Slider>
            </div>
    
    
          </motion.div>
    
        </motion.section>
    )
}

export default Education