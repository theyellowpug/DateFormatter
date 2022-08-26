import "./App.css";
import { ConverterPage } from "./pages/ConverterPage";
import { Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ConverterPage/>} />
        <Route path="" element={<ConverterPage/>} />
      </Routes>
    </div>
  );
}

export default App;
