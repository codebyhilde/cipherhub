interface CipherDescriptionProps {
    cipherName: string;
    description: string;
}

export function CipherDescription({ cipherName, description }) {
    return (
        <div class="space-y-4 p-6 bg-background-dark/50 dark:bg-background-light/5 border border-primary/20 rounded-lg">
            <h2 class="text-2xl font-bold uppercase text-primary">
                Sobre // {cipherName}
            </h2>
            <p class="text-white/80 leading-relaxed">{description}</p>
        </div>
    );
}
