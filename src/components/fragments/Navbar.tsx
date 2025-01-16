import Link from "next/link";
import Logo from "@/assets/svg/logo.svg";
import PersonIcon from "@/assets/svg/person.svg";

export default function Navbar() {
  return (
    <header className="flex justify-between items-center px-11 py-4 shadow-md">
      <Logo />
      <Link href="/sign-in" className="flex items-center gap-4">
        <span className="text-darkGrey">Masuk</span> <PersonIcon />
      </Link>
    </header>
  );
}
