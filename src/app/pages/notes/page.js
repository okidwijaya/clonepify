'use client';
import { NoteForm } from '@/components/NoteForm';
import { NotesLists } from '@/components/NotesLists';
import api from '@/api';
import React, { useState, useEffect} from 'react'

function page() {
    const [notes, setNotes] = useState([]);
    const [content, setContent] = useState("");
    const [title, setTitle] = useState("");

    useEffect(() => {
        getNotes();
    },[])

    const getNotes = () =>{
        api
            .get('/api/notes/')
            .then((res)=> res.data)
            .then((data)=> {
                setNotes(data)
                console.log(data)
            })
            .catch((err)=> console.log(err))
    }

    const deleteNotes = (id) =>{
        api.delete(`/api/notes/delete/${id}/`)
        .then((res)=>{
            if(res.status === 200)console.log('Notes Delete Success');
            else console.log('Notes Delete unsuccessful');
            getNotes();
        })
        .catch((err)=> console.log(err));
    }

    const createNotes = (e) =>{
        e.preventDefault();
        api
        .post("/api/notes/", { content, title })
        .then((res)=>{
            if(res.status === 200)console.log('Notes Added Success');
            else console.log('Notes Added unsuccessful');
            getNotes();
        })
        .catch((err)=> console.log(err));
    }
    return (
        <div className='grid sm:grid-cols-1 md:grid-cols-[1fr_0.5fr] items-center relative'>
            <NotesLists
                sectionTitle="Newest Notes" 
                desc="Show all notes from lastes notes that been created"
                notes={notes} 
                delete={deleteNotes} 
            />
            <NoteForm 
                title={title} 
                setTitle={setTitle} 
                content={content} 
                setContent={setContent} 
                createNotes={createNotes} 
            />
        </div>
    )
}

export default page;