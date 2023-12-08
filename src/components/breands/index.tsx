import Image from "next/image";
import forever21 from "../../../public/forever21.png";

export default function Breands() {
  const breads = [
    {
      name: "forever21",
      img: forever21,
    },
    {
      name: "forever21",
      img: forever21,
    },
    {
      name: "forever21",
      img: forever21,
    },
    {
      name: "forever21",
      img: forever21,
    },
    {
      name: "forever21",
      img: forever21,
    },
  ];
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex justify-center w-full mb-[25px]">
        <h4 className="text-[24px] font-bold text-[#353535]">
          Marcas Parceiras
        </h4>
      </div>
      <div className="flex gap-2 justify-center tab-max:justify-between tab-max:overflow-x-scroll items-start pl-[30px] w-full">
        {breads.map((bread, index) => {
          return (
            <div key={index} className="min-w-[320px]">
              <Image
                src={bread.img}
                alt={bread.name}
                className="rounded-[4px]"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
