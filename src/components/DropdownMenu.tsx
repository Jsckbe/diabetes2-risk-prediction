import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Info, Heart, Shield, HelpCircle, FileText, Users } from 'lucide-react';

interface DropdownOption {
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
}

interface DropdownColumn {
  title: string;
  options: DropdownOption[];
}

const dropdownColumns: DropdownColumn[] = [
  {
    title: "Explora Nuestras Páginas",
    options: [
      {
        title: "Sobre Nosotros",
        description: "Conoce más sobre nosotros...",
        icon: <Info className="w-4 h-4" />,
        href: "/sobre-nosotros"
      },
      {
        title: "Nuestra Misión",
        description: "Descubre nuestra misión...",
        icon: <Heart className="w-4 h-4" />,
        href: "/mision"
      }
    ]
  },
  {
    title: "Servicios",
    options: [
      {
        title: "Evaluación Diabetes",
        description: "Evalúa tu riesgo de diabetes...",
        icon: <Shield className="w-4 h-4" />,
        href: "/evaluacion"
      },
      {
        title: "Centro de Ayuda",
        description: "Obtén ayuda y soporte...",
        icon: <HelpCircle className="w-4 h-4" />,
        href: "/ayuda"
      }
    ]
  },
  {
    title: "Recursos",
    options: [
      {
        title: "Documentación",
        description: "Accede a nuestra documentación...",
        icon: <FileText className="w-4 h-4" />,
        href: "/documentos"
      },
      {
        title: "Comunidad",
        description: "Únete a nuestra comunidad...",
        icon: <Users className="w-4 h-4" />,
        href: "/comunidad"
      }
    ]
  }
];

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-center items-center gap-1 cursor-pointer group px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors"
      >
        <span className="text-foreground text-base font-normal leading-6 group-hover:text-muted-foreground transition-colors">
          Más Opciones
        </span>
        <ChevronDown 
          className={`w-4 h-4 text-foreground transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-[800px] bg-background border border-border rounded-xl shadow-lg z-50 p-6 max-lg:w-[600px] max-md:w-[400px] max-sm:w-[320px] max-sm:right-[-80px]">
          <div className="grid grid-cols-3 gap-6 max-md:grid-cols-2 max-sm:grid-cols-1">
            {dropdownColumns.map((column, columnIndex) => (
              <div key={columnIndex} className="flex flex-col gap-4">
                <h3 className="text-foreground text-sm font-semibold leading-5 border-b border-border pb-2">
                  {column.title}
                </h3>
                <div className="flex flex-col gap-3">
                  {column.options.map((option, optionIndex) => (
                    <a
                      key={optionIndex}
                      href={option.href}
                      className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted transition-colors group cursor-pointer"
                    >
                      <div className="text-muted-foreground group-hover:text-foreground transition-colors mt-0.5">
                        {option.icon}
                      </div>
                      <div className="flex flex-col gap-1">
                        <span className="text-foreground text-sm font-medium leading-5 group-hover:text-jade transition-colors">
                          {option.title}
                        </span>
                        <span className="text-muted-foreground text-xs leading-4">
                          {option.description}
                        </span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;