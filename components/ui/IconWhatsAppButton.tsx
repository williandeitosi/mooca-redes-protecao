"use client";

import { handleWhatsAppClick } from "@/utils/handleWhatsAppClick";
import Image from "next/image";
import Link from "next/link";

export default function FloatingWhatsappIcon() {
  return (
    <div
      className="fixed bottom-4 right-4 z-50 cursor-pointer hover:opacity-90 hover:scale-110 transform transition duration-150"
      style={{ zIndex: 9999 }} // Garante que o ícone fique acima de outros elementos
    >
      <Link
        href={`https://wa.me/5511963403041?text=${encodeURIComponent(
          "Encontrei você pelo site e estou entrando em contato para solicitar uma cotação"
        )}`}
        target="_blank"
        onClick={() =>
          handleWhatsAppClick("Contato via WhatsApp (ícone flutuante)")
        }
      >
        <Image
          src="/images/whatsapp.png"
          alt="Fale conosco pelo WhatsApp"
          width={60}
          height={60}
        />
      </Link>
    </div>
  );
}
