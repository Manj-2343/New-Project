import { useState } from "react";
import { CORE_CONCEPTS } from "../data";
import { CoreConcept } from "./component/CoreConcept";
import { Header } from "./component/Header/Header";
import TabButton from "./component/TabButton";
import { EXAMPLES } from "../data.js";

function App() {
  const [selectedTopic, setSelectedTopic] = useState("components");
  function handleSelect(selectedButton) {
    // selectedButton =>"component","jsx","props","state"
    setSelectedTopic(selectedButton);
  }
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>CreConcepts</h2>
          <ul>
            <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => handleSelect("components")}>
              Component
            </TabButton>
            <TabButton onSelect={() => handleSelect("jsx")}>Jsx</TabButton>
            <TabButton onSelect={() => handleSelect("props")}>Props</TabButton>
            <TabButton onSelect={() => handleSelect("state")}>State</TabButton>
          </menu>
        </section>
        <div id="tab-content">
          <h3>{EXAMPLES[selectedTopic]?.title}</h3>
          <p>{EXAMPLES[selectedTopic].description}</p>
          <pre>
            <code>{EXAMPLES[selectedTopic].code}</code>
          </pre>
        </div>
      </main>
    </div>
  );
}

export default App;
