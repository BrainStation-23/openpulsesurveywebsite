
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const UseCases = () => {
  return (
    <Layout
      title="Use Cases | Open Pulse Survey"
      description="Explore how HR professionals and management teams use Open Pulse Survey to collect and act on employee feedback while ensuring data security."
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-24 sm:py-32">
        <div className="container-tight">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              How teams use Open Pulse Survey
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Discover how HR professionals and management teams leverage our platform to drive positive change in their organizations.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section bg-white">
        <div className="container-tight">
          <Tabs defaultValue="hr" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
              <TabsTrigger value="hr" className="text-base py-3">HR Professionals</TabsTrigger>
              <TabsTrigger value="management" className="text-base py-3">Management Teams</TabsTrigger>
            </TabsList>
            
            <TabsContent value="hr" className="mt-6">
              <div className="mx-auto max-w-3xl">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-8">
                  Employee Engagement & Retention Solutions
                </h2>

                {/* Use Case 1 */}
                <div className="mb-16 space-y-8">
                  <div className="bg-white shadow-md rounded-xl overflow-hidden border border-gray-100">
                    <div className="p-8">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        Onboarding Experience Optimization
                      </h3>
                      <p className="text-gray-600 mb-6">
                        HR teams use Open Pulse Survey to collect feedback from new hires throughout their onboarding journey, identifying pain points and improvement opportunities.
                      </p>
                      
                      <h4 className="font-semibold text-blue-600 mb-3">How it works:</h4>
                      <ol className="list-decimal pl-5 space-y-3 text-gray-600 mb-6">
                        <li>Set up scheduled surveys for key onboarding milestones (1 day, 1 week, 30 days, 90 days)</li>
                        <li>Collect structured feedback on training effectiveness, resource availability, and team integration</li>
                        <li>Use AI analysis to identify patterns and trends across departments</li>
                        <li>Generate executive presentations showing onboarding satisfaction by department</li>
                        <li>Track improvements over time as changes are implemented</li>
                      </ol>
                      
                      <div className="bg-blue-50 p-6 rounded-lg">
                        <h4 className="font-semibold text-gray-900 mb-2">Results:</h4>
                        <p className="text-gray-700 mb-2">
                          "We reduced our new hire attrition by 38% in six months by identifying and fixing key pain points in our onboarding process. The automated surveys and analysis saved our HR team hours of work each week."
                        </p>
                        <p className="text-sm text-gray-500">
                          — Amanda Chen, VP of People Operations, MediTech Solutions
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Use Case 2 */}
                  <div className="bg-white shadow-md rounded-xl overflow-hidden border border-gray-100">
                    <div className="p-8">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        Employee Satisfaction Pulse Surveys
                      </h3>
                      <p className="text-gray-600 mb-6">
                        HR departments deploy regular, lightweight pulse surveys to maintain a real-time understanding of employee sentiment and engagement levels.
                      </p>
                      
                      <h4 className="font-semibold text-blue-600 mb-3">How it works:</h4>
                      <ol className="list-decimal pl-5 space-y-3 text-gray-600 mb-6">
                        <li>Configure short, 5-question surveys to be sent automatically at regular intervals</li>
                        <li>Ensure anonymity to encourage honest feedback</li>
                        <li>Track results on visual dashboards showing trends over time</li>
                        <li>Receive alerts when sentiment scores drop below defined thresholds</li>
                        <li>Generate comparative reports to measure progress quarter-over-quarter</li>
                      </ol>
                      
                      <div className="bg-blue-50 p-6 rounded-lg">
                        <h4 className="font-semibold text-gray-900 mb-2">Results:</h4>
                        <p className="text-gray-700 mb-2">
                          "The pulse surveys have become an essential early warning system for our HR team. We've been able to identify and address team issues before they escalate, and our overall engagement scores have increased by 23% year-over-year."
                        </p>
                        <p className="text-sm text-gray-500">
                          — Marcus Williams, Chief HR Officer, GlobalLogic Enterprises
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Use Case 3 */}
                  <div className="bg-white shadow-md rounded-xl overflow-hidden border border-gray-100">
                    <div className="p-8">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        Exit Interview Digitization
                      </h3>
                      <p className="text-gray-600 mb-6">
                        HR teams standardize and digitize the exit interview process to gather consistent data and identify retention improvement opportunities.
                      </p>
                      
                      <h4 className="font-semibold text-blue-600 mb-3">How it works:</h4>
                      <ol className="list-decimal pl-5 space-y-3 text-gray-600 mb-6">
                        <li>Replace inconsistent exit interviews with a standardized digital survey</li>
                        <li>Collect both quantitative ratings and qualitative feedback</li>
                        <li>Use AI to analyze open-ended responses and identify recurring themes</li>
                        <li>Track attrition drivers by department, manager, and other demographic factors</li>
                        <li>Generate quarterly retention strategy recommendations based on exit data</li>
                      </ol>
                      
                      <div className="bg-blue-50 p-6 rounded-lg">
                        <h4 className="font-semibold text-gray-900 mb-2">Results:</h4>
                        <p className="text-gray-700 mb-2">
                          "We finally have consistent exit data that we can actually use. The pattern analysis identified that career development opportunities were a major factor in departures within our engineering team, which led us to implement a new technical career path program."
                        </p>
                        <p className="text-sm text-gray-500">
                          — Sarah Johnston, HR Director, Innovate Systems
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="management" className="mt-6">
              <div className="mx-auto max-w-3xl">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-8">
                  Strategic Decision Support & Team Optimization
                </h2>

                {/* Use Case 1 */}
                <div className="mb-16 space-y-8">
                  <div className="bg-white shadow-md rounded-xl overflow-hidden border border-gray-100">
                    <div className="p-8">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        Organizational Change Management
                      </h3>
                      <p className="text-gray-600 mb-6">
                        Management teams use survey data to guide major organizational changes and monitor employee sentiment throughout the transition process.
                      </p>
                      
                      <h4 className="font-semibold text-blue-600 mb-3">How it works:</h4>
                      <ol className="list-decimal pl-5 space-y-3 text-gray-600 mb-6">
                        <li>Deploy pre-change surveys to establish baseline sentiment</li>
                        <li>Create targeted surveys during change implementation to identify pain points</li>
                        <li>Use real-time feedback to make agile adjustments to change strategy</li>
                        <li>Monitor change adoption rates and employee confidence levels</li>
                        <li>Generate executive reports comparing pre and post-change metrics</li>
                      </ol>
                      
                      <div className="bg-blue-50 p-6 rounded-lg">
                        <h4 className="font-semibold text-gray-900 mb-2">Results:</h4>
                        <p className="text-gray-700 mb-2">
                          "During our recent reorganization, the survey data was invaluable. We identified communication gaps early and addressed them before they became major issues. The ability to track sentiment in real-time helped us maintain productivity throughout the transition."
                        </p>
                        <p className="text-sm text-gray-500">
                          — Daniel Lopez, COO, Vertex Financial Group
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Use Case 2 */}
                  <div className="bg-white shadow-md rounded-xl overflow-hidden border border-gray-100">
                    <div className="p-8">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        Leadership Effectiveness Assessment
                      </h3>
                      <p className="text-gray-600 mb-6">
                        Executive teams implement 360-degree feedback for leadership development and organizational health monitoring.
                      </p>
                      
                      <h4 className="font-semibold text-blue-600 mb-3">How it works:</h4>
                      <ol className="list-decimal pl-5 space-y-3 text-gray-600 mb-6">
                        <li>Create customized leadership assessment surveys with role-specific questions</li>
                        <li>Collect feedback from direct reports, peers, and supervisors</li>
                        <li>Generate individualized leadership development reports</li>
                        <li>Identify organizational leadership trends and development needs</li>
                        <li>Track leadership effectiveness improvements over time</li>
                      </ol>
                      
                      <div className="bg-blue-50 p-6 rounded-lg">
                        <h4 className="font-semibold text-gray-900 mb-2">Results:</h4>
                        <p className="text-gray-700 mb-2">
                          "The leadership assessment program has transformed our management culture. We've seen measurable improvements in team engagement scores, and our managers appreciate the specific, actionable feedback they receive."
                        </p>
                        <p className="text-sm text-gray-500">
                          — Elizabeth Warner, CEO, TechSolutions Inc.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Use Case 3 */}
                  <div className="bg-white shadow-md rounded-xl overflow-hidden border border-gray-100">
                    <div className="p-8">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        Strategic Initiative Feedback Loops
                      </h3>
                      <p className="text-gray-600 mb-6">
                        Management teams create feedback mechanisms to evaluate the impact of strategic initiatives and make data-driven adjustments.
                      </p>
                      
                      <h4 className="font-semibold text-blue-600 mb-3">How it works:</h4>
                      <ol className="list-decimal pl-5 space-y-3 text-gray-600 mb-6">
                        <li>Design targeted surveys aligned with specific strategic objectives</li>
                        <li>Capture both quantitative success metrics and qualitative feedback</li>
                        <li>Track adoption rates and sentiment across different business units</li>
                        <li>Use AI-generated insights to identify implementation barriers</li>
                        <li>Create executive dashboards showing initiative impact over time</li>
                      </ol>
                      
                      <div className="bg-blue-50 p-6 rounded-lg">
                        <h4 className="font-semibold text-gray-900 mb-2">Results:</h4>
                        <p className="text-gray-700 mb-2">
                          "The feedback loops we've established for our strategic initiatives have dramatically improved our execution. We can now quickly identify what's working and what needs adjustment, rather than waiting until the end of a quarter to discover issues."
                        </p>
                        <p className="text-sm text-gray-500">
                          — Robert Chen, VP of Strategy, Pinnacle Healthcare
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>

          <div className="mt-12 mx-auto max-w-3xl">
            <div className="bg-blue-50 p-8 rounded-xl border border-blue-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to see it in action?</h3>
              <p className="text-gray-700 mb-6">
                Our team can provide a personalized demonstration showing how Open Pulse Survey can be tailored to your organization's specific needs.
              </p>
              <Button asChild className="bg-blue-500 hover:bg-blue-600">
                <Link to="/contact">Schedule a Demo</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default UseCases;
