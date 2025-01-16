"use client";
import Button from "@/components/elements/Button";
import PublicLayout from "@/components/layouts/PublicLayout";
import { useState } from "react";
import OTPInput from "react-otp-input";

export default function VerificationPage() {
  const [otp, setOtp] = useState("");
  return (
    <PublicLayout
      title="Kode Verifikasi"
      description="Masukkan kode verifikasi yang sudah dikirim melalui email Anda sebelum mengatur ulang kata sandi."
    >
      <div className="mt-9">
        <OTPInput
          value={otp}
          onChange={setOtp}
          numInputs={6}
          inputType="number"
          inputStyle={{
            fontFamily: "var(--font-poppins)",
            background: "#FFFFFF",
            fontWeight: "medium",
            color: "#000000",
            fontSize: "32px",
            borderRadius: "4px",
            borderColor: "#CCD0CF",
            border: "solid",
            borderWidth: "0.001px",
            paddingLeft: "12px",
            width: "62px",
            height: "79px",
            marginRight: "28px",
          }}
          renderInput={(props) => <input {...props}></input>}
        />
        <Button className="mt-9" fullWidth>
          Lanjut
        </Button>
      </div>
    </PublicLayout>
  );
}
