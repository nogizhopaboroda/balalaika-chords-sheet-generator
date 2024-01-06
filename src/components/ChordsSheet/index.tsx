import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
} from "@chakra-ui/react";
import data from "../../data";
import ChordSection from "./ChordSection";

const ChordsSheet = () => {
  return (
    <Accordion defaultIndex={0}>
      {data.map((section, index) => (
        <AccordionItem key={index}>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                {section.title}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <ChordSection key={index} section={section} />
          </AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default ChordsSheet;
