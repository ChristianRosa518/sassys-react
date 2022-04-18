import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';
import Location from './components/location/Location';
import Footer from './components/footer/Footer';

function App() {
  return (
    <Router>
      <div>
        <div>
          <Navbar />
        </div>
        <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="/location" element={<Location />}></Route>
        </Routes>
        <div>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
