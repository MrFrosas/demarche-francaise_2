import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { useState, useRef, useEffect } from "react";

interface ServiceItem {
  path: string;
  label: string;
}

interface ServicesSubmenuProps {
  items: ServiceItem[];
  isOpen: boolean;
  onToggle: () => void;
}

export const ServicesSubmenu = ({ items, isOpen, onToggle }: ServicesSubmenuProps) => {
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        onToggle();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, onToggle]);

  return (
    <div className="relative" ref={menuRef}>
      <Button
        variant="ghost"
        className={`px-4 py-2 text-[16px] font-normal rounded-none flex items-center gap-1 ${
          isOpen
            ? "bg-france-gray text-france-blue"
            : "text-france-text hover:bg-france-gray hover:text-france-blue"
        }`}
        onClick={onToggle}
      >
        Nos services
        <ChevronDown 
          className={`h-4 w-4 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`} 
        />
      </Button>

      <div
        className={`absolute top-full left-0 w-64 bg-white border border-france-gray-medium shadow-france z-50 overflow-hidden transition-all duration-200 ${
          isOpen 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 -translate-y-2 pointer-events-none'
        }`}
      >
        {items.map((item, index) => (
          <Link
            key={item.path}
            to={item.path}
            className={`block px-4 py-3 text-[16px] text-france-text hover:bg-france-gray transition-colors ${
              index !== items.length - 1 ? "border-b border-france-gray-medium" : ""
            }`}
            onClick={onToggle}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
};