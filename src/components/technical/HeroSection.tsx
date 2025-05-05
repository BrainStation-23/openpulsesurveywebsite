
const HeroSection = () => {
  return (
    <section className="bg-gradient-to-b from-gray-900 to-gray-800 py-24 sm:py-32">
      <div className="container-tight">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Technical Architecture
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Built on open-source technologies for security, scalability, and complete data sovereignty
          </p>
          <div className="mt-10 flex justify-center gap-8">
            <div className="flex flex-col items-center">
              <div className="bg-white/10 p-4 rounded-full">
                <i className="devicon-react-original colored text-4xl"></i>
              </div>
              <span className="mt-2 text-white font-medium">React</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-white/10 p-4 rounded-full">
                <i className="devicon-postgresql-plain colored text-4xl"></i>
              </div>
              <span className="mt-2 text-white font-medium">Supabase</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
