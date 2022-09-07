import { Entity, PointGraphics, Viewer } from "resium";
import * as cesium from "cesium";
import { Arcgis } from "../../enum";

const Map: React.FC = () => {
  const tms = new cesium.UrlTemplateImageryProvider({
    url: Arcgis.Offline_World_Map,
    maximumLevel: 13,
  });

  return (
    <>
      <Viewer
        scene3DOnly={false}
        baseLayerPicker={false}
        geocoder={false}
        full={true}
        imageryProvider={tms}
        timeline={false}
        animation={false}
        homeButton={false}
        fullscreenButton={false}
        vrButton={false}
        infoBox={false}
        navigationHelpButton={false}
      >
        <Entity
          position={cesium.Cartesian3.fromDegrees(24.806469, 45.811093, 100)}
        >
          <PointGraphics pixelSize={10} />
        </Entity>
      </Viewer>
    </>
  );
};

export default Map;
