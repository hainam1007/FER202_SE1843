import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";
import Header from "./components/App/Header";
import Navbar from "./components/App/Navbar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import OurOrchids from "./pages/OurOrchids";
import Detail from "./pages/Detail";
import Footer from "./components/App/Footer";
import "./index.css";
import "./App.css";

const App = () => {
  return (
    <ThemeProvider>
      <div className="flex flex-col min-h-screen width-full">
        <BrowserRouter>
          <Header />
          <Navbar />
          <div className="flex-1">
            <>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Contact" element={<Contact />} />
                <Route path="/Orchids" element={<OurOrchids />} />
                <Route
                  path="/OrchidsSort/:sortParam"
                  element={<OurOrchids />}
                />
                <Route path="/orchids/:id" element={<Detail />} />
              </Routes>
            </>
          </div>
          <Footer />
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
};

export default App;
