import ProductCard from "../productCard";

export default function ToShop() {
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <div className="flex justify-center text-[24px] text-[#353535] font-bold mt-[40px]">
        <h4>As Mais Pedidas</h4>
      </div>
      <div className="flex justify-center tab-max:justify-between tab-max:overflow-x-scroll gap-4 w-full mt-[16px]">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
}
