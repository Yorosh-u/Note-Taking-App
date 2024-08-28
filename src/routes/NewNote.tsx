import { NoteForm } from '../components/NoteForm';

function NewNote() {
  return (
    <div className="m-4 grid gap-4">
      <h1 className="pl-5 pt-5 font-semibold text-2xl">New Note</h1>
      <NoteForm />
    </div>
  );
}

export default NewNote;
