import Companies from "../components/companies";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import Projects from "../components/projects";
import Statistics from "../components/statistics";

export default function Home() {
  return (
    <div>
      <div className="sticky top-0 left-0 top-0 top-0 w-full">
        <Navbar />
      </div>
      <Hero />
      <Projects />
      <Companies />
      <Statistics />
    </div>
  );
}
