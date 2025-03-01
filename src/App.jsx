import { BrowserRouter } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Home } from "./components/Home/Home";
import { About } from "./components/About/About";
import { Service } from "./components/Service/Service";
import { Project } from "./components/Project/Project";
import { Contact } from "./components/Contact/Contact";
import { Footer } from "./components/Footer/Footer";
import { Skill } from "./components/Skill/Skill";
import { Work } from "./components/Work/Work";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Home />
      <About />
      <Skill />
      <Service />
      <Project />
      <Work />
      <Contact />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
