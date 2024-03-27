import LinearText from "../LinearText";
import profileImg from "../../assets/images/Profile_img.svg";
import Arrow from "../../assets/images/Arrow 3.svg";
const Hero = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className=" w-1/2 h-full  justify-center pl-[70px] flex flex-col gap-3">
        <p className="font-semibold text-[1.4rem]">Hey, nice to meet you!</p>
        <p className="font-semibold text-[7.5rem]">I'm Su </p>
        <p className="text-[1.8rem]">
          <span className="font-semibold relative">
            <span className="absolute top-0 w-full h-full  blur-xl opacity-60 left-0 bg-gradient-to-br from-[#E92677] to-[#B31AA4]" />
            UX/UI Designer
          </span>{" "}
          who loves to create useful, intuitive, and engaging products.
        </p>
        <p className="text-[1.1rem] text-[#7E7E7E] leading-[2.5rem]">
          As a design friendly maker and strategic thinker, I’d like to break
          down the complex problems presented to users into multiple solution
          sets. I love to work in detail-oriented cross-functional teams to
          create bolder online experiences and ship high-quality polished
          products.
        </p>
        <p className="font-bold text-[1.5rem] flex gap-3 items-center">
          <LinearText>Get to know me </LinearText>
          <img src={Arrow} />
        </p>
      </div>
      <div className=" flex w-1/2  h-full  items-center justify-center ">
        <img src={profileImg} className="w-full h-[90%] " alt="" />
      </div>
    </div>
  );
};

export default Hero;
