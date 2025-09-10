import { CipherHeader } from "./CipherHeader";

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
            <CipherHeader title={title} description={description} />
            <main className="content">
                <div className="card">{formContent}</div>
                {resultContent}
            </main>
        </div>
    );
}
