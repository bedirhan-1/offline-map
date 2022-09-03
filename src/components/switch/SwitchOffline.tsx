import { Switch } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../app/hook";
import { switchStateChange } from "../../features/switch/switchSlice";
import styles from "../../styles/switch.module.css";

export const SwitchOffline = () => {
  const dispatch = useAppDispatch();
  const switchState = useAppSelector((state) => state.switch);
  console.log(switchState);

  const changeSwitch = () => {
    dispatch(switchStateChange());
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
