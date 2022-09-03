import { buildModuleUrl, TileMapServiceImageryProvider } from "cesium";
import { ImageryLayer as Layer } from "resium";
import { useAppSelector } from "../../app/hook";

import { IFrame } from "../../Interfaces/Layer";

const ImageryLayerForOfflineMap = (props: IFrame) => {
  const MapIsOffline = useAppSelector((state) => state.switch.isOn);
  console.log(MapIsOffline);
  const { url } = props;
  return (
    <div>
      {MapIsOffline ? (
        <Layer
          imageryProvider={
            new TileMapServiceImageryProvider({
              url: buildModuleUrl(`${url}`),
            })
          }
        />
      ) : null}
    </div>
  );
};

export default ImageryLayerForOfflineMap;
