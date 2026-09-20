import { Question } from '../types';

// ============================================================
// Official AWS Practice Question Set — CLF-C02 (English)
// These are from the official AWS Certified Cloud Practitioner
// practice question set provided by AWS.
// ============================================================

export const officialAwsQuestions: Question[] = [
  {
    id: 'oa-001',
    domainId: 3,
    questionText:
      'A company requires an encrypted connection between the company\'s on-premises servers and AWS. The connection must use the company\'s existing internet connection. Which solution will meet these requirements?',
    questionType: 'single_choice',
    options: [
      { id: 'a', text: 'Amazon Connect' },
      { id: 'b', text: 'AWS Site-to-Site VPN' },
      { id: 'c', text: 'Amazon CloudFront' },
      { id: 'd', text: 'AWS Direct Connect' },
    ],
    correctAnswers: ['b'],
    explanation:
      'Site-to-Site VPN creates an encrypted network path between your on-premises network and your AWS Cloud network. This connection between your on-premises network and your AWS Cloud network uses the internet.',
    referenceLinks: [
      { text: 'Site-to-Site VPN', url: 'https://docs.aws.amazon.com/vpn/latest/s2svpn/VPC_VPN.html' },
    ],
    difficulty: 'medium',
    isUnscored: false,
    tags: ['vpn', 'networking', 'hybrid', 'official-aws'],
  },
  {
    id: 'oa-002',
    domainId: 3,
    questionText:
      'What are benefits of using the AWS Cloud for companies with customers in many countries around the world?',
    questionType: 'multiple_choice',
    options: [
      { id: 'a', text: 'Amazon CloudFront has multiple edge locations around the world to reduce latency.' },
      { id: 'b', text: 'Amazon Translate automatically translates third-party website interfaces into multiple languages.' },
      { id: 'c', text: 'Companies can deploy applications in multiple AWS Regions to reduce latency.' },
      { id: 'd', text: 'Amazon Comprehend allows users to build applications that can respond to user requests in many languages.' },
      { id: 'e', text: 'Elastic Load Balancing can distribute application web traffic to multiple AWS Regions around the world, which reduces latency.' },
    ],
    correctAnswers: ['a', 'c'],
    explanation:
      'Amazon CloudFront is a CDN that delivers content from edge locations worldwide with low latency. Deploying applications in multiple AWS Regions places resources closer to users globally, improving performance and reducing latency.',
    referenceLinks: [
      { text: 'CloudFront Edge Network', url: 'https://aws.amazon.com/cloudfront/features/' },
      { text: 'AWS Global Infrastructure', url: 'https://aws.amazon.com/about-aws/global-infrastructure/' },
    ],
    difficulty: 'medium',
    isUnscored: false,
    tags: ['cloudfront', 'regions', 'global', 'official-aws'],
  },
  {
    id: 'oa-003',
    domainId: 3,
    questionText:
      'What are the advantages of deploying an application with Amazon EC2 instances in multiple Availability Zones?',
    questionType: 'multiple_choice',
    options: [
      { id: 'a', text: 'Preventing a single point of failure' },
      { id: 'b', text: 'Increasing the availability of the application' },
      { id: 'c', text: 'Allowing the application to serve cross-Region users with low latency' },
      { id: 'd', text: 'Increasing the load of the application' },
      { id: 'e', text: 'Reducing the operational costs of the application' },
    ],
    correctAnswers: ['a', 'b'],
    explanation:
      'Deploying EC2 instances in multiple Availability Zones prevents a single point of failure and increases application availability. Availability Zones are designed for physical redundancy and provide resilience with uninterrupted performance.',
    referenceLinks: [
      { text: 'Availability Zones', url: 'https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-regions-availability-zones.html' },
    ],
    difficulty: 'easy',
    isUnscored: false,
    tags: ['ec2', 'availability-zone', 'high-availability', 'official-aws'],
  },
  {
    id: 'oa-004',
    domainId: 3,
    questionText:
      'A company has an on-premises Linux-based server with an Oracle database that runs on it. The company wants to migrate the database server to run on an Amazon EC2 instance in AWS. Which service should the company use to complete the migration?',
    questionType: 'single_choice',
    options: [
      { id: 'a', text: 'AWS Outposts' },
      { id: 'b', text: 'AWS Schema Conversion Tool (AWS SCT)' },
      { id: 'c', text: 'AWS Database Migration Service (AWS DMS)' },
      { id: 'd', text: 'AWS Application Migration Service (AWS MGN)' },
    ],
    correctAnswers: ['d'],
    explanation:
      'AWS Application Migration Service (AWS MGN) is an automated lift-and-shift solution. It can migrate physical servers and any databases or applications that run on them to EC2 instances in AWS.',
    referenceLinks: [
      { text: 'AWS MGN', url: 'https://docs.aws.amazon.com/mgn/latest/ug/what-is-application-migration-service.html' },
    ],
    difficulty: 'hard',
    isUnscored: false,
    tags: ['migration', 'mgn', 'ec2', 'official-aws'],
  },
  {
    id: 'oa-005',
    domainId: 3,
    questionText:
      'Which AWS service allows customers to purchase unused Amazon EC2 capacity at an often discounted rate?',
    questionType: 'single_choice',
    options: [
      { id: 'a', text: 'On-Demand Instances' },
      { id: 'b', text: 'Spot Instances' },
      { id: 'c', text: 'Reserved Instances' },
      { id: 'd', text: 'Dedicated Instances' },
    ],
    correctAnswers: ['b'],
    explanation:
      'With Spot Instances, you can access unused EC2 capacity at a significant discount. Spot Instances are ideal for fault-tolerant and flexible workloads.',
    referenceLinks: [
      { text: 'Spot Instances', url: 'https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-spot-instances.html' },
    ],
    difficulty: 'easy',
    isUnscored: false,
    tags: ['ec2', 'spot', 'pricing', 'official-aws'],
  },
  {
    id: 'oa-006',
    domainId: 2,
    questionText:
      'Which AWS service identifies security groups that allow unrestricted access to a user\'s AWS resources?',
    questionType: 'single_choice',
    options: [
      { id: 'a', text: 'AWS Identity and Access Management (IAM)' },
      { id: 'b', text: 'AWS CloudTrail' },
      { id: 'c', text: 'AWS Trusted Advisor' },
      { id: 'd', text: 'Amazon CloudWatch' },
    ],
    correctAnswers: ['c'],
    explanation:
      'Trusted Advisor checks security groups for rules that allow unrestricted access to a resource. Unrestricted access increases opportunities for malicious activity, such as hacking, denial-of-service attacks, or loss of data.',
    referenceLinks: [
      { text: 'Trusted Advisor Checks', url: 'https://docs.aws.amazon.com/awssupport/latest/user/trusted-advisor-check-reference.html' },
    ],
    difficulty: 'easy',
    isUnscored: false,
    tags: ['trusted-advisor', 'security', 'security-groups', 'official-aws'],
  },
  {
    id: 'oa-007',
    domainId: 3,
    questionText:
      'A company requires a relational database on AWS that records new customer orders from a website. Which AWS service or feature will meet this requirement?',
    questionType: 'single_choice',
    options: [
      { id: 'a', text: 'Amazon DynamoDB' },
      { id: 'b', text: 'Amazon Aurora' },
      { id: 'c', text: 'Amazon Elastic Block Store (Amazon EBS)' },
      { id: 'd', text: 'AWS Global Accelerator' },
    ],
    correctAnswers: ['b'],
    explanation:
      'Amazon Aurora is a MySQL- and PostgreSQL-compatible relational database built for the cloud. It combines the performance and availability of traditional enterprise databases with the simplicity and cost-effectiveness of open source databases.',
    referenceLinks: [
      { text: 'Amazon Aurora', url: 'https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html' },
    ],
    difficulty: 'easy',
    isUnscored: false,
    tags: ['aurora', 'database', 'rds', 'official-aws'],
  },
  {
    id: 'oa-008',
    domainId: 3,
    questionText:
      'A company is hosting a static website from a single Amazon S3 bucket. Which AWS service will achieve lower latency and high transfer speeds?',
    questionType: 'single_choice',
    options: [
      { id: 'a', text: 'AWS Elastic Beanstalk' },
      { id: 'b', text: 'Amazon Route 53' },
      { id: 'c', text: 'Amazon DynamoDB Accelerator (DAX)' },
      { id: 'd', text: 'Amazon CloudFront' },
    ],
    correctAnswers: ['d'],
    explanation:
      'Amazon CloudFront speeds up the distribution of static and dynamic web content to users worldwide. Content is cached in edge locations, so repeatedly accessed content is served from the nearest edge location instead of the source S3 bucket.',
    referenceLinks: [
      { text: 'CloudFront Static Websites', url: 'https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/IntroductionUseCases.html' },
    ],
    difficulty: 'easy',
    isUnscored: false,
    tags: ['cloudfront', 's3', 'static-website', 'official-aws'],
  },
  {
    id: 'oa-009',
    domainId: 2,
    questionText:
      'Which AWS service should be used to implement encryption in transit?',
    questionType: 'single_choice',
    options: [
      { id: 'a', text: 'AWS Certificate Manager (ACM)' },
      { id: 'b', text: 'AWS Shield' },
      { id: 'c', text: 'AWS Security Hub' },
      { id: 'd', text: 'AWS Resource Access Manager (AWS RAM)' },
    ],
    correctAnswers: ['a'],
    explanation:
      'AWS Certificate Manager (ACM) is used to create, store, and renew public and private SSL/TLS certificates. You can use ACM to implement encryption in transit by using protocols such as TLS.',
    referenceLinks: [
      { text: 'AWS Certificate Manager', url: 'https://docs.aws.amazon.com/acm/latest/userguide/acm-overview.html' },
      { text: 'Encrypting Data in Transit', url: 'https://docs.aws.amazon.com/whitepapers/latest/logical-separation/encrypting-data-at-rest-and--in-transit.html' },
    ],
    difficulty: 'medium',
    isUnscored: false,
    tags: ['acm', 'encryption', 'security', 'official-aws'],
  },
  {
    id: 'oa-010',
    domainId: 1,
    questionText:
      'A user deploys an Amazon RDS DB instance in multiple Availability Zones. This strategy involves which pillar of the AWS Well-Architected Framework?',
    questionType: 'single_choice',
    options: [
      { id: 'a', text: 'Reliability' },
      { id: 'b', text: 'Security' },
      { id: 'c', text: 'Performance efficiency' },
      { id: 'd', text: 'Cost optimization' },
    ],
    correctAnswers: ['a'],
    explanation:
      'The reliability pillar includes the ability of a workload to perform its intended function correctly and consistently. Deploying Amazon RDS in multiple Availability Zones supports reliability by reducing single points of failure.',
    referenceLinks: [
      { text: 'Reliability Pillar', url: 'https://docs.aws.amazon.com/wellarchitected/latest/framework/reliability.html' },
    ],
    difficulty: 'easy',
    isUnscored: false,
    tags: ['well-architected', 'reliability', 'rds', 'official-aws'],
  },
  {
    id: 'oa-011',
    domainId: 4,
    questionText:
      'What is the MINIMUM AWS Support plan that provides technical support through phone calls?',
    questionType: 'single_choice',
    options: [
      { id: 'a', text: 'Developer' },
      { id: 'b', text: 'Basic' },
      { id: 'c', text: 'Business' },
      { id: 'd', text: 'Enterprise' },
    ],
    correctAnswers: ['c'],
    explanation:
      'You can call or chat with technical support by using the Business Support plan or the Enterprise Support plan. The Business Support plan is the minimum plan that provides phone support. The Developer plan allows only email support tickets.',
    referenceLinks: [
      { text: 'AWS Support Plans', url: 'https://aws.amazon.com/premiumsupport/' },
    ],
    difficulty: 'easy',
    isUnscored: false,
    tags: ['support', 'business', 'phone-support', 'official-aws'],
  },
  {
    id: 'oa-012',
    domainId: 3,
    questionText:
      'How does AWS charge for AWS Lambda usage once the free tier has been exceeded?',
    questionType: 'multiple_choice',
    options: [
      { id: 'a', text: 'By the number of versions of a specific Lambda function' },
      { id: 'b', text: 'By the time it takes for the Lambda function to run' },
      { id: 'c', text: 'By the programming language that is used for the Lambda function' },
      { id: 'd', text: 'By the number of requests made for a given Lambda function' },
      { id: 'e', text: 'By the total number of Lambda functions in an AWS account' },
    ],
    correctAnswers: ['b', 'd'],
    explanation:
      'Lambda charges are based on two factors: the number of requests for your Lambda functions and the duration (time) it takes for your code to run. The programming language, number of versions, and total number of functions do not affect cost.',
    referenceLinks: [
      { text: 'Lambda Pricing', url: 'https://aws.amazon.com/lambda/pricing/' },
      { text: 'AWS Lambda', url: 'https://docs.aws.amazon.com/lambda/latest/dg/welcome.html' },
    ],
    difficulty: 'easy',
    isUnscored: false,
    tags: ['lambda', 'pricing', 'serverless', 'official-aws'],
  },
  {
    id: 'oa-013',
    domainId: 3,
    questionText:
      'A company wants to create a learning application for students. The learning application must give students the option to choose a button to have the text read out loud to them. Which AWS machine learning service will meet this requirement?',
    questionType: 'single_choice',
    options: [
      { id: 'a', text: 'Amazon Transcribe' },
      { id: 'b', text: 'Amazon Translate' },
      { id: 'c', text: 'Amazon Polly' },
      { id: 'd', text: 'Amazon Textract' },
    ],
    correctAnswers: ['c'],
    explanation:
      'Amazon Polly is a machine learning service that converts text to speech. It provides the ability to read text out loud, making it ideal for learning applications that need text-to-speech functionality.',
    referenceLinks: [
      { text: 'Amazon Polly', url: 'https://docs.aws.amazon.com/polly/latest/dg/what-is.html' },
    ],
    difficulty: 'easy',
    isUnscored: false,
    tags: ['polly', 'machine-learning', 'text-to-speech', 'official-aws'],
  },
  {
    id: 'oa-014',
    domainId: 3,
    questionText:
      'An application development team needs a solution that sends an alert to an entire development team if a quality assurance test fails on an application. Which AWS service should the application development team use to meet the requirement?',
    questionType: 'single_choice',
    options: [
      { id: 'a', text: 'Amazon Simple Queue Service (Amazon SQS)' },
      { id: 'b', text: 'Amazon Simple Notification Service (Amazon SNS)' },
      { id: 'c', text: 'Amazon EventBridge' },
      { id: 'd', text: 'Amazon Connect' },
    ],
    correctAnswers: ['b'],
    explanation:
      'Amazon SNS is a service used to deliver publications to subscribers. You can use Amazon SNS to send notifications, such as mobile text messages, push notifications, or emails, to subscribers of a quality assurance test-failure topic.',
    referenceLinks: [
      { text: 'Amazon SNS', url: 'https://docs.aws.amazon.com/sns/latest/dg/welcome.html' },
    ],
    difficulty: 'easy',
    isUnscored: false,
    tags: ['sns', 'notifications', 'messaging', 'official-aws'],
  },
  {
    id: 'oa-015',
    domainId: 2,
    questionText:
      'Which credential components are required to gain programmatic access to an AWS account?',
    questionType: 'multiple_choice',
    options: [
      { id: 'a', text: 'An access key ID' },
      { id: 'b', text: 'A user ID' },
      { id: 'c', text: 'A secondary key' },
      { id: 'd', text: 'A primary key' },
      { id: 'e', text: 'A secret access key' },
    ],
    correctAnswers: ['a', 'e'],
    explanation:
      'Programmatic access to an AWS account requires an access key ID and a secret access key. These credentials can be assigned to an IAM user to authenticate API calls made through the AWS CLI, SDKs, or other development tools.',
    referenceLinks: [
      { text: 'Access Key Best Practices', url: 'https://docs.aws.amazon.com/accounts/latest/reference/credentials-access-keys-best-practices.html' },
    ],
    difficulty: 'easy',
    isUnscored: false,
    tags: ['iam', 'access-keys', 'security', 'official-aws'],
  },
  {
    id: 'oa-016',
    domainId: 2,
    questionText:
      'A user needs to automatically discover, classify, and protect sensitive data stored in Amazon S3. Which AWS service can meet these requirements?',
    questionType: 'single_choice',
    options: [
      { id: 'a', text: 'Amazon Inspector' },
      { id: 'b', text: 'Amazon Macie' },
      { id: 'c', text: 'Amazon GuardDuty' },
      { id: 'd', text: 'AWS Secrets Manager' },
    ],
    correctAnswers: ['b'],
    explanation:
      'Amazon Macie is a fully managed data security and data privacy service that uses machine learning and pattern matching to discover and protect sensitive data in AWS. Macie automatically discovers and classifies sensitive data in S3 buckets.',
    referenceLinks: [
      { text: 'Amazon Macie', url: 'https://docs.aws.amazon.com/macie/latest/user/what-is-macie.html' },
    ],
    difficulty: 'medium',
    isUnscored: false,
    tags: ['macie', 'security', 's3', 'official-aws'],
  },
  {
    id: 'oa-017',
    domainId: 2,
    questionText:
      'Which tasks are the customer\'s responsibility according to the AWS shared responsibility model?',
    questionType: 'multiple_choice',
    options: [
      { id: 'a', text: 'Install patches on Amazon RDS DB instances.' },
      { id: 'b', text: 'Control physical access to the data center that contains a customer\'s VPC.' },
      { id: 'c', text: 'Configure IAM users according to the principle of least privilege.' },
      { id: 'd', text: 'Patch the operating system that AWS Lambda functions use.' },
      { id: 'e', text: 'Configure security groups for Amazon EC2 instances.' },
    ],
    correctAnswers: ['c', 'e'],
    explanation:
      'Customers are responsible for configuring IAM users with least-privilege permissions and configuring security groups for their EC2 instances. AWS manages patching for managed services like RDS and Lambda, and controls physical data center access.',
    referenceLinks: [
      { text: 'Shared Responsibility Model', url: 'https://aws.amazon.com/compliance/shared-responsibility-model/' },
    ],
    difficulty: 'medium',
    isUnscored: false,
    tags: ['shared-responsibility', 'iam', 'security-groups', 'official-aws'],
  },
  {
    id: 'oa-018',
    domainId: 4,
    questionText:
      'Each department within a company has its own independent AWS account and its own payment method. The company needs to centralize departmental governance and consolidate payments. How can the company achieve these objectives by using AWS services or features?',
    questionType: 'single_choice',
    options: [
      { id: 'a', text: 'Use AWS Systems Manager OpsCenter.' },
      { id: 'b', text: 'Use the AWS Cost and Usage Reports page of the AWS Billing and Cost Management console.' },
      { id: 'c', text: 'Create an organization in AWS Organizations with all features enabled within one account. Invite all accounts to join the organization.' },
      { id: 'd', text: 'Configure AWS IAM Identity Center in each account.' },
    ],
    correctAnswers: ['c'],
    explanation:
      'AWS Organizations provides centralized governance and consolidated billing for an AWS environment with multiple accounts. By creating an organization and inviting all department accounts, the company can manage governance and payments centrally.',
    referenceLinks: [
      { text: 'AWS Organizations', url: 'https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_org.html' },
    ],
    difficulty: 'medium',
    isUnscored: false,
    tags: ['organizations', 'billing', 'governance', 'official-aws'],
  },
  {
    id: 'oa-019',
    domainId: 3,
    questionText:
      'A company wants to establish a consistent and private connection from the company\'s on-premises data center to the AWS Cloud. Which AWS service will meet these requirements?',
    questionType: 'single_choice',
    options: [
      { id: 'a', text: 'Amazon Connect' },
      { id: 'b', text: 'AWS Direct Connect' },
      { id: 'c', text: 'AWS Site-to-Site VPN' },
      { id: 'd', text: 'AWS Client VPN' },
    ],
    correctAnswers: ['b'],
    explanation:
      'AWS Direct Connect links your internal network to a Direct Connect location through a standard Ethernet fiber-optic cable. It is consistent and private because your company is the only user of the cable, bypassing the public internet entirely.',
    referenceLinks: [
      { text: 'AWS Direct Connect', url: 'https://docs.aws.amazon.com/directconnect/latest/UserGuide/Welcome.html' },
    ],
    difficulty: 'medium',
    isUnscored: false,
    tags: ['direct-connect', 'networking', 'hybrid', 'official-aws'],
  },
  {
    id: 'oa-020',
    domainId: 3,
    questionText:
      'Which of the functionalities are characteristics of Amazon S3?',
    questionType: 'multiple_choice',
    options: [
      { id: 'a', text: 'An object store' },
      { id: 'b', text: 'A durable storage system' },
      { id: 'c', text: 'A global file system' },
      { id: 'd', text: 'A local file store' },
      { id: 'e', text: 'A network file system' },
    ],
    correctAnswers: ['a', 'b'],
    explanation:
      'Amazon S3 is an object storage service that provides industry-leading durability, availability, performance, security, and virtually unlimited scalability. It is not a file system (global, local, or network) — it is specifically an object store with exceptional durability.',
    referenceLinks: [
      { text: 'Amazon S3', url: 'https://docs.aws.amazon.com/AmazonS3/latest/userguide/Welcome.html' },
      { text: 'S3 Data Durability', url: 'https://docs.aws.amazon.com/AmazonS3/latest/userguide/DataDurability.html' },
    ],
    difficulty: 'easy',
    isUnscored: false,
    tags: ['s3', 'storage', 'object-store', 'official-aws'],
  },
];
