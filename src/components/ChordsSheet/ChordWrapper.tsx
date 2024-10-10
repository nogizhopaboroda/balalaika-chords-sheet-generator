import { Box, Divider, Flex } from "@chakra-ui/react";
import { useState } from "react";
import { pickVariant } from "../../helpers";
import type { ChordData, ChordTuning } from "../../types";
import Chord from "./Chord";

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
              frets={6}
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

export default ChordWrapper;
