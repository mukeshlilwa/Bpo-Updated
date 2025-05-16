'use client';
import Link from 'next/link';
import * as Icons from 'lucide-react';
import ContactForm from '../components/contact-form/contactform';

// Color scheme
const colors = {
  primary: '#C93C3C',
  secondary: '#2C3E50',
  accent: '#E74C3C',
  lightBg: '#F5F7FA',
  darkText: '#333333',
  lightText: '#FFFFFF'
};

/* ---------- STATIC DATA ---------- */
const solutions = {
  'Business Process Automation': {
    path: 'business-process-automation',
    items: [
      'Workflow Automation (Zapier, Monday.com, Power Automate)',
      'Task Management & Orchestration'
    ]
  },
  'AI & Machine Learning': {
    path: 'ai-and-machine-learning',
    items: [
      'Chatbots & Intelligent Ticket Routing',
      'Predictive Analytics'
    ]
  },
  'Communication & Collaboration Tools': {
    path: 'communication-&-collaboration-tools',
    items: [
      'Microsoft Teams',
      'Slack',
      'Zoom'
    ]
  },
  'Data & Business Intelligence': {
    path: 'data-business-intelligence',
    items: [
      'Power BI',
      'Looker Studio',
      'Tableau'
    ]
  },
  'CRM & Marketing Automation': {
    path: 'crm-marketing-automation',
    items: [
      'Salesforce',
      'HubSpot'
    ]
  },
  'Cloud & Infrastructure': {
    path: 'cloud-infrastructure',
    items: [
      'Amazon Web Services (AWS)',
      'Kubernetes',
      'GitHub (CI/CD, Private Repos)'
    ]
  },
  'Security & Compliance': {
    path: 'security-compliance',
    items: [
      'ISO 27001 Compliance',
      'Process Street',
      'Qualio'
    ]
  },
  'Customer Insights & Feedback': {
    path: 'customer-insights-feedback',
    items: [
      'Typeform',
      'SurveyMonkey'
    ]
  }
};

const iconList = ['Briefcase', 'Cpu', 'MessagesSquare', 'Database', 'Contact', 'Cloud', 'Shield', 'Users'];

export default function SolutionsPage() {
  return (
    <div >
      {/* Hero Section with Gradient Background */}
      <section className="relative">
        <div 
          className="py-20 px-4 sm:px-6 lg:px-8"
          style={{ 
            background: `linear-gradient(135deg, ${colors.secondary} 0%, ${colors.primary} 100%)`
          }}
        >
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white pt-0 lg:pt-5">
              Solutions<span style={{ color: colors.accent }}>.</span>
            </h1>
            <p className="mt-4 text-lg text-gray-100">
              Explore Our Comprehensive Solutions
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Cards Section */}
      <div className="container mx-auto px-6 md:px-10 lg:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {Object.entries(solutions).map(([category, data], idx) => {
            const Icon = Icons[iconList[idx]] || Icons.CircleHelp;
            const { path, items } = data;

            return (
              <div
                key={category}
                className="relative group transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
              >
                {/* Card Container with space for icon */}
                <div className="h-full pt-8">
                  {/* Floating Icon - Half inside, half outside the card */}
                  <div className="absolute -top-0 left-8 z-10">
                    <div 
                      className="w-16 h-16 flex items-center justify-center rounded-full shadow-lg border-4 border-[#C93C3C] bg-gradient-to-r from-[#0F172A] via-[#1E293B] to-[#0F172A] text-white"
                      style={{ backgroundColor: colors.primary }}
                    >
                      <Icon size={28} strokeWidth={1.5} className="text-white" />
                    </div>
                  </div>

                  {/* Card Content */}
                  <div 
                    className="h-full p-8 rounded-xl shadow-md bg-gradient-to-r from-[#0F172A] via-[#1E293B] to-[#0F172A] text-white"
                    style={{ 
                      borderTop: `4px solid ${colors.primary}`,
                    }}
                  >
                    {/* Category Title with padding to align with icon */}
                    <h2 
                      className="text-xl font-bold mb-6 mt-4"
                      style={{ 
                       
                        paddingLeft: '20px' // Matches icon positioning
                      }}
                    >
                      {category}
                    </h2>

                    {/* Solution Items List */}
                    <ul className="space-y-3">
                      {items.map((item, i) => (
                        <li key={item}>
                          <Link
                            href={`/solutions/${path}/${i}`}
                            className="flex items-center gap-2 font-medium hover:underline"
                            
                          >
                            <Icons.ArrowRight
                              size={16} className='text-[#9C3C3C]'
                            />
                            <span className="text-sm md:text-base">{item}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Contact Form Section */}
      <ContactForm/>
    </div>
  );
}