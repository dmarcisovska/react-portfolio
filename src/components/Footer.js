import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faYoutubeSquare } from '@fortawesome/free-brands-svg-icons'



const Footer = () => {
    return (
        <>
            <div className='phantom'></div>
            <div className="footer fixed-bottom">
            <div className="container footer-container">
                <span className="text-white">&copy; 2021 Denisa Marcisovska </span>
                <span className="text-white"><a href="https://www.linkedin.com/in/denisa-marcisovska/" target="_blank">  <FontAwesomeIcon icon={faLinkedin} /></a></span>
                <span className="text-white"><a href="https://github.com/dmarcisovska" target="_blank">  <FontAwesomeIcon icon={faGithub} /></a></span>
                <span className="text-white"><a href="https://www.youtube.com/channel/UCUD77wT8AYUhjEqBVGMFK0w" target="_blank">  <FontAwesomeIcon icon={faYoutubeSquare} /></a></span>  
            </div>
            
        </div> 
        </>
        
    )
}

export default Footer
