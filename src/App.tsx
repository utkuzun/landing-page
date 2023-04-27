import './index.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Comments from './components/Comments';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Hero />
      <Features />
      <Comments />
    </div>
  );
}

export default App;
