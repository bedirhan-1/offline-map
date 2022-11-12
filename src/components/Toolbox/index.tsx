import { Cartesian3 } from "cesium";
import React from "react";
import styles from "../../styles/switch.module.css";

const Turkey = Cartesian3.fromDegrees(
  34.41617386410008,
  39.15112424520272,
  1900000
);

export const ToolBox = () => {
  return (
    <div className={styles.toolBox}>
      <div className={styles.toolBoxButton}>
        <h3> Hi</h3>
      </div>
    </div>
  );
};
