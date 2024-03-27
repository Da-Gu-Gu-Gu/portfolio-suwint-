const LinearText = ({
  children,
  customStyle = "",
}: {
  children: React.ReactNode;
  customStyle?: string;
}) => {
  return (
    <p
      className={`flex  gap-3 items-center bg-gradient-to-t from-[#E92677] to-[#B31AA4] bg-clip-text text-transparent ${customStyle}`}
    >
      {children}
    </p>
  );
};

export default LinearText;
