## Offline bir harita oluşturmak için bu program haricindeki ekstra gereksinimler.

### Harita için resimler ve dosya yapısının oluşturulması

`NOT : Cesium'un kullanımı oldukça karmaşıktır ve kütüphanenin kendi dokümantasyonu çok da anlaşılır değildir`

Cesium offline haritasını kullanırken bu adrese gider `node_modules/cesium/Source/Assets/Textures/NaturalEarthII`.
Eğer dosya yapısı incelenirse bu yapıya uygun formatta bir yapı elde etmek için ayrı bir program kullanılması
gerektiğinin farkına varılacaktır.

---

## Tileset oluşturmak

Python kurulu değilse [python3.10](https://www.python.org/downloads/) veya
[docker](https://www.docker.com/products/docker-desktop/) kullanılarak çalıştırılabilecek bir program ile tileset
oluşturulabilir.

Map tileset için kullanılabilecek program:
(AliFlux/MapTilesDownloader)[https://github.com/AliFlux/MapTilesDownloader]

Kullanımı dokümantasyondan kolaylıkla anlaşılabilir.

## Sonrasında yapılacaklar

Programın çıktısı olan `Output` klasörü içerisinde bulunan dosyaları `/node_modules/cesium/Source/Assets/Textures`
içerisine yerleştirdikten sonra:

`/src/enum/index.ts` dosyası içerisinde bulunan `Offline_World_Map` değişkenine `Assets/Textures/<tileset>` şeklinde bir dosya ismi verilerek kendi offline haritanızı oluşturabilirsiniz.
