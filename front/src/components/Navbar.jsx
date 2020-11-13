import react from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import s from './Navbar.module.css';
import { AiFillGithub,
    AiFillTwitterSquare,
    AiOutlineInstagram,
    AiFillFacebook
} from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";

import { Container, Row, Col, Button, Navbar, Nav } from 'react-bootstrap';

const Header = () => {
    return (
        <div>
            <Container fluid className={s.red}>
                <Row>
                    <Col className="col-6">
                        
  <Nav defaultActiveKey="/home" as="ul">
                            <Nav.Item as="li">
                                <Nav.Link href="/home" style={{color:' #FFFFFF'}}>Dashboard</Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Nav.Link  style={{color:' #FFFFFF'}}>Pricing</Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Nav.Link  style={{color:' #FFFFFF'}}>Login</Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Nav.Link  style={{color:' #FFFFFF'}}>Register</Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Nav.Link  style={{color:' #FFFFFF'}}>Lock</Nav.Link>
                            </Nav.Item>
                        </Nav> 
                        
                    </Col>
                    <Col className="col-6">
                    <div class="d-flex justify-content-end">
                        <div>
                    <AiFillFacebook classname='justify-content-end' style={{color: '#FFFFFF'}}/>
                    <AiOutlineInstagram style={{color: '#FFFFFF', margin: '0px 10px'}}/>
                    <AiFillTwitterSquare style={{color: '#FFFFFF' }}/>
                    <AiFillGithub style={{color: '#FFFFFF', margin: '0px 30px 0px 10px'}}/>
                        <Button className={s.btn}><FaShoppingCart/> Purchase Now</Button>
                        </div>
                    </div>
           
                    </Col>
                </Row>
            </Container>

        </div>
    )
};
export default Header;

