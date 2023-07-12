import "./App.css";
import Header from "./component/layout/Header.js";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
    </Router>
  );
}

export default App;
