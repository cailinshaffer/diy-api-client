import Home from './components/pages/Home';
import NewBlog from './components/pages/NewBlog';
import Navbar from './components/NavBar';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
    <Navbar />
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
         path="/new-blog"
         element={<NewBlog />} 
         />
      </Routes>
    </main>
    </Router>
  );
}

export default App;
