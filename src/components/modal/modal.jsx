// components/Modal.jsx
import styles from "./Modal.module.css";

export default function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div
      className={styles.overlay}
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div
        className={styles.content}
        onClick={(e) => e.stopPropagation()}
        tabIndex={-1}
      >
        {children}
        <button className={styles.closeButton} onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}
