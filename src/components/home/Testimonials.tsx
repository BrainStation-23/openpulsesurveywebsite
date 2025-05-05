
const testimonials = [
  {
    content:
      "Open Pulse Survey has transformed how we collect and utilize employee feedback. The self-hosted nature of the platform gives us complete confidence in the security of our data.",
    author: "Sarah Johnson",
    role: "Chief HR Officer",
    company: "TechVision Inc."
  },
  {
    content:
      "As a management team, we need insights we can trust. The AI-powered reports have helped us identify key improvement areas without spending hours analyzing data ourselves.",
    author: "Michael Chen",
    role: "COO",
    company: "Innova Systems"
  },
  {
    content:
      "The fact that Open Pulse Survey is completely self-hosted was the deciding factor for us. We get all the benefits of modern survey tools without compromising on data security.",
    author: "Laura Martinez",
    role: "Head of People Operations",
    company: "Finance Plus"
  },
];

const Testimonials = () => {
  return (
    <section className="section bg-gray-50">
      <div className="container-tight">
        <div className="mx-auto max-w-2xl md:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-500">Testimonials</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Trusted by enterprise teams
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
          {testimonials.map((testimonial, i) => (
            <div
              key={i}
              className="flex flex-col justify-between bg-white p-10 shadow-sm rounded-2xl border border-gray-100"
            >
              <div>
                <div className="flex gap-2 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="h-5 w-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-lg text-gray-700 italic">"{testimonial.content}"</p>
              </div>
              <div className="mt-8">
                <p className="font-medium text-gray-900">{testimonial.author}</p>
                <p className="mt-1 text-sm text-gray-500">{testimonial.role}, {testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
