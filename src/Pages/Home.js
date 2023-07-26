import React from 'react'
import About from '../Pages/About'
import TestApis from "./TestApis"
import MultiPage from '../Components/MultiPage'
import TeaserBlock from '../Components/TeaserBlock'
import Products from './Products'
import Product from '../Components/Product'
import FeaturedProducts from '../Components/FeaturedProducts'
import CalltoAction from './CalltoAction'
import ContactUs from '../Components/ContactUs'
import Banner from '../Components/Banner'
const Home = () => {
  return (
    <>
    <TestApis/>
    <Banner/>
    <About/>
    <ContactUs/>
    <FeaturedProducts/>
    </>
  )
}

export default Home