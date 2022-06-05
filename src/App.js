import React from 'react';
import { Routes,Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Banner from './Components/Banner/Banner';
import Body from './Components/Body/Body';
import Footer from './Components/Footer/Footer'

import OtherShows from './Pages/Movies/OtherShows/OtherShows';
import WatchifySpecials from './Pages/Movies/WatchifySpecials/WatchifySpecials';
// import More1 from './Pages/Movies/More1/More1';

import English from './Pages/Tv/English/English'
import Hindi from './Pages/Tv/Hindi/Hindi'
// import More1 from './Pages/Movies/More1/More1';



import Cricket from './Pages/Sports/Cricket/Cricket'
import F1 from './Pages/Sports/F1/F1'
// import More1 from './Pages/Movies/More1/More1';


import Disneyplus from './Pages/Disneyplus/Disneyplus'
import Kids from './Pages/Kids/Kids'


import './App.css';

function App() {
  return (
    <div className="app">

     
     <Routes>
        <Route path="/" element={<Navbar/>}/>
        
          <Route path="/movies/othershows" element={<OtherShows/>}/>
          <Route path="/movies/watchifyspecials" element={<WatchifySpecials/>}/>
          {/* <Route path="/movies/more" element={<More1/>}/> */}
          <Route path="/tv/english" element={<English/>}/>
          <Route path="/tv/hindi" element={<Hindi/>}/>
          {/* <Route path="/tv/more2" element={<More2/>}/> */}
          <Route path="/sports/cricket" element={<Cricket/>}/>
          <Route path="/sports/f1" element={<F1/>}/>
          {/* <Route path="/tv/more2" element={<More2/>}/> */}

          <Route path="/disneyplus" element={<Disneyplus/>}/>
          <Route path="/kids" element={<Kids/>}/>
      </Routes>

     


      
       <Banner/>
       <Body/>
     
      <Footer/>
    </div>
  );
}

export default App;
