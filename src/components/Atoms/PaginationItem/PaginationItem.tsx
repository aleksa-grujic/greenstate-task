import { FC } from "react";
import { PaginationItemProps } from "./PaginationItem.types";
import styles from "./PaginationItem.module.css";

const PaginationItem: FC<PaginationItemProps> = ({
  active,
  onClick,
  number,
}) => {
  return (
    <div
      className={`${styles.paginationItem} ${active ? styles.active : ""}`}
      onClick={onClick}
    >
      {number}
    </div>
  );
};

export default PaginationItem;
