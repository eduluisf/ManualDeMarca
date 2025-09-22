import { useState } from "react";
import { Button } from "./components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./components/ui/card";
import { Badge } from "./components/ui/badge";
import { BrandManualSection, whyImportantItems, brandElementsItems } from "./components/BrandManualSection";
import { BehanceModal } from "./components/BehanceModal";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import { 
  BookOpen, 
  Palette, 
  Code2, 
  Users, 
  Sparkles, 
  ArrowRight,
  ExternalLink,
  Play,
  CheckCircle
} from "lucide-react";

export default function App() {
  const [isBehanceModalOpen, setIsBehanceModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">
                  <Sparkles className="h-3 w-3 mr-1" />
                  Para Desarrolladores
                </Badge>
                <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                  Manual de Marca: 
                  <span className="text-primary"> Tu Guía Esencial</span> 
                  para Desarrollo
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Descubre por qué todo desarrollador necesita un manual de marca y cómo puede transformar 
                  tus proyectos web en experiencias consistentes y profesionales.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  onClick={() => setIsBehanceModalOpen(true)}
                  className="group"
                >
                  <Play className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
                  Crear Mi Proyecto
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="#que-es" className="scroll-smooth">
                    <BookOpen className="h-4 w-4 mr-2" />
                    Aprender Más
                  </a>
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1728467459756-211f3c738697?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZCUyMGlkZW50aXR5JTIwZGVzaWduJTIwY29sb3JmdWx8ZW58MXx8fHwxNzU4NTM5MTY0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Brand identity design"
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary/20 rounded-full blur-xl" />
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-secondary/20 rounded-full blur-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* ¿Qué es un Manual de Marca? */}
      <section id="que-es" className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <Badge variant="outline" className="w-fit">
                  <Palette className="h-3 w-3 mr-1" />
                  Fundamentos
                </Badge>
                <h2>¿Qué es un Manual de Marca?</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Un manual de marca es un documento que define la identidad visual de un proyecto, 
                  estableciendo reglas claras sobre el uso de colores, tipografías, logotipos y 
                  otros elementos gráficos.
                </p>
              </div>
              
              <div className="space-y-4">
                <h3>Para desarrolladores, incluye:</h3>
                <div className="grid gap-3">
                  {[
                    "Paletas de colores con códigos hex/RGB",
                    "Especificaciones tipográficas para CSS",
                    "Componentes UI reutilizables",
                    "Guías de espaciado y layout",
                    "Estados de interacción y animaciones"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1645658043538-fc2bb1702cfe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjBndWlkZWxpbmVzJTIwYnJhbmRpbmd8ZW58MXx8fHwxNzU4NTM5MTY1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Design guidelines"
                className="w-full h-[400px] object-cover rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Por qué es importante para desarrolladores */}
      <BrandManualSection
        title="¿Por qué es crucial para desarrolladores?"
        description="Un manual de marca no es solo para diseñadores. Como desarrollador, te proporciona herramientas esenciales para crear aplicaciones web consistentes y profesionales."
        items={whyImportantItems}
        className="bg-background"
      />

      {/* Elementos del Manual */}
      <BrandManualSection
        title="Elementos esenciales de tu Manual de Marca"
        description="Estos son los componentes clave que todo manual de marca debe incluir para ser verdaderamente útil en el desarrollo web."
        items={brandElementsItems}
        className="bg-muted/30"
      />

      {/* Developer Focus Section */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1582138825658-fb952c08b282?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXZlbG9wZXIlMjB3b3Jrc3BhY2UlMjBsYXB0b3B8ZW58MXx8fHwxNzU4NTM5MTY2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Developer workspace"
                className="w-full h-[350px] object-cover rounded-xl shadow-lg"
              />
            </div>
            
            <div className="space-y-6">
              <div className="space-y-4">
                <Badge variant="outline" className="w-fit">
                  <Code2 className="h-3 w-3 mr-1" />
                  En la Práctica
                </Badge>
                <h2>Aplicación en el Desarrollo Web</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Un manual de marca te permite traducir conceptos de diseño a código de manera eficiente, 
                  manteniendo la coherencia visual en todas las pantallas y dispositivos.
                </p>
              </div>
              
              <Card className="border-primary/20 bg-primary/5">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-primary" />
                    Impacto en tu Código
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <strong>Variables CSS reutilizables</strong> para colores y espaciados
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <strong>Componentes consistentes</strong> con estados definidos
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <strong>Guías de responsive design</strong> basadas en la marca
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Final */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="space-y-4">
              <Badge className="bg-white/20 text-white border-white/30 hover:bg-white/30">
                <Users className="h-3 w-3 mr-1" />
                Proyecto Personal
              </Badge>
              <h2 className="text-white">Crea tu Propio Manual de Marca</h2>
              <p className="text-primary-foreground/80 text-lg leading-relaxed">
                Es hora de poner en práctica lo aprendido. Desarrolla tu manual de marca personal, 
                aplícalo en un proyecto web y compártelo con la comunidad en Behance.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 my-12">
              <Card className="bg-white/10 border-white/20 text-white">
                <CardHeader>
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-3">
                    <Palette className="h-6 w-6" />
                  </div>
                  <CardTitle>Diseña</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-primary-foreground/70">
                    Crea tu identidad visual única con colores, tipografías y elementos gráficos
                  </CardDescription>
                </CardContent>
              </Card>
              
              <Card className="bg-white/10 border-white/20 text-white">
                <CardHeader>
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-3">
                    <Code2 className="h-6 w-6" />
                  </div>
                  <CardTitle>Desarrolla</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-primary-foreground/70">
                    Implementa tu manual en un proyecto web real usando las mejores prácticas
                  </CardDescription>
                </CardContent>
              </Card>
              
              <Card className="bg-white/10 border-white/20 text-white">
                <CardHeader>
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-3">
                    <ExternalLink className="h-6 w-6" />
                  </div>
                  <CardTitle>Comparte</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-primary-foreground/70">
                    Publica tu proyecto en Behance y obtén feedback de la comunidad creativa
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary"
                onClick={() => setIsBehanceModalOpen(true)}
                className="group"
              >
                <Play className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
                Ver Guía Completa
                <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-white/10 border-white/30 text-white hover:bg-white/20"
                asChild
              >
                <a href="https://www.behance.net" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Explorar Behance
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Modal de Behance */}
      <BehanceModal 
        isOpen={isBehanceModalOpen} 
        onClose={() => setIsBehanceModalOpen(false)} 
      />
    </div>
  );
}