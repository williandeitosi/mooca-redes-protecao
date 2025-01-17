import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  CheckCircle,
  CreditCard,
  MapPin,
  Shield,
  PenToolIcon as Tool,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-primary text-primary-foreground py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold">Mooca Redes de Proteção</h1>
        </div>
      </header>

      <main className="flex-grow">
        <section className="relative">
          <Image
            src="/images/protecao-header.jpg"
            alt="image header"
            fill
            className="object-cover"
            priority
          />
          {/* Overlay gradiente */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary-foreground/90" />

          {/* Conteúdo */}
          <div className="relative z-10 py-20">
            <div className="container mx-auto px-4">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                Proteção Garantida Para Janelas, Sacadas e Mais em São Paulo!
              </h1>
              <p className="text-xl mb-6 text-white">
                Instalação rápida, segura e com pagamento facilitado. Atendemos
                Mooca, Tatuapé, Perdizes e mais regiões da capital.
              </p>
              <Button size="lg" className="mb-6">
                <Link href="https://wa.me/SEU_NUMERO_AQUI" target="_blank">
                  Peça um Orçamento Agora
                </Link>
              </Button>
              <ul className="space-y-2 text-white">
                <li className="flex items-center">
                  <CheckCircle className="mr-2" /> Redes de alta qualidade para
                  janelas, sacadas, piscinas, e quadras.
                </li>
                <li className="flex items-center">
                  <CheckCircle className="mr-2" /> Garantia de instalação segura
                  e durável.
                </li>
                <li className="flex items-center">
                  <CheckCircle className="mr-2" /> Atendimento ágil em toda a
                  região de São Paulo.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-4 text-center">
              Por Que Escolher Redes de Proteção?
            </h2>
            <p className="text-xl mb-10 text-center">
              Segurança e tranquilidade em todos os ambientes da sua casa ou
              empresa.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="p-6">
                  <Shield className="w-12 h-12 mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">
                    Proteção Completa
                  </h3>
                  <p>
                    Evite acidentes com crianças, pets ou objetos em janelas e
                    sacadas.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <Tool className="w-12 h-12 mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">Durabilidade</h3>
                  <p>
                    Redes certificadas e resistentes às condições climáticas.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <Image
                    src="/placeholder.svg"
                    alt="Estética"
                    width={48}
                    height={48}
                    className="mb-4"
                  />
                  <h3 className="text-xl font-semibold mb-2">
                    Estética Preservada
                  </h3>
                  <p>
                    Soluções discretas e de alta qualidade que não comprometem a
                    decoração.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="bg-muted py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-4 text-center">
              Estamos Perto de Você!
            </h2>
            <p className="text-xl mb-10 text-center">
              Atendemos com agilidade nas principais regiões de São Paulo.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
              {[
                "Mooca",
                "Vila Alpina",
                "Vila Prudente",
                "Tatuapé",
                "Perdizes",
                "Vila Madalena",
                "Morumbi",
                "Itaim Bibi",
                "Lapa",
                "Região Central",
              ].map((region) => (
                <div key={region} className="flex items-center">
                  <MapPin className="mr-2 text-primary" />
                  <span>{region}</span>
                </div>
              ))}
            </div>
            <div className="text-center">
              <Button size="lg">
                <Link href="https://wa.me/SEU_NUMERO_AQUI" target="_blank">
                  Agende Agora Mesmo o Seu Atendimento!
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-10 text-center">
              Por Que a Mooca Redes de Proteção É a Escolha Certa?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="p-6">
                  <CreditCard className="w-12 h-12 mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">
                    Pagamento Facilitado
                  </h3>
                  <p>
                    Parcelamos no cartão de crédito para caber no seu orçamento.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <Shield className="w-12 h-12 mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">
                    Materiais de Alta Qualidade
                  </h3>
                  <p>
                    Utilizamos redes certificadas para máxima resistência e
                    durabilidade.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <Tool className="w-12 h-12 mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">
                    Atendimento Especializado
                  </h3>
                  <p>Equipe treinada para uma instalação rápida e segura.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="bg-primary text-primary-foreground py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Proteja Seu Lar Hoje Mesmo!
            </h2>
            <p className="text-xl mb-8">
              A segurança que sua família merece está a um clique de distância.
            </p>
            <Button size="lg" variant="secondary" className="mb-8">
              <Link href="https://wa.me/SEU_NUMERO_AQUI" target="_blank">
                Solicite um Orçamento Agora!
              </Link>
            </Button>
            <div className="flex justify-center items-center">
              <Shield className="w-12 h-12 mr-4" />
              <p className="text-lg font-semibold">
                Garantia de Qualidade nas Redes e Instalações
              </p>
            </div>
          </div>
        </section>
        <div className="fixed bottom-4 right-4 z-50 cursor-pointer hover:opacity-90 transition-opacity">
          <Link href="https://wa.me/SEU_NUMERO_AQUI" target="_blank">
            <Image
              src="/images/whatsapp.png"
              alt="Fale conosco pelo WhatsApp"
              width={60}
              height={60}
              priority
            />
          </Link>
        </div>
      </main>

      <footer className="bg-muted py-6">
        <div className="container mx-auto px-4 text-center">
          <p>
            &copy; 2025 Mooca Redes de Proteção. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
