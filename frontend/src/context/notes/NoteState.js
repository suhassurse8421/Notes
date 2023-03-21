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
            "_id": "6419a8243c1cc8266644ca07",
            "user": "6406cb42402301422d66dcaa",
            "title": "user note 2",
            "description": "user note desc 2",
            "tag": "user tag 2",
            "date": "2023-03-21T12:50:44.725Z",
            "__v": 0
        }
    ]

    const [notes, setNotes] = useState(initialNotes);

    return (
        <NoteContext.Provider value={{ notes, setNotes }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;