import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./components/HomePage/MainPage";
import Navbar from "./components/HomePage/Navbar";
import Footer from "./components/HomePage/Footer";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;




// git remote add origin https://github.com/Himanshu87504/Arata.git
// git branch - M main
// git push - u origin main
