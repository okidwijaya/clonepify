import React from "react";

export const NoteForm = ({
    createNotes,
    title,
    setContent,
    setTitle,
    content,
}) => {
    return (
        <>
        <div className="sticky top-[40px] right-0 grid grid-cols-1 gap-2 h-fit align-top mb-4 w-full max-w-[300px] mx-auto border-slate-400 border">
            <form
            action=""
            method="POST"
            onSubmit={createNotes}
            className="grid grid-cols-1 w-full gap-2 p-4 h-fit"
            >
            <label>Title</label>
            <input
                className="py-2 px-4 border-slate-950 border"
                name="title"
                id="TitleNote"
                value={title}
                type="text"
                placeholder="Title"
                minLength="3"
                onChange={(e) => setTitle(e.target.value)}
                required
            />
            <label>Content</label>
            <textarea
                className="py-2 px-4 border-slate-950 border min-h-[250px]"
                name="content"
                id="Content"
                value={content}
                type="text"
                placeholder="Content"
                onChange={(e) => setContent(e.target.value)}
                required
            />
            <input
                className="mt-4 text-slate-50 bg-black w-full p-2 uppercase"
                value="Submit"
                type="submit"
            ></input>
            </form>
        </div>
        </>
    );
}
