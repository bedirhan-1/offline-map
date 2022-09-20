import { Switch } from "@mui/material";
import { useAppDispatch } from "../../app/hook";
import { switchStateChange } from "../../features/switch/switchSlice";
import styles from "../../styles/switch.module.css";

export const SwitchOffline = () => {
  const dispatch = useAppDispatch();

  const changeSwitch = () => {
    dispatch(switchStateChange("offline"));
  };

  return (
    <div className={styles.content}>
      <h3>Offline Map</h3>
      <Switch
        color='primary'
        onClick={() => {
          changeSwitch();
        }}
      />
    </div>
  );
};
