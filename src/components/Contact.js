import React, { useState, useRef } from 'react';
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button'
import { useFormspark } from "@formspark/use-formspark";
import ReCAPTCHA from "react-google-recaptcha";
import Alert from 'react-bootstrap/Alert'



const Contact = () => {

    const FORMSPARK_FORM_ID = "";
    const recaptchaKey = '';
    const recaptchaRef = useRef();

    const [submit, submitting] = useFormspark({
        formId: FORMSPARK_FORM_ID,
    });

    const [message, setMessage] = useState("");
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [formMessage, setFormMessage] = useState("");
    const [recaptchaToken, setRecaptchaToken ] = useState('');

    const updateRecaptchToken = (token) => {
        setRecaptchaToken(token);

    }

    const onSubmit = async (e) => {

        try {
        e.preventDefault();
        await submit({ message, name, email, recaptchaToken, "g-recaptcha-response": recaptchaToken });
        setFormMessage({text:'Thank you for contact me, I will respond to you shortly.', variant:'success'})
        setEmail('');
        setName('');
        setMessage('');
        } catch (error){
            setFormMessage({text:'Something went wrong and your form was not submitted. Make sure you checked the reCAPTCHA box.', variant:'danger'})
        }
        
        
    
    };

    return (
        <>
            <section className="mb-5 shadow-sm">
                <div className="page-header d-flex justify-content-center  align-items-center">
                    <h1> Contact </h1>
                </div>
            </section>

            <Container>
                <Row>
                    <Col lg={2}>
                    </Col>
                    <Col  lg={8} className="contact">
                        <h2> connect with me</h2>
                        <p> Are you interested in hiring me  or do you have a question? Leave your details in the form below and I will get back to you as soon as possible. </p>   
                        <p>No spam please.</p>
                        <Form onSubmit={onSubmit} className='contact-form mt-5'>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="" value={name} onChange={(e) => setName(e.target.value)} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Email </Form.Label>
                                <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Message</Form.Label>
                                <Form.Control as="textarea" rows={3} value={message} onChange={(e) => setMessage(e.target.value)} />
                            </Form.Group>
                            <ReCAPTCHA ref={recaptchaRef} sitekey={recaptchaKey} onChange={updateRecaptchToken} className='recaptcha' value={recaptchaToken} required/>
                            <div className="d-grid gap-2">
                                <Button variant="outline-secondary btn-block" type="submit" disabled={submitting}>
                                    {submitting ? "Sending..." : "Send"}
                                </Button>
                            </div>
                        </Form>
                            {formMessage &&  <Alert variant=  {formMessage.variant}>
                            {formMessage.text} </Alert>}



                    </Col>
                    <Col lg={2}>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Contact
