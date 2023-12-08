import Image from "next/image";
import iconWorld from "../../../public/iconWorld.png";
import iconHome from "../../../public/iconHome.png";
import iconBox from "../../../public/iconBox.png";
import iconGift from "../../../public/iconGift.png";
import iconCar from "../../../public/iconCar.png";

export default function Strengths() {
  const strengths = [
    {
      img: iconWorld,
      title: "Produtos importados",
      content: "Produto de Alta Qualidade",
    },
    {
      img: iconHome,
      title: "Estoque no Brazil",
      content: "Produtos mais perto de você!",
    },
    {
      img: iconBox,
      title: "Trocas Garantidas",
      content: "Trocas em até 48 horas, vejas as regras",
    },
    {
      img: iconGift,
      title: "Ganhe 5% off",
      content: "Pagando à vista no Cartão",
    },
    {
      img: iconCar,
      title: "Frete Grátis",
      content: "Em compras acima de R$ 499,00",
    },
  ];

  return (
    <div className="pb-[40px] w-full text-[#353535] flex flex-col justify-center items-center ">
      <div className="w-full flex justify-center pt-[24px] pb-[21px]">
        <h3 className="text-[16px] font-semibold">
          Por que comprar na Maeztra?
        </h3>
      </div>
      <div className="flex justify-center tab-max:justify-between tab-max:overflow-x-scroll gap-4 tab-max:pl-[31px] w-full">
        {strengths.map((element, index) => {
          return (
            <div
              key={index}
              className="flex justify-start items-center min-w-[298px] bg-[#EFEFEF] rounded-[4px] gap-[22px] pt-[11px] pb-[14px] pl-[26px] pr-[19px]"
            >
              <div>
                <Image src={element.img} alt={element.title} />
              </div>
              <div className="min-w-[200px]">
                <h5 className="text-[14px] font-bold">{element.title}</h5>
                <p className="text-[12px]">{element.content}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
