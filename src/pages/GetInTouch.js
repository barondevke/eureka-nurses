import React from 'react'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'
import Header from '../components/Header'


const GetInTouch = () => {
  return (
    <div>
         <Header/>
        <div className='heading-image-git'>
        <h1 className='heading'> 
            Get In Touch
        </h1>
      </div>
      <div className='body'>
        <ContactForm/>
      </div>
<Footer/>
      
    </div>
  )
}

export default GetInTouch
