import { Link } from "react-router-dom";
import { House } from "lucide-react";

export function HomeButton() {
  return (
    <Link to="/" className="home-btn"><House/> Inicio
    </Link>
  )
}