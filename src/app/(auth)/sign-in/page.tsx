"use client";

import Link from "next/link";
import Button from "@/components/elements/Button";
import Divider from "@/components/elements/Divider";
import AuthLayout from "@/components/layouts/AuthLayout";
import SignInForm from "./_components/SignInForm";
import Google from "@/assets/svg/google.svg";

export default function SignInPage() {
  return (
    <AuthLayout
      title="Masuk"
      description="Masuk menggunakan akun yang sudah terdaftar."
    >
      <SignInForm />
      <p className="mt-4 text-center font-medium">
        Belum punya akun?{" "}
        <Link href="/sign-up" className="text-lightningBlue">
          Daftar
        </Link>
      </p>
      <Divider label="Atau" />
      <Button
        className="flex items-center justify-center gap-2"
        variant="secondary"
        fullWidth
      >
        <Google /> Masuk dengan Google
      </Button>
    </AuthLayout>
  );
}
