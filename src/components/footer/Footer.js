import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { 
    CURRENT_YEAR, 
    HOSPITAL_ADDRESS, 
    HOSPITAL_EMAIL, 
    HOSPITAL_NAME, 
    HOSPITAL_PHONE     
} from "../../config/Constants";

function Footer() {
    return (

        <footer className="footer">

            <Container fluid="lg">

                <Row className="footer-content">

                    {/* Column 1 */}
                    <Col lg={4} md={6} sm={12} className="footer-column">

                        <h4>Eye Hospital</h4>

                        <p>
                            Providing advanced eye care with modern technology
                            and experienced specialists.
                        </p>

                        <p><strong>Phone:</strong> {HOSPITAL_PHONE}</p>
                        <p><strong>Email:</strong> {HOSPITAL_EMAIL}</p>
                        <p><strong>Address:</strong> {HOSPITAL_ADDRESS}</p>

                    </Col>


                    {/* Column 2 */}
                    <Col lg={4} md={6} sm={12} className="footer-column">

                        <h5>Quick Links</h5>

                        <ul className="footer-links">

                            <li><Link to="/career">Career</Link></li>
                            <li><Link to="/contact">Contact Us</Link></li>
                            <li><Link to="/faq">FAQs</Link></li>

                        </ul>

                    </Col>


                    {/* Column 3 */}
                    <Col lg={4} md={12} sm={12} className="footer-column">

                        <h5>Opening Hours</h5>

                        <p>Sunday – Friday: 9:00 AM – 6:00 PM</p>
                        <p>Saturday: Emergency Only</p>

                    </Col>

                </Row>


                <div className="footer-bottom">

                    <p>
                        © {CURRENT_YEAR} {HOSPITAL_NAME}
                    </p>

                    <p>All rights reserved.</p>

                </div>

            </Container>

        </footer>

    );
}

export default Footer;