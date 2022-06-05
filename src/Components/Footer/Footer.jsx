import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';

const Footer = () => {
  return (
    <div className={styles.footer}>
        <div className={styles.left}>
            <div className={styles.top}>
                <Link to="">About DisneyplusMax </Link>
                <Link to="">Terms of Use</Link>
                <Link to="">Privacy Policy</Link>
                <Link to="">FAQ</Link>
                <Link to="">FeedBack</Link>
                <Link to="">Careers</Link>
            </div>
          
                
                <div className={styles.bottom}>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Voluptatem delectus, saepe porro accusantium eum officia nesciunt dicta maxime
                ullam laboriosam, iure adipisci aperiam eaque veniam fuga dolor aliquid, omnis unde.</p>
                </div> 
        </div>
        <div className={styles.middle}>
            <p>Connect with Us </p>
            <Link to="/"> <TwitterIcon/> </Link>
            <Link to="/"> <FacebookIcon/> </Link>
        </div>
        <div className={styles.right}>
                <p>DisneyMax App</p>
                <img src="" alt="" />
                <img src="" alt="" />
        </div>
    </div>
  )
}

export default Footer