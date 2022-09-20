import { Switch } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../app/hook";
import { switchStateChange } from "../../features/switch/switchSlice";
import styles from "../../styles/switch.module.css";
import { Frame } from "../../enum";

export const MapSwitches = () => {
  const frameNames = Object.keys(Frame);
  const getFrameNames = frameNames.map((name) => name);
  const dispatch = useAppDispatch();
  const whichSwitchIsOn = useAppSelector((state) => state.switch.whichSwitch);

  const changeSwitch = (mapType: string) => {
    dispatch(switchStateChange(mapType));
    console.log(mapType);
  };

  const renderSwitch = () => {
    const switchList: JSX.Element[] = [];
    getFrameNames.map((name, index) => {
      let sptlittedArr = name.split("_");
      let frameName = sptlittedArr[0];
      return switchList.push(
        <div key={index} className={styles.switch}>
          <Switch
            checked={
              name === whichSwitchIsOn ? true : name === "off" ? false : false
            }
            onChange={() => {
              changeSwitch(name);
            }}
            name={name === "Offline" ? "Offline Turkey" : name}
            inputProps={{ "aria-label": "controlled" }}
          />
          <span>{frameName}</span>
        </div>
      );
    });
    return switchList;
  };

  return <div className={styles.content}>{renderSwitch()}</div>;
};
