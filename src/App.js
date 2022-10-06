import './styles/App.css';
import {Routes, Route} from "react-router-dom"
import NavBar from './components/NavBar';
import Main from './components/Main';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/contact" element={<Contact />} />
    </Routes>
    </div>
  );
}

export default App;
