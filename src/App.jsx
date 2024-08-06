import { CORE_CONCEPTS } from "../data";
import { CoreConcept } from "./component/CoreConcept";
import { Header } from "./component/Header/Header";

function App() {
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
      </main>
    </div>
  );
}

export default App;
