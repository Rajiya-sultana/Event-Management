import "./App.css";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WeddingCategory from "./Pages/HomeCategory";

import LoginSignUp from "./Pages/LoginSignUp";
import PlanYourEvent from "./Pages/PlanYourEvent";
import Home from "./Pages/Home";
import Footer from "./Components/Footer";
import About from "./Pages/About";
import Contact from "./Pages/Contact";


function App() {
  return (
    <div className="bg-gray-200">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/wedding"
            element={<WeddingCategory category="wedding" />}
          />

          <Route
            path="/parties"
            element={<WeddingCategory category="parties" />}
          />
          <Route
            path="/meetups"
            element={<WeddingCategory category="meetups" />}
          />
          <Route
            path="/seminars"
            element={<WeddingCategory category="seminars" />}
          />
          <Route path="/aboutus" element={<About />} />
          <Route path="/contactus" element={<Contact />} />

          <Route path="/planyourevent" element={<PlanYourEvent />} />
          <Route path="/login" element={<LoginSignUp />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
