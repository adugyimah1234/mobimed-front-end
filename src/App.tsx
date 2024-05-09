import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Aboutsection from './components/Aboutsection';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import SearchBar from './components/SearchBar';
import Cart from './components/Cart';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { UserProvider } from './components/UserContext';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  return (
    <div className="px-8 md:px-14 lg:px-36 pb-10 pt-6">
      <UserProvider>
        <BrowserRouter>
          <Navbar />
          <Hero />
          <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/search" element={<SearchBar />} />
          <Route path="/cart" element={<Cart />} />
          </Routes>
          <Aboutsection />
          <FAQ />
          <Footer />
        </BrowserRouter>
      </UserProvider>
    </div>
  );
}

export default App;