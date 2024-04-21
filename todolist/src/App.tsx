import "./App.css";

import { WrapperProvider } from "./contexts/WrapperContext";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <div className="App">
      <WrapperProvider>
        <Wrapper />
      </WrapperProvider>
    </div>
  );
}

export default App;
