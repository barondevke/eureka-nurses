import React from 'react'
import { Form, Button,Row,Col } from 'react-bootstrap'
import { faPhone,faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressCard } from '@fortawesome/free-regular-svg-icons'
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const ContactForm = () => {
   const notify = () => toast.success("Message sent successfully!");


  const onFormSubmit = e => {
    const formData = new FormData(e.target),
          formDataObj = Object.fromEntries(formData.entries())
    console.log(formDataObj)

    notify()
  }



  return (
    <div>
      <ToastContainer position='center'/>
        <Row>
            <Col>
            
    <Form  onSubmit={onFormSubmit}>
    <Form.Group className="mb-3" controlId="formName" >
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Your Name" name='name' />
      </Form.Group>
      
 
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name='email' />
      </Form.Group>

     

      <Button variant="light" type="submit">
        Get In Touch
      </Button>

      </Form>

            </Col>

          <Col>

          <Col>
          <div style={{display:'flex',flexDirection:'row'}}>
          <FontAwesomeIcon icon={faPhone} style={{color: "#000000",margin:'5% 5%'}} size='2x' /><h4 style={{margin:'5% 0'}}>0723057975</h4>
          </div>
          </Col>
          
          <Col>
          <div style={{display:'flex',flexDirection:'row'}}>
          <FontAwesomeIcon icon={faEnvelope} style={{color: "#000000", margin:'5% 5%'}} size='2x' /><h4 style={{margin:'5% 0'}} >jndaba2006@yahoo.com</h4>
          </div>
          </Col>

          <Col>
          <div style={{display:'flex',flexDirection:'row'}}>
          <FontAwesomeIcon icon={faAddressCard} style={{color: "#000000", margin:'5% 5%'}} size='2x' /><h4 style={{margin:'5% 0'}} >P.O. Box 1226-00208, Ngong Hills, Ngong, Kenya</h4>
          </div>
          </Col>


          </Col>


        </Row>
 
    
  
    </div>
  )
}

export default ContactForm
