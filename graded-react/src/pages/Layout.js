import { Outlet } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";

function Layout() {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">Graded Activity</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              
              <Nav.Link><Link to="/">Exercise 1</Link></Nav.Link>
              <Nav.Link><Link to="Exercise2">Exercise 2</Link></Nav.Link>
              <Nav.Link><Link to="Exercise3">Exercise 3</Link></Nav.Link>
              <Nav.Link><Link to="Exercise4">Exercise 4</Link></Nav.Link>
              <Nav.Link><Link to="Exercise5">Exercise 5</Link></Nav.Link>
              <Nav.Link><Link to="Exercise6">Exercise 6</Link></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container>
        <Outlet />
      </Container>
    </>
  );
}

export default Layout;