import { FC } from "react";
import styles from "./Pagination.module.css";
import { PaginationProps } from "./Pagination.types";
import { PaginationItem } from "../../Atoms";

const Pagination: FC<PaginationProps> = ({ count, activePage, onClick }) => {
  const pages = Math.ceil(count / 10);
  return (
    <div className={styles.container}>
      {Array.from({ length: pages }, (_, index) => (
        <PaginationItem
          key={`page-${index}`}
          onClick={() => onClick(index + 1)}
          active={activePage === index + 1}
          number={index + 1}
        />
      ))}
    </div>
  );
};

export default Pagination;
