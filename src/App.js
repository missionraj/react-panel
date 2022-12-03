import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MemberCreate from "./pages/MemberCreate";
import Navbar from "./components/Navbar";
import Dashboard from "./layouts/Dashboard";

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
            <Route path="/" element={<Dashboard />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
