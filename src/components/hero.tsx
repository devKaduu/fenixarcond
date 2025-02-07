import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

import FenixLogo from "@/assets/logo.png";

export default function Hero() {
  return (
    <section className="container flex min-h-[calc(100vh-5.5rem)] max-w-screen-2xl flex-col items-center justify-center space-y-8 py-24 text-center md:py-32">
      <div className="space-y-4">
        <Image
          src={FenixLogo}
          width={1440}
          height={80}
          alt="Logo Fenix Arcondicionado"
          className="absolute left-1/2 transform -translate-x-1/2 blur-md -z-10 top-0 opacity-50 max-sm:top-52"
        />

        <h1 className="bg-gradient-to-br from-foreground from-30% via-foreground/90 to-foreground/70 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl md:text-6xl lg:text-8xl">
          Fenix
          <br />
          Ar Condicionado
        </h1>
        <p className="mx-auto max-w-[42rem] leading-normal text-accent-foreground sm:text-xl sm:leading-8">
          Prestação de serviços de fabricação, montagem e instalação de dutos de ar-condicionado.
          Transparência, suporte de excelência e mão de obra especializada, garantindo agilidade e
          qualidade em cada serviço.
        </p>
      </div>
      <div className="flex gap-4">
        <Button size="lg">
          Explorar Soluções
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
        <Button variant="outline" size="lg">
          Estrutura
        </Button>
      </div>
    </section>
  );
}
