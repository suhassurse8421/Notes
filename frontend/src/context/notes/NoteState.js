import { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
    const initialNotes = [
        {
            "_id": "640f3763214a1e1373c10e71",
            "user": "6406cb42402301422d66dcaa",
            "title": "note 1 updated",
            "description": "note desc 1 updated",
            "tag": "tag 1 updated",
            "date": "2023-03-13T14:46:59.725Z",
            "__v": 0
        },
        {
            "_id": "6419a8243c1cc8466644ca07",
            "user": "6406cb42402301422d66dcaa",
            "title": "user note 2",
            "description": "user note desc 2",
            "tag": "user tag 2",
            "date": "2023-03-21T12:50:44.725Z",
            "__v": 0
        },
        {
            "_id": "641948243c1cc8266644ca07",
            "user": "6406cb42402301422d66dcaa",
            "title": "user note 2",
            "description": "user note desc 2",
            "tag": "user tag 2",
            "date": "2023-03-21T12:50:44.725Z",
            "__v": 0
        },
        {
            "_id": "6419a8243c4cc8266644ca07",
            "user": "6406cb42402301422d66dcaa",
            "title": "user note 2",
            "description": "user note desc 2",
            "tag": "user tag 2",
            "date": "2023-03-21T12:50:44.725Z",
            "__v": 0
        },
        {
            "_id": "6419a8243c1cc4266644ca07",
            "user": "6406cb42402301422d66dcaa",
            "title": "user note 2",
            "description": "user note desc 2",
            "tag": "user tag 2",
            "date": "2023-03-21T12:50:44.725Z",
            "__v": 0
        }
    ]

    const [notes, setNotes] = useState(initialNotes);

    // Add a Note
    const addNote = (title, description, tag) => {
        // TODO API Call
        console.log("Adding a new note");
        const note = {
            "_id": "6419a8243c4cc8266644c407",
            "user": "6406cb42402301422d66dcaa",
            "title": title,
            "description": description,
            "tag": tag,
            "date": "2023-03-21T12:50:44.725Z",
            "__v": 0
        };
        setNotes(notes.concat(note));
    }

    // Delet a Note
    const deleteNote = () => {

    }

    // Update a Note
    const updateNote = () => {

    }

    return (
        <NoteContext.Provider value={{ notes, addNote, deleteNote, updateNote }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;