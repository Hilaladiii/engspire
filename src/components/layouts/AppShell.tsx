"use client";
import { ModalProvider } from "@/context/ModalContext";
import Navbar from "../fragments/Navbar";

export default function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <ModalProvider>
      <div>
        <Navbar />
        {children}
      </div>
    </ModalProvider>
  );
}
