export default function Hero() {
  return (
    <div className="relative bg-[url('/kitchen-hero.jpg')] bg-cover bg-center overflow-hidden h-[450px] sm:h-[450px] md:h-[550px] 2xl:h-[650px]">
      {/* Overlay */}
      <div className="absolute inset-0 bg-white opacity-80 z-10"></div>

      {/* Content Container */}
      <div className="relative z-20 text-[#105360] flex flex-col items-start justify-center px-4 sm:px-8 md:px-12 py-20 w-full max-w-6xl mx-auto h-full">
        <h1 className="text-2xl mb-4 font-merriweather">
          Welcome to DK Home Cleaning
        </h1>
        <h2 className="text-5xl mb-4 font-merriweather leading-[50px]">
          Stay clean, <br /> stay healthy
        </h2>
        <p className="text-xl font-light mb-4 sm:w-[75%] lg:w-[50%] mr-4">
          We are a family-run domestic cleaning service, serving Warrington and
          the surrounding areas since 2013
        </p>
        <a
          className="bg-[#105360] text-lg text-white py-4 px-8 rounded-full inline-block transform hover:scale-110 transition-transform duration-300"
          href=""
        >
          Look at our services
        </a>
      </div>
    </div>
  );
}
