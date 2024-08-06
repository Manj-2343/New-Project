import React, { useState } from "react";
import TabButton from "./TabButton";
import { EXAMPLES } from "../../data";
import Section from "./Section";
import Tabs from "./Tabs";

const Examples = () => {
  const [selectedTopic, setSelectedTopic] = useState();
  function handleSelect(selectedButton) {
    // selectedButton =>"component","jsx","props","state"
    setSelectedTopic(selectedButton);
  }
  /*
  //3rd way  for conditional rendering
  let tabContent = <p>Please select a topic </p>;
  if (tabContent) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic]?.title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }
    */
  return (
    <div>
      <Section title="Examples" id="examples">
        <Tabs
          buttons={
            <>
              <TabButton
                isSelected={selectedTopic === "components"}
                onClick={() => handleSelect("components")}
              >
                Component
              </TabButton>
              <TabButton
                isSelected={selectedTopic === "jsx"}
                onClick={() => handleSelect("jsx")}
              >
                Jsx
              </TabButton>
              <TabButton
                isSelected={selectedTopic === "props"}
                onClick={() => handleSelect("props")}
              >
                Props
              </TabButton>
              <TabButton
                isSelected={selectedTopic === "state"}
                onClick={() => handleSelect("state")}
              >
                State
              </TabButton>
            </>
          }
        >
          {/* ist way of conditional rendering */}
          {!selectedTopic ? <p>Please select a topic</p> : null}
          {/* by using and operator  */}
          {/* {!selectedTopic && <p>Please select a topic</p> } */}
          {selectedTopic ? (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic]?.title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
              </pre>
            </div>
          ) : null}
          {/* you can write the  above 42-51 in below way */}
          {/* 
        //2nd way for conditional rendering
        {!selectedTopic ? (
          <p>Please select a topic</p>
        ) : (
          <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic]?.title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>{EXAMPLES[selectedTopic].code}</code>
            </pre>
          </div>
        )} */}
          {/* {tabContent} 3rd way */}
        </Tabs>
      </Section>
    </div>
  );
};

export default Examples;
