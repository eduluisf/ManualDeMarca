import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Palette, Code, Users, Zap, Eye, Target } from "lucide-react";

interface BrandManualSectionProps {
  title: string;
  description: string;
  items: Array<{
    icon: React.ComponentType<any>;
    title: string;
    description: string;
    badge?: string;
  }>;
  className?: string;
}

export function BrandManualSection({ title, description, items, className = "" }: BrandManualSectionProps) {
  return (
    <section className={`py-16 ${className}`}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="mb-4">{title}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {description}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="flex items-center justify-between mb-3">
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  {item.badge && (
                    <Badge variant="secondary">{item.badge}</Badge>
                  )}
                </div>
                <CardTitle className="text-lg">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{item.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export const whyImportantItems = [
  {
    icon: Code,
    title: "Consistencia en el Código",
    description: "Un manual de marca te ayuda a mantener consistencia visual en todos tus proyectos, desde la elección de colores hasta la tipografía en interfaces.",
    badge: "Esencial"
  },
  {
    icon: Users,
    title: "Comunicación con Equipos",
    description: "Facilita la colaboración con diseñadores y otros desarrolladores al tener referencias claras sobre la identidad visual del proyecto.",
    badge: "Colaboración"
  },
  {
    icon: Zap,
    title: "Desarrollo Más Rápido",
    description: "Reduces el tiempo de decisión sobre aspectos visuales, permitiéndote enfocarte en la funcionalidad y lógica de la aplicación.",
    badge: "Eficiencia"
  },
  {
    icon: Eye,
    title: "Mejora la UX",
    description: "Una identidad coherente mejora la experiencia del usuario y transmite profesionalismo en tus aplicaciones web.",
    badge: "UX"
  },
  {
    icon: Target,
    title: "Diferenciación",
    description: "Te ayuda a crear aplicaciones únicas que se destacan en el mercado y reflejan tu estilo personal como desarrollador.",
    badge: "Branding"
  },
  {
    icon: Palette,
    title: "Creatividad Dirigida",
    description: "Proporciona un marco creativo que guía tus decisiones de diseño sin limitar tu creatividad como desarrollador.",
    badge: "Creatividad"
  }
];

export const brandElementsItems = [
  {
    icon: Palette,
    title: "Paleta de Colores",
    description: "Define colores primarios, secundarios y de apoyo con sus códigos hexadecimales, RGB y casos de uso específicos."
  },
  {
    icon: Code,
    title: "Tipografía",
    description: "Especifica las fuentes principales, jerarquías tipográficas, tamaños y pesos para diferentes elementos UI."
  },
  {
    icon: Target,
    title: "Logo y Variaciones",
    description: "Incluye el logo principal, versiones alternativas, tamaños mínimos y espacios de protección requeridos."
  },
  {
    icon: Eye,
    title: "Iconografía",
    description: "Define el estilo de íconos, librerías a utilizar y criterios para mantener consistencia visual."
  },
  {
    icon: Users,
    title: "Componentes UI",
    description: "Documenta botones, formularios, cards y otros elementos de interfaz con sus estados y variaciones."
  },
  {
    icon: Zap,
    title: "Tono de Comunicación",
    description: "Establece la personalidad de la marca, el tono de los textos y cómo comunicarse con los usuarios."
  }
];