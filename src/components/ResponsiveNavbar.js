import React from "react";
import {Nav, Navbar, Container, NavDropdown} from 'react-bootstrap';  

export default function ResponsiveNavbar() {
    return(
        <Navbar bg="warning" expand="md" className="p-3">  
        <Container>  
          <Navbar.Brand href="#home">React Course</Navbar.Brand>  
          <Navbar.Toggle aria-controls="basic-navbar-nav" />  
          <Navbar.Collapse id="basic-navbar-nav">  
            <Nav className="me-auto">  
              <Nav.Link href="#home" className="active">Home</Nav.Link>  
              <Nav.Link href="#link">Link</Nav.Link>  
              <Nav.Link href="#home">About</Nav.Link>  
              <Nav.Link href="#link">Contact</Nav.Link>  
              
            </Nav>  
          </Navbar.Collapse>  
        </Container>  
      </Navbar>  
    )
}