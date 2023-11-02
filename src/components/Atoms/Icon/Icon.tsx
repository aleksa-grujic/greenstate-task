import { FC } from "react";
import styles from "./Icon.module.css";
import { IconProps } from "./Icon.types";
import DeleteSVG from "./Icons/DeleteSVG";
import EditSVG from "./Icons/EditSVG";
import LoadingSVG from "./Icons/LoadingSVG";
import LogoutSVG from "./Icons/LogoutSVG";
import ValidateSVG from "./Icons/ValidateSVG";

const Icon: FC<IconProps> = ({ icon, width, height, color }) => {
  return (
    <div className={styles.icon}>
      {icon === "delete" && (
        <DeleteSVG width={width} height={height} stroke={color} />
      )}
      {icon === "edit" && (
        <EditSVG width={width} height={height} stroke={color} />
      )}
      {icon === "loading" && (
        <LoadingSVG width={width} height={height} stroke={color} />
      )}
      {icon === "log out" && (
        <LogoutSVG width={width} height={height} stroke={color} />
      )}
      {icon === "validate" && (
        <ValidateSVG width={width} height={height} stroke={color} />
      )}
    </div>
  );
};

export default Icon;
