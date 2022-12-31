import Image from "next/image";

const Hero = () => {
  return (
    <section className="hero my-32 flex flex-col md:flex-row items-center gap-4">
      <div className="order-2 md:order-1">
        <h1 className="text-4xl text-gray-700 font-bold">Miklós Dániel</h1>
        <p className="text-2xl">
          Hi, I'm Miklos, currently a computer engineer student at Budapest
          University of Technology and Economics. I love to working on projects
          related to frontend development and web design.
        </p>
      </div>
      <div className="relative h-[100px] w-[100px] shrink-0 order-1 md:order-2">
        <Image
          src={"/assets/profile.png"}
          className="shrink-0 grow-0 rounded-full"
          alt="Picture of the author"
          fill={true}
        />
      </div>
    </section>
  );
};

export default Hero;
