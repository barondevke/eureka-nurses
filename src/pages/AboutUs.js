import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Header from '../components/Header'
import Footer from '../components/Footer'


const AboutUs = () => {
  return (
    <div>
      <div>
        <Header/>
        <div className='about-us-heading-image'>
        <h1 className='heading'> 
            About Us
        </h1>
      </div>
      <div className='body'>
      <div className='mission'>
        <h2>
            Our History
        </h2>
      <p className='mission-text'>
      Eureka Home Solutions is a haven of exclusive high notch medical care. Founded in 2015 as a cancer care center, it has immensely 
      grown to a fully-fledged health facility offering a wide range of services; preventive, promotive and curative health care services.
      The main Trinity care center is located at the serene Ngong hills vicinity, approximately 4.5 km from Ngong town, along Ngong-Kahara road, 
      offering exclusive individualized healthcare services with more specialties to long term acute care for patients with serious medical conditions that 
      require specialized care and rehabilitation.  Due to demand for eminent services, we run a 24hr outpatient medical center, located at Ngong town just opposite
       the matatu stage and the new Ngong market.At Trinity Care Centre, our interdisciplinary team of experts ensure we provide the best care for our patients with the 
       goal that they will improve over time and return to their daily lives.
        </p>
      </div>

      <div className='mission'>
      <h2>
        Our Mission
      </h2>
      <p className='mission-text'>
      To provide high notch preventive, promotive and curative healthcare services and contribute in a big way to the wellbeing and health of the communities we serve. 
      </p>

      </div>

      <div className='mission'>
      <h2>
        Our Vision
      </h2>
      <p className='mission-text'>
      To be the leading healthcare institution in the region, providing world-class healthcare services.
      </p>
      </div>

      <div className='mission'>
      <h2>
        Our Partners
      </h2>
      <Row>
        <Col >
        <img className='partners' src='https://www.trinitycare.co.ke/wp-content/uploads/2022/02/logo-1.png' alt='partner'/>
        </Col>
      </Row>

    


      </div>

      
      

        </div>

      </div>
      <Footer/>
    </div>
  )
}

export default AboutUs
