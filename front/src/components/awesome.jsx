import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Badge } from 'react-bootstrap';
import { AiFillHtml5 } from "react-icons/ai";
import { RiEmotionHappyFill } from "react-icons/ri";
import { BsGearFill } from "react-icons/bs";
import "../css/index.css";

const Awesome = () => {
    return (
   
        <Container fluid className='awesome'>
            <div className='features'>
                <div className='kit'>
                    <div>
                        <h2>Awesome features</h2>
                        <p>The kit comes with three pre-built pages to help you get started <br/>
                            faster. You can change the text and images and you're good go.
                        </p>
                    </div>
                    <div>   
                        <Badge pill className='badge4'><BsGearFill className='fi'/></Badge>
                            <span className='spa'><b>Carefully crafted components</b></span><br/>
                        <Badge pill className='badge4'><AiFillHtml5 className='fi'/></Badge>
                            <span className='spa'><b>Amazing page examples</b></span><br/>
                        <Badge pill className='badge4'><RiEmotionHappyFill className='fi'/></Badge>
                            <span className='spa'><b>Super friendly support team</b></span><br/>
                    </div>

                </div>
                <div>
                    <img className='img' src="https://i.postimg.cc/hPhG7Jg1/Untitled.png" alt=""/>
                </div>
            </div>
            <div className='example'>
                <div>
                    <img className='img' src="https://i.postimg.cc/hPhG7Jg1/Untitled.png" alt=""/>
                </div>
                <div className='love'>                    
                    <div>
                        <h2>Example pages</h2>
                        <p>If you want to get inspiraton or just show something directly to your
                            clients, you can jump start your development with our pre-built
                            example pages.
                        </p>
                    </div>
                    <div>
                        <h6 style={{color:'#FB684C'}}>Explore pages</h6>
                    </div>
                </div> 
            </div>
            <div className='lovable'>
                <div className='love'>
                    <div>
                        <h2>Lovable widgets and cards</h2>
                        <p>We love cards and everybody on the web seems to. We have gone
                            above and beyond with options for you to organise your
                            information. From cards designed for content, to pricing cards or
                            user profiles, you will have many options to choose from.
                        </p>
                    </div>
                    <div>
                        <h6 style={{color:'#4ED0F1'}}>Explore widgets</h6>
                    </div>
                </div>
                <div>
                    <img className='img' src="https://i.postimg.cc/hPhG7Jg1/Untitled.png" alt=""/>
                </div>
            </div>
        </Container>
     
    )
};
export default Awesome;

