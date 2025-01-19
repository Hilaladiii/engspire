"use client";

import Button from "@/components/elements/Button";
import Input from "@/components/elements/Input";
import PublicLayout from "@/components/layouts/PublicLayout";
import { useModal } from "@/context/ModalContext";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { CONTENT_MODAL_SUCCESS_RESET } from "@/constants";

const newPasswordSchema = z
  .object({
    password: z.string().min(8, "Kata sandi minimal 8 karakter"),
    confirmPassword: z
      .string()
      .min(8, "Konfirmasi kata sandi minimal 8 karakter"),
  })
  .refine((data) => data.password == data.confirmPassword, {
    message: "Kata sandi dan Konfirmasi kata sandi harus sama",
    path: ["confirmPassword"],
  });

type TNewPassword = z.infer<typeof newPasswordSchema>;

export default function ResetPassword() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<TNewPassword>({
    resolver: zodResolver(newPasswordSchema),
  });
  const { handleModal } = useModal();
  const onSubmit: SubmitHandler<TNewPassword> = (data) => {
    console.log(data);
    handleModal({
      show: true,
      type: "template",
      modalTemplate: CONTENT_MODAL_SUCCESS_RESET,
    });
  };
  return (
    <PublicLayout
      title="Kata Sandi Baru"
      description="Buat kata sandi baru. Jangan gunakan kata sandi yang pernah dipakai."
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-9 flex flex-col gap-10"
      >
        <Input
          register={register}
          name="password"
          errors={errors.password}
          label="Kata Sandi Baru"
          placeholder="Masukkan kata sandi baru"
          type="password"
          fullWidth
        />
        <Input
          register={register}
          name="confirmPassword"
          errors={errors.confirmPassword}
          label="Konfirmasi Kata Sandi Baru"
          placeholder="Masukkan konfirmasi kata sandi baru"
          type="password"
          fullWidth
        />
        <Button fullWidth>Buat</Button>
      </form>
    </PublicLayout>
  );
}
