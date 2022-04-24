import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';
import Location from './components/location/Location';
import Footer from './components/footer/Footer';
import Sandwiches from './components/sandwiches/Sandwiches';

function App() {
  return (
    <Router basename="/sassys-react">
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />}></Route>
        <Route path="/location" element={<Location />}></Route>
        <Route path="/sandwiches" element={<Sandwiches />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
