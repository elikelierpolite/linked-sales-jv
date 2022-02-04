import { Router } from "@reach/router"
import Home from "./components/Home";
import TermsAndConditions from "./components/Terms";
import Policy from "./components/Policy";


function App() {
  return (
      <Router>
        <Home path="/" />
        <TermsAndConditions path="/terms" />
        <Policy path="/privacy-policy" />
      </Router>
  );
}

export default App;
