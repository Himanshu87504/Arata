import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./components/HomePage/MainPage";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />

      </Routes>
    </Router>
  );
}

export default App;



// git remote add origin https://github.com/Himanshu87504/Arata.git
// git branch - M main
// git push - u origin main
