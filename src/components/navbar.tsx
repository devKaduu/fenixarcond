import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

import FenixLogo from "@/assets/logo-branco.png";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 max-w-screen-2xl items-center max-md:justify-between">
        <Link href="/" className="mr-12 flex items-center space-x-2 max-sm:flex-1">
          <Image src={FenixLogo} width={90} height={90} alt="Logo Fenix Arcondicionado" />
        </Link>
        <nav className="flex flex-1 items-center space-x-6 text-md font-medium max-md:hidden">
          <Link href="/solutions" className="transition-colors hover:text-primary">
            Soluções
          </Link>
          <Link href="/industries" className="transition-colors hover:text-primary">
            Estrutura
          </Link>
          <Link href="/about" className="transition-colors hover:text-primary">
            Obras
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm" className="text-md max-sm:text-sm">
            Whatssap
          </Button>
          <Button size="sm" className="text-md max-sm:text-sm">
            {" "}
            Entrar em Contato
          </Button>
        </div>
      </div>
    </header>
  );
}
