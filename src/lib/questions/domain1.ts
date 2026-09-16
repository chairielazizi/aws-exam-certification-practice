import { Question } from '../types';

// ============================================================
// Domain 1: Cloud Concepts (24% — ~12 scored questions on exam)
// 25 practice questions covering:
//   - Value proposition of the AWS Cloud
//   - AWS Cloud design principles
//   - Migration strategies
//   - Cloud economics
// ============================================================

export const domain1Questions: Question[] = [
  {
    id: 'd1-001',
    domainId: 1,
    questionText:
      'Which of the following is a benefit of cloud computing that allows you to stop spending money on running and maintaining data centers?',
    questionType: 'single_choice',
    options: [
      { id: 'a', text: 'Agility' },
      { id: 'b', text: 'Trade fixed expense for variable expense' },
      { id: 'c', text: 'Deploy globally in minutes' },
      { id: 'd', text: 'Elasticity' },
    ],
    correctAnswers: ['b'],
    explanation:
      'Cloud computing allows you to trade fixed expenses (such as data centers and physical servers) for variable expenses, and only pay for IT when you consume it. This eliminates the need to invest heavily in data centers before knowing how you\'re going to use them.',
    referenceLinks: [
      {
        text: 'Six Advantages of Cloud Computing',
        url: 'https://docs.aws.amazon.com/whitepapers/latest/aws-overview/six-advantages-of-cloud-computing.html',
      },
    ],
    difficulty: 'easy',
    isUnscored: false,
    tags: ['cloud-benefits', 'value-proposition'],
  },
  {
    id: 'd1-002',
    domainId: 1,
    questionText:
      'A company wants to eliminate the need to guess infrastructure capacity needs. Which advantage of cloud computing does this describe?',
    questionType: 'single_choice',
    options: [
      { id: 'a', text: 'High availability' },
      { id: 'b', text: 'Economies of scale' },
      { id: 'c', text: 'Elasticity' },
      { id: 'd', text: 'Agility' },
    ],
    correctAnswers: ['c'],
    explanation:
      'Elasticity is the ability to acquire resources as you need them and release resources when you no longer need them. In the cloud, you don\'t have to over-provision resources upfront to handle peak levels of business activity in the future. Instead, you provision the amount of resources that you actually need and scale automatically.',
    referenceLinks: [
      {
        text: 'AWS Cloud Elasticity',
        url: 'https://aws.amazon.com/what-is/elasticity-in-the-cloud/',
      },
    ],
    difficulty: 'easy',
    isUnscored: false,
    tags: ['cloud-benefits', 'elasticity'],
  },
  {
    id: 'd1-003',
    domainId: 1,
    questionText:
      'Which cloud computing model provides a complete application managed by the provider, accessible through a web browser?',
    questionType: 'single_choice',
    options: [
      { id: 'a', text: 'Infrastructure as a Service (IaaS)' },
      { id: 'b', text: 'Platform as a Service (PaaS)' },
      { id: 'c', text: 'Software as a Service (SaaS)' },
      { id: 'd', text: 'Function as a Service (FaaS)' },
    ],
    correctAnswers: ['c'],
    explanation:
      'Software as a Service (SaaS) provides you with a complete product that is run and managed by the service provider. You don\'t have to think about how the service is maintained or how the underlying infrastructure is managed. A common example is web-based email such as Gmail, or Amazon WorkSpaces.',
    referenceLinks: [
      {
        text: 'Types of Cloud Computing',
        url: 'https://aws.amazon.com/types-of-cloud-computing/',
      },
    ],
    difficulty: 'easy',
    isUnscored: false,
    tags: ['cloud-models', 'saas'],
  },
  {
    id: 'd1-004',
    domainId: 1,
    questionText:
      'A company is running workloads in its on-premises data center and also using AWS Cloud services. What type of deployment model is this?',
    questionType: 'single_choice',
    options: [
      { id: 'a', text: 'Private cloud' },
      { id: 'b', text: 'Community cloud' },
      { id: 'c', text: 'Hybrid cloud' },
      { id: 'd', text: 'Public cloud' },
    ],
    correctAnswers: ['c'],
    explanation:
      'A hybrid cloud deployment connects infrastructure and applications between cloud-based resources and existing resources that are not located in the cloud (on-premises). This is the most common method of cloud deployment, as it allows an organization to extend and grow its infrastructure into the cloud while connecting cloud resources to internal systems.',
    referenceLinks: [
      {
        text: 'Cloud Computing Deployment Models',
        url: 'https://aws.amazon.com/types-of-cloud-computing/',
      },
      {
        text: 'AWS Hybrid Cloud Solutions',
        url: 'https://aws.amazon.com/hybrid/',
      },
    ],
    difficulty: 'easy',
    isUnscored: false,
    tags: ['deployment-models', 'hybrid'],
  },
  {
    id: 'd1-005',
    domainId: 1,
    questionText:
      'Which pillar of the AWS Well-Architected Framework focuses on the ability to run workloads effectively, gain insight into operations, and continuously improve supporting processes?',
    questionType: 'single_choice',
    options: [
      { id: 'a', text: 'Security' },
      { id: 'b', text: 'Reliability' },
      { id: 'c', text: 'Operational Excellence' },
      { id: 'd', text: 'Performance Efficiency' },
    ],
    correctAnswers: ['c'],
    explanation:
      'The Operational Excellence pillar includes the ability to support development and run workloads effectively, gain insight into their operations, and continuously improve supporting processes and procedures to deliver business value. Key topics include organization, prepare, operate, and evolve.',
    referenceLinks: [
      {
        text: 'AWS Well-Architected Framework — Operational Excellence',
        url: 'https://docs.aws.amazon.com/wellarchitected/latest/operational-excellence-pillar/welcome.html',
      },
    ],
    difficulty: 'medium',
    isUnscored: false,
    tags: ['well-architected', 'operational-excellence'],
  },
  {
    id: 'd1-006',
    domainId: 1,
    questionText:
      'Which AWS service or tool helps organizations define and visualize a migration strategy by providing a guided process for moving to the cloud?',
    questionType: 'single_choice',
    options: [
      { id: 'a', text: 'AWS Migration Hub' },
      { id: 'b', text: 'AWS CloudFormation' },
      { id: 'c', text: 'AWS Trusted Advisor' },
      { id: 'd', text: 'AWS Config' },
    ],
    correctAnswers: ['a'],
    explanation:
      'AWS Migration Hub provides a single location to track the progress of application migrations across multiple AWS and partner solutions. It lets you choose the AWS and partner migration tools that best fit your needs, while providing visibility into the status of migrations across your portfolio of applications.',
    referenceLinks: [
      {
        text: 'AWS Migration Hub',
        url: 'https://aws.amazon.com/migration-hub/',
      },
    ],
    difficulty: 'medium',
    isUnscored: false,
    tags: ['migration', 'migration-hub'],
  },
  {
    id: 'd1-007',
    domainId: 1,
    questionText:
      'Which of the following are pillars of the AWS Well-Architected Framework? (Select TWO)',
    questionType: 'multiple_choice',
    options: [
      { id: 'a', text: 'Operational Excellence' },
      { id: 'b', text: 'Scalability' },
      { id: 'c', text: 'Elasticity' },
      { id: 'd', text: 'Sustainability' },
      { id: 'e', text: 'Affordability' },
    ],
    correctAnswers: ['a', 'd'],
    explanation:
      'The six pillars of the AWS Well-Architected Framework are: (1) Operational Excellence, (2) Security, (3) Reliability, (4) Performance Efficiency, (5) Cost Optimization, and (6) Sustainability. Scalability, Elasticity, and Affordability are not pillars of the framework.',
    referenceLinks: [
      {
        text: 'AWS Well-Architected Framework',
        url: 'https://docs.aws.amazon.com/wellarchitected/latest/framework/welcome.html',
      },
    ],
    difficulty: 'medium',
    isUnscored: false,
    tags: ['well-architected', 'pillars'],
  },
  {
    id: 'd1-008',
    domainId: 1,
    questionText:
      'Which migration strategy involves moving an application to the cloud without making any changes to it?',
    questionType: 'single_choice',
    options: [
      { id: 'a', text: 'Replatform' },
      { id: 'b', text: 'Refactor' },
      { id: 'c', text: 'Rehost (Lift and Shift)' },
      { id: 'd', text: 'Repurchase' },
    ],
    correctAnswers: ['c'],
    explanation:
      'Rehost, also known as "lift and shift," involves moving an application to the cloud without making any changes. This is one of the 7 Rs of migration strategies. It is the quickest migration strategy, as it doesn\'t require code changes, but it may not take full advantage of cloud-native features.',
    referenceLinks: [
      {
        text: 'AWS 7 Rs of Migration',
        url: 'https://docs.aws.amazon.com/prescriptive-guidance/latest/large-migration-guide/migration-strategies.html',
      },
    ],
    difficulty: 'easy',
    isUnscored: false,
    tags: ['migration', 'rehost', '7rs'],
  },
  {
    id: 'd1-009',
    domainId: 1,
    questionText:
      'A startup wants to avoid large upfront capital expenditures for IT infrastructure. Which benefit of cloud computing supports this?',
    questionType: 'single_choice',
    options: [
      { id: 'a', text: 'Go global in minutes' },
      { id: 'b', text: 'Stop guessing capacity' },
      { id: 'c', text: 'Trade capital expense (CapEx) for operational expense (OpEx)' },
      { id: 'd', text: 'Increase speed and agility' },
    ],
    correctAnswers: ['c'],
    explanation:
      'Cloud computing lets you trade capital expense (CapEx) for operational expense (OpEx). Instead of investing heavily in data centers and servers before knowing how you\'re going to use them, you can pay only when you consume computing resources, and pay only for how much you consume.',
    referenceLinks: [
      {
        text: 'Six Advantages of Cloud Computing',
        url: 'https://docs.aws.amazon.com/whitepapers/latest/aws-overview/six-advantages-of-cloud-computing.html',
      },
    ],
    difficulty: 'easy',
    isUnscored: false,
    tags: ['cloud-economics', 'capex-opex'],
  },
  {
    id: 'd1-010',
    domainId: 1,
    questionText:
      'Which cloud computing advantage allows AWS to achieve lower variable costs than individual companies could on their own?',
    questionType: 'single_choice',
    options: [
      { id: 'a', text: 'Elasticity' },
      { id: 'b', text: 'Economies of scale' },
      { id: 'c', text: 'High availability' },
      { id: 'd', text: 'Fault tolerance' },
    ],
    correctAnswers: ['b'],
    explanation:
      'By using cloud computing, you can achieve a lower variable cost than you can get on your own. Because usage from hundreds of thousands of customers is aggregated in the cloud, providers such as AWS can achieve higher economies of scale, which translates into lower pay-as-you-go prices.',
    referenceLinks: [
      {
        text: 'Six Advantages of Cloud Computing',
        url: 'https://docs.aws.amazon.com/whitepapers/latest/aws-overview/six-advantages-of-cloud-computing.html',
      },
    ],
    difficulty: 'easy',
    isUnscored: false,
    tags: ['cloud-benefits', 'economies-of-scale'],
  },
  {
    id: 'd1-011',
    domainId: 1,
    questionText:
      'Which AWS Well-Architected Framework pillar focuses on the ability of a workload to perform its intended function correctly and consistently?',
    questionType: 'single_choice',
    options: [
      { id: 'a', text: 'Performance Efficiency' },
      { id: 'b', text: 'Security' },
      { id: 'c', text: 'Reliability' },
      { id: 'd', text: 'Cost Optimization' },
    ],
    correctAnswers: ['c'],
    explanation:
      'The Reliability pillar encompasses the ability of a workload to perform its intended function correctly and consistently when it\'s expected to. This includes the ability to operate and test the workload through its total lifecycle, including recovering from failures and meeting demand.',
    referenceLinks: [
      {
        text: 'AWS Well-Architected Framework — Reliability',
        url: 'https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/welcome.html',
      },
    ],
    difficulty: 'medium',
    isUnscored: false,
    tags: ['well-architected', 'reliability'],
  },
  {
    id: 'd1-012',
    domainId: 1,
    questionText:
      'A company wants to move from a monolithic application to a microservices architecture in the cloud. Which migration strategy is this?',
    questionType: 'single_choice',
    options: [
      { id: 'a', text: 'Rehost' },
      { id: 'b', text: 'Replatform' },
      { id: 'c', text: 'Refactor / Re-architect' },
      { id: 'd', text: 'Retire' },
    ],
    correctAnswers: ['c'],
    explanation:
      'Refactor (or Re-architect) involves reimagining how an application is architected and developed using cloud-native features. This is typically driven by a strong business need to add features, scale, or improve performance that would be difficult to achieve in the application\'s existing environment.',
    referenceLinks: [
      {
        text: 'AWS 7 Rs of Migration',
        url: 'https://docs.aws.amazon.com/prescriptive-guidance/latest/large-migration-guide/migration-strategies.html',
      },
    ],
    difficulty: 'medium',
    isUnscored: false,
    tags: ['migration', 'refactor', '7rs'],
  },
  {
    id: 'd1-013',
    domainId: 1,
    questionText:
      'What does the concept of "design for failure" mean in cloud architecture?',
    questionType: 'single_choice',
    options: [
      { id: 'a', text: 'Applications should be designed to never fail' },
      { id: 'b', text: 'Applications should anticipate and gracefully handle component failures' },
      { id: 'c', text: 'Only use the most expensive services to prevent failure' },
      { id: 'd', text: 'Failures should be handled by the AWS support team' },
    ],
    correctAnswers: ['b'],
    explanation:
      '"Design for failure" is a key cloud architecture principle. It means you should architect your applications assuming that components will fail, and build in redundancy and failover mechanisms to ensure your application remains available even when individual components fail.',
    referenceLinks: [
      {
        text: 'AWS Well-Architected Framework — Reliability',
        url: 'https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/welcome.html',
      },
    ],
    difficulty: 'easy',
    isUnscored: false,
    tags: ['design-principles', 'fault-tolerance'],
  },
  {
    id: 'd1-014',
    domainId: 1,
    questionText:
      'Which of the following best describes the concept of "agility" in cloud computing?',
    questionType: 'single_choice',
    options: [
      { id: 'a', text: 'The ability to deploy resources in multiple AWS Regions' },
      { id: 'b', text: 'The ability to quickly provision resources and experiment with low cost and risk' },
      { id: 'c', text: 'The ability to automatically scale computing resources' },
      { id: 'd', text: 'The ability to maintain 99.99% uptime for applications' },
    ],
    correctAnswers: ['b'],
    explanation:
      'Agility in cloud computing refers to the ease with which new IT resources are made available. The cloud gives you access to a broad range of technologies that enable faster innovation. You can quickly spin up resources as you need them, deploying hundreds or even thousands of servers in minutes. This means you can quickly develop, test, and launch new applications.',
    referenceLinks: [
      {
        text: 'Six Advantages of Cloud Computing',
        url: 'https://docs.aws.amazon.com/whitepapers/latest/aws-overview/six-advantages-of-cloud-computing.html',
      },
    ],
    difficulty: 'easy',
    isUnscored: false,
    tags: ['cloud-benefits', 'agility'],
  },
  {
    id: 'd1-015',
    domainId: 1,
    questionText:
      'Which AWS tool provides a set of best practice questions to evaluate your cloud architecture against the Well-Architected Framework?',
    questionType: 'single_choice',
    options: [
      { id: 'a', text: 'AWS Trusted Advisor' },
      { id: 'b', text: 'AWS Well-Architected Tool' },
      { id: 'c', text: 'AWS CloudTrail' },
      { id: 'd', text: 'AWS Config' },
    ],
    correctAnswers: ['b'],
    explanation:
      'The AWS Well-Architected Tool (AWS WA Tool) is a service in the cloud that provides a consistent process for measuring your architecture using AWS best practices. It helps you review the state of your workloads and compares them to the latest AWS architectural best practices across the six pillars.',
    referenceLinks: [
      {
        text: 'AWS Well-Architected Tool',
        url: 'https://aws.amazon.com/well-architected-tool/',
      },
    ],
    difficulty: 'medium',
    isUnscored: false,
    tags: ['well-architected', 'wa-tool'],
  },
  {
    id: 'd1-016',
    domainId: 1,
    questionText:
      'Which migration strategy involves switching to a different product, such as moving from an on-premises CRM to Salesforce?',
    questionType: 'single_choice',
    options: [
      { id: 'a', text: 'Rehost' },
      { id: 'b', text: 'Repurchase' },
      { id: 'c', text: 'Retain' },
      { id: 'd', text: 'Replatform' },
    ],
    correctAnswers: ['b'],
    explanation:
      'Repurchase involves moving from an existing license to a SaaS model. For example, a company might choose to move from a traditional CRM (Customer Relationship Management) system to Salesforce.com. This is often referred to as "drop and shop."',
    referenceLinks: [
      {
        text: 'AWS 7 Rs of Migration',
        url: 'https://docs.aws.amazon.com/prescriptive-guidance/latest/large-migration-guide/migration-strategies.html',
      },
    ],
    difficulty: 'medium',
    isUnscored: false,
    tags: ['migration', 'repurchase', '7rs'],
  },
  {
    id: 'd1-017',
    domainId: 1,
    questionText:
      'Which AWS Well-Architected Framework pillar addresses the ability to minimize the environmental impact of running cloud workloads?',
    questionType: 'single_choice',
    options: [
      { id: 'a', text: 'Operational Excellence' },
      { id: 'b', text: 'Cost Optimization' },
      { id: 'c', text: 'Sustainability' },
      { id: 'd', text: 'Reliability' },
    ],
    correctAnswers: ['c'],
    explanation:
      'The Sustainability pillar focuses on minimizing the environmental impacts of running cloud workloads. Key topics include a shared responsibility model for sustainability, understanding impact, and maximizing utilization to minimize required resources and reduce downstream impacts.',
    referenceLinks: [
      {
        text: 'AWS Well-Architected Framework — Sustainability',
        url: 'https://docs.aws.amazon.com/wellarchitected/latest/sustainability-pillar/sustainability-pillar.html',
      },
    ],
    difficulty: 'medium',
    isUnscored: false,
    tags: ['well-architected', 'sustainability'],
  },
  {
    id: 'd1-018',
    domainId: 1,
    questionText:
      'What is the benefit of deploying an application across multiple Availability Zones?',
    questionType: 'single_choice',
    options: [
      { id: 'a', text: 'Reduced latency for all global users' },
      { id: 'b', text: 'Lower pricing for AWS services' },
      { id: 'c', text: 'Increased high availability and fault tolerance' },
      { id: 'd', text: 'Simplified application development' },
    ],
    correctAnswers: ['c'],
    explanation:
      'Deploying across multiple Availability Zones (AZs) increases high availability and fault tolerance. Each AZ is a separate, isolated data center location. If one AZ experiences an outage, the application can continue running in another AZ, ensuring minimal downtime.',
    referenceLinks: [
      {
        text: 'AWS Global Infrastructure — Availability Zones',
        url: 'https://aws.amazon.com/about-aws/global-infrastructure/regions_az/',
      },
    ],
    difficulty: 'easy',
    isUnscored: false,
    tags: ['infrastructure', 'availability-zones', 'high-availability'],
  },
  {
    id: 'd1-019',
    domainId: 1,
    questionText:
      'Which AWS Cloud Adoption Framework (CAF) perspective is responsible for ensuring that IT aligns with business needs?',
    questionType: 'single_choice',
    options: [
      { id: 'a', text: 'Business perspective' },
      { id: 'b', text: 'People perspective' },
      { id: 'c', text: 'Governance perspective' },
      { id: 'd', text: 'Platform perspective' },
    ],
    correctAnswers: ['a'],
    explanation:
      'The Business perspective helps ensure that IT aligns with business needs and that IT investments link to key business results. It focuses on creating a strong business case for cloud adoption, ensuring business and IT strategies are aligned.',
    referenceLinks: [
      {
        text: 'AWS Cloud Adoption Framework (CAF)',
        url: 'https://aws.amazon.com/cloud-adoption-framework/',
      },
    ],
    difficulty: 'medium',
    isUnscored: false,
    tags: ['caf', 'business-perspective'],
  },
  {
    id: 'd1-020',
    domainId: 1,
    questionText:
      'Which of the following are characteristics of cloud computing? (Select TWO)',
    questionType: 'multiple_choice',
    options: [
      { id: 'a', text: 'On-demand self-service' },
      { id: 'b', text: 'Requires long-term contracts' },
      { id: 'c', text: 'Resource pooling' },
      { id: 'd', text: 'Fixed capacity' },
      { id: 'e', text: 'Requires physical hardware management' },
    ],
    correctAnswers: ['a', 'c'],
    explanation:
      'The NIST definition of cloud computing includes five essential characteristics: on-demand self-service, broad network access, resource pooling, rapid elasticity, and measured service. Cloud computing does not require long-term contracts, has flexible (not fixed) capacity, and abstracts away physical hardware management.',
    referenceLinks: [
      {
        text: 'What is Cloud Computing?',
        url: 'https://aws.amazon.com/what-is-cloud-computing/',
      },
    ],
    difficulty: 'easy',
    isUnscored: false,
    tags: ['cloud-characteristics'],
  },
  {
    id: 'd1-021',
    domainId: 1,
    questionText:
      'A company wants to make minor optimizations to an application during migration to the cloud, such as using Amazon RDS instead of self-managing a database. Which migration strategy is this?',
    questionType: 'single_choice',
    options: [
      { id: 'a', text: 'Rehost' },
      { id: 'b', text: 'Replatform' },
      { id: 'c', text: 'Refactor' },
      { id: 'd', text: 'Relocate' },
    ],
    correctAnswers: ['b'],
    explanation:
      'Replatform (also called "lift, tinker, and shift") involves making a few cloud optimizations to achieve a tangible benefit without changing the core architecture of the application. For example, you might reduce the time you spend managing database instances by migrating to a managed service like Amazon RDS.',
    referenceLinks: [
      {
        text: 'AWS 7 Rs of Migration',
        url: 'https://docs.aws.amazon.com/prescriptive-guidance/latest/large-migration-guide/migration-strategies.html',
      },
    ],
    difficulty: 'medium',
    isUnscored: false,
    tags: ['migration', 'replatform', '7rs'],
  },
  {
    id: 'd1-022',
    domainId: 1,
    questionText:
      'Which AWS Well-Architected pillar includes running workloads on the most efficient compute resources and using right-sizing?',
    questionType: 'single_choice',
    options: [
      { id: 'a', text: 'Cost Optimization' },
      { id: 'b', text: 'Reliability' },
      { id: 'c', text: 'Operational Excellence' },
      { id: 'd', text: 'Performance Efficiency' },
    ],
    correctAnswers: ['d'],
    explanation:
      'The Performance Efficiency pillar includes the ability to use computing resources efficiently to meet system requirements, and to maintain that efficiency as demand changes and technologies evolve. It covers selection of the right resource types and sizes, monitoring performance, and making informed decisions to maintain efficiency.',
    referenceLinks: [
      {
        text: 'AWS Well-Architected Framework — Performance Efficiency',
        url: 'https://docs.aws.amazon.com/wellarchitected/latest/performance-efficiency-pillar/welcome.html',
      },
    ],
    difficulty: 'medium',
    isUnscored: false,
    tags: ['well-architected', 'performance-efficiency'],
  },
  {
    id: 'd1-023',
    domainId: 1,
    questionText:
      'What is a benefit of using AWS managed services (such as Amazon RDS or Amazon DynamoDB)?',
    questionType: 'single_choice',
    options: [
      { id: 'a', text: 'Complete control over the underlying operating system' },
      { id: 'b', text: 'Reduced operational overhead for patching and backups' },
      { id: 'c', text: 'Lower costs compared to all open-source alternatives' },
      { id: 'd', text: 'No need to configure security settings' },
    ],
    correctAnswers: ['b'],
    explanation:
      'AWS managed services reduce operational overhead by handling routine tasks like hardware provisioning, database setup, patching, and backups. This allows your teams to focus on high-value activities instead of undifferentiated heavy lifting.',
    referenceLinks: [
      {
        text: 'AWS Managed Services',
        url: 'https://aws.amazon.com/managed-services/',
      },
    ],
    difficulty: 'easy',
    isUnscored: false,
    tags: ['managed-services', 'cloud-benefits'],
  },
  {
    id: 'd1-024',
    domainId: 1,
    questionText:
      'Which AWS service is used to assess on-premises workloads and create a migration plan?',
    questionType: 'single_choice',
    options: [
      { id: 'a', text: 'AWS Application Discovery Service' },
      { id: 'b', text: 'AWS CloudFormation' },
      { id: 'c', text: 'Amazon Inspector' },
      { id: 'd', text: 'AWS CodeDeploy' },
    ],
    correctAnswers: ['a'],
    explanation:
      'AWS Application Discovery Service helps enterprise customers plan migration projects by gathering information about their on-premises data centers. It collects and presents configuration, usage, and behavior data from your servers to help you better understand your workloads and plan your migration.',
    referenceLinks: [
      {
        text: 'AWS Application Discovery Service',
        url: 'https://aws.amazon.com/application-discovery/',
      },
    ],
    difficulty: 'medium',
    isUnscored: false,
    tags: ['migration', 'discovery-service'],
  },
  {
    id: 'd1-025',
    domainId: 1,
    questionText:
      'Which principle of the AWS Well-Architected Framework recommends implementing changes in small increments that are reversible?',
    questionType: 'single_choice',
    options: [
      { id: 'a', text: 'Automate where possible' },
      { id: 'b', text: 'Make frequent, small, reversible changes' },
      { id: 'c', text: 'Anticipate failure' },
      { id: 'd', text: 'Use serverless architectures' },
    ],
    correctAnswers: ['b'],
    explanation:
      'The Operational Excellence pillar of the AWS Well-Architected Framework recommends making frequent, small, reversible changes. Design workloads to allow components to be updated regularly. Make changes in small increments that can be reversed if they fail (without affecting customers if possible).',
    referenceLinks: [
      {
        text: 'AWS Well-Architected Framework — Design Principles',
        url: 'https://docs.aws.amazon.com/wellarchitected/latest/operational-excellence-pillar/design-principles.html',
      },
    ],
    difficulty: 'medium',
    isUnscored: false,
    tags: ['well-architected', 'design-principles', 'operational-excellence'],
  },
];
