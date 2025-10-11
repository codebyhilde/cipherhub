interface CipherTitleProps {
    title: string;
}

export function CipherTitle({ title }: CipherTitleProps) {
    return (
        <div className="text-center">
            <h1 className="text-4xl font-bold uppercase text-white">
                {title}
            </h1>
            <div className="mt-2 h-1 w-full bg-primary/20">
                <div className="h-1 bg-primary w-full"></div>
            </div>
        </div>
    );
}
