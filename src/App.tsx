import { ChakraProvider, Link } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import "./App.css";
import ChordsSheet from "./components/ChordsSheet";

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <ChordsSheet />
        <Link
          sx={{
            position: "absolute",
            top: "0.5rem",
            right: "0.5rem",
          }}
          href="https://github.com/nogizhopaboroda/balalaika-chords-sheet-generator"
          isExternal
        >
          Github Repo <ExternalLinkIcon mx="2px" />
        </Link>
      </div>
    </ChakraProvider>
  );
}

export default App;
