import 'bootstrap/dist/css/bootstrap.min.css';
import s from './Navbar.module.css';
import { Container } from 'react-bootstrap';

const Complete = () => {
    return (
        
            <Container fluid className={s.complete}>
                    <div className={s.isa}>
                        <h2>A complete React solution</h2>
                        <p>
                        Is a completly new product
                         built on our newest re-built from scratch framework 
                         structure that is meant to make our products more 
                         intuitive, more adaptive and, needless to say, so much 
                         easier to customize. Let amaze you with its cool features 
                         and build tools and get your project to a whole new level.
                        </p>
                    </div>
            </Container>
          

       
    )
};
export default Complete;

