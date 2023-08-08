import React from 'react'
import Header from '../components/Header'
import { Row, Card, Col } from 'react-bootstrap'
import Footer from '../components/Footer'

const NutritionPage = () => {
  return (
    <div>
      <Header/>
      <div className='heading-image'>
        <h1 className='heading'> 
            Nutrition Services
        </h1>
      </div>
      <div className='body'>
      <Row >
        <Col sm={6} >
            <Card className='outpatient-card'>
      <Card.Img variant="top" src="https://www.trinitycare.co.ke/wp-content/uploads/2022/04/AdobeStock_415850958-2048x1365.jpeg" />
    </Card> 
    </Col>
            <Col sm={6} className = 'outpatient-description' style={{margin:"3% 0"}} > <h2> Nutrition </h2>
             <p className='outpatient-info'>We utterly recognize that healthy living calls for healthy feeding. Also,
              good recovery occurs where nutrition is well cared for. For that matter, we offer exclusive nutritional support for all our patients and clients, 
              well guided and reviewed feeding programs by qualified nutritionist’s officers.</p>  </Col>
        </Row>

      
      </div>
      <Footer/>
    </div>
  )
}

export default NutritionPage
