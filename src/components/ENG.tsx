import { FunctionComponent } from "react";
import styles from "./ENG.module.css";

export type ENGType = {
  className?: string;
};

const ENG: FunctionComponent<ENGType> = ({ className = "" }) => {
  return <div className={[styles.eng, className].join(" ")}>ENG</div>;
};

export default ENG;
