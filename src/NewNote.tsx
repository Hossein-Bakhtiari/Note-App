import { NoteData } from "./App";
import { NoteForme } from "./NoteForme";

type NewNoteProps = {
    onSubmit: (data: NoteData) => void
}

export function NewNote({onSubmit}: NewNoteProps){
    return (
        <>
        <h1 className="mb-4">New Note</h1>
        <NoteForme onSubmit={onSubmit}/>
        </>
    )
}