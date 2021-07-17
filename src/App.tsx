import { ChakraProvider, theme } from "@chakra-ui/react";
import * as React from "react";
import Form from "./components/Form/Form";
import Header from "./components/Header/Header";

const App: React.FunctionComponent = () => (
  <ChakraProvider theme={theme}>
    <Header />
    <Form />
  </ChakraProvider>
);

export default App;
