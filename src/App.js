import logo from './logo.svg';
import './App.css';
import { Nav } from './components/nav/Nav';
import { Hero } from './components/hero/Hero';
import { About } from './components/about/About';
import { Shop } from './components/shop/Shop';
import { Comments } from './components/comments/Comments';
import { Footer } from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <About />
      <Shop />
      <Comments />
      <Footer />
    </div>
  );
}

export default App;
