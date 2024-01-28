import React from 'react'
import Navbar from '../component/Navbar';
import Jumbotron from '../component/Jumbotron';
import Footer from '../component/Footer';
import jumbo1 from '../assets/jumbo1.png'
import png1 from '../assets/1.png'
import png2 from '../assets/2.png'
import png3 from '../assets/3.png'
import completed from '../assets/completed.png'
import ongoing from '../assets/ongoing.png'
import Headline2 from '../component/Headline2';
import Media from '../component/Media';

function Project ()  {
  return (
    <>
    <Navbar/>
    <Jumbotron img={jumbo1}
    title="Our projects"
    body="Extensive expertise and experience in Engineering works..." />
    <Headline2 img={completed} png={png1} />
    <Media/>
    <Headline2 img={ongoing} png={png2}  />
    <Media/>
    <Headline2 img={ongoing} png={png3}  />
    <Media/>
    <Footer/>
    
    </>
  )
}

export default Project;
