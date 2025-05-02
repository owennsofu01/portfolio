import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { Service } from "./components/Service/Service";
import { Home } from "./components/Home/Home";

export const Homepage = () => (
  <>
    <Home />
    <About />
    <Service />
    <Contact />
  </>
);
