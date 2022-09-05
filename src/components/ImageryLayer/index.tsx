import ImageryLayerForOfflineMap from "../ImageryProvider";
import { Arcgis } from "../../enum";

const ImageryLayer = () => {
  return (
    <div>
      <ImageryLayerForOfflineMap url={Arcgis.Offline_World_Map} />
      <ImageryLayerForOfflineMap url={Arcgis.Default_Offline_Map} />
    </div>
  );
};

export default ImageryLayer;
