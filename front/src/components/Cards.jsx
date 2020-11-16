import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Badge } from 'react-bootstrap';
import { IoIosPlanet } from "react-icons/io";
import { GiCastle } from "react-icons/gi";
import { GoCheck } from "react-icons/go";
import "../css/index.css";

const Cards = () => {
    return (
       
        <Container fluid className='cards'>
                <div className='tarjetas'>
                            <div className='box1'>
                                <div className='circle2'>
                                    <GoCheck style={{fontSize: 20}} />
                                </div>
                                <h6 style={{color:'#31D5F3'}}>BASED ON REACT AND REACTSTRAP</h6>
                                <p>Built on top of the most popular open source 
                                    toolkit for developing with HTML, CSS, and JS.</p>
                                <div className='sas'>
                                    <Badge pill className='badge3'>REACT</Badge>
                                    <Badge pill className='badge3'>REACTSTRAP</Badge>
                                    <Badge pill className='badge3'>DASHBOARD</Badge>
                                    <Badge pill className='badge3'>TEMPLATE</Badge>
                                </div>
                            </div>
                            <div className='box1'>
                                <div className='circle3'>
                                    <GiCastle style={{fontSize: 25}}/>
                                </div>
                                <h6 style={{color:'#39CF9C'}}>INTEGRATED BUILD TOOLS</h6>
                                <p>Included npm scripts to compile source code, scss and more
                                        with just a few simple commands.
                                </p>
                                <div className='sas'>
                                    <Badge pill className='badge2'>NPM</Badge>
                                    <Badge pill className='badge2'>BUILD TOOLS</Badge>
                                </div>
                            </div>
                            <div className='box1'>
                                <div className='circle4' >
                                    <IoIosPlanet style={{fontSize: 30}}/>
                                </div>
                                <h6 style={{color:'#FB6846'}}>FULL SASS SUPPORT</h6>
                                <p>Makes customization easier than ever before. <br/>
                                    You get all the tools to make your website building process a breeze.
                                </p>
                                <div className='sas'>
                                    <Badge pill className='badge1'>SASS</Badge>
                                    <Badge pill className='badge1'>DESIGN</Badge>
                                    <Badge pill className='badge1'>CUSTOMIZE</Badge>
                                </div>
                            </div>
                </div>
        </Container>
     
    )
};
export default Cards;

