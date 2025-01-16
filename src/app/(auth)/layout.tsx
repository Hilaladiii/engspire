import Banner from "@/components/fragments/Banner";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-center gap-32 px-28 pt-12">
      {children} <Banner />
    </div>
  );
}
