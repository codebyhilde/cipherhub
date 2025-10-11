interface CipherInputLabelProps {
    name: string;
    content: string;
}

export function CipherInputLabel({ name, content }: CipherInputLabelProps) {
    return (
        <label
            className="block text-sm font-bold uppercase tracking-wider text-primary mb-2"
            htmlFor={name}
        >
            {content}
        </label>
    );
}
