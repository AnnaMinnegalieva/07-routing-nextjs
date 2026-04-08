"use client";

import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import { getSingleNote } from "@/lib/api";
import Modal from "@/components/Modal/Modal";

const NotePreviewClient = () => {
  const { id } = useParams<{ id: string }>();

  const {
    data: note,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["note", id],
    queryFn: () => getSingleNote(id),
    refetchOnMount: false,
  });

  if (isLoading) return <p>Loading...</p>;

  if (error || !note) return <p>Something went wrong...</p>;

  const formattedDate = note.updatedAt
    ? `Updated at: ${note.updatedAt}`
    : `Created at: ${note.createdAt}`;

  return (
    <Modal>
      <h2>{note.title}</h2>
      <p>{note.content}</p>
      <p>{note.tag}</p>
      <p>{formattedDate}</p>
    </Modal>
  );
};

export default NotePreviewClient;