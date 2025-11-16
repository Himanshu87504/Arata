import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./components/HomePage/MainPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Product from "./components/Product/Product";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/product" element={<Product />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;




// git remote add origin https://github.com/Himanshu87504/Arata.git
// git branch - M main
// git push - u origin main
