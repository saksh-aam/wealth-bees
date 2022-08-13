import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/navbar/Navbar";
import OurFirm from "./components/Ourfirm/OurFirm";
import OurCapabilities from "./components/Capabilities/OurCapabilities";
import Footer from "./components/Footer/Footer";
import InvestorsOverview from "./components/Investor/InvestorsOverview";
import Homepage from "./components/homepage/Homepage";
import People from "./components/People/People";
import ContactUs from "./components/ContactUs/ContactUs";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <div className="pt-12  w-fit sm:w-full">
                <Homepage />
              </div>
            }
          />

          <Route
            path="/our-firm/"
            element={
              <div className="w-fit sm:w-full">
                <OurFirm />
              </div>
            }
          />

          <Route
            path="/our-capabilities/"
            element={
              <div className="w-fit sm:w-full">
                <OurCapabilities />
              </div>
            }
          />
          <Route
            path="/investors"
            exact
            element={
              <div className="w-fit sm:w-full">
                <InvestorsOverview />
              </div>
            }
          />
          <Route
            path="/people"
            exact
            element={
              <div className="w-fit sm:w-full">
                <People />
              </div>
            }
          />
          <Route
            path="/contact-us"
            exact
            element={
              <div className="w-fit sm:w-full">
                <ContactUs />
              </div>
            }
          />
        </Routes>
          <Footer/>
      </Router>
    </div>
  );
}

export default App;
