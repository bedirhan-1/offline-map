import { CameraFlyTo, Viewer } from "resium";
import { MapSwitches } from "../switch/MapSwitches";
import ImageryLayer from "../ImageryLayer";
import { useAppSelector } from "../../app/hook";
import { Cartesian3 } from "cesium";

const Map: React.FC = () => {
  const whichSwitchIsOn = useAppSelector((state) => state.switch.whichSwitch);
  console.log("whichSwitchIsOn", whichSwitchIsOn);
  let whichSwitch = useAppSelector((state) => state.switch.whichSwitch);
  let myImageryBool = whichSwitch === "Normal" ? undefined : false;

  const Istanbul = Cartesian3.fromDegrees(
    28.95228425360604,
    41.08748732381319,
    1900
  );

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
        imageryProvider={myImageryBool}
        navigationHelpButton={false}
        sceneModePicker={false}
        fullscreenButton={false}
      >
        {whichSwitchIsOn === "Normal" ? (
          <CameraFlyTo
            destination={Istanbul}
            orientation={{
              heading: 0,
              pitch: -1.5707963267948966,
            }}
          />
        ) : null}
        <ImageryLayer />
        <MapSwitches />
      </Viewer>
    </>
  );
};

export default Map;
