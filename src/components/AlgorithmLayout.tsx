import { CipherHeader } from "./CipherHeader";
import { HomeButton } from "./HomeButton";

interface AlgorithmLayoutProps {
    title: string;
    description: string;
    formContent: React.ReactNode;
    resultContent?: React.ReactNode;
}

export function AlgorithmLayout({
    title,
    description,
    formContent,
    resultContent
}: AlgorithmLayoutProps) {
    return (
        <div className="container">
            <CipherHeader cipherName={title} description={description} />
            <main className="content">
                <div className="card">{formContent}</div>
                {resultContent}
                <HomeButton />
            </main>
        </div>
    );
}
