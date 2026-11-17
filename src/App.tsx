
import { HelmetProvider } from "react-helmet-async";
import { MotionConfig } from "framer-motion";
import { HomeWrapper } from "./HomeWrapper";

function App() {
  return (
    <HelmetProvider>
      <MotionConfig reducedMotion="user">
        <HomeWrapper />
      </MotionConfig>
    </HelmetProvider>
  );
}

export default App;
