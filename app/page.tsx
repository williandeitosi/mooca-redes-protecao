import CustomCarousel from "@/components/carousel/pages";
import { Card, CardContent } from "@/components/ui/card";
import FloatingWhatsappIcon from "@/components/ui/IconWhatsAppButton";
import WhatsappButton from "@/components/ui/WhatsappButton";
import {
  CreditCard,
  MapPin,
  PawPrint,
  Phone,
  Shield,
  Sparkles,
  Star,
  PenToolIcon as Tool,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-primary text-primary-foreground py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-lg md:text-2xl font-semibold flex gap-3 items-center justify-center">
            <Phone /> (11)97142-3779
          </h1>
        </div>
      </header>

      <main className="flex-grow">
        <section className="relative h-screen md:h-full">
          <Image
            src="/images/estetica.jpg"
            alt="image header"
            fill
            className="object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-primary/100 md:from-primary/85 transition-opacity" />

          <div className="relative z-10 py-10 w-full">
            <div className="px-4 mx-auto md:mx-12 ">
              <div className="flex justify-center md:justify-start">
                <div className="relative w-20 h-20 mb-4 md:mb-0 md:w-28 md:h-28">
                  <Image
                    src="/images/mooca-branco-removebg-preview.png"
                    alt="Logo"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="w-full md:w-1/2">
                  <h1 className="text-2xl md:text-5xl mb-4 text-white">
                    <strong>Redes de Proteção</strong> para garantir a segurança
                    das suas crianças e pets
                  </h1>

                  <p className="text-md md:text-2xl mb-6 text-white">
                    Atendemos <strong>São Paulo Capital e ABC Paulista</strong>
                  </p>

                  <Link
                    href={`https://wa.me/5511963403041?text=${encodeURIComponent(
                      "Encontrei você pelo site e estou entrando em contato para solicitar uma cotação"
                    )}`}
                    target="_blank"
                  >
                    <WhatsappButton label="Orçamento via WhatsApp" />
                  </Link>

                  <ul className="space-y-2 text-white mt-8 md:mt-0 text-md md:text-xl">
                    <li className="flex items-center">
                      <Star className="mr-2 flex-shrink-0" />{" "}
                      <p>
                        <strong>5 anos de garantia</strong> no material e
                        instalação
                      </p>
                    </li>
                  </ul>
                </div>

                <div className="w-full md:w-1/3 md:mt-0">
                  <div className="relative aspect-square ">
                    <Image
                      src="/images/durabilidade.jpg"
                      alt="Redes de proteção"
                      fill
                      className="rounded-md object-cover"
                    />
                  </div>
                </div>
              </div>
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
            <div className="grid md:grid-cols-4 gap-8">
              <Card className=" flex flex-col justify-between">
                <CardContent className="p-6">
                  <Shield className="w-12 h-12 mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">
                    Proteja Suas Crianças
                  </h3>
                  <p>
                    Evite acidentes domésticos e proteja quem você mais ama.
                    Redes ideais para impedir quedas de crianças ou objetos de
                    janelas e sacadas.
                  </p>
                </CardContent>
                <div className="relative w-full h-[200px]">
                  <Image
                    src="/images/crianca.jpg"
                    alt="criança"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              </Card>
              <Card className=" flex flex-col justify-between">
                <CardContent className="p-6">
                  <Tool className="w-12 h-12 mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">Durabilidade</h3>
                  <p>
                    Redes certificadas e resistentes às condições climáticas.
                  </p>
                </CardContent>
                <div className="relative w-full h-[200px]">
                  <Image
                    src="/images/durabilidade.jpg"
                    alt="criança"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              </Card>
              <Card className=" flex flex-col justify-between">
                <CardContent className="p-6">
                  <Sparkles className="w-12 h-12 mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">
                    Estética Preservada
                  </h3>
                  <p>
                    Soluções discretas e de alta qualidade que não comprometem a
                    decoração.
                  </p>
                </CardContent>
                <div className="relative w-full h-[200px]">
                  <Image
                    src="/images/protecao-header.jpg"
                    alt="criança"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              </Card>
              <Card className=" flex flex-col justify-between">
                <CardContent className="p-6">
                  <PawPrint className="w-12 h-12 mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">
                    Proteção para Pets
                  </h3>
                  <p>
                    Garanta a segurança dos seus pets de forma prática e
                    confiável. Mantenha cães e gatos longe de perigos em janelas
                    e varandas.
                  </p>
                </CardContent>
                <div className="relative w-full h-[200px]">
                  <Image
                    src="/images/protecao-pets.jpg"
                    alt="criança"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              </Card>
            </div>
          </div>
        </section>

        <section className="bg-zinc-200 py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-4 text-center">
              Estamos Perto de Você!
            </h2>
            <p className="text-xl mb-10 text-center">
              Atendemos com agilidade nas principais regiões de São Paulo.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
              {[
                "Santo André",
                "Diadema",
                "São Bernardo do Campo",
                "São Caetano",
                "Mauá",
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
              <Link
                href={`https://wa.me/5511963403041?text=${encodeURIComponent(
                  "Encontrei você pelo site e estou entrando em contato para solicitar uma cotação"
                )}`}
                target="_blank"
              >
                <WhatsappButton label="Orçamento via WhatsApp" />
              </Link>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-10 text-center">
              Por Que a Mooca Redes de Proteção É a Escolha Certa?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col gap-4">
                <Card>
                  <CardContent className="p-6">
                    <CreditCard className="w-12 h-12 mb-4 text-primary" />
                    <h3 className="text-xl font-semibold mb-2">
                      Pagamento Facilitado
                    </h3>
                    <p>
                      Parcelamos no cartão de crédito para caber no seu
                      orçamento.
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
              <CustomCarousel />
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
            <Link
              href={`https://wa.me/5511963403041?text=${encodeURIComponent(
                "Encontrei você pelo site e estou entrando em contato para solicitar uma cotação"
              )}`}
              target="_blank"
            >
              <WhatsappButton label="Solicite um Orçamento Agora!" />
            </Link>
            <div className="flex justify-center items-center">
              <Shield className="w-12 h-12 mr-4" />
              <p className="text-lg font-semibold">
                Garantia de Qualidade nas Redes e Instalações
              </p>
            </div>
          </div>
        </section>
        <FloatingWhatsappIcon />
        <div className="fixed bottom-4 right-4 z-50 cursor-pointer hover:opacity-90 hover:scale-110 transform transition duration-150"></div>
      </main>

      <footer className="bg-zinc-200 py-6">
        <div className="container mx-auto px-4 text-center">
          <p>
            &copy; 2025 Mooca Redes de Proteção. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
