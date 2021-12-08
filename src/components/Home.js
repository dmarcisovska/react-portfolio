import React from 'react'
import { Button } from 'react-bootstrap';

const Home = () => {
    return (
        <>
            <div className="header" >
                <div className="overlay">
                    <h1 className='mb-4'> Hello, I'm Denisa.</h1>
                    <h2> I'm a front end developer.</h2>
                    <a className="work-button"  href='/projects' >View my projects</a>
                </div>
                
            </div>
        </>
    )
}

export default Home
