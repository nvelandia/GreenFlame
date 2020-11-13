import 'bootstrap/dist/css/bootstrap.min.css';
import s from './Navbar.module.css';
import { FaHandPointer } from "react-icons/fa";

import { Container, Row, Col, Button, } from 'react-bootstrap';

const Dashboard = () => {
    return (
        <div className={s.skew}>

       
        <Container fluid className={s.dashboard}>
            <Row className={s.fix} >

            
            <Col col-xs-12 col-sm-12 col-md-6 col-lg-6 >
                <div className={s.dash}>

                <h1>Dashboard PRO React</h1>
                <p style={{fontSize:'25px'}}>A beautiful premium dashboard for <br/>
                Bootstrap 4, React and Reactstrap.</p>
                <p>Perfectly combines reusable HTML and modular CSS with a modern <br/>
                styling and beautiful markup throughout each HTML template in the pack.
                </p>

                <div>
                    <Button className={s.btn}>Explore Dashboard</Button>
                    <Button className={s.btn2}>Purchase now</Button>
                </div>
                </div>
                


                
            </Col>
            <Col col-xs-12 col-sm-12 col-md-3 col-lg-3 >
                <div className={s.containerCard2}>
                    <div className={s.card}>
                        <div className={s.circle1}>
                            <FaHandPointer/>
                        </div>
                        <h6 style={{color: '#172B4D'}}>Components</h6>
                        <p style={{color: '#172B4D'}}>Comes with over 70 handcrafted components.</p>

                    </div>
                    <div className={s.card2}>
                    <div className={s.circle2}>
                            <FaHandPointer/>
                        </div>
                    <h6 style={{color: '#172B4D'}}>Plugins</h6>
                        <p style={{color: '#172B4D'}}> Fully integrated and extendable
                        third-party plugins that you will love.</p>
                    </div>
                </div>
            </Col>
            <Col col-xs-12 col-sm-12 col-md-3 col-lg-3 >
            <div className={s.containerCard} >
                    <div className={s.card3}>
                        <div className={s.circle3}>
                            <FaHandPointer/>
                        </div>
                    <h6 style={{color: '#172B4D'}}>Pages</h6>
                    <p style={{color: '#172B4D'}}>
                        From simple to complex, you get a beautiful set of 15+ 
                        page examples.
                    </p>

                    </div>
                    <div className={s.card}>
                    <div className={s.circle4}>
                            <FaHandPointer/>
                        </div>
                    <h6 style={{color: '#172B4D'}}>Documentation</h6>
                    <p style={{color: '#172B4D'}}>
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
    