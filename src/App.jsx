import "../styles.css";
import { useState, useEffect } from "react";

import context from "./context";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./views/Home";
import Favoritos from "./views/Favoritos";

const App = () => {
  const [photos, setPhotos] = useState([]);
  const sharePhotos = { photos, setPhotos };

  const endpoint = "/fotos.json";

  const getPhotos = async () => {
    const url = endpoint;
    const response = await fetch(url);
    const data = await response.json();
    setPhotos(data.photos);
  };

  useEffect(() => {
    getPhotos();
  }, []);

  console.log(photos);

  return (
    <div className="App">
      <context.Provider value={sharePhotos} >
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favoritos" element={<Favoritos />} />
        </Routes>
      </BrowserRouter>
      </context.Provider >
    </div>
  );
};

export default App;
