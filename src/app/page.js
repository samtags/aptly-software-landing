import Carousel from "../components/carousel";
import FramerDiv from "../components/framerDiv";
import Hero from "../components/hero";
import Navbar from "../components/navbar";

export default function Home() {
  return (
    <div>
      <div className="sticky top-0 left-0 top-0 top-0 w-full">
        <Navbar />
      </div>
      <Hero />
      <section id="projects" className="pt-18 pb-8 overflow-x-hidden lg:mt-1">
        <div className="projects-fade">
          <FramerDiv
            matchMedia="(max-width: 810px)"
            className="flex gap-4"
            animate={{ x: ["0%", "-183.5%"] }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 15,
              ease: "linear",
            }}
          >
            <Carousel
              title="Vertax Labs (1)"
              description="Web design • development"
              rate="120%"
              rateDescription="Boost in leads"
              imageUrl="/png/YRBacVkY1hNjQzvJVDb24A3JOM.png"
            />
            <Carousel
              title="Vertax Labs (2)"
              description="Web design • development"
              rate="120%"
              rateDescription="Boost in leads"
              imageUrl="/png/LWaKedMy6DtEAbrBCG2JzD13Tc.png"
            />
            <Carousel
              title="Vertax Labs (3)"
              description="Web design • development"
              rate="120%"
              rateDescription="Boost in leads"
              imageUrl="/png/GSJQypQMYu1yzL9SeVvdATXD6tY.png"
            />
            <Carousel
              title="Vertax Labs (1)"
              description="Web design • development"
              rate="120%"
              rateDescription="Boost in leads"
              imageUrl="/png/YRBacVkY1hNjQzvJVDb24A3JOM.png"
            />
            <Carousel
              title="Vertax Labs (2)"
              description="Web design • development"
              rate="120%"
              rateDescription="Boost in leads"
              imageUrl="/png/LWaKedMy6DtEAbrBCG2JzD13Tc.png"
            />
            <Carousel
              title="Vertax Labs (3)"
              description="Web design • development"
              rate="120%"
              rateDescription="Boost in leads"
              imageUrl="/png/GSJQypQMYu1yzL9SeVvdATXD6tY.png"
            />
          </FramerDiv>
        </div>
      </section>
    </div>
  );
}
