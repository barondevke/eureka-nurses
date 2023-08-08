import React from 'react'
import Header from '../components/Header'
import { Row, Card, Col} from 'react-bootstrap'
import Footer from '../components/Footer'

const mediCare = () => {
  return (
    <div>
        <Header/>
        <div className='medicare-heading-image'>
        <h1 className='heading'> 
            Medicare
        </h1>
      </div>
      <div className='body'>
      <Row >
            <Col sm={6} className = 'outpatient-description' style={{margin:"3% 0"}} > <h2> Long-term Acute Care </h2>
             
             <p className='outpatient-info'>We specialize in the treatment of patients with serious medical conditions that require care on an ongoing basis but
              no longer require intensive care or extensive diagnostic procedures. At Trinity, we have tasked ourselves to assist in the healing process for patients with long term 
              illnesses by offering them a carefully coordinated care plan whose eventual target is to ensure the patient is reunited with their families. In this regard we cater for patients
               with stroke, spinal & brain trauma, bed sores (wound care), accident trauma, neurological conditions, medical complex care for multiple, chronic conditions. 
              All patients are assessed by the interdisciplinary team consisting of physician, consultants, nurses, physical, occupational, respiratory and speech therapists, 
              dietitians, pharmacist, case managers, clinical and support staff.</p>  </Col>
             
             <Col sm={6} >
            <Card style={{ width: '34rem', margin:"5% 0" }}>
      <Card.Img variant="top" src="https://media.istockphoto.com/id/1432338988/photo/support-trust-and-help-from-caregiver-or-nurse-walking-with-senior-man-or-patient-in.jpg?s=612x612&w=0&k=20&c=ERkeCumb5BpVCJUMWBKWYrIJNN5fIRXSR79gxA01HdM=" />
    </Card> 
    </Col>
        </Row>

        <Row >
            <Col  className = 'outpatient-description' style={{margin:"3% 0"}} > <h2> Palliative Care </h2>
             <p className='outpatient-info' >We specialize in the treatment of patients with serious medical conditions that require care on an ongoing basis but
              no longer require intensive care or extensive diagnostic procedures. At Trinity, we have tasked ourselves to assist in the healing process for patients with long term 
              illnesses by offering them a carefully coordinated care plan whose eventual target is to ensure the patient is reunited with their families. In this regard we cater for patients
               with stroke, spinal & brain trauma, bed sores (wound care), accident trauma, neurological conditions, medical complex care for multiple, chronic conditions. 
              All patients are assessed by the interdisciplinary team consisting of physician, consultants, nurses, physical, occupational, respiratory and speech therapists, 
              dietitians, pharmacist, case managers, clinical and support staff.</p>  </Col>
        </Row>

         <Row >
            <Col  className = 'outpatient-description' style={{margin:"3% 0"}} > <h2> Elderly Care </h2>
             <p className='outpatient-info'>It is so certain that age is catching up with us every day. It reaches a point where one is partially or fully dependent on others for certain tasks. 
             This is because degeneration of certain tissues and organs occurs, brain atrophies leading to locomotory challenges, senile dementia and psychosis. 
             Other old age-related medical issues set in rendering one in and out of hospital. It’s by this virtue that we have occupied the space of taking care of the elderly with multidisciplinary proportions to ensure they enjoy the peace of their age. 
             This group benefits more by active and regular physiotherapy and occupational therapy, nutritional and supplementation and psychosocial care.</p>  </Col>
        </Row>

         <Row >
            <Col  className = 'outpatient-description' style={{margin:"3% 0"}} > <h2> Memory Care </h2>
             <p className='outpatient-info'>It is worth noting that certain medical, traumatic and age-related conditions lead to memory loss. 
             This means the person will have cognitive challenges of the environment, places, people and time. 
             We offer exclusive memory enhancing activities, engagement of specialized personnel and medical care, or geared towards neurogenesis. </p> </Col>
        </Row>

         <Row >
            <Col  className = 'outpatient-description' style={{margin:"3% 0"}} > <h2> Counselling and Grief Services </h2>
             <p className='outpatient-info'>This is relevant to both the sick person and their kin. We soberly understand that it is so draining, mentally to be off the normal routine and battle a long term or terminal illness. We therefore take the issue of counseling of the patient seriously with an aim of ensuring he or she is aware of the problem and the ultimate outcome in a more hopeful way. 
             Through conferencing, we engage the relatives and next of kin about the client’s situation and psychological preparedness of any undesired outcome. 
             When the actual unwanted situation occurs, we offer exclusive commiserate and grieving services to ensure the loved ones accept and allows their loved one to rest in peace</p>  </Col>
        </Row>

         <Row >
            <Col  className = 'outpatient-description' style={{margin:"3% 0"}} > <h2> Wound Care </h2>
          
             <p className='outpatient-info'>The most disturbing soft tissues issues are when one develops some decubitus ulcers and incurs other wounds either septic or burn wounds. 
             The wounds need special management for quick healing. We have well trained medics on wound cleaning and dressing, applying all available methods. 
             In our inpatient facility, we apply all necessary precautions to ensure patients do not develop pressure sores mainly by regular turning, avoiding soiling and use of ripple mattress.</p>  </Col>
        </Row>   

         <Row >
            <Col  className = 'outpatient-description' style={{margin:"3% 0"}} > <h2>Physiotherapy </h2>
        
             <p className='outpatient-info'>Physiotherapy is treatment to restore, maintain, and make the most of a patient’s mobility, function, and well-being. 
             Physiotherapy helps through physical rehabilitation, injury prevention, and health and fitness. 
             Physiotherapists get you involved in your own recovery. We achieve this goal through the aid of super trained physiotherapist and occupational therapist officers.</p>  </Col>
             </Row>       
             <Row>
             <Col  className = 'outpatient-description' style={{margin:"3% 0"}} > <h2>Speech Therapy </h2>
        
        <p className='outpatient-info'>We have speech therapists who help our patients to regain their speech and swallowing exercises.</p>  </Col>
       

             </Row>
             <Row>
             <Col  className = 'outpatient-description' style={{margin:"3% 0"}} > <h2>Occupational Therapy </h2>
        
        <p className='outpatient-info'>We offer services to patients through well trained occupational therapists to help them do their day to day activites.</p>  </Col>

             </Row>
             
     

        </div>
      
    </div>
  )
}




export default mediCare
