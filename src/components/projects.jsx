import Carousel from "./carousel";
import FramerDiv from "./framerDiv";

export default function Projects() {
  return (
    <section id="projects" className="pt-18 pb-8 overflow-x-hidden lg:mt-1">
      <div className="projects-fade">
        <FramerDiv
          matchMedia="(max-width: 810px)"
          className="flex gap-4 animate-marquee marquee-wrapper"
          animate={{ x: ["0%", "-183.5%"] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 15,
            ease: "linear",
          }}
        >
          <Carousel
            title="Elite-V"
            description="Landing Page • Primer"
            rate="150%"
            rateDescription="Lead conversion rate"
            imageUrl="/png/elite-thumbnail.png"
            link="https://elitev.vercel.app/"
          />
          <Carousel
            title="PasaHero"
            description="Mobile Development • Plus"
            rate="3X"
            rateDescription="Faster Validation"
            imageUrl="/png/pasahero-thumbnail.png"
            link="https://play.google.com/store/apps/details?id=com.pasahero.passenger&hl=en&pli=1"
          />
          <Carousel
            title="TicketsPH"
            description="App Development • Pro"
            rate="75%"
            rateDescription="Faster Check-ins"
            imageUrl="/png/ticketsph-thumbnail.png"
            link="https://www.ticketsph.net/en/"
          />
          <Carousel
            title="Elite-V"
            description="Landing Page • Primer"
            rate="150%"
            rateDescription="Lead conversion rate"
            imageUrl="/png/elite-thumbnail.png"
            link="https://elitev.vercel.app/"
          />
          <Carousel
            title="PasaHero"
            description="Mobile Development • Plus"
            rate="3X"
            rateDescription="Faster Validation"
            imageUrl="/png/pasahero-thumbnail.png"
            link="https://play.google.com/store/apps/details?id=com.pasahero.passenger&hl=en&pli=1"
          />
          <Carousel
            title="TicketsPH"
            description="App Development • Pro"
            rate="75%"
            rateDescription="Faster Check-ins"
            imageUrl="/png/ticketsph-thumbnail.png"
            link="https://www.ticketsph.net/en/"
          />
        </FramerDiv>
      </div>
    </section>
  );
}
