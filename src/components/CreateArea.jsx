import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";
import { SingleBed } from "@material-ui/icons";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const [sizing, setSize] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function submitNote(event) {
    if (note.title !== "" || note.content !== "") {
      props.onAdd(note);
      setNote({
        title: "",
        content: "",
      });
      setSize(false);
    }
    event.preventDefault();
  }

  function handlingSize() {
    setSize(true);
  }

  return (
    <div>
      <form className="create-note">
        {sizing && (
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
          />
        )}

        <textarea
          name="content"
          onChange={handleChange}
          onClick={handlingSize}
          value={note.content}
          placeholder="Take a note..."
          rows={sizing ? 3 : 1}
        />
        <Zoom in={sizing}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
