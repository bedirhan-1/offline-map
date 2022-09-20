import ImageryLayerForOfflineMap from "../ImageryLayerOfflineMap";
import { Arcgis } from "../../enum";

const ImageryLayer = () => {
  return (
    <div>
      <ImageryLayerForOfflineMap url={Arcgis.Offline_World_Map} />
      <ImageryLayerForOfflineMap url={Arcgis.Default_Offline_Map} />
      <ImageryLayerForOfflineMap url={Arcgis.World_Terrain_Base} />
    </div>
  );
};

export default ImageryLayer;
