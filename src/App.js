import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from "./components/navbar/Navbar.js"
function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Routes>
          <Route
            path="/"
            element={
              <div className="">
                
              </div>}/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
