import Close from "@/assets/svg/close.svg";
interface IModal {
  children: React.ReactNode;
  show: boolean;
  setShow: (value: boolean) => void;
}

export default function Modal({ children, show, setShow }: IModal) {
  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black bg-opacity-40 transition-opacity duration-1000 ${
        show ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
      onClick={() => setShow(false)}
    >
      <div
        className={`flex w-full max-w-[37rem] scale-90 transform flex-col items-center justify-center rounded-xl bg-white p-10 transition-transform duration-1000 ${
          show ? "scale-100" : "scale-95"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => setShow(false)}
          className="flex w-full justify-end"
        >
          <Close />
        </button>
        {children}
      </div>
    </div>
  );
}
