import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/index.css"
import { Container, Button } from 'react-bootstrap';
import { FaRegCalendarAlt, FaBriefcase, FaBell, FaCreditCard } from "react-icons/fa";
import { RiCamera3Fill, RiBarChartFill, RiReactjsFill, RiShoppingBag3Fill,
            RiVipDiamondFill,RiPlayFill} from "react-icons/ri";
import { BiBuildings } from "react-icons/bi";
import { GiCube } from "react-icons/gi";
import { AiFillPicture } from "react-icons/ai";



const Nucleo = () => {
    return (
        
        <Container fluid className='nucleo'>

                <div className='icons'>
                    <h2>Nucleo Icons</h2> 
                    <p className='textico'>The official package contains over 21.000 icons 
                        which are looking great in <br/> combination 
                        with our Design System. Make sure you check all 
                        of them and use <br/> those that you like the 
                        most.
                    </p>
                    <div>
                        <Button className='bt'>View demo icons</Button>
                        <Button className='bt2'>View all icons</Button>
                    </div>
                </div>
                <div className='log'>
                    <div className='one'><div className='cir'><FaRegCalendarAlt/></div></div>
                    <div className='two'>
                        <div className='cir'><RiBarChartFill/></div>
                        <div className='cir'><RiCamera3Fill/></div>
                    </div>
                    <div className='three'><div className='cir'><FaBriefcase/></div></div>
                    <div className='four'>
                        <div className='cir'><RiPlayFill/></div>
                        <div className='cir'><BiBuildings/></div>
                    </div>
                    <div className='five'><div className='cir' style={{color:'#FB6340'}}><RiVipDiamondFill/></div></div>
                    <div className='six'>
                        <div className='cir'><RiReactjsFill/></div>
                        <div className='cir'><GiCube/></div>
                    </div>
                    <div className='seven'><div className='cir'><AiFillPicture/></div></div>
                    <div className='eigth'>
                        <div className='cir'><FaCreditCard/></div>
                        <div className='cir'><FaBell/></div></div>
                    <div className='nine'><div className='cir'><RiShoppingBag3Fill/></div></div>
                </div>
                
        </Container>
                 
    )
};
export default Nucleo;
