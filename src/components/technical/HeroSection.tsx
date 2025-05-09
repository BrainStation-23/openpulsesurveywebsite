
const HeroSection = () => {
  return (
    <section className="bg-gradient-to-b from-orange-50 to-white py-24 sm:py-32 -mx-4 sm:-mx-6 mb-16">
      <div className="container-tight">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Technical Architecture
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Built on open-source technologies for security, scalability, and complete data sovereignty
          </p>
          <div className="mt-10 flex justify-center gap-8">
            <div className="flex flex-col items-center">
              <div className="bg-white/90 p-4 rounded-full shadow-sm">
                <i className="devicon-react-original colored text-4xl"></i>
              </div>
              <span className="mt-2 text-gray-900 font-medium">React</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-white/90 p-4 rounded-full shadow-sm">
                <i className="devicon-supabase-plain colored text-4xl"></i>
              </div>
              <span className="mt-2 text-gray-900 font-medium">Supabase</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
