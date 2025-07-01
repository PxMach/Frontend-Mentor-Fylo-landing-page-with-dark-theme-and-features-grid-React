import "./App.css";
import Header from "./Components/Header/Header.jsx";
import Secure from "./Components/Main/Secure/Secure.jsx";
import TeamProduction from "./Components/Main/TeamProduction/TeamProduction.jsx";

function App() {
  return (
    <>
      <Header />
      <main>
        <Secure />
        <TeamProduction />
      </main>
    </>
  );
}

export default App;
