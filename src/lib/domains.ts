import { Domain } from './types';

export const DOMAINS: Domain[] = [
  {
    id: 1,
    name: 'Cloud Concepts',
    shortName: 'Cloud Concepts',
    description:
      'Define the benefits of the AWS Cloud, identify design principles of the AWS Cloud, understand the strategies for migration to the AWS Cloud, and understand concepts of cloud economics.',
    weightPercentage: 24,
    scoredQuestionCount: 12,
    color: '#3B82F6',
    gradient: 'from-blue-500 to-cyan-400',
    icon: '☁️',
    topics: [
      'Value proposition of the AWS Cloud',
      'AWS Cloud design principles',
      'Migration strategies',
      'Cloud economics',
    ],
  },
  {
    id: 2,
    name: 'Security and Compliance',
    shortName: 'Security',
    description:
      'Understand the AWS shared responsibility model, AWS Cloud security, governance, and compliance concepts, and the capabilities for access management.',
    weightPercentage: 30,
    scoredQuestionCount: 15,
    color: '#F59E0B',
    gradient: 'from-amber-500 to-orange-400',
    icon: '🔒',
    topics: [
      'AWS shared responsibility model',
      'Cloud security and governance',
      'Access management capabilities',
      'Security support resources',
    ],
  },
  {
    id: 3,
    name: 'Cloud Technology and Services',
    shortName: 'Technology',
    description:
      'Define methods of deploying and operating in the AWS Cloud, define the AWS global infrastructure, identify AWS compute, database, network, storage, AI/ML, and analytics services.',
    weightPercentage: 34,
    scoredQuestionCount: 17,
    color: '#10B981',
    gradient: 'from-emerald-500 to-teal-400',
    icon: '⚙️',
    topics: [
      'Deploying and operating in the AWS Cloud',
      'AWS global infrastructure',
      'AWS compute services',
      'AWS database services',
      'AWS network services',
      'AWS storage services',
      'AWS AI/ML and analytics services',
    ],
  },
  {
    id: 4,
    name: 'Billing, Pricing, and Support',
    shortName: 'Billing',
    description:
      'Compare AWS pricing models, understand resources for billing, budget, and cost management, and identify AWS technical support resources.',
    weightPercentage: 12,
    scoredQuestionCount: 6,
    color: '#8B5CF6',
    gradient: 'from-violet-500 to-purple-400',
    icon: '💰',
    topics: [
      'AWS pricing models',
      'Billing, budget, and cost management',
      'AWS technical support resources',
    ],
  },
];

export const EXAM_CONFIG = {
  totalQuestions: 65,
  scoredQuestions: 50,
  unscoredQuestions: 15,
  timeLimitMinutes: 90,
  timeLimitSeconds: 90 * 60,
  passingScaledScore: 700,
  maxScaledScore: 1000,
  minScaledScore: 100,
};

export function getDomainById(id: number): Domain | undefined {
  return DOMAINS.find((d) => d.id === id);
}
