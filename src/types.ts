export type ChordTuning = [string, string, string];

export type Finger = number | { finger: 'T' | 1 | 2 | 3, fret: number }

export interface ChordVariant {
  recommended: boolean;
  strings: [Finger, Finger, Finger]
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
  tuning: ChordTuning;
  data: Array<ChordGroup>;
}
