import Ultravox from "./pages/ultravox";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Ultravox />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
