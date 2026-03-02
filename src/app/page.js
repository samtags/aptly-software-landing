import Hero from "../components/hero";
import Navbar from "../components/navbar";

export default function Home() {
  return (
    <div>
      <div className="sticky top-0 left-0 top-0 top-0 w-full">
        <Navbar />
      </div>
      <Hero />
    </div>
  );
}
