import React from 'react'
import Header from './Components/Header/Header'
import './global.css'
import PromoImage from './Components/PromoImage/PromoImage'
import FeaturedProducts from './Components/FeaturedProducts/FeaturedProducts'
// Importing our components


const App = () => {
  return (
    <div>
      <Header/>
      <PromoImage/>
      <FeaturedProducts/>
    </div>
  )
}

export default App