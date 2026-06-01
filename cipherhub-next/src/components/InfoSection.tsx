import { Info } from "lucide-react";

interface InfoSectionProps {
    info: string;
    githubUrl?: string;
}

export function InfoSection({ info , githubUrl}: InfoSectionProps) {
    return (
        <div className="space-y-4 p-6 bg-background-dark/50 border border-primary/20 rounded-lg mt-8">
            <h2 className="text-xl font-bold uppercase text-primary flex justify-center gap-1">
                <Info /> Acerca de este proyecto
            </h2>
            <p className="text-white/80 leading-relaxed">{info}</p>
            {githubUrl && (<p className="text-white/80 leading-relaxed">
                Puedes explorar el código fuente en{" "}
                <a
                    href={githubUrl}
                    className="text-primary hover:text-green-400 hover:underline"
                    target="_blank"
                    rel="noreferrer"
                >
                    {" "}
                    GitHub
                </a>
            </p>)}
        </div>
    );
}
