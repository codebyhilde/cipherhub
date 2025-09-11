import HomeView from "./views/HomeView.tsx";
import CaesarView from "./views/CaesarView.tsx";
import VigenereView from "./views/VigenereView.tsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/index.css";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomeView />} />
                <Route path="/caesar" element={<CaesarView />} />
                <Route path="/vigenere" element={<VigenereView />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
