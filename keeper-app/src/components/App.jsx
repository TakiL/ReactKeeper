import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Note from "./Note";
import "./styles.css";

function App() {
  return (
    <div className="body">
      <html className="html">
        <Header />
        <Note />
        <Footer />
      </html>
    </div>
  );
}

export default App;
