import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';


const Header = () => {
  const {user,logOut}=useAuth();
    return (
        
        <>
        <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg">
          <Container>
          <Navbar.Brand >Manir Foods Delivery services</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
          <Nav>
          <Nav.Link  as={Link}to="/home">Home</Nav.Link>
          <Nav.Link  as={Link}to="/myorders">myorders</Nav.Link>
          <Nav.Link  as={Link}to="/manageorders">manage all orders</Nav.Link>
          <Nav.Link  as={Link}to="/addservice">Add a new items</Nav.Link>
          { user?.email ?

            <Button onClick={logOut} variant="light">logOut</Button>:
            <Nav.Link  as={Link}to="/login">login</Nav.Link>
          }
            
            <Navbar.Text>
              
             {user?.displayName}
            </Navbar.Text>
            </Nav>
            </Navbar.Collapse>
         
          </Container>
        </Navbar>

      </>
       
    );
};

export default Header;