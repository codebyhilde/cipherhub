interface HeroCardProps {
    title: string;
    paragraph: string;
}

export function HeroCard({ title, paragraph }: HeroCardProps) {
    return (
        <div className="relative overflow-hidden rounded-lg border border-primary/30 bg-background-dark/50 p-6 text-center @container">
            <div
                className="absolute inset-0 bg-cover bg-center opacity-10"
                style={{
                    backgroundImage: `url('/hero-bg.webp')`
                }}
            ></div>
            <div
                className="absolute inset-0"
                style={{
                    background:
                        "radial-gradient(circle, transparent 50%, #0f2315 100%)"
                }}
            ></div>
            <div className="relative z-10 flex flex-col items-center gap-6">
                <div className="flex flex-col gap-2">
                    <h2
                        className="font-bold text-3xl tracking-tighter text-white @[480px]:text-5xl"
                        style={{
                            textShadow: "0 0 10px #06ea4a, 0 0 20px #06ea4a"
                        }}
                    >
                        {title}
                    </h2>
                    <p className="text-sm text-white/80 @[480px]:text-base">
                        {paragraph}
                    </p>
                </div>
            </div>
        </div>
    );
}
