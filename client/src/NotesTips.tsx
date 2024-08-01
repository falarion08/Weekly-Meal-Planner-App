import { useNavigate } from 'react-router-dom';
import { nanoid } from "nanoid";
import React from "react";

interface Note {
    id: string;
    body: string;
}

export default function NotesTips() {
    const [notes, setNotes] = React.useState<Note[]>([]);

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/');
    };

    function createNewNote() {
        const newNote: Note = {
            id: nanoid(),
            body: ""
        };

        setNotes(prevNotes => [...prevNotes, newNote]);
    }

    function updateNoteBody(id: string, newBody: string) {
        setNotes(prevNotes =>
            prevNotes.map(note =>
                note.id === id ? { ...note, body: newBody } : note
            )
        );
    }

    function deleteNote(id: string) {
        setNotes(prevNotes => prevNotes.filter(note => note.id !== id));
    }

    return (
        <div className="min-h-screen min-w-full bg-gray-100 relative">
            <div className="fixed top-4 right-4">
                <button className="first-note px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600" onClick={handleClick}>
                Home
                </button>
            </div>
            <div className="pt-16">
                {notes.length === 0 ? (
                    <div className="no-notes flex flex-col items-center justify-center h-full">
                        <h1 className="text-2xl mb-4">You have no notes</h1>
                        <button className="first-note px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600" onClick={createNewNote}>
                        Create one now
                        </button>
                    </div>
                ) : (
                    <div className="notes-container p-4">
                        <h1 className="text-2xl mb-4">Your Notes</h1>
                        {notes.map(note => (
                            <div key={note.id} className="note mb-4 p-4 bg-white shadow rounded">
                                <textarea
                                    className="w-full p-2 border rounded"
                                    value={note.body}
                                    placeholder="Note goes here..."
                                    onChange={(e) => updateNoteBody(note.id, e.target.value)}
                                />
                                <button
                                    className="delete-note px-4 py-2 bg-red-500 text-white rounded mt-2 hover:bg-red-600"
                                    onClick={() => deleteNote(note.id)}
                                >
                                Delete
                                </button>
                            </div>
                        ))}
                        <button className="new-note px-4 py-2 bg-blue-500 text-white rounded mt-4 hover:bg-blue-600" onClick={createNewNote}>
                        Create a new note
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
