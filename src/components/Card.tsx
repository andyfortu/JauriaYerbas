import Image, { StaticImageData } from "next/image";

interface ICardProps {
  name: string;
  src: StaticImageData;
}

const Card: React.FC<ICardProps> = ({ name, src }) => {
  return (
    <div className="border border-darkgreen rounded-xl shadow-md flex flex-col items-center p-6 gap-3 transition-all duration-300 hover:scale-105">
      <Image
        alt={`${name} card pic`}
        src={src}
        width={96}
        height={96}
        className="w-24 h-24 object-cover rounded-full border border-darkgreen"
      />
      <h1 className="text-lg font-semibold text-darkgreen">{name}</h1>
    </div>
  );
};

export default Card;
