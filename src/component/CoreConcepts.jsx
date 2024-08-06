import React from "react";
import { CoreConcept } from "./CoreConcept";
import { CORE_CONCEPTS } from "../../data";

const CoreConcepts = () => {
  return (
    <div>
      <section id="core-concepts">
        <h2>CreConcepts</h2>
        <ul>
          {CORE_CONCEPTS.map((conceptItem) => (
            <CoreConcept key={conceptItem.title} {...conceptItem} />
          ))}
          {/*
            traditional method
            <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} /> */}
        </ul>
      </section>
    </div>
  );
};

export default CoreConcepts;
