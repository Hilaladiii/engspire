"use client";

import Button from "@/components/elements/Button";
import Input from "@/components/elements/Input";
import PublicLayout from "@/components/layouts/PublicLayout";
import { useModal } from "@/context/ModalContext";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import ContentModalSendEmail from "./_components/ContentModalSendEmail";

const forgotPasswordSchema = z.object({
  email: z.string().email("Email tidak valid"),
});

type TForgotPassword = z.infer<typeof forgotPasswordSchema>;

export default function ForgotPasswordPage() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<TForgotPassword>({
    resolver: zodResolver(forgotPasswordSchema),
  });
  const { setShow, setContent } = useModal();

  const onSubmit: SubmitHandler<TForgotPassword> = (data) => {
    console.log(data);
    setShow(true);
    setContent(<ContentModalSendEmail />);
  };
  return (
    <PublicLayout
      title="Lupa kata Sandi?"
      description="Jangan khawatir, atur ulang kata sandi dengan memasukkan email"
    >
      <form onSubmit={handleSubmit(onSubmit)} className="mt-9">
        <Input
          register={register}
          name="email"
          label="Email"
          errors={errors.email}
          placeholder="Masukkan email"
          type="email"
          fullWidth
        />
        <Button className="mt-10" fullWidth>
          Kirim
        </Button>
      </form>
    </PublicLayout>
  );
}
