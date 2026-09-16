import { Question } from '../types';

// ============================================================
// Domain 3: Cloud Technology and Services (34% — ~17 scored questions on exam)
// 35 practice questions covering:
//   - Deploying and operating in the AWS Cloud
//   - AWS global infrastructure
//   - AWS compute, database, network, storage services
//   - AWS AI/ML and analytics services
// ============================================================

export const domain3Questions: Question[] = [
  {
    id: 'd3-001',
    domainId: 3,
    questionText:
      'Which AWS service provides resizable compute capacity in the cloud and allows you to launch virtual servers?',
    questionType: 'single_choice',
    options: [
      { id: 'a', text: 'AWS Lambda' },
      { id: 'b', text: 'Amazon EC2' },
      { id: 'c', text: 'Amazon S3' },
      { id: 'd', text: 'Amazon RDS' },
    ],
    correctAnswers: ['b'],
    explanation:
      'Amazon Elastic Compute Cloud (EC2) provides resizable compute capacity in the cloud. It allows you to launch virtual servers (instances) with different configurations of CPU, memory, storage, and networking capacity. EC2 instances can run various operating systems including Linux and Windows.',
    referenceLinks: [
      { text: 'Amazon EC2', url: 'https://aws.amazon.com/ec2/' },
    ],
    difficulty: 'easy',
    isUnscored: false,
    tags: ['ec2', 'compute'],
  },
  {
    id: 'd3-002',
    domainId: 3,
    questionText:
      'Which AWS service lets you run code without provisioning or managing servers?',
    questionType: 'single_choice',
    options: [
      { id: 'a', text: 'Amazon EC2' },
      { id: 'b', text: 'Amazon ECS' },
      { id: 'c', text: 'AWS Lambda' },
      { id: 'd', text: 'AWS Elastic Beanstalk' },
    ],
    correctAnswers: ['c'],
    explanation:
      'AWS Lambda is a serverless compute service that lets you run code without provisioning or managing servers. You pay only for the compute time you consume — there is no charge when your code is not running. Lambda runs your code in response to events such as HTTP requests, file uploads to S3, or database changes.',
    referenceLinks: [
      { text: 'AWS Lambda', url: 'https://aws.amazon.com/lambda/' },
    ],
    difficulty: 'easy',
    isUnscored: false,
    tags: ['lambda', 'serverless', 'compute'],
  },
  {
    id: 'd3-003',
    domainId: 3,
    questionText:
      'Which Amazon S3 storage class is the most cost-effective for data that is rarely accessed and requires retrieval times of milliseconds?',
    questionType: 'single_choice',
    options: [
      { id: 'a', text: 'S3 Standard' },
      { id: 'b', text: 'S3 Standard-Infrequent Access (S3 Standard-IA)' },
      { id: 'c', text: 'S3 Glacier Instant Retrieval' },
      { id: 'd', text: 'S3 Glacier Deep Archive' },
    ],
    correctAnswers: ['c'],
    explanation:
      'S3 Glacier Instant Retrieval is the lowest-cost storage class for long-lived data that is rarely accessed but requires millisecond retrieval. It delivers the same performance as S3 Standard but at a lower storage price, with a higher per-GB retrieval fee. It is ideal for data accessed once a quarter.',
    referenceLinks: [
      {
        text: 'Amazon S3 Storage Classes',
        url: 'https://aws.amazon.com/s3/storage-classes/',
      },
    ],
    difficulty: 'medium',
    isUnscored: false,
    tags: ['s3', 'storage-classes', 'glacier'],
  },
  {
    id: 'd3-004',
    domainId: 3,
    questionText:
      'Which AWS service is a fully managed relational database service that supports MySQL, PostgreSQL, MariaDB, Oracle, and SQL Server?',
    questionType: 'single_choice',
    options: [
      { id: 'a', text: 'Amazon DynamoDB' },
      { id: 'b', text: 'Amazon Redshift' },
      { id: 'c', text: 'Amazon RDS' },
      { id: 'd', text: 'Amazon ElastiCache' },
    ],
    correctAnswers: ['c'],
    explanation:
      'Amazon Relational Database Service (RDS) makes it easy to set up, operate, and scale a relational database in the cloud. It provides cost-efficient and resizable capacity while automating time-consuming administration tasks such as hardware provisioning, database setup, patching, and backups.',
    referenceLinks: [
      { text: 'Amazon RDS', url: 'https://aws.amazon.com/rds/' },
    ],
    difficulty: 'easy',
    isUnscored: false,
    tags: ['rds', 'database', 'relational'],
  },
  {
    id: 'd3-005',
    domainId: 3,
    questionText:
      'Which AWS service provides a Content Delivery Network (CDN) to deliver content with low latency and high transfer speeds?',
    questionType: 'single_choice',
    options: [
      { id: 'a', text: 'Amazon Route 53' },
      { id: 'b', text: 'Amazon CloudFront' },
      { id: 'c', text: 'AWS Direct Connect' },
      { id: 'd', text: 'Amazon VPC' },
    ],
    correctAnswers: ['b'],
    explanation:
      'Amazon CloudFront is a fast content delivery network (CDN) service that securely delivers data, videos, applications, and APIs to customers globally with low latency and high transfer speeds. CloudFront uses a global network of edge locations to cache content closer to end users.',
    referenceLinks: [
      {
        text: 'Amazon CloudFront',
        url: 'https://aws.amazon.com/cloudfront/',
      },
    ],
    difficulty: 'easy',
    isUnscored: false,
    tags: ['cloudfront', 'cdn', 'networking'],
  },
  {
    id: 'd3-006',
    domainId: 3,
    questionText:
      'Which AWS service provides a managed NoSQL database that delivers single-digit millisecond performance at any scale?',
    questionType: 'single_choice',
    options: [
      { id: 'a', text: 'Amazon RDS' },
      { id: 'b', text: 'Amazon Aurora' },
      { id: 'c', text: 'Amazon DynamoDB' },
      { id: 'd', text: 'Amazon Redshift' },
    ],
    correctAnswers: ['c'],
    explanation:
      'Amazon DynamoDB is a fully managed NoSQL database service that provides fast and predictable performance with seamless scalability. DynamoDB delivers single-digit millisecond performance at any scale and supports both key-value and document data models.',
    referenceLinks: [
      {
        text: 'Amazon DynamoDB',
        url: 'https://aws.amazon.com/dynamodb/',
      },
    ],
    difficulty: 'easy',
    isUnscored: false,
    tags: ['dynamodb', 'nosql', 'database'],
  },
  {
    id: 'd3-007',
    domainId: 3,
    questionText:
      'An AWS Region consists of multiple, isolated, and physically separate locations. What are these locations called?',
    questionType: 'single_choice',
    options: [
      { id: 'a', text: 'Edge locations' },
      { id: 'b', text: 'Availability Zones' },
      { id: 'c', text: 'Data centers' },
      { id: 'd', text: 'Local Zones' },
    ],
    correctAnswers: ['b'],
    explanation:
      'An AWS Region consists of multiple Availability Zones (AZs). Each AZ consists of one or more discrete data centers, each with redundant power, networking, and connectivity. AZs are physically separated by a meaningful distance from other AZs, though all AZs in a Region are interconnected with high-bandwidth, low-latency networking.',
    referenceLinks: [
      {
        text: 'AWS Global Infrastructure',
        url: 'https://aws.amazon.com/about-aws/global-infrastructure/regions_az/',
      },
    ],
    difficulty: 'easy',
    isUnscored: false,
    tags: ['global-infrastructure', 'availability-zones', 'regions'],
  },
  {
    id: 'd3-008',
    domainId: 3,
    questionText:
      'Which AWS service allows you to deploy and manage infrastructure as code using templates?',
    questionType: 'single_choice',
    options: [
      { id: 'a', text: 'AWS CodeDeploy' },
      { id: 'b', text: 'AWS CloudFormation' },
      { id: 'c', text: 'AWS Systems Manager' },
      { id: 'd', text: 'AWS OpsWorks' },
    ],
    correctAnswers: ['b'],
    explanation:
      'AWS CloudFormation gives you an easy way to model and provision AWS and third-party resources. You create a template (JSON or YAML) that describes all the AWS resources you want, and CloudFormation takes care of provisioning and configuring those resources for you. This is known as Infrastructure as Code (IaC).',
    referenceLinks: [
      {
        text: 'AWS CloudFormation',
        url: 'https://aws.amazon.com/cloudformation/',
      },
    ],
    difficulty: 'easy',
    isUnscored: false,
    tags: ['cloudformation', 'iac', 'management'],
  },
  {
    id: 'd3-009',
    domainId: 3,
    questionText:
      'Which AWS service provides monitoring and observability for AWS resources, including setting alarms and creating dashboards?',
    questionType: 'single_choice',
    options: [
      { id: 'a', text: 'AWS CloudTrail' },
      { id: 'b', text: 'Amazon CloudWatch' },
      { id: 'c', text: 'AWS Config' },
      { id: 'd', text: 'AWS X-Ray' },
    ],
    correctAnswers: ['b'],
    explanation:
      'Amazon CloudWatch is a monitoring and observability service that provides data and actionable insights to monitor your applications, respond to system-wide performance changes, and optimize resource utilization. CloudWatch collects monitoring data in the form of logs, metrics, and events, and allows you to set alarms.',
    referenceLinks: [
      {
        text: 'Amazon CloudWatch',
        url: 'https://aws.amazon.com/cloudwatch/',
      },
    ],
    difficulty: 'easy',
    isUnscored: false,
    tags: ['cloudwatch', 'monitoring', 'management'],
  },
  {
    id: 'd3-010',
    domainId: 3,
    questionText:
      'Which AWS service provides a highly available and scalable Domain Name System (DNS) web service?',
    questionType: 'single_choice',
    options: [
      { id: 'a', text: 'Amazon CloudFront' },
      { id: 'b', text: 'Amazon Route 53' },
      { id: 'c', text: 'Elastic Load Balancing' },
      { id: 'd', text: 'Amazon API Gateway' },
    ],
    correctAnswers: ['b'],
    explanation:
      'Amazon Route 53 is a highly available and scalable DNS web service. It is designed to give developers and businesses a reliable way to route end users to internet applications. Route 53 performs three main functions: domain registration, DNS routing, and health checking.',
    referenceLinks: [
      {
        text: 'Amazon Route 53',
        url: 'https://aws.amazon.com/route53/',
      },
    ],
    difficulty: 'easy',
    isUnscored: false,
    tags: ['route53', 'dns', 'networking'],
  },
  {
    id: 'd3-011',
    domainId: 3,
    questionText:
      'Which AWS service should you use to run Docker containers without managing the underlying infrastructure?',
    questionType: 'single_choice',
    options: [
      { id: 'a', text: 'Amazon EC2' },
      { id: 'b', text: 'AWS Lambda' },
      { id: 'c', text: 'AWS Fargate' },
      { id: 'd', text: 'Amazon Lightsail' },
    ],
    correctAnswers: ['c'],
    explanation:
      'AWS Fargate is a serverless compute engine for containers that works with both Amazon ECS and Amazon EKS. Fargate removes the need to provision and manage servers, lets you specify and pay for resources per application, and improves security through application isolation by design.',
    referenceLinks: [
      { text: 'AWS Fargate', url: 'https://aws.amazon.com/fargate/' },
    ],
    difficulty: 'medium',
    isUnscored: false,
    tags: ['fargate', 'containers', 'serverless'],
  },
  {
    id: 'd3-012',
    domainId: 3,
    questionText:
      'Which AWS service provides block-level storage volumes for use with Amazon EC2 instances?',
    questionType: 'single_choice',
    options: [
      { id: 'a', text: 'Amazon S3' },
      { id: 'b', text: 'Amazon EFS' },
      { id: 'c', text: 'Amazon EBS' },
      { id: 'd', text: 'AWS Storage Gateway' },
    ],
    correctAnswers: ['c'],
    explanation:
      'Amazon Elastic Block Store (EBS) provides block-level storage volumes for use with EC2 instances. EBS volumes persist independently from the life of an instance and behave like raw, unformatted block devices. You can create a file system on top of these volumes or use them as block devices.',
    referenceLinks: [
      { text: 'Amazon EBS', url: 'https://aws.amazon.com/ebs/' },
    ],
    difficulty: 'easy',
    isUnscored: false,
    tags: ['ebs', 'storage', 'block-storage'],
  },
  {
    id: 'd3-013',
    domainId: 3,
    questionText:
      'Which AWS service provides a fully managed file system that can be shared across multiple EC2 instances?',
    questionType: 'single_choice',
    options: [
      { id: 'a', text: 'Amazon EBS' },
      { id: 'b', text: 'Amazon S3' },
      { id: 'c', text: 'Amazon EFS' },
      { id: 'd', text: 'AWS Storage Gateway' },
    ],
    correctAnswers: ['c'],
    explanation:
      'Amazon Elastic File System (EFS) provides a simple, serverless, elastic file system for use with AWS Cloud services and on-premises resources. It can be shared across multiple EC2 instances concurrently, unlike EBS which is typically attached to a single instance.',
    referenceLinks: [
      { text: 'Amazon EFS', url: 'https://aws.amazon.com/efs/' },
    ],
    difficulty: 'medium',
    isUnscored: false,
    tags: ['efs', 'storage', 'file-storage'],
  },
  {
    id: 'd3-014',
    domainId: 3,
    questionText:
      'Which AWS service automatically distributes incoming application traffic across multiple targets, such as EC2 instances?',
    questionType: 'single_choice',
    options: [
      { id: 'a', text: 'Amazon Route 53' },
      { id: 'b', text: 'Amazon CloudFront' },
      { id: 'c', text: 'Elastic Load Balancing (ELB)' },
      { id: 'd', text: 'AWS Auto Scaling' },
    ],
    correctAnswers: ['c'],
    explanation:
      'Elastic Load Balancing (ELB) automatically distributes incoming application traffic across multiple targets (EC2 instances, containers, IP addresses, Lambda functions) in one or more Availability Zones. It supports three types of load balancers: Application, Network, and Gateway.',
    referenceLinks: [
      {
        text: 'Elastic Load Balancing',
        url: 'https://aws.amazon.com/elasticloadbalancing/',
      },
    ],
    difficulty: 'easy',
    isUnscored: false,
    tags: ['elb', 'load-balancing', 'networking'],
  },
  {
    id: 'd3-015',
    domainId: 3,
    questionText:
      'Which service allows you to automatically scale the number of EC2 instances based on demand?',
    questionType: 'single_choice',
    options: [
      { id: 'a', text: 'Elastic Load Balancing' },
      { id: 'b', text: 'Amazon EC2 Auto Scaling' },
      { id: 'c', text: 'AWS CloudFormation' },
      { id: 'd', text: 'Amazon CloudWatch' },
    ],
    correctAnswers: ['b'],
    explanation:
      'Amazon EC2 Auto Scaling helps you ensure that you have the correct number of Amazon EC2 instances available to handle the load for your application. You create collections of EC2 instances called Auto Scaling groups. You can specify the minimum, maximum, and desired number of instances in each group.',
    referenceLinks: [
      {
        text: 'Amazon EC2 Auto Scaling',
        url: 'https://aws.amazon.com/ec2/autoscaling/',
      },
    ],
    difficulty: 'easy',
    isUnscored: false,
    tags: ['auto-scaling', 'ec2', 'compute'],
  },
  {
    id: 'd3-016',
    domainId: 3,
    questionText:
      'Which AWS database service is designed for online analytical processing (OLAP) and data warehousing?',
    questionType: 'single_choice',
    options: [
      { id: 'a', text: 'Amazon RDS' },
      { id: 'b', text: 'Amazon DynamoDB' },
      { id: 'c', text: 'Amazon Redshift' },
      { id: 'd', text: 'Amazon Aurora' },
    ],
    correctAnswers: ['c'],
    explanation:
      'Amazon Redshift is a fast, fully managed, petabyte-scale data warehouse service designed for online analytical processing (OLAP). It makes it simple and cost-effective to analyze all your data using standard SQL and your existing business intelligence tools.',
    referenceLinks: [
      {
        text: 'Amazon Redshift',
        url: 'https://aws.amazon.com/redshift/',
      },
    ],
    difficulty: 'medium',
    isUnscored: false,
    tags: ['redshift', 'data-warehouse', 'analytics'],
  },
  {
    id: 'd3-017',
    domainId: 3,
    questionText:
      'Which AWS service provides a virtual private cloud that lets you provision a logically isolated section of the AWS Cloud?',
    questionType: 'single_choice',
    options: [
      { id: 'a', text: 'Amazon CloudFront' },
      { id: 'b', text: 'AWS Direct Connect' },
      { id: 'c', text: 'Amazon VPC' },
      { id: 'd', text: 'Amazon Route 53' },
    ],
    correctAnswers: ['c'],
    explanation:
      'Amazon Virtual Private Cloud (VPC) lets you provision a logically isolated section of the AWS Cloud where you can launch AWS resources in a virtual network that you define. You have complete control over your virtual networking environment, including IP address range, subnets, route tables, and network gateways.',
    referenceLinks: [
      { text: 'Amazon VPC', url: 'https://aws.amazon.com/vpc/' },
    ],
    difficulty: 'easy',
    isUnscored: false,
    tags: ['vpc', 'networking', 'isolation'],
  },
  {
    id: 'd3-018',
    domainId: 3,
    questionText:
      'Which AWS service provides a dedicated, private network connection from your on-premises data center to AWS?',
    questionType: 'single_choice',
    options: [
      { id: 'a', text: 'AWS VPN' },
      { id: 'b', text: 'AWS Direct Connect' },
      { id: 'c', text: 'Amazon VPC Peering' },
      { id: 'd', text: 'AWS Transit Gateway' },
    ],
    correctAnswers: ['b'],
    explanation:
      'AWS Direct Connect creates a dedicated, private network connection from your premises to AWS. This provides more consistent network performance and lower latency compared to internet-based connections, and can reduce bandwidth costs for high-volume data transfers.',
    referenceLinks: [
      {
        text: 'AWS Direct Connect',
        url: 'https://aws.amazon.com/directconnect/',
      },
    ],
    difficulty: 'medium',
    isUnscored: false,
    tags: ['direct-connect', 'networking', 'hybrid'],
  },
  {
    id: 'd3-019',
    domainId: 3,
    questionText:
      'Which AWS service is a managed platform that automatically handles capacity provisioning, load balancing, and application health monitoring for web applications?',
    questionType: 'single_choice',
    options: [
      { id: 'a', text: 'Amazon EC2' },
      { id: 'b', text: 'AWS Elastic Beanstalk' },
      { id: 'c', text: 'AWS CloudFormation' },
      { id: 'd', text: 'AWS OpsWorks' },
    ],
    correctAnswers: ['b'],
    explanation:
      'AWS Elastic Beanstalk is an easy-to-use service for deploying and scaling web applications. You simply upload your code and Elastic Beanstalk automatically handles the deployment, from capacity provisioning, load balancing, and auto-scaling to application health monitoring.',
    referenceLinks: [
      {
        text: 'AWS Elastic Beanstalk',
        url: 'https://aws.amazon.com/elasticbeanstalk/',
      },
    ],
    difficulty: 'easy',
    isUnscored: false,
    tags: ['elastic-beanstalk', 'paas', 'compute'],
  },
  {
    id: 'd3-020',
    domainId: 3,
    questionText:
      'What is the purpose of AWS edge locations?',
    questionType: 'single_choice',
    options: [
      { id: 'a', text: 'To host EC2 instances closer to end users' },
      { id: 'b', text: 'To cache content closer to end users for faster delivery' },
      { id: 'c', text: 'To run databases with lower latency' },
      { id: 'd', text: 'To store S3 objects in additional locations' },
    ],
    correctAnswers: ['b'],
    explanation:
      'AWS edge locations are sites that Amazon CloudFront uses to cache copies of your content closer to your users for faster delivery. Edge locations are separate from Regions and Availability Zones. They are located in most of the world\'s major cities to minimize latency for end users.',
    referenceLinks: [
      {
        text: 'CloudFront Edge Locations',
        url: 'https://aws.amazon.com/cloudfront/features/',
      },
    ],
    difficulty: 'easy',
    isUnscored: false,
    tags: ['edge-locations', 'cloudfront', 'global-infrastructure'],
  },
  {
    id: 'd3-021',
    domainId: 3,
    questionText:
      'Which AWS service provides a fully managed graph database for applications that need to create and navigate relationships between highly connected datasets?',
    questionType: 'single_choice',
    options: [
      { id: 'a', text: 'Amazon DynamoDB' },
      { id: 'b', text: 'Amazon Neptune' },
      { id: 'c', text: 'Amazon DocumentDB' },
      { id: 'd', text: 'Amazon Keyspaces' },
    ],
    correctAnswers: ['b'],
    explanation:
      'Amazon Neptune is a fast, reliable, fully managed graph database service. It supports popular graph models (Property Graph and RDF) and their query languages (Apache TinkerPop Gremlin and SPARQL). Neptune is ideal for recommendation engines, fraud detection, social networking, and knowledge graphs.',
    referenceLinks: [
      {
        text: 'Amazon Neptune',
        url: 'https://aws.amazon.com/neptune/',
      },
    ],
    difficulty: 'hard',
    isUnscored: false,
    tags: ['neptune', 'graph-database', 'database'],
  },
  {
    id: 'd3-022',
    domainId: 3,
    questionText:
      'Which AWS AI service can add image and video analysis to applications?',
    questionType: 'single_choice',
    options: [
      { id: 'a', text: 'Amazon Comprehend' },
      { id: 'b', text: 'Amazon Rekognition' },
      { id: 'c', text: 'Amazon Translate' },
      { id: 'd', text: 'Amazon Polly' },
    ],
    correctAnswers: ['b'],
    explanation:
      'Amazon Rekognition is a service that makes it easy to add image and video analysis to your applications. It can identify objects, people, text, scenes, and activities in images and videos, as well as detect inappropriate content. No machine learning expertise is required.',
    referenceLinks: [
      {
        text: 'Amazon Rekognition',
        url: 'https://aws.amazon.com/rekognition/',
      },
    ],
    difficulty: 'medium',
    isUnscored: false,
    tags: ['rekognition', 'ai-ml', 'image-analysis'],
  },
  {
    id: 'd3-023',
    domainId: 3,
    questionText:
      'Which AWS service converts text to lifelike speech?',
    questionType: 'single_choice',
    options: [
      { id: 'a', text: 'Amazon Transcribe' },
      { id: 'b', text: 'Amazon Lex' },
      { id: 'c', text: 'Amazon Polly' },
      { id: 'd', text: 'Amazon Comprehend' },
    ],
    correctAnswers: ['c'],
    explanation:
      'Amazon Polly is a service that turns text into lifelike speech, allowing you to create applications that talk. Polly supports multiple languages and includes a variety of lifelike voices. It uses advanced deep learning technologies to synthesize natural-sounding human speech.',
    referenceLinks: [
      { text: 'Amazon Polly', url: 'https://aws.amazon.com/polly/' },
    ],
    difficulty: 'easy',
    isUnscored: false,
    tags: ['polly', 'ai-ml', 'text-to-speech'],
  },
  {
    id: 'd3-024',
    domainId: 3,
    questionText:
      'Which AWS service provides a way to build conversational interfaces (chatbots) using voice and text?',
    questionType: 'single_choice',
    options: [
      { id: 'a', text: 'Amazon Polly' },
      { id: 'b', text: 'Amazon Lex' },
      { id: 'c', text: 'Amazon Translate' },
      { id: 'd', text: 'Amazon SageMaker' },
    ],
    correctAnswers: ['b'],
    explanation:
      'Amazon Lex is a service for building conversational interfaces into any application using voice and text. It provides the advanced deep learning functionalities of automatic speech recognition (ASR) and natural language understanding (NLU). Amazon Lex powers Amazon Alexa.',
    referenceLinks: [
      { text: 'Amazon Lex', url: 'https://aws.amazon.com/lex/' },
    ],
    difficulty: 'medium',
    isUnscored: false,
    tags: ['lex', 'ai-ml', 'chatbot'],
  },
  {
    id: 'd3-025',
    domainId: 3,
    questionText:
      'Which AWS service is a managed in-memory caching service that supports Redis and Memcached?',
    questionType: 'single_choice',
    options: [
      { id: 'a', text: 'Amazon DynamoDB Accelerator (DAX)' },
      { id: 'b', text: 'Amazon ElastiCache' },
      { id: 'c', text: 'Amazon RDS' },
      { id: 'd', text: 'Amazon Redshift' },
    ],
    correctAnswers: ['b'],
    explanation:
      'Amazon ElastiCache is a fully managed in-memory caching service that makes it easy to deploy, operate, and scale popular open-source compatible in-memory data stores. ElastiCache supports two open-source in-memory engines: Redis and Memcached.',
    referenceLinks: [
      {
        text: 'Amazon ElastiCache',
        url: 'https://aws.amazon.com/elasticache/',
      },
    ],
    difficulty: 'medium',
    isUnscored: false,
    tags: ['elasticache', 'caching', 'database'],
  },
  {
    id: 'd3-026',
    domainId: 3,
    questionText:
      'Which AWS service allows you to create, publish, maintain, monitor, and secure REST, HTTP, and WebSocket APIs at any scale?',
    questionType: 'single_choice',
    options: [
      { id: 'a', text: 'AWS AppSync' },
      { id: 'b', text: 'Amazon API Gateway' },
      { id: 'c', text: 'Amazon CloudFront' },
      { id: 'd', text: 'Elastic Load Balancing' },
    ],
    correctAnswers: ['b'],
    explanation:
      'Amazon API Gateway is a fully managed service that makes it easy for developers to create, publish, maintain, monitor, and secure APIs at any scale. It handles all the tasks involved in accepting and processing up to hundreds of thousands of concurrent API calls.',
    referenceLinks: [
      {
        text: 'Amazon API Gateway',
        url: 'https://aws.amazon.com/api-gateway/',
      },
    ],
    difficulty: 'medium',
    isUnscored: false,
    tags: ['api-gateway', 'serverless', 'networking'],
  },
  {
    id: 'd3-027',
    domainId: 3,
    questionText:
      'Which of the following services can be used for message queuing to decouple application components? (Select TWO)',
    questionType: 'multiple_choice',
    options: [
      { id: 'a', text: 'Amazon SQS' },
      { id: 'b', text: 'Amazon S3' },
      { id: 'c', text: 'Amazon SNS' },
      { id: 'd', text: 'Amazon EC2' },
      { id: 'e', text: 'Amazon CloudWatch' },
    ],
    correctAnswers: ['a', 'c'],
    explanation:
      'Amazon SQS (Simple Queue Service) is a fully managed message queuing service that enables you to decouple and scale microservices. Amazon SNS (Simple Notification Service) is a pub/sub messaging service that can fan out messages to multiple subscribers. Both help decouple application components.',
    referenceLinks: [
      { text: 'Amazon SQS', url: 'https://aws.amazon.com/sqs/' },
      { text: 'Amazon SNS', url: 'https://aws.amazon.com/sns/' },
    ],
    difficulty: 'medium',
    isUnscored: false,
    tags: ['sqs', 'sns', 'messaging', 'decoupling'],
  },
  {
    id: 'd3-028',
    domainId: 3,
    questionText:
      'Which AWS service provides a fully managed platform for building, training, and deploying machine learning models?',
    questionType: 'single_choice',
    options: [
      { id: 'a', text: 'Amazon Rekognition' },
      { id: 'b', text: 'Amazon SageMaker' },
      { id: 'c', text: 'Amazon Comprehend' },
      { id: 'd', text: 'AWS Deep Learning AMIs' },
    ],
    correctAnswers: ['b'],
    explanation:
      'Amazon SageMaker is a fully managed service that provides every developer and data scientist with the ability to build, train, and deploy machine learning models quickly. SageMaker provides an integrated Jupyter authoring notebook instance and built-in algorithms, and supports popular ML frameworks.',
    referenceLinks: [
      {
        text: 'Amazon SageMaker',
        url: 'https://aws.amazon.com/sagemaker/',
      },
    ],
    difficulty: 'medium',
    isUnscored: false,
    tags: ['sagemaker', 'ai-ml', 'machine-learning'],
  },
  {
    id: 'd3-029',
    domainId: 3,
    questionText:
      'Which AWS service provides a managed Kubernetes service to run containerized applications?',
    questionType: 'single_choice',
    options: [
      { id: 'a', text: 'Amazon ECS' },
      { id: 'b', text: 'Amazon EKS' },
      { id: 'c', text: 'AWS Fargate' },
      { id: 'd', text: 'AWS Elastic Beanstalk' },
    ],
    correctAnswers: ['b'],
    explanation:
      'Amazon Elastic Kubernetes Service (EKS) is a fully managed Kubernetes service that makes it easy to run Kubernetes on AWS without needing to install, operate, and maintain your own Kubernetes control plane. EKS runs upstream Kubernetes and is certified Kubernetes conformant.',
    referenceLinks: [
      { text: 'Amazon EKS', url: 'https://aws.amazon.com/eks/' },
    ],
    difficulty: 'medium',
    isUnscored: false,
    tags: ['eks', 'kubernetes', 'containers'],
  },
  {
    id: 'd3-030',
    domainId: 3,
    questionText:
      'Which AWS service allows you to transfer large amounts of data into and out of the AWS Cloud using physical storage devices?',
    questionType: 'single_choice',
    options: [
      { id: 'a', text: 'AWS Direct Connect' },
      { id: 'b', text: 'AWS DataSync' },
      { id: 'c', text: 'AWS Snow Family (Snowball)' },
      { id: 'd', text: 'AWS Transfer Family' },
    ],
    correctAnswers: ['c'],
    explanation:
      'The AWS Snow Family (including Snowcone, Snowball, and Snowmobile) provides physical devices for transferring large amounts of data into and out of AWS. This is useful when network transfers would take too long or be too expensive. Snowball Edge provides up to 80 TB of usable storage.',
    referenceLinks: [
      {
        text: 'AWS Snow Family',
        url: 'https://aws.amazon.com/snow/',
      },
    ],
    difficulty: 'medium',
    isUnscored: false,
    tags: ['snow-family', 'data-transfer', 'storage'],
  },
  {
    id: 'd3-031',
    domainId: 3,
    questionText:
      'Which service converts speech to text, making it easy to add transcription capabilities to applications?',
    questionType: 'single_choice',
    options: [
      { id: 'a', text: 'Amazon Polly' },
      { id: 'b', text: 'Amazon Transcribe' },
      { id: 'c', text: 'Amazon Translate' },
      { id: 'd', text: 'Amazon Comprehend' },
    ],
    correctAnswers: ['b'],
    explanation:
      'Amazon Transcribe is an automatic speech recognition (ASR) service that makes it easy to add speech-to-text capability to applications. You can use it to transcribe audio files, enable real-time transcription, and add subtitles to content.',
    referenceLinks: [
      {
        text: 'Amazon Transcribe',
        url: 'https://aws.amazon.com/transcribe/',
      },
    ],
    difficulty: 'easy',
    isUnscored: false,
    tags: ['transcribe', 'ai-ml', 'speech-to-text'],
  },
  {
    id: 'd3-032',
    domainId: 3,
    questionText:
      'Which AWS service provides a relational database that is MySQL and PostgreSQL compatible, with up to 5x the performance of standard MySQL?',
    questionType: 'single_choice',
    options: [
      { id: 'a', text: 'Amazon RDS for MySQL' },
      { id: 'b', text: 'Amazon Aurora' },
      { id: 'c', text: 'Amazon DynamoDB' },
      { id: 'd', text: 'Amazon Redshift' },
    ],
    correctAnswers: ['b'],
    explanation:
      'Amazon Aurora is a MySQL and PostgreSQL-compatible relational database engine that combines the speed and availability of high-end commercial databases with the simplicity and cost-effectiveness of open-source databases. Aurora provides up to 5x the throughput of standard MySQL and 3x the throughput of standard PostgreSQL.',
    referenceLinks: [
      {
        text: 'Amazon Aurora',
        url: 'https://aws.amazon.com/rds/aurora/',
      },
    ],
    difficulty: 'medium',
    isUnscored: false,
    tags: ['aurora', 'database', 'relational'],
  },
  {
    id: 'd3-033',
    domainId: 3,
    questionText:
      'Which AWS service provides a way to run batch computing workloads on the AWS Cloud?',
    questionType: 'single_choice',
    options: [
      { id: 'a', text: 'AWS Lambda' },
      { id: 'b', text: 'AWS Batch' },
      { id: 'c', text: 'Amazon SQS' },
      { id: 'd', text: 'AWS Step Functions' },
    ],
    correctAnswers: ['b'],
    explanation:
      'AWS Batch enables developers, scientists, and engineers to efficiently run batch computing workloads on the AWS Cloud. AWS Batch dynamically provisions the optimal quantity and type of compute resources based on the volume and specific resource requirements of the batch jobs submitted.',
    referenceLinks: [
      { text: 'AWS Batch', url: 'https://aws.amazon.com/batch/' },
    ],
    difficulty: 'medium',
    isUnscored: false,
    tags: ['batch', 'compute'],
  },
  {
    id: 'd3-034',
    domainId: 3,
    questionText:
      'A company needs to use natural language processing to find insights and relationships in text. Which AWS service should they use?',
    questionType: 'single_choice',
    options: [
      { id: 'a', text: 'Amazon Rekognition' },
      { id: 'b', text: 'Amazon Comprehend' },
      { id: 'c', text: 'Amazon Polly' },
      { id: 'd', text: 'Amazon SageMaker' },
    ],
    correctAnswers: ['b'],
    explanation:
      'Amazon Comprehend is a natural language processing (NLP) service that uses machine learning to find insights and relationships in text. It can identify the language of the text, extract key phrases, detect sentiment, and more — no machine learning experience required.',
    referenceLinks: [
      {
        text: 'Amazon Comprehend',
        url: 'https://aws.amazon.com/comprehend/',
      },
    ],
    difficulty: 'medium',
    isUnscored: false,
    tags: ['comprehend', 'ai-ml', 'nlp'],
  },
  {
    id: 'd3-035',
    domainId: 3,
    questionText:
      'Which AWS service is an ETL (Extract, Transform, Load) service that makes it easy to prepare and load data for analytics?',
    questionType: 'single_choice',
    options: [
      { id: 'a', text: 'Amazon Kinesis' },
      { id: 'b', text: 'AWS Glue' },
      { id: 'c', text: 'Amazon EMR' },
      { id: 'd', text: 'Amazon Athena' },
    ],
    correctAnswers: ['b'],
    explanation:
      'AWS Glue is a fully managed ETL (Extract, Transform, and Load) service that makes it easy to prepare and load data for analytics. It can automatically discover and catalog data, transform it, and make it available for search and querying using services like Amazon Athena, Amazon EMR, and Amazon Redshift.',
    referenceLinks: [
      { text: 'AWS Glue', url: 'https://aws.amazon.com/glue/' },
    ],
    difficulty: 'hard',
    isUnscored: false,
    tags: ['glue', 'etl', 'analytics'],
  },
  {
    id: 'd3-036',
    domainId: 3,
    questionText: 'Which AWS service is used to run Docker containers without managing the underlying EC2 instances?',
    questionType: 'single_choice',
    options: [
      { id: 'a', text: 'Amazon ECS' },
      { id: 'b', text: 'AWS Fargate' },
      { id: 'c', text: 'AWS Lambda' },
      { id: 'd', text: 'Amazon EKS' },
    ],
    correctAnswers: ['b'],
    explanation: 'AWS Fargate is a serverless compute engine for containers that works with both Amazon ECS and Amazon EKS. Fargate makes it easy for you to focus on building your applications and removes the need to provision and manage servers, letting you specify and pay for resources per application.',
    referenceLinks: [
      { text: 'AWS Fargate', url: 'https://aws.amazon.com/fargate/' },
    ],
    difficulty: 'medium',
    isUnscored: false,
    tags: ['fargate', 'containers', 'serverless', 'compute'],
  },
  {
    id: 'd3-037',
    domainId: 3,
    questionText: 'What is the purpose of an AWS Auto Scaling group?',
    questionType: 'single_choice',
    options: [
      { id: 'a', text: 'To automatically distribute incoming application traffic across multiple targets' },
      { id: 'b', text: 'To automatically adjust the number of Amazon EC2 instances to meet application demand' },
      { id: 'c', text: 'To automatically replicate data across multiple Regions' },
      { id: 'd', text: 'To automatically upgrade the operating system of EC2 instances' },
    ],
    correctAnswers: ['b'],
    explanation: 'AWS Auto Scaling monitors your applications and automatically adjusts capacity to maintain steady, predictable performance at the lowest possible cost. For EC2, an Auto Scaling group automatically adds or removes instances based on scaling policies.',
    referenceLinks: [
      { text: 'Amazon EC2 Auto Scaling', url: 'https://aws.amazon.com/ec2/autoscaling/' },
    ],
    difficulty: 'easy',
    isUnscored: false,
    tags: ['auto-scaling', 'compute', 'elasticity'],
  },
  {
    id: 'd3-038',
    domainId: 3,
    questionText: 'Which AWS service provides a fully managed message queuing service?',
    questionType: 'single_choice',
    options: [
      { id: 'a', text: 'Amazon SNS' },
      { id: 'b', text: 'Amazon SQS' },
      { id: 'c', text: 'Amazon SES' },
      { id: 'd', text: 'AWS Step Functions' },
    ],
    correctAnswers: ['b'],
    explanation: 'Amazon Simple Queue Service (SQS) is a fully managed message queuing service that enables you to decouple and scale microservices, distributed systems, and serverless applications.',
    referenceLinks: [
      { text: 'Amazon SQS', url: 'https://aws.amazon.com/sqs/' },
    ],
    difficulty: 'medium',
    isUnscored: false,
    tags: ['sqs', 'messaging', 'decoupling'],
  },
  {
    id: 'd3-039',
    domainId: 3,
    questionText: 'A company needs a durable, highly available storage service for static website hosting. Which service is best suited for this?',
    questionType: 'single_choice',
    options: [
      { id: 'a', text: 'Amazon EBS' },
      { id: 'b', text: 'Amazon S3' },
      { id: 'c', text: 'Amazon EFS' },
      { id: 'd', text: 'AWS Storage Gateway' },
    ],
    correctAnswers: ['b'],
    explanation: 'Amazon S3 is an object storage service that offers industry-leading scalability, data availability, security, and performance. You can use Amazon S3 to host static websites without needing a web server.',
    referenceLinks: [
      { text: 'Hosting a static website on Amazon S3', url: 'https://docs.aws.amazon.com/AmazonS3/latest/userguide/WebsiteHosting.html' },
    ],
    difficulty: 'easy',
    isUnscored: false,
    tags: ['s3', 'storage', 'static-website'],
  },
  {
    id: 'd3-040',
    domainId: 3,
    questionText: 'Which Amazon S3 storage class provides the lowest cost for long-term storage of data that is rarely accessed but requires retrieval times of minutes or hours?',
    questionType: 'single_choice',
    options: [
      { id: 'a', text: 'S3 Standard' },
      { id: 'b', text: 'S3 Intelligent-Tiering' },
      { id: 'c', text: 'S3 Glacier Flexible Retrieval' },
      { id: 'd', text: 'S3 Glacier Deep Archive' },
    ],
    correctAnswers: ['c'],
    explanation: 'S3 Glacier Flexible Retrieval delivers low-cost storage, up to 10% lower cost (than S3 Glacier Instant Retrieval), for archive data that is accessed 1—2 times per year and is retrieved asynchronously. Retrieval times range from minutes to hours. S3 Glacier Deep Archive is cheaper but retrieval takes 12-48 hours.',
    referenceLinks: [
      { text: 'Amazon S3 Storage Classes', url: 'https://aws.amazon.com/s3/storage-classes/' },
    ],
    difficulty: 'hard',
    isUnscored: false,
    tags: ['s3', 'storage-classes', 'glacier'],
  },
  {
    id: 'd3-041',
    domainId: 3,
    questionText: 'A developer needs to run a block of code in response to an event, such as a file being uploaded to S3, without provisioning any servers. Which service should they use?',
    questionType: 'single_choice',
    options: [
      { id: 'a', text: 'Amazon EC2' },
      { id: 'b', text: 'AWS Elastic Beanstalk' },
      { id: 'c', text: 'AWS Lambda' },
      { id: 'd', text: 'Amazon ECS' },
    ],
    correctAnswers: ['c'],
    explanation: 'AWS Lambda is a serverless, event-driven compute service that lets you run code for virtually any type of application or backend service without provisioning or managing servers. You can trigger Lambda from over 200 AWS services and SaaS applications.',
    referenceLinks: [
      { text: 'AWS Lambda', url: 'https://aws.amazon.com/lambda/' },
    ],
    difficulty: 'easy',
    isUnscored: false,
    tags: ['lambda', 'serverless', 'compute'],
  },
  {
    id: 'd3-042',
    domainId: 3,
    questionText: 'Which database service is a fully managed, fast, and highly scalable NoSQL database provided by AWS?',
    questionType: 'single_choice',
    options: [
      { id: 'a', text: 'Amazon RDS' },
      { id: 'b', text: 'Amazon Aurora' },
      { id: 'c', text: 'Amazon DynamoDB' },
      { id: 'd', text: 'Amazon Redshift' },
    ],
    correctAnswers: ['c'],
    explanation: 'Amazon DynamoDB is a fully managed, serverless, key-value NoSQL database designed to run high-performance applications at any scale.',
    referenceLinks: [
      { text: 'Amazon DynamoDB', url: 'https://aws.amazon.com/dynamodb/' },
    ],
    difficulty: 'easy',
    isUnscored: false,
    tags: ['dynamodb', 'nosql', 'databases'],
  },
  {
    id: 'd3-043',
    domainId: 3,
    questionText: 'Which AWS service is designed for data warehousing and analyzing large volumes of data using standard SQL?',
    questionType: 'single_choice',
    options: [
      { id: 'a', text: 'Amazon Athena' },
      { id: 'b', text: 'Amazon Redshift' },
      { id: 'c', text: 'Amazon RDS' },
      { id: 'd', text: 'Amazon EMR' },
    ],
    correctAnswers: ['b'],
    explanation: 'Amazon Redshift is a fast, scalable data warehouse that makes it simple and cost-effective to analyze all your data across your data warehouse and data lake. It uses standard SQL and existing Business Intelligence (BI) tools.',
    referenceLinks: [
      { text: 'Amazon Redshift', url: 'https://aws.amazon.com/redshift/' },
    ],
    difficulty: 'medium',
    isUnscored: false,
    tags: ['redshift', 'data-warehouse', 'analytics'],
  },
  {
    id: 'd3-044',
    domainId: 3,
    questionText: 'What is the primary function of Amazon Route 53?',
    questionType: 'single_choice',
    options: [
      { id: 'a', text: 'To provide a content delivery network (CDN)' },
      { id: 'b', text: 'To create a virtual private network connection' },
      { id: 'c', text: 'To provide highly available and scalable cloud Domain Name System (DNS) web service' },
      { id: 'd', text: 'To automatically route traffic between multiple EC2 instances' },
    ],
    correctAnswers: ['c'],
    explanation: 'Amazon Route 53 is a highly available and scalable cloud Domain Name System (DNS) web service designed to route end users to Internet applications by translating names like www.example.com into numeric IP addresses.',
    referenceLinks: [
      { text: 'Amazon Route 53', url: 'https://aws.amazon.com/route53/' },
    ],
    difficulty: 'easy',
    isUnscored: false,
    tags: ['route53', 'dns', 'networking'],
  },
  {
    id: 'd3-045',
    domainId: 3,
    questionText: 'A company needs to establish a dedicated, private network connection between its on-premises data center and AWS. Which service should they use?',
    questionType: 'single_choice',
    options: [
      { id: 'a', text: 'AWS VPN' },
      { id: 'b', text: 'AWS Direct Connect' },
      { id: 'c', text: 'Amazon VPC Peering' },
      { id: 'd', text: 'AWS Transit Gateway' },
    ],
    correctAnswers: ['b'],
    explanation: 'AWS Direct Connect is a cloud service solution that makes it easy to establish a dedicated network connection from your premises to AWS. This private connection can reduce network costs, increase bandwidth throughput, and provide a more consistent network experience than internet-based connections.',
    referenceLinks: [
      { text: 'AWS Direct Connect', url: 'https://aws.amazon.com/directconnect/' },
    ],
    difficulty: 'medium',
    isUnscored: false,
    tags: ['direct-connect', 'networking', 'hybrid'],
  },
  {
    id: 'd3-046',
    domainId: 3,
    questionText: 'Which AWS service provides a virtual network dedicated to your AWS account, giving you complete control over your virtual networking environment?',
    questionType: 'single_choice',
    options: [
      { id: 'a', text: 'AWS Direct Connect' },
      { id: 'b', text: 'Amazon Route 53' },
      { id: 'c', text: 'Amazon VPC (Virtual Private Cloud)' },
      { id: 'd', text: 'AWS Global Accelerator' },
    ],
    correctAnswers: ['c'],
    explanation: 'Amazon Virtual Private Cloud (Amazon VPC) lets you provision a logically isolated section of the AWS Cloud where you can launch AWS resources in a virtual network that you define.',
    referenceLinks: [
      { text: 'Amazon VPC', url: 'https://aws.amazon.com/vpc/' },
    ],
    difficulty: 'easy',
    isUnscored: false,
    tags: ['vpc', 'networking'],
  },
  {
    id: 'd3-047',
    domainId: 3,
    questionText: 'Which AWS service uses machine learning to automatically recognize, classify, and protect sensitive data (such as PII) in Amazon S3?',
    questionType: 'single_choice',
    options: [
      { id: 'a', text: 'Amazon Rekognition' },
      { id: 'b', text: 'Amazon SageMaker' },
      { id: 'c', text: 'Amazon Macie' },
      { id: 'd', text: 'Amazon Comprehend' },
    ],
    correctAnswers: ['c'],
    explanation: 'Amazon Macie is a data security and data privacy service that uses machine learning and pattern matching to discover and protect your sensitive data in AWS (specifically scanning Amazon S3 buckets).',
    referenceLinks: [
      { text: 'Amazon Macie', url: 'https://aws.amazon.com/macie/' },
    ],
    difficulty: 'medium',
    isUnscored: false,
    tags: ['macie', 'machine-learning', 'security'],
  },
  {
    id: 'd3-048',
    domainId: 3,
    questionText: 'Which AWS machine learning service makes it easy for developers to build, train, and deploy machine learning models quickly?',
    questionType: 'single_choice',
    options: [
      { id: 'a', text: 'Amazon Lex' },
      { id: 'b', text: 'Amazon SageMaker' },
      { id: 'c', text: 'Amazon Polly' },
      { id: 'd', text: 'Amazon Comprehend' },
    ],
    correctAnswers: ['b'],
    explanation: 'Amazon SageMaker is a fully managed service that provides every developer and data scientist with the ability to build, train, and deploy machine learning (ML) models quickly.',
    referenceLinks: [
      { text: 'Amazon SageMaker', url: 'https://aws.amazon.com/sagemaker/' },
    ],
    difficulty: 'easy',
    isUnscored: false,
    tags: ['sagemaker', 'machine-learning'],
  },
  {
    id: 'd3-049',
    domainId: 3,
    questionText: 'A company needs a scalable file system that can be accessed concurrently by thousands of Amazon EC2 instances running Linux. Which service should they use?',
    questionType: 'single_choice',
    options: [
      { id: 'a', text: 'Amazon EBS' },
      { id: 'b', text: 'Amazon S3' },
      { id: 'c', text: 'Amazon EFS' },
      { id: 'd', text: 'Amazon FSx for Windows File Server' },
    ],
    correctAnswers: ['c'],
    explanation: 'Amazon Elastic File System (Amazon EFS) provides a simple, scalable, fully managed elastic NFS file system for use with AWS Cloud services and on-premises resources. It is built to scale on demand to petabytes without disrupting applications, growing and shrinking automatically.',
    referenceLinks: [
      { text: 'Amazon EFS', url: 'https://aws.amazon.com/efs/' },
    ],
    difficulty: 'medium',
    isUnscored: false,
    tags: ['efs', 'storage', 'file-system'],
  },
  {
    id: 'd3-050',
    domainId: 3,
    questionText: 'Which service enables you to create and manage infrastructure using code (Infrastructure as Code) by writing templates?',
    questionType: 'single_choice',
    options: [
      { id: 'a', text: 'AWS Elastic Beanstalk' },
      { id: 'b', text: 'AWS CloudFormation' },
      { id: 'c', text: 'AWS OpsWorks' },
      { id: 'd', text: 'AWS Systems Manager' },
    ],
    correctAnswers: ['b'],
    explanation: 'AWS CloudFormation gives you an easy way to model a collection of related AWS and third-party resources, provision them quickly and consistently, and manage them throughout their lifecycles, by treating infrastructure as code.',
    referenceLinks: [
      { text: 'AWS CloudFormation', url: 'https://aws.amazon.com/cloudformation/' },
    ],
    difficulty: 'medium',
    isUnscored: false,
    tags: ['cloudformation', 'management', 'iac'],
  },
  {
    id: 'd3-051',
    domainId: 3,
    questionText: 'Which AWS service is specifically designed for migrating large amounts of data to AWS by using a physical data transport appliance?',
    questionType: 'single_choice',
    options: [
      { id: 'a', text: 'AWS DataSync' },
      { id: 'b', text: 'AWS Storage Gateway' },
      { id: 'c', text: 'AWS Snowball' },
      { id: 'd', text: 'AWS Database Migration Service' },
    ],
    correctAnswers: ['c'],
    explanation: 'AWS Snowball is a data migration and edge computing device that comes in two options: Compute Optimized and Storage Optimized. It uses secure, physical devices to transport large amounts of data into and out of the AWS Cloud, bypassing the internet.',
    referenceLinks: [
      { text: 'AWS Snowball', url: 'https://aws.amazon.com/snowball/' },
    ],
    difficulty: 'easy',
    isUnscored: false,
    tags: ['snowball', 'migration', 'data-transfer'],
  },
  {
    id: 'd3-052',
    domainId: 3,
    questionText: 'Which AWS database service is compatible with MySQL and PostgreSQL, offering high performance and availability at a lower cost than commercial databases?',
    questionType: 'single_choice',
    options: [
      { id: 'a', text: 'Amazon RDS' },
      { id: 'b', text: 'Amazon Aurora' },
      { id: 'c', text: 'Amazon DynamoDB' },
      { id: 'd', text: 'Amazon Redshift' },
    ],
    correctAnswers: ['b'],
    explanation: 'Amazon Aurora is a MySQL and PostgreSQL-compatible relational database built for the cloud, that combines the performance and availability of traditional enterprise databases with the simplicity and cost-effectiveness of open source databases.',
    referenceLinks: [
      { text: 'Amazon Aurora', url: 'https://aws.amazon.com/rds/aurora/' },
    ],
    difficulty: 'medium',
    isUnscored: false,
    tags: ['aurora', 'databases', 'relational'],
  },
  {
    id: 'd3-053',
    domainId: 3,
    questionText: 'Which component of the AWS Global Infrastructure provides caching of static content closer to users?',
    questionType: 'single_choice',
    options: [
      { id: 'a', text: 'Availability Zones' },
      { id: 'b', text: 'AWS Regions' },
      { id: 'c', text: 'Edge Locations' },
      { id: 'd', text: 'Local Zones' },
    ],
    correctAnswers: ['c'],
    explanation: 'Edge Locations are endpoints for AWS services like Amazon CloudFront and Amazon Route 53. They cache content closer to users globally to provide lower latency and higher transfer speeds.',
    referenceLinks: [
      { text: 'AWS Global Infrastructure', url: 'https://aws.amazon.com/about-aws/global-infrastructure/' },
    ],
    difficulty: 'easy',
    isUnscored: false,
    tags: ['global-infrastructure', 'edge-locations', 'cloudfront'],
  },
  {
    id: 'd3-054',
    domainId: 3,
    questionText: 'A company wants to host a highly scalable web application and wants AWS to automatically handle the deployment, from capacity provisioning, load balancing, auto-scaling to application health monitoring. Which service provides this?',
    questionType: 'single_choice',
    options: [
      { id: 'a', text: 'AWS CloudFormation' },
      { id: 'b', text: 'Amazon EC2' },
      { id: 'c', text: 'AWS Elastic Beanstalk' },
      { id: 'd', text: 'AWS OpsWorks' },
    ],
    correctAnswers: ['c'],
    explanation: 'AWS Elastic Beanstalk is an easy-to-use service for deploying and scaling web applications and services. You can simply upload your code and Elastic Beanstalk automatically handles the deployment, capacity provisioning, load balancing, auto-scaling, and health monitoring.',
    referenceLinks: [
      { text: 'AWS Elastic Beanstalk', url: 'https://aws.amazon.com/elasticbeanstalk/' },
    ],
    difficulty: 'medium',
    isUnscored: false,
    tags: ['elastic-beanstalk', 'compute', 'deployment'],
  },
  {
    id: 'd3-055',
    domainId: 3,
    questionText: 'Which AWS service is used to track user activity and API usage on AWS accounts?',
    questionType: 'single_choice',
    options: [
      { id: 'a', text: 'Amazon CloudWatch' },
      { id: 'b', text: 'AWS CloudTrail' },
      { id: 'c', text: 'AWS Config' },
      { id: 'd', text: 'AWS Systems Manager' },
    ],
    correctAnswers: ['b'],
    explanation: 'AWS CloudTrail monitors and records account activity across your AWS infrastructure, giving you control over storage, analysis, and remediation actions. It tracks API calls made via the Management Console, SDKs, and command line tools.',
    referenceLinks: [
      { text: 'AWS CloudTrail', url: 'https://aws.amazon.com/cloudtrail/' },
    ],
    difficulty: 'easy',
    isUnscored: false,
    tags: ['cloudtrail', 'management', 'auditing'],
  }
];
