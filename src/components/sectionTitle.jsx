export default function SectionTitle({ children }) {
  return (
    <header className="text-[#0f1115] text-sm inline-block font-medium p-2 relative">
      <svg
        className="w-[12px] h-[12px] absolute top-0 right-0"
        viewBox="0 0 12 12"
        id="svg11535893692"
      >
        <path
          d="M 1 1 L 9.5 1 C 10.328 1 11 1.672 11 2.5 L 11 11"
          fill="transparent"
          strokeWidth="2"
          stroke="var(--token-72f1587e-8bbc-424b-bdb9-13d999bb0e54, rgb(255, 81, 71))"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
      {children}
      <svg
        className="w-[12px] h-[12px] absolute bottom-0 left-0"
        viewBox="0 0 12 12"
        id="svg12339723121"
      >
        <path
          d="M 0 0 L 8.5 0 C 9.328 0 10 0.672 10 1.5 L 10 10"
          transform="translate(1 1) rotate(180 5 5)"
          fill="transparent"
          strokeWidth="2"
          stroke="var(--token-72f1587e-8bbc-424b-bdb9-13d999bb0e54, rgb(255, 81, 71))"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    </header>
  );
}
