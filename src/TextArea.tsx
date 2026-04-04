import { label } from "./labels";
import { useGlobal } from "./useGlobal";
import type { ChangeEventHandler } from "react";
import TextareaAutosize from "@mui/material/TextareaAutosize";

export default function TextArea({
  value,
  onChange,
}: {
  value: string;
  onChange: ChangeEventHandler<HTMLTextAreaElement, HTMLTextAreaElement>;
}) {
  const { orthography } = useGlobal();
  return (
    <TextareaAutosize
      minRows={3}
      maxRows={10}
      value={value}
      onChange={onChange}
      aria-label="empty textarea"
      placeholder={label(orthography, "E hookomo i ka olelo i loko nei")}
      className="w-full h-full bg-(--bg-secondary) rounded-lg p-4"
      style={{ margin: 0 }}
    />
  );
}
