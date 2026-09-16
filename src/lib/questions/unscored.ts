import { Question } from '../types';

// ============================================================
// Unscored Questions (15 questions)
// These are "out-of-scope" questions that appear on the real exam
// but do NOT count toward the final score. Candidates cannot
// distinguish them from scored questions.
// Topics: advanced networking, deep DevOps, specialized services
// ============================================================

export const unscoredQuestions: Question[] = [
  {
    id: 'us-001',
    domainId: 0,
    questionText:
      'Which AWS service provides a fully managed CI/CD pipeline that automates the build, test, and deploy phases of your release process?',
    questionType: 'single_choice',
    options: [
      { id: 'a', text: 'AWS CodeBuild' },
      { id: 'b', text: 'AWS CodePipeline' },
      { id: 'c', text: 'AWS CodeDeploy' },
      { id: 'd', text: 'AWS CodeCommit' },
    ],
    correctAnswers: ['b'],
    explanation:
      'AWS CodePipeline is a fully managed continuous integration and continuous delivery (CI/CD) service that automates your software release process. It orchestrates the build, test, and deploy phases every time there is a code change.',
    referenceLinks: [
      {
        text: 'AWS CodePipeline',
        url: 'https://aws.amazon.com/codepipeline/',
      },
    ],
    difficulty: 'medium',
    isUnscored: true,
    tags: ['codepipeline', 'devops', 'cicd'],
  },
  {
    id: 'us-002',
    domainId: 0,
    questionText:
      'Which AWS networking feature allows you to connect two VPCs privately without using the public internet?',
    questionType: 'single_choice',
    options: [
      { id: 'a', text: 'Internet Gateway' },
      { id: 'b', text: 'NAT Gateway' },
      { id: 'c', text: 'VPC Peering' },
      { id: 'd', text: 'AWS Site-to-Site VPN' },
    ],
    correctAnswers: ['c'],
    explanation:
      'VPC Peering is a networking connection between two VPCs that enables you to route traffic between them privately using IPv4 or IPv6 addresses. Instances in either VPC can communicate as if they are within the same network.',
    referenceLinks: [
      {
        text: 'VPC Peering',
        url: 'https://docs.aws.amazon.com/vpc/latest/peering/what-is-vpc-peering.html',
      },
    ],
    difficulty: 'medium',
    isUnscored: true,
    tags: ['vpc-peering', 'networking'],
  },
  {
    id: 'us-003',
    domainId: 0,
    questionText:
      'Which AWS service helps you run Apache Spark and Apache Hadoop workloads for big data processing?',
    questionType: 'single_choice',
    options: [
      { id: 'a', text: 'Amazon Redshift' },
      { id: 'b', text: 'Amazon EMR' },
      { id: 'c', text: 'AWS Glue' },
      { id: 'd', text: 'Amazon Kinesis' },
    ],
    correctAnswers: ['b'],
    explanation:
      'Amazon EMR (Elastic MapReduce) is a cloud big data platform for running large-scale distributed data processing jobs, interactive SQL queries, and machine learning applications using open-source analytics frameworks such as Apache Spark, Apache Hive, and Presto.',
    referenceLinks: [
      { text: 'Amazon EMR', url: 'https://aws.amazon.com/emr/' },
    ],
    difficulty: 'hard',
    isUnscored: true,
    tags: ['emr', 'big-data', 'analytics'],
  },
  {
    id: 'us-004',
    domainId: 0,
    questionText:
      'Which AWS service provides a serverless query service that allows you to analyze data directly in Amazon S3 using standard SQL?',
    questionType: 'single_choice',
    options: [
      { id: 'a', text: 'Amazon Redshift' },
      { id: 'b', text: 'Amazon RDS' },
      { id: 'c', text: 'Amazon Athena' },
      { id: 'd', text: 'Amazon DynamoDB' },
    ],
    correctAnswers: ['c'],
    explanation:
      'Amazon Athena is a serverless, interactive query service that makes it easy to analyze data directly in Amazon S3 using standard SQL. You don\'t need to set up or manage any infrastructure — just point to your data in S3, define the schema, and start querying.',
    referenceLinks: [
      { text: 'Amazon Athena', url: 'https://aws.amazon.com/athena/' },
    ],
    difficulty: 'medium',
    isUnscored: true,
    tags: ['athena', 'analytics', 'serverless'],
  },
  {
    id: 'us-005',
    domainId: 0,
    questionText:
      'Which AWS service provides real-time streaming data processing at any scale?',
    questionType: 'single_choice',
    options: [
      { id: 'a', text: 'Amazon SQS' },
      { id: 'b', text: 'Amazon Kinesis' },
      { id: 'c', text: 'Amazon SNS' },
      { id: 'd', text: 'AWS Step Functions' },
    ],
    correctAnswers: ['b'],
    explanation:
      'Amazon Kinesis makes it easy to collect, process, and analyze real-time, streaming data so you can get timely insights and react quickly to new information. It includes Kinesis Data Streams, Kinesis Data Firehose, and Kinesis Data Analytics.',
    referenceLinks: [
      {
        text: 'Amazon Kinesis',
        url: 'https://aws.amazon.com/kinesis/',
      },
    ],
    difficulty: 'medium',
    isUnscored: true,
    tags: ['kinesis', 'streaming', 'analytics'],
  },
  {
    id: 'us-006',
    domainId: 0,
    questionText:
      'Which AWS service provides serverless workflow orchestration for coordinating multiple AWS services into business-critical applications?',
    questionType: 'single_choice',
    options: [
      { id: 'a', text: 'AWS Lambda' },
      { id: 'b', text: 'Amazon SQS' },
      { id: 'c', text: 'AWS Step Functions' },
      { id: 'd', text: 'AWS CodePipeline' },
    ],
    correctAnswers: ['c'],
    explanation:
      'AWS Step Functions is a serverless workflow service that lets you coordinate multiple AWS services into serverless workflows. You define your workflow as a state machine, and Step Functions manages the execution, including error handling and retries.',
    referenceLinks: [
      {
        text: 'AWS Step Functions',
        url: 'https://aws.amazon.com/step-functions/',
      },
    ],
    difficulty: 'hard',
    isUnscored: true,
    tags: ['step-functions', 'serverless', 'orchestration'],
  },
  {
    id: 'us-007',
    domainId: 0,
    questionText:
      'Which AWS service allows you to set up a managed virtual desktop infrastructure (VDI)?',
    questionType: 'single_choice',
    options: [
      { id: 'a', text: 'Amazon EC2' },
      { id: 'b', text: 'Amazon WorkSpaces' },
      { id: 'c', text: 'Amazon Lightsail' },
      { id: 'd', text: 'AWS Outposts' },
    ],
    correctAnswers: ['b'],
    explanation:
      'Amazon WorkSpaces is a fully managed, secure desktop-as-a-service (DaaS) solution. It provides virtual desktops (VDI) in the cloud, allowing you to provision Windows or Linux desktops in minutes and quickly scale to provide thousands of desktops to workers across the globe.',
    referenceLinks: [
      {
        text: 'Amazon WorkSpaces',
        url: 'https://aws.amazon.com/workspaces/',
      },
    ],
    difficulty: 'medium',
    isUnscored: true,
    tags: ['workspaces', 'vdi', 'end-user-computing'],
  },
  {
    id: 'us-008',
    domainId: 0,
    questionText:
      'Which AWS service allows you to run AWS infrastructure and services on-premises for a consistent hybrid experience?',
    questionType: 'single_choice',
    options: [
      { id: 'a', text: 'AWS Direct Connect' },
      { id: 'b', text: 'AWS Local Zones' },
      { id: 'c', text: 'AWS Outposts' },
      { id: 'd', text: 'AWS Wavelength' },
    ],
    correctAnswers: ['c'],
    explanation:
      'AWS Outposts is a fully managed service that extends AWS infrastructure, AWS services, APIs, and tools to your on-premises facility. It provides a consistent hybrid experience, running the same AWS hardware and software on-premises as in the AWS Cloud.',
    referenceLinks: [
      {
        text: 'AWS Outposts',
        url: 'https://aws.amazon.com/outposts/',
      },
    ],
    difficulty: 'hard',
    isUnscored: true,
    tags: ['outposts', 'hybrid', 'on-premises'],
  },
  {
    id: 'us-009',
    domainId: 0,
    questionText:
      'Which AWS service enables you to build, test, and deploy Docker images to AWS services such as ECS and EKS?',
    questionType: 'single_choice',
    options: [
      { id: 'a', text: 'Amazon ECR' },
      { id: 'b', text: 'AWS CodeBuild' },
      { id: 'c', text: 'AWS Fargate' },
      { id: 'd', text: 'Docker Hub' },
    ],
    correctAnswers: ['a'],
    explanation:
      'Amazon Elastic Container Registry (ECR) is a fully managed container image registry that makes it easy to store, share, and deploy container images. It integrates with Amazon ECS and Amazon EKS, and works with Docker CLI for pushing and pulling images.',
    referenceLinks: [
      { text: 'Amazon ECR', url: 'https://aws.amazon.com/ecr/' },
    ],
    difficulty: 'hard',
    isUnscored: true,
    tags: ['ecr', 'containers', 'docker'],
  },
  {
    id: 'us-010',
    domainId: 0,
    questionText:
      'What does Amazon CloudWatch Logs allow you to do?',
    questionType: 'single_choice',
    options: [
      { id: 'a', text: 'Track API calls made to AWS services' },
      { id: 'b', text: 'Monitor, store, and access log files from EC2 instances, Lambda, and other sources' },
      { id: 'c', text: 'Automatically patch EC2 instances' },
      { id: 'd', text: 'Deploy applications to multiple regions' },
    ],
    correctAnswers: ['b'],
    explanation:
      'Amazon CloudWatch Logs enables you to monitor, store, and access log files from Amazon EC2 instances, AWS CloudTrail, Lambda, and other sources. You can use CloudWatch Logs Insights to interactively search and analyze your log data.',
    referenceLinks: [
      {
        text: 'Amazon CloudWatch Logs',
        url: 'https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/WhatIsCloudWatchLogs.html',
      },
    ],
    difficulty: 'medium',
    isUnscored: true,
    tags: ['cloudwatch', 'logs', 'monitoring'],
  },
  {
    id: 'us-011',
    domainId: 0,
    questionText:
      'Which AWS service provides a managed message broker for Apache ActiveMQ and RabbitMQ?',
    questionType: 'single_choice',
    options: [
      { id: 'a', text: 'Amazon SQS' },
      { id: 'b', text: 'Amazon SNS' },
      { id: 'c', text: 'Amazon MQ' },
      { id: 'd', text: 'Amazon EventBridge' },
    ],
    correctAnswers: ['c'],
    explanation:
      'Amazon MQ is a managed message broker service for Apache ActiveMQ and RabbitMQ. It makes it easy to set up and operate message brokers in the cloud, enabling different software systems to communicate and exchange information.',
    referenceLinks: [
      { text: 'Amazon MQ', url: 'https://aws.amazon.com/amazon-mq/' },
    ],
    difficulty: 'hard',
    isUnscored: true,
    tags: ['amazon-mq', 'messaging'],
  },
  {
    id: 'us-012',
    domainId: 0,
    questionText:
      'Which AWS service provides a way to quickly launch and manage simple web applications, databases, and virtual private servers?',
    questionType: 'single_choice',
    options: [
      { id: 'a', text: 'Amazon EC2' },
      { id: 'b', text: 'Amazon Lightsail' },
      { id: 'c', text: 'AWS Elastic Beanstalk' },
      { id: 'd', text: 'AWS Amplify' },
    ],
    correctAnswers: ['b'],
    explanation:
      'Amazon Lightsail is the easiest way to get started with AWS for developers, small businesses, and students. It provides everything needed to launch a project quickly — instances, containers, databases, storage, and more — at a low, predictable monthly price.',
    referenceLinks: [
      {
        text: 'Amazon Lightsail',
        url: 'https://aws.amazon.com/lightsail/',
      },
    ],
    difficulty: 'easy',
    isUnscored: true,
    tags: ['lightsail', 'compute'],
  },
  {
    id: 'us-013',
    domainId: 0,
    questionText:
      'Which AWS service helps you automatically discover and migrate on-premises VMware workloads to AWS?',
    questionType: 'single_choice',
    options: [
      { id: 'a', text: 'AWS Application Discovery Service' },
      { id: 'b', text: 'AWS Application Migration Service (MGN)' },
      { id: 'c', text: 'AWS Database Migration Service (DMS)' },
      { id: 'd', text: 'AWS Migration Hub' },
    ],
    correctAnswers: ['b'],
    explanation:
      'AWS Application Migration Service (MGN) is the primary migration service recommended for lift-and-shift migrations to AWS. It automatically converts your source servers to run natively on AWS, minimizing manual effort.',
    referenceLinks: [
      {
        text: 'AWS Application Migration Service',
        url: 'https://aws.amazon.com/application-migration-service/',
      },
    ],
    difficulty: 'hard',
    isUnscored: true,
    tags: ['mgn', 'migration'],
  },
  {
    id: 'us-014',
    domainId: 0,
    questionText:
      'Which AWS service helps migrate databases to AWS with minimal downtime?',
    questionType: 'single_choice',
    options: [
      { id: 'a', text: 'AWS Application Migration Service' },
      { id: 'b', text: 'AWS Database Migration Service (DMS)' },
      { id: 'c', text: 'AWS DataSync' },
      { id: 'd', text: 'AWS Transfer Family' },
    ],
    correctAnswers: ['b'],
    explanation:
      'AWS Database Migration Service (DMS) helps you migrate databases to AWS quickly and securely. The source database remains fully operational during the migration, minimizing downtime. DMS supports both homogeneous (e.g., Oracle to Oracle) and heterogeneous (e.g., Oracle to Aurora) migrations.',
    referenceLinks: [
      { text: 'AWS DMS', url: 'https://aws.amazon.com/dms/' },
    ],
    difficulty: 'medium',
    isUnscored: true,
    tags: ['dms', 'database-migration'],
  },
  {
    id: 'us-015',
    domainId: 0,
    questionText:
      'Which AWS service provides event-driven architecture by routing events from AWS services, SaaS applications, and custom applications?',
    questionType: 'single_choice',
    options: [
      { id: 'a', text: 'Amazon SQS' },
      { id: 'b', text: 'Amazon SNS' },
      { id: 'c', text: 'Amazon EventBridge' },
      { id: 'd', text: 'AWS Lambda' },
    ],
    correctAnswers: ['c'],
    explanation:
      'Amazon EventBridge is a serverless event bus that makes it easy to connect applications using data from your own applications, SaaS applications, and AWS services. EventBridge delivers a stream of real-time data and routes it to targets like Lambda, SQS, SNS, and more.',
    referenceLinks: [
      {
        text: 'Amazon EventBridge',
        url: 'https://aws.amazon.com/eventbridge/',
      },
    ],
    difficulty: 'hard',
    isUnscored: true,
    tags: ['eventbridge', 'event-driven', 'serverless'],
  },
];
