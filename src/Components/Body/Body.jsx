import React, { useState } from 'react';
import axios from 'axios';
import Cards from '../../Pages/Cards/Cards';
import styles from './Body.module.css';
import { Typography } from '@mui/material';


const Body = () => {

  return (
   <div className={styles.body}>


    <div className={styles.body1}> 
      <Typography variant='h4' >Latest & and Trending</Typography>
      <div>
      <Cards
      />
     <Cards/>
     <Cards/>
     <Cards/>
     <Cards/>
     <Cards/>
      </div>
     </div>


     <div className={styles.body2}> 

      <Typography variant='h4' >Movies Recommended</Typography>
      <div>
      <Cards/>
     <Cards/>
     <Cards/>
     <Cards/>
     <Cards/>
     <Cards/>
      </div>
     </div>


    <div className={styles.body3}> 
      <Typography variant='h4' >Shows Recommended</Typography>
    <div>
    <Cards/>
     <Cards/>
     <Cards/>
     <Cards/>
     <Cards/>
     <Cards/>
    </div>
     </div>


    <div className={styles.body4}> 
      <Typography variant='h4' >DisneyMax Specials</Typography>
     <div>
        <Cards/>
     <Cards/>
     <Cards/>
     <Cards/>
     <Cards/>
     <Cards/>
     
     
     </div>
     </div>


    <div className={styles.body5}> 
    <Typography variant='h4' > Popular TalkShow</Typography>
    <div>
    <Cards/>
     <Cards/>
     <Cards/>
     <Cards/>
     <Cards/>
     <Cards/>
    </div>
  </div>
   </div> 
  )
}

export default Body