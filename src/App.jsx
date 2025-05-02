// src/App.js
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Homepage } from "./Homepage";
import { Project } from "./components/Project/Project";
import Blog from "./components/Blog/Blog";
import { ThemeProvider } from './ThemeContext'; // Import ThemeProvider

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
