export default function SectionHeader({ main, sub, className }) {
  return (
    <h2
      className={`text-[28px] md:text-[32px] lg:text-[40px] font-bold leading-10 lg:leading-12 ${className}`}
    >
      <span className="text-[#0f1115]">{main}</span>
      {sub && (
        <>
          {" "}
          <span className="text-[#697289]">{sub}</span>
        </>
      )}
    </h2>
  );
}
