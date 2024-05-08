//@ts-ignore
import Navbar from './components/Navbar';
//@ts-expect-error
import Hero from './components/Hero';
//@ts-expect-error
import Aboutsection from './components/Aboutsection'
//@ts-expect-error
import FAQ from './components/FAQ'
//@ts-expect-error
import Footer from './components/Footer'
//@ts-expect-error
import SearchBar from './components/SearchBar'

export default function App() {
  
  return (
<div className=' px-8 md:px-14 lg:px-36 pb-10 pt-6'>
<Navbar />
<Hero />
<SearchBar />
<Aboutsection />
<FAQ />
<Footer />
</div>
  )
}