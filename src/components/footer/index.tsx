import Image from "next/image";
import facebook from "../../../public/facebook.com.svg";
import linkedin from "../../../public/linkedin.svg";
import instagram from "../../../public/instagram.svg";
import youtube from "../../../public/youtube.svg";
import visa from "../../../public/visa.svg";
import mastercard from "../../../public/mastercard.svg";
import vtex from "../../../public/logo_vtex_s.png";
import logoMaeztraBW from "../../../public/Maeztra_Logo_BW.png";

export default function Footer() {
  return (
    <footer className="w-full bg-[#353535] flex flex-wrap pt-[24px] justify-around tab-max:justify-center">
      <div className="flex gap-[24px] mb-[32px]">
        <Image src={facebook} alt="icone de facebook" />
        <Image src={linkedin} alt="icone do linkedin" />
        <Image src={instagram} alt="icone do instagram" />
        <Image src={youtube} alt="icone do youtube" />
      </div>
      <div className="flex gap-[24px] mb-[32px]">
        <Image src={visa} alt="icone da visa" />
        <Image src={mastercard} alt="icone da mastercard" />
        <Image src={visa} alt="icone da visa" />
        <Image src={mastercard} alt="icone da mastercard" />
      </div>
      <div className="text-[10px] text-white flex gap-[20px] mb-[32px]">
        <div>
          <span>Powered by</span>
          <Image src={vtex} alt="icone da vtex" />
        </div>
        <div>
          <span>Developed by</span>
          <Image src={logoMaeztraBW} alt="icone da Maeztra em preto e branco" />
        </div>
      </div>
    </footer>
  );
}
