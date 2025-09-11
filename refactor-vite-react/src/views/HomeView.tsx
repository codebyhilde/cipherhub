import { Shuffle, Key, CodeXml, Info } from "lucide-react";
import { CipherHeader } from "../components/CipherHeader.tsx";
import { CipherCardSection } from "../components/CipherCardSection.tsx";

export default function HomeView() {
    return (
        <div className="container">
            <CipherHeader
                title="Cipherhub"
                description="Explora diferentes algoritmos de cifrado clásico"
            />

            <main>
                <section className="intro-section">
                    <div className="card">
                        <h2>Bienvenido a Cipherhub</h2>
                        <p>
                            Una colección de implementaciones de algoritmos
                            criptográficos clásicos. Selecciona uno de los
                            métodos disponibles para comenzar.
                        </p>
                    </div>
                </section>

                <section className="ciphers-section">
                    <h2>
                        <CodeXml /> Algoritmos Disponibles
                    </h2>

                    <div className="cipher-cards">
                        <CipherCardSection
                            title="Cifrado César"
                            description="Un cifrado por sustitución que desplaza las letras del alfabeto según un valor numérico fijo."
                            icon={<Shuffle />}
                            route="/caesar"
                        />

                        <CipherCardSection
                            title="Cifrado Vigenère"
                            description="Un método de cifrado polialfabético que utiliza una palabra clave para determinar el desplazamiento."
                            icon={<Key />}
                            route="/vigenere"
                        />
                    </div>
                </section>

                <section className="info-section">
                    <div className="card">
                        <h2>
                            <Info /> Acerca de este proyecto
                        </h2>
                        <p>
                            Este proyecto es una implementación en constante
                            desarrollo de algoritmos criptográficos clásicos. La
                            página se irá actualizando con nuevos cifrados y
                            mejoras en el futuro.
                        </p>
                        <p>
                            Puedes explorar el código fuente en{" "}
                            <a
                                href="https://github.com/codebyhilde/cipherhub"
                                className="repo-link"
                            >
                                GitHub
                            </a>
                            .
                        </p>
                    </div>
                </section>
            </main>

            <footer className="footer">
                <p>Cipherhub - 2025</p>
            </footer>
        </div>
    );
}
