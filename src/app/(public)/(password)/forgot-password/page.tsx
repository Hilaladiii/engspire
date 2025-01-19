"use client";

import Button from "@/components/elements/Button";
import Input from "@/components/elements/Input";
import PublicLayout from "@/components/layouts/PublicLayout";
import { CONTENT_MODAL_SEND_EMAIL } from "@/constants";
import { useModal } from "@/context/ModalContext";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

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
  const { handleModal } = useModal();

  const onSubmit: SubmitHandler<TForgotPassword> = (data) => {
    console.log(data);
    handleModal({
      show: true,
      type: "template",
      modalTemplate: CONTENT_MODAL_SEND_EMAIL,
    });
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
