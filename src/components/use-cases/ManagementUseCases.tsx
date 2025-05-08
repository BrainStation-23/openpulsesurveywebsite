
import React from 'react';
import UseCaseCard from './UseCaseCard';

const managementUseCases = [
  {
    title: "Organizational Change Management",
    description: "Management teams use survey data to guide major organizational changes and monitor employee sentiment throughout the transition process.",
    steps: [
      "Deploy pre-change surveys to establish baseline sentiment",
      "Create targeted surveys during change implementation to identify pain points",
      "Use real-time feedback to make agile adjustments to change strategy",
      "Monitor change adoption rates and employee confidence levels",
      "Generate executive reports comparing pre and post-change metrics"
    ],
    testimonial: {
      quote: "During our recent reorganization, the survey data was invaluable. We identified communication gaps early and addressed them before they became major issues. The ability to track sentiment in real-time helped us maintain productivity throughout the transition.",
      author: "Daniel Lopez",
      position: "COO, Vertex Financial Group"
    }
  },
  {
    title: "Leadership Effectiveness Assessment",
    description: "Executive teams implement 360-degree feedback for leadership development and organizational health monitoring.",
    steps: [
      "Create customized leadership assessment surveys with role-specific questions",
      "Collect feedback from direct reports, peers, and supervisors",
      "Generate individualized leadership development reports",
      "Identify organizational leadership trends and development needs",
      "Track leadership effectiveness improvements over time"
    ],
    testimonial: {
      quote: "The leadership assessment program has transformed our management culture. We've seen measurable improvements in team engagement scores, and our managers appreciate the specific, actionable feedback they receive.",
      author: "Elizabeth Warner",
      position: "CEO, TechSolutions Inc."
    }
  },
  {
    title: "Strategic Initiative Feedback Loops",
    description: "Management teams create feedback mechanisms to evaluate the impact of strategic initiatives and make data-driven adjustments.",
    steps: [
      "Design targeted surveys aligned with specific strategic objectives",
      "Capture both quantitative success metrics and qualitative feedback",
      "Track adoption rates and sentiment across different business units",
      "Use AI-generated insights to identify implementation barriers",
      "Create executive dashboards showing initiative impact over time"
    ],
    testimonial: {
      quote: "The feedback loops we've established for our strategic initiatives have dramatically improved our execution. We can now quickly identify what's working and what needs adjustment, rather than waiting until the end of a quarter to discover issues.",
      author: "Robert Chen",
      position: "VP of Strategy, Pinnacle Healthcare"
    }
  }
];

const ManagementUseCases = () => {
  return (
    <div className="mx-auto max-w-3xl animate-fade-in">
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-8">
        Strategic Decision Support & Team Optimization
      </h2>

      <div className="mb-16 space-y-8">
        {managementUseCases.map((useCase, index) => (
          <UseCaseCard 
            key={index}
            title={useCase.title}
            description={useCase.description}
            steps={useCase.steps}
            testimonial={useCase.testimonial}
          />
        ))}
      </div>
    </div>
  );
};

export default ManagementUseCases;
