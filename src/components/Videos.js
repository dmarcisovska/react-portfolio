import React from 'react'
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Videos = ({videos}) => {
    return (
        <>
            <section className=" mb-5 shadow-sm">
                <div className="page-header d-flex justify-content-center  align-items-center">
                    <h1> Videos</h1>
                </div>
            </section>
            <Container className='videos'>
                <Row>
                 
                        {videos.map((video)=> {
                            const {id, url} = video;
                            return (
                                <Col lg={6}>
                                <div className="video-container">
                                    <iframe id={id} width="560" height="315" src={url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                </div>
                                </Col>
                            );
                        })}
                </Row>
            </Container>
            
        </>
    )
}

export default Videos