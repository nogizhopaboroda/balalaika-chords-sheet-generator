import type { Data } from "./types";

const dataExample: Array<Data> = [
  {
    title: "Tuning: C-E-G",
    tuning: ["C", "E", "G"],
    data: [
      {
        title: "C",
        chords: [
          {
            title: "C",
            notes: ["C", "E", "G"],
            variants: [
              {
                title: "C53",
                recommended: true,
                strings: [0, 0, 0],
                main: true,
              },
              {
                title: "C5",
                recommended: true,
                strings: [0, { fret: 3, finger: 3 }, 0],
              },
              {
                title: "C5",
                recommended: true,
                strings: [0, { fret: 3, finger: 2 }, { fret: 5, finger: 4 }],
              },
              {
                title: "C6",
                recommended: true,
                strings: [
                  { fret: 4, finger: "T" },
                  { fret: 3, finger: 1 },
                  { fret: 5, finger: 3 },
                ],
              },
              {
                title: "C64",
                recommended: true,
                strings: [
                  { fret: 7, finger: "T" },
                  { fret: 8, finger: 2 },
                  { fret: 9, finger: 3 },
                ],
              },
              {
                title: "C53",
                recommended: true,
                strings: [
                  { fret: 12, finger: "T" },
                  { fret: 12, finger: "T" },
                  { fret: 12, finger: 2 },
                ],
              },
              {
                title: "C??",
                recommended: true,
                strings: [7, 8, 9],
              },
            ],
          },
          {
            title: "Cm",
            notes: ["C", "D#", "G"],
            variants: [
              // {
              //   recommended: false,
              //   strings: [0, 11, 0],
              // },
              // {
              //   recommended: false,
              //   strings: [0, 3, 8],
              // },
              // {
              //   recommended: false,
              //   strings: [3, 8, 0],
              // },
              {
                recommended: true,
                strings: [
                  { fret: 3, finger: "T" },
                  { fret: 3, finger: "T" },
                  { fret: 5, finger: 3 },
                ],
              },
              {
                recommended: true,
                strings: [7, 8, 8],
              },
            ],
          },
          {
            title: "C7",
            notes: ["C", "E", "A#"],
            variants: [
              {
                recommended: true,
                strings: [0, 0, 3],
              },
              {
                recommended: false,
                strings: [0, 6, 9],
              },
              {
                recommended: false,
                strings: [4, 8, 3],
              },
              {
                recommended: true,
                strings: [4, 6, 5],
              },
              {
                recommended: true,
                strings: [10, 8, 9],
              },
            ],
          },
          {
            title: "Cm7",
            notes: ["C", "D#", "A#"],
            variants: [
              {
                recommended: false,
                strings: [0, 11, 3],
              },
              {
                recommended: false,
                strings: [0, 6, 8],
              },
              {
                recommended: false,
                strings: [3, 8, 3],
              },
              {
                recommended: true,
                strings: [3, 6, 5],
              },
              {
                recommended: true,
                strings: [10, 8, 8],
              },
            ],
          },
          {
            title: "Cb",
            notes: ["B", "D#", "F#"],
            variants: [
              {
                recommended: true,
                strings: [11, 11, 11],
              },
              {
                recommended: false,
                strings: [11, 2, 8],
              },
              {
                recommended: false,
                strings: [3, 7, 11],
              },
              {
                recommended: true,
                strings: [3, 2, 4],
              },
              {
                recommended: true,
                strings: [6, 7, 8],
              },
            ],
          },
          {
            title: "Cbm",
            notes: ["B", "D", "F#"],
            variants: [
              {
                recommended: true,
                strings: [11, 10, 11],
              },
              {
                recommended: false,
                strings: [11, 2, 7],
              },
              {
                recommended: false,
                strings: [2, 7, 11],
              },
              {
                recommended: true,
                strings: [2, 2, 4],
              },
              {
                recommended: true,
                strings: [6, 7, 7],
              },
            ],
          },
          {
            title: "Cb7",
            notes: ["B", "D#", "A"],
            variants: [
              {
                recommended: false,
                strings: [11, 11, 2],
              },
              {
                recommended: false,
                strings: [11, 5, 8],
              },
              {
                recommended: false,
                strings: [3, 7, 2],
              },
              {
                recommended: true,
                strings: [3, 5, 4],
              },
              {
                recommended: true,
                strings: [9, 7, 8],
              },
            ],
          },
          {
            title: "Cbm7",
            notes: ["B", "D", "A"],
            variants: [
              {
                recommended: false,
                strings: [11, 10, 2],
              },
              {
                recommended: false,
                strings: [11, 5, 7],
              },
              {
                recommended: false,
                strings: [2, 7, 2],
              },
              {
                recommended: true,
                strings: [2, 5, 4],
              },
              {
                recommended: true,
                strings: [9, 7, 7],
              },
            ],
          },
        ],
      },
      {
        title: "D",
        chords: [
          {
            title: "D",
            notes: ["D", "F#", "A"],
            variants: [
              {
                recommended: true,
                strings: [2, 2, 2],
              },
              {
                recommended: false,
                strings: [2, 5, 11],
              },
              {
                recommended: false,
                strings: [6, 10, 2],
              },
              {
                recommended: true,
                strings: [6, 5, 7],
              },
              {
                recommended: true,
                strings: [9, 10, 11],
              },
            ],
          },
          {
            title: "Dm",
            notes: ["D", "F", "A"],
            variants: [
              {
                recommended: true,
                strings: [2, 1, 2],
              },
              {
                recommended: false,
                strings: [2, 5, 10],
              },
              {
                recommended: false,
                strings: [5, 10, 2],
              },
              {
                recommended: true,
                strings: [5, 5, 7],
              },
              {
                recommended: true,
                strings: [9, 10, 10],
              },
            ],
          },
          {
            title: "D7",
            notes: ["D", "F#", "C"],
            variants: [
              {
                recommended: true,
                strings: [2, 2, 5],
              },
              {
                recommended: false,
                strings: [2, 8, 11],
              },
              {
                recommended: false,
                strings: [6, 10, 5],
              },
              {
                recommended: true,
                strings: [6, 8, 7],
              },
              {
                recommended: false,
                strings: [0, 10, 11],
              },
            ],
          },
          {
            title: "Dm7",
            notes: ["D", "F", "C"],
            variants: [
              {
                recommended: false,
                strings: [2, 1, 5],
              },
              {
                recommended: false,
                strings: [2, 8, 10],
              },
              {
                recommended: false,
                strings: [5, 10, 5],
              },
              {
                recommended: true,
                strings: [5, 8, 7],
              },
              {
                recommended: false,
                strings: [0, 10, 10],
              },
            ],
          },
          {
            title: "Db",
            notes: ["C#", "F", "G#"],
            variants: [
              {
                recommended: true,
                strings: [1, 1, 1],
              },
              {
                recommended: false,
                strings: [1, 4, 10],
              },
              {
                recommended: false,
                strings: [5, 9, 1],
              },
              {
                recommended: true,
                strings: [5, 4, 6],
              },
              {
                recommended: true,
                strings: [8, 9, 10],
              },
            ],
          },
          {
            title: "Dbm",
            notes: ["C#", "E", "G#"],
            variants: [
              {
                recommended: true,
                strings: [1, 0, 1],
              },
              {
                recommended: false,
                strings: [1, 4, 9],
              },
              {
                recommended: false,
                strings: [4, 9, 1],
              },
              {
                recommended: true,
                strings: [4, 4, 6],
              },
              {
                recommended: true,
                strings: [8, 9, 9],
              },
            ],
          },
          {
            title: "Db7",
            notes: ["C#", "F", "B"],
            variants: [
              {
                recommended: true,
                strings: [1, 1, 4],
              },
              {
                recommended: false,
                strings: [1, 7, 10],
              },
              {
                recommended: false,
                strings: [5, 9, 4],
              },
              {
                recommended: true,
                strings: [5, 7, 6],
              },
              {
                recommended: true,
                strings: [11, 9, 10],
              },
            ],
          },
          {
            title: "Dbm7",
            notes: ["C#", "E", "B"],
            variants: [
              {
                recommended: false,
                strings: [1, 0, 4],
              },
              {
                recommended: false,
                strings: [1, 7, 9],
              },
              {
                recommended: false,
                strings: [4, 9, 4],
              },
              {
                recommended: true,
                strings: [4, 7, 6],
              },
              {
                recommended: true,
                strings: [11, 9, 9],
              },
            ],
          },
        ],
      },
      {
        title: "E",
        chords: [
          {
            title: "E",
            notes: ["E", "G#", "B"],
            variants: [
              {
                recommended: true,
                strings: [4, 4, 4],
              },
              {
                recommended: false,
                strings: [4, 7, 1],
              },
              {
                recommended: false,
                strings: [8, 0, 4],
              },
              {
                recommended: true,
                strings: [8, 7, 9],
              },
              {
                recommended: false,
                strings: [11, 0, 1],
              },
            ],
          },
          {
            title: "Em",
            notes: ["E", "G", "B"],
            variants: [
              {
                recommended: true,
                strings: [4, 3, 4],
              },
              {
                recommended: false,
                strings: [4, 7, 0],
              },
              {
                recommended: false,
                strings: [7, 0, 4],
              },
              {
                recommended: true,
                strings: [7, 7, 9],
              },
              {
                recommended: false,
                strings: [11, 0, 0],
              },
            ],
          },
          {
            title: "E7",
            notes: ["E", "G#", "D"],
            variants: [
              {
                recommended: true,
                strings: [4, 4, 7],
              },
              {
                recommended: false,
                strings: [4, 10, 1],
              },
              {
                recommended: false,
                strings: [8, 0, 7],
              },
              {
                recommended: true,
                strings: [8, 10, 9],
              },
              {
                recommended: true,
                strings: [2, 0, 1],
              },
            ],
          },
          {
            title: "Em7",
            notes: ["E", "G", "D"],
            variants: [
              {
                recommended: false,
                strings: [4, 3, 7],
              },
              {
                recommended: false,
                strings: [4, 10, 0],
              },
              {
                recommended: false,
                strings: [7, 0, 7],
              },
              {
                recommended: true,
                strings: [7, 10, 9],
              },
              {
                recommended: true,
                strings: [2, 0, 0],
              },
            ],
          },
          {
            title: "Eb",
            notes: ["D#", "G", "A#"],
            variants: [
              {
                recommended: true,
                strings: [3, 3, 3],
              },
              {
                recommended: false,
                strings: [3, 6, 0],
              },
              {
                recommended: false,
                strings: [7, 11, 3],
              },
              {
                recommended: true,
                strings: [7, 6, 8],
              },
              {
                recommended: false,
                strings: [10, 11, 0],
              },
            ],
          },
          {
            title: "Ebm",
            notes: ["D#", "F#", "A#"],
            variants: [
              {
                recommended: true,
                strings: [3, 2, 3],
              },
              {
                recommended: false,
                strings: [3, 6, 11],
              },
              {
                recommended: false,
                strings: [6, 11, 3],
              },
              {
                recommended: true,
                strings: [6, 6, 8],
              },
              {
                recommended: true,
                strings: [10, 11, 11],
              },
            ],
          },
          {
            title: "Eb7",
            notes: ["D#", "G", "C#"],
            variants: [
              {
                recommended: true,
                strings: [3, 3, 6],
              },
              {
                recommended: false,
                strings: [3, 9, 0],
              },
              {
                recommended: false,
                strings: [7, 11, 6],
              },
              {
                recommended: true,
                strings: [7, 9, 8],
              },
              {
                recommended: false,
                strings: [1, 11, 0],
              },
            ],
          },
          {
            title: "Ebm7",
            notes: ["D#", "F#", "C#"],
            variants: [
              {
                recommended: false,
                strings: [3, 2, 6],
              },
              {
                recommended: false,
                strings: [3, 9, 11],
              },
              {
                recommended: false,
                strings: [6, 11, 6],
              },
              {
                recommended: true,
                strings: [6, 9, 8],
              },
              {
                recommended: false,
                strings: [1, 11, 11],
              },
            ],
          },
        ],
      },
      {
        title: "F",
        chords: [
          {
            title: "F",
            notes: ["F", "A", "C"],
            variants: [
              {
                recommended: true,
                strings: [5, 5, 5],
              },
              {
                recommended: false,
                strings: [5, 8, 2],
              },
              {
                recommended: false,
                strings: [9, 1, 5],
              },
              {
                recommended: true,
                strings: [9, 8, 10],
              },
              {
                recommended: true,
                strings: [0, 1, 2],
              },
            ],
          },
          {
            title: "Fm",
            notes: ["F", "G#", "C"],
            variants: [
              {
                recommended: true,
                strings: [5, 4, 5],
              },
              {
                recommended: false,
                strings: [5, 8, 1],
              },
              {
                recommended: false,
                strings: [8, 1, 5],
              },
              {
                recommended: true,
                strings: [8, 8, 10],
              },
              {
                recommended: true,
                strings: [0, 1, 1],
              },
            ],
          },
          {
            title: "F7",
            notes: ["F", "A", "D#"],
            variants: [
              {
                recommended: true,
                strings: [5, 5, 8],
              },
              {
                recommended: false,
                strings: [5, 11, 2],
              },
              {
                recommended: false,
                strings: [9, 1, 8],
              },
              {
                recommended: true,
                strings: [9, 11, 10],
              },
              {
                recommended: true,
                strings: [3, 1, 2],
              },
            ],
          },
          {
            title: "Fm7",
            notes: ["F", "G#", "D#"],
            variants: [
              {
                recommended: false,
                strings: [5, 4, 8],
              },
              {
                recommended: false,
                strings: [5, 11, 1],
              },
              {
                recommended: false,
                strings: [8, 1, 8],
              },
              {
                recommended: true,
                strings: [8, 11, 10],
              },
              {
                recommended: true,
                strings: [3, 1, 1],
              },
            ],
          },
          {
            title: "Fb",
            notes: ["E", "G#", "B"],
            variants: [
              {
                recommended: true,
                strings: [4, 4, 4],
              },
              {
                recommended: false,
                strings: [4, 7, 1],
              },
              {
                recommended: false,
                strings: [8, 0, 4],
              },
              {
                recommended: true,
                strings: [8, 7, 9],
              },
              {
                recommended: false,
                strings: [11, 0, 1],
              },
            ],
          },
          {
            title: "Fbm",
            notes: ["E", "G", "B"],
            variants: [
              {
                recommended: true,
                strings: [4, 3, 4],
              },
              {
                recommended: false,
                strings: [4, 7, 0],
              },
              {
                recommended: false,
                strings: [7, 0, 4],
              },
              {
                recommended: true,
                strings: [7, 7, 9],
              },
              {
                recommended: false,
                strings: [11, 0, 0],
              },
            ],
          },
          {
            title: "Fb7",
            notes: ["E", "G#", "D"],
            variants: [
              {
                recommended: true,
                strings: [4, 4, 7],
              },
              {
                recommended: false,
                strings: [4, 10, 1],
              },
              {
                recommended: false,
                strings: [8, 0, 7],
              },
              {
                recommended: true,
                strings: [8, 10, 9],
              },
              {
                recommended: true,
                strings: [2, 0, 1],
              },
            ],
          },
          {
            title: "Fbm7",
            notes: ["E", "G", "D"],
            variants: [
              {
                recommended: false,
                strings: [4, 3, 7],
              },
              {
                recommended: false,
                strings: [4, 10, 0],
              },
              {
                recommended: false,
                strings: [7, 0, 7],
              },
              {
                recommended: true,
                strings: [7, 10, 9],
              },
              {
                recommended: true,
                strings: [2, 0, 0],
              },
            ],
          },
        ],
      },
      {
        title: "G",
        chords: [
          {
            title: "G",
            notes: ["G", "B", "D"],
            variants: [
              {
                recommended: true,
                strings: [7, 7, 7],
              },
              {
                recommended: false,
                strings: [7, 10, 4],
              },
              {
                recommended: false,
                strings: [11, 3, 7],
              },
              {
                recommended: false,
                strings: [11, 10, 0],
              },
              {
                recommended: true,
                strings: [2, 3, 4],
              },
            ],
          },
          {
            title: "Gm",
            notes: ["G", "A#", "D"],
            variants: [
              {
                recommended: true,
                strings: [7, 6, 7],
              },
              {
                recommended: false,
                strings: [7, 10, 3],
              },
              {
                recommended: false,
                strings: [10, 3, 7],
              },
              {
                recommended: false,
                strings: [10, 10, 0],
              },
              {
                recommended: true,
                strings: [2, 3, 3],
              },
            ],
          },
          {
            title: "G7",
            notes: ["G", "B", "F"],
            variants: [
              {
                recommended: true,
                strings: [7, 7, 10],
              },
              {
                recommended: false,
                strings: [7, 1, 4],
              },
              {
                recommended: false,
                strings: [11, 3, 10],
              },
              {
                recommended: false,
                strings: [11, 1, 0],
              },
              {
                recommended: true,
                strings: [5, 3, 4],
              },
            ],
          },
          {
            title: "Gm7",
            notes: ["G", "A#", "F"],
            variants: [
              {
                recommended: false,
                strings: [7, 6, 10],
              },
              {
                recommended: false,
                strings: [7, 1, 3],
              },
              {
                recommended: false,
                strings: [10, 3, 10],
              },
              {
                recommended: false,
                strings: [10, 1, 0],
              },
              {
                recommended: true,
                strings: [5, 3, 3],
              },
            ],
          },
          {
            title: "Gb",
            notes: ["F#", "A#", "C#"],
            variants: [
              {
                recommended: true,
                strings: [6, 6, 6],
              },
              {
                recommended: false,
                strings: [6, 9, 3],
              },
              {
                recommended: false,
                strings: [10, 2, 6],
              },
              {
                recommended: true,
                strings: [10, 9, 11],
              },
              {
                recommended: true,
                strings: [1, 2, 3],
              },
            ],
          },
          {
            title: "Gbm",
            notes: ["F#", "A", "C#"],
            variants: [
              {
                recommended: true,
                strings: [6, 5, 6],
              },
              {
                recommended: false,
                strings: [6, 9, 2],
              },
              {
                recommended: false,
                strings: [9, 2, 6],
              },
              {
                recommended: true,
                strings: [9, 9, 11],
              },
              {
                recommended: true,
                strings: [1, 2, 2],
              },
            ],
          },
          {
            title: "Gb7",
            notes: ["F#", "A#", "E"],
            variants: [
              {
                recommended: true,
                strings: [6, 6, 9],
              },
              {
                recommended: false,
                strings: [6, 0, 3],
              },
              {
                recommended: false,
                strings: [10, 2, 9],
              },
              {
                recommended: false,
                strings: [10, 0, 11],
              },
              {
                recommended: true,
                strings: [4, 2, 3],
              },
            ],
          },
          {
            title: "Gbm7",
            notes: ["F#", "A", "E"],
            variants: [
              {
                recommended: false,
                strings: [6, 5, 9],
              },
              {
                recommended: false,
                strings: [6, 0, 2],
              },
              {
                recommended: false,
                strings: [9, 2, 9],
              },
              {
                recommended: false,
                strings: [9, 0, 11],
              },
              {
                recommended: true,
                strings: [4, 2, 2],
              },
            ],
          },
        ],
      },
      {
        title: "A",
        chords: [
          {
            title: "A",
            notes: ["A", "C#", "E"],
            variants: [
              {
                recommended: true,
                strings: [9, 9, 9],
              },
              {
                recommended: false,
                strings: [9, 0, 6],
              },
              {
                recommended: false,
                strings: [1, 5, 9],
              },
              {
                recommended: true,
                strings: [1, 0, 2],
              },
              {
                recommended: true,
                strings: [4, 5, 6],
              },
            ],
          },
          {
            title: "Am",
            notes: ["A", "C", "E"],
            variants: [
              {
                recommended: true,
                strings: [9, 8, 9],
              },
              {
                recommended: false,
                strings: [9, 0, 5],
              },
              {
                recommended: false,
                strings: [0, 5, 9],
              },
              {
                recommended: true,
                strings: [0, 0, 2],
              },
              {
                recommended: true,
                strings: [4, 5, 5],
              },
            ],
          },
          {
            title: "A7",
            notes: ["A", "C#", "G"],
            variants: [
              {
                recommended: false,
                strings: [9, 9, 0],
              },
              {
                recommended: false,
                strings: [9, 3, 6],
              },
              {
                recommended: false,
                strings: [1, 5, 0],
              },
              {
                recommended: true,
                strings: [1, 3, 2],
              },
              {
                recommended: true,
                strings: [7, 5, 6],
              },
            ],
          },
          {
            title: "Am7",
            notes: ["A", "C", "G"],
            variants: [
              {
                recommended: false,
                strings: [9, 8, 0],
              },
              {
                recommended: false,
                strings: [9, 3, 5],
              },
              {
                recommended: false,
                strings: [0, 5, 0],
              },
              {
                recommended: true,
                strings: [0, 3, 2],
              },
              {
                recommended: true,
                strings: [7, 5, 5],
              },
            ],
          },
          {
            title: "Ab",
            notes: ["G#", "C", "D#"],
            variants: [
              {
                recommended: true,
                strings: [8, 8, 8],
              },
              {
                recommended: false,
                strings: [8, 11, 5],
              },
              {
                recommended: false,
                strings: [0, 4, 8],
              },
              {
                recommended: false,
                strings: [0, 11, 1],
              },
              {
                recommended: true,
                strings: [3, 4, 5],
              },
            ],
          },
          {
            title: "Abm",
            notes: ["G#", "B", "D#"],
            variants: [
              {
                recommended: true,
                strings: [8, 7, 8],
              },
              {
                recommended: false,
                strings: [8, 11, 4],
              },
              {
                recommended: false,
                strings: [11, 4, 8],
              },
              {
                recommended: false,
                strings: [11, 11, 1],
              },
              {
                recommended: true,
                strings: [3, 4, 4],
              },
            ],
          },
          {
            title: "Ab7",
            notes: ["G#", "C", "F#"],
            variants: [
              {
                recommended: true,
                strings: [8, 8, 11],
              },
              {
                recommended: false,
                strings: [8, 2, 5],
              },
              {
                recommended: false,
                strings: [0, 4, 11],
              },
              {
                recommended: true,
                strings: [0, 2, 1],
              },
              {
                recommended: true,
                strings: [6, 4, 5],
              },
            ],
          },
          {
            title: "Abm7",
            notes: ["G#", "B", "F#"],
            variants: [
              {
                recommended: false,
                strings: [8, 7, 11],
              },
              {
                recommended: false,
                strings: [8, 2, 4],
              },
              {
                recommended: false,
                strings: [11, 4, 11],
              },
              {
                recommended: false,
                strings: [11, 2, 1],
              },
              {
                recommended: true,
                strings: [6, 4, 4],
              },
            ],
          },
        ],
      },
      {
        title: "B",
        chords: [
          {
            title: "B",
            notes: ["B", "D#", "F#"],
            variants: [
              {
                recommended: true,
                strings: [11, 11, 11],
              },
              {
                recommended: false,
                strings: [11, 2, 8],
              },
              {
                recommended: false,
                strings: [3, 7, 11],
              },
              {
                recommended: true,
                strings: [3, 2, 4],
              },
              {
                recommended: true,
                strings: [6, 7, 8],
              },
            ],
          },
          {
            title: "Bm",
            notes: ["B", "D", "F#"],
            variants: [
              {
                recommended: true,
                strings: [11, 10, 11],
              },
              {
                recommended: false,
                strings: [11, 2, 7],
              },
              {
                recommended: false,
                strings: [2, 7, 11],
              },
              {
                recommended: true,
                strings: [2, 2, 4],
              },
              {
                recommended: true,
                strings: [6, 7, 7],
              },
            ],
          },
          {
            title: "B7",
            notes: ["B", "D#", "A"],
            variants: [
              {
                recommended: false,
                strings: [11, 11, 2],
              },
              {
                recommended: false,
                strings: [11, 5, 8],
              },
              {
                recommended: false,
                strings: [3, 7, 2],
              },
              {
                recommended: true,
                strings: [3, 5, 4],
              },
              {
                recommended: true,
                strings: [9, 7, 8],
              },
            ],
          },
          {
            title: "Bm7",
            notes: ["B", "D", "A"],
            variants: [
              {
                recommended: false,
                strings: [11, 10, 2],
              },
              {
                recommended: false,
                strings: [11, 5, 7],
              },
              {
                recommended: false,
                strings: [2, 7, 2],
              },
              {
                recommended: true,
                strings: [2, 5, 4],
              },
              {
                recommended: true,
                strings: [9, 7, 7],
              },
            ],
          },
          {
            title: "Bb",
            notes: ["A#", "D", "F"],
            variants: [
              {
                recommended: true,
                strings: [10, 10, 10],
              },
              {
                recommended: false,
                strings: [10, 1, 7],
              },
              {
                recommended: false,
                strings: [2, 6, 10],
              },
              {
                recommended: true,
                strings: [2, 1, 3],
              },
              {
                recommended: true,
                strings: [5, 6, 7],
              },
            ],
          },
          {
            title: "Bbm",
            notes: ["A#", "C#", "F"],
            variants: [
              {
                recommended: true,
                strings: [10, 9, 10],
              },
              {
                recommended: false,
                strings: [10, 1, 6],
              },
              {
                recommended: false,
                strings: [1, 6, 10],
              },
              {
                recommended: true,
                strings: [1, 1, 3],
              },
              {
                recommended: true,
                strings: [5, 6, 6],
              },
            ],
          },
          {
            title: "Bb7",
            notes: ["A#", "D", "G#"],
            variants: [
              {
                recommended: false,
                strings: [10, 10, 1],
              },
              {
                recommended: false,
                strings: [10, 4, 7],
              },
              {
                recommended: false,
                strings: [2, 6, 1],
              },
              {
                recommended: true,
                strings: [2, 4, 3],
              },
              {
                recommended: true,
                strings: [8, 6, 7],
              },
            ],
          },
          {
            title: "Bbm7",
            notes: ["A#", "C#", "G#"],
            variants: [
              {
                recommended: false,
                strings: [10, 9, 1],
              },
              {
                recommended: false,
                strings: [10, 4, 6],
              },
              {
                recommended: false,
                strings: [1, 6, 1],
              },
              {
                recommended: true,
                strings: [1, 4, 3],
              },
              {
                recommended: true,
                strings: [8, 6, 6],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    title: "Tuning: G-H-D",
    tuning: ["G", "H", "D"],
    data: [
      {
        title: "C",
        chords: [
          {
            title: "C",
            notes: ["C", "E", "G"],
            variants: [
              {
                recommended: true,
                strings: [5, 5, 5],
              },
              {
                recommended: false,
                strings: [5, 8, 2],
              },
              {
                recommended: false,
                strings: [9, 1, 5],
              },
              {
                recommended: true,
                strings: [9, 8, 10],
              },
              {
                recommended: true,
                strings: [0, 1, 2],
              },
            ],
          },
          {
            title: "Cm",
            notes: ["C", "D#", "G"],
            variants: [
              {
                recommended: true,
                strings: [5, 4, 5],
              },
              {
                recommended: false,
                strings: [5, 8, 1],
              },
              {
                recommended: false,
                strings: [8, 1, 5],
              },
              {
                recommended: true,
                strings: [8, 8, 10],
              },
              {
                recommended: true,
                strings: [0, 1, 1],
              },
            ],
          },
          {
            title: "C7",
            notes: ["C", "E", "A#"],
            variants: [
              {
                recommended: true,
                strings: [5, 5, 8],
              },
              {
                recommended: false,
                strings: [5, 11, 2],
              },
              {
                recommended: false,
                strings: [9, 1, 8],
              },
              {
                recommended: true,
                strings: [9, 11, 10],
              },
              {
                recommended: true,
                strings: [3, 1, 2],
              },
            ],
          },
          {
            title: "Cm7",
            notes: ["C", "D#", "A#"],
            variants: [
              {
                recommended: false,
                strings: [5, 4, 8],
              },
              {
                recommended: false,
                strings: [5, 11, 1],
              },
              {
                recommended: false,
                strings: [8, 1, 8],
              },
              {
                recommended: true,
                strings: [8, 11, 10],
              },
              {
                recommended: true,
                strings: [3, 1, 1],
              },
            ],
          },
          {
            title: "Cb",
            notes: ["B", "D#", "F#"],
            variants: [
              {
                recommended: true,
                strings: [4, 4, 4],
              },
              {
                recommended: false,
                strings: [4, 7, 1],
              },
              {
                recommended: false,
                strings: [8, 12, 4],
              },
              {
                recommended: true,
                strings: [8, 7, 9],
              },
              {
                recommended: false,
                strings: [11, 12, 1],
              },
            ],
          },
          {
            title: "Cbm",
            notes: ["B", "D", "F#"],
            variants: [
              {
                recommended: true,
                strings: [4, 3, 4],
              },
              {
                recommended: false,
                strings: [4, 7, 0],
              },
              {
                recommended: false,
                strings: [7, 12, 4],
              },
              {
                recommended: true,
                strings: [7, 7, 9],
              },
              {
                recommended: false,
                strings: [11, 12, 0],
              },
            ],
          },
          {
            title: "Cb7",
            notes: ["B", "D#", "A"],
            variants: [
              {
                recommended: true,
                strings: [4, 4, 7],
              },
              {
                recommended: false,
                strings: [4, 10, 1],
              },
              {
                recommended: false,
                strings: [8, 12, 7],
              },
              {
                recommended: true,
                strings: [8, 10, 9],
              },
              {
                recommended: false,
                strings: [2, 12, 1],
              },
            ],
          },
          {
            title: "Cbm7",
            notes: ["B", "D", "A"],
            variants: [
              {
                recommended: false,
                strings: [4, 3, 7],
              },
              {
                recommended: false,
                strings: [4, 10, 0],
              },
              {
                recommended: false,
                strings: [7, 12, 7],
              },
              {
                recommended: true,
                strings: [7, 10, 9],
              },
              {
                recommended: false,
                strings: [2, 12, 0],
              },
            ],
          },
        ],
      },
      {
        title: "D",
        chords: [
          {
            title: "D",
            notes: ["D", "F#", "A"],
            variants: [
              {
                recommended: true,
                strings: [7, 7, 7],
              },
              {
                recommended: false,
                strings: [7, 10, 4],
              },
              {
                recommended: false,
                strings: [11, 3, 7],
              },
              {
                recommended: false,
                strings: [11, 10, 0],
              },
              {
                recommended: true,
                strings: [2, 3, 4],
              },
            ],
          },
          {
            title: "Dm",
            notes: ["D", "F", "A"],
            variants: [
              {
                recommended: true,
                strings: [7, 6, 7],
              },
              {
                recommended: false,
                strings: [7, 10, 3],
              },
              {
                recommended: false,
                strings: [10, 3, 7],
              },
              {
                recommended: false,
                strings: [10, 10, 0],
              },
              {
                recommended: true,
                strings: [2, 3, 3],
              },
            ],
          },
          {
            title: "D7",
            notes: ["D", "F#", "C"],
            variants: [
              {
                recommended: true,
                strings: [7, 7, 10],
              },
              {
                recommended: false,
                strings: [7, 1, 4],
              },
              {
                recommended: false,
                strings: [11, 3, 10],
              },
              {
                recommended: false,
                strings: [11, 1, 0],
              },
              {
                recommended: true,
                strings: [5, 3, 4],
              },
            ],
          },
          {
            title: "Dm7",
            notes: ["D", "F", "C"],
            variants: [
              {
                recommended: false,
                strings: [7, 6, 10],
              },
              {
                recommended: false,
                strings: [7, 1, 3],
              },
              {
                recommended: false,
                strings: [10, 3, 10],
              },
              {
                recommended: false,
                strings: [10, 1, 0],
              },
              {
                recommended: true,
                strings: [5, 3, 3],
              },
            ],
          },
          {
            title: "Db",
            notes: ["C#", "F", "G#"],
            variants: [
              {
                recommended: true,
                strings: [6, 6, 6],
              },
              {
                recommended: false,
                strings: [6, 9, 3],
              },
              {
                recommended: false,
                strings: [10, 2, 6],
              },
              {
                recommended: true,
                strings: [10, 9, 11],
              },
              {
                recommended: true,
                strings: [1, 2, 3],
              },
            ],
          },
          {
            title: "Dbm",
            notes: ["C#", "E", "G#"],
            variants: [
              {
                recommended: true,
                strings: [6, 5, 6],
              },
              {
                recommended: false,
                strings: [6, 9, 2],
              },
              {
                recommended: false,
                strings: [9, 2, 6],
              },
              {
                recommended: true,
                strings: [9, 9, 11],
              },
              {
                recommended: true,
                strings: [1, 2, 2],
              },
            ],
          },
          {
            title: "Db7",
            notes: ["C#", "F", "B"],
            variants: [
              {
                recommended: true,
                strings: [6, 6, 9],
              },
              {
                recommended: false,
                strings: [6, 12, 3],
              },
              {
                recommended: false,
                strings: [10, 2, 9],
              },
              {
                recommended: true,
                strings: [10, 12, 11],
              },
              {
                recommended: true,
                strings: [4, 2, 3],
              },
            ],
          },
          {
            title: "Dbm7",
            notes: ["C#", "E", "B"],
            variants: [
              {
                recommended: false,
                strings: [6, 5, 9],
              },
              {
                recommended: false,
                strings: [6, 12, 2],
              },
              {
                recommended: false,
                strings: [9, 2, 9],
              },
              {
                recommended: true,
                strings: [9, 12, 11],
              },
              {
                recommended: true,
                strings: [4, 2, 2],
              },
            ],
          },
        ],
      },
      {
        title: "E",
        chords: [
          {
            title: "E",
            notes: ["E", "G#", "B"],
            variants: [
              {
                recommended: true,
                strings: [9, 9, 9],
              },
              {
                recommended: false,
                strings: [9, 12, 6],
              },
              {
                recommended: false,
                strings: [1, 5, 9],
              },
              {
                recommended: false,
                strings: [1, 12, 2],
              },
              {
                recommended: true,
                strings: [4, 5, 6],
              },
            ],
          },
          {
            title: "Em",
            notes: ["E", "G", "B"],
            variants: [
              {
                recommended: true,
                strings: [9, 8, 9],
              },
              {
                recommended: false,
                strings: [9, 12, 5],
              },
              {
                recommended: false,
                strings: [0, 5, 9],
              },
              {
                recommended: false,
                strings: [0, 12, 2],
              },
              {
                recommended: true,
                strings: [4, 5, 5],
              },
            ],
          },
          {
            title: "E7",
            notes: ["E", "G#", "D"],
            variants: [
              {
                recommended: false,
                strings: [9, 9, 0],
              },
              {
                recommended: false,
                strings: [9, 3, 6],
              },
              {
                recommended: false,
                strings: [1, 5, 0],
              },
              {
                recommended: true,
                strings: [1, 3, 2],
              },
              {
                recommended: true,
                strings: [7, 5, 6],
              },
            ],
          },
          {
            title: "Em7",
            notes: ["E", "G", "D"],
            variants: [
              {
                recommended: false,
                strings: [9, 8, 0],
              },
              {
                recommended: false,
                strings: [9, 3, 5],
              },
              {
                recommended: false,
                strings: [0, 5, 0],
              },
              {
                recommended: true,
                strings: [0, 3, 2],
              },
              {
                recommended: true,
                strings: [7, 5, 5],
              },
            ],
          },
          {
            title: "Eb",
            notes: ["D#", "G", "A#"],
            variants: [
              {
                recommended: true,
                strings: [8, 8, 8],
              },
              {
                recommended: false,
                strings: [8, 11, 5],
              },
              {
                recommended: false,
                strings: [0, 4, 8],
              },
              {
                recommended: false,
                strings: [0, 11, 1],
              },
              {
                recommended: true,
                strings: [3, 4, 5],
              },
            ],
          },
          {
            title: "Ebm",
            notes: ["D#", "F#", "A#"],
            variants: [
              {
                recommended: true,
                strings: [8, 7, 8],
              },
              {
                recommended: false,
                strings: [8, 11, 4],
              },
              {
                recommended: false,
                strings: [11, 4, 8],
              },
              {
                recommended: false,
                strings: [11, 11, 1],
              },
              {
                recommended: true,
                strings: [3, 4, 4],
              },
            ],
          },
          {
            title: "Eb7",
            notes: ["D#", "G", "C#"],
            variants: [
              {
                recommended: true,
                strings: [8, 8, 11],
              },
              {
                recommended: false,
                strings: [8, 2, 5],
              },
              {
                recommended: false,
                strings: [0, 4, 11],
              },
              {
                recommended: true,
                strings: [0, 2, 1],
              },
              {
                recommended: true,
                strings: [6, 4, 5],
              },
            ],
          },
          {
            title: "Ebm7",
            notes: ["D#", "F#", "C#"],
            variants: [
              {
                recommended: false,
                strings: [8, 7, 11],
              },
              {
                recommended: false,
                strings: [8, 2, 4],
              },
              {
                recommended: false,
                strings: [11, 4, 11],
              },
              {
                recommended: false,
                strings: [11, 2, 1],
              },
              {
                recommended: true,
                strings: [6, 4, 4],
              },
            ],
          },
        ],
      },
      {
        title: "F",
        chords: [
          {
            title: "F",
            notes: ["F", "A", "C"],
            variants: [
              {
                recommended: true,
                strings: [10, 10, 10],
              },
              {
                recommended: false,
                strings: [10, 1, 7],
              },
              {
                recommended: false,
                strings: [2, 6, 10],
              },
              {
                recommended: true,
                strings: [2, 1, 3],
              },
              {
                recommended: true,
                strings: [5, 6, 7],
              },
            ],
          },
          {
            title: "Fm",
            notes: ["F", "G#", "C"],
            variants: [
              {
                recommended: true,
                strings: [10, 9, 10],
              },
              {
                recommended: false,
                strings: [10, 1, 6],
              },
              {
                recommended: false,
                strings: [1, 6, 10],
              },
              {
                recommended: true,
                strings: [1, 1, 3],
              },
              {
                recommended: true,
                strings: [5, 6, 6],
              },
            ],
          },
          {
            title: "F7",
            notes: ["F", "A", "D#"],
            variants: [
              {
                recommended: false,
                strings: [10, 10, 1],
              },
              {
                recommended: false,
                strings: [10, 4, 7],
              },
              {
                recommended: false,
                strings: [2, 6, 1],
              },
              {
                recommended: true,
                strings: [2, 4, 3],
              },
              {
                recommended: true,
                strings: [8, 6, 7],
              },
            ],
          },
          {
            title: "Fm7",
            notes: ["F", "G#", "D#"],
            variants: [
              {
                recommended: false,
                strings: [10, 9, 1],
              },
              {
                recommended: false,
                strings: [10, 4, 6],
              },
              {
                recommended: false,
                strings: [1, 6, 1],
              },
              {
                recommended: true,
                strings: [1, 4, 3],
              },
              {
                recommended: true,
                strings: [8, 6, 6],
              },
            ],
          },
          {
            title: "Fb",
            notes: ["E", "G#", "B"],
            variants: [
              {
                recommended: true,
                strings: [9, 9, 9],
              },
              {
                recommended: false,
                strings: [9, 12, 6],
              },
              {
                recommended: false,
                strings: [1, 5, 9],
              },
              {
                recommended: false,
                strings: [1, 12, 2],
              },
              {
                recommended: true,
                strings: [4, 5, 6],
              },
            ],
          },
          {
            title: "Fbm",
            notes: ["E", "G", "B"],
            variants: [
              {
                recommended: true,
                strings: [9, 8, 9],
              },
              {
                recommended: false,
                strings: [9, 12, 5],
              },
              {
                recommended: false,
                strings: [0, 5, 9],
              },
              {
                recommended: false,
                strings: [0, 12, 2],
              },
              {
                recommended: true,
                strings: [4, 5, 5],
              },
            ],
          },
          {
            title: "Fb7",
            notes: ["E", "G#", "D"],
            variants: [
              {
                recommended: false,
                strings: [9, 9, 0],
              },
              {
                recommended: false,
                strings: [9, 3, 6],
              },
              {
                recommended: false,
                strings: [1, 5, 0],
              },
              {
                recommended: true,
                strings: [1, 3, 2],
              },
              {
                recommended: true,
                strings: [7, 5, 6],
              },
            ],
          },
          {
            title: "Fbm7",
            notes: ["E", "G", "D"],
            variants: [
              {
                recommended: false,
                strings: [9, 8, 0],
              },
              {
                recommended: false,
                strings: [9, 3, 5],
              },
              {
                recommended: false,
                strings: [0, 5, 0],
              },
              {
                recommended: true,
                strings: [0, 3, 2],
              },
              {
                recommended: true,
                strings: [7, 5, 5],
              },
            ],
          },
        ],
      },
      {
        title: "G",
        chords: [
          {
            title: "G",
            notes: ["G", "B", "D"],
            variants: [
              {
                recommended: false,
                strings: [0, 12, 0],
              },
              {
                recommended: false,
                strings: [0, 3, 9],
              },
              {
                recommended: false,
                strings: [4, 8, 0],
              },
              {
                recommended: true,
                strings: [4, 3, 5],
              },
              {
                recommended: true,
                strings: [7, 8, 9],
              },
            ],
          },
          {
            title: "Gm",
            notes: ["G", "A#", "D"],
            variants: [
              {
                recommended: false,
                strings: [0, 11, 0],
              },
              {
                recommended: false,
                strings: [0, 3, 8],
              },
              {
                recommended: false,
                strings: [3, 8, 0],
              },
              {
                recommended: true,
                strings: [3, 3, 5],
              },
              {
                recommended: true,
                strings: [7, 8, 8],
              },
            ],
          },
          {
            title: "G7",
            notes: ["G", "B", "F"],
            variants: [
              {
                recommended: false,
                strings: [0, 12, 3],
              },
              {
                recommended: false,
                strings: [0, 6, 9],
              },
              {
                recommended: false,
                strings: [4, 8, 3],
              },
              {
                recommended: true,
                strings: [4, 6, 5],
              },
              {
                recommended: true,
                strings: [10, 8, 9],
              },
            ],
          },
          {
            title: "Gm7",
            notes: ["G", "A#", "F"],
            variants: [
              {
                recommended: false,
                strings: [0, 11, 3],
              },
              {
                recommended: false,
                strings: [0, 6, 8],
              },
              {
                recommended: false,
                strings: [3, 8, 3],
              },
              {
                recommended: true,
                strings: [3, 6, 5],
              },
              {
                recommended: true,
                strings: [10, 8, 8],
              },
            ],
          },
          {
            title: "Gb",
            notes: ["F#", "A#", "C#"],
            variants: [
              {
                recommended: true,
                strings: [11, 11, 11],
              },
              {
                recommended: false,
                strings: [11, 2, 8],
              },
              {
                recommended: false,
                strings: [3, 7, 11],
              },
              {
                recommended: true,
                strings: [3, 2, 4],
              },
              {
                recommended: true,
                strings: [6, 7, 8],
              },
            ],
          },
          {
            title: "Gbm",
            notes: ["F#", "A", "C#"],
            variants: [
              {
                recommended: true,
                strings: [11, 10, 11],
              },
              {
                recommended: false,
                strings: [11, 2, 7],
              },
              {
                recommended: false,
                strings: [2, 7, 11],
              },
              {
                recommended: true,
                strings: [2, 2, 4],
              },
              {
                recommended: true,
                strings: [6, 7, 7],
              },
            ],
          },
          {
            title: "Gb7",
            notes: ["F#", "A#", "E"],
            variants: [
              {
                recommended: false,
                strings: [11, 11, 2],
              },
              {
                recommended: false,
                strings: [11, 5, 8],
              },
              {
                recommended: false,
                strings: [3, 7, 2],
              },
              {
                recommended: true,
                strings: [3, 5, 4],
              },
              {
                recommended: true,
                strings: [9, 7, 8],
              },
            ],
          },
          {
            title: "Gbm7",
            notes: ["F#", "A", "E"],
            variants: [
              {
                recommended: false,
                strings: [11, 10, 2],
              },
              {
                recommended: false,
                strings: [11, 5, 7],
              },
              {
                recommended: false,
                strings: [2, 7, 2],
              },
              {
                recommended: true,
                strings: [2, 5, 4],
              },
              {
                recommended: true,
                strings: [9, 7, 7],
              },
            ],
          },
        ],
      },
      {
        title: "A",
        chords: [
          {
            title: "A",
            notes: ["A", "C#", "E"],
            variants: [
              {
                recommended: true,
                strings: [2, 2, 2],
              },
              {
                recommended: false,
                strings: [2, 5, 11],
              },
              {
                recommended: false,
                strings: [6, 10, 2],
              },
              {
                recommended: true,
                strings: [6, 5, 7],
              },
              {
                recommended: true,
                strings: [9, 10, 11],
              },
            ],
          },
          {
            title: "Am",
            notes: ["A", "C", "E"],
            variants: [
              {
                recommended: true,
                strings: [2, 1, 2],
              },
              {
                recommended: false,
                strings: [2, 5, 10],
              },
              {
                recommended: false,
                strings: [5, 10, 2],
              },
              {
                recommended: true,
                strings: [5, 5, 7],
              },
              {
                recommended: true,
                strings: [9, 10, 10],
              },
            ],
          },
          {
            title: "A7",
            notes: ["A", "C#", "G"],
            variants: [
              {
                recommended: true,
                strings: [2, 2, 5],
              },
              {
                recommended: false,
                strings: [2, 8, 11],
              },
              {
                recommended: false,
                strings: [6, 10, 5],
              },
              {
                recommended: true,
                strings: [6, 8, 7],
              },
              {
                recommended: false,
                strings: [0, 10, 11],
              },
            ],
          },
          {
            title: "Am7",
            notes: ["A", "C", "G"],
            variants: [
              {
                recommended: false,
                strings: [2, 1, 5],
              },
              {
                recommended: false,
                strings: [2, 8, 10],
              },
              {
                recommended: false,
                strings: [5, 10, 5],
              },
              {
                recommended: true,
                strings: [5, 8, 7],
              },
              {
                recommended: false,
                strings: [0, 10, 10],
              },
            ],
          },
          {
            title: "Ab",
            notes: ["G#", "C", "D#"],
            variants: [
              {
                recommended: true,
                strings: [1, 1, 1],
              },
              {
                recommended: false,
                strings: [1, 4, 10],
              },
              {
                recommended: false,
                strings: [5, 9, 1],
              },
              {
                recommended: true,
                strings: [5, 4, 6],
              },
              {
                recommended: true,
                strings: [8, 9, 10],
              },
            ],
          },
          {
            title: "Abm",
            notes: ["G#", "B", "D#"],
            variants: [
              {
                recommended: false,
                strings: [1, 12, 1],
              },
              {
                recommended: false,
                strings: [1, 4, 9],
              },
              {
                recommended: false,
                strings: [4, 9, 1],
              },
              {
                recommended: true,
                strings: [4, 4, 6],
              },
              {
                recommended: true,
                strings: [8, 9, 9],
              },
            ],
          },
          {
            title: "Ab7",
            notes: ["G#", "C", "F#"],
            variants: [
              {
                recommended: true,
                strings: [1, 1, 4],
              },
              {
                recommended: false,
                strings: [1, 7, 10],
              },
              {
                recommended: false,
                strings: [5, 9, 4],
              },
              {
                recommended: true,
                strings: [5, 7, 6],
              },
              {
                recommended: true,
                strings: [11, 9, 10],
              },
            ],
          },
          {
            title: "Abm7",
            notes: ["G#", "B", "F#"],
            variants: [
              {
                recommended: false,
                strings: [1, 12, 4],
              },
              {
                recommended: false,
                strings: [1, 7, 9],
              },
              {
                recommended: false,
                strings: [4, 9, 4],
              },
              {
                recommended: true,
                strings: [4, 7, 6],
              },
              {
                recommended: true,
                strings: [11, 9, 9],
              },
            ],
          },
        ],
      },
      {
        title: "B",
        chords: [
          {
            title: "B",
            notes: ["B", "D#", "F#"],
            variants: [
              {
                recommended: true,
                strings: [4, 4, 4],
              },
              {
                recommended: false,
                strings: [4, 7, 1],
              },
              {
                recommended: false,
                strings: [8, 12, 4],
              },
              {
                recommended: true,
                strings: [8, 7, 9],
              },
              {
                recommended: false,
                strings: [11, 12, 1],
              },
            ],
          },
          {
            title: "Bm",
            notes: ["B", "D", "F#"],
            variants: [
              {
                recommended: true,
                strings: [4, 3, 4],
              },
              {
                recommended: false,
                strings: [4, 7, 0],
              },
              {
                recommended: false,
                strings: [7, 12, 4],
              },
              {
                recommended: true,
                strings: [7, 7, 9],
              },
              {
                recommended: false,
                strings: [11, 12, 0],
              },
            ],
          },
          {
            title: "B7",
            notes: ["B", "D#", "A"],
            variants: [
              {
                recommended: true,
                strings: [4, 4, 7],
              },
              {
                recommended: false,
                strings: [4, 10, 1],
              },
              {
                recommended: false,
                strings: [8, 12, 7],
              },
              {
                recommended: true,
                strings: [8, 10, 9],
              },
              {
                recommended: false,
                strings: [2, 12, 1],
              },
            ],
          },
          {
            title: "Bm7",
            notes: ["B", "D", "A"],
            variants: [
              {
                recommended: false,
                strings: [4, 3, 7],
              },
              {
                recommended: false,
                strings: [4, 10, 0],
              },
              {
                recommended: false,
                strings: [7, 12, 7],
              },
              {
                recommended: true,
                strings: [7, 10, 9],
              },
              {
                recommended: false,
                strings: [2, 12, 0],
              },
            ],
          },
          {
            title: "Bb",
            notes: ["A#", "D", "F"],
            variants: [
              {
                recommended: true,
                strings: [3, 3, 3],
              },
              {
                recommended: false,
                strings: [3, 6, 0],
              },
              {
                recommended: false,
                strings: [7, 11, 3],
              },
              {
                recommended: true,
                strings: [7, 6, 8],
              },
              {
                recommended: false,
                strings: [10, 11, 0],
              },
            ],
          },
          {
            title: "Bbm",
            notes: ["A#", "C#", "F"],
            variants: [
              {
                recommended: true,
                strings: [3, 2, 3],
              },
              {
                recommended: false,
                strings: [3, 6, 11],
              },
              {
                recommended: false,
                strings: [6, 11, 3],
              },
              {
                recommended: true,
                strings: [6, 6, 8],
              },
              {
                recommended: true,
                strings: [10, 11, 11],
              },
            ],
          },
          {
            title: "Bb7",
            notes: ["A#", "D", "G#"],
            variants: [
              {
                recommended: true,
                strings: [3, 3, 6],
              },
              {
                recommended: false,
                strings: [3, 9, 0],
              },
              {
                recommended: false,
                strings: [7, 11, 6],
              },
              {
                recommended: true,
                strings: [7, 9, 8],
              },
              {
                recommended: false,
                strings: [1, 11, 0],
              },
            ],
          },
          {
            title: "Bbm7",
            notes: ["A#", "C#", "G#"],
            variants: [
              {
                recommended: false,
                strings: [3, 2, 6],
              },
              {
                recommended: false,
                strings: [3, 9, 11],
              },
              {
                recommended: false,
                strings: [6, 11, 6],
              },
              {
                recommended: true,
                strings: [6, 9, 8],
              },
              {
                recommended: false,
                strings: [1, 11, 11],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    title: "Tuning: D-F#-A",
    tuning: ["D", "F#", "A"],
    data: [
      {
        title: "C",
        chords: [
          {
            title: "C",
            notes: ["C", "E", "G"],
            variants: [
              {
                recommended: true,
                strings: [10, 10, 10],
              },
              {
                recommended: false,
                strings: [10, 1, 7],
              },
              {
                recommended: false,
                strings: [2, 6, 10],
              },
              {
                recommended: true,
                strings: [2, 1, 3],
              },
              {
                recommended: true,
                strings: [5, 6, 7],
              },
            ],
          },
          {
            title: "Cm",
            notes: ["C", "D#", "G"],
            variants: [
              {
                recommended: true,
                strings: [10, 9, 10],
              },
              {
                recommended: false,
                strings: [10, 1, 6],
              },
              {
                recommended: false,
                strings: [1, 6, 10],
              },
              {
                recommended: true,
                strings: [1, 1, 3],
              },
              {
                recommended: true,
                strings: [5, 6, 6],
              },
            ],
          },
          {
            title: "C7",
            notes: ["C", "E", "A#"],
            variants: [
              {
                recommended: false,
                strings: [10, 10, 1],
              },
              {
                recommended: false,
                strings: [10, 4, 7],
              },
              {
                recommended: false,
                strings: [2, 6, 1],
              },
              {
                recommended: true,
                strings: [2, 4, 3],
              },
              {
                recommended: true,
                strings: [8, 6, 7],
              },
            ],
          },
          {
            title: "Cm7",
            notes: ["C", "D#", "A#"],
            variants: [
              {
                recommended: false,
                strings: [10, 9, 1],
              },
              {
                recommended: false,
                strings: [10, 4, 6],
              },
              {
                recommended: false,
                strings: [1, 6, 1],
              },
              {
                recommended: true,
                strings: [1, 4, 3],
              },
              {
                recommended: true,
                strings: [8, 6, 6],
              },
            ],
          },
          {
            title: "Cb",
            notes: ["B", "D#", "F#"],
            variants: [
              {
                recommended: true,
                strings: [9, 9, 9],
              },
              {
                recommended: false,
                strings: [9, 0, 6],
              },
              {
                recommended: false,
                strings: [1, 5, 9],
              },
              {
                recommended: true,
                strings: [1, 0, 2],
              },
              {
                recommended: true,
                strings: [4, 5, 6],
              },
            ],
          },
          {
            title: "Cbm",
            notes: ["B", "D", "F#"],
            variants: [
              {
                recommended: true,
                strings: [9, 8, 9],
              },
              {
                recommended: false,
                strings: [9, 0, 5],
              },
              {
                recommended: false,
                strings: [0, 5, 9],
              },
              {
                recommended: true,
                strings: [0, 0, 2],
              },
              {
                recommended: true,
                strings: [4, 5, 5],
              },
            ],
          },
          {
            title: "Cb7",
            notes: ["B", "D#", "A"],
            variants: [
              {
                recommended: false,
                strings: [9, 9, 0],
              },
              {
                recommended: false,
                strings: [9, 3, 6],
              },
              {
                recommended: false,
                strings: [1, 5, 0],
              },
              {
                recommended: true,
                strings: [1, 3, 2],
              },
              {
                recommended: true,
                strings: [7, 5, 6],
              },
            ],
          },
          {
            title: "Cbm7",
            notes: ["B", "D", "A"],
            variants: [
              {
                recommended: false,
                strings: [9, 8, 0],
              },
              {
                recommended: false,
                strings: [9, 3, 5],
              },
              {
                recommended: false,
                strings: [0, 5, 0],
              },
              {
                recommended: true,
                strings: [0, 3, 2],
              },
              {
                recommended: true,
                strings: [7, 5, 5],
              },
            ],
          },
        ],
      },
      {
        title: "D",
        chords: [
          {
            title: "D",
            notes: ["D", "F#", "A"],
            variants: [
              {
                recommended: true,
                strings: [0, 0, 0],
              },
              {
                recommended: false,
                strings: [0, 3, 9],
              },
              {
                recommended: false,
                strings: [4, 8, 0],
              },
              {
                recommended: true,
                strings: [4, 3, 5],
              },
              {
                recommended: true,
                strings: [7, 8, 9],
              },
            ],
          },
          {
            title: "Dm",
            notes: ["D", "F", "A"],
            variants: [
              {
                recommended: false,
                strings: [0, 11, 0],
              },
              {
                recommended: false,
                strings: [0, 3, 8],
              },
              {
                recommended: false,
                strings: [3, 8, 0],
              },
              {
                recommended: true,
                strings: [3, 3, 5],
              },
              {
                recommended: true,
                strings: [7, 8, 8],
              },
            ],
          },
          {
            title: "D7",
            notes: ["D", "F#", "C"],
            variants: [
              {
                recommended: true,
                strings: [0, 0, 3],
              },
              {
                recommended: false,
                strings: [0, 6, 9],
              },
              {
                recommended: false,
                strings: [4, 8, 3],
              },
              {
                recommended: true,
                strings: [4, 6, 5],
              },
              {
                recommended: true,
                strings: [10, 8, 9],
              },
            ],
          },
          {
            title: "Dm7",
            notes: ["D", "F", "C"],
            variants: [
              {
                recommended: false,
                strings: [0, 11, 3],
              },
              {
                recommended: false,
                strings: [0, 6, 8],
              },
              {
                recommended: false,
                strings: [3, 8, 3],
              },
              {
                recommended: true,
                strings: [3, 6, 5],
              },
              {
                recommended: true,
                strings: [10, 8, 8],
              },
            ],
          },
          {
            title: "Db",
            notes: ["C#", "F", "G#"],
            variants: [
              {
                recommended: true,
                strings: [11, 11, 11],
              },
              {
                recommended: false,
                strings: [11, 2, 8],
              },
              {
                recommended: false,
                strings: [3, 7, 11],
              },
              {
                recommended: true,
                strings: [3, 2, 4],
              },
              {
                recommended: true,
                strings: [6, 7, 8],
              },
            ],
          },
          {
            title: "Dbm",
            notes: ["C#", "E", "G#"],
            variants: [
              {
                recommended: true,
                strings: [11, 10, 11],
              },
              {
                recommended: false,
                strings: [11, 2, 7],
              },
              {
                recommended: false,
                strings: [2, 7, 11],
              },
              {
                recommended: true,
                strings: [2, 2, 4],
              },
              {
                recommended: true,
                strings: [6, 7, 7],
              },
            ],
          },
          {
            title: "Db7",
            notes: ["C#", "F", "B"],
            variants: [
              {
                recommended: false,
                strings: [11, 11, 2],
              },
              {
                recommended: false,
                strings: [11, 5, 8],
              },
              {
                recommended: false,
                strings: [3, 7, 2],
              },
              {
                recommended: true,
                strings: [3, 5, 4],
              },
              {
                recommended: true,
                strings: [9, 7, 8],
              },
            ],
          },
          {
            title: "Dbm7",
            notes: ["C#", "E", "B"],
            variants: [
              {
                recommended: false,
                strings: [11, 10, 2],
              },
              {
                recommended: false,
                strings: [11, 5, 7],
              },
              {
                recommended: false,
                strings: [2, 7, 2],
              },
              {
                recommended: true,
                strings: [2, 5, 4],
              },
              {
                recommended: true,
                strings: [9, 7, 7],
              },
            ],
          },
        ],
      },
      {
        title: "E",
        chords: [
          {
            title: "E",
            notes: ["E", "G#", "B"],
            variants: [
              {
                recommended: true,
                strings: [2, 2, 2],
              },
              {
                recommended: false,
                strings: [2, 5, 11],
              },
              {
                recommended: false,
                strings: [6, 10, 2],
              },
              {
                recommended: true,
                strings: [6, 5, 7],
              },
              {
                recommended: true,
                strings: [9, 10, 11],
              },
            ],
          },
          {
            title: "Em",
            notes: ["E", "G", "B"],
            variants: [
              {
                recommended: true,
                strings: [2, 1, 2],
              },
              {
                recommended: false,
                strings: [2, 5, 10],
              },
              {
                recommended: false,
                strings: [5, 10, 2],
              },
              {
                recommended: true,
                strings: [5, 5, 7],
              },
              {
                recommended: true,
                strings: [9, 10, 10],
              },
            ],
          },
          {
            title: "E7",
            notes: ["E", "G#", "D"],
            variants: [
              {
                recommended: true,
                strings: [2, 2, 5],
              },
              {
                recommended: false,
                strings: [2, 8, 11],
              },
              {
                recommended: false,
                strings: [6, 10, 5],
              },
              {
                recommended: true,
                strings: [6, 8, 7],
              },
              {
                recommended: false,
                strings: [0, 10, 11],
              },
            ],
          },
          {
            title: "Em7",
            notes: ["E", "G", "D"],
            variants: [
              {
                recommended: false,
                strings: [2, 1, 5],
              },
              {
                recommended: false,
                strings: [2, 8, 10],
              },
              {
                recommended: false,
                strings: [5, 10, 5],
              },
              {
                recommended: true,
                strings: [5, 8, 7],
              },
              {
                recommended: false,
                strings: [0, 10, 10],
              },
            ],
          },
          {
            title: "Eb",
            notes: ["D#", "G", "A#"],
            variants: [
              {
                recommended: true,
                strings: [1, 1, 1],
              },
              {
                recommended: false,
                strings: [1, 4, 10],
              },
              {
                recommended: false,
                strings: [5, 9, 1],
              },
              {
                recommended: true,
                strings: [5, 4, 6],
              },
              {
                recommended: true,
                strings: [8, 9, 10],
              },
            ],
          },
          {
            title: "Ebm",
            notes: ["D#", "F#", "A#"],
            variants: [
              {
                recommended: true,
                strings: [1, 0, 1],
              },
              {
                recommended: false,
                strings: [1, 4, 9],
              },
              {
                recommended: false,
                strings: [4, 9, 1],
              },
              {
                recommended: true,
                strings: [4, 4, 6],
              },
              {
                recommended: true,
                strings: [8, 9, 9],
              },
            ],
          },
          {
            title: "Eb7",
            notes: ["D#", "G", "C#"],
            variants: [
              {
                recommended: true,
                strings: [1, 1, 4],
              },
              {
                recommended: false,
                strings: [1, 7, 10],
              },
              {
                recommended: false,
                strings: [5, 9, 4],
              },
              {
                recommended: true,
                strings: [5, 7, 6],
              },
              {
                recommended: true,
                strings: [11, 9, 10],
              },
            ],
          },
          {
            title: "Ebm7",
            notes: ["D#", "F#", "C#"],
            variants: [
              {
                recommended: false,
                strings: [1, 0, 4],
              },
              {
                recommended: false,
                strings: [1, 7, 9],
              },
              {
                recommended: false,
                strings: [4, 9, 4],
              },
              {
                recommended: true,
                strings: [4, 7, 6],
              },
              {
                recommended: true,
                strings: [11, 9, 9],
              },
            ],
          },
        ],
      },
      {
        title: "F",
        chords: [
          {
            title: "F",
            notes: ["F", "A", "C"],
            variants: [
              {
                recommended: true,
                strings: [3, 3, 3],
              },
              {
                recommended: false,
                strings: [3, 6, 0],
              },
              {
                recommended: false,
                strings: [7, 11, 3],
              },
              {
                recommended: true,
                strings: [7, 6, 8],
              },
              {
                recommended: false,
                strings: [10, 11, 0],
              },
            ],
          },
          {
            title: "Fm",
            notes: ["F", "G#", "C"],
            variants: [
              {
                recommended: true,
                strings: [3, 2, 3],
              },
              {
                recommended: false,
                strings: [3, 6, 11],
              },
              {
                recommended: false,
                strings: [6, 11, 3],
              },
              {
                recommended: true,
                strings: [6, 6, 8],
              },
              {
                recommended: true,
                strings: [10, 11, 11],
              },
            ],
          },
          {
            title: "F7",
            notes: ["F", "A", "D#"],
            variants: [
              {
                recommended: true,
                strings: [3, 3, 6],
              },
              {
                recommended: false,
                strings: [3, 9, 0],
              },
              {
                recommended: false,
                strings: [7, 11, 6],
              },
              {
                recommended: true,
                strings: [7, 9, 8],
              },
              {
                recommended: false,
                strings: [1, 11, 0],
              },
            ],
          },
          {
            title: "Fm7",
            notes: ["F", "G#", "D#"],
            variants: [
              {
                recommended: false,
                strings: [3, 2, 6],
              },
              {
                recommended: false,
                strings: [3, 9, 11],
              },
              {
                recommended: false,
                strings: [6, 11, 6],
              },
              {
                recommended: true,
                strings: [6, 9, 8],
              },
              {
                recommended: false,
                strings: [1, 11, 11],
              },
            ],
          },
          {
            title: "Fb",
            notes: ["E", "G#", "B"],
            variants: [
              {
                recommended: true,
                strings: [2, 2, 2],
              },
              {
                recommended: false,
                strings: [2, 5, 11],
              },
              {
                recommended: false,
                strings: [6, 10, 2],
              },
              {
                recommended: true,
                strings: [6, 5, 7],
              },
              {
                recommended: true,
                strings: [9, 10, 11],
              },
            ],
          },
          {
            title: "Fbm",
            notes: ["E", "G", "B"],
            variants: [
              {
                recommended: true,
                strings: [2, 1, 2],
              },
              {
                recommended: false,
                strings: [2, 5, 10],
              },
              {
                recommended: false,
                strings: [5, 10, 2],
              },
              {
                recommended: true,
                strings: [5, 5, 7],
              },
              {
                recommended: true,
                strings: [9, 10, 10],
              },
            ],
          },
          {
            title: "Fb7",
            notes: ["E", "G#", "D"],
            variants: [
              {
                recommended: true,
                strings: [2, 2, 5],
              },
              {
                recommended: false,
                strings: [2, 8, 11],
              },
              {
                recommended: false,
                strings: [6, 10, 5],
              },
              {
                recommended: true,
                strings: [6, 8, 7],
              },
              {
                recommended: false,
                strings: [0, 10, 11],
              },
            ],
          },
          {
            title: "Fbm7",
            notes: ["E", "G", "D"],
            variants: [
              {
                recommended: false,
                strings: [2, 1, 5],
              },
              {
                recommended: false,
                strings: [2, 8, 10],
              },
              {
                recommended: false,
                strings: [5, 10, 5],
              },
              {
                recommended: true,
                strings: [5, 8, 7],
              },
              {
                recommended: false,
                strings: [0, 10, 10],
              },
            ],
          },
        ],
      },
      {
        title: "G",
        chords: [
          {
            title: "G",
            notes: ["G", "B", "D"],
            variants: [
              {
                recommended: true,
                strings: [5, 5, 5],
              },
              {
                recommended: false,
                strings: [5, 8, 2],
              },
              {
                recommended: false,
                strings: [9, 1, 5],
              },
              {
                recommended: true,
                strings: [9, 8, 10],
              },
              {
                recommended: true,
                strings: [0, 1, 2],
              },
            ],
          },
          {
            title: "Gm",
            notes: ["G", "A#", "D"],
            variants: [
              {
                recommended: true,
                strings: [5, 4, 5],
              },
              {
                recommended: false,
                strings: [5, 8, 1],
              },
              {
                recommended: false,
                strings: [8, 1, 5],
              },
              {
                recommended: true,
                strings: [8, 8, 10],
              },
              {
                recommended: true,
                strings: [0, 1, 1],
              },
            ],
          },
          {
            title: "G7",
            notes: ["G", "B", "F"],
            variants: [
              {
                recommended: true,
                strings: [5, 5, 8],
              },
              {
                recommended: false,
                strings: [5, 11, 2],
              },
              {
                recommended: false,
                strings: [9, 1, 8],
              },
              {
                recommended: true,
                strings: [9, 11, 10],
              },
              {
                recommended: true,
                strings: [3, 1, 2],
              },
            ],
          },
          {
            title: "Gm7",
            notes: ["G", "A#", "F"],
            variants: [
              {
                recommended: false,
                strings: [5, 4, 8],
              },
              {
                recommended: false,
                strings: [5, 11, 1],
              },
              {
                recommended: false,
                strings: [8, 1, 8],
              },
              {
                recommended: true,
                strings: [8, 11, 10],
              },
              {
                recommended: true,
                strings: [3, 1, 1],
              },
            ],
          },
          {
            title: "Gb",
            notes: ["F#", "A#", "C#"],
            variants: [
              {
                recommended: true,
                strings: [4, 4, 4],
              },
              {
                recommended: false,
                strings: [4, 7, 1],
              },
              {
                recommended: false,
                strings: [8, 0, 4],
              },
              {
                recommended: true,
                strings: [8, 7, 9],
              },
              {
                recommended: false,
                strings: [11, 0, 1],
              },
            ],
          },
          {
            title: "Gbm",
            notes: ["F#", "A", "C#"],
            variants: [
              {
                recommended: true,
                strings: [4, 3, 4],
              },
              {
                recommended: false,
                strings: [4, 7, 0],
              },
              {
                recommended: false,
                strings: [7, 0, 4],
              },
              {
                recommended: true,
                strings: [7, 7, 9],
              },
              {
                recommended: false,
                strings: [11, 0, 0],
              },
            ],
          },
          {
            title: "Gb7",
            notes: ["F#", "A#", "E"],
            variants: [
              {
                recommended: true,
                strings: [4, 4, 7],
              },
              {
                recommended: false,
                strings: [4, 10, 1],
              },
              {
                recommended: false,
                strings: [8, 0, 7],
              },
              {
                recommended: true,
                strings: [8, 10, 9],
              },
              {
                recommended: true,
                strings: [2, 0, 1],
              },
            ],
          },
          {
            title: "Gbm7",
            notes: ["F#", "A", "E"],
            variants: [
              {
                recommended: false,
                strings: [4, 3, 7],
              },
              {
                recommended: false,
                strings: [4, 10, 0],
              },
              {
                recommended: false,
                strings: [7, 0, 7],
              },
              {
                recommended: true,
                strings: [7, 10, 9],
              },
              {
                recommended: true,
                strings: [2, 0, 0],
              },
            ],
          },
        ],
      },
      {
        title: "A",
        chords: [
          {
            title: "A",
            notes: ["A", "C#", "E"],
            variants: [
              {
                recommended: true,
                strings: [7, 7, 7],
              },
              {
                recommended: false,
                strings: [7, 10, 4],
              },
              {
                recommended: false,
                strings: [11, 3, 7],
              },
              {
                recommended: false,
                strings: [11, 10, 0],
              },
              {
                recommended: true,
                strings: [2, 3, 4],
              },
            ],
          },
          {
            title: "Am",
            notes: ["A", "C", "E"],
            variants: [
              {
                recommended: true,
                strings: [7, 6, 7],
              },
              {
                recommended: false,
                strings: [7, 10, 3],
              },
              {
                recommended: false,
                strings: [10, 3, 7],
              },
              {
                recommended: false,
                strings: [10, 10, 0],
              },
              {
                recommended: true,
                strings: [2, 3, 3],
              },
            ],
          },
          {
            title: "A7",
            notes: ["A", "C#", "G"],
            variants: [
              {
                recommended: true,
                strings: [7, 7, 10],
              },
              {
                recommended: false,
                strings: [7, 1, 4],
              },
              {
                recommended: false,
                strings: [11, 3, 10],
              },
              {
                recommended: false,
                strings: [11, 1, 0],
              },
              {
                recommended: true,
                strings: [5, 3, 4],
              },
            ],
          },
          {
            title: "Am7",
            notes: ["A", "C", "G"],
            variants: [
              {
                recommended: false,
                strings: [7, 6, 10],
              },
              {
                recommended: false,
                strings: [7, 1, 3],
              },
              {
                recommended: false,
                strings: [10, 3, 10],
              },
              {
                recommended: false,
                strings: [10, 1, 0],
              },
              {
                recommended: true,
                strings: [5, 3, 3],
              },
            ],
          },
          {
            title: "Ab",
            notes: ["G#", "C", "D#"],
            variants: [
              {
                recommended: true,
                strings: [6, 6, 6],
              },
              {
                recommended: false,
                strings: [6, 9, 3],
              },
              {
                recommended: false,
                strings: [10, 2, 6],
              },
              {
                recommended: true,
                strings: [10, 9, 11],
              },
              {
                recommended: true,
                strings: [1, 2, 3],
              },
            ],
          },
          {
            title: "Abm",
            notes: ["G#", "B", "D#"],
            variants: [
              {
                recommended: true,
                strings: [6, 5, 6],
              },
              {
                recommended: false,
                strings: [6, 9, 2],
              },
              {
                recommended: false,
                strings: [9, 2, 6],
              },
              {
                recommended: true,
                strings: [9, 9, 11],
              },
              {
                recommended: true,
                strings: [1, 2, 2],
              },
            ],
          },
          {
            title: "Ab7",
            notes: ["G#", "C", "F#"],
            variants: [
              {
                recommended: true,
                strings: [6, 6, 9],
              },
              {
                recommended: false,
                strings: [6, 0, 3],
              },
              {
                recommended: false,
                strings: [10, 2, 9],
              },
              {
                recommended: false,
                strings: [10, 0, 11],
              },
              {
                recommended: true,
                strings: [4, 2, 3],
              },
            ],
          },
          {
            title: "Abm7",
            notes: ["G#", "B", "F#"],
            variants: [
              {
                recommended: false,
                strings: [6, 5, 9],
              },
              {
                recommended: false,
                strings: [6, 0, 2],
              },
              {
                recommended: false,
                strings: [9, 2, 9],
              },
              {
                recommended: false,
                strings: [9, 0, 11],
              },
              {
                recommended: true,
                strings: [4, 2, 2],
              },
            ],
          },
        ],
      },
      {
        title: "B",
        chords: [
          {
            title: "B",
            notes: ["B", "D#", "F#"],
            variants: [
              {
                recommended: true,
                strings: [9, 9, 9],
              },
              {
                recommended: false,
                strings: [9, 0, 6],
              },
              {
                recommended: false,
                strings: [1, 5, 9],
              },
              {
                recommended: true,
                strings: [1, 0, 2],
              },
              {
                recommended: true,
                strings: [4, 5, 6],
              },
            ],
          },
          {
            title: "Bm",
            notes: ["B", "D", "F#"],
            variants: [
              {
                recommended: true,
                strings: [9, 8, 9],
              },
              {
                recommended: false,
                strings: [9, 0, 5],
              },
              {
                recommended: false,
                strings: [0, 5, 9],
              },
              {
                recommended: true,
                strings: [0, 0, 2],
              },
              {
                recommended: true,
                strings: [4, 5, 5],
              },
            ],
          },
          {
            title: "B7",
            notes: ["B", "D#", "A"],
            variants: [
              {
                recommended: false,
                strings: [9, 9, 0],
              },
              {
                recommended: false,
                strings: [9, 3, 6],
              },
              {
                recommended: false,
                strings: [1, 5, 0],
              },
              {
                recommended: true,
                strings: [1, 3, 2],
              },
              {
                recommended: true,
                strings: [7, 5, 6],
              },
            ],
          },
          {
            title: "Bm7",
            notes: ["B", "D", "A"],
            variants: [
              {
                recommended: false,
                strings: [9, 8, 0],
              },
              {
                recommended: false,
                strings: [9, 3, 5],
              },
              {
                recommended: false,
                strings: [0, 5, 0],
              },
              {
                recommended: true,
                strings: [0, 3, 2],
              },
              {
                recommended: true,
                strings: [7, 5, 5],
              },
            ],
          },
          {
            title: "Bb",
            notes: ["A#", "D", "F"],
            variants: [
              {
                recommended: true,
                strings: [8, 8, 8],
              },
              {
                recommended: false,
                strings: [8, 11, 5],
              },
              {
                recommended: false,
                strings: [0, 4, 8],
              },
              {
                recommended: false,
                strings: [0, 11, 1],
              },
              {
                recommended: true,
                strings: [3, 4, 5],
              },
            ],
          },
          {
            title: "Bbm",
            notes: ["A#", "C#", "F"],
            variants: [
              {
                recommended: true,
                strings: [8, 7, 8],
              },
              {
                recommended: false,
                strings: [8, 11, 4],
              },
              {
                recommended: false,
                strings: [11, 4, 8],
              },
              {
                recommended: false,
                strings: [11, 11, 1],
              },
              {
                recommended: true,
                strings: [3, 4, 4],
              },
            ],
          },
          {
            title: "Bb7",
            notes: ["A#", "D", "G#"],
            variants: [
              {
                recommended: true,
                strings: [8, 8, 11],
              },
              {
                recommended: false,
                strings: [8, 2, 5],
              },
              {
                recommended: false,
                strings: [0, 4, 11],
              },
              {
                recommended: true,
                strings: [0, 2, 1],
              },
              {
                recommended: true,
                strings: [6, 4, 5],
              },
            ],
          },
          {
            title: "Bbm7",
            notes: ["A#", "C#", "G#"],
            variants: [
              {
                recommended: false,
                strings: [8, 7, 11],
              },
              {
                recommended: false,
                strings: [8, 2, 4],
              },
              {
                recommended: false,
                strings: [11, 4, 11],
              },
              {
                recommended: false,
                strings: [11, 2, 1],
              },
              {
                recommended: true,
                strings: [6, 4, 4],
              },
            ],
          },
        ],
      },
    ],
  },
];

export default dataExample;
