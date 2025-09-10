import CaesarView from "./views/CaesarView.tsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/index.css";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<CaesarView />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
