import React from 'react'
import { BrowserRouter as Router} from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import Projects from "./components/Projects";
import Home from './components/Home';
import About from "./components/About";
import Blog from './components/Blog';
import Videos from './components/Videos';
import Contact from './components/Contact';
import { Navbar, Nav, Container } from 'react-bootstrap';


const Navigation = () => {
    return (
        <>   
            <Navbar collapseOnSelect expand="md" className=""> 
                <Container>
                    <Navbar.Brand href="/" className="">
                        <img src="../images/denisa-dev-logo.png" className="logo"/>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                    <Nav>
                        <Nav.Link href='/about'> About</Nav.Link>
                            <Nav.Link  href='/projects'> Projects</Nav.Link>
                            <Nav.Link href='/blog'> Blog</Nav.Link>
                            <Nav.Link  href='/videos'> Videos</Nav.Link>
                            <Nav.Link  href='/contact'> Contact</Nav.Link>
                    
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>   
        </>
    )
}

export default Navigation
