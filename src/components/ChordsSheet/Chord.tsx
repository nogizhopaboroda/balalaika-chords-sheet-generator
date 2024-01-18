import { useEffect, useRef } from "react";
import { Finger, FretLabelPosition, SVGuitarChord } from "svguitar";
import { getFret, pickVariant } from "../../helpers";
import type { ChordData, ChordTuning, ChordVariant } from "../../types";

const DEFAULT_TUNE: ChordTuning = ["C", "E", "G"];
const DEFAULT_FRETS = 5;

const Chord = ({
  chord,
  title,
  tuning = DEFAULT_TUNE,
  frets = DEFAULT_FRETS,
}: {
  chord: ChordVariant;
  title?: string;
  tuning?: ChordTuning;
  frets?: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) {
      return;
    }
    const bestVariant = chord;

    const min = Math.min(...bestVariant!.strings.map(getFret));
    const max = Math.max(...bestVariant!.strings.map(getFret));
    const position = max > frets ? min : 1;

    const fingers: Finger[] = bestVariant
      ? bestVariant.strings
          .slice()
          .reverse()
          .reduce(
            (acc, fret, index) =>
              fret === 0
                ? acc
                : [
                    ...acc,
                    [
                      index + 1,
                      getFret(fret) - position + 1,
                      typeof fret === "object"
                        ? {
                            text: fret.finger.toString(),
                            textColor: "white",
                          }
                        : undefined,
                    ],
                  ],
            [] as Finger[],
          )
      : [];

    const newChart = new SVGuitarChord(ref.current);
    newChart
      .configure({
        strings: 3,

        /**
         * The number of frets
         */
        frets,

        /**
         * Default position if no positon is provided (first fret is 1)
         */
        position,

        /**
         * These are the labels under the strings. Can be any string.
         */
        tuning,

        /**
         * The position of the fret label (eg. "3fr")
         */
        fretLabelPosition: FretLabelPosition.RIGHT,

        /**
         * The font size of the fret label
         */
        fretLabelFontSize: 40,

        /**
         * The font size of the string labels
         */
        tuningsFontSize: 28,

        /**
         * Size of a finger or barre relative to the string spacing
         */
        fingerSize: 0.5,

        /**
         * Color of a finger or barre
         */
        fingerColor: "#000",

        /**
         * The color of text inside fingers and barres
         */
        fingerTextColor: "#FFF",

        /**
         * The size of text inside fingers and barres
         */
        fingerTextSize: 35,

        /**
         * stroke color of a finger or barre. Defaults to the finger color if not set
         */
        fingerStrokeColor: "#000000",

        /**
         * stroke width of a finger or barre
         */
        fingerStrokeWidth: 0,

        /**
         * Height of a fret, relative to the space between two strings
         */
        fretSize: 1,

        /**
         * The minimum side padding (from the guitar to the edge of the SVG) relative to the whole width.
         * This is only applied if it's larger than the letters inside of the padding (eg the starting fret)
         */
        sidePadding: 0.2,

        /**
         * The font family used for all letters and numbers
         */
        fontFamily: 'Arial, "Helvetica Neue", Helvetica, sans-serif',

        /**
         * Default title of the chart if no title is provided
         */
        title: "",

        /**
         * Font size of the title. This is only the initial font size. If the title doesn't fit, the title
         * is automatically scaled so that it fits.
         */
        titleFontSize: 48,

        /**
         * Space between the title and the chart
         */
        titleBottomMargin: 30,

        /**
         * Global color of the whole chart. Can be overridden with more specifig color settings such as
         * @link titleColor or @link stringColor etc.
         */
        color: "#000000",

        /**
         * The background color of the chord diagram. By default the background is transparent. To set the background to transparent either set this to 'none' or undefined
         */
        backgroundColor: "none",

        /**
         * Barre chord rectangle border radius relative to the fingerSize (eg. 1 means completely round endges, 0 means not rounded at all)
         */
        barreChordRadius: 0.25,

        /**
         * Size of the Xs and Os above empty strings relative to the space between two strings
         */
        emptyStringIndicatorSize: 0.6,

        /**
         * Global stroke width
         */
        strokeWidth: 2,

        /**
         * The width of the nut (only used if position is 1)
         */
        nutWidth: 10,

        /**
         * If this is set to `true`, the starting fret (eg. 3fr) will not be shown. If the position is 1 the
         * nut will have the same width as all other frets.
         */
        noPosition: false,

        /**
         * The color of the title (overrides color)
         */
        titleColor: "#000000",

        /**
         * The color of the strings (overrides color)
         */
        stringColor: "#000000",

        /**
         * The color of the fret position (overrides color)
         */
        fretLabelColor: "#000000",

        /**
         * The color of the tunings (overrides color)
         */
        tuningsColor: "#000000",

        /**
         * The color of the frets (overrides color)
         */
        fretColor: "#000000",

        /**
         * When set to true the distance between the chord diagram and the top of the SVG stayes the same,
         * no matter if a title is defined or not.
         */
        fixedDiagramPosition: false,
      })
      .chord({
        title: title ?? chord.title,
        fingers: fingers,
        barres: [],
      })
      .draw();

    return () => {
      newChart.clear();
      newChart.remove();
    };
  }, [ref.current, tuning, frets]);

  return <div ref={ref} />;
};

export default Chord;
