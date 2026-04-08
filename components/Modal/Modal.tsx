"use client";

import { useRouter } from "next/navigation";
import css from "./Modal.module.css";

type Props = {
  children: React.ReactNode;
};

const Modal = ({ children }: Props) => {
  const router = useRouter();

  const close = () => router.back();

  const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      close();
    }
  };

  return (
    <div className={css.backdrop} onClick={handleBackdropClick}>
      <div className={css.modal}>
        {children}
        <button className={css.closeButton} onClick={close}>
          &times;
        </button>
      </div>
    </div>
  );
};

export default Modal;