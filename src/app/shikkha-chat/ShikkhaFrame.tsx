import Image from "next/image";
import { getTranslator } from "@/i18n/server";

type FrameProps = {
  src: string;
  alt: string;
  url: string;
  priority?: boolean;
  sizes?: string;
  className?: string;
};

export default function ShikkhaFrame({
  src,
  alt,
  url,
  priority = false,
  sizes = "(max-width: 1024px) 100vw, 620px",
  className = "",
}: FrameProps) {
  return (
    <figure
      className={`overflow-hidden rounded-xl border border-[#ececec] bg-white ${className}`}
    >
      <div className="flex items-center gap-1.5 border-b border-[#ececec] bg-[#fafafa] px-3.5 py-2.5">
        <span className="h-2 w-2 rounded-full bg-[#e3e3e3]" />
        <span className="h-2 w-2 rounded-full bg-[#e3e3e3]" />
        <span className="h-2 w-2 rounded-full bg-[#e3e3e3]" />
        <span className="ml-2.5 truncate rounded bg-white px-2.5 py-[3px] text-[11px] font-medium text-[#6b6f76] ring-1 ring-[#ececec]">
          {url}
        </span>
      </div>
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#fafafa]">
        <Image
          src={src}
          alt={alt}
          width={1600}
          height={1000}
          priority={priority}
          sizes={sizes}
          className="h-full w-full object-cover object-top"
        />
      </div>
    </figure>
  );
}
