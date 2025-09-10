import { LockKeyhole } from "lucide-react";

interface CipherHeaderProps {
    title: string;
    description: string;
}

export function CipherHeader({ title, description }: CipherHeaderProps) {
    return (
        <header>
            <h1>
                <LockKeyhole /> {title}
            </h1>
            <p>{description}</p>
        </header>
    );
}
