import React from 'react'
import { motion } from 'framer-motion';

import { AppWrap } from '../../wrapper' 
import { images } from '../../constants';
import './Header.scss';


const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};

const Header = () => {
  return (
    <div className='app__header app__flex'>
        <motion.div 
        whileInView={{x:[-100,0], opacity:[0,1]}}
        transition={{duration:3}}
        className="app__header-info">
          <div class="nameContainer">
    <div class="nameBox">

        <div class="nameTitle">
            <span class="nameBlock"></span>
            <h1>Asna Shakya<span></span></h1>
        </div>

        <div class="nameRole">
            <div class="nameBlock"></div>
            <p>UI/UX Designer/ Frontend Enthusiast</p>
        </div>

    </div>
</div>
         
        </motion.div>
      
        <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles"
        >
          {[images.react, images.figma, images.flutter, images.sass].map((circle, index)=>(
            <div className='circle-cmp app__flex'
            key={`circle-${index}`}>
              <img src ={circle} alt="circle" />
              
            </div>
          )) }
        </motion.div>
        
    </div>
  )
}

export default AppWrap(Header,'home');