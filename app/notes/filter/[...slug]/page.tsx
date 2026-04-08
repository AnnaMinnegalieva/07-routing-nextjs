import { getNotes } from "@/lib/api";
import Link from "next/link";

type Props = {
  params: Promise<{ slug: string[] }>;
};

const NotesByCategory = async ({ params }: Props) => {
  const { slug } = await params;
  const category = slug[0] === "all" ? undefined : slug[0];
  const data = await getNotes(category);

  return (
    <div>
      <h2>Notes List</h2>
      <ul>
        {data.notes.map((note) => (
          <li key={note.id}>
            <Link href={`/notes/${note.id}`}>{note.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NotesByCategory;