import ImageryLayerForOfflineMap from "../ImageryLayerOfflineMap";
import { Arcgis } from "../../enum";

const ImageryLayer = () => {
  return (
    <div>
      <ImageryLayerForOfflineMap url={Arcgis.Offline_World_Map} />
    </div>
  );
};

export default ImageryLayer;
