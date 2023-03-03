import "./App.css";
import { CompA } from "./CompA";
import { GlobalContextProvider } from "./GlobalContext";

function App() {
  const info = "info will be here";
  return (
    <GlobalContextProvider>
      <div className="App">
        <CompA info={info} />
      </div>
    </GlobalContextProvider>
  );
}

export default App;
