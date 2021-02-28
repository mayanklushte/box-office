import React from 'react'
import MainPageLayout from '../components/MainPageLayout'

// children layout 
// we wrap MainPageLayout Component arrond the content of page
// this act as children in javascript and then we can grab this in mainPageLaout.js
// We use this to control template inheritance kind thing in react
// this how we should manage layouts in react

const Home = () => {
  return (
    <MainPageLayout>
     This is Home
    </MainPageLayout>
  )
}

export default Home
