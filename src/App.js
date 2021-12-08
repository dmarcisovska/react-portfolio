import React, { useState } from 'react';
import { BrowserRouter as Router, Switch,Route,Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

// import data
import projectData from './data/project-data';
import blogData from './data/blog-data';
import videoData from './data/video-data';

// import components
import Navigation from './Navigation';
import Home from './components/Home';
import About from "./components/About";
import Blog from './components/Blog';
import Projects from './components/Projects';
import Videos from './components/Videos';
import Contact from './components/Contact';
import Footer from './components/Footer';
import NotFound from './components/NotFound';
import './components/FontAwesome';

function App() {
  const [projects, setProjects] = useState(projectData)
  const [videos, setVideos] = useState(videoData)
  const [blogs, setBlogs] = useState(blogData)
  return (
    <>
      <Navigation />
      <Switch>                
          <Route path='/about' component={About}/>  
          <Route path='/projects' component={Projects}> 
            <Projects projects={projects}/>
          </Route>
          <Route path='/blog' component={Blog}>
            <Blog blogs={blogs}/>
          </Route>             
          <Route path='/videos' component={Videos}>
            <Videos videos={videos}/>
          </Route>
          <Route path='/contact' component={Contact}/>  
          <Route path='/' exact component={Home}/>   
          <Route path='*' component={NotFound}/>         
      </Switch>
      <Footer/>
    </>
  );
}

export default App;
