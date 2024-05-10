import React from 'react'
import Navbar from '../component/Navbar';
import Jumbotron from '../component/Jumbotron';
import Footer from '../component/Footer';
import jumbo1 from '../assets/newjumbo.png'
import png1 from '../assets/1.png'
import png2 from '../assets/2.png'
import png3 from '../assets/3.png'
import png4 from '../assets/4.png'
import png5 from '../assets/5.png'
import png6 from '../assets/6.png'
import png7 from '../assets/7.png'
import png8 from '../assets/8.png'
import png9 from '../assets/9.png'
import png10 from '../assets/10.png'
import png11 from '../assets/11.png'
import png12 from '../assets/12.png'
import png13 from '../assets/13.png'
import png14 from '../assets/14.png'
import png15 from '../assets/15.png'
import png16 from '../assets/16.png'
import completed from '../assets/completed.png'
import ongoing from '../assets/ongoing.png'
import Headline2 from '../component/Headline2';
import Media from '../component/Media';
import media1 from '../assets/media1n.png'
import media2 from '../assets/media2n.png'
import media3 from '../assets/media3n.png'
import media4 from '../assets/media4.png'
import media5 from '../assets/media5.png'
import media6 from '../assets/media6.png'
import media7 from '../assets/media7.png'
import media8 from '../assets/media8.png'
import media9 from '../assets/media9.png'
import media10 from '../assets/media10.png'
import media11 from '../assets/media11.png'
import media12 from '../assets/media12.png'
import media13 from '../assets/media13.png'
import media14 from '../assets/media14.png'
import media15 from '../assets/media15.png'
import media16 from '../assets/media16.png'
import '../App.css'

