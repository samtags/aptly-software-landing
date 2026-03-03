import Companies from "../components/companies";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import Projects from "../components/projects";
import Services from "../components/services";
import Statistics from "../components/statistics";
import Testimonies from "../components/testimonies";
import Works from "../components/works";

export default function Home() {
  return (
    <div>
      <div className="sticky top-0 left-0 top-0 top-0 w-full z-10">
        <Navbar />
      </div>
      <Hero />
      <Projects />
      <Companies />
      <Statistics />
      <Services />
      <Works />
      <Testimonies />
    </div>
  );
}
