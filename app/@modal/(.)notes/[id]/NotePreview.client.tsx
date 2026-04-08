"use client";

import css from "./NotePreview.module.css";

type Props = {
  title: string;
  content: string;
};

const NotePreviewClient = ({ title, content }: Props) => {
  return (
    <div className={css.container}>
      <h2 className={css.title}>{title}</h2>
      <p className={css.content}>{content}</p>
    </div>
  );
};

export default NotePreviewClient;