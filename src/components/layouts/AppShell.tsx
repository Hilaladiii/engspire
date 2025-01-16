import Navbar from "../fragments/Navbar";

export default function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}
