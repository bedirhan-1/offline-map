# OFFLINE-MAP

### Adım 1 (Programı indir)

```sh
git clone https://github.com/bedirhan-1/offline-map.git
cd offline-map
```

### Adım 2 (Gerkesinimleri projeye ekle)

```sh
yarn
yarn start
```

veya

```sh
npm install
npm start
```

Programın bu aşamada çalışıyor olması gerekir. Eğer bir sorunla karşılaşılıyorsa npm güncellemesi yapılabilir. Sonrasıda 2. adım tekrarlanılabilir.

Program [craco](https://github.com/reearth/craco-cesium) ile build edildi.

## Programla ilgili bilinmesi gerekn bazı şeyler

Oldukça basit bir offline map yapmak için yazıldı ve şu an için ekstra bir özelliği yok.

```js
// Viewer komponenti haritanın kendisini oluşturur.
<Viewer full timeline={false} animation={false}>
  <ImageryLayer />
  <SwitchOffline />
</Viewer>
```

Viewer'ın içinde bulunan ImageryLayer haritanın offline olmasını sağlayan bir provider oluşturur. SwitchOffline ise bu provider'ı etkinleştiren veya kapatan yapıdır.

## ImageryLayer

```js
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
```

ImageryLayerForOfflineMap komponenti isminden anlaşılcağı gibi offline map için bir görsel katmanı oluşturmaktır.

#### ImageryLayerForOfflineMap'in içeriği:

```js
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
```

Burada gerçekleşen olay ise `cesium`'un kendisinde bulunan `TileMapServiceImageryProvider`'ı ve `buildModuleUrl`'i
örnekte olduğu gibi kullanarak (şu an için props olarak gelen url, cesiumun içinde halihazırda bulunan
NaturalEarthII dosyasını işaret ediyor) offline harita için gerekli assetleri bulunduran file yapısını haritaya
enjekte edebiliyoruz.
