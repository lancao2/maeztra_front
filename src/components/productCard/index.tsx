import Image from "next/image";
import product from "../../../public/product.png";

export default function ProductCard() {
  return (
    <div className="flex items-center flex-col gap-2 pl-[30px] min-w-[308px]">
      <div className="h-[381px] min-w-[308px]">
        <Image src={product} alt="produto" />
      </div>
      <div className="flex gap-2 mt-2 w-[254px] ">
        <div className="bg-[#DEAC71] w-7 h-7 rounded-[4px] border-[1px] border-[#353535] cursor-pointer"></div>
        <div className="bg-[#D37164] w-7 h-7 rounded-[4px] cursor-pointer"></div>
        <div className="bg-[#6497D3] w-7 h-7 rounded-[4px] cursor-pointer"></div>
        <div className="bg-[#3C3B79] w-7 h-7 rounded-[4px] cursor-pointer"></div>
      </div>
      <div className="flex flex-col gap-1 w-[254px]">
        <h3 className="text-[20px] font-bold">R$ 500,00</h3>
        <h2 className="text-[16px]">Faux Suede Mini Skirt</h2>
        <p className="opacity-50">
          A faux suede mini skirt featuring exposed button-front closures and
          panel seam construction.
        </p>
        <button className="bg-[#FAA500] text-white h-[35px] rounded-[4px]">
          {" "}
          Adicionar
        </button>
      </div>
    </div>
  );
}
