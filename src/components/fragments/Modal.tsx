import Close from "@/assets/svg/close.svg";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import Button from "../elements/Button";

interface IModal {
  show: boolean;
  children: React.ReactNode;
  setShow: (value: boolean) => void;
  type?: "template" | "custom";
  templateData?: IModalTemplate;
}

export default function Modal({
  children,
  show,
  setShow,
  type = "custom",
  templateData,
}: IModal) {
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
        {type == "custom" ? (
          children
        ) : (
          <ModalTemplate {...templateData!} setShow={setShow} />
        )}
      </div>
    </div>
  );
}

export interface IModalTemplate {
  image: StaticImageData;
  title: string;
  description: string;
  action: {
    navigation: string;
    label: string;
  };
}

function ModalTemplate({
  image,
  title,
  description,
  action,
  setShow,
}: IModalTemplate & { setShow: (value: boolean) => void }) {
  return (
    <div className="flex flex-col items-center justify-center gap-9">
      <Image src={image} alt="icon" width={100} height={100} />
      <h1 className="text-2xl font-bold text-lightningBlue">{title}</h1>
      <p className="text-center text-xs text-black">{description}</p>
      <Link
        href={action.navigation}
        onClick={() => setShow(false)}
        className="w-full"
      >
        <Button fullWidth>{action.label}</Button>
      </Link>
    </div>
  );
}
