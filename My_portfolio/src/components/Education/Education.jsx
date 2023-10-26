import React from 'react';
import css from "./Education.module.scss";
import {motion} from 'framer-motion';
import { footerVariants, staggerChildren } from '../../utils/motion';
import { comments, sliderSettings } from '../../utils/data';
import Slider from "react-slick";




const Education = () => {
    return (
        <motion.section
            initial="hidden"
            whileInView="show"
            variants={staggerChildren}
            viewport={{ once: false, amount: 0.25 }}

            className={`paddings ${css.wrapper}`}>

<a className='anchor' id='education'></a>


            <motion.div
            variants={footerVariants}
             className={`yPaddings innerWidth ${css.container}`}>
               <div className={`flexCenter ${css.heading}`}>
                <span className='primaryText'>My Education Details</span>
                <p style={{marginTop:'2rem'}}>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
                <p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
               </div>


            {/* carousal */}

            <div className={`yPaddings ${css.comments}`}>
                <Slider className={css.slider}
                {...sliderSettings}
                >
                   {
                    comments.map((com,index) => {
                        return (
                            <div className={`flexCenter ${css.comment}`}>
                                <img src={com.img} alt="all" />
                                <p>{com.comment}</p>

                                <div className={css.line}></div>

                                <div className={css.bio}>
                                    <span>{com.name}</span>
                                    <span>{com.post}</span>
                                </div>
                            </div>
                        )
                    })
                   }
                    
                </Slider>
            </div>

            </motion.div>


        </motion.section>
    )
}

export default Education