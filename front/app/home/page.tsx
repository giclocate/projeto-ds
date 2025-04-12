"use client";
import Header from "@/components/ui/headerNotLogged";
import Image from "next/image";
import { DM_Sans } from "next/font/google";
import { Button } from "@/components/ui/button";
import ProductCarousel from "@/components/ui/carousel";

// import participantOngs from "../../public/participantOngs.svg";
import Footer from "@/components/ui/footer";
import { useRouter } from "next/navigation";
import ModalExplain from "./modal";
import { useState } from "react";

const dmSans = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "700"] });
export default function Home() {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleOpenModal() {
    setIsModalOpen(true);
  }

  function handleCloseModal() {
    setIsModalOpen(false);
  }
  return (
    <div className="flex flex-col gap-4 ">
      <Header />
      <div className="flex flex-row gap-8">
        <div className="flex flex-col gap-4 p-14 mt-12">
            <Image src="/logo9.svg" alt="Logo" width={420} height={140} className="self-center" />
            <div
          className="flex flex-col text-thin font-thin items-center text-center mt-8"
          style={{ fontFamily: dmSans.style.fontFamily }}
        >
          <div className="font-bold text-3xl">Artesanato único, feito com alma e coração</div>
          <div className="mt-6 text-base">
            Descubra o encanto do feito à mão e apoie <br />
            talentos únicos: explore agora nosso universo <br />
            de artesanatos com propósito.
          </div>
        </div>
        <div className="flex justify-center mt-6">
          <Button
            className={`w-[160px] h-[40px] bg-[#6672FA] text-white rounded-[4px] ${dmSans.className}`}
            onClick={() => router.push("/Marketplace")}
          >
            Compre agora
          </Button>
        </div>
        </div>
        <div style={{ display: "flex", marginLeft: "30rem" }}>
          <Image
            src="productsLandingPage.svg"
            width={800}
            height={800}
            alt="Home Image"
          />
        </div>
      </div>
      <ProductCarousel />
      <div style={{ display: "flex", flexDirection: "row", marginTop: "3rem", marginBottom: "3rem" }}>
        <div
          className="flex flex-col px-8 py-6"
          style={{
            marginLeft: "1.5rem",
            fontFamily: dmSans.style.fontFamily,
            gap: "1.5rem",
            maxWidth: "50%",
          }}
        >
          <div className="font-bold text-3xl" style={{ color: "#3340FA" }}>
            Quem somos?
          </div>
          <div style={{ fontSize: "1.1rem", lineHeight: "1.6" }}>
            O Bora Impactar é uma iniciativa do governo para ampliar o comércio em produções de pessoas de ONGs. Nosso
            objetivo é criar um espaço onde artesãs talentosas possam mostrar seu trabalho e conectar-se diretamente
            com consumidores que valorizam produtos artesanais únicos e com propósito.
          </div>
          <div className="mt-8">
            <Button
              className={`w-[160px] h-[45px] bg-[#6672FA] text-white rounded-[4px] text-base ${dmSans.className}`}
              onClick={handleOpenModal}
            >
              Saber mais
            </Button>
            {isModalOpen && (
              <ModalExplain isOpen={isModalOpen} onClose={handleCloseModal}>
                <h4
                  style={{
                    textAlign: "center",
                    fontFamily: dmSans.style.fontFamily,
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                  }}
                >
                  Sobre a Iniciativa
                </h4>
                <p
                  style={{
                    fontFamily: dmSans.style.fontFamily,
                    fontSize: "1.2rem",
                    marginTop: "1.5rem",
                    lineHeight: "1.6",
                    color: "black",
                  }}
                >
                  O Bora Impactar é uma iniciativa inovadora que visa conectar artesãos de ONGs a consumidores que
                  valorizam o trabalho feito à mão. Nosso objetivo é incentivar a economia criativa e proporcionar
                  oportunidades justas para pequenos produtores. Através da nossa plataforma, buscamos criar um impacto
                  social positivo e sustentável, valorizando o trabalho artesanal e as histórias por trás de cada peça.
                </p>
              </ModalExplain>
            )}
          </div>
        </div>
        <div className="flex items-center justify-center" style={{ flex: 1 }}>
          <Image src="whoAreWe.svg" width={500} height={500} alt="Foto de uma mulher fazendo artesanato" />
        </div>
      </div>
      <div
        style={{
          marginLeft: "1.5rem",
          fontFamily: dmSans.style.fontFamily,
          fontSize: "1.5rem",
          color: "#3340FA",
          gap: "4",
          flexDirection: "column",
          marginTop: "5rem",
        }}
      ></div>
      <Footer />{" "}
    </div>
  );
}
