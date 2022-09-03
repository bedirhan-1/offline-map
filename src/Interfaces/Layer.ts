export interface ILayers {
  Offline_World_Map: ILayer;
}

export interface ILayer {
  opacity: number;
}

export interface IFrame {
  frame: ILayer;
  url: string;
}
