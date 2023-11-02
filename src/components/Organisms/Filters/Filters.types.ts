import { Priority } from "../../../constants/types";

export type FiltersProps = {
  priority?: Priority | undefined;
  onChange: (priority: Priority) => void;
};
