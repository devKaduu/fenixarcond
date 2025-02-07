import Link from "next/link";
import { MessageCircle, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container flex flex-col gap-8 py-8 md:flex-row md:py-12">
        <div className="flex-1 space-y-4">
          <h2 className="font-bold">Fenix Ar Condicionado</h2>
          <p className="text-sm text-muted-foreground">Prestação de serviços de fabricação.</p>
        </div>
        <div className="grid flex-1 grid-cols-2 gap-12 sm:grid-cols-3">
          <div className="space-y-4">
            <h3 className="text-sm font-medium">Soluções</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/ai-analytics"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  Visão
                </Link>
              </li>
              <li>
                <Link
                  href="/cloud-services"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  Valores
                </Link>
              </li>
              <li>
                <Link
                  href="/ai-analytics"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  Diferecial
                </Link>
              </li>
              <li>
                <Link
                  href="/cloud-services"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  Política de Qualidade
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-medium">Empresa</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/about"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  Obras
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  Nossa Liderança
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-medium">Social</h3>
            <div className="flex space-x-4">
              <Link
                href="https://github.com/amanesoft"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                <MessageCircle className="h-5 w-5" />
                <span className="sr-only">Whatssap</span>
              </Link>
              <Link
                href="https://linkedin.com/company/amanesoft"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="container border-t py-6">
        <p className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Fenix Ar Condicionado. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
