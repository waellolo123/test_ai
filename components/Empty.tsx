import Image from "next/image";

interface EmptyProps{
  label: string;
}

export const Empty = ({label}: EmptyProps)  => {
  return (
    <div className="h-full p-20 flex flex-col items-center">
      <div className="relative h-72 w-72">
        <Image alt="empty" fill src="/empty.png" className="object-cover"/>
      </div>
      <p className="text-sm text-muted-foreground text-center mt-4">{label}</p>
    </div>
  )
}