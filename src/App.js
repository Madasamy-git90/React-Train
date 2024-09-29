import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Login from './Components/Login';
import Register from './Components/Register';
import FirstComponent from './Components/FirstComponent';
import './Components/Header.css';


function App() {
  return (
    <Router>
    <div className="App">
      <nav>
          <ul>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Register</Link></li>
            <li><Link to="/firstcomponent">Component</Link></li>
          </ul>
      </nav>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/firstcomponent" element={<FirstComponent />} />
        </Routes>
    </div>
    </Router>
  );
}

export default App;
