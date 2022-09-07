import { buildModuleUrl, UrlTemplateImageryProvider } from "cesium";
import { ImageryLayer as Layer } from "resium";
import { useAppSelector } from "../../app/hook";

import { IFrame } from "../../Interfaces/Layer";

const ImageryLayerForOfflineMap = (props: IFrame) => {
  const MapIsOffline = useAppSelector((state) => state.switch.isOn);
  const { url } = props;

  return (
    <div>
      {MapIsOffline ? (
        <Layer
          imageryProvider={
            new UrlTemplateImageryProvider({
              url: buildModuleUrl(`${url}{z}/{x}/{y}.png`),
            })
          }
        />
      ) : null}
    </div>
  );
};

export default ImageryLayerForOfflineMap;
