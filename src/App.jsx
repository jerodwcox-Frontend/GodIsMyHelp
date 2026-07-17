import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Outreach from './components/Outreach';
import Newsletter from './components/Newsletter';
import Give from './components/Give';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Outreach />
        <Newsletter />
        <Give />
      </main>
      <Footer />
    </>
  );
}

export default App;
