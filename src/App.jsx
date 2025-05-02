import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Homepage } from "./Homepage";


import { Project } from "./components/Project/Project";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/projects" element={<Project />} />
       
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
