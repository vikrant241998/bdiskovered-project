import './App.css';
import Footer from './Components/Footer/Footer';
import Dashboard from './Components/Dashboard/Dashboard';
import Navbar from './Components/Header/Navbar';
import SideMenuBar from './Components/SideMenuBar/SideMenuBar';

function App() {
  return (
    <div>
      <Navbar />
      <Dashboard />
      <SideMenuBar/>
      <Footer/>
    </div>
  );
}

export default App;
