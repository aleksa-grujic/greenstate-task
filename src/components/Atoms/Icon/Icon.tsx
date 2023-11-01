import { FC } from "react";
import styles from "./Icon.module.css";
import { IconProps } from "./Icon.types";
import { ReactComponent as DeleteSVG } from "../../../assets/delete.svg";
import { ReactComponent as EditSVG } from "../../../assets/edit.svg";
import { ReactComponent as LoadingSVG } from "../../../assets/loading.svg";
import { ReactComponent as LogoutSVG } from "../../../assets/logout.svg";
import { ReactComponent as ValidateSVG } from "../../../assets/validate.svg";

const Icon: FC<IconProps> = ({ icon }) => {
  return (
    <div className={styles.icon}>
      {icon === "delete" && <DeleteSVG />}
      {icon === "edit" && <EditSVG />}
      {icon === "loading" && <LoadingSVG />}
      {icon === "log out" && <LogoutSVG />}
      {icon === "validate" && <ValidateSVG />}
    </div>
  );
};

export default Icon;
