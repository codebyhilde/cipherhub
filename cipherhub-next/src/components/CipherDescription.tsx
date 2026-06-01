interface CipherDescriptionProps {
    cipherName: string;
    description: string;
}

export function CipherDescription({
    cipherName,
    description
}: CipherDescriptionProps) {
    const paragraphs = description.split("\n").filter(p => p.trim() !== "");

    return (
        <div className="space-y-4 p-6 bg-background-dark/50 border border-primary/20 rounded-lg">
            <h2 className="text-2xl font-bold uppercase text-primary">
                Sobre // {cipherName}
            </h2>
            {paragraphs.map((text: string, index: number) => (
                <p className="text-white/80 leading-relaxed" key={index}>{text}</p>
            ))}
        </div>
    );
}
