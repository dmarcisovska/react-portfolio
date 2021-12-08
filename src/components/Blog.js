import React, { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button'

const Blog = ({blogs}) => {
    return (
        <>
        <section className="mb-5 shadow-sm page-title">
                <div className="page-header d-flex justify-content-center  align-items-center">
                    <h1> Blog </h1>
                </div>
        </section>

            <Container>
                <Row classname='mb-3 project-cards'>

            {blogs.map((blog)=> { 
                const {id, title, link, pubDate, image, contentSnippet} = blog;
                return (
                    <Col lg={4} classname='mb-3 d-flex align-items-stretch'>
                            <Card className='mb-4'>
                                <div className='card-hover-container'>
                                    <Card.Img variant="top" src={image}/>
                                    </div> 
                                <Card.Body className="d-flex flex-column">
                                    <Card.Title> {title}</Card.Title>
                                    <Card.Text>
                                        {pubDate}
                                    </Card.Text>
                                    
                                    <Button variant="outline-secondary" href={link} target="_blank">Read Article</Button>
                                       
                                    
                                </Card.Body>
                            </Card>
                    </Col>
                );
            })}
             </Row>
            </Container>
        </>
    )
}

export default Blog
