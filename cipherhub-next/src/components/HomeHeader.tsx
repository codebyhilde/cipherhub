import { Logo } from "./Logo";

export function HomeHeader() {
    return (
        <header className="flex items-center justify-between border-b border-primary/20 p-4">
            <div className="w-12"></div>
            <h1 className="flex-1 text-center font-bold text-lg tracking-widest text-primary">
                C I P H E R H U B
            </h1>
            <div className="flex w-12 items-center justify-end">
                <Logo />
            </div>
        </header>
    );
}
