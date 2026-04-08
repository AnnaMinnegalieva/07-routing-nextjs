"use client";

import Link from "next/link";
import type { Note } from "@/types/note";

type Props = {
  notes: Note[];
};

const NotesClient = ({ notes }: Props) => {
  return (
    <div>
      <h2>Notes List</h2>
      <ul>
        {notes.map((note) => (
          <li key={note.id}>
            <Link href={`/notes/${note.id}`}>{note.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NotesClient;