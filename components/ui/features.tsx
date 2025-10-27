import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

export function Features() {
  const features = [
    {
      title: "Experiencia personalizada",
      description:
        "Nos esforzamos por brindar a cada cliente una experiencia adaptada a sus necesidades específicas, comprendiendo que cada empresa es única y requiere un enfoque personalizado.",
    },
    {
      title: "Innovación",
      description:
        "Siempre estamos buscando nuevas formas de mejorar y evolucionar en el campo del marketing digital, brindando a nuestros clientes soluciones creativas y actualizadas.",
    },
    {
      title: "Colaboración",
      description:
        "Valoramos la colaboración con nuestros clientes, involucrándonos activamente en el proceso creativo para lograr resultados exitosos en conjunto.",
    },
    {
      title: "Ética",
      description:
        "Nos regimos por principios éticos sólidos en todas nuestras prácticas comerciales, asegurando que nuestras acciones sean siempre justas y respetuosas.",
    },
    {
      title: "Transparencia",
      description:
        "Creemos en la transparencia en todas nuestras interacciones, desde el proceso de trabajo hasta la comunicación con el cliente, para fomentar una relación de confianza mutua.",
    },
    {
      title: "Profesionalismo",
      description:
        "Somos un equipo altamente profesional que trabaja con integridad y compromiso, manteniendo los más altos estándares en cada proyecto que asumimos.",
    },
    {
      title: "Aprendizaje continuo",
      description:
        "Nos comprometemos a mantenernos actualizados con las últimas tendencias y técnicas en marketing digital, lo que nos permite ofrecer servicios de vanguardia a nuestros clientes.",
    },
    {
      title: "Resultados medibles",
      description:
        "Nos enfocamos en resultados tangibles y medibles para nuestros clientes, utilizando métricas concretas para evaluar el éxito de nuestras estrategias y campañas.",
    },
  ]

  return (
    <section className="bg-[#7433FE] py-16 bg-gradient-to-r from-mint-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-12">¿Por qué elegirnos?</h2>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full relative"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {features.map((feature, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                <div className="p-1 h-full">
                  <Card className="bg-transparent backdrop-blur h-full flex flex-col">
                    <CardHeader>
                      <CardTitle className="text-xl font-semibold text-white">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="text-white">{feature.description}</p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="absolute -left-4 top-1/2 -translate-y-1/2">
            <CarouselPrevious className="relative left-4" />
          </div>
          <div className="absolute -right-4 top-1/2 -translate-y-1/2">
            <CarouselNext className="relative right-4" />
          </div>
        </Carousel>
      </div>
    </section>
  )
}

