import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Astrologers from "./components/Astrologers";
import Services from "./components/Services";
import Blogs from "./components/Blogs";
import FilteredData from "./components/FilteredData";

function App() {

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/astrologers" element={<Astrologers />}/>
        <Route path="/services" element={<Services /> }/>
        <Route path="/blogs" element={<Blogs />}/>
        <Route path="/filter-data" element={<FilteredData />}/>
      </Routes>
    </div>
  )
}

export default App
