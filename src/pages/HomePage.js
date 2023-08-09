import React from 'react'
import { Button, Row,Card,Col, Container } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHand } from '@fortawesome/free-regular-svg-icons'
import { faHandshake } from '@fortawesome/free-regular-svg-icons'
import { faClock } from '@fortawesome/free-regular-svg-icons'
import { faHospital } from '@fortawesome/free-regular-svg-icons'
import { Carousel } from 'react-bootstrap'
import { faWheelchairMove } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import styled from 'styled-components';


const HomePage = () => {
  const StyledLink = styled(Link)`
  color: Black;
  text-decoration: none;

 
   

  &:hover{
    
    color:Red;
  }  
  
  
  
`;
  return (
    <div>
      <Container fluid>
      

        <section className='starting-section '>
</section>

      
      </Container>



      
      <div className='body'>

      <Container fluid>
        <Row>
          <Col>

          <div className='about-text'>
        <h3>
        Eureka Health Solutions is a licensed home based healthcare services provider offering Critical Care Nursing , Regular nursing, Caregiver services, Physiotherapy, Speech therapy, Occupational therapy and Medical equipment. 
        Our team of skilled professionals offer therapeutic services as ordered by the primary care doctor. We offer cost effective yet efficient continuity in healthcare when a patient needs ongoing medical care after discharge from the hospital.
        We take time to understand each patient’s needs and develop a customized plan of care in consultation with the primary care doctor.
        </h3>
        <Link to={'/about-us'}><Button variant ="light" >About Us</Button></Link>
      </div>
      

          </Col>
        </Row>
      

</Container>



      <div className='choose-us'>
        
    
        <div className='choose-us-cards'>
        <Row>
        <Col sm={12}>
            <h2 className='choose-us-text'>Services we offer</h2>
            </Col>

            <Col>
            
            <Card className='choose-us-card' border="black" style={{ width: '18rem',margin:'auto' }}>
        <Card.Body >
        <Card.Title> <FontAwesomeIcon icon={faHand} style={{color: "#000000"}} size='2x' /> </Card.Title>
          <Card.Title>Critical Care Nursing</Card.Title>
          <Card.Text>
          This service is designed for patients who have been discharged from an Intensive care unit and high dependency unit and requires continued specialised care.
Under the guidance of the patient’s doctor or doctors, our critical care team offer critical care services safely at the patient’s own home.
          </Card.Text>
        </Card.Body>
      </Card>
            </Col>
            <Col >
            <Card className='choose-us-card' border="black" style={{ width: '18rem',margin:'auto' }}>
        <Card.Body>
        <Card.Title><FontAwesomeIcon icon={faHandshake} style={{color: "#000000",}} size='2x' /></Card.Title>
          <Card.Title>Travel Nursing</Card.Title>
          <Card.Text>
            We offer patient transport and escort to hospital and doctor's appointments.
          </Card.Text>
        </Card.Body>
      </Card>
            </Col>
            <Col>
            <Card className='choose-us-card' border="black" style={{ width: '18rem',margin:'auto' }}>
        <Card.Body>
          <Card.Title><FontAwesomeIcon icon={faClock} style={{color: "#000000",}} size='2x' /> </Card.Title>
          <Card.Title>Hospice Services</Card.Title>
          <Card.Text>
          This type of care is designed for patients who are no longer pursuing aggressive treatment for an illness. Apart from professional nursing care, our hospice services
           include but not limited to; emotional and spiritual support to patients, families, and others who need support through the end-of-life process.
           
          </Card.Text>
        </Card.Body>
      </Card>
            </Col>
        </Row>
        <Row>
       
            <Col>
            <Card className='choose-us-card' border="black" style={{ width: '18rem', margin:'auto' }}>
        <Card.Body>
          <Card.Title><FontAwesomeIcon icon={faHospital} style={{color: "#000000",}} size='2x'/></Card.Title>
          <Card.Title>Regular Nursing</Card.Title>
          <Card.Text>
          This service is offered to patients who are discharged from a hospital but still requires skilled nursing care. 
          Our highly skilled and licensed nurses coordinate the treatment plan of each patient as directed by the primary care physician upon discharge. 
          They communicate with the patient’s primary doctor and the family to ensure excellent continuity of care. 
          </Card.Text>
        </Card.Body>
      </Card>
            </Col>
            <Col>
            <Card className='choose-us-card' border="black" style={{ width: '18rem',margin:'auto' }}>
        <Card.Body>
          <Card.Title><FontAwesomeIcon icon={faClock} style={{color: "#000000",}} size='2x' /> </Card.Title>
          <Card.Title>Caregiver Services</Card.Title>
          <Card.Text>
          This is a service designed for patients who are not critically ill but require assistance with activities of daily living.
          </Card.Text>
        </Card.Body>
      </Card>
            </Col>
            <Col>
            <Card className='choose-us-card' border="black" style={{ width: '18rem', margin:'auto' }}>
        <Card.Body>
          <Card.Title><FontAwesomeIcon icon={faHospital} style={{color: "#000000",}} size='2x'/></Card.Title>
          <Card.Title>Physiotherapy Services</Card.Title>
          <Card.Text>
          Our registered physiotherapists evaluate and develop a personalized plan of treatment for each patient. These services include:

Exercise Programs for Strength, Endurance, Coordination and Balance,
Transfer training and
Body Mechanics and Safety training
          </Card.Text>
        </Card.Body>
      </Card>
            </Col>

        </Row>
      
        <Row>
        <Col>
            <Card className='choose-us-card' border="black" style={{ width: '18rem',margin:'auto' }}>
        <Card.Body>
          <Card.Title><FontAwesomeIcon icon={faClock} style={{color: "#000000",}} size='2x' /> </Card.Title>
          <Card.Title>Occupational Therapy</Card.Title>
          <Card.Text>
          This is a type of treatment aimed at helping restore independence in:

Toileting,
Feeding self and
Evaluation and fitting of adaptive equipment
          </Card.Text>
        </Card.Body>
      </Card>
            </Col>
            <Col>
            <Card className='choose-us-card' border="black" style={{ width: '18rem', margin:'auto' }}>
        <Card.Body>
          <Card.Title><FontAwesomeIcon icon={faWheelchairMove} size='2x' style={{color: "#000000",}} /></Card.Title>
          <Card.Title>Speech Therapy</Card.Title>
          <Card.Text>
          This service includes but not limited to

Swallowing reflex assessment,
Speech evaluation and training,
Oral expression and
Auditory expression
          </Card.Text>
        </Card.Body>
      </Card>
            </Col>
            <Col>
            <Card className='choose-us-card' border="black" style={{ width: '18rem',margin:'auto' }}>
        <Card.Body>
          <Card.Title><FontAwesomeIcon icon={faWheelchairMove} size='2x' style={{color: "#000000",}} /> </Card.Title>
          <Card.Title>Equipments Rental</Card.Title>
          <Card.Text>
          We offer the following equipment on a rental basis.

Electric Hospital beds,
Oxygen Concentrators,
Oxygen supply and accessories,
Suction Machines and more.
          </Card.Text>
        </Card.Body>
      </Card>
            </Col>
        </Row>
  

        </div>
       
      </div>




      <Container fluid>
        <Row>
          <Col>
          <div className='services-cards'>
        
        <Row>
          <Col lg={6}>
          <StyledLink  to={'/nutrition'}>
          <Card className='service-card' border='light'>
          <Card.Img variant='top' src="https://img.freepik.com/free-photo/doctor-showing-green-apple-hospital-corridor_107420-84828.jpg?w=996&t=st=1689932051~exp=1689932651~hmac=0a9390713fba43ed08ad967c293f2aa49223466b46351cc1d64a9d4e658f5d13" />
          <Card.Text className='services-text'>Nutrition Services</Card.Text>
        </Card>
        </StyledLink>
          </Col>

          <Col>
          <StyledLink to={'/get-in-touch'}>
          <Card className='service-card' border='light' >
          <Card.Img variant='top' src='https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80' />
          <Card.Text className='services-text'>Get In Touch</Card.Text>
        </Card>
        </StyledLink>
          </Col>
          
        </Row>

        
        

        <Row>
          <Col lg={6}>
          <StyledLink to={'/mediCare'}>
          <Card className='service-card' border='light' >
          <Card.Img variant='top' src='https://img.freepik.com/free-photo/group-african-medical-students-posed-outdoor-against-university-door_627829-404.jpg?w=996&t=st=1689932780~exp=1689933380~hmac=c4dd16e1859420b4fd95bbb0c9fc25c9fcae5b279f4175dfc503e9870942dc54'/>
          <Card.Text className='services-text'>Medicare</Card.Text>
        </Card>
        </StyledLink>
          </Col>

          <Col>
          <StyledLink to={'/about-us'}>
          <Card className='service-card' border='light' >
          <Card.Img variant='top' src='https://images.pexels.com/photos/8460223/pexels-photo-8460223.jpeg?auto=compress&cs=tinysrgb&w=1600' />
          <Card.Text className='services-text'>About Us</Card.Text>
        </Card>
        </StyledLink>
          </Col>

        
        </Row>
        
        
      </div>


          </Col>
        </Row>
      
      </Container>

      <div className='Testimonials'>
      <Carousel >
      <Carousel.Item>
        <Carousel.Caption style={{margin:'3% 0'}}>
          <div>
          <h4 className='carousel-texts'>“ Eureka offers comprehensive and quality care, we were impressed by their brochure 
            and service offerings and we highly recommend Eureka. 
            Their professionalism is top notch and complements their quality of services very well.”</h4>
          </div>
          
        </Carousel.Caption>
        <img 
        className='carousel-img'
        src='https://www.colorbook.io/imagecreator.php?hex=D71313&width=1920&height=1080&text=%201920x1080'
        alt='first slide'/>
        
      </Carousel.Item>

      <Carousel.Item>
      <img 
        className='carousel-img'
        src='https://www.colorbook.io/imagecreator.php?hex=D71313&width=1920&height=1080&text=%201920x1080'
        alt='first slide'/>
        <Carousel.Caption style={{margin:'5% 0'}}>
          <h4 className='carousel-texts'>
						“ 
            The nursing care at Eureka is amazing! I recommend them 100%. I like their adaptability and consistency
    ”		</h4>
          
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
      <img 
        className='carousel-img'
        src='https://www.colorbook.io/imagecreator.php?hex=D71313&width=1920&height=1080&text=%201920x1080'
        alt='first slide'/>
        <Carousel.Caption style={{margin:'5% 0'}}>
          <h4 className='carousel-texts last-text'>
						“ A place where life comes a priority nothing is good than a place 
            where human life comes first administered without descripathy. I celebrate you Eureka Home Solutions.”					
            </h4>
        
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

      </div>

      </div>
      
      
    </div>
  )
}

export default HomePage
