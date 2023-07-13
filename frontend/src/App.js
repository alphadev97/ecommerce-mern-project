import "./App.scss";
import Header2 from "./component/layout/Header/Header.js";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header2 />
    </Router>
  );
}

export default App;
