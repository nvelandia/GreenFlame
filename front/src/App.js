import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import  Header from './components/Navbar.jsx';
import Dashboard from './components/Dashboard.jsx';
import Complete from './components/complete'
import Cards from './components/Cards'
import Awesome from './components/awesome';
import Nucleo from './components/Nucleo'

export default function App() {
  return (
    <div>
   
      <Header/>
      <Dashboard/>
      <Complete/>
      <Cards/>
      <Awesome/>
      <Nucleo/>
       
    </div>
  );
}
