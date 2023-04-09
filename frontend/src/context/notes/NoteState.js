import { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
    const host = "http://localhost:5000";
    const initialNotes = [];

    const [notes, setNotes] = useState(initialNotes);

    // Add a Note
    const addNote = async (title, description, tag) => {

        // API Call
        const response = await fetch(`${host}/api/notes/addnote`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem('token')
            },
            body: JSON.stringify({ title, description, tag }),
        });
        const jsonResponse = response.json();
        setNotes(notes.concat(jsonResponse));
    }

    // Add a Note
    const getNotes = async () => {

        // API Call
        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem('token')
            },
        });
        const jsonResponse = await response.json();
        setNotes(jsonResponse);
    }

    // Delete a Note
    const deleteNote = async (id) => {

        // API Call 
        const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem('token')
            }
        });
        // eslint-disable-next-line
        const jsonResponse = response.json();

        const newNotes = notes.filter((note) => {
            return note._id !== id
        });
        setNotes(newNotes);
    }

    // Update a Note
    const editNote = async (id, title, description, tag) => {

        // API Call
        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem('token')
            },
            body: JSON.stringify({ title, description, tag }),
        });
        // eslint-disable-next-line
        const jsonResponse = await response.json();

        let newNotes = JSON.parse(JSON.stringify(notes));
        // Logic to edit note
        for (let index = 0; index < newNotes.length; index++) {
            const element = newNotes[index];
            if (element._id === id) {
                newNotes[index].title = title;
                newNotes[index].description = description;
                newNotes[index].tag = tag;
                break;
            }
        }
        setNotes(newNotes);
    }

    return (
        <NoteContext.Provider value={{ notes, addNote, getNotes, deleteNote, editNote }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;