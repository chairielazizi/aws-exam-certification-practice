import { Question } from '../types';

// ============================================================
// Scenario-Based Questions — ExamTopics Style
// High-quality scenario questions modeled on real CLF-C02 exam patterns.
// Answers are cross-verified against official AWS documentation.
// ============================================================

export const scenarioQuestions: Question[] = [
  // --- DOMAIN 3: Cloud Technology and Services ---
  {
    id: 'sc-001',
    domainId: 3,
    questionText:
      'A company is planning to run a global marketing application in the AWS Cloud. The application will feature videos that can be viewed by users. The company must ensure that all users can view these videos with low latency. Which AWS service should the company use to meet this requirement?',
    questionType: 'single_choice',
    options: [
      { id: 'a', text: 'AWS Auto Scaling' },
      { id: 'b', text: 'Amazon Kinesis Video Streams' },
      { id: 'c', text: 'Elastic Load Balancing' },
      { id: 'd', text: 'Amazon CloudFront' },
    ],
    correctAnswers: ['d'],
    explanation:
      'Amazon CloudFront is a content delivery network (CDN) service that securely delivers data, videos, applications, and APIs to customers globally with low latency and high transfer speeds. It caches content at edge locations around the world, ensuring users get the content from the nearest location.',
    optionExplanations: {
      a: 'AWS Auto Scaling is used to adjust capacity to maintain steady, predictable performance at the lowest possible cost, not specifically for delivering video content globally with low latency.',
      b: 'Amazon Kinesis Video Streams makes it easy to securely stream video from connected devices to AWS for analytics, machine learning, and other processing. It is not a content delivery network for end users.',
      c: 'Elastic Load Balancing automatically distributes incoming application traffic across multiple targets, but it does not cache content globally at edge locations like a CDN.',
    },
    referenceLinks: [
      { text: 'Amazon CloudFront', url: 'https://aws.amazon.com/cloudfront/' },
    ],
    difficulty: 'easy',
    isUnscored: false,
    tags: ['cloudfront', 'cdn', 'global', 'video'],
  },
  {
    id: 'sc-002',
    domainId: 4,
    questionText:
      'A large company has multiple departments. Each department has its own AWS account. Each department has purchased Amazon EC2 Reserved Instances. Some departments do not use all the Reserved Instances that they purchased, and other departments need more Reserved Instances than they purchased. The company needs to manage the AWS accounts for all the departments so that the departments can share the Reserved Instances. Which AWS service or tool should the company use to meet these requirements?',
    questionType: 'single_choice',
    options: [
      { id: 'a', text: 'AWS Systems Manager' },
      { id: 'b', text: 'Cost Explorer' },
      { id: 'c', text: 'AWS Trusted Advisor' },
      { id: 'd', text: 'AWS Organizations' },
    ],
    correctAnswers: ['d'],
    explanation:
      'AWS Organizations allows you to consolidate multiple AWS accounts into an organization that you create and centrally manage. One of the key benefits is that Reserved Instance sharing is enabled by default for the organization, allowing unused RIs in one account to be applied to matching usage in another account.',
    optionExplanations: {
      a: 'AWS Systems Manager is used to view and control your infrastructure on AWS, not to manage billing or share Reserved Instances across accounts.',
      b: 'Cost Explorer is a tool that enables you to view and analyze your costs and usage, but it does not actively manage multiple accounts or share Reserved Instances between them.',
      c: 'AWS Trusted Advisor provides real-time guidance to help you provision your resources following AWS best practices, but it does not consolidate accounts or manage RI sharing.',
    },
    referenceLinks: [
      { text: 'AWS Organizations', url: 'https://aws.amazon.com/organizations/' },
    ],
    difficulty: 'medium',
    isUnscored: false,
    tags: ['organizations', 'reserved-instances', 'billing'],
  },
  {
    id: 'sc-003',
    domainId: 3,
    questionText:
      'A company wants to migrate its workloads to AWS, but it lacks expertise in AWS Cloud computing. Which AWS service or feature will help the company with its migration?',
    questionType: 'single_choice',
    options: [
      { id: 'a', text: 'AWS Trusted Advisor' },
      { id: 'b', text: 'AWS Consulting Partners' },
      { id: 'c', text: 'AWS Artifacts' },
      { id: 'd', text: 'AWS Managed Services' },
    ],
    correctAnswers: ['b'],
    explanation:
      'AWS Consulting Partners are professional services firms that help customers design, architect, build, migrate, and manage their workloads and applications on AWS. They provide expertise for organizations that lack in-house AWS skills.',
    referenceLinks: [
      { text: 'AWS Partner Network', url: 'https://aws.amazon.com/partners/' },
    ],
    difficulty: 'medium',
    isUnscored: false,
    tags: ['migration', 'partners', 'consulting'],
  },
  {
    id: 'sc-004',
    domainId: 2,
    questionText:
      'A company stores configuration files in an Amazon S3 bucket. These configuration files must be accessed by applications during deployment. The company wants to ensure that the configuration files are available across multiple Regions but does not want to replicate all objects to all Regions. Which AWS feature should the company use?',
    questionType: 'single_choice',
    options: [
      { id: 'a', text: 'Amazon S3 Cross-Region Replication' },
      { id: 'b', text: 'S3 Transfer Acceleration' },
      { id: 'c', text: 'Amazon CloudFront' },
      { id: 'd', text: 'S3 Object Lock' },
    ],
    correctAnswers: ['a'],
    explanation:
      'Amazon S3 Cross-Region Replication (CRR) is used to copy objects across Amazon S3 buckets in different AWS Regions. It can be configured to replicate all objects or a subset using prefix or tag-based filters, making it ideal for ensuring availability in multiple regions without replicating everything.',
    referenceLinks: [
      { text: 'S3 Replication', url: 'https://docs.aws.amazon.com/AmazonS3/latest/userguide/replication.html' },
    ],
    difficulty: 'hard',
    isUnscored: false,
    tags: ['s3', 'replication', 'multi-region'],
  },
  {
    id: 'sc-005',
    domainId: 3,
    questionText:
      'A company is developing a mobile application that needs a high-performance NoSQL database. Which AWS services could the company use for this database? (Choose two.)',
    questionType: 'multiple_choice',
    options: [
      { id: 'a', text: 'Amazon Aurora' },
      { id: 'b', text: 'Amazon RDS' },
      { id: 'c', text: 'Amazon Redshift' },
      { id: 'd', text: 'Amazon DynamoDB' },
      { id: 'e', text: 'Amazon DocumentDB' },
    ],
    correctAnswers: ['d', 'e'],
    explanation:
      'Amazon DynamoDB is a fully managed, serverless, key-value NoSQL database. Amazon DocumentDB (with MongoDB compatibility) is another NoSQL option for JSON document workloads. Amazon Aurora and RDS are relational databases, while Redshift is a data warehouse — none are NoSQL.',
    referenceLinks: [
      { text: 'Amazon DynamoDB', url: 'https://aws.amazon.com/dynamodb/' },
      { text: 'Amazon DocumentDB', url: 'https://aws.amazon.com/documentdb/' },
    ],
    difficulty: 'medium',
    isUnscored: false,
    tags: ['dynamodb', 'documentdb', 'nosql', 'databases'],
  },
  {
    id: 'sc-006',
    domainId: 2,
    questionText:
      'A company recently deployed Elastic Load Balancers in its VPC. A security team wants to audit the traffic flowing through the load balancers to detect unusual patterns and potential threats. Which AWS service should the security team use?',
    questionType: 'single_choice',
    options: [
      { id: 'a', text: 'AWS CloudTrail' },
      { id: 'b', text: 'Amazon GuardDuty' },
      { id: 'c', text: 'VPC Flow Logs' },
      { id: 'd', text: 'Amazon CloudWatch Logs' },
    ],
    correctAnswers: ['c'],
    explanation:
      'VPC Flow Logs is a feature that enables you to capture information about the IP traffic going to and from network interfaces in your VPC. Flow logs data can be published to Amazon CloudWatch Logs and Amazon S3, allowing security auditing and troubleshooting network issues.',
    referenceLinks: [
      { text: 'VPC Flow Logs', url: 'https://docs.aws.amazon.com/vpc/latest/userguide/flow-logs.html' },
    ],
    difficulty: 'hard',
    isUnscored: false,
    tags: ['vpc', 'flow-logs', 'security', 'networking'],
  },
  {
    id: 'sc-007',
    domainId: 1,
    questionText:
      'A company is planning to replace its physical on-premises compute servers with AWS serverless compute services. The company wants to be able to take advantage of advanced technologies quickly after the migration. Which pillar of the AWS Well-Architected Framework does this plan represent?',
    questionType: 'single_choice',
    options: [
      { id: 'a', text: 'Security' },
      { id: 'b', text: 'Performance Efficiency' },
      { id: 'c', text: 'Operational Excellence' },
      { id: 'd', text: 'Reliability' },
    ],
    correctAnswers: ['b'],
    explanation:
      'The Performance Efficiency pillar includes the ability to use computing resources efficiently and to maintain that efficiency as demand changes and technologies evolve. A key design principle is "Go global in minutes" and "Use serverless architectures." Adopting new technologies quickly is a core tenet of this pillar.',
    referenceLinks: [
      { text: 'Performance Efficiency Pillar', url: 'https://docs.aws.amazon.com/wellarchitected/latest/performance-efficiency-pillar/welcome.html' },
    ],
    difficulty: 'medium',
    isUnscored: false,
    tags: ['well-architected', 'performance-efficiency', 'serverless'],
  },
  {
    id: 'sc-008',
    domainId: 3,
    questionText:
      'A company has an application that runs on Amazon EC2 instances. The application sends data to Amazon S3. The company wants to ensure the data is encrypted in transit. Which solution will meet this requirement?',
    questionType: 'single_choice',
    options: [
      { id: 'a', text: 'Enable Amazon S3 server-side encryption' },
      { id: 'b', text: 'Use HTTPS (SSL/TLS) endpoints for Amazon S3' },
      { id: 'c', text: 'Enable S3 Versioning' },
      { id: 'd', text: 'Use Amazon Macie' },
    ],
    correctAnswers: ['b'],
    explanation:
      'Using HTTPS (SSL/TLS) endpoints when connecting to Amazon S3 ensures that data is encrypted in transit between the EC2 instances and S3. Server-side encryption protects data at rest, not in transit. Versioning is for tracking changes, and Macie is for data classification.',
    referenceLinks: [
      { text: 'Protecting Data in Transit', url: 'https://docs.aws.amazon.com/AmazonS3/latest/userguide/security-best-practices.html' },
    ],
    difficulty: 'medium',
    isUnscored: false,
    tags: ['s3', 'encryption', 'security', 'transit'],
  },
  {
    id: 'sc-009',
    domainId: 4,
    questionText:
      'A company wants to forecast its future AWS costs. The company needs to be able to view its current and forecasted AWS spending, broken down by service. Which AWS service or feature should the company use?',
    questionType: 'single_choice',
    options: [
      { id: 'a', text: 'AWS Pricing Calculator' },
      { id: 'b', text: 'AWS Cost Explorer' },
      { id: 'c', text: 'AWS Budgets' },
      { id: 'd', text: 'AWS Cost and Usage Report' },
    ],
    correctAnswers: ['b'],
    explanation:
      'AWS Cost Explorer lets you visualize, understand, and manage your AWS costs and usage over time. It includes forecasting capabilities that allow you to see up to 12 months of forecasted spending. You can filter and group by service, account, region, and more.',
    referenceLinks: [
      { text: 'AWS Cost Explorer', url: 'https://aws.amazon.com/aws-cost-management/aws-cost-explorer/' },
    ],
    difficulty: 'easy',
    isUnscored: false,
    tags: ['cost-explorer', 'forecasting', 'billing'],
  },
  {
    id: 'sc-010',
    domainId: 3,
    questionText:
      'A company needs to run a batch processing job once a day. The job takes about 15 minutes to complete and requires 2 vCPUs and 4 GB of memory. The company wants the most cost-effective compute option. Which AWS service should the company use?',
    questionType: 'single_choice',
    options: [
      { id: 'a', text: 'Amazon EC2 On-Demand Instances' },
      { id: 'b', text: 'AWS Lambda' },
      { id: 'c', text: 'Amazon EC2 Reserved Instances' },
      { id: 'd', text: 'Amazon EC2 Dedicated Hosts' },
    ],
    correctAnswers: ['b'],
    explanation:
      'AWS Lambda is the most cost-effective option for short, intermittent workloads. Lambda charges only for compute time consumed (per millisecond), and the job runs for only 15 minutes daily. Lambda supports up to 10 GB of memory and 6 vCPUs. On-Demand or Reserved instances would run 24/7 and cost significantly more.',
    referenceLinks: [
      { text: 'AWS Lambda', url: 'https://aws.amazon.com/lambda/' },
    ],
    difficulty: 'medium',
    isUnscored: false,
    tags: ['lambda', 'cost-optimization', 'compute', 'batch'],
  },
  {
    id: 'sc-011',
    domainId: 2,
    questionText:
      'A company has deployed a web application on Amazon EC2 instances. The company has noticed a sudden spike in unauthorized login attempts. Which AWS service can the company use to automatically detect this type of threat?',
    questionType: 'single_choice',
    options: [
      { id: 'a', text: 'Amazon Inspector' },
      { id: 'b', text: 'Amazon GuardDuty' },
      { id: 'c', text: 'AWS WAF' },
      { id: 'd', text: 'AWS Shield' },
    ],
    correctAnswers: ['b'],
    explanation:
      'Amazon GuardDuty is a threat detection service that continuously monitors for malicious activity and unauthorized behavior. It uses machine learning, anomaly detection, and integrated threat intelligence to identify and prioritize potential threats like unauthorized login attempts.',
    referenceLinks: [
      { text: 'Amazon GuardDuty', url: 'https://aws.amazon.com/guardduty/' },
    ],
    difficulty: 'medium',
    isUnscored: false,
    tags: ['guardduty', 'threat-detection', 'security'],
  },
  {
    id: 'sc-012',
    domainId: 3,
    questionText:
      'A company has a legacy application running on-premises. The application uses a Microsoft SQL Server database. The company wants to migrate the database to AWS with minimal code changes. Which AWS service should the company use?',
    questionType: 'single_choice',
    options: [
      { id: 'a', text: 'Amazon DynamoDB' },
      { id: 'b', text: 'Amazon RDS for SQL Server' },
      { id: 'c', text: 'Amazon Aurora' },
      { id: 'd', text: 'Amazon Redshift' },
    ],
    correctAnswers: ['b'],
    explanation:
      'Amazon RDS for SQL Server is the best option for migrating an existing Microsoft SQL Server database with minimal code changes. It is a fully managed relational database service that supports SQL Server, allowing direct migration without needing to rearchitect the application.',
    referenceLinks: [
      { text: 'Amazon RDS for SQL Server', url: 'https://aws.amazon.com/rds/sqlserver/' },
    ],
    difficulty: 'easy',
    isUnscored: false,
    tags: ['rds', 'sql-server', 'migration', 'databases'],
  },
  {
    id: 'sc-013',
    domainId: 3,
    questionText:
      'A company is building an e-commerce web application on AWS. The application needs to handle sudden increases in traffic during flash sales. The company wants the application to automatically scale and be highly available. Which set of AWS services should the company use?',
    questionType: 'single_choice',
    options: [
      { id: 'a', text: 'AWS Lambda and Amazon DynamoDB' },
      { id: 'b', text: 'Amazon EC2 Auto Scaling and Elastic Load Balancing' },
      { id: 'c', text: 'AWS Elastic Beanstalk and Amazon S3' },
      { id: 'd', text: 'Amazon Lightsail and Amazon RDS' },
    ],
    correctAnswers: ['b'],
    explanation:
      'Amazon EC2 Auto Scaling automatically adjusts the number of EC2 instances in response to traffic patterns, while Elastic Load Balancing distributes incoming traffic across multiple instances for high availability. This combination is the standard pattern for handling variable web traffic on AWS.',
    referenceLinks: [
      { text: 'Amazon EC2 Auto Scaling', url: 'https://aws.amazon.com/ec2/autoscaling/' },
      { text: 'Elastic Load Balancing', url: 'https://aws.amazon.com/elasticloadbalancing/' },
    ],
    difficulty: 'medium',
    isUnscored: false,
    tags: ['auto-scaling', 'elb', 'high-availability', 'compute'],
  },
  {
    id: 'sc-014',
    domainId: 2,
    questionText:
      'A company uses Amazon S3 to store critical business data. The company needs to protect this data from accidental deletion by any user, including the AWS account root user. Which S3 feature should the company use?',
    questionType: 'single_choice',
    options: [
      { id: 'a', text: 'S3 Versioning' },
      { id: 'b', text: 'S3 Lifecycle policies' },
      { id: 'c', text: 'MFA Delete' },
      { id: 'd', text: 'S3 Cross-Region Replication' },
    ],
    correctAnswers: ['c'],
    explanation:
      'MFA Delete requires multi-factor authentication to delete an object version or change the versioning state of a bucket. This provides an additional layer of protection against accidental deletion, even by the root user, because the MFA device must be used to confirm the delete operation.',
    referenceLinks: [
      { text: 'MFA Delete', url: 'https://docs.aws.amazon.com/AmazonS3/latest/userguide/MultiFactorAuthenticationDelete.html' },
    ],
    difficulty: 'hard',
    isUnscored: false,
    tags: ['s3', 'mfa-delete', 'data-protection'],
  },
  {
    id: 'sc-015',
    domainId: 3,
    questionText:
      'A developer needs to deploy and manage applications on AWS without worrying about the underlying infrastructure. The developer wants to simply upload their code and have AWS handle capacity provisioning, load balancing, and auto-scaling. Which AWS service should the developer use?',
    questionType: 'single_choice',
    options: [
      { id: 'a', text: 'Amazon EC2' },
      { id: 'b', text: 'AWS Lambda' },
      { id: 'c', text: 'AWS Elastic Beanstalk' },
      { id: 'd', text: 'Amazon ECS' },
    ],
    correctAnswers: ['c'],
    explanation:
      'AWS Elastic Beanstalk is a PaaS (Platform as a Service) that allows developers to quickly deploy and manage applications without worrying about the infrastructure. Developers simply upload their code, and Elastic Beanstalk automatically handles capacity provisioning, load balancing, auto-scaling, and application health monitoring.',
    referenceLinks: [
      { text: 'AWS Elastic Beanstalk', url: 'https://aws.amazon.com/elasticbeanstalk/' },
    ],
    difficulty: 'easy',
    isUnscored: false,
    tags: ['elastic-beanstalk', 'paas', 'deployment'],
  },
  {
    id: 'sc-016',
    domainId: 4,
    questionText:
      'A company has a steady-state, predictable workload that runs 24/7 on Amazon EC2. The company wants to reduce its compute costs by up to 72%. Which EC2 purchasing option should the company choose?',
    questionType: 'single_choice',
    options: [
      { id: 'a', text: 'Spot Instances' },
      { id: 'b', text: 'On-Demand Instances' },
      { id: 'c', text: 'Reserved Instances (Standard, 3-year, All Upfront)' },
      { id: 'd', text: 'Dedicated Hosts' },
    ],
    correctAnswers: ['c'],
    explanation:
      'Standard Reserved Instances with a 3-year term and all upfront payment provide the maximum discount (up to 72%) compared to On-Demand pricing. They are ideal for steady-state, predictable workloads that run 24/7. Spot Instances can offer greater discounts but can be interrupted and are not suitable for predictable 24/7 workloads.',
    referenceLinks: [
      { text: 'Amazon EC2 Reserved Instances', url: 'https://aws.amazon.com/ec2/pricing/reserved-instances/' },
    ],
    difficulty: 'medium',
    isUnscored: false,
    tags: ['ec2', 'reserved-instances', 'cost-optimization', 'pricing'],
  },
  {
    id: 'sc-017',
    domainId: 3,
    questionText:
      'A company needs to monitor its AWS resources in real time, collect metrics, set alarms, and automatically react to changes in its AWS resources. Which AWS service should the company use?',
    questionType: 'single_choice',
    options: [
      { id: 'a', text: 'AWS CloudTrail' },
      { id: 'b', text: 'Amazon CloudWatch' },
      { id: 'c', text: 'AWS Config' },
      { id: 'd', text: 'AWS Trusted Advisor' },
    ],
    correctAnswers: ['b'],
    explanation:
      'Amazon CloudWatch is a monitoring and observability service that provides data and actionable insights for AWS resources. It collects metrics, monitors log files, sets alarms, and can automatically react to changes through CloudWatch Alarms and Events/EventBridge.',
    referenceLinks: [
      { text: 'Amazon CloudWatch', url: 'https://aws.amazon.com/cloudwatch/' },
    ],
    difficulty: 'easy',
    isUnscored: false,
    tags: ['cloudwatch', 'monitoring', 'metrics', 'alarms'],
  },
  {
    id: 'sc-018',
    domainId: 2,
    questionText:
      'A company is running Amazon EC2 instances in a VPC. A security engineer needs to control which network traffic is allowed to reach the EC2 instances at the instance level. Which AWS feature should the security engineer configure?',
    questionType: 'single_choice',
    options: [
      { id: 'a', text: 'Network ACLs' },
      { id: 'b', text: 'Security Groups' },
      { id: 'c', text: 'AWS WAF rules' },
      { id: 'd', text: 'Route tables' },
    ],
    correctAnswers: ['b'],
    explanation:
      'Security Groups act as a virtual firewall for your Amazon EC2 instances, controlling inbound and outbound traffic at the instance level. Network ACLs operate at the subnet level. The key distinction is "at the instance level" — this points to Security Groups.',
    referenceLinks: [
      { text: 'Security Groups', url: 'https://docs.aws.amazon.com/vpc/latest/userguide/vpc-security-groups.html' },
    ],
    difficulty: 'easy',
    isUnscored: false,
    tags: ['security-groups', 'vpc', 'networking', 'security'],
  },
  {
    id: 'sc-019',
    domainId: 3,
    questionText:
      'A company has a website that must be accessible 24/7. The company wants to protect the website from DDoS attacks. Which combination of AWS services should the company use? (Choose two.)',
    questionType: 'multiple_choice',
    options: [
      { id: 'a', text: 'Amazon GuardDuty' },
      { id: 'b', text: 'AWS Shield' },
      { id: 'c', text: 'Amazon CloudFront' },
      { id: 'd', text: 'AWS Config' },
      { id: 'e', text: 'AWS Cost Explorer' },
    ],
    correctAnswers: ['b', 'c'],
    explanation:
      'AWS Shield provides DDoS protection for applications running on AWS. AWS Shield Standard is automatically enabled and protects against most common DDoS attacks at no extra cost. Amazon CloudFront, as a CDN, absorbs DDoS attacks at edge locations, distributing traffic globally and keeping your origin protected.',
    referenceLinks: [
      { text: 'AWS Shield', url: 'https://aws.amazon.com/shield/' },
      { text: 'Amazon CloudFront', url: 'https://aws.amazon.com/cloudfront/' },
    ],
    difficulty: 'medium',
    isUnscored: false,
    tags: ['shield', 'cloudfront', 'ddos', 'security'],
  },
  {
    id: 'sc-020',
    domainId: 1,
    questionText:
      'A company is considering moving its on-premises infrastructure to AWS. The company wants to eliminate the need for long-term data center leases and reduce the total cost of ownership (TCO). Which benefit of the AWS Cloud does this scenario describe?',
    questionType: 'single_choice',
    options: [
      { id: 'a', text: 'Elasticity' },
      { id: 'b', text: 'Agility' },
      { id: 'c', text: 'Trade fixed expenses for variable expenses' },
      { id: 'd', text: 'Deploy globally in minutes' },
    ],
    correctAnswers: ['c'],
    explanation:
      'Trading fixed expenses (like long-term data center leases) for variable expenses is one of the six advantages of cloud computing. Instead of investing heavily in data centers and servers, you only pay when you consume computing resources and only for how much you consume.',
    referenceLinks: [
      { text: 'Six Advantages of Cloud Computing', url: 'https://docs.aws.amazon.com/whitepapers/latest/aws-overview/six-advantages-of-cloud-computing.html' },
    ],
    difficulty: 'easy',
    isUnscored: false,
    tags: ['cloud-concepts', 'economics', 'tco'],
  },
  {
    id: 'sc-021',
    domainId: 3,
    questionText:
      'A company wants to migrate its on-premises MySQL database to AWS. The company requires automatic backups, automatic software patching, and high availability. The company does not want to manage the underlying operating system. Which AWS service should the company use?',
    questionType: 'single_choice',
    options: [
      { id: 'a', text: 'Amazon EC2 with MySQL installed' },
      { id: 'b', text: 'Amazon RDS for MySQL' },
      { id: 'c', text: 'Amazon DynamoDB' },
      { id: 'd', text: 'Amazon S3' },
    ],
    correctAnswers: ['b'],
    explanation:
      'Amazon RDS for MySQL is a fully managed relational database service. It provides automatic backups, automatic software patching, Multi-AZ deployment for high availability, and handles all OS management. EC2 with MySQL would require the company to manage the OS, patching, and backups manually.',
    referenceLinks: [
      { text: 'Amazon RDS for MySQL', url: 'https://aws.amazon.com/rds/mysql/' },
    ],
    difficulty: 'easy',
    isUnscored: false,
    tags: ['rds', 'mysql', 'managed-services', 'databases'],
  },
  {
    id: 'sc-022',
    domainId: 2,
    questionText:
      'A company needs to grant temporary access to its AWS resources for a third-party auditor. The auditor should only have read-only access for 2 hours. Which AWS feature is the MOST secure way to accomplish this?',
    questionType: 'single_choice',
    options: [
      { id: 'a', text: 'Create a new IAM user with read-only permissions and delete the user after 2 hours' },
      { id: 'b', text: 'Share the AWS root user credentials with the auditor' },
      { id: 'c', text: 'Create an IAM role with read-only permissions and provide temporary security credentials through AWS STS' },
      { id: 'd', text: 'Create access keys for the auditor and set an expiration date' },
    ],
    correctAnswers: ['c'],
    explanation:
      'Creating an IAM role and using AWS Security Token Service (STS) to provide temporary security credentials is the most secure approach. The credentials automatically expire after the specified duration, eliminating the need to remember to delete users or rotate keys.',
    referenceLinks: [
      { text: 'IAM Roles', url: 'https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles.html' },
      { text: 'AWS STS', url: 'https://docs.aws.amazon.com/STS/latest/APIReference/welcome.html' },
    ],
    difficulty: 'hard',
    isUnscored: false,
    tags: ['iam', 'roles', 'sts', 'temporary-credentials', 'security'],
  },
  {
    id: 'sc-023',
    domainId: 3,
    questionText:
      'A company hosts its website on Amazon EC2 instances behind an Application Load Balancer. The website serves static images stored in an Amazon S3 bucket. The company notices that image load times are slow for users in different geographic regions. Which AWS service should the company implement to reduce image load times?',
    questionType: 'single_choice',
    options: [
      { id: 'a', text: 'Amazon ElastiCache' },
      { id: 'b', text: 'AWS Global Accelerator' },
      { id: 'c', text: 'Amazon CloudFront' },
      { id: 'd', text: 'AWS Direct Connect' },
    ],
    correctAnswers: ['c'],
    explanation:
      'Amazon CloudFront is a CDN that caches static content (like images) at edge locations around the world. When users request an image, CloudFront serves it from the nearest edge location instead of the origin S3 bucket, significantly reducing latency and load times for users in different regions.',
    referenceLinks: [
      { text: 'Amazon CloudFront', url: 'https://aws.amazon.com/cloudfront/' },
    ],
    difficulty: 'easy',
    isUnscored: false,
    tags: ['cloudfront', 'cdn', 's3', 'performance'],
  },
  {
    id: 'sc-024',
    domainId: 4,
    questionText:
      'A startup company has a limited budget and is concerned about unexpected charges on its AWS bill. The company wants to receive email alerts when its monthly spending exceeds specific thresholds. Which AWS tool should the company use?',
    questionType: 'single_choice',
    options: [
      { id: 'a', text: 'AWS Trusted Advisor' },
      { id: 'b', text: 'AWS Cost Explorer' },
      { id: 'c', text: 'AWS Budgets' },
      { id: 'd', text: 'AWS Organizations' },
    ],
    correctAnswers: ['c'],
    explanation:
      'AWS Budgets lets you set custom spending budgets and receive alerts (via email or SNS) when your actual or forecasted costs exceed your budget thresholds. It is the ideal tool for proactively managing costs and preventing surprise charges.',
    referenceLinks: [
      { text: 'AWS Budgets', url: 'https://aws.amazon.com/aws-cost-management/aws-budgets/' },
    ],
    difficulty: 'easy',
    isUnscored: false,
    tags: ['budgets', 'cost-management', 'alerts', 'billing'],
  },
  {
    id: 'sc-025',
    domainId: 3,
    questionText:
      'A company is developing a disaster recovery strategy. The company needs to store backup data in a different geographic location from the primary data. Which AWS concept supports this requirement?',
    questionType: 'single_choice',
    options: [
      { id: 'a', text: 'Availability Zones' },
      { id: 'b', text: 'AWS Regions' },
      { id: 'c', text: 'Edge Locations' },
      { id: 'd', text: 'AWS Local Zones' },
    ],
    correctAnswers: ['b'],
    explanation:
      'AWS Regions are separate geographic areas that are used to house AWS infrastructure. Storing backups in a different Region ensures geographic separation for disaster recovery. Each Region is completely independent and physically separated from other Regions.',
    referenceLinks: [
      { text: 'AWS Global Infrastructure', url: 'https://aws.amazon.com/about-aws/global-infrastructure/' },
    ],
    difficulty: 'easy',
    isUnscored: false,
    tags: ['global-infrastructure', 'regions', 'disaster-recovery'],
  },
  {
    id: 'sc-026',
    domainId: 2,
    questionText:
      'A company hosts a web application in AWS. The web application receives large amounts of traffic from the internet. The company wants to check its web application traffic for malicious SQL injection code. Which AWS service should the company use?',
    questionType: 'single_choice',
    options: [
      { id: 'a', text: 'Amazon GuardDuty' },
      { id: 'b', text: 'AWS WAF' },
      { id: 'c', text: 'AWS Shield' },
      { id: 'd', text: 'Amazon Inspector' },
    ],
    correctAnswers: ['b'],
    explanation:
      'AWS WAF (Web Application Firewall) helps protect your web applications from common web exploits and bots. It allows you to create rules that block common attack patterns, such as SQL injection and cross-site scripting (XSS).',
    referenceLinks: [
      { text: 'AWS WAF', url: 'https://aws.amazon.com/waf/' },
    ],
    difficulty: 'medium',
    isUnscored: false,
    tags: ['waf', 'sql-injection', 'security', 'web-application'],
  },
  {
    id: 'sc-027',
    domainId: 3,
    questionText:
      'A company wants to deploy its containerized application on AWS. The company does not want to manage the underlying infrastructure or the container orchestration platform. Which AWS service should the company use?',
    questionType: 'single_choice',
    options: [
      { id: 'a', text: 'Amazon ECS on EC2' },
      { id: 'b', text: 'Amazon EKS on EC2' },
      { id: 'c', text: 'AWS Fargate' },
      { id: 'd', text: 'Amazon EC2' },
    ],
    correctAnswers: ['c'],
    explanation:
      'AWS Fargate is a serverless compute engine for containers that works with both Amazon ECS and Amazon EKS. With Fargate, you don\'t need to provision, configure, or manage servers or clusters of virtual machines to run containers. This removes the need to manage the underlying infrastructure.',
    referenceLinks: [
      { text: 'AWS Fargate', url: 'https://aws.amazon.com/fargate/' },
    ],
    difficulty: 'medium',
    isUnscored: false,
    tags: ['fargate', 'containers', 'serverless'],
  },
  {
    id: 'sc-028',
    domainId: 1,
    questionText:
      'A company runs its infrastructure entirely on AWS. The company wants to leverage AWS tools to identify areas where it can improve cost efficiency, performance, and security. Which AWS service provides recommendations across all of these areas?',
    questionType: 'single_choice',
    options: [
      { id: 'a', text: 'AWS Cost Explorer' },
      { id: 'b', text: 'AWS CloudTrail' },
      { id: 'c', text: 'AWS Trusted Advisor' },
      { id: 'd', text: 'AWS Config' },
    ],
    correctAnswers: ['c'],
    explanation:
      'AWS Trusted Advisor inspects your AWS environment and provides recommendations across five categories: cost optimization, performance, security, fault tolerance, and service limits. It is the only service among the options that covers all three areas mentioned.',
    referenceLinks: [
      { text: 'AWS Trusted Advisor', url: 'https://aws.amazon.com/premiumsupport/technology/trusted-advisor/' },
    ],
    difficulty: 'easy',
    isUnscored: false,
    tags: ['trusted-advisor', 'optimization', 'best-practices'],
  },
  {
    id: 'sc-029',
    domainId: 3,
    questionText:
      'A company stores 100 TB of archived data in an on-premises data center. The data is rarely accessed but must be retained for 7 years for compliance. The company wants to move this data to AWS to reduce storage costs. Which Amazon S3 storage class should the company use?',
    questionType: 'single_choice',
    options: [
      { id: 'a', text: 'S3 Standard' },
      { id: 'b', text: 'S3 Standard-Infrequent Access (S3 Standard-IA)' },
      { id: 'c', text: 'S3 Glacier Deep Archive' },
      { id: 'd', text: 'S3 One Zone-Infrequent Access' },
    ],
    correctAnswers: ['c'],
    explanation:
      'S3 Glacier Deep Archive is the lowest-cost storage class in Amazon S3, designed for long-term data retention (7-10 years) and digital preservation of data that is accessed once or twice in a year. It is ideal for compliance and regulatory archive requirements.',
    referenceLinks: [
      { text: 'S3 Storage Classes', url: 'https://aws.amazon.com/s3/storage-classes/' },
    ],
    difficulty: 'medium',
    isUnscored: false,
    tags: ['s3', 'glacier-deep-archive', 'storage', 'archival'],
  },
  {
    id: 'sc-030',
    domainId: 2,
    questionText:
      'An application running on Amazon EC2 needs to access objects stored in an Amazon S3 bucket. A security engineer wants to grant this access following security best practices. What should the security engineer do?',
    questionType: 'single_choice',
    options: [
      { id: 'a', text: 'Store the AWS access keys in the application code' },
      { id: 'b', text: 'Create an IAM role with S3 permissions and attach it to the EC2 instance' },
      { id: 'c', text: 'Create a new IAM user and share the credentials with the application' },
      { id: 'd', text: 'Make the S3 bucket public' },
    ],
    correctAnswers: ['b'],
    explanation:
      'The best practice is to create an IAM role with the necessary S3 permissions and attach it to the EC2 instance (as an instance profile). The application can then use the temporary credentials provided by the role. Storing access keys in code is a security anti-pattern, and making the bucket public is highly insecure.',
    referenceLinks: [
      { text: 'IAM Roles for EC2', url: 'https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/iam-roles-for-amazon-ec2.html' },
    ],
    difficulty: 'easy',
    isUnscored: false,
    tags: ['iam', 'roles', 'ec2', 's3', 'best-practices'],
  },
  {
    id: 'sc-031',
    domainId: 3,
    questionText:
      'A company is running a web application that needs a caching layer to improve read performance for frequently accessed data. The application currently queries a database for every request. Which AWS service should the company use to implement caching?',
    questionType: 'single_choice',
    options: [
      { id: 'a', text: 'Amazon RDS Read Replicas' },
      { id: 'b', text: 'Amazon ElastiCache' },
      { id: 'c', text: 'Amazon DynamoDB Accelerator (DAX)' },
      { id: 'd', text: 'Amazon CloudFront' },
    ],
    correctAnswers: ['b'],
    explanation:
      'Amazon ElastiCache is a fully managed in-memory caching service that supports Redis and Memcached. It is designed to improve the performance of web applications by allowing you to cache frequently accessed data in memory, reducing the load on backend databases.',
    referenceLinks: [
      { text: 'Amazon ElastiCache', url: 'https://aws.amazon.com/elasticache/' },
    ],
    difficulty: 'medium',
    isUnscored: false,
    tags: ['elasticache', 'caching', 'performance'],
  },
  {
    id: 'sc-032',
    domainId: 3,
    questionText:
      'A company needs to quickly deploy a WordPress website without managing the underlying servers, networking, or database separately. The company wants an easy-to-use service with predictable monthly pricing. Which AWS service should the company use?',
    questionType: 'single_choice',
    options: [
      { id: 'a', text: 'Amazon EC2' },
      { id: 'b', text: 'Amazon Lightsail' },
      { id: 'c', text: 'AWS Elastic Beanstalk' },
      { id: 'd', text: 'AWS Lambda' },
    ],
    correctAnswers: ['b'],
    explanation:
      'Amazon Lightsail is designed for simpler workloads and offers an easy-to-use interface to launch pre-configured applications like WordPress. It provides predictable monthly pricing and bundles compute, storage, and networking — ideal for users who don\'t want to manage infrastructure components separately.',
    referenceLinks: [
      { text: 'Amazon Lightsail', url: 'https://aws.amazon.com/lightsail/' },
    ],
    difficulty: 'easy',
    isUnscored: false,
    tags: ['lightsail', 'wordpress', 'simple-deployment'],
  },
  {
    id: 'sc-033',
    domainId: 3,
    questionText:
      'A company needs to transfer 50 TB of data from its on-premises data center to Amazon S3. The company has a 100 Mbps internet connection. The transfer would take over 45 days over the internet. Which AWS service should the company use to transfer the data more quickly?',
    questionType: 'single_choice',
    options: [
      { id: 'a', text: 'AWS DataSync' },
      { id: 'b', text: 'AWS Snowball Edge' },
      { id: 'c', text: 'Amazon S3 Transfer Acceleration' },
      { id: 'd', text: 'AWS Direct Connect' },
    ],
    correctAnswers: ['b'],
    explanation:
      'AWS Snowball Edge is a data transport solution that uses secure, rugged devices to transfer large amounts of data into and out of AWS. For 50 TB of data with a slow internet connection, using a physical Snowball device is much faster than transferring over the internet.',
    referenceLinks: [
      { text: 'AWS Snowball', url: 'https://aws.amazon.com/snowball/' },
    ],
    difficulty: 'medium',
    isUnscored: false,
    tags: ['snowball', 'data-transfer', 'migration'],
  },
  {
    id: 'sc-034',
    domainId: 2,
    questionText:
      'A company wants to ensure that changes to its AWS resource configurations are tracked and recorded over time. The company needs to be alerted whenever a resource\'s configuration deviates from the desired settings. Which AWS service should the company use?',
    questionType: 'single_choice',
    options: [
      { id: 'a', text: 'AWS CloudTrail' },
      { id: 'b', text: 'Amazon CloudWatch' },
      { id: 'c', text: 'AWS Config' },
      { id: 'd', text: 'AWS Trusted Advisor' },
    ],
    correctAnswers: ['c'],
    explanation:
      'AWS Config is a service that enables you to assess, audit, and evaluate the configurations of your AWS resources. It continuously monitors and records your AWS resource configurations and allows you to automate the evaluation of recorded configurations against desired configurations using Config Rules.',
    referenceLinks: [
      { text: 'AWS Config', url: 'https://aws.amazon.com/config/' },
    ],
    difficulty: 'medium',
    isUnscored: false,
    tags: ['config', 'compliance', 'governance'],
  },
  {
    id: 'sc-035',
    domainId: 4,
    questionText:
      'A company wants to get a detailed breakdown of its AWS costs by service, account, and tags for the past 12 months. The company also wants to download this data in CSV format for further analysis. Which AWS tool provides this level of detail?',
    questionType: 'single_choice',
    options: [
      { id: 'a', text: 'AWS Cost Explorer' },
      { id: 'b', text: 'AWS Budgets' },
      { id: 'c', text: 'AWS Cost and Usage Report (CUR)' },
      { id: 'd', text: 'AWS Pricing Calculator' },
    ],
    correctAnswers: ['c'],
    explanation:
      'The AWS Cost and Usage Report (CUR) is the most granular and comprehensive set of cost and usage data available. It delivers detailed line-item data that can be downloaded in CSV format and analyzed further. It breaks costs down by service, account, tags, and even resource IDs.',
    referenceLinks: [
      { text: 'AWS Cost and Usage Report', url: 'https://docs.aws.amazon.com/cur/latest/userguide/what-is-cur.html' },
    ],
    difficulty: 'hard',
    isUnscored: false,
    tags: ['cost-usage-report', 'billing', 'analytics'],
  },
  {
    id: 'sc-036',
    domainId: 3,
    questionText:
      'A company wants to build a chatbot that can understand natural language and provide conversational responses. Which AWS service should the company use?',
    questionType: 'single_choice',
    options: [
      { id: 'a', text: 'Amazon Polly' },
      { id: 'b', text: 'Amazon Lex' },
      { id: 'c', text: 'Amazon Comprehend' },
      { id: 'd', text: 'Amazon Transcribe' },
    ],
    correctAnswers: ['b'],
    explanation:
      'Amazon Lex is a service for building conversational interfaces (chatbots) using voice and text. It provides the deep learning functionalities of automatic speech recognition (ASR) and natural language understanding (NLU). Amazon Polly converts text to speech, Comprehend does NLP analysis, and Transcribe does speech-to-text.',
    referenceLinks: [
      { text: 'Amazon Lex', url: 'https://aws.amazon.com/lex/' },
    ],
    difficulty: 'easy',
    isUnscored: false,
    tags: ['lex', 'ai-ml', 'chatbot', 'nlp'],
  },
  {
    id: 'sc-037',
    domainId: 3,
    questionText:
      'A company has an application that sends millions of notifications to its users. The application needs to send messages to multiple subscribers through a publish-subscribe model. Which AWS service should the company use?',
    questionType: 'single_choice',
    options: [
      { id: 'a', text: 'Amazon SQS' },
      { id: 'b', text: 'Amazon SNS' },
      { id: 'c', text: 'Amazon Kinesis' },
      { id: 'd', text: 'AWS Step Functions' },
    ],
    correctAnswers: ['b'],
    explanation:
      'Amazon Simple Notification Service (SNS) is a fully managed pub/sub messaging service that allows you to send messages to multiple subscribers (like email, SMS, HTTP endpoints, Lambda functions) simultaneously. SQS is for point-to-point queuing, not pub/sub.',
    referenceLinks: [
      { text: 'Amazon SNS', url: 'https://aws.amazon.com/sns/' },
    ],
    difficulty: 'medium',
    isUnscored: false,
    tags: ['sns', 'messaging', 'pub-sub', 'notifications'],
  },
  {
    id: 'sc-038',
    domainId: 2,
    questionText:
      'A company needs to identify all Amazon S3 buckets that are publicly accessible and take action to remediate the issue. Which combination of AWS services should the company use? (Choose two.)',
    questionType: 'multiple_choice',
    options: [
      { id: 'a', text: 'AWS Trusted Advisor' },
      { id: 'b', text: 'Amazon Macie' },
      { id: 'c', text: 'AWS CloudTrail' },
      { id: 'd', text: 'Amazon Inspector' },
      { id: 'e', text: 'Amazon CloudWatch' },
    ],
    correctAnswers: ['a', 'b'],
    explanation:
      'AWS Trusted Advisor includes a security check that identifies S3 buckets with open access permissions. Amazon Macie also evaluates S3 security posture and can identify publicly accessible buckets. Together they provide identification and remediation guidance for S3 bucket security issues.',
    referenceLinks: [
      { text: 'AWS Trusted Advisor', url: 'https://aws.amazon.com/premiumsupport/technology/trusted-advisor/' },
      { text: 'Amazon Macie', url: 'https://aws.amazon.com/macie/' },
    ],
    difficulty: 'hard',
    isUnscored: false,
    tags: ['trusted-advisor', 'macie', 's3', 'security'],
  },
  {
    id: 'sc-039',
    domainId: 1,
    questionText:
      'A company is running a mission-critical production workload on AWS. The company is worried that a single point of failure could bring down the entire application. Which design principle from the AWS Well-Architected Framework addresses this concern?',
    questionType: 'single_choice',
    options: [
      { id: 'a', text: 'Implement loose coupling' },
      { id: 'b', text: 'Think parallel' },
      { id: 'c', text: 'Design for failure' },
      { id: 'd', text: 'Automate everything' },
    ],
    correctAnswers: ['c'],
    explanation:
      '"Design for failure" means building your application to anticipate and handle component failures gracefully. This includes deploying across multiple AZs, implementing health checks, using automated recovery, and avoiding single points of failure.',
    referenceLinks: [
      { text: 'Design Principles', url: 'https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/design-principles.html' },
    ],
    difficulty: 'easy',
    isUnscored: false,
    tags: ['well-architected', 'design-for-failure', 'reliability'],
  },
  {
    id: 'sc-040',
    domainId: 3,
    questionText:
      'A company hosts its web application on AWS. The application collects streaming data from IoT devices in real time. The company needs to process this data as it arrives and immediately trigger actions based on the data. Which AWS service should the company use?',
    questionType: 'single_choice',
    options: [
      { id: 'a', text: 'Amazon SQS' },
      { id: 'b', text: 'Amazon Kinesis Data Streams' },
      { id: 'c', text: 'Amazon S3' },
      { id: 'd', text: 'Amazon Redshift' },
    ],
    correctAnswers: ['b'],
    explanation:
      'Amazon Kinesis Data Streams is designed for real-time streaming data collection and processing. It can continuously capture gigabytes of data per second from hundreds of thousands of sources such as IoT devices, and make it available for real-time processing.',
    referenceLinks: [
      { text: 'Amazon Kinesis Data Streams', url: 'https://aws.amazon.com/kinesis/data-streams/' },
    ],
    difficulty: 'medium',
    isUnscored: false,
    tags: ['kinesis', 'streaming', 'iot', 'real-time'],
  },
];
