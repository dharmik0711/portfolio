import React from 'react';
import { FaGithub, FaFacebookF, FaLinkedinIn, FaTwitter, FaDev } from 'react-icons/fa';
import { SiHashnode } from 'react-icons/si'

const HeaderSocials = () => {
    return (
        <div className='home__socials'>
            <a href='https://www.github.com/dharmik0711' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaGithub />
            </a>

            

            

            <a href='https://www.linkedin.com/in/dharmik-patel-0ba035275/' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaLinkedinIn />
            </a>

           

            <a href='https://www.twitter.com/dharmik0711' className='home__social-link' target='__blank' rel='noreferrer'>
                <FaTwitter />
            </a>
        </div>
    );
};

export default HeaderSocials;
