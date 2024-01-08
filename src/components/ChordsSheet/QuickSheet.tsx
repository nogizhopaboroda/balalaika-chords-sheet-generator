import { Box, Flex, Text } from "@chakra-ui/react";
import { useState } from "react";
import Select from "react-select";
import type { ChordData, Data } from "../../types";
import Chord from "./Chord";

const QuickSheet = ({ section }: { section: Data }) => {
  const [selectedChords, setSelectedChords] = useState<Array<string>>([]);

  const options = section.data.map(({ title, chords }) => ({
    label: title,
    options: chords.map(({ title }) => ({
      value: title,
      label: title,
    })),
  }));

  const chords = section.data.reduce(
    (acc, item) => {
      const chords = item.chords.reduce(
        (acc, chord) => ({ ...acc, [chord.title]: chord }),
        {} as Record<string, ChordData>,
      );
      return {
        ...acc,
        ...chords,
      };
    },
    {} as Record<string, ChordData>,
  );

  return (
    <Flex paddingX="1rem" width="100%" flexDirection="column" gap="1rem">
      <Flex width="100%" gap="1rem" alignItems="center">
        <Text>Quick Sheet</Text>
        <Box
          flex={1}
          textAlign="left"
          as={Select}
          isMulti
          name="quick-chords"
          isSearchable
          options={options}
          className="basic-multi-select"
          classNamePrefix="select"
          onChange={(items) =>
            //@ts-ignore
            setSelectedChords(items.map(({ value }) => value))
          }
        />
      </Flex>
      {selectedChords.length ? (
        <Flex height="7rem">
          {selectedChords.map((chord) => (
            <Chord key={chord} chord={chords[chord]} tuning={section.tuning} />
          ))}
        </Flex>
      ) : null}
    </Flex>
  );
};

export default QuickSheet;
