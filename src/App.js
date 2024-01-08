import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Updated import statement

import Home from "./components/pages/Home";
import Collection from "./features/collection/Collection";
import Wishlist from "./features/wishlist/Wishlist";
import SearchPage from "./components/search/SearchPage";
import Discography from "./components/discography/Discography";
import Header from "./components/header/header";
import Footer from "./components/footer/Footer";
function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/discography/:id" element={<Discography />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
