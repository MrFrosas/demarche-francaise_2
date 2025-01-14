import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface NavigationLinkProps {
  path: string;
  label: string;
  isActive: boolean;
  onClick?: () => void;
}

export const NavigationLink = ({ path, label, isActive, onClick }: NavigationLinkProps) => (
  <Button
    variant="ghost"
    asChild
    className={`px-4 py-2 text-[16px] font-normal rounded-none ${
      isActive
        ? "bg-france-gray text-france-blue"
        : "text-france-text hover:bg-france-gray hover:text-france-blue"
    }`}
    onClick={onClick}
  >
    <Link to={path}>{label}</Link>
  </Button>
);