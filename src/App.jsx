// App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from "./component/navigation/nav";
import Footer from "./component/footer/footer";
import Home from "./component/home/home";
import ServicesPage from "./component/allservices/allservices";
import BlogPage from './component/blog/blog';
import FloatingButtons from './component/floatingButtons/FloatingButtons';
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/blog" element={<BlogPage/>} />
      </Routes>
      <Footer />
      <FloatingButtons />
    </div>
  );
}

export default App;