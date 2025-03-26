import Image, { StaticImageData } from "next/image";

interface ICardProps {
  name: string;
  src: StaticImageData;
}

const Card: React.FC<ICardProps> = ({ name, src }) => {
  return (
    <div className="border border-[#4a3b2f] rounded-xl shadow-md flex flex-col items-center p-6 gap-3 transition-all duration-300 hover:scale-105">
      <Image
        alt={`${name} card pic`}
        src={src}
        width={96}
        height={96}
        className="w-24 h-24 object-cover rounded-full border border-[#4a3b2f]"
      />
      <h1 className="text-lg font-semibold text-[#4a3b2f]">{name}</h1>
    </div>
  );
};

export default Card;
