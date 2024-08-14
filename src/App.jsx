import { Route,BrowserRouter as Router,Routes } from "react-router-dom";

import {Home , About ,Projects, Contact , Skills} from './pages';
import Navbar from "./Components/Navbar";

const App = () => {
  return (
    <main className="bg-slate-300/20">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/projects" element={<Projects />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/skills" element={<Skills />}/>
        </Routes>
      </Router>
    </main>
  )
}

export default App
