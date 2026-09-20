export interface FlashcardItem {
  id: string;
  term: string;
  definition: string;
}

export const clfC02Flashcards: FlashcardItem[] = [
  {
    id: "fc-001",
    term: "Loose coupling",
    definition: "A change or a failure in one component should not cascade to other components."
  },
  {
    id: "fc-002",
    term: "Internet Gateway",
    definition: "A gateway that enables your Amazon EC2 instances in the public subnet to connect to the public Internet."
  },
  {
    id: "fc-003",
    term: "NAT Gateway",
    definition: "A gateway that enables your EC2 instances in the private subnet to connect to the public Internet."
  },
  {
    id: "fc-004",
    term: "AWS Firewall Manager",
    definition: "A security management tool to configure your AWS WAF rules across your accounts."
  },
  {
    id: "fc-005",
    term: "AWS Artifact",
    definition: "Compliance-related documents in AWS such as Service Organization Controls (SOC) reports"
  },
  {
    id: "fc-006",
    term: "IAM User",
    definition: "An IAM identity that uses access keys to manage cloud resources via AWS CLI."
  },
  {
    id: "fc-007",
    term: "IAM Role",
    definition: "A role that grants temporary access to your AWS resources."
  },
  {
    id: "fc-008",
    term: "IAM Group",
    definition: "Manages the common access permissions to a large number of IAM users in AWS."
  },
  {
    id: "fc-009",
    term: "Bucket Policy",
    definition: "A resource-based policy that you can use to grant access permissions to your bucket and the objects in it."
  },
  {
    id: "fc-010",
    term: "Amazon Cognito Identity Pools",
    definition: "Provides AWS credentials to grant your users access to other AWS services."
  },
  {
    id: "fc-011",
    term: "Amazon Macie",
    definition: "A service that discovers, classifies, and protects sensitive data such as personally identifiable information (PII) or intellectual property."
  },
  {
    id: "fc-012",
    term: "Amazon GuardDuty",
    definition: "A threat detection service that continuously monitors for malicious activity to protect your AWS account."
  },
  {
    id: "fc-013",
    term: "Multi-Factor Authentication (MFA)",
    definition: "An authentication method that prevents unauthorized deletion of Amazon S3 objects."
  },
  {
    id: "fc-014",
    term: "Security Group",
    definition: "It acts as a virtual firewall in AWS that controls the traffic at the EC2 instance level."
  },
  {
    id: "fc-015",
    term: "Amazon Inspector",
    definition: "An automated security assessment service to improve the security and compliance of your applications."
  },
  {
    id: "fc-016",
    term: "AWS Global Accelerator",
    definition: "An AWS global network that improves availability of deployed applications on AWS using an anycast static IP address."
  },
  {
    id: "fc-017",
    term: "AWS Snowball",
    definition: "A data transport service that securely moves petabyte-scale data into and out of the AWS Cloud."
  },
  {
    id: "fc-018",
    term: "AWS CloudTrail",
    definition: "A service that allows you to continuously monitor and log account activities such as the user actions made from the AWS Management Console and AWS SDKs."
  },
  {
    id: "fc-019",
    term: "AWS CodeCommit",
    definition: "A source control service that allows you to host Git-based repositories."
  },
  {
    id: "fc-020",
    term: "Dedicated Host",
    definition: "A type of an EC2 instance that allows you to use your existing server-bound software licenses."
  },
  {
    id: "fc-021",
    term: "Amazon Route 53",
    definition: "A highly available and scalable cloud DNS web service in AWS."
  },
  {
    id: "fc-022",
    term: "AWS Auto Scaling",
    definition: "Automatically scale the capacity of an AWS cloud resource based on the incoming traffic to improve availability and reduce failures."
  },
  {
    id: "fc-023",
    term: "S3 Lifecycle Policy",
    definition: "Automatically transfer your infrequently accessed data in your S3 bucket to a more cost-effective storage class."
  },
  {
    id: "fc-024",
    term: "Technical Account Manager (TAM)",
    definition: "A designated technical point of contact that will maintain an operationally healthy AWS environment."
  },
  {
    id: "fc-025",
    term: "AWS Trusted Advisor",
    definition: "A tool that inspects your AWS environment and makes recommendations that follows AWS best practices."
  },
  {
    id: "fc-026",
    term: "AWS Budgets",
    definition: "Set coverage targets and receive alerts when your utilization drops."
  },
  {
    id: "fc-027",
    term: "Convertible RI",
    definition: "A type of Reserved Instance that allows you to change its instance family, instance type, platform, scope, or tenancy."
  },
  {
    id: "fc-028",
    term: "AWS Cost Explorer",
    definition: "Forecast future costs and usage of your AWS resources based on your past consumption."
  },
  {
    id: "fc-029",
    term: "Cost allocation tags",
    definition: "Categorize and track AWS costs on a detailed level."
  },
  {
    id: "fc-030",
    term: "All Upfront",
    definition: "The most cost-effective option when you purchase a Reserved Instance for a 1-year term."
  },
  {
    id: "fc-031",
    term: "Amazon ElastiCache",
    definition: "This service simplifies setting up, managing, and scaling distributed in-memory cache setups in the AWS Cloud. It eliminates the complexity of deploying and operating a distributed cache system and offers a high-performance, resizable, cost-effective, and in-memory cache."
  },
  {
    id: "fc-032",
    term: "AWS Database Migration Service (AWS DMS)",
    definition: "A migration and replication service that is managed and designed to help you securely and quickly move your database and analytics workloads to AWS with minimal downtime and no data loss."
  },
  {
    id: "fc-033",
    term: "AWS Direct Connect",
    definition: "This network service has the ability to create a secure link between your on-premises data center or office location and the AWS environment via a 1 gigabit or 10 gigabit Ethernet fiber-optic connection. This dedicated connection offers high-speed performance with low latency and avoids any involvement of internet service providers along the network path."
  },
  {
    id: "fc-034",
    term: "Amazon Rekognition",
    definition: "A Machine Learning service that allows you to add image and video analysis features to your applications."
  },
  {
    id: "fc-035",
    term: "AWS X-Ray",
    definition: "This service simplifies the analysis of distributed application behavior for developers by equipping them with profiling capabilities, exception collection, and request tracing."
  },
  {
    id: "fc-036",
    term: "Instance metadata",
    definition: "This feature refers to data associated with an Amazon Elastic Compute Cloud (Amazon EC2) instance that can be utilized by applications for the configuration or management of the instance while it is running."
  },
  {
    id: "fc-037",
    term: "Amazon CloudFront",
    definition: "It is a web service that accelerates the delivery of your dynamic and static web content, including image files, .js, .css, and .html files, to users."
  },
  {
    id: "fc-038",
    term: "AWS CloudFormation",
    definition: "A service that allows you to define and deploy AWS resources using infrastructure-as-a-code (IaC)."
  },
  {
    id: "fc-039",
    term: "AWS Key Management Service (AWS KMS)",
    definition: "This service enables you to manage, create, and control cryptographic keys for AWS services and your applications."
  },
  {
    id: "fc-040",
    term: "Amazon DynamoDB",
    definition: "It's a serverless, fully managed NoSQL database for key-value data that can handle high-performance applications at any scale."
  },
  {
    id: "fc-041",
    term: "AWS Total Cost of Ownership (TCO) Calculator",
    definition: "It is a tool that assists customers in estimating the overall expenses associated with operating their applications in the AWS Cloud."
  },
  {
    id: "fc-042",
    term: "Spot Instance",
    definition: "A purchasing option that allows you to utilize unused EC2 capacity in the AWS cloud with up to a 90% discount compared to On-Demand prices."
  },
  {
    id: "fc-043",
    term: "AWS Organizations",
    definition: "It is an account management service that lets you consolidate multiple AWS accounts into an organization that you create and centrally manage. Accounts are grouped into logical groups called organizational units (OUs)."
  },
  {
    id: "fc-044",
    term: "Amazon Glacier",
    definition: "This service is capable of providing a cost-effective solution for storing your data over extended periods ranging from months to decades. It offers a three-tier retrieval system that allows you to retrieve your data in as little as a few minutes for urgent needs (expedited retrieval), a few hours for non-urgent needs (standard retrieval), or several hours for large data archives (bulk retrieval)."
  },
  {
    id: "fc-045",
    term: "AWS Marketplace",
    definition: "A platform where you can sell your catalog of custom AMIs in AWS."
  },
  {
    id: "fc-046",
    term: "Multipart Upload",
    definition: "This Amazon S3 feature enables you to upload a single object as a set of parts, where each part represents a contiguous portion of the object's data. These parts can be uploaded independently and in any order."
  },
  {
    id: "fc-047",
    term: "Consolidated Billing",
    definition: "AWS Organizations feature that enables customers to combine payment for multiple accounts into a single payment method. It summarizes usage and costs for all accounts."
  },
  {
    id: "fc-048",
    term: "AWS Cost and Usage Reports",
    definition: "This service provides detailed information about your AWS resource usage and estimated charges associated with your AWS account."
  },
  {
    id: "fc-049",
    term: "Elastic Load Balancer (ELB)",
    definition: "It distributes incoming traffic across multiple targets and automatically scales its capacity based on changes in traffic. It also ensures high availability by monitoring target health and routing traffic only to healthy targets."
  },
  {
    id: "fc-050",
    term: "AWS Regions",
    definition: "A physical location where AWS data centers allow customers to deploy their applications and data closer to end-users to achieve lower latency and compliance requirements."
  },
  {
    id: "fc-051",
    term: "Availability Zones",
    definition: "These comprise one or more discrete data centers, each with redundant power, networking, and connectivity, and located in separate facilities."
  },
  {
    id: "fc-052",
    term: "Amazon Machine Images (AMIs)",
    definition: "It is tied to the region where its files are located within S3. You also can copy this from one region to another."
  },
  {
    id: "fc-053",
    term: "Amazon Athena",
    definition: "An interactive query service that makes it easy to analyze data directly in Amazon S3 and other data sources using SQL."
  },
  {
    id: "fc-054",
    term: "Operational Excellence",
    definition: "This pillar supports development, runs workload effectively, and continuously improves supporting processes and procedures to deliver business value."
  },
  {
    id: "fc-055",
    term: "Amazon Simple Storage Service (Amazon S3)",
    definition: "An object storage service that stores data as objects within buckets."
  },
  {
    id: "fc-056",
    term: "Amazon CloudWatch",
    definition: "It displays metrics and creates alarms that watch them and send notifications or automatically make changes to the resources you monitor when a threshold is breached."
  },
  {
    id: "fc-057",
    term: "Amazon EventBridge",
    definition: "A service that extends the capabilities of CloudWatch Events by enabling customers to connect data from their apps and third-party SaaS apps, making it easier to connect applications."
  },
  {
    id: "fc-058",
    term: "Amazon Detective",
    definition: "It simplifies the process of investigating security findings and identifying the root cause."
  },
  {
    id: "fc-059",
    term: "AWS Shield",
    definition: "A managed Distributed Denial of Service (DDoS) protection service that safeguards applications running on AWS."
  },
  {
    id: "fc-060",
    term: "AWS WAF",
    definition: "It is a service that lets you create rules to filter web traffic based on conditions that include IP addresses, HTTP headers, and body or custom URLs."
  },
  {
    id: "fc-061",
    term: "Active-Passive Failover",
    definition: "This failover configuration can be used when you want a primary resource or group of resources to be available most of the time, and you want a secondary resource or group of resources to be on standby in case all the primary resources become unavailable."
  },
  {
    id: "fc-062",
    term: "Amazon Redshift",
    definition: "A database service that lets you access and analyze data without all the configurations of a provisioned data warehouse. Its data warehouse capacity is intelligently scaled to deliver fast performance for unpredictable workloads."
  },
  {
    id: "fc-063",
    term: "Amazon Aurora",
    definition: "A fully managed relational database engine compatible with MySQL and PostgreSQL."
  },
  {
    id: "fc-064",
    term: "AWS Fargate",
    definition: "A technology that you can use with Amazon ECS to run containers without managing servers or clusters of Amazon EC2 instances."
  },
  {
    id: "fc-065",
    term: "Amazon Simple Queue Service (Amazon SQS)",
    definition: "It is a fully managed message queuing service that lets you send, store, and receive messages between software components at any volume without the need for other services to be available."
  },
  {
    id: "fc-066",
    term: "Aurora Replica",
    definition: "It connects to the same storage volume as the primary DB instance and supports only read operations."
  },
  {
    id: "fc-067",
    term: "People perspective",
    definition: "An AWS Cloud Adoption Framework perspective that facilitates the alignment of technology and business, accelerating the cloud journey to help organizations more rapidly evolve to a culture of continuous growth and learning."
  },
  {
    id: "fc-068",
    term: "Go global in minutes",
    definition: "It is one of the advantages of cloud computing that you can quickly deploy your application in multiple regions worldwide with just a few clicks."
  },
  {
    id: "fc-069",
    term: "Amazon Elastic File System (Amazon EFS)",
    definition: "This service offers serverless and fully elastic file storage, allowing users to share file data without worrying about storage capacity and performance management."
  },
  {
    id: "fc-070",
    term: "Amazon Elastic Block Store (Amazon EBS)",
    definition: "This service offers storage volumes that can be used with EC2 instances on a block level."
  },
  {
    id: "fc-071",
    term: "AWS Snowball",
    definition: "It is a service that offers durable and safe devices that allow you to use AWS computing and storage solutions in your edge environments and transfer data to and from AWS."
  },
  {
    id: "fc-072",
    term: "AWS Storage Gateway",
    definition: "An AWS service that links your on-premises software device to cloud-based storage, creating a smooth and secure integration between your on-premises and the AWS storage infrastructure in the AWS Cloud."
  },
  {
    id: "fc-073",
    term: "Decouple your components",
    definition: "A cloud best practice that reinforces using the Service-Oriented Architecture (SOA) design principle."
  },
  {
    id: "fc-074",
    term: "IAM Policy Simulator",
    definition: "This AWS service allows users to evaluate the newly created IAM policies."
  },
  {
    id: "fc-075",
    term: "AWS",
    definition: "Its responsibility is to patch the host operating system of an Amazon EC2 instance."
  },
  {
    id: "fc-076",
    term: "AWS Snowmobile",
    definition: "It allows users to securely transfer hundreds of petabytes of data and exabyte-scale datasets into and out of the AWS Cloud."
  },
  {
    id: "fc-077",
    term: "Use Multipart Upload API",
    definition: "A company needs to upload a single object as a set of parts to improve throughput and recover quicker from network issues."
  },
  {
    id: "fc-078",
    term: "Developer Support Plan",
    definition: "It is the lowest support plan that allows an unlimited number of technical support cases to be opened."
  },
  {
    id: "fc-079",
    term: "AWS Health Dashboard",
    definition: "This is a single place to learn about the availability and operations of your AWS resources, and you can view the overall status of AWS services."
  },
  {
    id: "fc-080",
    term: "Amazon Simple Notification Service (Amazon SNS)",
    definition: "It is an AWS web service that makes it easy to set up, operate, and send notifications from the cloud."
  },
  {
    id: "fc-081",
    term: "Batch computing",
    definition: "A series of programs, commonly known as \"jobs,\" can be executed on one or more computers without any manual intervention."
  },
  {
    id: "fc-082",
    term: "AWS Elastic Beanstalk",
    definition: "An AWS service that simplifies the deployment and management of applications in the AWS Cloud."
  },
  {
    id: "fc-083",
    term: "Amazon WorkSpaces",
    definition: "It simplifies your desktop delivery strategy by eliminating the complexity of managing inventory, operating system versions and patches, and virtual desktop infrastructure."
  },
  {
    id: "fc-084",
    term: "Kubernetes",
    definition: "It is an open-source container orchestration system allowing you to deploy and manage containerized applications at scale."
  },
  {
    id: "fc-085",
    term: "DynamoDB Standard-IA",
    definition: "This helps decrease your DynamoDB expenses for tables that hold data that is not frequently accessed."
  },
  {
    id: "fc-086",
    term: "Predictive Scaling",
    definition: "It is an AWS Auto Scaling capability that analyzes past traffic patterns and predicts future ones to schedule adjustments in the number of EC2 instances when necessary."
  },
  {
    id: "fc-087",
    term: "AWS CloudHSM",
    definition: "A cryptographic service for creating and maintaining hardware security modules in your AWS environment."
  },
  {
    id: "fc-088",
    term: "Attribute-based access control (ABAC)",
    definition: "It is an authorization strategy in AWS that defines permissions based on attributes."
  },
  {
    id: "fc-089",
    term: "AWS Config",
    definition: "An AWS service that performs ongoing assessments, audits, and evaluations of your resource configurations and relationships across AWS, on-premises, and other cloud platforms."
  },
  {
    id: "fc-090",
    term: "Least-privilege permissions",
    definition: "It refers to permitting users only the minimum level of access necessary to perform their required tasks."
  },
  {
    id: "fc-091",
    term: "Amazon Elastic Container Service (Amazon ECS)",
    definition: "A container management service runs, stops, and manages Docker containers on a cluster."
  },
  {
    id: "fc-092",
    term: "Amazon Relational Database Service (Amazon RDS)",
    definition: "This service managed by AWS simplifies establishing, managing, and expanding a cloud-based relational database."
  },
  {
    id: "fc-093",
    term: "RDS Storage Auto Scaling",
    definition: "It automatically scales storage capacity in response to growing database workloads with zero downtime."
  },
  {
    id: "fc-094",
    term: "Amazon QuickSight",
    definition: "This AWS service is a fast, user-friendly cloud-powered business analytics tool that allows all employees to create visualizations quickly, conduct ad-hoc analysis, and obtain business insights from their data at any time and on any device."
  },
  {
    id: "fc-095",
    term: "AWS Pricing Calculator",
    definition: "An estimation tool that estimates the cost of using AWS services based on your specific usage parameters."
  },
  {
    id: "fc-096",
    term: "AWS Batch",
    definition: "This service executes large volumes of batch computing jobs on AWS quickly and efficiently."
  },
  {
    id: "fc-097",
    term: "Amazon Lightsail",
    definition: "It is a simplified, user-friendly AWS service designed to help individuals and small businesses quickly launch and manage virtual private servers (VPS) with ease."
  },
  {
    id: "fc-098",
    term: "Amazon Elastic Kubernetes Service (Amazon EKS)",
    definition: "It is a managed service that simplifies the deployment, management, and scaling of Kubernetes clusters."
  },
  {
    id: "fc-099",
    term: "AWS CodeBuild",
    definition: "An AWS service that compiles source code, runs tests and produces software packages ready to deploy."
  },
  {
    id: "fc-100",
    term: "Amazon Connect",
    definition: "A cloud-based contact center service that enables businesses to provide exceptional customer service at a lower cost than traditional contact centers."
  }
];
