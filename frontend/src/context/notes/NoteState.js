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
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQwNmNiNDI0MDIzMDE0MjJkNjZkY2FhIn0sImlhdCI6MTY3OTgwNDEyM30.oS1NeVYiPq00rRZRufDQo20sVbEcm6CEc8D8oNiPg2Y"
            },
            body: JSON.stringify({ title, description, tag }),
        });
        const jsonResponse = response.json();

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

    // Add a Note
    const getNotes = async () => {

        // API Call
        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQwNmNiNDI0MDIzMDE0MjJkNjZkY2FhIn0sImlhdCI6MTY3OTgwNDEyM30.oS1NeVYiPq00rRZRufDQo20sVbEcm6CEc8D8oNiPg2Y"
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
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQwNmNiNDI0MDIzMDE0MjJkNjZkY2FhIn0sImlhdCI6MTY3OTgwNDEyM30.oS1NeVYiPq00rRZRufDQo20sVbEcm6CEc8D8oNiPg2Y"
            }
        });

        const jsonResponse = response.json();
        console.log(jsonResponse);

        console.log("Deleted note with ID:", id);

        const newNotes = notes.filter((note) => {
            return note._id !== id
        });
        setNotes(newNotes);
    }

    // Update a Note
    const updateNote = async (id, title, description, tag) => {

        // API Call
        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQwNmNiNDI0MDIzMDE0MjJkNjZkY2FhIn0sImlhdCI6MTY3OTgwNDEyM30.oS1NeVYiPq00rRZRufDQo20sVbEcm6CEc8D8oNiPg2Y"
            },
            body: JSON.stringify({ title, description, tag }),
        });
        const jsonResponse = response.json();

        // Logic to edit note
        for (let index = 0; index < notes.length; index++) {
            const element = notes[index];
            if (element._id === id) {
                element.title = title;
                element.description = description;
                element.tag = tag;
            }
        }
    }

    return (
        <NoteContext.Provider value={{ notes, addNote, getNotes, deleteNote, updateNote }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;