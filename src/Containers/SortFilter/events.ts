import { FocusEvent } from "react";

export const handleFocus = (e: FocusEvent<HTMLSelectElement>): number =>
  (e.target.size = 6);

export const handleBlur = (e: FocusEvent<HTMLSelectElement>): number =>
  (e.target.size = 1);
