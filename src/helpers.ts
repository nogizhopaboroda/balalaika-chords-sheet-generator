import type { ChordVariant, Finger as ChordFinger } from "./types";

export const getFret = (finger: ChordFinger): number =>
  typeof finger === "object" ? finger.fret : finger;

export const pickVariant = (arr: ChordVariant[]): ChordVariant | null => {
  const calculateDifference = (strings: ChordFinger[]): number =>
    Math.max(...strings.map(getFret)) - Math.min(...strings.map(getFret));

  const calculateSumOfDistances = (strings: ChordFinger[]): number =>
    strings.map(getFret).reduce((sum, x) => sum + Math.abs(x - 0), 0);

  let selectedVariant: ChordVariant | null = null;
  let minDifference = Infinity;
  let minDistanceSum = Infinity;

  for (const variant of arr) {
    const { strings } = variant;
    const difference = calculateDifference(strings);
    const distanceSum = calculateSumOfDistances(strings);

    // Prioritize by distance to zero, then by difference
    if (
      distanceSum < minDistanceSum ||
      (distanceSum === minDistanceSum && difference < minDifference)
    ) {
      minDifference = difference;
      minDistanceSum = distanceSum;
      selectedVariant = variant;
    }
  }

  return selectedVariant;
};
