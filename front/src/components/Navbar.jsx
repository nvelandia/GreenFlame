import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/index.css'
import { AiFillGithub, AiFillTwitterSquare,
    AiOutlineInstagram, AiFillFacebook
} from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import { Container, Row, Col, Button, Navbar, Nav } from 'react-bootstrap';

const Header = () => {
    return (
        <div>
            <Container fluid className='header'>
                <Row>
                    <Col className="col-6">
                        <Navbar  expand="lg" className='Navbar' >
                            <Navbar.Toggle aria-controls="basic-navbar-nav"  />
                            <Navbar.Collapse id="basic-navbar-nav" >
                                <Nav className="mr-auto" >
                                    <Nav.Link href="/home" style={{color:' #FFFFFF'}}>Dashboard</Nav.Link>
                                    <Nav.Link href="/home" style={{color:' #FFFFFF'}}>Pricing</Nav.Link>
                                    <Nav.Link href="/home" style={{color:' #FFFFFF'}}>Login</Nav.Link>
                                    <Nav.Link href="/home" style={{color:' #FFFFFF'}}>Register</Nav.Link>
                                    <Nav.Link href="/home" style={{color:' #FFFFFF'}}>Lock</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Navbar>                      
                    </Col>
                    <Col className="col-6">
                        <div class="d-flex justify-content-end">
                            <div class="d-none d-sm-none d-md-block">
                                <AiFillFacebook style={{color: '#FFFFFF'}}/>
                                <AiOutlineInstagram style={{color: '#FFFFFF', margin: '0px 10px'}}/>
                                <AiFillTwitterSquare style={{color: '#FFFFFF', fontSize:'20px' }}/>
                                <AiFillGithub style={{color: '#FFFFFF', margin: '0px 30px 0px 10px'}}/>
                            <Button className='btn'><FaShoppingCart/> Purchase Now</Button>
                            </div>
                        </div>
           
                    </Col>
                </Row>
            </Container>

        </div>
    )
};
export default Header;

