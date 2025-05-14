
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const FeatureHighlights = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container-tight">
        <div className="mx-auto max-w-2xl md:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-500">Key Capabilities</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Transform employee feedback into actionable insights
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            From data collection to analysis and presentation, Open Pulse Survey provides the complete toolkit for understanding employee sentiment.
          </p>
        </div>

        <div className="mt-16 space-y-24">
          {/* Feature 1 - AI Reports */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="relative lg:order-2 w-full">
              <div className="rounded-2xl bg-gray-100 overflow-hidden shadow-lg w-full">
                <AspectRatio ratio={3/2} className="w-full">
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-tr from-blue-500/30 to-blue-400/10">
                    <div className="w-3/4 h-3/4 bg-white rounded-lg shadow-md p-4 sm:p-6">
                      <div className="h-4 w-2/3 bg-blue-100 rounded mb-4"></div>
                      <div className="h-3 w-1/2 bg-gray-100 rounded mb-3"></div>
                      <div className="h-3 w-full bg-gray-100 rounded mb-3"></div>
                      <div className="h-3 w-3/4 bg-gray-100 rounded mb-6"></div>
                      <div className="h-16 sm:h-24 w-full bg-blue-50 rounded mb-4 flex items-center justify-center">
                        <div className="w-3/4 h-12 sm:h-16 bg-blue-500/20 rounded flex items-center justify-center">
                          <span className="text-xs sm:text-sm md:text-base text-blue-500 font-semibold px-2 text-center">AI Report Visualization</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </AspectRatio>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold tracking-tight text-gray-900">
                AI-Generated Insights & Reports
              </h3>
              <p className="mt-6 text-base leading-7 text-gray-600">
                Our AI engine transforms raw survey data into clear, actionable insights. Automatically identify trends, sentiment patterns, and key areas for improvement without manual analysis.
              </p>
              <ul className="mt-6 space-y-2 text-base leading-7 text-gray-600">
                <li className="flex gap-x-3">
                  <svg className="h-6 w-5 flex-none text-blue-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                  </svg>
                  <span>Automatic sentiment analysis of open-ended responses</span>
                </li>
                <li className="flex gap-x-3">
                  <svg className="h-6 w-5 flex-none text-blue-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                  </svg>
                  <span>Identify critical themes and topics across departments</span>
                </li>
                <li className="flex gap-x-3">
                  <svg className="h-6 w-5 flex-none text-blue-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                  </svg>
                  <span>Prioritized action recommendations based on impact</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Feature 2 - Presentation Generation */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="relative w-full">
              <div className="rounded-2xl bg-gray-100 overflow-hidden shadow-lg w-full">
                <AspectRatio ratio={3/2} className="w-full">
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-tr from-orange-500/20 to-orange-400/5">
                    <div className="w-3/4 h-3/4 bg-white rounded-lg shadow-md p-4 sm:p-6">
                      <div className="h-4 w-1/2 bg-orange-100 rounded mb-4"></div>
                      <div className="grid grid-cols-2 gap-2 sm:gap-4 mb-4">
                        <div className="h-12 sm:h-20 bg-gray-50 rounded flex items-center justify-center">
                          <span className="text-xs sm:text-sm text-gray-400">Slide 1</span>
                        </div>
                        <div className="h-12 sm:h-20 bg-gray-50 rounded flex items-center justify-center">
                          <span className="text-xs sm:text-sm text-gray-400">Slide 2</span>
                        </div>
                        <div className="h-12 sm:h-20 bg-orange-50 rounded flex items-center justify-center border-2 border-orange-200">
                          <span className="text-xs sm:text-sm text-orange-500">Current</span>
                        </div>
                        <div className="h-12 sm:h-20 bg-gray-50 rounded flex items-center justify-center">
                          <span className="text-xs sm:text-sm text-gray-400">Slide 4</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </AspectRatio>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold tracking-tight text-gray-900">
                Presentation-Ready Exports
              </h3>
              <p className="mt-6 text-base leading-7 text-gray-600">
                Transform survey results into professional presentations with a single click. Create executive summaries, detailed reports, or team-specific analyses ready for sharing with stakeholders.
              </p>
              <ul className="mt-6 space-y-2 text-base leading-7 text-gray-600">
                <li className="flex gap-x-3">
                  <svg className="h-6 w-5 flex-none text-blue-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                  </svg>
                  <span>Export to PowerPoint, PDF, or interactive HTML reports</span>
                </li>
                <li className="flex gap-x-3">
                  <svg className="h-6 w-5 flex-none text-blue-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                  </svg>
                  <span>Customizable templates for different audiences</span>
                </li>
                <li className="flex gap-x-3">
                  <svg className="h-6 w-5 flex-none text-blue-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                  </svg>
                  <span>Include key metrics, trends, and action recommendations</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mx-auto max-w-2xl md:text-center">
            <Button asChild className="cta-button bg-blue-500 hover:bg-blue-600">
              <Link to="/features">Explore All Features</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureHighlights;
