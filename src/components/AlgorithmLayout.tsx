import { CipherHeader } from "./CipherHeader";
import { CipherTitle } from "./CipherTitle";
import { CipherFooter } from "./CipherFooter"
import { CipherDescription } from "./CipherDescription";

interface AlgorithmLayoutProps {
    title: string;
    breadcrumbText?: string;
    description: string;
    formContent: React.ReactNode;
    resultContent?: React.ReactNode;
}

export function AlgorithmLayout({
    title,
    breadcrumbText,
    description,
    formContent,
    resultContent
}: AlgorithmLayoutProps) {
    return (
        <div className="flex flex-col min-h-screen">
            <CipherHeader cipherName={breadcrumbText ?? "Cifrado"} />
            <main className="flex-grow p-4 space-y-8">
                <CipherTitle title={title} />
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="space-y-6 p-6 bg-background-dark/50 dark:bg-background-light/5 border border-primary/20 rounded-lg">
                        {formContent}
                        {resultContent}
                    </div>
                    <CipherDescription
                        cipherName={title}
                        description={description}
                    />
                </div>
            </main>
            <CipherFooter />
        </div>
    );
}
