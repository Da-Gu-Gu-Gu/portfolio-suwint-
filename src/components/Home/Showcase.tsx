const Showcase = () => {
  return (
    <div className="p-[70px] flex flex-col gap-[20px] w-screen">
      <h1 className="font-bold text-[3.5rem]">Showcase Highlight</h1>
      <h1 className="font-base text-[1.6rem] text-[#7e7e7e]">
        Let’s dive into the design world how I brought value to the project.{" "}
      </h1>
      <div className="flex flex-col">
        <ProjectCard />
      </div>
    </div>
  );
};

export default Showcase;

import BgHowtodo from "../../assets/images/howtodo/Bg_Logo.svg";
import BgLogo from "../../assets/images/howtodo/Logo.svg";
import BgPhone from "../../assets/images/howtodo/Phmockup_Img.svg";
const ProjectCard = () => {
  return (
    <div className="h-screen bg-[#000101] rounded-[20px] relative">
      <img
        src={BgHowtodo}
        className="absolute border top-0 w-full h-full"
        alt=""
      />
    </div>
  );
};
