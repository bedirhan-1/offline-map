import { useAppSelector } from "../../app/hook";
import { IFrame } from "../../Interfaces/Layer";
import { ImageryLayer as Layer } from "resium";
import {
  ArcGisMapServerImageryProvider,
  TileMapServiceImageryProvider,
  buildModuleUrl,
} from "cesium";

const ImageryLayerForOfflineMap = (props: IFrame) => {
  const witchSwitch = useAppSelector((state) => state.switch.whichSwitch);
  const { url } = props;

  return (
    <div>
      {witchSwitch === "Arcgis_Terrain_Base" ? (
        <Layer
          imageryProvider={
            new ArcGisMapServerImageryProvider({
              url: url,
            })
          }
          alpha={1}
        />
      ) : witchSwitch === "Default_Offline_Map" ? (
        <Layer
          imageryProvider={
            new TileMapServiceImageryProvider({
              url: buildModuleUrl("Assets/Textures/NaturalEarthII"),
            })
          }
        />
      ) : witchSwitch === "Offline_World_Map" ? (
        <Layer
          imageryProvider={
            new TileMapServiceImageryProvider({
              maximumLevel: 10,
              url: url,
            })
          }
        />
      ) : witchSwitch === "Normal" ? null : null}
    </div>
  );
};

export default ImageryLayerForOfflineMap;
