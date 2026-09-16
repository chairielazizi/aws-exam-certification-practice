import { Question } from '../types';

// ============================================================
// Domain 4: Billing, Pricing, and Support (12% — ~6 scored questions on exam)
// 15 practice questions covering:
//   - AWS pricing models
//   - Billing, budget, and cost management resources
//   - AWS technical support resources
// ============================================================

export const domain4Questions: Question[] = [
  {
    id: 'd4-001',
    domainId: 4,
    questionText:
      'Which Amazon EC2 pricing model provides the MOST significant discount (up to 90%) compared to On-Demand pricing, but instances can be interrupted by AWS with a 2-minute notification?',
    questionType: 'single_choice',
    options: [
      { id: 'a', text: 'Reserved Instances' },
      { id: 'b', text: 'Dedicated Hosts' },
      { id: 'c', text: 'Spot Instances' },
      { id: 'd', text: 'Savings Plans' },
    ],
    correctAnswers: ['c'],
    explanation:
      'Amazon EC2 Spot Instances let you take advantage of unused EC2 capacity in the AWS Cloud at up to a 90% discount compared to On-Demand prices. The trade-off is that Spot Instances can be interrupted by AWS with a 2-minute notification when AWS needs the capacity back. They are ideal for fault-tolerant and flexible workloads.',
    referenceLinks: [
      {
        text: 'Amazon EC2 Spot Instances',
        url: 'https://aws.amazon.com/ec2/spot/',
      },
    ],
    difficulty: 'easy',
    isUnscored: false,
    tags: ['ec2-pricing', 'spot-instances'],
  },
  {
    id: 'd4-002',
    domainId: 4,
    questionText:
      'Which AWS tool allows you to visualize, understand, and manage your AWS costs and usage over time?',
    questionType: 'single_choice',
    options: [
      { id: 'a', text: 'AWS Budgets' },
      { id: 'b', text: 'AWS Cost Explorer' },
      { id: 'c', text: 'AWS Pricing Calculator' },
      { id: 'd', text: 'AWS Cost and Usage Report' },
    ],
    correctAnswers: ['b'],
    explanation:
      'AWS Cost Explorer lets you visualize, understand, and manage your AWS costs and usage over time. It provides default reports that help you understand cost trends, and you can create custom reports to analyze data at a high level (e.g., total costs by service) or in detail (e.g., hourly costs).',
    referenceLinks: [
      {
        text: 'AWS Cost Explorer',
        url: 'https://aws.amazon.com/aws-cost-management/aws-cost-explorer/',
      },
    ],
    difficulty: 'easy',
    isUnscored: false,
    tags: ['cost-management', 'cost-explorer'],
  },
  {
    id: 'd4-003',
    domainId: 4,
    questionText:
      'Which AWS Support plan provides access to a Technical Account Manager (TAM)?',
    questionType: 'single_choice',
    options: [
      { id: 'a', text: 'Basic' },
      { id: 'b', text: 'Developer' },
      { id: 'c', text: 'Business' },
      { id: 'd', text: 'Enterprise' },
    ],
    correctAnswers: ['d'],
    explanation:
      'Only the Enterprise (and Enterprise On-Ramp) Support plans provide a designated Technical Account Manager (TAM). A TAM provides proactive guidance and advocacy to help you optimize AWS, plan and build solutions, and achieve operational efficiency. The TAM is a key differentiator of Enterprise Support.',
    referenceLinks: [
      {
        text: 'AWS Support Plans',
        url: 'https://aws.amazon.com/premiumsupport/plans/',
      },
    ],
    difficulty: 'easy',
    isUnscored: false,
    tags: ['support-plans', 'tam', 'enterprise'],
  },
  {
    id: 'd4-004',
    domainId: 4,
    questionText:
      'Which AWS tool helps you estimate the cost for your architecture solution before deploying it?',
    questionType: 'single_choice',
    options: [
      { id: 'a', text: 'AWS Cost Explorer' },
      { id: 'b', text: 'AWS Budgets' },
      { id: 'c', text: 'AWS Pricing Calculator' },
      { id: 'd', text: 'AWS Trusted Advisor' },
    ],
    correctAnswers: ['c'],
    explanation:
      'The AWS Pricing Calculator lets you explore AWS services and create an estimate for the cost of your use cases on AWS. You can model your solutions before building them, explore service price points, and review the calculations behind your estimate.',
    referenceLinks: [
      {
        text: 'AWS Pricing Calculator',
        url: 'https://calculator.aws/',
      },
    ],
    difficulty: 'easy',
    isUnscored: false,
    tags: ['pricing-calculator', 'cost-estimation'],
  },
  {
    id: 'd4-005',
    domainId: 4,
    questionText:
      'Which AWS feature allows you to combine billing across multiple AWS accounts and potentially receive volume pricing discounts?',
    questionType: 'single_choice',
    options: [
      { id: 'a', text: 'AWS Budgets' },
      { id: 'b', text: 'Consolidated Billing (via AWS Organizations)' },
      { id: 'c', text: 'AWS Cost Explorer' },
      { id: 'd', text: 'AWS Billing Dashboard' },
    ],
    correctAnswers: ['b'],
    explanation:
      'Consolidated Billing is a feature of AWS Organizations that allows you to combine billing from multiple AWS accounts into a single payment method. The combined usage across all accounts can qualify for volume pricing discounts, since AWS treats all accounts in an organization as a single account for billing purposes.',
    referenceLinks: [
      {
        text: 'Consolidated Billing for Organizations',
        url: 'https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/consolidated-billing.html',
      },
    ],
    difficulty: 'medium',
    isUnscored: false,
    tags: ['consolidated-billing', 'organizations', 'cost-management'],
  },
  {
    id: 'd4-006',
    domainId: 4,
    questionText:
      'Which AWS service allows you to set custom budgets and receive alerts when your costs or usage exceed your defined thresholds?',
    questionType: 'single_choice',
    options: [
      { id: 'a', text: 'AWS Cost Explorer' },
      { id: 'b', text: 'AWS Cost and Usage Report' },
      { id: 'c', text: 'AWS Budgets' },
      { id: 'd', text: 'AWS Trusted Advisor' },
    ],
    correctAnswers: ['c'],
    explanation:
      'AWS Budgets allows you to set custom cost and usage budgets that alert you when your costs or usage exceed (or are forecasted to exceed) your budgeted amount. You can set budgets based on cost, usage, Reserved Instance utilization, and Savings Plans utilization.',
    referenceLinks: [
      {
        text: 'AWS Budgets',
        url: 'https://aws.amazon.com/aws-cost-management/aws-budgets/',
      },
    ],
    difficulty: 'easy',
    isUnscored: false,
    tags: ['budgets', 'cost-management', 'alerts'],
  },
  {
    id: 'd4-007',
    domainId: 4,
    questionText:
      'What is the AWS Free Tier designed for?',
    questionType: 'single_choice',
    options: [
      { id: 'a', text: 'Enterprise-level production workloads' },
      { id: 'b', text: 'Allowing new and existing customers to try select AWS services for free' },
      { id: 'c', text: 'Providing unlimited usage of all AWS services' },
      { id: 'd', text: 'Replacing paid AWS Support plans' },
    ],
    correctAnswers: ['b'],
    explanation:
      'The AWS Free Tier allows new and existing AWS customers to try certain AWS services for free within specified limits. It includes three types of offers: Always Free (e.g., 1 million Lambda requests/month), 12 Months Free (e.g., 750 hours/month of EC2 t2.micro), and Trials (short-term free trial periods for specific services).',
    referenceLinks: [
      {
        text: 'AWS Free Tier',
        url: 'https://aws.amazon.com/free/',
      },
    ],
    difficulty: 'easy',
    isUnscored: false,
    tags: ['free-tier', 'pricing'],
  },
  {
    id: 'd4-008',
    domainId: 4,
    questionText:
      'Which EC2 pricing option provides a significant discount in exchange for a 1-year or 3-year commitment to a consistent amount of compute usage?',
    questionType: 'single_choice',
    options: [
      { id: 'a', text: 'On-Demand Instances' },
      { id: 'b', text: 'Spot Instances' },
      { id: 'c', text: 'Savings Plans' },
      { id: 'd', text: 'Dedicated Hosts' },
    ],
    correctAnswers: ['c'],
    explanation:
      'Savings Plans offer significant savings (up to 72%) compared to On-Demand pricing, in exchange for a commitment to a consistent amount of usage (measured in $/hour) for a 1 or 3 year period. There are two types: Compute Savings Plans (flexible across instance families, regions, OS) and EC2 Instance Savings Plans.',
    referenceLinks: [
      {
        text: 'AWS Savings Plans',
        url: 'https://aws.amazon.com/savingsplans/',
      },
    ],
    difficulty: 'medium',
    isUnscored: false,
    tags: ['savings-plans', 'ec2-pricing'],
  },
  {
    id: 'd4-009',
    domainId: 4,
    questionText:
      'Which AWS service provides real-time recommendations for optimizing cost, security, performance, and fault tolerance?',
    questionType: 'single_choice',
    options: [
      { id: 'a', text: 'AWS Config' },
      { id: 'b', text: 'AWS Trusted Advisor' },
      { id: 'c', text: 'Amazon Inspector' },
      { id: 'd', text: 'AWS CloudFormation' },
    ],
    correctAnswers: ['b'],
    explanation:
      'AWS Trusted Advisor is an online tool that provides real-time guidance to help you provision your resources following AWS best practices. It inspects your AWS environment and makes recommendations in five categories: cost optimization, security, fault tolerance, performance, and service limits.',
    referenceLinks: [
      {
        text: 'AWS Trusted Advisor',
        url: 'https://aws.amazon.com/premiumsupport/technology/trusted-advisor/',
      },
    ],
    difficulty: 'easy',
    isUnscored: false,
    tags: ['trusted-advisor', 'best-practices', 'cost-optimization'],
  },
  {
    id: 'd4-010',
    domainId: 4,
    questionText:
      'For which of the following services does AWS charge based on the amount of data transferred OUT of AWS? (Select TWO)',
    questionType: 'multiple_choice',
    options: [
      { id: 'a', text: 'Amazon S3 (data transfer out to internet)' },
      { id: 'b', text: 'Amazon S3 (data transfer in from internet)' },
      { id: 'c', text: 'Amazon EC2 (data transfer out to internet)' },
      { id: 'd', text: 'Amazon EC2 (data transfer in from internet)' },
      { id: 'e', text: 'AWS IAM (user creation)' },
    ],
    correctAnswers: ['a', 'c'],
    explanation:
      'AWS generally does NOT charge for inbound data transfer (data transfer IN from the internet). However, data transfer OUT to the internet is charged for most services, including Amazon S3 and Amazon EC2. Data transfer between services within the same Region may also incur charges depending on the services and availability zones involved.',
    referenceLinks: [
      {
        text: 'AWS Data Transfer Pricing',
        url: 'https://aws.amazon.com/s3/pricing/',
      },
    ],
    difficulty: 'medium',
    isUnscored: false,
    tags: ['data-transfer', 'pricing'],
  },
  {
    id: 'd4-011',
    domainId: 4,
    questionText:
      'Which AWS Support plan is the minimum required to get 24/7 access to Cloud Support Engineers via phone and chat?',
    questionType: 'single_choice',
    options: [
      { id: 'a', text: 'Basic' },
      { id: 'b', text: 'Developer' },
      { id: 'c', text: 'Business' },
      { id: 'd', text: 'Enterprise' },
    ],
    correctAnswers: ['c'],
    explanation:
      'The Business Support plan is the minimum plan that provides 24/7 access to Cloud Support Engineers via phone, chat, and web. Developer plan only provides business-hours access via email. Basic plan has no access to technical support (only documentation and community forums).',
    referenceLinks: [
      {
        text: 'Compare AWS Support Plans',
        url: 'https://aws.amazon.com/premiumsupport/plans/',
      },
    ],
    difficulty: 'medium',
    isUnscored: false,
    tags: ['support-plans', 'business-support'],
  },
  {
    id: 'd4-012',
    domainId: 4,
    questionText:
      'Which pricing model should a company choose for a database workload that runs continuously and predictably for 3 years?',
    questionType: 'single_choice',
    options: [
      { id: 'a', text: 'On-Demand' },
      { id: 'b', text: 'Spot Instances' },
      { id: 'c', text: 'Reserved Instances (3-year term)' },
      { id: 'd', text: 'Dedicated Hosts' },
    ],
    correctAnswers: ['c'],
    explanation:
      'Reserved Instances are ideal for steady-state, predictable workloads. A 3-year Reserved Instance commitment provides the highest discount (up to 72% off On-Demand). Since the database runs continuously and predictably, Reserved Instances offer the best cost savings. Spot Instances are not suitable because they can be interrupted.',
    referenceLinks: [
      {
        text: 'Amazon EC2 Reserved Instances',
        url: 'https://aws.amazon.com/ec2/pricing/reserved-instances/',
      },
    ],
    difficulty: 'medium',
    isUnscored: false,
    tags: ['reserved-instances', 'ec2-pricing'],
  },
  {
    id: 'd4-013',
    domainId: 4,
    questionText:
      'Which AWS report provides the most detailed billing information, including hourly usage for each AWS service?',
    questionType: 'single_choice',
    options: [
      { id: 'a', text: 'AWS Budgets' },
      { id: 'b', text: 'AWS Cost Explorer' },
      { id: 'c', text: 'AWS Cost and Usage Report (CUR)' },
      { id: 'd', text: 'AWS Billing Dashboard' },
    ],
    correctAnswers: ['c'],
    explanation:
      'The AWS Cost and Usage Report (CUR) is the most comprehensive set of AWS cost and usage data available. It provides the most granular billing information including hourly or daily line items for each service category, with metadata about the associated pricing and cost allocation tags.',
    referenceLinks: [
      {
        text: 'AWS Cost and Usage Report',
        url: 'https://aws.amazon.com/aws-cost-management/aws-cost-and-usage-reporting/',
      },
    ],
    difficulty: 'hard',
    isUnscored: false,
    tags: ['cost-usage-report', 'billing'],
  },
  {
    id: 'd4-014',
    domainId: 4,
    questionText:
      'Which AWS feature allows you to tag resources and then track costs by those tags?',
    questionType: 'single_choice',
    options: [
      { id: 'a', text: 'AWS Organizations' },
      { id: 'b', text: 'Cost allocation tags' },
      { id: 'c', text: 'AWS Budgets' },
      { id: 'd', text: 'AWS CloudTrail' },
    ],
    correctAnswers: ['b'],
    explanation:
      'Cost allocation tags are metadata labels that you assign to AWS resources. After activating them in the Billing console, AWS uses them to organize your costs on your Cost and Usage Report, making it easy to track and allocate costs by project, department, environment, or any other custom category.',
    referenceLinks: [
      {
        text: 'Using Cost Allocation Tags',
        url: 'https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html',
      },
    ],
    difficulty: 'medium',
    isUnscored: false,
    tags: ['tags', 'cost-allocation', 'billing'],
  },
  {
    id: 'd4-015',
    domainId: 4,
    questionText:
      'Which of the following is included in the AWS Basic (free) Support plan? (Select TWO)',
    questionType: 'multiple_choice',
    options: [
      { id: 'a', text: '24/7 access to customer service for billing questions' },
      { id: 'b', text: 'Access to a Technical Account Manager' },
      { id: 'c', text: 'Access to AWS Trusted Advisor core checks' },
      { id: 'd', text: '24/7 phone support for technical issues' },
      { id: 'e', text: 'Infrastructure Event Management' },
    ],
    correctAnswers: ['a', 'c'],
    explanation:
      'The Basic Support plan includes 24/7 access to customer service for account and billing questions, access to the AWS Trusted Advisor core (7) checks, and access to the AWS Personal Health Dashboard. It does NOT include technical support, TAM, or Infrastructure Event Management — those require paid support plans.',
    referenceLinks: [
      {
        text: 'AWS Support Plans',
        url: 'https://aws.amazon.com/premiumsupport/plans/',
      },
    ],
    difficulty: 'medium',
    isUnscored: false,
    tags: ['support-plans', 'basic-support', 'trusted-advisor'],
  },
  {
    id: 'd4-016',
    domainId: 4,
    questionText: 'Which EC2 pricing model is the most cost-effective for fault-tolerant, flexible workloads that can be interrupted?',
    questionType: 'single_choice',
    options: [
      { id: 'a', text: 'On-Demand Instances' },
      { id: 'b', text: 'Reserved Instances' },
      { id: 'c', text: 'Spot Instances' },
      { id: 'd', text: 'Dedicated Hosts' },
    ],
    correctAnswers: ['c'],
    explanation: 'Amazon EC2 Spot Instances let you take advantage of unused EC2 capacity in the AWS cloud. Spot Instances are available at up to a 90% discount compared to On-Demand prices, but they can be interrupted by AWS with a 2-minute warning. They are ideal for fault-tolerant, flexible, or stateless workloads.',
    referenceLinks: [
      { text: 'Amazon EC2 Spot Instances', url: 'https://aws.amazon.com/ec2/spot/' },
    ],
    difficulty: 'easy',
    isUnscored: false,
    tags: ['pricing', 'ec2', 'spot-instances'],
  },
  {
    id: 'd4-017',
    domainId: 4,
    questionText: 'A company wants to commit to a consistent amount of compute usage (e.g., $10/hour) for a 1- or 3-year term to lower their costs. Which pricing model is this?',
    questionType: 'single_choice',
    options: [
      { id: 'a', text: 'Spot Instances' },
      { id: 'b', text: 'Savings Plans' },
      { id: 'c', text: 'On-Demand Instances' },
      { id: 'd', text: 'Dedicated Instances' },
    ],
    correctAnswers: ['b'],
    explanation: 'Savings Plans is a flexible pricing model that offers lower prices compared to On-Demand pricing, in exchange for a specific usage commitment (measured in $/hour) for a one- or three-year period. This applies to EC2, Fargate, and Lambda.',
    referenceLinks: [
      { text: 'AWS Savings Plans', url: 'https://aws.amazon.com/savingsplans/' },
    ],
    difficulty: 'medium',
    isUnscored: false,
    tags: ['pricing', 'savings-plans'],
  },
  {
    id: 'd4-018',
    domainId: 4,
    questionText: 'Which AWS support plan provides access to a Technical Account Manager (TAM)?',
    questionType: 'single_choice',
    options: [
      { id: 'a', text: 'Basic' },
      { id: 'b', text: 'Developer' },
      { id: 'c', text: 'Business' },
      { id: 'd', text: 'Enterprise' },
    ],
    correctAnswers: ['d'],
    explanation: 'The Enterprise Support plan is the only plan that includes access to a designated Technical Account Manager (TAM) who provides proactive guidance, architectural reviews, and ongoing support.',
    referenceLinks: [
      { text: 'AWS Support Plans', url: 'https://aws.amazon.com/premiumsupport/plans/' },
    ],
    difficulty: 'medium',
    isUnscored: false,
    tags: ['support-plans', 'enterprise'],
  },
  {
    id: 'd4-019',
    domainId: 4,
    questionText: 'What is the main purpose of the AWS Pricing Calculator?',
    questionType: 'single_choice',
    options: [
      { id: 'a', text: 'To automatically reduce your monthly AWS bill' },
      { id: 'b', text: 'To estimate the cost of architecture solutions before creating them on AWS' },
      { id: 'c', text: 'To view historical spending trends over the past year' },
      { id: 'd', text: 'To set up alerts when your spend exceeds a certain threshold' },
    ],
    correctAnswers: ['b'],
    explanation: 'AWS Pricing Calculator is a web-based planning tool that you can use to create estimates for your AWS use cases. You can use it to model your solutions before building them, explore the price points and calculations behind your estimate, and find the available instance types and contract terms that meet your needs.',
    referenceLinks: [
      { text: 'AWS Pricing Calculator', url: 'https://calculator.aws/#/' },
    ],
    difficulty: 'easy',
    isUnscored: false,
    tags: ['pricing-calculator', 'billing'],
  },
  {
    id: 'd4-020',
    domainId: 4,
    questionText: 'A company needs to visualize, understand, and manage their AWS costs and usage over time. Which service provides a graphical interface to view this data?',
    questionType: 'single_choice',
    options: [
      { id: 'a', text: 'AWS Budgets' },
      { id: 'b', text: 'AWS Cost Explorer' },
      { id: 'c', text: 'AWS Pricing Calculator' },
      { id: 'd', text: 'AWS Trusted Advisor' },
    ],
    correctAnswers: ['b'],
    explanation: 'AWS Cost Explorer has an easy-to-use interface that lets you visualize, understand, and manage your AWS costs and usage over time. You can analyze data at a high level (e.g., total costs and usage across all accounts) or dive deeper into your cost and usage data to identify trends, pinpoint cost drivers, and detect anomalies.',
    referenceLinks: [
      { text: 'AWS Cost Explorer', url: 'https://aws.amazon.com/aws-cost-management/aws-cost-explorer/' },
    ],
    difficulty: 'easy',
    isUnscored: false,
    tags: ['cost-explorer', 'billing', 'visualization'],
  },
  {
    id: 'd4-021',
    domainId: 4,
    questionText: 'Which AWS service allows you to set custom alerts when your costs or usage exceed (or are forecasted to exceed) your budgeted amount?',
    questionType: 'single_choice',
    options: [
      { id: 'a', text: 'AWS Cost Explorer' },
      { id: 'b', text: 'AWS Budgets' },
      { id: 'c', text: 'AWS Pricing Calculator' },
      { id: 'd', text: 'AWS Billing Console' },
    ],
    correctAnswers: ['b'],
    explanation: 'AWS Budgets gives you the ability to set custom budgets that alert you when your costs or usage exceed (or are forecasted to exceed) your budgeted amount. You can also use AWS Budgets to set reservation utilization or coverage targets and receive alerts when your metrics drop below the threshold.',
    referenceLinks: [
      { text: 'AWS Budgets', url: 'https://aws.amazon.com/aws-cost-management/aws-budgets/' },
    ],
    difficulty: 'easy',
    isUnscored: false,
    tags: ['budgets', 'alerts', 'billing'],
  },
  {
    id: 'd4-022',
    domainId: 4,
    questionText: 'Which of the following support plans provide 24/7 access to cloud support engineers via phone, email, and chat? (Select TWO)',
    questionType: 'multiple_choice',
    options: [
      { id: 'a', text: 'Basic' },
      { id: 'b', text: 'Developer' },
      { id: 'c', text: 'Business' },
      { id: 'd', text: 'Enterprise' },
      { id: 'e', text: 'Free Tier' },
    ],
    correctAnswers: ['c', 'd'],
    explanation: 'Both the Business and Enterprise Support plans provide 24/7 access to cloud support engineers via phone, email, and chat. The Developer plan only provides business hours email access to cloud support associates. Basic provides no technical support.',
    referenceLinks: [
      { text: 'AWS Support Plans', url: 'https://aws.amazon.com/premiumsupport/plans/' },
    ],
    difficulty: 'medium',
    isUnscored: false,
    tags: ['support-plans', 'business', 'enterprise'],
  },
  {
    id: 'd4-023',
    domainId: 4,
    questionText: 'A company has multiple AWS accounts. How can they consolidate the billing for all these accounts to receive a single invoice?',
    questionType: 'single_choice',
    options: [
      { id: 'a', text: 'Use AWS Cost Explorer' },
      { id: 'b', text: 'Use AWS Organizations with Consolidated Billing' },
      { id: 'c', text: 'Use IAM to merge the accounts' },
      { id: 'd', text: 'Create an AWS Budget for all accounts' },
    ],
    correctAnswers: ['b'],
    explanation: 'Consolidated billing is a feature of AWS Organizations that allows you to consolidate billing and payment for multiple AWS accounts. Every organization has a master (management) account that pays the charges of all the member accounts.',
    referenceLinks: [
      { text: 'Consolidated Billing', url: 'https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/consolidated-billing.html' },
    ],
    difficulty: 'medium',
    isUnscored: false,
    tags: ['organizations', 'consolidated-billing'],
  },
  {
    id: 'd4-024',
    domainId: 4,
    questionText: 'Which of the following is true regarding inbound and outbound data transfer pricing in AWS?',
    questionType: 'single_choice',
    options: [
      { id: 'a', text: 'Data transfer IN to AWS is generally free, while data transfer OUT is typically charged.' },
      { id: 'b', text: 'Data transfer OUT of AWS is generally free, while data transfer IN is typically charged.' },
      { id: 'c', text: 'Both data transfer IN and OUT are always free.' },
      { id: 'd', text: 'Both data transfer IN and OUT are charged equally.' },
    ],
    correctAnswers: ['a'],
    explanation: 'As a general rule in AWS, data transfer IN to AWS services from the internet is free. Data transfer OUT of AWS to the internet is usually charged (with some free tier allowances). Data transfer between services within the same region may be free or charged depending on the exact services and AZs involved.',
    referenceLinks: [
      { text: 'AWS Pricing Overview', url: 'https://docs.aws.amazon.com/whitepapers/latest/how-aws-pricing-works/data-transfer.html' },
    ],
    difficulty: 'medium',
    isUnscored: false,
    tags: ['pricing', 'data-transfer'],
  },
  {
    id: 'd4-025',
    domainId: 4,
    questionText: 'Which AWS service provides actionable recommendations to optimize AWS infrastructure for cost, security, performance, fault tolerance, and service limits?',
    questionType: 'single_choice',
    options: [
      { id: 'a', text: 'AWS Cost Explorer' },
      { id: 'b', text: 'AWS Trusted Advisor' },
      { id: 'c', text: 'AWS Budgets' },
      { id: 'd', text: 'AWS Config' },
    ],
    correctAnswers: ['b'],
    explanation: 'AWS Trusted Advisor is an online tool that provides you real-time guidance to help you provision your resources following AWS best practices. It checks your environment against 5 pillars: cost optimization, performance, security, fault tolerance, and service limits.',
    referenceLinks: [
      { text: 'AWS Trusted Advisor', url: 'https://aws.amazon.com/premiumsupport/technology/trusted-advisor/' },
    ],
    difficulty: 'easy',
    isUnscored: false,
    tags: ['trusted-advisor', 'optimization', 'billing'],
  }
];
