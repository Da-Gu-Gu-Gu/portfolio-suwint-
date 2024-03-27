const Header = () => {
  return (
    <header className="w-screen h-[96px] sticky top-0 z-10 bg-[#FCFCFC] px-[70px] flex justify-between items-center">
      <h3 className="font-bold text-[1.4rem]">Su Wint Thida @ Sylvia</h3>
      <div className="flex w-[559px] justify-between">
        <p className="font-medium text-[1.1rem]">Home</p>
        <p className="font-medium text-[1.1rem]">About</p>
        <p className="font-medium text-[1.1rem]">Experiments</p>
        <p className="font-medium text-[1.1rem]">Contact Me</p>
      </div>
    </header>
  );
};

export default Header;
