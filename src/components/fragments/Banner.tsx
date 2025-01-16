import Image from "next/image";
import banner from "@/assets/images/banner.png";
export default function Banner() {
  return (
    <div className="w-[600px] h-[650px] bg-black/50  flex items-center justify-center relative rounded-tr-[100px] rounded-bl-[100px] overflow-hidden">
      <Image src={banner} alt="banner" className="absolute inset-0 -z-10" />
      <p className="text-4xl font-semibold text-crystalWhite px-9 text-center">
        Mengajar Bahasa Inggris dengan Mudah Bersama Engspire
      </p>
    </div>
  );
}
