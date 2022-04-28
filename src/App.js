import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';
import Location from './components/location/Location';
import Footer from './components/footer/Footer';
import Contact from './components/contact/Contact';
import Sandwiches from './components/sandwiches/Sandwiches';

function App() {
  function appHeight() {
    const doc = document.documentElement;
    doc.style.setProperty('--vh', window.innerHeight * 0.01 + 'px');
  }

  window.addEventListener('resize', appHeight);
  appHeight();

  return (
    <Router basename="/sassys-react">
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/location" element={<Location />}></Route>
        <Route path="/sandwiches" element={<Sandwiches />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
