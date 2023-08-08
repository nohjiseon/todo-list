import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./pages/Main";
import Edit from "./pages/Edit";

function App() {
  return (
    // <div className="App">
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/edit" element={<Edit />} />
        {/* <Route path="/mypage" element={<MyPage />}/> */}
      </Routes>
      <Footer />
    </BrowserRouter>
    // </div>
  );
}

export default App;
