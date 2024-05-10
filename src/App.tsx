
import Cart from './components/Cart';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Services from './pages/Services';
import Home from './pages/Home';

function App() {
  return (
    <div className="px-8 md:px-14 lg:px-36 pb-10 pt-6">
        <BrowserRouter>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;