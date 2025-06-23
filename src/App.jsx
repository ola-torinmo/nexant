import './App.css'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Service from './pages/Service';
import Project from './pages/Project';
import QA from './pages/QA';
import JobPage from './pages/JobPage';
import JobDetailsPage from './pages/JobDetailsPage';
import JobApplicationForm from './pages/JobApplicationForm';
function App() {

  return (
    <div>
      <Router>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/service' element={<Service />} />
            <Route path='/project' element={<Project />} />
            <Route path='/blog' element={<Blog />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/qa' element={<QA />} />
            <Route path='/jobpage' element={<JobPage />} />
            <Route path="/careers/:jobId" element={<JobDetailsPage />} />
            <Route path="/careers/:jobId/apply" element={<JobApplicationForm />} />
        </Routes>
      </Router>
      {/* how far when u have this code you should see this the best way to structure your code is to separate some components and pages
          the components folder will hold any component folder some components such as footer and navbar and some cards that are repititive 
          pages folder will hold all the routes that are in the folder i will help you with all the routes all you need is just to solve the ui
        
      */}
      {/* 
          for all the pages or components that you want to create make use of the .jsx extension for it to go well it has some benefits over using .js 

          always store the all the pictures in the assets folder and import them in the component or page that you want to use them
          always use the Link component from react-router-dom to navigate between pages and components
          
          all pages routes are in the pages folder and all components are in the component folder

      */}
    </div>

  )
}

export default App
