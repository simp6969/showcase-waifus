import Image from "next/image";

export default function Hu_Tao() {
  return (
    <div className="p-[30px] bg-[var(--hu_tao-background-color)] text-[var(--hu_tao-primary-font-color)] h-[100dvh] w-[100dvw]">
      <Image src={"/hutao.png"} height={500} width={500} alt="hu_tao" />
    </div>
  );
}
