import { Header } from "./component/Header/Header";
import CoreConcepts from "./component/CoreConcepts.jsx";
import Examples from "./component/Examples.jsx";

function App() {
  return (
    <>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </>
  );
}

export default App;
