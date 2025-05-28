// src/components/Input/Input.jsx
import styles from "./Input.module.css";

export default function Input({ id, value, onChange, type = "text", ...rest }) {
  return (
    <input
      id={id}
      type={type}
      value={value}
      onChange={onChange}
      className={styles.input}
      {...rest}
    />
  );
}
