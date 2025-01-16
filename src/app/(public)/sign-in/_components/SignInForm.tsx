import { z } from "zod";
import CheckBox from "@/components/elements/CheckBox";
import Input from "@/components/elements/Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import Link from "next/link";
import Button from "@/components/elements/Button";

const signInSchema = z.object({
  email: z.string().email("Email tidak valid"),
  password: z.string().min(1, "Kata sandi wajib diisi"),
});

type TSignIn = z.infer<typeof signInSchema>;

export default function SignInForm() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<TSignIn>({
    resolver: zodResolver(signInSchema),
  });

  const onSubmit: SubmitHandler<TSignIn> = (data) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mt-5 flex flex-col gap-6"
    >
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
      <div className="flex justify-between">
        <CheckBox id="remind" label="Ingat saya" />
        <Link
          href="/forgot-password"
          className="text-lightningBlue font-medium"
        >
          Lupa Kata Sandi
        </Link>
      </div>
      <Button className="mt-10" fullWidth>
        Masuk
      </Button>
    </form>
  );
}
