"use client";

import Divider from "@/components/elements/Divider";
import Button from "@/components/elements/Button";
import Link from "next/link";
import Google from "@/assets/svg/google.svg";
import AuthLayout from "@/components/layouts/PublicLayout";
import SignUpForm from "./_components/SignUpForm";

export default function SignUpPage() {
  return (
    <AuthLayout title="Daftar" description="Buat akun untuk mengakses Engspire">
      <SignUpForm />
      <p className="mt-4 text-center font-medium">
        Sudah punya akun?{" "}
        <Link href="/sign-in" className="text-lightningBlue">
          Masuk
        </Link>
      </p>
      <Divider label="Atau" />
      <Button
        className="flex items-center justify-center gap-2"
        variant="secondary"
        fullWidth
      >
        <Google /> Daftar dengan Google
      </Button>
    </AuthLayout>
  );
}
