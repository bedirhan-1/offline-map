import { Viewer } from "resium";
import { MapSwitches } from "../switch/MapSwitches";
import ImageryLayer from "../ImageryLayer";
import { useAppSelector } from "../../app/hook";

const Map: React.FC = () => {
  const whichSwitchIsOn = useAppSelector((state) => state.switch.whichSwitch);
  console.log("whichSwitchIsOn", whichSwitchIsOn);

  // const myImagery = whichSwitchIsOn === "Offline_World_Map" ? true : false;

  return (
    <>
      <Viewer
        full
        timeline={false}
        animation={false}
        baseLayerPicker={false}
        geocoder={false}
        homeButton={false}
        infoBox={false}
        // imageryProvider={false}
        navigationHelpButton={false}
        sceneModePicker={false}
      >
        <ImageryLayer />
        <MapSwitches />
      </Viewer>
    </>
  );
};

export default Map;
