import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "./ui/dialog";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ExternalLink, CheckCircle, Upload, Users, Star, Briefcase } from "lucide-react";

interface BehanceModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function BehanceModal({ isOpen, onClose }: BehanceModalProps) {
  const steps = [
    {
      number: "01",
      title: "Crear tu Manual de Marca",
      description: "Desarrolla todos los elementos de tu identidad visual: logo, colores, tipografía, componentes UI y guías de uso.",
      tips: ["Define tu personalidad de marca", "Crea una paleta de colores coherente", "Documenta cada elemento"]
    },
    {
      number: "02", 
      title: "Preparar el Proyecto",
      description: "Organiza tu trabajo en un formato presentable con casos de uso, mockups y ejemplos de aplicación.",
      tips: ["Incluye mockups realistas", "Muestra diferentes aplicaciones", "Agrega descripciones detalladas"]
    },
    {
      number: "03",
      title: "Subir a Behance",
      description: "Publica tu proyecto en Behance con título descriptivo, tags relevantes y una descripción que cuente la historia detrás del diseño.",
      tips: ["Usa keywords relevantes", "Cuenta la historia del proyecto", "Incluye tu proceso creativo"]
    }
  ];

  const benefits = [
    { icon: Users, text: "Visibilidad en la comunidad creativa" },
    { icon: Briefcase, text: "Oportunidades laborales" },
    { icon: Star, text: "Feedback de profesionales" },
    { icon: CheckCircle, text: "Portfolio profesional" }
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-3">
            <Upload className="h-6 w-6 text-primary" />
            Cómo Crear y Subir tu Manual de Marca a Behance
          </DialogTitle>
          <DialogDescription>
            Guía paso a paso para desarrollar tu proyecto personal y compartirlo con la comunidad
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-8 py-6">
          {/* Pasos */}
          <div className="space-y-6">
            {steps.map((step, index) => (
              <div key={index} className="flex gap-6 p-6 bg-muted/50 rounded-lg">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center">
                    {step.number}
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="mb-2">{step.title}</h4>
                  <p className="text-muted-foreground mb-4">{step.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {step.tips.map((tip, tipIndex) => (
                      <Badge key={tipIndex} variant="outline" className="text-xs">
                        {tip}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Beneficios */}
          <div className="border-t pt-6">
            <h4 className="mb-4">Beneficios de Publicar en Behance</h4>
            <div className="grid grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <benefit.icon className="h-5 w-5 text-primary" />
                  <span className="text-sm">{benefit.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-primary/10 p-6 rounded-lg text-center">
            <h4 className="mb-2">¿Listo para empezar?</h4>
            <p className="text-muted-foreground mb-4">
              Comienza hoy mismo tu proyecto de manual de marca y únete a la comunidad de creativos en Behance
            </p>
            <div className="flex gap-3 justify-center">
              <Button asChild>
                <a href="https://www.behance.net" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Ir a Behance
                </a>
              </Button>
              <Button variant="outline" onClick={onClose}>
                Cerrar Guía
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}