//import "../src/dist/styles.css";
//import Abd from "./Pages/abd/Abd";
//import Home from "./Pages/home/Home";
import {
  Navbar,
} from "./components/index.js";

//import Navbar from "./components/navbar/Navbar";
import { Route, Routes } from "react-router-dom";
//import Models from "./Pages/models/Models";
//import TestimonialsPage from "./Pages/testimonialspage/TestimonialsPage";
//import Team from "./Pages/team/Team";
//import Contact from "./Pages/contact/Contact";

import {
  Abd,
  Home,
  Models,
  TestimonialsPage,
  Team,
  Contact,
} from "./Pages/index.js";


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="about" element={<Abd />} />
        <Route path="models" element={<Models />} />
        <Route path="testimonials" element={<TestimonialsPage />} />
        <Route path="team" element={<Team />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
