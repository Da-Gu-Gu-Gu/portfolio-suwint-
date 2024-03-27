import Marathon from "../../assets/images/Marathon_Logo.svg";
import Sprite from "../../assets/images/Sprite_Logo.svg";
import Naythurain from "../../assets/images/Naythurein_Logo.svg";
import Mpt from "../../assets/images/MPT_Logo.svg";
import Solinx from "../../assets/images/Solinx_Logo.svg";
import Goodp from "../../assets/images/Goodp_Logo.svg";
import Mkitchen from "../../assets/images/Mkitechen_Logo.svg";
import Zabuaye from "../../assets/images/Zabuaye_Logo.svg";
const Compaines = () => {
  const imgs = [
    Marathon,
    Sprite,
    Naythurain,
    Mpt,
    Solinx,
    Goodp,
    Mkitchen,
    Zabuaye,
  ];
  return (
    <div className="w-max flex flex-col items-center gap-10 mx-auto">
      <Line />
      <p className="font-bold text-[#7e7e7e] text-[1.5rem]">
        Some Companies I’ve worked with
      </p>
      <div className="grid grid-cols-4 items-center gap-[84px]">
        {imgs.map((x) => {
          return <img key={x} src={x} alt="" />;
        })}
      </div>
      <Line />
    </div>
  );
};

export default Compaines;

const Line = () => {
  return <div className="w-[0.5px] h-[110px] bg-[#cccccc]"></div>;
};
