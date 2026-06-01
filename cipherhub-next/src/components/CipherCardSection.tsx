import Link from "next/link";

interface CipherCardSectionProps {
    cipherName: string;
    description: string;
    route: string;
    bgUrl?: string;
}

export function CipherCardSection({cipherName, description, route, bgUrl}: CipherCardSectionProps) {
    return (
        <div className="group relative aspect-square cursor-pointer overflow-hidden rounded-lg border border-primary/20 transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10">
          <Link href={route}>
                        <div
                className="absolute inset-0 bg-cover bg-center opacity-40 transition-opacity group-hover:opacity-60"
                style={{backgroundImage: `url(${bgUrl})`}}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/70 to-transparent"></div>
            <div className="relative flex h-full flex-col justify-end p-4">
                <h4 className="font-bold text-white">{cipherName}</h4>
                <p className="text-xs text-white/70">{description}</p>
            </div>
          </Link>
        </div>
    );
}
