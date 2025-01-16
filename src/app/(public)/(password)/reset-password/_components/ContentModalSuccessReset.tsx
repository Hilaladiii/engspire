import Image from "next/image";
import successReset from "@/assets/images/successReset.png";
import Button from "@/components/elements/Button";
import Link from "next/link";
import { useModal } from "@/context/ModalContext";

export default function ContentModalSuccessReset() {
  const { setShow } = useModal();
  return (
    <div className="flex w-full flex-col items-center justify-center gap-9">
      <Image src={successReset} alt="icon" width={100} height={100} />
      <h1 className="text-2xl font-bold text-lightningBlue">
        Kata Sandi Berhasil Diubah
      </h1>
      <p className="text-xs text-black">
        Gunakan kata sandi baru untuk masuk ke akun Engspire.
      </p>
      <Link href="/sign-in" onClick={() => setShow(false)} className="w-full">
        <Button fullWidth>Masuk</Button>
      </Link>
    </div>
  );
}
