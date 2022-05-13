import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import NavBar from "./components/navbar/Navbar.js";
import OurFirm from "./components/Ourfirm/OurFirm";
import Growth from "./components/Ourfirm/Growth";
import Ideals from "./components/Ourfirm/Ideals";
function App() {
  return (
    <div className="App">
      <Router>
          {/* <NavBar /> */}
        <Routes>
          <Route
            path="/"
            element={
              <div className="">
                <NavBar />
              </div>
            }
          />

          <Route
            path="/ourfirm/*"
            element={
              <div style={{ display: 'flex', flexDirection:"column" }}>
                <NavBar/>
                <div className="pt-0 py-9 px-4 w-fit sm:w-full"></div><OurFirm /><div/>
                </div>
            }
            children={[ Ideals, Growth]}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
