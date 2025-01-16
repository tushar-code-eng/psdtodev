import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Project1 from "./pages/Project1";
import Project2 from "./pages/Project2";
import Home from './pages/Home'


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/project1" element={<Project1 />} />
        <Route path="/project2" element={<Project2 />} />
      </Routes>
    </Router>
  );
}

export default App;
