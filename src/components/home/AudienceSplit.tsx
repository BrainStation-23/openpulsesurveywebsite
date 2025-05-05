
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const AudienceSplit = () => {
  return (
    <section className="section bg-gray-50">
      <div className="container-tight">
        <div className="mx-auto max-w-2xl md:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-500">Tailored Solutions</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Designed for both HR and Management teams
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Open Pulse Survey provides specialized tools and features tailored to the unique needs of HR professionals and management teams.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-y-10 gap-x-8 lg:grid-cols-2">
          {/* HR Professionals */}
          <div className="relative bg-white rounded-2xl shadow-sm p-10 border border-gray-100 overflow-hidden">
            <div className="absolute inset-0 opacity-10 bg-blue-500 mask-image" />
            <div className="relative">
              <h3 className="text-2xl font-bold text-gray-900">For HR Professionals</h3>
              <ul className="mt-8 space-y-4 text-gray-600">
                <li className="flex gap-x-3">
                  <svg className="h-6 w-5 flex-none text-blue-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                  </svg>
                  <span>Create engaging surveys that employees actually want to complete</span>
                </li>
                <li className="flex gap-x-3">
                  <svg className="h-6 w-5 flex-none text-blue-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                  </svg>
                  <span>Get automated reminders to boost participation rates</span>
                </li>
                <li className="flex gap-x-3">
                  <svg className="h-6 w-5 flex-none text-blue-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                  </svg>
                  <span>Track engagement metrics across different departments</span>
                </li>
                <li className="flex gap-x-3">
                  <svg className="h-6 w-5 flex-none text-blue-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                  </svg>
                  <span>Generate professional reports for executive teams</span>
                </li>
              </ul>
              <div className="mt-10">
                <Button asChild variant="outline" className="border-blue-500 text-blue-500 hover:text-blue-600 hover:border-blue-600">
                  <Link to="/use-cases">HR Use Cases</Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Management Teams */}
          <div className="relative bg-white rounded-2xl shadow-sm p-10 border border-gray-100 overflow-hidden">
            <div className="absolute inset-0 opacity-10 bg-orange-500 mask-image" />
            <div className="relative">
              <h3 className="text-2xl font-bold text-gray-900">For Management Teams</h3>
              <ul className="mt-8 space-y-4 text-gray-600">
                <li className="flex gap-x-3">
                  <svg className="h-6 w-5 flex-none text-orange-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                  </svg>
                  <span>AI-generated insights to identify key areas for improvement</span>
                </li>
                <li className="flex gap-x-3">
                  <svg className="h-6 w-5 flex-none text-orange-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                  </svg>
                  <span>Compare survey results across different time periods</span>
                </li>
                <li className="flex gap-x-3">
                  <svg className="h-6 w-5 flex-none text-orange-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                  </svg>
                  <span>Access actionable data to drive strategic decisions</span>
                </li>
                <li className="flex gap-x-3">
                  <svg className="h-6 w-5 flex-none text-orange-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                  </svg>
                  <span>Monitor the impact of your initiatives with ease</span>
                </li>
              </ul>
              <div className="mt-10">
                <Button asChild variant="outline" className="border-orange-500 text-orange-500 hover:text-orange-600 hover:border-orange-600">
                  <Link to="/use-cases">Management Use Cases</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AudienceSplit;
