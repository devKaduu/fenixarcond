import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const caseStudies = [
  {
    title: "Data Centeres - Scala",
    description: "São Paulo - SP",
    image: "/obras/data-center.webp",
  },
  {
    title: "Johnson & Johnson",
    description: "Blue Box - Guarulhos - SP",
    image: "/obras/johson-johson.jpg",
  },
  {
    title: "Mercedes-Benz Brasil",
    description: "Offic Renovation - São Bernardo do Campo - SP",
    image: "/obras/mercedes.jpg",
  },
];

export default function CaseStudies() {
  return (
    <section className="container space-y-16 py-24 md:py-32">
      <div className="mx-auto max-w-[58rem] text-center">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">Obras</h2>
        <p className="mt-4 text-muted-foreground sm:text-lg">
          Principais obras realizadas pela equipe Fenix com eficiência, <br /> qualidade e no prazo,
          sempre atendendo às necessidades dos nossos clientes.
        </p>
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {caseStudies.map((study, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-lg border bg-background"
          >
            <div className="aspect-video overflow-hidden">
              <Image
                src={study.image || "/placeholder.svg"}
                alt={study.title}
                width={500}
                height={400}
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h3 className="font-bold text-xl mb-2">{study.title}</h3>
              <p className="text-muted-foreground mb-4">{study.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center">
        <Button size="lg">
          Ver todas as Obras
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </section>
  );
}
