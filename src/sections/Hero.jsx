import ComingSoon from "./ComingSoon";

const Hero = ({ onOpenRegister }) => {
  return (
    <section id="hero" className="hero-section relative min-h-dvh w-full overflow-hidden">
      <ComingSoon onOpenRegister={onOpenRegister} />
    </section>
  );
};

export default Hero;
