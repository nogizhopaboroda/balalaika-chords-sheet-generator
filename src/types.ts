export type ChordTuning = [string, string, string];

export interface ChordVariant {
  recommended: boolean;
  strings: [number, number, number]
}

export interface ChordData {
  title: string,
  notes: [string, string, string];
  variants: Array<ChordVariant>;
}

export interface ChordGroup {
  title: string;
  chords: Array<ChordData>
}


export interface Data {
  title: string;
  data: Array<ChordGroup>;
}
