import './App.scss';

import {
  BrowserRouter as Router,
  Routes, 
  Route
} from "react-router-dom";

import Menu from './Menu/Menu';
import Hero from './Hero/Hero';
import HomePage from './HomePage/HomePage';
import Footer from './Footer/Footer';
import About from './AboutPage/AboutPage';
import Login from './LoginPage/LoginPage';
import MyComponent from './Component/MyComponent';

function App() {
  return (
    <Router>
      <Menu />
      <Hero />
      <div className="container" role="main">
        <Routes> 
          <Route path="/about" element={<About />} /> 
          <Route path="/login" element={<Login />} /> 
          <Route path="/" element={<HomePage />} /> 
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
