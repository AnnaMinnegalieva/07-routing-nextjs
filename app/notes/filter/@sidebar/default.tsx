import Link from "next/link";
import css from "./SidebarNotes.module.css";

type Category = {
  id: string;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
};

const getCategories = async (): Promise<Category[]> => {
  const res = await fetch(
    "https://next-v1-notes-api.goit.study/categories",
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_NOTEHUB_TOKEN}`,
      },
    }
  );
  return res.json();
};

const SidebarNotes = async () => {
  const categories = await getCategories();

  return (
    <ul className={css.menuList}>
      <li className={css.menuItem}>
        <Link href="/notes/filter/all" className={css.menuLink}>
          All notes
        </Link>
      </li>
      {categories.map((category) => (
        <li key={category.id} className={css.menuItem}>
          <Link href={`/notes/filter/${category.id}`} className={css.menuLink}>
            {category.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SidebarNotes;