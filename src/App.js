import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import AppNavbar from "./components/App/AppNavbar";
import MovieDetails from "./components/Movie/MovieDetails";
function App() {
  return (
    <div className="App">
      <Router>
        <AppNavbar />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Home />} />
          <Route path="/movieDetails/:movieId" element={<MovieDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
