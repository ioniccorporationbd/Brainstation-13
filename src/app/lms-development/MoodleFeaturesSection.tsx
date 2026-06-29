import React from 'react';

// Define types for the data structure
interface FeatureCardProps {
  title: string;
  items: string[];
}

const featureData: FeatureCardProps[] = [
  {
    title: 'Dynamic Dashboard & User Experience',
    items: [
      'Customizable dashboard',
      'Course overview, calendar, and learning timeline',
      'Progress status tracking',
      'Notifications, profile access, and navigation',
    ],
  },
  {
    title: 'Course & User Management',
    items: [
      'Discussion forums and feedback',
      'Real-time chat and messaging',
      'Surveys and polls',
      'Announcements and notifications',
    ],
  },
  {
    title: 'Communication & Collaboration',
    items: [
      'Discussion forums and feedback',
      'Real-time chat and messaging',
      'Surveys and polls',
      'Announcements and notifications',
    ],
  },
  {
    title: 'Reporting & Analytics',
    items: [
      'Learner progress and completion reports',
      'Course and assessment analytics',
      'Grading and performance insights',
      'Exportable reports for review',
    ],
  },
  {
    title: 'Secure Identity & Access Governance',
    items: [
      'Customizable dashboard',
      'Course overview, calendar, and learning timeline',
      'Progress status tracking',
      'Notifications, profile access, and navigation',
    ],
  },
  {
    title: 'Learning Delivery & Content Management',
    items: [
      'Discussion forums and feedback',
      'Real-time chat and messaging',
      'Surveys and polls',
      'Announcements and notifications',
    ],
  },
  {
    title: 'Live Classes & Scheduling',
    items: [
      'Discussion forums and feedback',
      'Real-time chat and messaging',
      'Surveys and polls',
      'Announcements and notifications',
    ],
  },
  {
    title: 'Assessment, Evaluation & Certification',
    items: [
      'Learner progress and completion reports',
      'Course and assessment analytics',
      'Grading and performance insights',
      'Exportable reports for review',
    ],
  },
];

export default function MoodleFeatures() {
  return (
    <section className="bg-white py-16 px-4 max-w-7xl mx-auto font-sans">
      {/* Section Heading */}
      <h2 className="text-3xl md:text-4xl font-semibold text-slate-800 mb-12 tracking-tight">
        Features of our Moodle LMS
      </h2>

      {/* Grid Layout (Responsive: 1 col on mobile, 2 on tablet, 4 on desktop) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {featureData.map((feature, index) => (
          <div
            key={index}
            className="bg-[#0b2545] text-white p-6 rounded-lg shadow-md flex flex-col justify-start min-h-[320px]"
          >
            {/* Card Title */}
            <h3 className="text-xl font-medium mb-5 leading-snug tracking-wide">
              {feature.title}
            </h3>

            {/* Feature List Items */}
            <ul className="space-y-3 text-sm text-slate-200/90 list-disc pl-5 marker:text-white">
              {feature.items.map((item, idx) => (
                <li key={idx} className="leading-relaxed">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}