import './App.css';
import {NavBar} from "./components/NavBar";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Hobbies from "./components/Hobbies";
import Home from "./components/Home";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route index element={<Home />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/hobbies" element={<Hobbies />} />
                <Route path="/contact" element={<Contact/>} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
