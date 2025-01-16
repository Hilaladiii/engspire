export default function PublicLayout({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <div className="w-full max-w-lg">
      <h1 className="text-4xl font-semibold">{title}</h1>
      <p className="mt-4 text-base text-darkGrey">{description}</p>
      {children}
    </div>
  );
}
