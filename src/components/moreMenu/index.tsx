export default function MoreMenu() {
  return (
    <div className="text-[#353535] text-[16px] font-bold">
      <div className="w-full flex tab-max:flex-col justify-around items-center mb-[45px] mt-[26px]">
        <div className="w-full flex flex-col tab-max:flex-row  items-center tab-max:items-start justify-between pr-[35px] pl-[31px] py-4 gap-6">
          <h4 className="text-[16px]">Informações</h4>
          <p className="tab-max:block hidden">+</p>
          <div className="tab-max:hidden flex justify-center flex-col items-center font-normal text-[12px] gap-6">
            <span>Quem Somos</span>
            <span>Prazo de Envio</span>
            <span>Trocas e Devoluções</span>
            <span>Promoções e Cupons</span>
          </div>
        </div>
        <div className="w-full flex flex-col tab-max:flex-row  items-center tab-max:items-start justify-between pr-[35px] pl-[31px] py-4 gap-6">
          <h4>Minha Conta</h4>
          <p className="tab-max:block hidden">+</p>
          <div className="tab-max:hidden flex justify-center flex-col items-center font-normal text-[12px] gap-6">
            <span>Minha Conta</span>
            <span>Meus Pedidos</span>
            <span>Cadastre-se</span>
          </div>
        </div>
        <div className="w-full flex flex-col tab-max:flex-row  items-center tab-max:items-start justify-between pr-[35px] pl-[31px] py-4 gap-6">
          <h4>Onde nos Encontrar</h4>
          <p className="tab-max:block hidden">+</p>
          <div className="tab-max:hidden flex justify-center flex-col items-center font-normal text-[12px] gap-6">
            <span>Lojas</span>
            <span>Endereço</span>
          </div>
        </div>
      </div>
    </div>
  );
}
