import Image from "next/image";
import logoMaeztra from "../../../public/logo_maeztra.png";
import iconMenu from "../../../public/iconMenu.svg";
import iconSearch from "../../../public/search.svg";
import iconBag from "../../../public/iconBag.svg";
import iconUser from "../../../public/icon-user.svg";
import iconHeart from "../../../public/icon-heart.svg";

import { Titillium_Web } from "next/font/google";

const titillium_Web = Titillium_Web({ weight: "400", subsets: ["latin"] });

export default function Header() {
  return (
    <header>
      <div className="bg-[#353535] w-full h-[24px] text-center flex justify-center items-center">
        <span className={`text-white text-[10px] ${titillium_Web.className}`}>
          Acompanhe as melhores promoções disponíveis aqui na Maeztra.
        </span>
      </div>
      <div className="h-[88px] flex items-center justify-between mx-[20px]">
        <div className="flex gap-[20px] justify-center items-center">
          <Image
            src={iconMenu}
            alt="incone para abrir o menu"
            className="hidden tab-max:block "
          />
          <Image
            src={logoMaeztra}
            alt="logo maeztra"
            width={110}
            height={11}
            className="ml-[10%] tab-max:ml-0"
          />
        </div>
        <div className="bg-[#EFEFEF] text-[14px] h-[40px] rounded-s-[4px] tab-max:hidden">
          <input
            type="text"
            placeholder="O que você Busca?"
            className="bg-[#EFEFEF] h-[100%] rounded-s-[4px] w-[30vw] pl-[24px]"
          />
          <button className="bg-[#FAA500] h-[100%] rounded-[4px] px-5 text-white">
            Buscar
          </button>
        </div>
        <div className="flex gap-[40px] justify-center items-center">
          <Image
            src={iconSearch}
            alt="icone para abrir a pesquisa"
            width={24}
            height={24}
            className="hidden tab-max:block"
          />
          <Image
            src={iconBag}
            alt="icone para abrir a sacola/ carrinho"
            width={21}
            height={24}
            className="hidden tab-max:block"
          />
          <div className="text-[14px] flex ml-3 tab-max:hidden">
            <div className="flex gap-2 justify-center items-center w-[10vw]">
              <Image src={iconUser} alt="incone de usuario" />
              <p>Minha Conta</p>
            </div>
            <div className="flex gap-2 justify-center items-center w-[11vw]">
              <Image src={iconHeart} alt="incone de usuario" />
              <p>Favoritos</p>
            </div>
            <div className="flex gap-2 justify-center items-center w-[11vw]">
              <Image src={iconBag} alt="incone de usuario" />
              <p>Meu Carrinho</p>
            </div>
          </div>
        </div>
      </div>
      <nav className="tab-max:hidden">
        <hr />
        <ul className="flex justify-around items-center w-full text-[14px] px-[10%] py-3">
          <li className="hover:text-[#FAA500] hover:font-semibold cursor-pointer">
            Novidades
          </li>
          <li className="hover:text-[#FAA500] hover:font-semibold cursor-pointer">
            Vestidos
          </li>
          <li className="hover:text-[#FAA500] hover:font-semibold cursor-pointer">
            Roupas
          </li>
          <li className="hover:text-[#FAA500] hover:font-semibold cursor-pointer">
            Sapatos
          </li>
          <li className="hover:text-[#FAA500] hover:font-semibold cursor-pointer">
            Lingerie
          </li>
          <li className="hover:text-[#FAA500] hover:font-semibold cursor-pointer">
            Acessórios
          </li>
          <li className="hover:text-[#FAA500] hover:font-semibold cursor-pointer">
            OUTLET
          </li>
        </ul>
      </nav>
    </header>
  );
}
