import Image from "next/image";
import iconprev from "../../../public/icon_prev_L.svg";
import iconnext from "../../../public/icon-next.svg";

export default function Highlight() {
  return (
    <div className="h-[320px] w-full bg-scroll bg-mb_fal tab-max:bg-on_sale_fal flex flex-col justify-end  px-[23px] bg-cover bg-no-repeat">
      <div className="flex justify-around tab-max:justify-center items-center">
        <div>
          <Image
            src={iconprev}
            alt="botão para mostrar anterior"
            height={32}
            width={19}
          />
        </div>
        <div className="mx-[13.5px] w-[60%]">
          <div className="text-white text-[14px]">
            <h1 className="text-[30px] font-bold leading-8 mb-[24px]">
              Promoções
              <br /> de Outono
            </h1>
            <p className="max-w-[320px]">
              Confiras os melhores looks para combinar com você nesse Outono
            </p>
            <button className="px-3 py-2 bg-[#FAA500] rounded-[4px] font-semibold mt-[16px]">
              Conferir
            </button>
          </div>
        </div>
        <div>
          <Image src={iconnext} alt="botão para mostrar proximo" />
        </div>
      </div>
      <div className="flex justify-center items-center mt-[40px] gap-[16px] pb-4">
        <div className="w-[8px] h-[8px] bg-[#FAA500] rounded-full"></div>
        <div className="w-[8px] h-[8px] border-[#FAA500] border-[1px] rounded-full"></div>
        <div className="w-[8px] h-[8px] border-[#FAA500] border-[1px] rounded-full"></div>
        <div className="w-[8px] h-[8px] border-[#FAA500] border-[1px] rounded-full"></div>
      </div>
    </div>
  );
}
