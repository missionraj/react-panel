import "./App.css";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import MemberCreate from "./pages/MemberCreate";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div>
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Routes>
            <Route path="/createmembers" element={<MemberCreate />} />

            <Route path="/members" element={<div> members .... </div>} />

            <Route path="/" element={<div> Home .... </div>} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
