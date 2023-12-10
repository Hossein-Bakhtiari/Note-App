import { NoteData, Tag } from "./App";
import { NoteForme } from "./NoteForme";

type NewNoteProps = {
    onSubmit: (data: NoteData) => void
    onAddTag: (tag: Tag) => void
    availableTags: Tag[]
}

export function NewNote({onSubmit , onAddTag ,availableTags}: NewNoteProps){
    return (
        <>
        <h1 className="mb-4">New Note</h1>
        <NoteForme onSubmit={onSubmit} onAddTag={onAddTag} availableTags={availableTags}/>
        </>
    )
}