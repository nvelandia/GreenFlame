import 'bootstrap/dist/css/bootstrap.min.css';
import s from './Navbar.module.css';
import { Container, Row, Col, Button, Navbar, Badge } from 'react-bootstrap';
import { IoIosPlanet } from "react-icons/io";
import { GiCastle } from "react-icons/gi";
import { GoCheck } from "react-icons/go";



const Cards = () => {
    return (
       
            <Container fluid className={s.cards}>
                    <div className={s.tarjetas}>
                                <div className={s.box1}>
                                    <div className={s.circle2}>
                                    <GoCheck style={{fontSize: 20}} />
                                    </div>
                                    <h6 style={{color:'#31D5F3'}}>BASED ON REACT AND REACTSTRAP</h6>
                                    <p>Built on top of the most popular open source 
                                        toolkit for developing with HTML, CSS, and JS.</p>
                                        <div className={s.sas}>
                                    <Badge pill className={s.badge3}>REACT</Badge>
                                    <Badge pill className={s.badge3}>REACTSTRAP</Badge>
                                    <Badge pill className={s.badge3}>DASHBOARD</Badge>
                                    <Badge pill className={s.badge3}>TEMPLATE</Badge>
                                    </div>
                                </div>
                                <div className={s.box1}>
                                <div className={s.circle3}>
                                    <GiCastle style={{fontSize: 25}}/>
                                    </div>
                                    <h6 style={{color:'#39CF9C'}}>INTEGRATED BUILD TOOLS</h6>
                                    <p>Included npm scripts to compile source code, scss and more
                                        with just a few simple commands.
                                    </p>
                                    <div className={s.sas}>
                                    <Badge pill className={s.badge2}>NPM</Badge>
                                    <Badge pill className={s.badge2}>BUILD TOOLS</Badge>
                                    </div>
                                </div>
                                <div className={s.box1}>
                                <div className={s.circle4} >
                                    <IoIosPlanet style={{fontSize: 30}}/>
                                    </div>
                                    <h6 style={{color:'#FB6846'}}>FULL SASS SUPPORT</h6>
                                    <p>Makes customization easier than ever before. <br/>
                                    You get all the tools to make your website building process a breeze.
                                    </p>
                                    <div className={s.sas}>
                                    <Badge pill className={s.badge}>SASS</Badge>
                                    <Badge pill className={s.badge}>DESIGN</Badge>
                                    <Badge pill className={s.badge}>CUSTOMIZE</Badge>
                                    </div>
                                </div>
                    </div>
            </Container>
     
    )
};
export default Cards;

