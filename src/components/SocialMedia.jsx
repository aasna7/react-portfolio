import React from 'react'
import { BsTwitter, BsInstagram, BsGithub, BsDribbble,BsLinkedin } from 'react-icons/bs';
import { FaFacebook } from 'react-icons/fa';

function SocialMedia() {
  return (
    <div className='app__social'>
      <div>
            <BsDribbble />
        </div>
        <div>
            <BsLinkedin />
        </div>
        <div>
            <BsGithub />
        </div>
        <div>
            <BsInstagram />
        </div>
        <div>
            <FaFacebook />
        </div>
    </div>
  )
}

export default SocialMedia