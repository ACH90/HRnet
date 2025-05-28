import * as Select from "@radix-ui/react-select";
// import { CheckIcon, ChevronDownIcon } from "@radix-ui/react-icons";
import styles from "./dropdown.module.css";

export default function Dropdown({ id, value, onChange, options }) {
  return (
    <Select.Root value={value} onValueChange={(val) => onChange(id, val)}>
      <Select.Trigger
        className={styles["select-trigger"]}
        aria-label={id}
        id={id}
      >
        <Select.Value>
          <div className={styles["select-value"]}>{value}</div>
        </Select.Value>
      </Select.Trigger>
      <Select.Portal>
        <Select.Content className={styles["select-content"]}>
          <Select.Viewport>
            {options.map((opt) => (
              <Select.Item
                key={opt}
                value={opt}
                className={styles["select-item"]}
              >
                <Select.ItemText>{opt}</Select.ItemText>
                <Select.ItemIndicator className={styles["select-check"]}>
                  {/* <CheckIcon /> */}
                </Select.ItemIndicator>
              </Select.Item>
            ))}
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
}
