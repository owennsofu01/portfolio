import { BrowserRouter } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Home } from "./components/Home/Home";
import { About } from "./components/About/About";
import { Service } from "./components/Service/Service";
import { Project } from "./components/Project/Project";
import { Contact } from "./components/Contact/Contact";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Home />
      <About />

      <Service />
      <Project />

      <Contact />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
