// import AddImageryProvider from ";
import ImageryLayerForOfflineMap from "../ImageryProvider";
import { useAppSelector } from "../../app/hook";
import { Arcgis } from "../../enum";

const ImageryLayer = () => {
  const imageryLayer = useAppSelector((state) => state.layer);
  const { Offline_World_Map } = imageryLayer;

  return (
    <div>
      <ImageryLayerForOfflineMap
        frame={Offline_World_Map}
        url={Arcgis.Offline_World_Map}
      />
    </div>
  );
};

export default ImageryLayer;
