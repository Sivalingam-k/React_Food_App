import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'animate.css'
import Sidebar from './components/Login1/SidebarComp';
import ChefLogin from './components/Login1/ChefLogin';
import '@fortawesome/free-solid-svg-icons';
import ChefComponent from './components/dashboarrd/ChefComponent';
import UserComponent from './components/dashboarrd/UserComponent';
function App() {
  return (
    <Router>
    <div className="App">
      <div className="content">
          <Routes>
            
            <Route path="/" element={<Sidebar />} />
            <Route path="/ChefLogin" element={<ChefLogin />} />
            <Route path="/chefDashboard" element={<ChefComponent></ChefComponent>} />
            <Route path="/userDashboard" element={<UserComponent></UserComponent>}/>
          </Routes>
        </div>
      
      
    </div>
    </Router>
   
  );
}

export default App;
