import { Box, Button, Flex, Text } from "@chakra-ui/react";
import html2canvas from "html2canvas";
import { useRef, useState } from "react";
import Select from "react-select";
import { pickVariant } from "../../helpers";
import type { ChordData, Data } from "../../types";
import Chord from "./Chord";

const getScreenShot = async (element: HTMLElement) => {
  const canvas = await html2canvas(element);

  canvas.toBlob(function (blob) {
    navigator.clipboard.write([
      new ClipboardItem(
        Object.defineProperty({}, blob!.type, {
          value: blob,
          enumerable: true,
        }),
      ),
    ]);
  });
};

const QuickSheet = ({ section }: { section: Data }) => {
  const [selectedChords, setSelectedChords] = useState<Array<string>>([]);
  const ref = useRef<HTMLDivElement>(null);

  const [showCopyText, setShowCopyText] = useState(false);

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
        <Flex flexDirection="column" gap="1rem" position="relative">
          <Flex height="7rem" justifyContent="center" ref={ref}>
            {selectedChords.map((chord) => {
              const variant = pickVariant(chords[chord].variants);
              if (!variant) {
                return <b>no variant</b>;
              }
              return (
                <Chord key={chord} title={chord} chord={variant} tuning={section.tuning} />
              );
            })}
          </Flex>

          <Button
            sx={{
              position: "absolute",
              right: 0,
              top: 0,
            }}
            size="xs"
            onClick={async () => {
              if (!ref.current) {
                return;
              }
              getScreenShot(ref.current);
              setShowCopyText(true);
              await new Promise((r) => setTimeout(r, 2000));
              setShowCopyText(false);
            }}
          >
            {showCopyText ? "Copied" : "Copy image"}
          </Button>
        </Flex>
      ) : null}
    </Flex>
  );
};

export default QuickSheet;
