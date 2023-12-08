interface IModalRoot {
  isOpen: boolean;
  children: JSX.Element;
  closeModal: any;
}

export default function ModalRoot({
  isOpen,
  children,
  closeModal,
}: IModalRoot) {
  if (!isOpen) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75">
      <div>
        <p
          onClick={closeModal}
          className="text-black cursor-pointer text-right"
        >
          Fechar
        </p>
        <div className="bg-white">{children}</div>
      </div>
    </div>
  );
}
