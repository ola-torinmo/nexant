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
import media1 from '../assets/media1.png'
import media2 from '../assets/media2.png'
import media3 from '../assets/media3.png'
import '../App.css'

function Project ()  {
  return (
    <>
    <Navbar/>
    <Jumbotron img={jumbo1}
    title="Our projects"
    body="Extensive expertise and experience in Engineering works..." />
    <Headline2 img={completed} png={png1}
    title="Design and Construction of Light Rail Transit System"
    p="International bewrey plc,Lagos state"
    description="RedLine is a 37km rail route that runs from Agbado to Marina.   LASGhas been granted track access from the Federal Government for the Red Line onthe NRC standard gauge from Agbado to Ebute Metta Junction (EBJ) and Right ofWay for an independent and dedicated rail track From EBJ to Oyingbo.  " />
    <Media media={media1}/>
    <Headline2 img={ongoing} png={png2} 
    title="Emergency Rehabilitation/Maintenance Of The Third Mainland Bridge."
    p="International bewrey plc,Lagos state"
    description="The Third MainlandBridge is the longest of the three bridges connecting Lagos Island with theLagos Mainland. It is a Trunk-A Road and measures 11.8km. The bridge starts atOworonshoki which is linked to Apapa-Oshodi expressway and Lagos-Ibadanexpressway and ends at Adeniji Adele interchange on Lagos Island. Nexantis responsible for the supervision of the construction and Health and Safetyaspect of the superstructure and substructure of the project."   />
    <Media media={media2}/>
    <Headline2 img={ongoing} png={png3} 
    title="Expansion of theLagos Badagry Expressway"
    p="International bewrey plc,Lagos state"
    description="Nexant Consulting LTD serves as the owner’sengineer and the project managers for the construction of the Lagos - Badagrycarriageway (Lot 2A) expansion Project, overseeing various aspects of theproject process."   />
    <Media media={media3}/>
    <Footer/>
    
    </>
  )
}

export default Project;
