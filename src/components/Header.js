import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import styled from 'styled-components';






const Header = () => {
  const StyledLink = styled(Link)`
  color: Black;
  text-decoration: none;
  position: relative;

  .current{
    border-bottom: 3px solid red;
  }
  
  
`;




 
  return (
    <div>
     

      <Navbar expand="lg" style={{textAlign:'center'}}>
        
    <Container className='navlinks' style={{textAlign:'center', paddingLeft:'10%' }}>
    
      <Navbar.Brand href="/">
        <img className='logoDiv'    src={require('./eureka-logo.jpg')} 
         width="180"
         height="90"
         
         alt="logo"></img>
           
            </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav>
          <Nav.Link ><StyledLink to={'/'} activeClassName='current' exact  >Home</StyledLink> </Nav.Link>
          <Nav.Link><StyledLink to={'/nutrition'} activeClassName="current" exact>Nutrition</StyledLink> </Nav.Link>
          <Nav.Link><StyledLink to={'/mediCare'} activeClassName="current" exact >Medicare</StyledLink> </Nav.Link>
          <Nav.Link><StyledLink to={'/about-us'} activeClassName="current" exact>About Us</StyledLink> </Nav.Link>
          <Nav.Link><StyledLink to={'/get-in-touch'} activeClassName="current"  exact>Get In Touch</StyledLink> </Nav.Link>
          
         
         
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
    


    </div>
  
 
  )
}

export default Header
