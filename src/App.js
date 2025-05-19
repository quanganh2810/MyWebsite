import profileImage from './images/ProfileImage.png';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Hanoi from './Hanoi/View/Hanoi';
import Experience from './Experience/View/Experience';
import Story from './Story/View/Story';
import Projects from './Project/View/Project';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hi! I'm Nguyen Quang Anh</h1>
        <p>Welcome to my personal website! You can learn about me here or get recommendations on where to eat in Hanoi, Vietnam!</p>
      </header>

      <section>
        <div className="intro-container">
          <div className="intro-text">
            <h2>Introduction</h2>
            <p>
              Hi, I am Quang Anh! I am a Computer Engineering graduate from NUS with a passion for developing applications.
              This is my personal website, where I share my experiences and some travel hints when you are going to Hanoi, Vietnam!
            </p>
            <a href="https://github.com/quanganh2810" target="_blank" rel="noopener noreferrer">GitHub</a> <span>|</span>
            <a href="https://www.linkedin.com/in/nguyen-quang-anh-484786276/" target="_blank" rel="noopener noreferrer">LinkedIn</a> <span>|</span>
            <a href="mailto:anhquang1028@gmail.com">Email</a> <span>|</span>
            <a href="tel:+6582215567">Phone</a>
          </div>
          <div className="intro-image">
            <img src={profileImage} alt="Quang Anh" />
          </div>
        </div>
      </section>

      <div>Click on one of the tabs to find out more about me!</div>
      <nav className="nav-container">
        <div className='nav-box'>
        <Link to="/experience">My Experience</Link>
        </div>
        <div className='nav-box'>
        <Link to="/story">My Story</Link>
        </div>
        <div className='nav-box'>
        <Link to="/projects">Projects</Link>
        </div>
        <div className='nav-box'>
        <Link to="/hanoi">Hanoi's Food Recommendations</Link>
        </div>
      </nav>

      {/* This will switch the page content */}
      <Routes>
        <Route path="/experience" element={<Experience />} />
        <Route path="/story" element={<Story />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/hanoi" element={<Hanoi />} />
      </Routes>

      <footer>
        <p>&copy; 2025 Nguyen Quang Anh</p>
      </footer>
    </div>
  );
}

export default App;
