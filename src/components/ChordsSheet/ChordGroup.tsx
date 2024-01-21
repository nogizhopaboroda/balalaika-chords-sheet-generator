import { Box, HStack } from "@chakra-ui/react";
import type { ChordGroup, ChordTuning } from "../../types";
import ChordWrapper from "./ChordWrapper";

interface ChordGroupComponentProps {
  group: ChordGroup;
  tuning?: ChordTuning;
}

const ChordGroupComponent = ({ group, tuning }: ChordGroupComponentProps) => (
  <HStack
    spacing={{
      base: 0,
      md: "1rem",
      lg: "3rem",
    }}
  >
    {group.chords.map((chord, index) => (
      <ChordWrapper key={index} chord={chord} tuning={tuning} />
    ))}
  </HStack>
);

export default ChordGroupComponent;
