import Image from "next/image";
import email from "../../../public/newsletter-mail-icon.png";
import personal from "../../../public/image 4.png";

export default function NewLetterModal() {
  return (
    <div className="w-full h-full">
      <div className="flex">
        <div>
          <Image src={personal} alt="Atleta" />
        </div>
        <div className="w-[55%] flex flex-col justify-center items-center text-[#787D83] px-[50px] gap-4">
          <Image src={email} alt="carta" />
          <h3 className="text-[12px]">Bem Vindo à MAEZTRA</h3>
          <p className="text-[20px] text-center">
            Receba em Primeira mão <br />
            <b className="font-bold ">desconto e ofertas exclusivas</b>
          </p>
          <input
            type="text"
            placeholder="Digite seu e-mail"
            className="border-[1px] border-[#C4C4C4] h-[40px] rounded-[10px] w-full pl-4"
          />
          <button className="text-white bg-[#FAA500] px-[10px] rounded-[10px] h-[40px] w-full">
            Enviar
          </button>
        </div>
      </div>
    </div>
  );
}
