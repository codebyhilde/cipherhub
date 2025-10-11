import { HomeButton } from "./HomeButton";

export function CipherFooter() {
    return (
        <footer class="border-t border-primary/20 bg-background-dark/50 dark:bg-background-dark/80 p-2">
            <nav class="flex justify-around">
                <HomeButton />
            </nav>
        </footer>
    );
}
