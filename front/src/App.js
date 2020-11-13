import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import  Header from './components/Navbar.jsx';
import Dashboard from './components/Dashboard.jsx';
import Complete from './components/complete'
import Cards from './components/Cards'

export default function App() {
  return (
    <div>
   
      <Header/>
      <Dashboard/>
      <Complete/>
      <Cards/>
       
    </div>
  );
}
