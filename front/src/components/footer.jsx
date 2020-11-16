import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav } from 'react-bootstrap';
import "../css/index.css";

const Footer = () => {
    return (
        
        <Container fluid className='foo'>
            <div >
                <p>© 2020 <b className={{color:'#8DB5F4'}}>Creative Tim</b> </p>
            </div>
            <div className='footer'>
                <Nav defaultActiveKey="/home" as="ul">
                    <Nav.Item as="li">
                        <Nav.Link href="/home" style={{color:'#8C99AC'}}>Creative Tim</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav.Link  style={{color:'#8C99AC'}}>About Us</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav.Link  style={{color:'#8C99AC'}}>Blog</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav.Link  style={{color:'#8C99AC'}}>License</Nav.Link>
                    </Nav.Item>
                </Nav> 
            </div>
        </Container>
    )
};
export default Footer;

