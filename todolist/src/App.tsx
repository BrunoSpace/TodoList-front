import "./App.css";

import { EditProvider } from "./contexts/WrapperContext";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <div className="App">
      <EditProvider>
        <Wrapper />
      </EditProvider>
    </div>
  );
}

export default App;
