import React from "react";
import LoadingProvider from "./context/LoadingProvider";
import WordProvider from "./context/WordProvider";
// import WordManager from "./components/WordManager";
import {
  Container,
  IgnoreBasicHTML,
  BrandName,
  Blink,
  Context,
  WordSearcher_n_Add,
  Words,
} from "./components/ui";
import DataFlowManagerProvider from "./context/DataFlowManagerProvider";
import dataContent from "./data";
function App() {
  return (
    <div className="app center">
      <LoadingProvider>
        <WordProvider>
          <DataFlowManagerProvider>
            <IgnoreBasicHTML>
              <Container>
                <BrandName>{dataContent.brand.name}</BrandName>
                <Blink>{dataContent.content.blink}</Blink>
                <Context>{dataContent.content.context1}</Context>
                <WordSearcher_n_Add />
                <Words />
              </Container>
            </IgnoreBasicHTML>
          </DataFlowManagerProvider>
        </WordProvider>
      </LoadingProvider>
    </div>
  );
}

export default App;
