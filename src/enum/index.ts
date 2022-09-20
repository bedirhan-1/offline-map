enum Arcgis {
  Offline_World_Map = "http://127.0.0.1:8000/images",
  Default_Offline_Map = "Assets/Textures/NaturalEarthII",
  World_Terrain_Base = "https://services.arcgisonline.com/arcgis/rest/services/World_Terrain_Base/MapServer",
}

enum Frame {
  Offline_World_Map = "Offline_World_Map",
  Default_Offline_Map = "Default_Offline_Map",
  Arcgis_Terrain_Base = "Arcgis_Terrain_Base",
}

export { Arcgis, Frame };
