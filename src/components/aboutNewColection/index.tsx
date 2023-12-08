import Image from "next/image";
import aboutNewColection from "../../../public/aboutNewColection.png";
import aboutNewColectionbig from "../../../public/1vLCv01.png.png";

export default function AboutNewColectio() {
  return (
    <div className="flex tab-max:flex-col justify-around tab-max:justify-start items-center w-full mt-[23px] tab-max:gap-4  pb-[39px]">
      <div className="flex flex-col w-[420px] tab-max:w-[269px] gap-4 tab-max:ml-[-25px]">
        <h3 className="text-[24px] font-bold">Lorem ipsum </h3>
        <p className="text-[14px] ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum
          mauris posuere fusce proin mattis. Hendrerit cras ut nunc enim dictum.
          Mattis proin ut quis donec sed eget nulla. Vel mi ut mauris integer.
          Nibh sagittis in lobortis sed cursus condimentum velit pharetra. Amet
          luctus ut vulputate scelerisque.
        </p>
      </div>
      <div>
        <Image
          src={aboutNewColection}
          alt="Sobre nova coleção"
          className="hidden tab-max:block"
        />
        <Image
          src={aboutNewColectionbig}
          alt="Sobre nova coleção"
          className="tab-max:hidden"
        />
      </div>
    </div>
  );
}
