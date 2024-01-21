import { Box, Divider, Flex } from "@chakra-ui/react";
import { useState } from "react";
import type { ChordData, ChordGroup, ChordTuning } from "../../types";
import { getFret, pickVariant } from "../../helpers";
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
  const variant = pickVariant(chord.variants);
  if (!variant) {
    return null;
  }
  if (isExpanded) {
    return (
      <>
        <Flex
          sx={{
            cursor: "pointer",
          }}
          onClick={() => setIsExpanded((val) => !val)}
        >
          {chord.variants.map((variant, index) => (
            <Chord
              key={index}
              chord={variant}
              title={variant.title ?? chord.title}
              tuning={tuning}
            />
          ))}
        </Flex>
        <Divider orientation="vertical" />
      </>
    );
  }
  return (
    <Box
      sx={{
        cursor: "pointer",
      }}
      onClick={() => setIsExpanded((val) => !val)}
    >
      <Chord chord={variant} title={chord.title} tuning={tuning} />
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
