import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  const addNote = (title, noteText) => {
    const newNote = { titleNote: title, textNote: noteText };
    setNotes([...notes, newNote]);
  };

  function deleteItem(id) {
    setNotes((notes) => {
      return notes.filter((note, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea addNote={addNote} />
      {notes.map((note, index) => (
        <Note
          key={index}
          id={index}
          title={note.titleNote}
          content={note.textNote}
          onCheck={deleteItem}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
