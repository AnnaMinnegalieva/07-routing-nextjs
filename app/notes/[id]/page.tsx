import { getSingleNote } from "@/lib/api";
import css from "./NoteDetails.module.css";

type Props = {
  params: Promise<{ id: string }>;
};

const NoteDetails = async ({ params }: Props) => {
  const { id } = await params;
  const note = await getSingleNote(id);

  return (
    <div className={css.container}>
      <h2 className={css.title}>{note.title}</h2>
      <p className={css.content}>{note.content}</p>
    </div>
  );
};

export default NoteDetails;