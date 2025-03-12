import Card from "@/components/Card";
import Face1 from "../../../public/assets/Face1.jpg";
import Face2 from "../../../public/assets/Face2.jpg";

const Nosotras: React.FC = () => {
  return (
    <div className="flex flex-row p-6 gap-10 place-content-center">
      <Card name="Agus" src={Face1} />
      <Card name="Anto" src={Face2} />
    </div>
  );
};

export default Nosotras;
