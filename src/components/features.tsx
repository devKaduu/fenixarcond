import { Brain, Cloud, Shield, Zap } from "lucide-react";

const features = [
  {
    name: "Visão",
    description:
      "Uma parceira de negócios que entrega soluções técnicas com qualidade, agilidade e comprometimento para alcançar seus resultados.",
    icon: Brain,
  },
  {
    name: "Valores",
    description:
      "Valorizamos a mão de obra qualificada, com compromisso, ética, transparência, credibilidade, qualidade e ótimo relacionamento interpessoal.",
    icon: Cloud,
  },
  {
    name: "Diferecial",
    description:
      "A Fenix tem como objetivo garantir a satisfação do cliente, conquistando e fidelizando com altos padrões de qualidade em todos os processos.",
    icon: Shield,
  },
  {
    name: "Política de Qualidade",
    description:
      "A missão da Fenix é garantir a satisfação contínua de clientes internos e externos, assegurando excelência nos resultados.",
    icon: Zap,
  },
];

export default function Features() {
  return (
    <section className="container space-y-16 py-24 md:py-32">
      <div className="mx-auto max-w-[58rem] text-center">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">Solução</h2>
        <p className="mt-4 text-muted-foreground sm:text-lg">
          Prestação de Serviços de Fabricação, Montagem e Instalação de Dutos de Ar Condicionado{" "}
          <br /> em chapa galvanizada, chapa preta, inox, alumínio e Dutos de MPU.
        </p>
      </div>
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
        {features.map((feature) => (
          <div
            key={feature.name}
            className="relative overflow-hidden rounded-lg border bg-background p-8"
          >
            <div className="flex items-center gap-4">
              <feature.icon className="h-8 w-8" />
              <h3 className="font-bold">{feature.name}</h3>
            </div>
            <p className="mt-6 text-muted-foreground">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
