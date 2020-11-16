import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/index.css";
import { FaShoppingBasket } from "react-icons/fa";
import { Container, Button } from 'react-bootstrap';
import { IoLogoNodejs } from "react-icons/io";
import { BsFillBootstrapFill } from "react-icons/bs";
import { FaReact, FaAngular } from "react-icons/fa";
import { RiVuejsFill } from "react-icons/ri";
import { GiCutDiamond } from "react-icons/gi";
import { DiPhotoshop } from "react-icons/di";
import { SiAdobeacrobatreader } from "react-icons/si";

const Cause = () => {
    return (
        
        <Container fluid className='cause'>
                <div className='be'>
                    <h2 className='esco'>Do you love this awesome</h2>
                    <h2 style={{color:'#34CE8A'}}>Dashboard for Bootstrap 4, React and <br/> 
                        Reactstrap?
                    </h2>
                    <p>Cause if you do, it can be yours now. Hit the button below to navigate to get the <br/> 
                        free version or purchase a license for your next project. Build a new web 
                        app or give an old Bootstrap project a new look!
                    </p>
                </div>
                <div>
                    <Button className='btn'>Get FREE version</Button>
                    <Button className='btn2'><FaShoppingBasket/> Purchase now</Button>
                </div>
                <div>
                    <h2>Available on these technologies</h2>
                </div>
                <div className='tecno'>
                    <div className='circ' style={{color: '#5B4283'}}><BsFillBootstrapFill/></div>
                    <div className='circ' style={{color: '#62DAFC'}}><FaReact/></div>
                    <div className='circ' style={{color: '#ACDD6D'}}><IoLogoNodejs/></div>
                    <div className='circ' style={{color: '#FB806F'}}><SiAdobeacrobatreader/></div>
                    <div className='circ' style={{color: '#42B884'}}><RiVuejsFill/></div>
                    <div className='circ' style={{color: '#C30E2D'}}><FaAngular/></div>
                    <div className='circ' style={{color: '#F8A83A'}}><GiCutDiamond/></div>
                    <div className='circ' style={{color: '#BBBFD5'}}><DiPhotoshop/></div>
                </div>

        </Container>
 
    )
};
export default Cause;

