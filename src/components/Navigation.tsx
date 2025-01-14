import { useLocation } from "react-router-dom";
import { useState } from "react";
import { NavigationLink } from "./navigation/NavigationLink";
import { ServicesSubmenu } from "./navigation/ServicesSubmenu";
import { navigationLinks } from "./navigation/navigationData";

export const Navigation = () => {
  const location = useLocation();
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <nav className="hidden md:block bg-white border-b border-france-gray-medium relative">
      <div className="container mx-auto">
        <div className="flex items-center justify-center">
          <div className="flex space-x-1">
            {navigationLinks.map((link, index) => {
              if ('isSubmenu' in link) {
                return (
                  <ServicesSubmenu
                    key={index}
                    items={link.items}
                    isOpen={isServicesOpen}
                    onToggle={() => setIsServicesOpen(!isServicesOpen)}
                  />
                );
              }

              return (
                <NavigationLink
                  key={index}
                  path={link.path}
                  label={link.label}
                  isActive={location.pathname === link.path}
                />
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};