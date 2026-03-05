import { Navbar, Nav, Container } from 'react-bootstrap';
//import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
    return (
        <Navbar bg="light" expand="lg" collapseOnSelect>
            <Container>
                <Navbar.Brand href="/">
                    <img
                        src="/images/hospitalLogo.png"
                        alt="Hospital Logo"
                        height="50"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/about">About</Nav.Link>
                        <Nav.Link href="/services">Services</Nav.Link>
                        <Nav.Link href="/notice">Notice</Nav.Link>
                        <Nav.Link href="/events">Events</Nav.Link>
                        <Nav.Link href="/gallery">Gallery</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;