import React from 'react'

const NotFound = () => {
    return (
        <>
            <div className="header" id='not-found'>
            <div className="overlay">
                <h1> 404</h1>
                <p className='mb-4'> Opps! This page does not exist.</p>
                <a class="work-button"  href='/' >go back home</a>
            </div>
            
        </div>
        </>
    )
}

export default NotFound
