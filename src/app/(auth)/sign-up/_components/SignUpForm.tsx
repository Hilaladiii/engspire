import Button from "@/components/elements/Button";
import CheckBox from "@/components/elements/CheckBox";
import Input from "@/components/elements/Input";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

const signUpSchema = z
  .object({
    fullname: z.string().min(1, "Nama lengkap wajib diisi"),
    email: z.string().email("Email tidak valid"),
    password: z.string().min(1, "Kata sandi wajib diisi"),
    confirmPassword: z.string().min(1, "Konfirmasi kata sandi wajib diisi"),
  })
  .refine((data) => data.password == data.confirmPassword, {
    message: "Kata sandi dan konfirmas kata sandi harus sama!",
    path: ["confirmPassword"],
  });

type TSignUp = z.infer<typeof signUpSchema>;

export default function SignUpForm() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<TSignUp>({
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit: SubmitHandler<TSignUp> = (data) => {
    console.log(data);
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mt-5 flex flex-col gap-6"
    >
      <Input
        register={register}
        name="fullname"
        errors={errors.fullname}
        label="Nama Lengkap"
        placeholder="Masukkan nama lengkap"
        type="text"
        fullWidth
      />
      <Input
        register={register}
        name="email"
        errors={errors.email}
        label="Email"
        placeholder="Masukkan email"
        type="email"
        fullWidth
      />
      <Input
        register={register}
        name="password"
        errors={errors.password}
        label="Kata Sandi"
        placeholder="Masukkan kata sandi"
        type="password"
        fullWidth
      />
      <Input
        register={register}
        name="confirmPassword"
        errors={errors.confirmPassword}
        label="Konfirmasi Kata Sandi"
        placeholder="Masukkan konfirmasi kata sandi"
        type="password"
        fullWidth
      />
      <div className="flex justify-between">
        <CheckBox id="remind" label="Ingat saya" />
        <Link
          href="/forgot-password"
          className="text-lightningBlue font-medium"
        >
          Lupa Kata Sandi
        </Link>
      </div>
      <Button className="mt-10" type="submit" fullWidth>
        Daftar
      </Button>
    </form>
  );
}