import React, { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button'

const projects = ({projects}) => {
  

    return (
        <>
            <section className=" mb-5 shadow-sm">
                <div className="page-header d-flex justify-content-center  align-items-center">
                    <h1>  Projects</h1>
                </div>
            </section>

            <Container>
                <Row classname='mb-3 project-cards'>

            {projects.map((project)=> { 
                const {id, title, text, image, code, demo} = project;
                return (
                    <Col lg={4} classname='mb-3 d-flex align-items-stretch'>
                            <Card className='mb-4'>
                                <div className='card-hover-container'>
                                    <Card.Img variant="top" src={image}/>
                                    </div> 
                                <Card.Body className="d-flex flex-column">
                                    <Card.Title> {title}</Card.Title>
                                    <Card.Text>
                                        {text}
                                    </Card.Text>
                                    <ButtonGroup size="md" className="mb-2">
                                        <Button variant="outline-secondary" href={demo} target="_blank">Demo</Button>
                                        <Button variant="outline-secondary" href={code} target="_blank">Code </Button>
                                    </ButtonGroup>
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

export default projects
