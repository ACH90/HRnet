// components/DatePicker.jsx
import * as Popover from "@radix-ui/react-popover";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { useState } from "react";
import dayjs from "dayjs";
import styles from "./DatePicker.module.css";

export default function DatePicker({ value, id, onChange }) {
  const [open, setOpen] = useState(false);

  // Convert dayjs to JS Date and vice versa
  const selected = value ? value.toDate() : undefined;

  return (
    <Popover.Root open={open} onOpenChange={setOpen}>
      <Popover.Trigger asChild>
        <button className={styles["date-trigger"]} id={id}>
          {value ? value.format("DD/MM/YYYY") : "Select a date"}
        </button>
      </Popover.Trigger>

      <Popover.Portal>
        <Popover.Content className={styles["date-popover"]} sideOffset={5}>
          <DayPicker
            mode="single"
            selected={selected}
            onSelect={(date) => {
              onChange(date ? dayjs(date) : null);
              setOpen(false);
            }}
          />
          <Popover.Arrow />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}
