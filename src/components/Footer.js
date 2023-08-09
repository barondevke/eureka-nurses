import React from 'react'
import { Row,Col, Form,Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


const Footer = () => {
    const StyledLink = styled(Link)`
    color: White;
    text-decoration: none;
    position: relative;

    &:hover{
    
        color:Red;
      }  
      
  
 
    
  `;
  
  return (
    <div className='footer'>
        <Row>
            <Col md={4}>
            
        <ul className='footer-list'>
        <h4>Get Started</h4>   
        <StyledLink><li>Home</li></StyledLink>
        <StyledLink><li>Nutrition</li></StyledLink>
        <StyledLink><li>Medicare</li></StyledLink>
        <StyledLink><li>About Us</li></StyledLink>

      </ul>
            </Col>

            <Col md={4}>

            <ul className='footer-list'>
            <h4>Follow Us</h4>
            <li>Facebook</li>
            <li>Instagram</li>

            </ul>
            

            </Col>
            <Col md={4}>
            <Form>
                
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Enter email" name='email' />
      </Form.Group>
      <Button variant="light" type="submit">
        Get In Touch
      </Button>

            </Form>
            </Col>
        
        </Row>

        <Row>
            <Col style={{textAlign:'center'}}>
            <img alt='footer' style={{width:'20%'}} src={require('./eureka-logo.jpg')} />
            </Col>
            </Row>
            <Row>
            <Col style={{textAlign:'center',display:'flex'}}>
            <h6 className='copyright'>Eureka Health Solutions. Copyright 2023 © All Rights Reserved.</h6> 
            </Col>
        </Row>
      
    </div>
  )
}

export default Footer
