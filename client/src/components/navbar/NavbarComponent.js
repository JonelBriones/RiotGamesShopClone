import React, {useState} from 'react'
import {Navbar,Nav,Container,NavDropdown,Form,Button, Offcanvas,CloseButton,ModalHeader} from 'react-bootstrap'
import {Link} from 'react-router-dom'
const NavbarComponent = () => {
  const [show,setShow] = useState(false)
  const handleClose = () => setShow(true)
  const handleShow = () => setShow(false)
  return (
    <>
    <Navbar fixed="top" bg="" variant="dark" expand="xl" className="mb-3">
          <Container fluid>
            <Navbar.Toggle aria-controls="offcanvasNavbarLabel-expand-lg" />
            <Navbar.Brand href="#"><img src="../img/riot-games-logo-0.webp" height="25"></img></Navbar.Brand>
            <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="light">Search</Button>
        </Form>
            <Navbar.Offcanvas
              id="offcanvasNavbarLabel-expand-sm"
              aria-labelledby="offcanvasNavbarLabel-expand-lg"
              placement="start"
            >
              <Offcanvas.Header closeButton={show}
              //  style={{backgroundColor:"#fff"}}
               >
                <CloseButton onClick={handleClose} variant="white"/>
                {/* <Offcanvas.Title id="offcanvasNavbarLabel-expand-lg">
                  Offcanvas
                </Offcanvas.Title> */}
              </Offcanvas.Header>
              <Offcanvas.Body>
              <Nav className="me-auto">
            <NavDropdown title="FEATURED" id="basic-nav-dropdown">
            <ul>
                <li><Link to="/category/tops" className='nav-links'>Tops</Link></li>
                <li>              <Link to="/category/bottoms" className='nav-links'>Bottoms</Link></li>
                <li>
                <Link to="/category/hoodies&jackets" className='nav-links'>Hoodies & Jackets</Link>
                </li>
              </ul>
            </NavDropdown>
            <NavDropdown title="APPAREL" id="basic-nav-dropdown">
              <ul>
                <li><span><Link to="/category/apparel" className='nav-links'>Show All</Link></span></li>
                <li><Link to="/category/tops" className='nav-links'>Tops</Link></li>
                <li>              <Link to="/category/bottoms" className='nav-links'>Bottoms</Link></li>
                <li>
                <Link to="/category/hoodies&jackets" className='nav-links'>Hoodies & Jackets</Link>
                </li>
              </ul>
            </NavDropdown>
            <NavDropdown title="COLLECTIBLES" id="basic-nav-dropdown">
            <ul>
                <li><Link to="/category/tops" className='nav-links'>Tops</Link></li>
                <li>              <Link to="/category/bottoms" className='nav-links'>Bottoms</Link></li>
                <li>
                <Link to="/category/hoodies&jackets" className='nav-links'>Hoodies & Jackets</Link>
                </li>
              </ul>
            </NavDropdown>
            <NavDropdown title="ART" id="basic-nav-dropdown">
            <ul>
                <li><Link to="/category/tops" className='nav-links'>Tops</Link></li>
                <li>              <Link to="/category/bottoms" className='nav-links'>Bottoms</Link></li>
                <li>
                <Link to="/category/hoodies&jackets" className='nav-links'>Hoodies & Jackets</Link>
                </li>
              </ul>
            </NavDropdown>
            <NavDropdown title="ACCESSORIES" id="basic-nav-dropdown">
            <ul>
                <li><Link to="/category/tops" className='nav-links'>Tops</Link></li>
                <li>              <Link to="/category/bottoms" className='nav-links'>Bottoms</Link></li>
                <li>
                <Link to="/category/hoodies&jackets" className='nav-links'>Hoodies & Jackets</Link>
                </li>
              </ul>
            </NavDropdown>
            <NavDropdown title="SALE" id="basic-nav-dropdown">
            <ul>
                <li><Link to="/category/tops" className='nav-links'>Tops</Link></li>
                <li>              <Link to="/category/bottoms" className='nav-links'>Bottoms</Link></li>
                <li>
                <Link to="/category/hoodies&jackets" className='nav-links'>Hoodies & Jackets</Link>
                </li>
              </ul>
            </NavDropdown>
            <Nav.Link href="#sign-in" className='nav-links sign-in'>SIGN IN</Nav.Link>
          </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>

    </>
  )
}

export default NavbarComponent