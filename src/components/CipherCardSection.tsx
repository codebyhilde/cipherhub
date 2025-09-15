import { KeyRound } from "lucide-react";
import { Link } from "react-router-dom";

interface CipherCardSectionProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  route: string;
}

export function CipherCardSection({ title, description, icon, route }: CipherCardSectionProps) {
    return (
        <div className="cipher-card">
            <div className="card-icon">
                {icon}
            </div>
            <h3>{title}</h3>
            <p>
                {description}
            </p>
            <Link to={route} className="btn cipher-btn"><KeyRound /> Usar {title}</Link>
        </div>
    );
}
