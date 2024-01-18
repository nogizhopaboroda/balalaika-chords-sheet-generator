import { Box } from "@chakra-ui/react";
import { useState } from "react";
import type { ChordData, ChordGroup, ChordTuning } from "../../types";
import Chord from "./Chord";

interface ChordGroupComponentProps {
  group: ChordGroup;
  tuning?: ChordTuning;
}

const ChordWrapper = ({
  chord,
  tuning,
}: {
  chord: ChordData;
  tuning?: ChordTuning;
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <Box
      sx={{
        cursor: "pointer",
      }}
      onClick={() => setIsExpanded((val) => !val)}
    >
      <Chord chord={chord} tuning={tuning} />
    </Box>
  );
};

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
      <ChordWrapper key={index} chord={chord} tuning={tuning} />
    ))}
  </Box>
);

export default ChordGroupComponent;
