import 'bootstrap/dist/css/bootstrap.min.css';
import s from './Navbar.module.css';
import d from './logos.module.css';
import { Container, Row, Col, Button, Navbar, Nav } from 'react-bootstrap';

import { FaRegCalendarAlt, FaBriefcase, FaBell, FaCreditCard } from "react-icons/fa";
import { RiCamera3Fill, RiBarChartFill, RiReactjsFill, RiShoppingBag3Fill,
            RiVipDiamondFill,RiPlayFill} from "react-icons/ri";
import { BiBuildings } from "react-icons/bi";
import { GiCube } from "react-icons/gi";
import { AiFillPicture } from "react-icons/ai";



const Nucleo = () => {
    return (
        
            <Container fluid className={s.nucleo}>
                    <div className={s.icons}>
                        <h2>Nucleo Icons</h2> 
                        <p className={s.textico}>The official package contains over 21.000 icons 
                            which are looking great in <br/> combination 
                            with our Design System. Make sure you check all 
                            of them and use <br/> those that you like the 
                            most.
                        </p>
                        <div>
                            <Button className={d.bt}>View demo icons</Button>
                            <Button className={d.bt2}>View all icons</Button>
                        </div>
                    </div>
                    <div className={d.log}>
                        <div className={d.one}><div className={d.cir}><FaRegCalendarAlt/></div></div>
                        <div className={d.two}>
                            <div className={d.cir}><RiBarChartFill/></div>
                            <div className={d.cir}><RiCamera3Fill/></div>
                        </div>
                        <div className={d.three}><div className={d.cir}><FaBriefcase/></div></div>
                        <div className={d.four}>
                            <div className={d.cir}><RiPlayFill/></div>
                            <div className={d.cir}><BiBuildings/></div>
                        </div>
                        <div className={d.five}><div className={d.cir} style={{color:'#FB6340'}}><RiVipDiamondFill/></div></div>
                        <div className={d.six}>
                            <div className={d.cir}><RiReactjsFill/></div>
                            <div className={d.cir}><GiCube/></div>
                        </div>
                        <div className={d.seven}><div className={d.cir}><AiFillPicture/></div></div>
                        <div className={d.eigth}>
                            <div className={d.cir}><FaCreditCard/></div>
                            <div className={d.cir}><FaBell/></div></div>
                        <div className={d.nine}><div className={d.cir}><RiShoppingBag3Fill/></div></div>
                    </div>
            </Container>
          

       
    )
};
export default Nucleo;
