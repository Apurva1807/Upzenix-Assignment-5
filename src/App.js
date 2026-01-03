import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import SongDetails from "./pages/SongDetails";
import ThemeToggle from "./components/ThemeToggle";
import TopPlay from "./components/TopPlay";
import usePlayerStore from "./store/usePlayerStore";

function App() {
  const theme = usePlayerStore((state) => state.theme);

  return (
    <BrowserRouter>
      <div
        style={{
          backgroundColor:
            theme === "dark" ? "#1f2937" : "#ffffff",
          color: theme === "dark" ? "#ffffff" : "#000000",
          minHeight: "100vh",
        }}
      >
        <div style={{ display: "flex" }}>
          <Sidebar />

          <div style={{ flex: 1, padding: "16px" }}>
            <ThemeToggle />
            <TopPlay />

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/song/:id" element={<SongDetails />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;