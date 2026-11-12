import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  preload?: boolean;
};

export default function PhoneFrame({ src, alt, className = "", sizes = "260px", preload = false }: Props) {
  return (
    <div className={`phone ${className}`}>
      <div className="phone-screen">
        <Image src={src} alt={alt} fill sizes={sizes} preload={preload} />
      </div>
    </div>
  );
}
