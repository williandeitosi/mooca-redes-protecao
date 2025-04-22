"use client";

import { Button } from "@/components/ui/button";
import { handleWhatsAppClick } from "@/utils/handleWhatsAppClick";
import { useRouter } from "next/navigation";

interface WhatsappButtonProps {
  label: string;
}

export default function WhatsappButton({ label }: WhatsappButtonProps) {
  const router = useRouter();

  const handleClick = async (e: React.MouseEvent) => {
    handleWhatsAppClick(label);

    window.open(
      `https://wa.me/5511971423779?text=${encodeURIComponent(
        "Encontrei você pelo site e estou entrando em contato para solicitar uma cotação"
      )}`,
      "_blank"
    );

    router.push("/enviar_mensagem");

    e.preventDefault();
  };

  return (
    <Button
      onClick={handleClick}
      size="lg"
      className="lg:h-14 lg:w-1/2 mb-6 lg:text-lg bg-gradient-to-r from-green-400 to-green-500 text-white px-6 py-3 rounded-lg transform transition duration-300 hover:scale-105 shadow-[0_0_10px_2px_rgba(34,197,94,0.7)] hover:shadow-[0_0_20px_5px_rgba(34,197,94,0.8)]"
    >
      {label}
    </Button>
  );
}
