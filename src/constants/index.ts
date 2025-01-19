import successSendEmail from "@/assets/images/successSendEmail.png";
import successReset from "@/assets/images/successReset.png";

export const CONTENT_MODAL_SEND_EMAIL = {
  image: successSendEmail,
  title: "Kode Verifikasi Dikirim",
  description:
    "Periksa email Anda untuk mendapatkan kode verifikasi sebelum mengatur ulang kata sandi.",
  action: {
    navigation: "/verification",
    label: "Verifikasi",
  },
};

export const CONTENT_MODAL_SUCCESS_RESET = {
  image: successReset,
  title: "Kata Sandi Berhasil Diubah",
  description: "Gunakan kata sandi baru untuk masuk ke akun Engspire.",
  action: {
    navigation: "/sign-in",
    label: "Masuk",
  },
};
