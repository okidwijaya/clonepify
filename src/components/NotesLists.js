import React from "react";

export const NotesLists = ({ sectionTitle, desc, deleteNotes, notes }) => {
    return (
        <>
        <div className="w-full mt-[6rem]">
            <h2 className="w-fit text-xl px-4">{sectionTitle}</h2>
            <p className="w-fit px-4">{desc}</p>
            <div className="mt-[2rem] w-full grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-auto max-w-[1024px] gap-2 p-4">
            {notes.map((note) => (
                <div
                className="place-content-between w-full max-w-[350px] shadow-md bg-white p-4 h-fit"
                key={note.id}
                >
                <h5 className="text-uppercase font-bold uppercase">
                    {note.title}
                </h5>
                <p className="p-4 text-left w-full max-w-[200]">{note.content}</p>
                <button
                    className="w-full text-gray-50 bg-red-600 p-4"
                    onClick={() => deleteNotes(note.id)}
                >
                    Delete
                </button>
                </div>
            ))}
            </div>
        </div>
        </>
    );
};