function Project ()  {
  return (
    <>
    <Navbar/>
    <Jumbotron img={jumbo1}
    title="Our projects"
    body="Extensive expertise and experience in Engineering works..." />
    
    {/* 1 */}
    <Headline2 img={ongoing} png={png1}
    title="Design Review and Construction Supervison of Light Rail Mass Transit (LRMT) Red Line Project"
    
    description="RedLine is a 37km rail route that runs from Agbado to Marina.   LASGhas been granted track access from the Federal Government for the Red Line onthe NRC standard gauge from Agbado to Ebute Metta Junction (EBJ) and Right ofWay for an independent and dedicated rail track From EBJ to Oyingbo.   " />
    <Media media={media1}/>

    {/* 2 */}
    <Headline2 img={ongoing} png={png2} 
    title="Design & Construction of Light Rail Transit System from Marina to Okokomaiko (Blue-Line) Project."
    
    description="The entire blue line Rail alignment will run a total distance of about 27 kilometers from marina to Okokomaiko and will be served by 11 stations (Marina, Ebute Ero, Iddo Iganmu, Alaba, Mile 2, Festac, Alakija, Trade Fair, Volkswagen, LASU and Okokomaiko). Marina to Iganmu is an elevated track descending before Iganmu station and extending at grade all the way to Okokomaiko. Marina station to National theatre station spans a distance of around 5.0 kilometers on an elevated track including a 530-meter-long sea cross bridge."   />
    <Media media={media2}/>

    {/* 3 */}
    <Headline2 img={ongoing} png={png3} 
    title="Feasibility Study for The Proposed 4 Railway Lines of the LRMT"
   
    description="LAMATA engaged the services of CPCS to carry out Feasibility Study for The Proposed 4 Railway Lines of The LRMT and Nexant Consulting Limited as a Rail Project Consultant, was selected by CPCS as a subcontractor to work with on this project. CPCS prepared a scope of work of tasks to be carried out."   />
    <Media media={media4}/>

    {/* 4 */}
    <Headline2 img={ongoing} png={png4} 
    title="Rehabilitation and Expansion of the Lagos Badagry Expressway (LBE)"
   
    description="Nexant Consulting LTD serves as the owner’s engineer and the project managers for the construction of the Lagos - Badagry carriageway (Lot 2A) expansion Project, overseeing various aspects of the project processes."   />
    <Media media={media6}/>

    {/* 5 */}
    <Headline2 img={ongoing} png={png5} 
    title="Rehabilitation, Reconstruction and Expansion of Lagos-Ibadan Dual Carriageway; Section 1"
   
    description="The “Reconstruction, Rehabilitation and Expansion of Lagos - Ibadan Expressway” (Section 1) begins from the old toll plaza situated at Oregun/Ikosi ketu in Lagos, named Chainage 0+000. It ends at the Shagamu Interchange at Ogun State, named Chainage 43+600. The road is a dual carriage road with three (3) lanes of 3.65m width each, hard shoulders of 2.7m, central reserve, drain and verge on both sides (LHS and RHS). The typical width of the road cross section is 36.04m."   />
    <Media media={media7}/>

     {/* 6 */}
     <Headline2 img={ongoing} png={png6} 
    title="Engineering Design of Iyana-Ipaja Bus Terminal"
   
    description="Iyana-Ipaja BRT Terminal is located on an area of 8038.82sqm which will house the terminal building, driver’s lounge, paid toilet facility and Gateman posts, kiosk, Generator House and water treatment plant.
    The project also includes junction improvement and change to signalized intersection, design of walkway with bollards and road pavement.
    Nexant is to be responsible for carrying out engineering design-related tasks including, but not limited to civil, structural, MEP and signalization designs as part of the specification and the detailed engineering as necessary to construct, deliver, install and commission BRT Terminal as required by the specifications."   />
    <Media media={media11}/>

    {/* 7 */}
    <Headline2 img={completed} png={png7} 
    title="Construction of Police Academy-Wudil"
   
    description="This is a Central Bank of Nigeria (CBN) 2013 intervention project in a prominent tertiary institution in Nigeria – The Nigerian Police Academy, Wudil, Kano State. The project is aimed at Construction of 1No. Post Graduate Hostel Block; 1No. 500 Seating Capacity Lecture Theatre Block; 1No. Information and Communication Technology (ICT) Block; 1No. Forensic Laboratory Block and 1No. Indoor/Simulated Shooting Range Block all with Associated External Works."   />
    <Media media={media12}/>

     {/* 8 */}
     <Headline2 img={completed} png={png8} 
    title="Rehabilitation / Upgrading of Moshalashi Ipaja-Ayobo Road in Alimosho LGA"
   
    description="The project entailed the rehabilitation of the existing Moshalashi, Ayobo and Ipaja road. The rehabilitation of the project included the design and construction of drains, pedestrian walkways and installation of street lights and a complete redesign of pavement as well as alignment redesign where required.
    The project also involved removal and relocation of existing utility services which included services for PHCN, NITEL and Lagos State Water Corporation. Nexant were appointed by the contractor Plycon Ltd, to carry out the design for the whole project. We also had the responsibility for the construction supervision of the project."   />
    <Media media={media13}/>

    {/* 9 */}
    <Headline2 img={completed} png={png9} 
    title="Safety Audit for all NRC Rail Crossing"
   
    description="Nexant Consulting LTD successfully carried out findings on all rail crossings over the past two years and assessed the infrastructure as it existed and proposed improvements to the infrastructure to improve safety records of the crossing."   />
    <Media media={media5}/>

    {/* 10 */}
    <Headline2 img={completed} png={png10} 
    title="Mechanical Modification Works in SPDC Producing"
   
    description="The project entailed ensuring the successful mechanical modification of works in the Shell Petroleum Development Company land facilities east, comprising facilities in Rivers, Bayelsa, Imo, IMO Ibom and Abia states of Nigeria. It also included land facilities west, comprising facilities in Delta, Edo and Bayelsa states of Nigeria.   Nexant’s duties as project manager supervised modification works and other pertinent aspects of the project and managed funds as being expended by the contractor."   />
    <Media media={media9}/>

    {/* 11 */}
    <Headline2 img={completed} png={png11} 
    title="Technical Due Diligence on Lekki-Epe   Expressway"
   
    description="Lagos state Government (LASG) as part of its vision to transform the infrastructure challenges from obstacles to catalysts of poverty alleviation and sustainable development, signed a concession agreement to design, construct, finance and operate the Eti–Osa Lekki Epe Expressway (Concession area) with a view to eliminate the severe traffic gridlock along that corridor.
    The Eti-Osa Lekki-Epe Expressway, which is the principal arterial road connecting the Lekki-Epe axis to the rest of Lagos, is also the gateway to the proposed Lekki Free Zone, which also includes a new model city."   />
    <Media media={media14} />

    {/* 12 */}
    <Headline2 img={completed} png={png12} 
    title="The Nigeria Railway Corporation Technical School –Audit"
   
    description="Nexant Consulting was commissioned to carry out an audit of The Nigerian Railway Corporation’s existing Training Institute, with a view to assessing the possibility of this facility being upgraded to a Regional Technical Training Institute for General Electric (GE).  This is required as part of GE’s vision to build competence in Locomotive Assembly/Maintenance in Nigeria to support the 10 Year Nigeria Railway concession agreement that is currently being negotiated with the Federal Government."   />
    <Media media={media8}/>

    {/* 13 */}
    <Headline2 img={completed} png={png13} 
    title="Murtala Mohammed International Airport Expansion Project"
   
    description="The Federal Government of Nigeria proposed to modernize the Murtala Mohammed International Airport located at Ikeja, by extending to the east and west, north and south of the airport building. 
     The project has been divided into two phases:
      Expansion of the East and West wing 
      Expansion of the North and South wing 

      The construction of the East and Wing phase of the project was let to Gamji Nigeria Limited. On the 1st of October 2011, Gamji retained Nexant as Project Managers to oversee the construction and supervision of the project, which involved the construction of substructure and superstructure"   />
    <Media media={media10} />

    {/* 14 */}
    <Headline2 img={completed} png={png14} 
    title="Expansion, Rehabilitation and Resurfacing of Roads in Surulere."
   
    description={
      <div>
        <p>The project involved Design/ Construction Supervision for the expansion, rehabilitation and resurfacing of six roads all situated in the Surulere area of Lagos State. The roads identified are:</p>
        <ol>
          <li>OGUNLANA DRIVE</li>
          <li>OLATUNDE ONIMOLE ROAD</li>
          <li>ADEBOLA OJOMU ROAD</li>
          <li>BROWN ROAD</li>
          <li>SANYA ROAD</li>
          <li>ADETOLA ROAD</li>
          <li>IDOWU ODUNUGA ROAD</li>
        </ol>
      </div>
    }  />
    <Media media={media15} />

    {/* 15 */}
    <Headline2 img={completed} png={png15} 
    title="Dugbe-Eleyele-Ologuneru-Alufo Junction spur Aleshinloye, Onireke/Agbarigo Road, Oyo State."
   
    description="The project entailed the dualization of the existing 7.35km Dugbe-Eleyele-Oluguneru-Akufo Junction with spurs to Aleshinloye, Onireke/Agbarigo. We were responsible for the design and construction supervision for dualization of the project which included the design for the scheme, preparation of drawings and contract documents & Construction supervision of all works on site."   />
    <Media media={media16} />

    {/* 16 */}
    <Headline2 img={completed} png={png16} 
    title="Emergency Rehabilitation/Maintenance Of The Third Mainland Bridge."
   
    description="The Third MainlandBridge is the longest of the three bridges connecting Lagos Island with theLagos Mainland. It is a Trunk-A Road and measures 11.8km. The bridge starts atOworonshoki which is linked to Apapa-Oshodi expressway and Lagos-Ibadanexpressway and ends at Adeniji Adele interchange on Lagos Island. Nexantis responsible for the supervision of the construction and Health and Safetyaspect of the superstructure and substructure of the project."   />
    <Media media={media3}/>



    <Footer/>
    
    </>
  )
}

export default Project;
