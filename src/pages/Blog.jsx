import React from 'react'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import Blogsection from '../component/Blogsection'
import Blogcontent from '../component/Blogcontent'
import Subscribe from '../component/Subscribe'
import '../App.css'

function Blog() {
  return (
    <>
    <Navbar/>
    <Blogcontent/>
    <Blogsection title="Our Blog"/>
    <Subscribe/>
    <Footer/>
    </>
  )
}

export default Blog