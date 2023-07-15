export class HitZone {
  x: string;
  y: string;
  goto: number;
}
export class ScenesItemModel {
  id: number;
  backgroundUrl: string;
  description: string;
  hitZones: HitZone[];
}

export class ScenesModel {
  scenes: ScenesItemModel[]
}
