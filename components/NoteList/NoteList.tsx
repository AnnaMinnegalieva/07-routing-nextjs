"use client";

import Link from "next/link";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import type { Note } from "@/types/note";
import { deleteNote } from "@/lib/api";
import css from "./NoteList.module.css";

type NoteListProps = {
  notes: Note[];
};

const NoteList = ({ notes }: NoteListProps) => {
  const queryClient = useQueryClient();

  const deleteMutation = useMutation({
    mutationFn: deleteNote,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["notes"] });
      toast.success("Note deleted successfully!");
    },
    onError: () => {
      toast.error("Failed to delete note!");
    },
  });

  return (
    <ul className={css.list}>
      {notes.map((note) => (
        <li key={note.id} className={css.item}>
          <h2 className={css.title}>{note.title}</h2>
          <p className={css.tag}>{note.tag}</p>
          <p className={css.content}>{note.content}</p>
          <div className={css.actions}>
            <Link href={`/notes/${note.id}`} className={css.link}>
              View details
            </Link>
            <button
              className={css.button}
              onClick={() => deleteMutation.mutate(note.id)}
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default NoteList;