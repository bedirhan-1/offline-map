import { Viewer } from "resium";
import { SwitchOffline } from "../switch/SwitchOffline";
import ImageryLayer from "../ImageryLayer";

const Map: React.FC = () => {
  return (
    <>
      <Viewer full timeline={false} animation={false}>
        <ImageryLayer />
        <SwitchOffline />
      </Viewer>
    </>
  );
};

export default Map;
