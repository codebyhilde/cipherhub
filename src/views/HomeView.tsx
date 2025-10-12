import { HomeHeader } from "../components/HomeHeader";
import { InfoSection } from "../components/InfoSection";
import { HeroCard } from "../components/HeroCard";
import { CipherCardSection } from "../components/CipherCardSection";

export default function HomeView() {
    return (
        <div className="min-h-screen">
            <div className="flex h-full flex-col justify-between">
                <div>
                    <HomeHeader />
                    <main className="p-4">
                        <HeroCard
                            title="¡Bienvenido al pasado!"
                            paragraph="Explora la encriptación clásica con Cipherhub. Aprende, experimenta y protege mensajes con un encanto retro."
                        />
                        <h3 className="mt-8 mb-4 font-bold text-xl text-primary">
                            Algoritmos Disponibles
                        </h3>
                        <div className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-4">
                            <CipherCardSection
                                cipherName="Cifrado César"
                                description="Monoalfabético"
                                route="/caesar"
                                bgUrl="/keyboard-bg-1.webp"
                            />
                            <CipherCardSection
                                cipherName="Cifrado Vigenère"
                                description="Polialfabético"
                                route="/vigenere"
                                bgUrl="/keyboard-bg-2.webp"
                            />
                            <CipherCardSection
                                cipherName="Cifrado Playfair"
                                description="Polialfabético Digrámico"
                                route="/playfair"
                                bgUrl="/keyboard-bg-1.webp"
                            />
                        </div>
                        <InfoSection
                            info="Este proyecto es una implementación en constante desarrollo de algoritmos criptográficos clásicos. La página se irá actualizando con nuevos cifrados y mejoras en el futuro."
                            githubUrl="https://github.com/codebyhilde/cipherhub"
                        />
                    </main>
                </div>
            </div>
        </div>
    );
}
