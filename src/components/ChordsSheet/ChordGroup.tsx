import { Box } from "@chakra-ui/react";
import type { ChordGroup, ChordTuning } from "../../types";
import Chord from "./Chord";

interface ChordGroupComponentProps {
  group: ChordGroup;
  tuning?: ChordTuning;
}

const ChordGroupComponent = ({ group, tuning }: ChordGroupComponentProps) => (
  <Box
    sx={{
      display: "flex",
      gap: {
        base: 0,
        md: "1rem",
        lg: "3rem",
      },
    }}
  >
    {group.chords.map((chord, index) => (
      <Box key={index}>
        <Chord key={index} chord={chord} tuning={tuning} />
      </Box>
    ))}
  </Box>
);

export default ChordGroupComponent;
