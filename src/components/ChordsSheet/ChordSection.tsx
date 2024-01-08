import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import { Box, Button } from "@chakra-ui/react";
import type { ChordTuning, Data } from "../../types";
import ChordGroupComponent from "./ChordGroup";
import { useCallback, useRef, useState } from "react";

const ChordSection = ({ section }: { section: Data }) => {
  const ref = useRef<any>();
  const [isLoading, setIsLoading] = useState(false);

  const downloadSection = useCallback(async () => {
    setIsLoading(() => true);

    await new Promise((r) => setTimeout(r, 0));

    if (!ref.current) {
      return;
    }

    const doc = new jsPDF("p", "mm", "a4");
    const canvas = await html2canvas(ref.current);

    const width = doc.internal.pageSize.getWidth();
    const height = doc.internal.pageSize.getHeight();
    doc.addImage(canvas, "PNG", 20, 10, width - 40, height - 20);

    doc.save(`balalaika-chords-${section.tuning.join("-")}.pdf`);
    setIsLoading(() => false);
  }, [ref.current]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
        gap: "1rem",
      }}
    >
      <Box
        sx={{
          width: "100%",
          textAlign: "left",
          paddingX: "1rem",
        }}
      >
        <Button isLoading={isLoading} onClick={downloadSection}>
          Download PDF
        </Button>
      </Box>
      <Box
        ref={ref}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "3rem",
        }}
      >
        {section.data.map((chordGroup, index) => (
          <ChordGroupComponent key={index} group={chordGroup} tuning={section.tuning} />
        ))}
      </Box>
    </Box>
  );
};

export default ChordSection;
