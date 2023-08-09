import React from 'react';
import PreNavbar from './components/PreNavbar';
import Navbar from './components/Navbar.js';
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import data from './data/data.json'
import Slider from './components/Slider.js'
import './App.css';
import Offers from './components/Offers';
import Heading from './components/Heading';
import StarPoduct from './components/StarPoduct';
import HotAccessoriesMenu from './components/HotAccessoriesMenu.js'
import HotAccessories from './components/HotAccessories.js';
import ProductReview from './components/ProductReview.js';
import Videos from './components/Videos.js';
import Footer from './components/Footer.js';
import NavItems from './components/NavItems.js';

const renderPaths = (paths) =>
  paths.map((path) => (<Route key={path} path={path} element={<HotAccessories item={data.hotAccessories.home} itemCover={data.hotAccessoriesCover.home} />} />));
const App = () => {
  return (

    <Router>
      <PreNavbar/>
      <Navbar/>
      <Routes>
        <Route exact path='/tv' element={<NavItems items={data.tv}/>} />
        <Route exact path='/miPhones' element={<NavItems items={data.miPhones} />} />
        <Route exact path='/redmiPhones' element={<NavItems items={data.redmiPhones} />} />
        <Route exact path='/laptop' element={<NavItems items={data.laptop} />} />
        <Route exact path='/fitness&Lifestyle' element={<NavItems items={data.fitnessAndLifeStyle} />} />
        <Route exact path='/home' element={<NavItems items={data.home} />} />
        <Route exact path='/audio' element={<NavItems items={data.audio} />} />
        <Route exact path='/accesssories' element={<NavItems items={data.accessories} />} />
      </Routes>
      <Slider item={data.banner.start} name="start"/>
      <Offers offer={data.offer}/>
      <Heading text="STAR PRODUCTS"/>
      <StarPoduct products={data.starProduct}/>
      <Heading text="HOT ACCESSORIES" />
      <HotAccessoriesMenu/>
      <Routes>
        <Route exact path='/music' element={<HotAccessories item={data.hotAccessories.music} itemCover={data.hotAccessoriesCover.music} />}/>
        <Route exact path='/smartDevices' element={<HotAccessories item={data.hotAccessories.smartDevice} itemCover={data.hotAccessoriesCover.smartDevice} />}/>
        <Route exact path='/lifestyle' element={<HotAccessories item={data.hotAccessories.lifeStyle} itemCover={data.hotAccessoriesCover.lifeStyle} />}/>
        <Route exact path='/mobileAccessories' element={<HotAccessories item={data.hotAccessories.mobileAccessories} itemCover={data.hotAccessoriesCover.mobileAccessories} />}/>
       {renderPaths(['/','/tv','/miPhones','/redmiPhones','/laptop','/fitness&Lifestyle','/home','/audio','/accesssories'])}
      </Routes>
      <Heading text='PRODUCT REVIEWS'/>
      <ProductReview items={data.productReviews}/>
      <Heading text="VIDEOS"/>
      <Videos video={data.videos}/>
      <Heading text="IN THE PRESS"/>
      <Slider item={data.banner.end} name="end"/>
      <Footer footer={data.footer}/>
    </Router>
  )
}

export default App
