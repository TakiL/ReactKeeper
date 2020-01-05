import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Note from "./Note";
import notes from "./notes";
import "./styles.css";

function App() {
  return (
    <div>
      <Header />
      <div>
        {notes.map(noteItems => (
          <Note
            key={noteItems.key}
            title={noteItems.title}
            content={noteItems.content}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;
