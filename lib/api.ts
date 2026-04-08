import axios from "axios";
import type { Note, NoteTag } from "@/types/note";

export type NoteListResponse = {
  notes: Note[];
  totalPages: number;
};

axios.defaults.baseURL = "https://next-v1-notes-api.goit.study";
axios.defaults.headers.common["Authorization"] =
  `Bearer ${process.env.NEXT_PUBLIC_NOTEHUB_TOKEN}`;

export const fetchNotes = async (
  page: number = 1,
  perPage: number = 12,
  search: string = "",
  tag?: string
): Promise<NoteListResponse> => {
  const res = await axios.get<NoteListResponse>("/notes", {
    params: { page, perPage, search, tag },
  });
  return res.data;
};

export const getSingleNote = async (id: string) => {
  const res = await axios.get<Note>(`/notes/${id}`);
  return res.data;
};

interface CreateNoteData {
  title: string;
  content: string;
  tag: NoteTag;
}

export const createNote = async (newNote: CreateNoteData): Promise<Note> => {
  const res = await axios.post<Note>("/notes", newNote);
  return res.data;
};

export const deleteNote = async (id: string): Promise<Note> => {
  const res = await axios.delete<Note>(`/notes/${id}`);
  return res.data;
};