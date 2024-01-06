import { ChakraProvider } from "@chakra-ui/react";
import "./App.css";
import ChordsSheet from "./components/ChordsSheet";

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <ChordsSheet />
      </div>
    </ChakraProvider>
  );
}

export default App;
