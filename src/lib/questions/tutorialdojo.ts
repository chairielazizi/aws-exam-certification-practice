import { Question } from '../types';

// ============================================================
// Tutorial Dojo Practice Questions — CLF-C02
// High-quality questions from Tutorial Dojo free practice exam.
// These are harder, more nuanced questions with detailed explanations.
// ============================================================

export const tutorialDojoQuestions: Question[] = [
  {
    id: 'td-001',
    domainId: 4,
    questionText:
      'A company is planning to adopt a hybrid cloud architecture with AWS. Which of the following options can they use to help them estimate their costs?',
    questionType: 'single_choice',
    options: [
      { id: 'a', text: 'Consolidated Billing' },
      { id: 'b', text: 'Cost allocation tag' },
      { id: 'c', text: 'AWS Cost Explorer' },
      { id: 'd', text: 'AWS Pricing Calculator' },
    ],
    correctAnswers: ['d'],
    explanation:
      'To estimate a bill, use the AWS Pricing Calculator. It is an easy-to-use online tool that enables you to estimate the monthly cost of AWS services for your use case based on your expected usage. It is continuously updated with the latest pricing for all AWS services in all regions.',
    referenceLinks: [
      { text: 'AWS Pricing Calculator', url: 'https://calculator.aws/#/' },
      { text: 'Estimating AWS Resource Costs', url: 'https://aws.amazon.com/premiumsupport/knowledge-center/estimating-aws-resource-costs/' },
    ],
    difficulty: 'medium',
    isUnscored: false,
    tags: ['billing', 'pricing-calculator', 'tutorialdojo'],
  },
  {
    id: 'td-002',
    domainId: 1,
    questionText:
      'Which of the following are advantages of Cloud Computing? (Select TWO.)',
    questionType: 'multiple_choice',
    options: [
      { id: 'a', text: 'Trade variable expense for capital expense.' },
      { id: 'b', text: 'Trade capital expense for variable expense.' },
      { id: 'c', text: 'Achieve lower economies of scale.' },
      { id: 'd', text: 'Massive discounts for your computers, network devices and other equipment from Amazon online shopping website.' },
      { id: 'e', text: 'Increase speed and agility.' },
    ],
    correctAnswers: ['b', 'e'],
    explanation:
      'The six advantages of cloud computing include: (1) Trade capital expense for variable expense, (2) Benefit from massive economies of scale, (3) Stop guessing capacity, (4) Increase speed and agility, (5) Stop spending money running data centers, and (6) Go global in minutes.',
    referenceLinks: [
      { text: 'Six Advantages of Cloud Computing', url: 'https://docs.aws.amazon.com/whitepapers/latest/aws-overview/six-advantages-of-cloud-computing.html' },
    ],
    difficulty: 'medium',
    isUnscored: false,
    tags: ['cloud-concepts', 'advantages', 'tutorialdojo'],
  },
  {
    id: 'td-003',
    domainId: 3,
    questionText:
      'Among the following services, which is the most suitable one to use to store the results of I/O-intensive SQL database queries to improve application performance?',
    questionType: 'single_choice',
    options: [
      { id: 'a', text: 'Amazon ElastiCache' },
      { id: 'b', text: 'Amazon CloudFront' },
      { id: 'c', text: 'AWS IoT Greengrass' },
      { id: 'd', text: 'Amazon DynamoDB Accelerator (DAX)' },
    ],
    correctAnswers: ['a'],
    explanation:
      'Amazon ElastiCache offers fully managed Redis and Memcached. In-memory caching improves application performance by storing critical pieces of data in memory for low-latency access. Cached information may include the results of I/O-intensive database queries or the results of computationally-intensive calculations.',
    referenceLinks: [
      { text: 'Amazon ElastiCache', url: 'https://aws.amazon.com/caching/database-caching/' },
      { text: 'ElastiCache Use Cases', url: 'https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/elasticache-use-cases.html' },
    ],
    difficulty: 'hard',
    isUnscored: false,
    tags: ['elasticache', 'caching', 'database', 'tutorialdojo'],
  },
  {
    id: 'td-004',
    domainId: 1,
    questionText:
      'Which of the following is true on how AWS lessens the time to provision your IT resources?',
    questionType: 'single_choice',
    options: [
      { id: 'a', text: 'It provides various ways to programmatically provision IT resources.' },
      { id: 'b', text: 'It provides an AI-powered IT ticketing platform for fulfilling resource requests.' },
      { id: 'c', text: 'It provides an automated system of requesting and fulfilling IT resources from third-party vendors.' },
      { id: 'd', text: 'It provides express service to deliver your servers to your data centers fast.' },
    ],
    correctAnswers: ['a'],
    explanation:
      'AWS provides you with various ways and tools to programmatically provision IT resources, such as AWS CLI, AWS API, and the web-based AWS Management Console. Cloud Computing is the on-demand delivery of compute power, database, storage, applications, and other IT resources via the internet with pay-as-you-go pricing.',
    referenceLinks: [
      { text: 'Six Advantages of Cloud Computing', url: 'https://docs.aws.amazon.com/whitepapers/latest/aws-overview/six-advantages-of-cloud-computing.html' },
    ],
    difficulty: 'easy',
    isUnscored: false,
    tags: ['cloud-concepts', 'provisioning', 'tutorialdojo'],
  },
  {
    id: 'td-005',
    domainId: 1,
    questionText:
      'When a company uses AWS and decouple from their on-premises data center, they will be able to have which of the following benefits? (Select TWO.)',
    questionType: 'multiple_choice',
    options: [
      { id: 'a', text: 'Deferred payments to their operational expenditures.' },
      { id: 'b', text: 'Massive discounts for bare metal servers from Amazon.com.' },
      { id: 'c', text: 'Replace low variable costs with upfront capital expenses (CAPEX).' },
      { id: 'd', text: 'Decrease your TCO.' },
      { id: 'e', text: 'Reduce time to market.' },
    ],
    correctAnswers: ['d', 'e'],
    explanation:
      'When you decouple from the data center, you can decrease your TCO by eliminating costs related to building and maintaining a data center, and reduce time to market by designing and developing new IT projects faster using cloud resources.',
    referenceLinks: [
      { text: 'AWS Cloud Economics', url: 'https://d1.awsstatic.com/whitepapers/introduction-to-aws-cloud-economics-final.pdf' },
      { text: 'AWS Economics', url: 'https://aws.amazon.com/economics/' },
    ],
    difficulty: 'medium',
    isUnscored: false,
    tags: ['cloud-concepts', 'tco', 'migration', 'tutorialdojo'],
  },
  {
    id: 'td-006',
    domainId: 2,
    questionText:
      'Which of the following is a valid characteristic of an IAM Group?',
    questionType: 'single_choice',
    options: [
      { id: 'a', text: 'A group can contain many users, and a user can belong to multiple groups.' },
      { id: 'b', text: 'There is a default group that automatically includes all users in the AWS account.' },
      { id: 'c', text: "There's no limit to the number of groups you can have." },
      { id: 'd', text: 'Groups can be nested.' },
    ],
    correctAnswers: ['a'],
    explanation:
      'An IAM group is a collection of IAM users. A group can contain many users, and a user can belong to multiple groups. Groups cannot be nested (they can contain only users, not other groups). There is no default group that automatically includes all users. There is a limit to the number of groups you can have.',
    referenceLinks: [
      { text: 'IAM Groups', url: 'https://docs.aws.amazon.com/IAM/latest/UserGuide/id_groups.html' },
    ],
    difficulty: 'medium',
    isUnscored: false,
    tags: ['iam', 'security', 'groups', 'tutorialdojo'],
  },
  {
    id: 'td-007',
    domainId: 3,
    questionText:
      'Which AWS service is suitable for launching a highly scalable MySQL OLTP database?',
    questionType: 'single_choice',
    options: [
      { id: 'a', text: 'Amazon Aurora' },
      { id: 'b', text: 'Amazon Timestream' },
      { id: 'c', text: 'Amazon Redshift' },
      { id: 'd', text: 'Amazon DynamoDB' },
    ],
    correctAnswers: ['a'],
    explanation:
      'Amazon Aurora is a MySQL and PostgreSQL-compatible relational database built for the cloud. It is up to five times faster than standard MySQL databases, provides the security, availability, and reliability of commercial databases at 1/10th the cost, and auto-scales up to 128TB per database instance.',
    referenceLinks: [
      { text: 'Amazon Aurora FAQ', url: 'https://aws.amazon.com/rds/aurora/faqs/' },
      { text: 'Amazon Aurora Overview', url: 'https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html' },
    ],
    difficulty: 'medium',
    isUnscored: false,
    tags: ['aurora', 'database', 'rds', 'tutorialdojo'],
  },
  {
    id: 'td-008',
    domainId: 3,
    questionText:
      'Which of the following AWS Global Infrastructure components is made up of one or more discrete data centers, each with redundant power, networking, and connectivity and housed in separate facilities?',
    questionType: 'single_choice',
    options: [
      { id: 'a', text: 'VPC' },
      { id: 'b', text: 'Edge location' },
      { id: 'c', text: 'Availability Zone' },
      { id: 'd', text: 'AWS Region' },
    ],
    correctAnswers: ['c'],
    explanation:
      'Availability Zones consist of one or more discrete data centers, each with redundant power, networking, and connectivity, housed in separate facilities. Each Availability Zone is designed as an independent failure zone, physically separated within a metropolitan region.',
    referenceLinks: [
      { text: 'AWS Global Infrastructure', url: 'https://aws.amazon.com/about-aws/global-infrastructure/' },
      { text: 'Global Infrastructure Overview', url: 'https://docs.aws.amazon.com/whitepapers/latest/aws-overview/global-infrastructure.html' },
    ],
    difficulty: 'easy',
    isUnscored: false,
    tags: ['infrastructure', 'availability-zone', 'global', 'tutorialdojo'],
  },
  {
    id: 'td-009',
    domainId: 4,
    questionText:
      'Which of the following channels shares a collection of offerings to help you achieve specific business outcomes related to enterprise cloud adoption through paid engagements in several specialty practice areas?',
    questionType: 'single_choice',
    options: [
      { id: 'a', text: 'AWS Technical Account Manager' },
      { id: 'b', text: 'AWS Enterprise Support' },
      { id: 'c', text: 'Concierge Support' },
      { id: 'd', text: 'AWS Professional Services' },
    ],
    correctAnswers: ['d'],
    explanation:
      'AWS Professional Services shares a collection of offerings to help you achieve specific outcomes related to enterprise cloud adoption. Each offering delivers a set of activities, best practices, and documentation. AWS Professional Services created the AWS Cloud Adoption Framework (AWS CAF) to help organizations design and travel an accelerated path to successful cloud adoption.',
    referenceLinks: [
      { text: 'AWS Professional Services', url: 'https://aws.amazon.com/professional-services/' },
      { text: 'AWS CAF', url: 'https://aws.amazon.com/professional-services/CAF/' },
    ],
    difficulty: 'hard',
    isUnscored: false,
    tags: ['support', 'professional-services', 'caf', 'tutorialdojo'],
  },
  {
    id: 'td-010',
    domainId: 3,
    questionText:
      'Which of the following services combine 5G networks with AWS compute and storage services for the benefit of high-performance mobile applications?',
    questionType: 'single_choice',
    options: [
      { id: 'a', text: 'AWS CloudShell' },
      { id: 'b', text: 'AWS Wavelength' },
      { id: 'c', text: 'AWS Control Tower' },
      { id: 'd', text: 'AWS Amplify' },
    ],
    correctAnswers: ['b'],
    explanation:
      'AWS Wavelength combines the high bandwidth and ultra-low latency of 5G networks with AWS compute and storage services. Wavelength Zones are AWS infrastructure deployments embedded within telecommunications providers\' datacenters at the edge of the 5G network, enabling single-digit millisecond latency for mobile applications.',
    referenceLinks: [
      { text: 'AWS Wavelength', url: 'https://aws.amazon.com/wavelength/' },
      { text: 'AWS Wavelength Developer Guide', url: 'https://docs.aws.amazon.com/wavelength/latest/developerguide/what-is-wavelength.html' },
    ],
    difficulty: 'medium',
    isUnscored: false,
    tags: ['wavelength', '5g', 'edge', 'tutorialdojo'],
  },
  {
    id: 'td-011',
    domainId: 3,
    questionText:
      'Which Amazon EC2 instance purchasing option allows you to take advantage of unused EC2 capacity in the AWS Cloud and provides up to a 90% discount compared to On-Demand prices?',
    questionType: 'single_choice',
    options: [
      { id: 'a', text: 'Dedicated Host' },
      { id: 'b', text: 'Spot Instance' },
      { id: 'c', text: 'Convertible Reserved Instance' },
      { id: 'd', text: 'Standard Reserved Instance' },
    ],
    correctAnswers: ['b'],
    explanation:
      'Amazon EC2 Spot Instances let you take advantage of unused EC2 capacity in the AWS cloud at up to a 90% discount compared to On-Demand prices. They are suitable for stateless, fault-tolerant, or flexible applications such as big data, containerized workloads, CI/CD, web servers, and HPC. Spot Instances can be interrupted with two minutes of notice when EC2 reclaims the capacity.',
    referenceLinks: [
      { text: 'EC2 Pricing', url: 'https://aws.amazon.com/ec2/pricing/' },
      { text: 'EC2 Spot Instances', url: 'https://aws.amazon.com/ec2/spot/' },
    ],
    difficulty: 'easy',
    isUnscored: false,
    tags: ['ec2', 'spot', 'pricing', 'tutorialdojo'],
  },
  {
    id: 'td-012',
    domainId: 1,
    questionText:
      'A company is planning to use AWS Cloud to augment the resources of their on-premises data center to better serve their customers around the world. How does a company benefit from using AWS?',
    questionType: 'single_choice',
    options: [
      { id: 'a', text: 'Replace high variable costs with upfront capital infrastructure expenses' },
      { id: 'b', text: 'Benefit from massive economies of scale' },
      { id: 'c', text: 'Replace low variable costs with upfront capital infrastructure expenses' },
      { id: 'd', text: 'Benefit from massive discounts from the Amazon.com shopping website' },
    ],
    correctAnswers: ['b'],
    explanation:
      'By using cloud computing, you can achieve a lower variable cost than you can get on your own. Because usage from hundreds of thousands of customers is aggregated in the cloud, providers such as AWS can achieve higher economies of scale, which translates into lower pay-as-you-go prices.',
    referenceLinks: [
      { text: 'Six Advantages of Cloud Computing', url: 'https://docs.aws.amazon.com/whitepapers/latest/aws-overview/six-advantages-of-cloud-computing.html' },
    ],
    difficulty: 'medium',
    isUnscored: false,
    tags: ['cloud-concepts', 'economies-of-scale', 'tutorialdojo'],
  },
  {
    id: 'td-013',
    domainId: 2,
    questionText:
      'There is a requirement to launch a new database in AWS where the customer assumes the responsibility and management of the guest operating system, including updates and security patches. Which of the following services should the customer use?',
    questionType: 'single_choice',
    options: [
      { id: 'a', text: 'Amazon Aurora' },
      { id: 'b', text: 'Amazon EC2' },
      { id: 'c', text: 'Amazon DocumentDB' },
      { id: 'd', text: 'Amazon DynamoDB' },
    ],
    correctAnswers: ['b'],
    explanation:
      'Amazon EC2 provides secure, resizable compute capacity in the cloud. Since you have more control over your EC2 instance, you can install any database that you prefer and manage its guest operating system, including the required updates and security patches. Fully-managed services like Aurora, DocumentDB, and DynamoDB handle the OS management for you.',
    referenceLinks: [
      { text: 'Amazon EC2', url: 'https://aws.amazon.com/ec2/' },
      { text: 'AWS Databases', url: 'https://aws.amazon.com/products/databases/' },
    ],
    difficulty: 'medium',
    isUnscored: false,
    tags: ['ec2', 'shared-responsibility', 'database', 'tutorialdojo'],
  },
  {
    id: 'td-014',
    domainId: 4,
    questionText:
      'Which of the following is true about the enhanced technical support response times of the Enterprise support plan in AWS? (Select TWO.)',
    questionType: 'multiple_choice',
    options: [
      { id: 'a', text: 'Provides a 2-hour response time support if your production system got impaired' },
      { id: 'b', text: 'Provides a 15-minute response time support if your business-critical system goes down' },
      { id: 'c', text: 'Provides a 48-hour response time support for general guidance' },
      { id: 'd', text: 'Provides a 1-hour response time support if your production system goes down' },
      { id: 'e', text: 'Provides a 12-hour response time support for general guidance' },
    ],
    correctAnswers: ['b', 'd'],
    explanation:
      'AWS Enterprise Support provides 24x7 technical support with enhanced response times: 15-minute response for business-critical system down, 1-hour response for production system down, 4-hour response for production system impaired, and 24-hour response for general guidance. It also includes a designated Technical Account Manager (TAM).',
    referenceLinks: [
      { text: 'AWS Support Plans', url: 'https://aws.amazon.com/premiumsupport/plans/' },
      { text: 'Enterprise Support', url: 'https://aws.amazon.com/premiumsupport/plans/enterprise/' },
    ],
    difficulty: 'hard',
    isUnscored: false,
    tags: ['support', 'enterprise', 'response-time', 'tutorialdojo'],
  },
  {
    id: 'td-015',
    domainId: 3,
    questionText:
      'Which of the following is best suited for load balancing Transmission Control Protocol (TCP), User Datagram Protocol (UDP), and Transport Layer Security (TLS) traffic and has the capability of handling millions of requests per second while maintaining ultra-low latencies?',
    questionType: 'single_choice',
    options: [
      { id: 'a', text: 'None of the above' },
      { id: 'b', text: 'Application Load Balancer' },
      { id: 'c', text: 'Gateway Load Balancer' },
      { id: 'd', text: 'Network Load Balancer' },
    ],
    correctAnswers: ['d'],
    explanation:
      'Network Load Balancer is best suited for load balancing TCP, UDP, and TLS traffic where extreme performance is required. Operating at Layer 4, it routes traffic within Amazon VPC and is capable of handling millions of requests per second while maintaining ultra-low latencies. It is also optimized to handle sudden and volatile traffic patterns.',
    referenceLinks: [
      { text: 'Network Load Balancer', url: 'https://docs.aws.amazon.com/elasticloadbalancing/latest/network/introduction.html' },
      { text: 'ELB Product Comparisons', url: 'https://aws.amazon.com/elasticloadbalancing/features/' },
    ],
    difficulty: 'hard',
    isUnscored: false,
    tags: ['elb', 'nlb', 'networking', 'tutorialdojo'],
  },
  {
    id: 'td-016',
    domainId: 2,
    questionText:
      'In compliance with the Sarbanes-Oxley Act (SOX) federal law, a US-based company is required to provide SOC 1 and SOC 2 reports of its cloud resources. Where are these AWS compliance documents located?',
    questionType: 'single_choice',
    options: [
      { id: 'a', text: 'AWS GovCloud' },
      { id: 'b', text: 'AWS Audit Manager' },
      { id: 'c', text: 'AWS Artifact' },
      { id: 'd', text: 'AWS Certificate Manager' },
    ],
    correctAnswers: ['c'],
    explanation:
      'AWS Artifact is your go-to, central resource for compliance-related information. It provides on-demand access to AWS security and compliance reports including Service Organization Control (SOC) reports, Payment Card Industry (PCI) reports, and certifications from accreditation bodies. Agreements like the Business Associate Addendum (BAA) and NDA are also available.',
    referenceLinks: [
      { text: 'AWS Artifact', url: 'https://aws.amazon.com/artifact/getting-started/' },
      { text: 'AWS Artifact User Guide', url: 'https://docs.aws.amazon.com/artifact/latest/ug/what-is-aws-artifact.html' },
    ],
    difficulty: 'medium',
    isUnscored: false,
    tags: ['artifact', 'compliance', 'security', 'tutorialdojo'],
  },
  {
    id: 'td-017',
    domainId: 2,
    questionText:
      'Which AWS service provides access to compliance-related documents, such as ISO certifications, Payment Card Industry (PCI) reports, and Service Organization Control (SOC) reports, for security audits?',
    questionType: 'single_choice',
    options: [
      { id: 'a', text: 'AWS Artifact' },
      { id: 'b', text: 'AWS Trusted Advisor' },
      { id: 'c', text: 'AWS Certificate Manager' },
      { id: 'd', text: 'AWS Security Token Service' },
    ],
    correctAnswers: ['a'],
    explanation:
      'AWS Artifact provides on-demand access to AWS security and compliance reports and select online agreements. It is the central resource for compliance-related information including SOC reports, PCI reports, and ISO certifications that validate the implementation and operating effectiveness of AWS security controls.',
    referenceLinks: [
      { text: 'AWS Artifact', url: 'https://aws.amazon.com/artifact/getting-started/' },
    ],
    difficulty: 'easy',
    isUnscored: false,
    tags: ['artifact', 'compliance', 'security', 'tutorialdojo'],
  },
  {
    id: 'td-018',
    domainId: 2,
    questionText:
      'Which of the following options below is solely the responsibility of the customer in accordance with the AWS shared responsibility model?',
    questionType: 'single_choice',
    options: [
      { id: 'a', text: 'Configuration Management' },
      { id: 'b', text: 'Patching of the host operating system' },
      { id: 'c', text: 'Service and Communications Protection or Zone Security' },
      { id: 'd', text: 'Awareness & Training' },
    ],
    correctAnswers: ['c'],
    explanation:
      'Customer Specific controls are solely the responsibility of the customer. Service and Communications Protection or Zone Security may require a customer to route or zone data within specific security environments. Configuration Management and Awareness & Training are shared controls. Patching the host OS is AWS\'s responsibility.',
    referenceLinks: [
      { text: 'Shared Responsibility Model', url: 'https://aws.amazon.com/compliance/shared-responsibility-model/' },
    ],
    difficulty: 'hard',
    isUnscored: false,
    tags: ['shared-responsibility', 'security', 'controls', 'tutorialdojo'],
  },
  {
    id: 'td-019',
    domainId: 1,
    questionText:
      'A manufacturing company is undergoing an organizational transformation to focus more on its customers, aiming to maximize the value delivered to them. This shift involves promoting team collaboration to ensure alignment with the firm\'s strategic objectives. How can the company achieve this goal while following the AWS Cloud Adoption Framework (CAF)? (Choose two.)',
    questionType: 'multiple_choice',
    options: [
      { id: 'a', text: 'Adopt agile methodologies for continuous improvement and rapid innovation.' },
      { id: 'b', text: 'Transition and upgrade legacy infrastructure through migration and modernization efforts.' },
      { id: 'c', text: 'Employ a robust data and analytics platform to generate actionable insights.' },
      { id: 'd', text: 'Restructure teams to prioritize product-focused and value stream-oriented approaches.' },
      { id: 'e', text: 'Introduce new products and revenue models.' },
    ],
    correctAnswers: ['a', 'd'],
    explanation:
      'The AWS CAF organizational transformation involves reshaping an organization\'s culture, structure, and skills. Restructuring teams to prioritize product-focused approaches fosters cross-functional collaboration. Adopting agile methodologies promotes iterative development, frequent customer feedback, and continuous improvement — both aligning with organizational transformation goals.',
    referenceLinks: [
      { text: 'AWS CAF', url: 'https://aws.amazon.com/cloud-adoption-framework/' },
      { text: 'AWS CAF Whitepaper', url: 'https://docs.aws.amazon.com/pdfs/whitepapers/latest/overview-aws-cloud-adoption-framework/overview-aws-cloud-adoption-framework.pdf' },
    ],
    difficulty: 'hard',
    isUnscored: false,
    tags: ['caf', 'cloud-concepts', 'organizational', 'tutorialdojo'],
  },
  {
    id: 'td-020',
    domainId: 3,
    questionText:
      'Which type of Elastic Load Balancer allows you to forward the incoming request to a target group with a Lambda function as a target?',
    questionType: 'single_choice',
    options: [
      { id: 'a', text: 'Network Load Balancer' },
      { id: 'b', text: 'Both Gateway Load Balancer and Network Load Balancer' },
      { id: 'c', text: 'Application Load Balancer' },
      { id: 'd', text: 'Gateway Load Balancer' },
    ],
    correctAnswers: ['c'],
    explanation:
      'With an Application Load Balancer, you can register Lambda functions as targets. When the load balancer forwards the request to a target group with a Lambda function as a target, it invokes your Lambda function and passes the content of the request in JSON format. Network Load Balancer and Gateway Load Balancer do not support Lambda functions as targets.',
    referenceLinks: [
      { text: 'Application Load Balancer', url: 'https://docs.aws.amazon.com/elasticloadbalancing/latest/application/introduction.html' },
    ],
    difficulty: 'hard',
    isUnscored: false,
    tags: ['elb', 'alb', 'lambda', 'tutorialdojo'],
  },
  {
    id: 'td-021',
    domainId: 4,
    questionText:
      'A company is planning to launch a new system on AWS, but it does not have an employee with AWS expertise. Which of the following AWS channels can instead help the company design, architect, build, migrate, and manage its workloads and applications on AWS?',
    questionType: 'single_choice',
    options: [
      { id: 'a', text: 'Technical Account Management' },
      { id: 'b', text: 'AWS Marketplace' },
      { id: 'c', text: 'AWS Partner Network (APN) Technology Partners' },
      { id: 'd', text: 'AWS Partner Network (APN) Consulting Partners' },
    ],
    correctAnswers: ['d'],
    explanation:
      'APN Consulting Partners are professional services firms that help customers of all sizes design, architect, migrate, or build new applications on AWS. They include System Integrators, Strategic Consultancies, Resellers, Digital Agencies, Managed Service Providers, and Value-Added Resellers. APN Technology Partners provide software solutions hosted on or integrated with AWS.',
    referenceLinks: [
      { text: 'AWS Partners', url: 'https://aws.amazon.com/partners/' },
      { text: 'APN Consulting Partners', url: 'https://aws.amazon.com/partners/consulting/journey/' },
    ],
    difficulty: 'medium',
    isUnscored: false,
    tags: ['apn', 'consulting', 'partners', 'tutorialdojo'],
  },
  {
    id: 'td-022',
    domainId: 3,
    questionText:
      'Which of the following are regarded as regional services in AWS? (Select TWO.)',
    questionType: 'multiple_choice',
    options: [
      { id: 'a', text: 'AWS Security Token Service' },
      { id: 'b', text: 'Amazon EC2' },
      { id: 'c', text: 'Amazon EFS' },
      { id: 'd', text: 'AWS Billing Conductor' },
      { id: 'e', text: 'AWS Batch' },
    ],
    correctAnswers: ['c', 'e'],
    explanation:
      'Amazon EFS is a regional service storing data within and across multiple Availability Zones for high availability. AWS Batch is a regional service that simplifies running batch jobs across multiple AZs within a region. Global services include IAM, STS, Route 53, CloudFront, and WAF. EC2 instances are zonal services tied to specific Availability Zones.',
    referenceLinks: [
      { text: 'AWS Reliability Pillar', url: 'https://d1.awsstatic.com/whitepapers/architecture/AWS-Reliability-Pillar.pdf' },
    ],
    difficulty: 'hard',
    isUnscored: false,
    tags: ['infrastructure', 'regional', 'efs', 'batch', 'tutorialdojo'],
  },
  {
    id: 'td-023',
    domainId: 2,
    questionText:
      'In the AWS Shared Responsibility Model, whose responsibility is it to patch the host operating system of an Amazon EC2 instance?',
    questionType: 'single_choice',
    options: [
      { id: 'a', text: 'Neither AWS nor the customer' },
      { id: 'b', text: 'AWS' },
      { id: 'c', text: 'Both AWS and the customer' },
      { id: 'd', text: 'Customer' },
    ],
    correctAnswers: ['b'],
    explanation:
      'The host operating system is the hypervisor that creates guest operating systems. AWS manages the host operating system and virtualization layer down to the physical security of the facilities. The customer is responsible for the guest operating system (including updates and security patches), not the host operating system.',
    referenceLinks: [
      { text: 'Shared Responsibility Model', url: 'https://aws.amazon.com/compliance/shared-responsibility-model/' },
    ],
    difficulty: 'hard',
    isUnscored: false,
    tags: ['shared-responsibility', 'security', 'ec2', 'tutorialdojo'],
  },
  {
    id: 'td-024',
    domainId: 3,
    questionText:
      'A company has game servers hosted in the US East (N. Virginia) Region. However, players from Europe and Asia experience high latency, impacting their gaming experience. How can the company reduce latency and improve the gaming experience for players in these regions?',
    questionType: 'single_choice',
    options: [
      { id: 'a', text: 'Implement Amazon CloudFront as a content delivery solution.' },
      { id: 'b', text: 'Use autoscaling for the game servers in the US East (N. Virginia) Region.' },
      { id: 'c', text: 'Utilize AWS Direct Connect to establish dedicated network connectivity.' },
      { id: 'd', text: 'Deploy additional game servers in Europe and Asia' },
    ],
    correctAnswers: ['d'],
    explanation:
      'By hosting game servers geographically close to the user base, the company can significantly reduce latency. CloudFront caches static content but real-time gaming requires servers physically closer to players. Autoscaling improves capacity but not latency across continents. Direct Connect optimizes network routing but cannot fully overcome physical distance for latency-sensitive applications.',
    referenceLinks: [
      { text: 'AWS Global Infrastructure', url: 'https://aws.amazon.com/about-aws/global-infrastructure/' },
      { text: 'AWS Regions and AZs', url: 'https://aws.amazon.com/about-aws/global-infrastructure/regions_az/' },
    ],
    difficulty: 'medium',
    isUnscored: false,
    tags: ['infrastructure', 'regions', 'latency', 'tutorialdojo'],
  },
  {
    id: 'td-025',
    domainId: 3,
    questionText:
      'Which of the following Amazon EC2 instance purchasing options can help you address compliance requirements and reduce costs by allowing you to use your existing server-bound software licenses?',
    questionType: 'single_choice',
    options: [
      { id: 'a', text: 'Dedicated Host' },
      { id: 'b', text: 'Reserved Instance' },
      { id: 'c', text: 'Dedicated Instance' },
      { id: 'd', text: 'On-Demand Instance' },
    ],
    correctAnswers: ['a'],
    explanation:
      'An Amazon EC2 Dedicated Host is a physical server fully dedicated to your use. Dedicated Hosts allow you to use your existing per-socket, per-core, or per-VM software licenses (BYOL), including Microsoft Windows Server, SQL Server, SUSE, and Red Hat. A Dedicated Host gives you visibility and control over instance placement on a specific physical server.',
    referenceLinks: [
      { text: 'EC2 Dedicated Hosts', url: 'https://aws.amazon.com/ec2/dedicated-hosts/' },
    ],
    difficulty: 'hard',
    isUnscored: false,
    tags: ['ec2', 'dedicated-host', 'licensing', 'byol', 'tutorialdojo'],
  },
  {
    id: 'td-026',
    domainId: 4,
    questionText:
      'Which of the following provides software solutions that are either hosted on or integrated with the AWS platform which may include Independent Software Vendors (ISVs), SaaS, PaaS, developer tools, management, and security vendors?',
    questionType: 'single_choice',
    options: [
      { id: 'a', text: 'Concierge Support' },
      { id: 'b', text: 'Technical Account Management' },
      { id: 'c', text: 'AWS Partner Network Technology Partners' },
      { id: 'd', text: 'AWS Partner Network Consulting Partners' },
    ],
    correctAnswers: ['c'],
    explanation:
      'APN Technology Partners provide software solutions that are either hosted on or integrated with the AWS platform, including Independent Software Vendors (ISVs), SaaS, PaaS, developer tools, management, and security vendors. APN Consulting Partners help customers design, architect, migrate, or build applications on AWS.',
    referenceLinks: [
      { text: 'AWS Partners', url: 'https://aws.amazon.com/partners/' },
      { text: 'APN Technology Partners', url: 'https://aws.amazon.com/partners/technology/journey/' },
    ],
    difficulty: 'medium',
    isUnscored: false,
    tags: ['apn', 'technology', 'partners', 'tutorialdojo'],
  },
  {
    id: 'td-027',
    domainId: 3,
    questionText:
      'Which AWS solution enables the provisioning of a logically isolated section of the AWS Cloud where AWS resources can be launched, and where you can configure a Route table to manage traffic flow?',
    questionType: 'single_choice',
    options: [
      { id: 'a', text: 'Amazon VPC' },
      { id: 'b', text: 'Internet gateway' },
      { id: 'c', text: 'AWS Elastic Beanstalk' },
      { id: 'd', text: 'Amazon EC2' },
    ],
    correctAnswers: ['a'],
    explanation:
      'Amazon VPC lets you provision a logically isolated section of the AWS Cloud where you can launch AWS resources in a virtual network that you define. You have complete control over your virtual networking environment, including IP address ranges, subnets, route tables, and network gateways.',
    referenceLinks: [
      { text: 'Amazon VPC', url: 'https://aws.amazon.com/vpc/' },
      { text: 'Amazon VPC User Guide', url: 'https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html' },
    ],
    difficulty: 'easy',
    isUnscored: false,
    tags: ['vpc', 'networking', 'tutorialdojo'],
  },
  {
    id: 'td-028',
    domainId: 4,
    questionText:
      'Which of the following is true regarding the Business Support+ plan in AWS?',
    questionType: 'single_choice',
    options: [
      { id: 'a', text: 'Provides a 15-minute response time support if your business-critical system goes down' },
      { id: 'b', text: 'Provides a 1-hour response time support if your production system got impaired' },
      { id: 'c', text: 'Provides a 1-hour response time support if your production system goes down' },
      { id: 'd', text: 'Provides a 15-minute response time support if your production system goes down' },
    ],
    correctAnswers: ['c'],
    explanation:
      'AWS Business Support+ guarantees a response time of less than 1 hour when a production system is down, and 4 hours when a production system is impaired. The 15-minute response time for business-critical system down is only available with the Enterprise support plan. AWS now offers four support plans: Basic, Business Support+, Enterprise Support, and Unified Operations.',
    referenceLinks: [
      { text: 'AWS Support Plans', url: 'https://aws.amazon.com/premiumsupport/plans/' },
      { text: 'AWS Support Plans Documentation', url: 'https://docs.aws.amazon.com/awssupport/latest/user/aws-support-plans.html' },
    ],
    difficulty: 'hard',
    isUnscored: false,
    tags: ['support', 'business-support-plus', 'response-time', 'tutorialdojo'],
  },
  {
    id: 'td-029',
    domainId: 2,
    questionText:
      'What service acts as a firewall for your EC2 instances?',
    questionType: 'single_choice',
    options: [
      { id: 'a', text: 'Security Group' },
      { id: 'b', text: 'Network ACL' },
      { id: 'c', text: 'Elastic Network Interface' },
      { id: 'd', text: 'VPC' },
    ],
    correctAnswers: ['a'],
    explanation:
      'A security group acts as a virtual firewall for your EC2 instance to control inbound and outbound traffic at the instance level. You can assign up to five security groups per instance. Network ACLs protect subnets, not individual instances. VPC is the network itself, and an Elastic Network Interface is a virtual network card.',
    referenceLinks: [
      { text: 'VPC Security Groups', url: 'https://docs.aws.amazon.com/vpc/latest/userguide/VPC_SecurityGroups.html' },
    ],
    difficulty: 'easy',
    isUnscored: false,
    tags: ['security-group', 'firewall', 'ec2', 'tutorialdojo'],
  },
  {
    id: 'td-030',
    domainId: 2,
    questionText:
      'What does AWS do when a storage device reaches the end of its lifespan?',
    questionType: 'single_choice',
    options: [
      { id: 'a', text: 'AWS simply wipes the device and disposes it' },
      { id: 'b', text: 'AWS wipes the drives and sends it back to the manufacturer to procure a new one' },
      { id: 'c', text: 'AWS follows a strict decommissioning process as described in compliance procedures' },
      { id: 'd', text: 'AWS archives the device in case customers request their data again' },
    ],
    correctAnswers: ['c'],
    explanation:
      'Media storage devices used to store customer data are classified by AWS as Critical and treated accordingly throughout their life cycles. When a storage device has reached the end of its useful life, AWS decommissions media using techniques detailed in NIST 800-88. Media that stored customer data is not removed from AWS control until it has been securely decommissioned.',
    referenceLinks: [
      { text: 'AWS Data Center Controls', url: 'https://aws.amazon.com/compliance/data-center/controls/' },
      { text: 'Shared Responsibility Model', url: 'https://aws.amazon.com/compliance/shared-responsibility-model/' },
    ],
    difficulty: 'medium',
    isUnscored: false,
    tags: ['security', 'data-center', 'decommissioning', 'tutorialdojo'],
  },
];
