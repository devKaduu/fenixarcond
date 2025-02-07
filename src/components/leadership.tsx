import Image from "next/image";
import { LinkedinIcon as LinkedIn } from "lucide-react";
import { Button } from "@/components/ui/button";

const leaders = [
  {
    name: "Davi Correia de Oliveira",
    role: "CEO & Gerente Operacional",
    image: "/leaders/davi.jpeg",
    bio: "Com mais de 13 anos de experiência no setor de ar-condicionado, Davi lidera a equipe Fenix, garantindo excelência em cada projeto de fabricação, montagem e instalação de dutos.",
    linkedin: "https://www.linkedin.com/in/davi-correia-de-oliveira-517a70147/",
  },
  {
    name: "Elissandra Lameu de Sousa",
    role: "CEO & Gerente Área Administrativa",
    image: "/leaders/elissandra.jpeg",
    bio: "Com ampla experiência em gestão administrativa, Elissandra Lameu de Sousa é CEO e responsável pela área administrativa da Fenix, garantindo eficiência e crescimento sustentável.",
    linkedin: "https://www.linkedin.com/in/elissandra-lameu-de-sousa-a16134186/",
  },
];

export default function Leadership() {
  return (
    <section className="container py-24 md:py-32">
      <div className="mx-auto max-w-[58rem] text-center mb-16">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">
          Nossa Liderança
        </h2>
        <p className="mt-4 text-muted-foreground sm:text-lg">
          Conheça os visionários por trás da Fenix Ar Condicionado, impulsionando a inovação e o
          crescimento.
        </p>
      </div>
      <div className="grid gap-16 md:grid-cols-2">
        {leaders.map((leader) => (
          <div key={leader.name} className={`flex flex-col md:flex-row items-center gap-8`}>
            <div className="relative w-64 h-64 overflow-hidden rounded-2xl">
              <Image
                src={leader.image || "/placeholder.svg"}
                alt={leader.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-bold mb-2">{leader.name}</h3>
              <p className="text-primary font-medium mb-4">{leader.role}</p>
              <p className="text-muted-foreground mb-6">{leader.bio}</p>
              <div className="flex justify-center md:justify-start space-x-4">
                <Button variant="outline" size="icon" asChild>
                  <a href={leader.linkedin} target="_blank" rel="noopener noreferrer">
                    <LinkedIn className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </a>
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
