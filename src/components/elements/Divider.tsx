export default function Divider({ label }: { label: string }) {
  return (
    <div className="my-8 flex flex-row items-center">
      <hr className="w-full border-[0.5px] border-outlineGrey" />
      <p className="text-16 px-4 text-darkGrey">{label}</p>
      <hr className="w-full border-[0.5px] border-outlineGrey" />
    </div>
  );
}
