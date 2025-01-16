import Image from "next/image";
import successSendEmail from "@/assets/images/successSendEmail.png";
import Button from "@/components/elements/Button";
import Link from "next/link";
import { useModal } from "@/context/ModalContext";

export default function ContentModalSendEmail() {
  const { setShow } = useModal();
  return (
    <div className="flex flex-col items-center justify-center gap-9">
      <Image src={successSendEmail} alt="icon" width={100} height={100} />
      <h1 className="text-2xl font-bold text-lightningBlue">
        Kode Verifikasi Dikirim
      </h1>
      <p className="text-center text-xs text-black">
        Periksa email Anda untuk mendapatkan kode verifikasi sebelum mengatur
        ulang kata sandi.
      </p>
      <Link
        href="/verification"
        onClick={() => setShow(false)}
        className="w-full"
      >
        <Button fullWidth>Verifikasi</Button>
      </Link>
    </div>
  );
}
