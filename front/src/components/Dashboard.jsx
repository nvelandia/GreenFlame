import 'bootstrap/dist/css/bootstrap.min.css';
import { FaHandPointer } from "react-icons/fa";
import  "../css/index.css";

import { Container, Row, Col, Button, } from 'react-bootstrap';

const Dashboard = () => {
    return (
        <div className='skew'>
            <Container fluid className='dashboard'>
                <Row className='fix' >
                    <Col col-xs-12 col-sm-12 col-md-6 col-lg-6 >
                        <div className='dash'>
                            <h1>Dashboard PRO React</h1>
                            <p style={{fontSize:'25px'}}>A beautiful premium dashboard for <br/>
                                Bootstrap 4, React and Reactstrap.</p>
                            <p>Perfectly combines reusable HTML and modular CSS with a modern <br/>
                                styling and beautiful markup throughout each HTML template in the pack.
                            </p>

                            <div>
                                <Button className='btn'>Explore Dashboard</Button>
                                <Button className='btn2'>Purchase now</Button>
                            </div>
                        </div>
      
                    </Col>
                    <Col col-xs-12 col-sm-12 col-md-3 col-lg-3 >

                        <div className='containerCard2'>
                            <div className='card'>
                                <div className='circle1'>
                                    <FaHandPointer/>
                                </div>
                                <h6>Components</h6>
                                <p>Comes with over 70 handcrafted components.</p>
                            </div>
                            <div className='card2'>
                                <div className='circle2'><FaHandPointer/></div>
                                <h6>Plugins</h6>
                                <p> Fully integrated and extendable
                                    third-party plugins that you will love.
                                </p>
                            </div>
                        </div>

                    </Col>
                    <Col col-xs-12 col-sm-12 col-md-3 col-lg-3 >

                        <div className='containerCard' >
                            <div className='card3'>
                                <div className='circle3'>
                                    <FaHandPointer/>
                                </div>
                            <h6>Pages</h6>
                            <p>
                                From simple to complex, you get a beautiful set of 15+ 
                                page examples.
                            </p>
                            </div>
                            <div className='card'>
                                <div className='circle4'>
                                        <FaHandPointer/>
                                </div>
                                <h6>Documentation</h6>
                                <p>
                                    You will love how easy is to work.
                                </p>
                            </div>
                        </div>

                    </Col>
                </Row>

            </Container>
        </div>
    )
};

export default Dashboard;
    