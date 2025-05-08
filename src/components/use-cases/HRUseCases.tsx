
import React from 'react';
import UseCaseCard from './UseCaseCard';

const hrUseCases = [
  {
    title: "Onboarding Experience Optimization",
    description: "HR teams use Open Pulse Survey to collect feedback from new hires throughout their onboarding journey, identifying pain points and improvement opportunities.",
    steps: [
      "Set up scheduled surveys for key onboarding milestones (1 day, 1 week, 30 days, 90 days)",
      "Collect structured feedback on training effectiveness, resource availability, and team integration",
      "Use AI analysis to identify patterns and trends across departments",
      "Generate executive presentations showing onboarding satisfaction by department",
      "Track improvements over time as changes are implemented"
    ],
    testimonial: {
      quote: "We reduced our new hire attrition by 38% in six months by identifying and fixing key pain points in our onboarding process. The automated surveys and analysis saved our HR team hours of work each week.",
      author: "Amanda Chen",
      position: "VP of People Operations, MediTech Solutions"
    }
  },
  {
    title: "Employee Satisfaction Pulse Surveys",
    description: "HR departments deploy regular, lightweight pulse surveys to maintain a real-time understanding of employee sentiment and engagement levels.",
    steps: [
      "Configure short, 5-question surveys to be sent automatically at regular intervals",
      "Ensure anonymity to encourage honest feedback",
      "Track results on visual dashboards showing trends over time",
      "Receive alerts when sentiment scores drop below defined thresholds",
      "Generate comparative reports to measure progress quarter-over-quarter"
    ],
    testimonial: {
      quote: "The pulse surveys have become an essential early warning system for our HR team. We've been able to identify and address team issues before they escalate, and our overall engagement scores have increased by 23% year-over-year.",
      author: "Marcus Williams",
      position: "Chief HR Officer, GlobalLogic Enterprises"
    }
  },
  {
    title: "Exit Interview Digitization",
    description: "HR teams standardize and digitize the exit interview process to gather consistent data and identify retention improvement opportunities.",
    steps: [
      "Replace inconsistent exit interviews with a standardized digital survey",
      "Collect both quantitative ratings and qualitative feedback",
      "Use AI to analyze open-ended responses and identify recurring themes",
      "Track attrition drivers by department, manager, and other demographic factors",
      "Generate quarterly retention strategy recommendations based on exit data"
    ],
    testimonial: {
      quote: "We finally have consistent exit data that we can actually use. The pattern analysis identified that career development opportunities were a major factor in departures within our engineering team, which led us to implement a new technical career path program.",
      author: "Sarah Johnston",
      position: "HR Director, Innovate Systems"
    }
  }
];

const HRUseCases = () => {
  return (
    <div className="mx-auto max-w-3xl animate-fade-in">
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-8">
        Employee Engagement & Retention Solutions
      </h2>

      <div className="mb-16 space-y-8">
        {hrUseCases.map((useCase, index) => (
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

export default HRUseCases;
