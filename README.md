# Getting started

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

or

```sh
npm install
npm start
```

Programın bu aşamada çalışıyor olması gerekir. Eğer bir sorunla karşılaşılıyorsa npm güncellemesi yapılabilir. Sonrasıda 2. adım tekrarlanılabilir.

Program [craco](https://github.com/reearth/craco-cesium) ile build edildi.

## Programla ilgili bilinmesi gerekn bazı şeyler

<p>Oldukça basit bir offline map yapmak için yazıldı ve şu an için ekstra bir özelliği yok.</p>

```js
// Viewer comonent create your map
<Viewer full timeline={false} animation={false}>
  <ImageryLayer />
  <SwitchOffline />
</Viewer>
```

### You have to know

This is a fairly simple project, but there are small details to be aware of.

###
