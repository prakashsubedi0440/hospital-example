import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <Navbar expand="lg" collapseOnSelect className="navbar">

            <Container fluid="lg">

                {/* Logo + Hospital Name */}
                <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">

                    <img
                        src="/images/hospitalLogo.png"
                        alt="Hospital Logo"
                        height="50"
                        className="me-2"
                    />

                    <span style={{ fontWeight: "600", color: "#2D3290" }}>
                        Eye Hospital
                    </span>

                </Navbar.Brand>

                <Navbar.Toggle aria-controls="main-navbar" />

                <Navbar.Collapse id="main-navbar">

                    <Nav className="ms-auto">

                        <Nav.Link as={Link} to="/">Home</Nav.Link>

                        <Nav.Link as={Link} to="/about">About</Nav.Link>

                        <Nav.Link as={Link} to="/services">Services</Nav.Link>

                        <Nav.Link as={Link} to="/notice">Notice</Nav.Link>

                        <Nav.Link as={Link} to="/events">Events</Nav.Link>

                        <Nav.Link as={Link} to="/gallery">Gallery</Nav.Link>

                    </Nav>

                </Navbar.Collapse>

            </Container>

        </Navbar>
    );
}

export default Header;