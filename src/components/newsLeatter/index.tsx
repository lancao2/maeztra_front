export default function NewsLetter() {
  return (
    <div className="w-full py-[24px] bg-[#FAFAFA] flex justify-center items-center tab-max:flex-col tab-max:gap-2 gap-4">
      <h3 className="text-[24px] text-[#353535] font-bold">
        Recebe Nossa Newsletter
      </h3>
      <div className="flex tab-max:gap-4 border-[#353535] rounded-[4px] tab-max:w-[80%] w-[40%]">
        <input
          type="email"
          id="email"
          placeholder="Digite seu email"
          className="w-[100%] pl-[24px] border-[1px] tab-max:border-[#353535] rounded-[4px] h-[40px]"
        />
        <button
          type="submit"
          className="text-white bg-[#FAA500] px-[10px] rounded-[4px] h-[40px]"
        >
          Enviar
        </button>
      </div>
    </div>
  );
}
