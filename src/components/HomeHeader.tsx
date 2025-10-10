import { LockKeyhole } from "lucide-react";

interface HomeHeaderProps {
    title: string;
    description: string;
}

export function HomeHeader({ title, description }: CipherHeaderProps) {
    return (
        <header>
            <h1>
                <LockKeyhole /> {title}
            </h1>
            <p>{description}</p>
        </header>
    );
}
