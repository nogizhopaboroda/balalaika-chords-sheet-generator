import { Box, Center, Flex, HStack, useRadioGroup } from "@chakra-ui/react";
import { useMemo, useState } from "react";
import data from "../../data";
import { Data } from "../../types";
import RadioButton from "../RadioButton";
import ChordSection from "./ChordSection";

const SectionSelector = ({
  data,
  onChange,
}: {
  data: Data[];
  onChange: (value: string) => void;
}) => {
  const options = data.map(({ tuning }) => tuning.join("-"));

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "tuning",
    defaultValue: options[0],
    onChange,
  });

  const group = getRootProps();

  return (
    <HStack {...group}>
      {options.map((value) => {
        const radio = getRadioProps({ value });
        return (
          <RadioButton key={value} {...radio}>
            {value}
          </RadioButton>
        );
      })}
    </HStack>
  );
};

const ChordsSheet = () => {
  const [tuning, setTuning] = useState<string>(data[0].tuning.join("-"));

  const currentSection = useMemo(
    () => data.find((section) => section.tuning.join("-") === tuning),
    [tuning],
  );

  return (
    <Center>
      <Flex
        sx={{
          flexDirection: "column",
          gap: "3rem",
          maxWidth: "64rem",
        }}
      >
        <Flex
          sx={{
            alignItems: "center",
            gap: "2rem",
            paddingX: "1rem",
            paddingY: "0.5rem",
          }}
        >
          <Box>Tuning:</Box>
          <SectionSelector data={data} onChange={setTuning} />
        </Flex>
        <Box>
          {currentSection ? <ChordSection section={currentSection} /> : null}
        </Box>
      </Flex>
    </Center>
  );
};

export default ChordsSheet;
