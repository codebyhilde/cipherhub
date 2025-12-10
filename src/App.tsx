import HomeView from "./views/HomeView.tsx";
import CaesarView from "./views/CaesarView.tsx";
import VigenereView from "./views/VigenereView.tsx";
import PlayfairView from "./views/PlayfairView.tsx";
import { CipherProvider } from "./context/CipherStateContext.tsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/index.css";
import { UpdateNotification } from "./components/UpdateNotification";

function App() {
    return (
        <CipherProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomeView />} />
                    <Route path="/caesar" element={<CaesarView />} />
                    <Route path="/vigenere" element={<VigenereView />} />
                    <Route path="/playfair" element={<PlayfairView />} />
                </Routes>
                <UpdateNotification />
            </BrowserRouter>
        </CipherProvider>
    );
}

export default App;
