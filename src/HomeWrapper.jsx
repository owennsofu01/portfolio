import  { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";

import { Home } from "./components/Home/Home"; // Keep only one import for Home
import { LoadingSkeleton } from "./components/Home/LoadingSkeleton";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { Service } from "./components/Service/Service";
import { Project } from "./components/Project/Project";
import Blog from "./components/Blog/Blog";

import Client from "./components/Client/Client";
import Skill from "./components/Skills/Skill";

export const HomeWrapper = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <LoadingSkeleton />;

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {/* Homepage showing all main sections */}
        <Route
          path="/"
          element={
            <>
              <Home />
              <About />
              <Service />
              <Project />
              <Skill/>
              <Client />
              <Contact />
              <Blog />
            </>
          }
        />
       
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
