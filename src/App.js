import React from 'react'
import Header from './Components/Header/Header'
import './global.css'
import PromoImage from './Components/PromoImage/PromoImage'
import FeaturedProducts from './Components/FeaturedProducts/FeaturedProducts'
import ShippingDeals from './Components/ShippingDeals/ShippingDeals'
import ShoesAndGear from './Components/ShoesAndGear/ShoesAndGear'
import PopularCategory from './Components/PopularCategory/PopularCategory'
import ZeusAndCrossfit from './Components/ZeusAndCrossfit/ZeusAndCrossfit'




const App = () => {
  return (
    <div>
      <Header/>
      <PromoImage/>
      <FeaturedProducts/>
      <ShippingDeals/>
      <ShoesAndGear/>
      <PopularCategory/>
      <ZeusAndCrossfit/>
      
    </div>
  )
}

export default App