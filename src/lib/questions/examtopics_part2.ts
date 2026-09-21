import { Question } from '../types';

export const examtopicsPart2Questions: Question[] = [
  {
    "id": "et-101",
    "domainId": 3,
    "questionText": "Which AWS service can be used to decouple applications?",
    "questionType": "single_choice",
    "options": [
      {
        "id": "a",
        "text": "AWS Config"
      },
      {
        "id": "b",
        "text": "Amazon Simple Queue Service (Amazon SQS)"
      },
      {
        "id": "c",
        "text": "AWS Batch"
      },
      {
        "id": "d",
        "text": "Amazon Simple Email Service (Amazon SES)"
      }
    ],
    "correctAnswers": [
      "b"
    ],
    "explanation": "Amazon Simple Queue Service (Amazon SQS) is a fully managed message queuing service that enables you to decouple and scale microservices, distributed systems, and serverless applications. Decoupling ensures that components can execute independently and asynchronously. AWS Config tracks resource configurations. AWS Batch runs batch computing jobs. Amazon SES sends marketing and transactional emails.",
    "referenceLinks": [],
    "difficulty": "medium",
    "isUnscored": false,
    "tags": [
      "examtopics"
    ]
  },
  {
    "id": "et-102",
    "domainId": 3,
    "questionText": "Which disaster recovery option is the LEAST expensive?",
    "questionType": "single_choice",
    "options": [
      {
        "id": "a",
        "text": "Warm standby"
      },
      {
        "id": "b",
        "text": "Multisite"
      },
      {
        "id": "c",
        "text": "Backup and restore"
      },
      {
        "id": "d",
        "text": "Pilot light"
      }
    ],
    "correctAnswers": [
      "c"
    ],
    "explanation": "Backup and restore is the LEAST expensive disaster recovery (DR) strategy because data is backed up to storage (such as Amazon S3) and no duplicate compute infrastructure is kept running in the recovery region until a disaster actually strikes (highest RTO and RPO, but lowest ongoing cost). Pilot light, Warm standby, and Multi-site active-active require running continuous or semi-active standby infrastructure, which increases costs.",
    "referenceLinks": [],
    "difficulty": "medium",
    "isUnscored": false,
    "tags": [
      "examtopics"
    ]
  },
  {
    "id": "et-103",
    "domainId": 3,
    "questionText": "Which type of AWS storage is ephemeral and is deleted when an Amazon EC2 instance is stopped or terminated?",
    "questionType": "single_choice",
    "options": [
      {
        "id": "a",
        "text": "Amazon Elastic Block Store (Amazon EBS)"
      },
      {
        "id": "b",
        "text": "Amazon EC2 instance store"
      },
      {
        "id": "c",
        "text": "Amazon Elastic File System (Amazon EFS)"
      },
      {
        "id": "d",
        "text": "Amazon S3"
      }
    ],
    "correctAnswers": [
      "b"
    ],
    "explanation": "Amazon EC2 instance store provides temporary block-level storage for an instance. This storage is located on disks that are physically attached to the host computer. It is ephemeral, meaning data persists only during the life of the instance and is lost/deleted when the instance is stopped, hibernated, or terminated. Amazon EBS, EFS, and S3 are persistent storage services.",
    "referenceLinks": [],
    "difficulty": "medium",
    "isUnscored": false,
    "tags": [
      "examtopics"
    ]
  },
  {
    "id": "et-104",
    "domainId": 3,
    "questionText": "Which of the following is a characteristic of the AWS account root user?",
    "questionType": "single_choice",
    "options": [
      {
        "id": "a",
        "text": "The root user is the only user that can be configured with multi-factor authentication (MFA)."
      },
      {
        "id": "b",
        "text": "The root user is the only user that can access the AWS Management Console."
      },
      {
        "id": "c",
        "text": "The root user is the first sign-in identity that is available when an AWS account is created."
      },
      {
        "id": "d",
        "text": "The root user has a password that cannot be changed."
      }
    ],
    "correctAnswers": [
      "c"
    ],
    "explanation": "The AWS account root user is created when the AWS account is first created and represents the initial sign-in identity. It has complete and unrestricted access to all resources and billing settings in the account. MFA can and should be configured on all users, not just root. IAM users can access the Management Console, and the root user password can be changed at any time.",
    "referenceLinks": [],
    "difficulty": "medium",
    "isUnscored": false,
    "tags": [
      "examtopics"
    ]
  },
  {
    "id": "et-105",
    "domainId": 3,
    "questionText": "A company hosts an application on an Amazon EC2 instance. The EC2 instance needs to access several AWS resources, including Amazon S3 and AmazonDynamoDB.What is the MOST operationally efficient solution to delegate permissions?",
    "questionType": "single_choice",
    "options": [
      {
        "id": "a",
        "text": "Create an IAM role with the required permissions. Attach the role to the EC2 instance."
      },
      {
        "id": "b",
        "text": "Create an IAM user and use its access key and secret access key in the application."
      },
      {
        "id": "c",
        "text": "Create an IAM user and use its access key and secret access key to create a CLI profile in the EC2 instance"
      },
      {
        "id": "d",
        "text": "Create an IAM role with the required permissions. Attach the role to the administrative IAM user."
      }
    ],
    "correctAnswers": [
      "a"
    ],
    "explanation": "Attaching an IAM role with the required permissions directly to the Amazon EC2 instance (via an EC2 instance profile) is the AWS best practice and most operationally efficient solution. Applications on the instance automatically receive temporary security credentials via the EC2 metadata service without storing or rotating long-term access keys.",
    "referenceLinks": [],
    "difficulty": "medium",
    "isUnscored": false,
    "tags": [
      "examtopics"
    ]
  },
  {
    "id": "et-106",
    "domainId": 3,
    "questionText": "Which of the following is a component of the AWS Global Infrastructure?",
    "questionType": "single_choice",
    "options": [
      {
        "id": "a",
        "text": "Amazon Alexa"
      },
      {
        "id": "b",
        "text": "AWS Regions"
      },
      {
        "id": "c",
        "text": "Amazon Lightsail"
      },
      {
        "id": "d",
        "text": "AWS Organizations"
      }
    ],
    "correctAnswers": [
      "b"
    ],
    "explanation": "AWS Regions are physical geographic locations around the world where AWS clusters data centers. They are a core component of the AWS Global Infrastructure, alongside Availability Zones and Edge Locations. Amazon Alexa, Lightsail, and Organizations are software services, not physical infrastructure components.",
    "referenceLinks": [],
    "difficulty": "medium",
    "isUnscored": false,
    "tags": [
      "examtopics"
    ]
  },
  {
    "id": "et-107",
    "domainId": 3,
    "questionText": "What is the purpose of having an internet gateway within a VPC?",
    "questionType": "single_choice",
    "options": [
      {
        "id": "a",
        "text": "To create a VPN connection to the VPC"
      },
      {
        "id": "b",
        "text": "To allow communication between the VPC and the internet"
      },
      {
        "id": "c",
        "text": "To impose bandwidth constraints on internet traffic"
      },
      {
        "id": "d",
        "text": "To load balance traffic from the internet across Amazon EC2 instances"
      }
    ],
    "correctAnswers": [
      "b"
    ],
    "explanation": "An Internet Gateway (IGW) is a horizontally scaled, redundant, and highly available VPC component that allows communication between instances in your VPC and the public internet. It provides a target in your VPC route tables for internet-routable traffic and performs network address translation (NAT) for instances assigned public IPv4 addresses.",
    "referenceLinks": [],
    "difficulty": "medium",
    "isUnscored": false,
    "tags": [
      "examtopics"
    ]
  },
  {
    "id": "et-108",
    "domainId": 2,
    "questionText": "Which AWS service allows users to download security and compliance reports about the AWS infrastructure on demand?",
    "questionType": "single_choice",
    "options": [
      {
        "id": "a",
        "text": "Amazon GuardDuty"
      },
      {
        "id": "b",
        "text": "AWS Security Hub"
      },
      {
        "id": "c",
        "text": "AWS Artifact"
      },
      {
        "id": "d",
        "text": "AWS Shield"
      }
    ],
    "correctAnswers": [
      "c"
    ],
    "explanation": "AWS Artifact is the central self-service portal providing on-demand access to AWS compliance reports (such as SOC 1/2/3 reports, PCI DSS certifications, and ISO certifications) and agreements. Amazon GuardDuty detects threats. AWS Security Hub gives a posture overview. AWS Shield mitigates DDoS attacks.",
    "referenceLinks": [],
    "difficulty": "medium",
    "isUnscored": false,
    "tags": [
      "examtopics"
    ]
  },
  {
    "id": "et-109",
    "domainId": 4,
    "questionText": "A pharmaceutical company operates its infrastructure in a single AWS Region. The company has thousands of VPCs in a various AWS accounts that it wants to interconnect.Which AWS service or feature should the company use to help simplify management and reduce operational costs?",
    "questionType": "single_choice",
    "options": [
      {
        "id": "a",
        "text": "VPC endpoint"
      },
      {
        "id": "b",
        "text": "AWS Direct Connect"
      },
      {
        "id": "c",
        "text": "AWS Transit Gateway"
      },
      {
        "id": "d",
        "text": "VPC peering"
      }
    ],
    "correctAnswers": [
      "c"
    ],
    "explanation": "AWS Transit Gateway acts as a central cloud router connecting thousands of Amazon VPCs and on-premises networks through a central hub. Using Transit Gateway simplifies network architecture and eliminates the operational complexity and cost of managing complex full-mesh VPC peering connections (where peering N VPCs requires N*(N-1)/2 connections).",
    "referenceLinks": [],
    "difficulty": "medium",
    "isUnscored": false,
    "tags": [
      "examtopics"
    ]
  },
  {
    "id": "et-110",
    "domainId": 4,
    "questionText": "A company is planning an infrastructure deployment to the AWS Cloud. Before the deployment, the company wants a cost estimate for running the infrastructure.Which AWS service or feature can provide this information?",
    "questionType": "single_choice",
    "options": [
      {
        "id": "a",
        "text": "Cost Explorer"
      },
      {
        "id": "b",
        "text": "AWS Trusted Advisor"
      },
      {
        "id": "c",
        "text": "AWS Cost and Usage Report"
      },
      {
        "id": "d",
        "text": "AWS Pricing Calculator"
      }
    ],
    "correctAnswers": [
      "d"
    ],
    "explanation": "The AWS Pricing Calculator is a free web-based planning tool that allows companies to model proposed architectures and estimate costs for running infrastructure on AWS before deploying. Cost Explorer and CUR analyze historical and actual spend after resources are created. Trusted Advisor inspects existing active workloads.",
    "referenceLinks": [],
    "difficulty": "medium",
    "isUnscored": false,
    "tags": [
      "examtopics"
    ]
  },
  {
    "id": "et-111",
    "domainId": 4,
    "questionText": "Which AWS service of tool helps to centrally manage billing and allow controlled access to resources across AWS accounts?",
    "questionType": "single_choice",
    "options": [
      {
        "id": "a",
        "text": "AWS Identity and Access Management (IAM)"
      },
      {
        "id": "b",
        "text": "AWS Organizations"
      },
      {
        "id": "c",
        "text": "Cost Explorer"
      },
      {
        "id": "d",
        "text": "AWS Budgets"
      }
    ],
    "correctAnswers": [
      "b"
    ],
    "explanation": "AWS Organizations enables centralized account management, consolidated billing across member accounts, and controlled access through Service Control Policies (SCPs). Consolidated billing combines charges across all accounts to maximize volume discounts and provide a single payment invoice. IAM manages users and roles within an account.",
    "referenceLinks": [],
    "difficulty": "medium",
    "isUnscored": false,
    "tags": [
      "examtopics"
    ]
  },
  {
    "id": "et-112",
    "domainId": 3,
    "questionText": "Which of the following are Amazon Virtual Private Cloud (Amazon VPC) resources?",
    "questionType": "single_choice",
    "options": [
      {
        "id": "a",
        "text": "Objects; access control lists (ACLs)"
      },
      {
        "id": "b",
        "text": "Subnets; internet gateways"
      },
      {
        "id": "c",
        "text": "Access policies; buckets"
      },
      {
        "id": "d",
        "text": "Groups; roles"
      }
    ],
    "correctAnswers": [
      "b"
    ],
    "explanation": "Subnets and Internet Gateways are fundamental networking resources of Amazon Virtual Private Cloud (Amazon VPC). A subnet is a segment of a VPC IP address range in a specific Availability Zone, and an Internet Gateway enables internet connectivity. Objects and buckets belong to S3; groups, roles, and access policies belong to IAM.",
    "referenceLinks": [],
    "difficulty": "medium",
    "isUnscored": false,
    "tags": [
      "examtopics"
    ]
  },
  {
    "id": "et-113",
    "domainId": 3,
    "questionText": "A company needs to identify the last time that a specific user accessed the AWS Management Console.Which AWS service will provide this information?",
    "questionType": "single_choice",
    "options": [
      {
        "id": "a",
        "text": "Amazon Cognito"
      },
      {
        "id": "b",
        "text": "AWS CloudTrail"
      },
      {
        "id": "c",
        "text": "Amazon Inspector"
      },
      {
        "id": "d",
        "text": "Amazon GuardDuty"
      }
    ],
    "correctAnswers": [
      "b"
    ],
    "explanation": "AWS CloudTrail tracks and logs all account activities, API calls, and console sign-in events (such as 'ConsoleLogin'), recording the timestamp, user identity, IP address, and status. Amazon Cognito manages customer app identities. Amazon Inspector scans for vulnerabilities. Amazon GuardDuty identifies security threats.",
    "referenceLinks": [],
    "difficulty": "medium",
    "isUnscored": false,
    "tags": [
      "examtopics"
    ]
  },
  {
    "id": "et-114",
    "domainId": 3,
    "questionText": "A company launched an Amazon EC2 instance with the latest Amazon Linux 2 Amazon Machine Image (AMI).Which actions can a system administrator take to connect to the EC2 instance? (Choose two.)",
    "questionType": "multiple_choice",
    "options": [
      {
        "id": "a",
        "text": "Use Amazon EC2 Instance Connect."
      },
      {
        "id": "b",
        "text": "Use a Remote Desktop Protocol (RDP) connection."
      },
      {
        "id": "c",
        "text": "Use AWS Batch"
      },
      {
        "id": "d",
        "text": "Use AWS Systems Manager Session Manager."
      },
      {
        "id": "e",
        "text": "Use Amazon Connect"
      }
    ],
    "correctAnswers": [
      "a",
      "d"
    ],
    "explanation": "To connect to an Amazon Linux 2 EC2 instance, administrators can use Amazon EC2 Instance Connect (a simple and secure browser-based SSH connection using temporary keys) or AWS Systems Manager Session Manager (which allows secure browser or CLI shell access without opening inbound SSH port 22 or managing bastion hosts). RDP is used for Windows instances. AWS Batch runs batch jobs. Amazon Connect is a contact center service.",
    "referenceLinks": [],
    "difficulty": "medium",
    "isUnscored": false,
    "tags": [
      "examtopics"
    ]
  },
  {
    "id": "et-115",
    "domainId": 3,
    "questionText": "A company wants to perform sentiment analysis on customer service email messages that it receives. The company wants to identify whether the customer service engagement was positive or negative.Which AWS service should the company use to perform this analysis?",
    "questionType": "single_choice",
    "options": [
      {
        "id": "a",
        "text": "Amazon Textract"
      },
      {
        "id": "b",
        "text": "Amazon Translate"
      },
      {
        "id": "c",
        "text": "Amazon Comprehend"
      },
      {
        "id": "d",
        "text": "Amazon Rekognition"
      }
    ],
    "correctAnswers": [
      "c"
    ],
    "explanation": "Amazon Comprehend is a natural language processing (NLP) service that uses machine learning to find insights and relationships in text, including performing sentiment analysis to determine whether customer communications are positive, negative, neutral, or mixed. Amazon Textract extracts printed and handwritten text. Amazon Translate translates languages. Amazon Rekognition analyzes images/videos.",
    "referenceLinks": [],
    "difficulty": "medium",
    "isUnscored": false,
    "tags": [
      "examtopics"
    ]
  },
  {
    "id": "et-116",
    "domainId": 3,
    "questionText": "What is the total amount of storage offered by Amazon S3?",
    "questionType": "single_choice",
    "options": [
      {
        "id": "a",
        "text": "100MB"
      },
      {
        "id": "b",
        "text": "5 GB"
      },
      {
        "id": "c",
        "text": "5 TB"
      },
      {
        "id": "d",
        "text": "Unlimited"
      }
    ],
    "correctAnswers": [
      "d"
    ],
    "explanation": "Amazon S3 offers virtually unlimited total storage capacity. You can store as many objects as you want in an S3 bucket. Individual objects can range from 0 bytes up to 5 TB in size.",
    "referenceLinks": [],
    "difficulty": "medium",
    "isUnscored": false,
    "tags": [
      "examtopics"
    ]
  },
  {
    "id": "et-117",
    "domainId": 3,
    "questionText": "A company is migrating to Amazon S3. The company needs to transfer 60 TB of data from an on-premises data center to AWS within 10 days.Which AWS service should the company use to accomplish this migration?",
    "questionType": "single_choice",
    "options": [
      {
        "id": "a",
        "text": "Amazon S3 Glacier"
      },
      {
        "id": "b",
        "text": "AWS Database Migration Service (AWS DMS)"
      },
      {
        "id": "c",
        "text": "AWS Snowball"
      },
      {
        "id": "d",
        "text": "AWS Direct Connect"
      }
    ],
    "correctAnswers": [
      "c"
    ],
    "explanation": "AWS Snowball is a petabyte-scale physical data transport device that allows you to securely transfer large amounts of data (such as 60 TB) between on-premises storage and Amazon S3 over several days, bypassing bandwidth limitations and congestion of the public internet. S3 Glacier is an archival storage tier. AWS DMS migrates database tables. Direct Connect takes weeks to provision physically.",
    "referenceLinks": [],
    "difficulty": "medium",
    "isUnscored": false,
    "tags": [
      "examtopics"
    ]
  },
  {
    "id": "et-118",
    "domainId": 3,
    "questionText": "What type of database is Amazon DynamoDB?",
    "questionType": "single_choice",
    "options": [
      {
        "id": "a",
        "text": "In-memory"
      },
      {
        "id": "b",
        "text": "Relational"
      },
      {
        "id": "c",
        "text": "Key-value"
      },
      {
        "id": "d",
        "text": "Graph"
      }
    ],
    "correctAnswers": [
      "c"
    ],
    "explanation": "Amazon DynamoDB is a fully managed, serverless NoSQL key-value and document database that delivers single-digit millisecond performance at any scale. Amazon ElastiCache is in-memory; Amazon RDS/Aurora are relational; Amazon Neptune is graph.",
    "referenceLinks": [],
    "difficulty": "medium",
    "isUnscored": false,
    "tags": [
      "examtopics"
    ]
  },
  {
    "id": "et-119",
    "domainId": 1,
    "questionText": "A large organization has a single AWS account.What are the advantages of reconfiguring the single account into multiple AWS accounts? (Choose two.)",
    "questionType": "multiple_choice",
    "options": [
      {
        "id": "a",
        "text": "It allows for administrative isolation between different workloads."
      },
      {
        "id": "b",
        "text": "Discounts can be applied on a quarterly basis by submitting cases in the AWS Management Console."
      },
      {
        "id": "c",
        "text": "Transitioning objects from Amazon S3 to Amazon S3 Glacier in separate AWS accounts will be less expensive."
      },
      {
        "id": "d",
        "text": "Having multiple accounts reduces the risks associated with malicious activity targeted at a single account."
      },
      {
        "id": "e",
        "text": "Amazon QuickSight offers access to a cost tool that provides application-specific recommendations for environments running in multiple accounts."
      }
    ],
    "correctAnswers": [
      "a",
      "d"
    ],
    "explanation": "Reconfiguring a single account into multiple AWS accounts provides administrative and security isolation between workloads and business units (limiting the 'blast radius' of any issue), and reduces risks associated with malicious activity or credential compromise targeted at a single account. Volume discounts are aggregated automatically through consolidated billing.",
    "referenceLinks": [],
    "difficulty": "medium",
    "isUnscored": false,
    "tags": [
      "examtopics"
    ]
  },
  {
    "id": "et-120",
    "domainId": 3,
    "questionText": "A retail company has recently migrated its website to AWS. The company wants to ensure that it is protected from SQL injection attacks. The website uses anApplication Load Balancer to distribute traffic to multiple Amazon EC2 instances.Which AWS service or feature can be used to create a custom rule that blocks SQL injection attacks?",
    "questionType": "single_choice",
    "options": [
      {
        "id": "a",
        "text": "Security groups"
      },
      {
        "id": "b",
        "text": "AWS WAF"
      },
      {
        "id": "c",
        "text": "Network ACLs"
      },
      {
        "id": "d",
        "text": "AWS Shield"
      }
    ],
    "correctAnswers": [
      "b"
    ],
    "explanation": "AWS WAF (Web Application Firewall) helps protect web applications and APIs from common web exploits and vulnerabilities, including SQL injection (SQLi) and Cross-Site Scripting (XSS), by deploying custom inspection rules on Application Load Balancers, Amazon CloudFront, or Amazon API Gateway. Security groups and NACLs operate at layers 3 and 4 and cannot inspect HTTP payload content.",
    "referenceLinks": [],
    "difficulty": "medium",
    "isUnscored": false,
    "tags": [
      "examtopics"
    ]
  },
  {
    "id": "et-121",
    "domainId": 3,
    "questionText": "Which AWS service provides a feature that can be used to proactively monitor and plan for the service quotas of AWS resources?",
    "questionType": "single_choice",
    "options": [
      {
        "id": "a",
        "text": "AWS CloudTrail"
      },
      {
        "id": "b",
        "text": "AWS Personal Health Dashboard"
      },
      {
        "id": "c",
        "text": "AWS Trusted Advisor"
      },
      {
        "id": "d",
        "text": "Amazon CloudWatch"
      }
    ],
    "correctAnswers": [
      "c"
    ],
    "explanation": "AWS Trusted Advisor includes service quota (limit) checks that proactively monitor your AWS resource usage against account service limits and alert you when usage exceeds 80% of a quota, helping you request limit increases before reaching capacity.",
    "referenceLinks": [],
    "difficulty": "medium",
    "isUnscored": false,
    "tags": [
      "examtopics"
    ]
  },
  {
    "id": "et-122",
    "domainId": 1,
    "questionText": "Which of the following is an advantage that users experience when they move on-premises workloads to the AWS Cloud?",
    "questionType": "single_choice",
    "options": [
      {
        "id": "a",
        "text": "Elimination of expenses for running and maintaining data centers"
      },
      {
        "id": "b",
        "text": "Price discounts that are identical to discounts from hardware providers"
      },
      {
        "id": "c",
        "text": "Distribution of all operational controls to AWS"
      },
      {
        "id": "d",
        "text": "Elimination of operational expenses"
      }
    ],
    "correctAnswers": [
      "a"
    ],
    "explanation": "Moving on-premises workloads to the AWS Cloud eliminates the capital and ongoing operating expenses associated with buying, running, powering, cooling, and maintaining physical data center facilities and hardware. Customers trade fixed data center costs for flexible variable cloud costs.",
    "referenceLinks": [],
    "difficulty": "medium",
    "isUnscored": false,
    "tags": [
      "examtopics"
    ]
  },
  {
    "id": "et-123",
    "domainId": 1,
    "questionText": "Which design principle is included in the operational excellence pillar of the AWS Well-Architected Framework?",
    "questionType": "single_choice",
    "options": [
      {
        "id": "a",
        "text": "Create annotated documentation."
      },
      {
        "id": "b",
        "text": "Anticipate failure."
      },
      {
        "id": "c",
        "text": "Ensure performance efficiency."
      },
      {
        "id": "d",
        "text": "Optimize costs."
      }
    ],
    "correctAnswers": [
      "b"
    ],
    "explanation": "The Operational Excellence pillar of the AWS Well-Architected Framework includes the design principle 'Anticipate failure'. Systems and teams should perform pre-mortem exercises to identify potential failure scenarios, test failure modes, and ensure operations can respond effectively to events.",
    "referenceLinks": [],
    "difficulty": "medium",
    "isUnscored": false,
    "tags": [
      "examtopics"
    ]
  },
  {
    "id": "et-124",
    "domainId": 3,
    "questionText": "Which AWS services offer gateway VPC endpoints that can be used to avoid sending traffic over the internet? (Choose two.)",
    "questionType": "multiple_choice",
    "options": [
      {
        "id": "a",
        "text": "Amazon Simple Notification Service (Amazon SNS)"
      },
      {
        "id": "b",
        "text": "Amazon Simple Queue Service (Amazon SQS)"
      },
      {
        "id": "c",
        "text": "AWS CodeBuild"
      },
      {
        "id": "d",
        "text": "Amazon S3"
      },
      {
        "id": "e",
        "text": "Amazon DynamoDB"
      }
    ],
    "correctAnswers": [
      "d",
      "e"
    ],
    "explanation": "Amazon S3 and Amazon DynamoDB are the two AWS services that support Gateway VPC Endpoints. A Gateway endpoint provides private routing from your VPC to S3 or DynamoDB without requiring an internet gateway, NAT device, or public IP addresses, at no extra cost. Other services use Interface Endpoints (powered by AWS PrivateLink).",
    "referenceLinks": [],
    "difficulty": "medium",
    "isUnscored": false,
    "tags": [
      "examtopics"
    ]
  },
  {
    "id": "et-125",
    "domainId": 1,
    "questionText": "Which of the following is the customer responsible for updating and patching, according to the AWS shared responsibility model?",
    "questionType": "single_choice",
    "options": [
      {
        "id": "a",
        "text": "Amazon FSx for Windows File Server"
      },
      {
        "id": "b",
        "text": "Amazon WorkSpaces virtual Windows desktop"
      },
      {
        "id": "c",
        "text": "AWS Directory Service for Microsoft Active Directory"
      },
      {
        "id": "d",
        "text": "Amazon RDS for Microsoft SQL Server"
      }
    ],
    "correctAnswers": [
      "b"
    ],
    "explanation": "Under the AWS shared responsibility model, Amazon WorkSpaces delivers a virtual desktop where the customer is responsible for managing, updating, and patching the guest Windows operating system and installed user applications. FSx, Directory Service, and RDS are managed services where AWS manages operating system maintenance.",
    "referenceLinks": [],
    "difficulty": "medium",
    "isUnscored": false,
    "tags": [
      "examtopics"
    ]
  },
  {
    "id": "et-126",
    "domainId": 1,
    "questionText": "Who has the responsibility to patch the host operating system of an Amazon EC2 instance, according to the AWS shared responsibility model?",
    "questionType": "single_choice",
    "options": [
      {
        "id": "a",
        "text": "Both AWS and the customer"
      },
      {
        "id": "b",
        "text": "The customer only"
      },
      {
        "id": "c",
        "text": "The EC2 hardware manufacturer"
      },
      {
        "id": "d",
        "text": "AWS only"
      }
    ],
    "correctAnswers": [
      "d"
    ],
    "explanation": "AWS is solely responsible for patching the host operating system, physical server hardware, and virtualization hypervisors that power Amazon EC2 instances ('security of the cloud'). The customer is responsible for patching the guest operating system installed inside their EC2 instances ('security in the cloud').",
    "referenceLinks": [],
    "difficulty": "medium",
    "isUnscored": false,
    "tags": [
      "examtopics"
    ]
  },
  {
    "id": "et-127",
    "domainId": 1,
    "questionText": "A company is using an Amazon RDS DB instance for an application that is deployed in the AWS Cloud. The company needs regular patching of the operating system of the server where the DB instance runs.What is the company's responsibility in this situation, according to the AWS shared responsibility model?",
    "questionType": "single_choice",
    "options": [
      {
        "id": "a",
        "text": "Open a support case to obtain administrative access to the server so that the company can patch the DB instance operating system."
      },
      {
        "id": "b",
        "text": "Open a support case and request that AWS patch the DB instance operating system."
      },
      {
        "id": "c",
        "text": "Use administrative access to the server, and apply the operating system patches during the regular maintenance window that is defined for the DB instance."
      },
      {
        "id": "d",
        "text": "Establish a regular maintenance window that tells AWS when to patch the DB instance operating system."
      }
    ],
    "correctAnswers": [
      "d"
    ],
    "explanation": "Amazon RDS is a managed service where AWS handles underlying operating system updates and database engine patching. The customer's responsibility is to define a preferred regular maintenance window in the RDS configuration, which specifies when AWS is authorized to apply necessary OS and database patches.",
    "referenceLinks": [],
    "difficulty": "medium",
    "isUnscored": false,
    "tags": [
      "examtopics"
    ]
  },
  {
    "id": "et-128",
    "domainId": 1,
    "questionText": "Why is an AWS Well-Architected review a critical part of the cloud design process?",
    "questionType": "single_choice",
    "options": [
      {
        "id": "a",
        "text": "A Well-Architected review is mandatory before a workload can run on AWS."
      },
      {
        "id": "b",
        "text": "A Well-Architected review helps identify design gaps and helps evaluate design decisions and related documents."
      },
      {
        "id": "c",
        "text": "A Well-Architected review is an audit mechanism that is a part of requirements for service level agreements."
      },
      {
        "id": "d",
        "text": "A Well-Architected review eliminates the need for ongoing auditing and compliance tests."
      }
    ],
    "correctAnswers": [
      "b"
    ],
    "explanation": "An AWS Well-Architected Review helps organizations identify architectural gaps, compare their architectures against AWS best practices across six pillars, and make informed architectural trade-offs to produce reliable and cost-effective cloud workloads. It is not a mandatory barrier or formal SLA legal audit.",
    "referenceLinks": [],
    "difficulty": "medium",
    "isUnscored": false,
    "tags": [
      "examtopics"
    ]
  },
  {
    "id": "et-129",
    "domainId": 1,
    "questionText": "A company implements an Amazon EC2 Auto Scaling policy along with an Application Load Balancer to automatically recover unhealthy applications that run onAmazon EC2 instances.Which pillar of the AWS Well-Architected Framework does this action cover?",
    "questionType": "single_choice",
    "options": [
      {
        "id": "a",
        "text": "Security"
      },
      {
        "id": "b",
        "text": "Performance efficiency"
      },
      {
        "id": "c",
        "text": "Operational excellence"
      },
      {
        "id": "d",
        "text": "Reliability"
      }
    ],
    "correctAnswers": [
      "d"
    ],
    "explanation": "The Reliability pillar focuses on workloads performing their intended functions correctly and recovering automatically from infrastructure or service disruptions. Combining EC2 Auto Scaling and an Application Load Balancer to automatically replace unhealthy instances directly implements automated recovery and self-healing.",
    "referenceLinks": [],
    "difficulty": "medium",
    "isUnscored": false,
    "tags": [
      "examtopics"
    ]
  },
  {
    "id": "et-130",
    "domainId": 1,
    "questionText": "Which AWS Cloud benefit is shown by an architecture's ability to withstand failures with minimal downtime?",
    "questionType": "single_choice",
    "options": [
      {
        "id": "a",
        "text": "Agility"
      },
      {
        "id": "b",
        "text": "Elasticity"
      },
      {
        "id": "c",
        "text": "Scalability"
      },
      {
        "id": "d",
        "text": "High availability"
      }
    ],
    "correctAnswers": [
      "d"
    ],
    "explanation": "High availability refers to an architecture's ability to remain operational and accessible with minimal to zero downtime, even when individual components fail, typically achieved by deploying redundant resources across multiple Availability Zones. Agility is speed of innovation; elasticity is dynamic scaling; scalability is handling increased load.",
    "referenceLinks": [],
    "difficulty": "medium",
    "isUnscored": false,
    "tags": [
      "examtopics"
    ]
  },
  {
    "id": "et-131",
    "domainId": 1,
    "questionText": "Under the AWS shared responsibility model, which task is the customer's responsibility when managing AWS Lambda functions?",
    "questionType": "single_choice",
    "options": [
      {
        "id": "a",
        "text": "Creating versions of Lambda functions"
      },
      {
        "id": "b",
        "text": "Maintaining server and operating systems"
      },
      {
        "id": "c",
        "text": "Scaling Lambda resources according to demand"
      },
      {
        "id": "d",
        "text": "Updating the Lambda runtime environment"
      }
    ],
    "correctAnswers": [
      "a"
    ],
    "explanation": "With AWS Lambda (a serverless compute service), AWS manages the physical servers, operating systems, hardware scaling, and underlying runtime maintenance. The customer is responsible for their own code, configurations, IAM execution roles, and creating/managing versions and aliases of Lambda functions.",
    "referenceLinks": [],
    "difficulty": "medium",
    "isUnscored": false,
    "tags": [
      "examtopics"
    ]
  },
  {
    "id": "et-132",
    "domainId": 4,
    "questionText": "What does the AWS Concierge Support team provide?",
    "questionType": "single_choice",
    "options": [
      {
        "id": "a",
        "text": "A technical expert dedicated to the user"
      },
      {
        "id": "b",
        "text": "A primary point of contact for AWS Billing and AWS Support"
      },
      {
        "id": "c",
        "text": "A partner to help provide scaling guidance for an event launch"
      },
      {
        "id": "d",
        "text": "A dedicated AWS staff member who reviews the user's application architecture"
      }
    ],
    "correctAnswers": [
      "b"
    ],
    "explanation": "The AWS Concierge Support team (included with Enterprise Support and Enterprise On-Ramp) is a senior customer service partner who acts as the primary point of contact for billing, invoicing, and account-related inquiries, helping customers analyze bills, navigate payment options, and manage account structures. Technical architectural guidance is provided by the TAM.",
    "referenceLinks": [],
    "difficulty": "medium",
    "isUnscored": false,
    "tags": [
      "examtopics"
    ]
  },
  {
    "id": "et-133",
    "domainId": 4,
    "questionText": "A company needs to generate reports that can break down cloud costs by product, by company-defined tags, and by hour, day, and month.Which AWS tool should the company use to meet these requirements?",
    "questionType": "single_choice",
    "options": [
      {
        "id": "a",
        "text": "Reserved Instance utilization and coverage reports"
      },
      {
        "id": "b",
        "text": "Savings Plans utilization reports"
      },
      {
        "id": "c",
        "text": "AWS Budgets reports"
      },
      {
        "id": "d",
        "text": "AWS Cost and Usage Reports"
      }
    ],
    "correctAnswers": [
      "d"
    ],
    "explanation": "AWS Cost and Usage Reports (AWS CUR) is the most detailed tool for cost reporting, delivering hourly, daily, or monthly billing data broken down by product, AWS resource ID, usage type, and custom cost allocation tags into an Amazon S3 bucket for analysis. AWS Budgets sets tracking thresholds.",
    "referenceLinks": [],
    "difficulty": "medium",
    "isUnscored": false,
    "tags": [
      "examtopics"
    ]
  },
  {
    "id": "et-134",
    "domainId": 3,
    "questionText": "A company has a serverless application that includes an Amazon API Gateway API, an AWS Lambda function, and an Amazon DynamoDB database.Which AWS service can the company use to trace user requests as they move through the application's components?",
    "questionType": "single_choice",
    "options": [
      {
        "id": "a",
        "text": "AWS CloudTrail"
      },
      {
        "id": "b",
        "text": "Amazon CloudWatch"
      },
      {
        "id": "c",
        "text": "Amazon Inspector"
      },
      {
        "id": "d",
        "text": "AWS X-Ray"
      }
    ],
    "correctAnswers": [
      "d"
    ],
    "explanation": "AWS X-Ray is an observability service that helps developers analyze and debug distributed and serverless applications (such as API Gateway, Lambda, and DynamoDB). It generates an end-to-end service map showing request paths, latencies, and bottlenecks as requests travel through application components.",
    "referenceLinks": [],
    "difficulty": "medium",
    "isUnscored": false,
    "tags": [
      "examtopics"
    ]
  },
  {
    "id": "et-135",
    "domainId": 3,
    "questionText": "A company needs to set up a petabyte-scale data warehouse in the AWS Cloud.Which AWS service will meet this requirement?",
    "questionType": "single_choice",
    "options": [
      {
        "id": "a",
        "text": "Amazon DynamoDB"
      },
      {
        "id": "b",
        "text": "Amazon RDS"
      },
      {
        "id": "c",
        "text": "Amazon Redshift"
      },
      {
        "id": "d",
        "text": "Amazon ElastiCache"
      }
    ],
    "correctAnswers": [
      "c"
    ],
    "explanation": "Amazon Redshift is a fast, fully managed, petabyte-scale cloud data warehouse service that uses columnar storage and massively parallel processing (MPP) to run complex analytical SQL queries against large structured and semi-structured datasets. DynamoDB is NoSQL OLTP; RDS is relational OLTP; ElastiCache is in-memory caching.",
    "referenceLinks": [],
    "difficulty": "medium",
    "isUnscored": false,
    "tags": [
      "examtopics"
    ]
  },
  {
    "id": "et-136",
    "domainId": 3,
    "questionText": "Which AWS service is always provided at no charge?",
    "questionType": "single_choice",
    "options": [
      {
        "id": "a",
        "text": "Amazon S3"
      },
      {
        "id": "b",
        "text": "AWS Identity and Access Management (IAM)"
      },
      {
        "id": "c",
        "text": "Elastic Load Balancers"
      },
      {
        "id": "d",
        "text": "AWS WAF"
      }
    ],
    "correctAnswers": [
      "b"
    ],
    "explanation": "AWS Identity and Access Management (IAM) is a foundational AWS security service provided at no additional charge. You can create users, groups, roles, and policies without incurring fees. Amazon S3 charges for storage/requests, Elastic Load Balancers charge for hourly usage and LCUs, and AWS WAF charges for web ACLs and inspected requests.",
    "referenceLinks": [],
    "difficulty": "medium",
    "isUnscored": false,
    "tags": [
      "examtopics"
    ]
  },
  {
    "id": "et-137",
    "domainId": 3,
    "questionText": "A company needs to design an AWS disaster recovery plan to cover multiple geographic areas.Which action will meet this requirement?",
    "questionType": "single_choice",
    "options": [
      {
        "id": "a",
        "text": "Configure multiple AWS accounts."
      },
      {
        "id": "b",
        "text": "Configure the architecture across multiple Availability Zones in an AWS Region."
      },
      {
        "id": "c",
        "text": "Configure the architecture across multiple AWS Regions."
      },
      {
        "id": "d",
        "text": "Configure the architecture among many edge locations."
      }
    ],
    "correctAnswers": [
      "c"
    ],
    "explanation": "To design a disaster recovery plan that covers multiple geographic areas and protects against regional disasters (such as natural disasters affecting an entire metropolitan region), the company must deploy its architecture across multiple AWS Regions. Availability Zones within a single Region are geographically close and could be affected by the same regional event.",
    "referenceLinks": [],
    "difficulty": "medium",
    "isUnscored": false,
    "tags": [
      "examtopics"
    ]
  },
  {
    "id": "et-138",
    "domainId": 1,
    "questionText": "Which of the following is a benefit of moving from an on-premises data center to the AWS Cloud?",
    "questionType": "single_choice",
    "options": [
      {
        "id": "a",
        "text": "Compute instances can be launched and terminated as needed to optimize costs."
      },
      {
        "id": "b",
        "text": "Compute costs can be viewed in the AWS Billing and Cost Management console."
      },
      {
        "id": "c",
        "text": "Users retain full administrative access to their compute instances."
      },
      {
        "id": "d",
        "text": "Users can optimize costs by permanently running enough instances at peak load."
      }
    ],
    "correctAnswers": [
      "a"
    ],
    "explanation": "A major benefit of moving to the AWS Cloud is elasticity and cost optimization: compute instances can be launched, scaled, and terminated on demand so you only pay for resources when needed, avoiding paying for over-provisioned idle hardware during non-peak hours.",
    "referenceLinks": [],
    "difficulty": "medium",
    "isUnscored": false,
    "tags": [
      "examtopics"
    ]
  },
  {
    "id": "et-139",
    "domainId": 4,
    "questionText": "In which ways does the AWS Cloud offer lower total cost of ownership (TCO) of computing resources than on-premises data centers? (Choose two.)",
    "questionType": "multiple_choice",
    "options": [
      {
        "id": "a",
        "text": "AWS replaces upfront capital expenditures with pay-as-you-go costs."
      },
      {
        "id": "b",
        "text": "AWS is designed for high availability, which eliminates user downtime."
      },
      {
        "id": "c",
        "text": "AWS eliminates the need for on-premises IT staff."
      },
      {
        "id": "d",
        "text": "AWS uses economies of scale to continually reduce prices."
      },
      {
        "id": "e",
        "text": "AWS offers a single pricing model for Amazon EC2 instances."
      }
    ],
    "correctAnswers": [
      "a",
      "d"
    ],
    "explanation": "AWS lowers total cost of ownership (TCO) by replacing large upfront capital expenditures (data center facilities, servers, storage arrays) with pay-as-you-go variable expenses, and by leveraging massive economies of scale to continuously lower prices for cloud services. TCO is also lowered by reducing hardware maintenance and facilities costs.",
    "referenceLinks": [],
    "difficulty": "medium",
    "isUnscored": false,
    "tags": [
      "examtopics"
    ]
  },
  {
    "id": "et-140",
    "domainId": 2,
    "questionText": "Which AWS service monitors AWS accounts for security threats?",
    "questionType": "single_choice",
    "options": [
      {
        "id": "a",
        "text": "Amazon GuardDuty"
      },
      {
        "id": "b",
        "text": "AWS Secrets Manager"
      },
      {
        "id": "c",
        "text": "Amazon Cognito"
      },
      {
        "id": "d",
        "text": "AWS Certificate Manager (ACM)"
      }
    ],
    "correctAnswers": [
      "a"
    ],
    "explanation": "Amazon GuardDuty is an intelligent threat detection service that continuously monitors AWS accounts, workloads, and data stored in Amazon S3 for malicious activities, unauthorized behavior, and compromised credentials by analyzing VPC Flow Logs, CloudTrail management events, S3 data events, and DNS query logs.",
    "referenceLinks": [],
    "difficulty": "medium",
    "isUnscored": false,
    "tags": [
      "examtopics"
    ]
  },
  {
    "id": "et-141",
    "domainId": 4,
    "questionText": "Which benefit is included with an AWS Enterprise Support plan?",
    "questionType": "single_choice",
    "options": [
      {
        "id": "a",
        "text": "AWS Partner Network (APN) support at no cost."
      },
      {
        "id": "b",
        "text": "Designated support from an AWS technical account manager (TAM)"
      },
      {
        "id": "c",
        "text": "On-site support from AWS engineers"
      },
      {
        "id": "d",
        "text": "AWS managed compliance as code with AWS Config"
      }
    ],
    "correctAnswers": [
      "b"
    ],
    "explanation": "AWS Enterprise Support includes designated support from an AWS Technical Account Manager (TAM), who provides proactive architectural reviews, operational health checks, and ongoing advocacy within AWS. Enterprise Support also includes 24/7 technical support with 15-minute response times for critical issues and Concierge billing support.",
    "referenceLinks": [],
    "difficulty": "medium",
    "isUnscored": false,
    "tags": [
      "examtopics"
    ]
  },
  {
    "id": "et-142",
    "domainId": 3,
    "questionText": "Which task does AWS perform automatically?",
    "questionType": "single_choice",
    "options": [
      {
        "id": "a",
        "text": "Encrypt data that is stored in Amazon DynamoDB."
      },
      {
        "id": "b",
        "text": "Patch Amazon EC2 instances."
      },
      {
        "id": "c",
        "text": "Encrypt user network traffic."
      },
      {
        "id": "d",
        "text": "Create TLS certificates for users' websites."
      }
    ],
    "correctAnswers": [
      "a"
    ],
    "explanation": "AWS automatically encrypts all data stored in Amazon DynamoDB at rest by default using AWS Key Management Service (AWS KMS) customer master keys, with no additional configuration required. EC2 instance OS patching, user network traffic encryption, and website TLS certificate creation require customer initiation.",
    "referenceLinks": [],
    "difficulty": "medium",
    "isUnscored": false,
    "tags": [
      "examtopics"
    ]
  },
  {
    "id": "et-143",
    "domainId": 3,
    "questionText": "Which AWS service or tool can a company use to visualize, understand, and manage AWS spending and usage over time?",
    "questionType": "single_choice",
    "options": [
      {
        "id": "a",
        "text": "AWS Trusted Advisor"
      },
      {
        "id": "b",
        "text": "Amazon CloudWatch"
      },
      {
        "id": "c",
        "text": "Cost Explorer"
      },
      {
        "id": "d",
        "text": "AWS Budgets"
      }
    ],
    "correctAnswers": [
      "c"
    ],
    "explanation": "AWS Cost Explorer is a tool that allows you to visualize, understand, and manage your AWS costs and usage over time through interactive dashboards, historical charts (up to 14 months), and spending forecasts. Trusted Advisor provides best-practice recommendations; CloudWatch monitors operational performance; Budgets sends alerts based on defined thresholds.",
    "referenceLinks": [],
    "difficulty": "medium",
    "isUnscored": false,
    "tags": [
      "examtopics"
    ]
  },
  {
    "id": "et-144",
    "domainId": 3,
    "questionText": "A company wants to deploy some of its resources in the AWS Cloud. To meet regulatory requirements, the data must remain local and on premises. There must be low latency between AWS and the company resources.Which AWS service or feature can be used to meet these requirements?",
    "questionType": "single_choice",
    "options": [
      {
        "id": "a",
        "text": "AWS Local Zones"
      },
      {
        "id": "b",
        "text": "Availability Zones"
      },
      {
        "id": "c",
        "text": "AWS Outposts"
      },
      {
        "id": "d",
        "text": "AWS Wavelength Zones"
      }
    ],
    "correctAnswers": [
      "c"
    ],
    "explanation": "AWS Outposts brings native AWS infrastructure, services, and APIs directly to the customer's on-premises facility or data center. This satisfies strict regulatory data residency requirements (keeping data physically on premises) while delivering single-digit millisecond latency to local systems and applications.",
    "referenceLinks": [],
    "difficulty": "medium",
    "isUnscored": false,
    "tags": [
      "examtopics"
    ]
  },
  {
    "id": "et-145",
    "domainId": 2,
    "questionText": "A company requires an isolated environment within AWS for security purposes.Which action can be taken to accomplish this?",
    "questionType": "single_choice",
    "options": [
      {
        "id": "a",
        "text": "Create a separate Availability Zone to host the resources."
      },
      {
        "id": "b",
        "text": "Create a separate VPC to host the resources."
      },
      {
        "id": "c",
        "text": "Create a placement group to host the resources."
      },
      {
        "id": "d",
        "text": "Create an AWS Direct Connect connection between the company and AWS."
      }
    ],
    "correctAnswers": [
      "b"
    ],
    "explanation": "An Amazon Virtual Private Cloud (Amazon VPC) enables you to provision a logically isolated section of the AWS Cloud where you can launch AWS resources in a virtual network that you define, complete with control over IP ranges, subnets, route tables, and network gateways. Availability Zones are physical locations within a Region, not isolated networks.",
    "referenceLinks": [],
    "difficulty": "medium",
    "isUnscored": false,
    "tags": [
      "examtopics"
    ]
  },
  {
    "id": "et-146",
    "domainId": 3,
    "questionText": "Which AWS service is a highly available and scalable DNS web service?",
    "questionType": "single_choice",
    "options": [
      {
        "id": "a",
        "text": "Amazon VPC"
      },
      {
        "id": "b",
        "text": "Amazon CloudFront"
      },
      {
        "id": "c",
        "text": "Amazon Route 53"
      },
      {
        "id": "d",
        "text": "Amazon Connect"
      }
    ],
    "correctAnswers": [
      "c"
    ],
    "explanation": "Amazon Route 53 is a highly available, scalable cloud Domain Name System (DNS) web service designed to give developers and businesses an extremely reliable and cost-effective way to route end users to internet applications by translating names like www.example.com into numeric IP addresses. Amazon VPC is virtual networking; CloudFront is a CDN; Amazon Connect is a contact center service.",
    "referenceLinks": [],
    "difficulty": "medium",
    "isUnscored": false,
    "tags": [
      "examtopics"
    ]
  },
  {
    "id": "et-147",
    "domainId": 3,
    "questionText": "Which of the following is an AWS best practice for managing an AWS account root user?",
    "questionType": "single_choice",
    "options": [
      {
        "id": "a",
        "text": "Keep the root user password with the security team."
      },
      {
        "id": "b",
        "text": "Enable multi-factor authentication (MFA) for the root user."
      },
      {
        "id": "c",
        "text": "Create an access key for the root user."
      },
      {
        "id": "d",
        "text": "Keep the root user password consistent for compliance purposes."
      }
    ],
    "correctAnswers": [
      "b"
    ],
    "explanation": "An AWS best practice for securing the AWS account root user is to enable Multi-Factor Authentication (MFA) immediately, preferably using a hardware MFA device or authenticator app. Furthermore, you should never create access keys for the root user, use the root user only for tasks that strictly require it, and create individual IAM administrative users for everyday tasks.",
    "referenceLinks": [],
    "difficulty": "medium",
    "isUnscored": false,
    "tags": [
      "examtopics"
    ]
  },
  {
    "id": "et-148",
    "domainId": 2,
    "questionText": "A company wants to improve its security and audit posture by limiting Amazon EC2 inbound access.What should the company use to access instances remotely instead of opening inbound SSH ports and managing SSH keys?",
    "questionType": "single_choice",
    "options": [
      {
        "id": "a",
        "text": "EC2 key pairs"
      },
      {
        "id": "b",
        "text": "AWS Systems Manager Session Manager"
      },
      {
        "id": "c",
        "text": "AWS Identity and Access Management (IAM)"
      },
      {
        "id": "d",
        "text": "Network ACLs"
      }
    ],
    "correctAnswers": [
      "b"
    ],
    "explanation": "AWS Systems Manager Session Manager provides secure and auditable instance management without needing to open inbound SSH ports (port 22), manage SSH key pairs, or use bastion hosts. Access is controlled via IAM policies, and session activity can be logged to Amazon S3 or CloudWatch Logs.",
    "referenceLinks": [],
    "difficulty": "medium",
    "isUnscored": false,
    "tags": [
      "examtopics"
    ]
  },
  {
    "id": "et-149",
    "domainId": 4,
    "questionText": "After selecting an Amazon EC2 Dedicated Host reservation, which pricing option would provide the largest discount?",
    "questionType": "single_choice",
    "options": [
      {
        "id": "a",
        "text": "No upfront payment"
      },
      {
        "id": "b",
        "text": "Hourly on-demand payment"
      },
      {
        "id": "c",
        "text": "Partial upfront payment"
      },
      {
        "id": "d",
        "text": "All upfront payment"
      }
    ],
    "correctAnswers": [
      "d"
    ],
    "explanation": "When purchasing an Amazon EC2 Dedicated Host reservation, paying the entire commitment with the 'All Upfront' payment option provides the largest discount compared to Partial Upfront or No Upfront payment options because paying 100% upfront maximizes the financial discount offered by AWS.",
    "referenceLinks": [],
    "difficulty": "medium",
    "isUnscored": false,
    "tags": [
      "examtopics"
    ]
  },
  {
    "id": "et-150",
    "domainId": 4,
    "questionText": "A company has refined its workload to use specific AWS services to improve efficiency and reduce cost.Which best practice for cost governance does this example show?",
    "questionType": "single_choice",
    "options": [
      {
        "id": "a",
        "text": "Resource controls"
      },
      {
        "id": "b",
        "text": "Cost allocation"
      },
      {
        "id": "c",
        "text": "Architecture optimization"
      },
      {
        "id": "d",
        "text": "Tagging enforcement"
      }
    ],
    "correctAnswers": [
      "c"
    ],
    "explanation": "Architecture optimization is the cost governance best practice where workloads are intentionally re-architected or refined to utilize specific AWS services (such as serverless or managed services) and right-sized components to achieve higher operational efficiency and lower total costs.",
    "referenceLinks": [],
    "difficulty": "medium",
    "isUnscored": false,
    "tags": [
      "examtopics"
    ]
  },
  {
    "id": "et-151",
    "domainId": 3,
    "questionText": "A company would like to host its MySQL databases on AWS and maintain full control over the operating system, database installation, and configuration.Which AWS service should the company use to host the databases?",
    "questionType": "single_choice",
    "options": [
      {
        "id": "a",
        "text": "Amazon RDS"
      },
      {
        "id": "b",
        "text": "Amazon EC2"
      },
      {
        "id": "c",
        "text": "Amazon DynamoDB"
      },
      {
        "id": "d",
        "text": "Amazon Aurora"
      }
    ],
    "correctAnswers": [
      "b"
    ],
    "explanation": "Hosting a MySQL database on Amazon Elastic Compute Cloud (Amazon EC2) instances provides the customer with full administrative root control over the operating system, file system, database installation, and configuration parameters. In managed services like Amazon RDS or Aurora, AWS manages and restricts OS-level access.",
    "referenceLinks": [],
    "difficulty": "medium",
    "isUnscored": false,
    "tags": [
      "examtopics"
    ]
  },
  {
    "id": "et-152",
    "domainId": 3,
    "questionText": "How does the AWS global infrastructure offer high availability and fault tolerance to its users?",
    "questionType": "single_choice",
    "options": [
      {
        "id": "a",
        "text": "The AWS infrastructure is made up of multiple AWS Regions within various Availability Zones located in areas that have low flood risk, and are interconnected with low-latency networks and redundant power supplies."
      },
      {
        "id": "b",
        "text": "The AWS infrastructure consists of subnets containing various Availability Zones with multiple data centers located in the same geographic location."
      },
      {
        "id": "c",
        "text": "AWS allows users to choose AWS Regions and data centers so that users can select the closest data centers in different Regions."
      },
      {
        "id": "d",
        "text": "The AWS infrastructure consists of isolated AWS Regions with independent Availability Zones that are connected with low-latency networking and redundant power supplies."
      }
    ],
    "correctAnswers": [
      "d"
    ],
    "explanation": "The AWS global infrastructure consists of isolated AWS Regions worldwide, each containing multiple, physically independent Availability Zones (AZs) that are interconnected with private, redundant, high-bandwidth, low-latency fiber networking and redundant power supplies. This provides fault tolerance against individual data center disruptions.",
    "referenceLinks": [],
    "difficulty": "medium",
    "isUnscored": false,
    "tags": [
      "examtopics"
    ]
  },
  {
    "id": "et-153",
    "domainId": 1,
    "questionText": "A company is using Amazon EC2 Auto Scaling to scale its Amazon EC2 instances.Which benefit of the AWS Cloud does this example illustrate?",
    "questionType": "single_choice",
    "options": [
      {
        "id": "a",
        "text": "High availability"
      },
      {
        "id": "b",
        "text": "Elasticity"
      },
      {
        "id": "c",
        "text": "Reliability"
      },
      {
        "id": "d",
        "text": "Global reach"
      }
    ],
    "correctAnswers": [
      "b"
    ],
    "explanation": "Elasticity is the cloud benefit that enables infrastructure to automatically scale capacity up and down to match dynamic demand patterns. Amazon EC2 Auto Scaling automatically adjusts the number of EC2 instances in response to changing traffic demands, embodying elasticity.",
    "referenceLinks": [],
    "difficulty": "medium",
    "isUnscored": false,
    "tags": [
      "examtopics"
    ]
  },
  {
    "id": "et-154",
    "domainId": 3,
    "questionText": "Which AWS service or feature is used to send both text and email messages from distributed applications?",
    "questionType": "single_choice",
    "options": [
      {
        "id": "a",
        "text": "Amazon Simple Notification Service (Amazon SNS)"
      },
      {
        "id": "b",
        "text": "Amazon Simple Email Service (Amazon SES)"
      },
      {
        "id": "c",
        "text": "Amazon CloudWatch alerts"
      },
      {
        "id": "d",
        "text": "Amazon Simple Queue Service (Amazon SQS)"
      }
    ],
    "correctAnswers": [
      "a"
    ],
    "explanation": "Amazon Simple Notification Service (Amazon SNS) is a fully managed publish/subscribe messaging service that enables distributed applications to fan out notifications, including sending both SMS text messages and email messages (as well as push notifications) to end-user subscribers. Amazon SES is for email only; CloudWatch alerts trigger SNS; SQS is a message queue for polling.",
    "referenceLinks": [],
    "difficulty": "medium",
    "isUnscored": false,
    "tags": [
      "examtopics"
    ]
  },
  {
    "id": "et-155",
    "domainId": 4,
    "questionText": "A user is able to set up a master payer account to view consolidated billing reports through:",
    "questionType": "single_choice",
    "options": [
      {
        "id": "a",
        "text": "AWS Budgets."
      },
      {
        "id": "b",
        "text": "Amazon Macie."
      },
      {
        "id": "c",
        "text": "Amazon QuickSight."
      },
      {
        "id": "d",
        "text": "AWS Organizations."
      }
    ],
    "correctAnswers": [
      "d"
    ],
    "explanation": "AWS Organizations enables customers to designate a management account (formerly known as a master payer account) to view consolidated billing reports, receive a single combined monthly invoice, and benefit from aggregated volume discounts across all member accounts.",
    "referenceLinks": [],
    "difficulty": "medium",
    "isUnscored": false,
    "tags": [
      "examtopics"
    ]
  },
  {
    "id": "et-156",
    "domainId": 1,
    "questionText": "According to the AWS shared responsibility model, which task is the customer's responsibility?",
    "questionType": "single_choice",
    "options": [
      {
        "id": "a",
        "text": "Maintaining the infrastructure needed to run AWS Lambda"
      },
      {
        "id": "b",
        "text": "Updating the operating system of Amazon DynamoDB instances"
      },
      {
        "id": "c",
        "text": "Maintaining Amazon S3 infrastructure"
      },
      {
        "id": "d",
        "text": "Updating the guest operating system on Amazon EC2 instances"
      }
    ],
    "correctAnswers": [
      "d"
    ],
    "explanation": "Under the AWS shared responsibility model, the customer is responsible for managing and updating the guest operating system on Amazon EC2 instances, including applying security patches, antivirus updates, and configuration management. For managed services like Lambda, DynamoDB, and S3, AWS manages the underlying OS and infrastructure.",
    "referenceLinks": [],
    "difficulty": "medium",
    "isUnscored": false,
    "tags": [
      "examtopics"
    ]
  },
  {
    "id": "et-157",
    "domainId": 4,
    "questionText": "A company wants to migrate a small website and database quickly from on-premises infrastructure to the AWS Cloud. The company has limited operational knowledge to perform the migration.Which AWS service supports this use case?",
    "questionType": "single_choice",
    "options": [
      {
        "id": "a",
        "text": "Amazon EC2"
      },
      {
        "id": "b",
        "text": "Amazon Lightsail"
      },
      {
        "id": "c",
        "text": "Amazon S3"
      },
      {
        "id": "d",
        "text": "AWS Lambda"
      }
    ],
    "correctAnswers": [
      "b"
    ],
    "explanation": "Amazon Lightsail is designed to be the easiest, most cost-effective way for users with limited cloud operational experience to quickly launch and manage small websites, web applications, and databases with pre-configured virtual private servers, storage, and networking for a predictable low monthly price. EC2 requires manual infrastructure management.",
    "referenceLinks": [],
    "difficulty": "medium",
    "isUnscored": false,
    "tags": [
      "examtopics"
    ]
  },
  {
    "id": "et-158",
    "domainId": 4,
    "questionText": "A company is moving multiple applications to a single AWS account. The company wants to monitor the AWS Cloud costs incurred by each application.What can the company do to meet this requirement?",
    "questionType": "single_choice",
    "options": [
      {
        "id": "a",
        "text": "Set up invoiced billing."
      },
      {
        "id": "b",
        "text": "Use AWS Artifact."
      },
      {
        "id": "c",
        "text": "Set budgets in Cost Explorer."
      },
      {
        "id": "d",
        "text": "Create cost allocation tags."
      }
    ],
    "correctAnswers": [
      "d"
    ],
    "explanation": "Creating cost allocation tags allows a company to label AWS resources with metadata (such as ApplicationName, Environment, or Project). Once activated in the Billing console, these tags appear in AWS Cost Explorer and Cost and Usage Reports to break down and monitor cloud spending on a per-application basis.",
    "referenceLinks": [],
    "difficulty": "medium",
    "isUnscored": false,
    "tags": [
      "examtopics"
    ]
  },
  {
    "id": "et-159",
    "domainId": 1,
    "questionText": "Which design principle is achieved by following the reliability pillar of the AWS Well-Architected Framework?",
    "questionType": "single_choice",
    "options": [
      {
        "id": "a",
        "text": "Vertical scaling"
      },
      {
        "id": "b",
        "text": "Manual failure recovery"
      },
      {
        "id": "c",
        "text": "Testing recovery procedures"
      },
      {
        "id": "d",
        "text": "Changing infrastructure manually"
      }
    ],
    "correctAnswers": [
      "c"
    ],
    "explanation": "Testing recovery procedures is a fundamental design principle of the Reliability pillar of the AWS Well-Architected Framework. In the cloud, you can simulate different failure modes or validate recovery procedures using automation to uncover flaws before a real disaster occurs. Manual changes and vertical scaling reduce reliability.",
    "referenceLinks": [],
    "difficulty": "medium",
    "isUnscored": false,
    "tags": [
      "examtopics"
    ]
  },
  {
    "id": "et-160",
    "domainId": 3,
    "questionText": "A user needs to quickly deploy a non-relational database on AWS. The user does not want to manage the underlying hardware or the database software.Which AWS service can be used to accomplish this?",
    "questionType": "single_choice",
    "options": [
      {
        "id": "a",
        "text": "Amazon RDS"
      },
      {
        "id": "b",
        "text": "Amazon DynamoDB"
      },
      {
        "id": "c",
        "text": "Amazon Aurora"
      },
      {
        "id": "d",
        "text": "Amazon Redshift"
      }
    ],
    "correctAnswers": [
      "b"
    ],
    "explanation": "Amazon DynamoDB is a fully managed, serverless, non-relational (NoSQL) key-value and document database service. It eliminates the need to provision, patch, or manage underlying hardware, servers, or database software. Amazon RDS and Aurora are relational databases; Redshift is an analytical data warehouse.",
    "referenceLinks": [],
    "difficulty": "medium",
    "isUnscored": false,
    "tags": [
      "examtopics"
    ]
  },
  {
    "id": "et-161",
    "domainId": 3,
    "questionText": "Which task is an AWS responsibility when a workload is running in Amazon RDS?",
    "questionType": "single_choice",
    "options": [
      {
        "id": "a",
        "text": "Creating the database table"
      },
      {
        "id": "b",
        "text": "Updating the database schema"
      },
      {
        "id": "c",
        "text": "Installing the database engine"
      },
      {
        "id": "d",
        "text": "Dropping the database records"
      }
    ],
    "correctAnswers": [
      "c"
    ],
    "explanation": "Under the AWS shared responsibility model for Amazon RDS, AWS is responsible for installing the database engine, managing hardware, applying OS patches, and taking automated backups. The customer is responsible for managing database user permissions, creating tables, defining schemas, and optimizing queries.",
    "referenceLinks": [],
    "difficulty": "medium",
    "isUnscored": false,
    "tags": [
      "examtopics"
    ]
  },
  {
    "id": "et-162",
    "domainId": 3,
    "questionText": "A development team wants to publish and manage web services that provide REST APIs.Which AWS service will meet this requirement?",
    "questionType": "single_choice",
    "options": [
      {
        "id": "a",
        "text": "AWS App Mesh"
      },
      {
        "id": "b",
        "text": "Amazon API Gateway"
      },
      {
        "id": "c",
        "text": "Amazon CloudFront"
      },
      {
        "id": "d",
        "text": "AWS Cloud Map"
      }
    ],
    "correctAnswers": [
      "b"
    ],
    "explanation": "Amazon API Gateway is a fully managed service that makes it easy for developers to create, publish, maintain, monitor, and secure REST, HTTP, and WebSocket APIs at any scale, handling traffic management, authorization, access control, monitoring, and API versioning.",
    "referenceLinks": [],
    "difficulty": "medium",
    "isUnscored": false,
    "tags": [
      "examtopics"
    ]
  },
  {
    "id": "et-163",
    "domainId": 3,
    "questionText": "A company has a social media platform in which users upload and share photos with other users. The company wants to identify and remove inappropriate photos. The company has no machine learning (ML) scientists and must build this detection capability with no ML expertise.Which AWS service should the company use to build this capability?",
    "questionType": "single_choice",
    "options": [
      {
        "id": "a",
        "text": "Amazon SageMaker"
      },
      {
        "id": "b",
        "text": "Amazon Textract"
      },
      {
        "id": "c",
        "text": "Amazon Rekognition"
      },
      {
        "id": "d",
        "text": "Amazon Comprehend"
      }
    ],
    "correctAnswers": [
      "c"
    ],
    "explanation": "Amazon Rekognition is a fully managed machine learning service for image and video analysis that requires no machine learning expertise. It includes pre-trained computer vision models capable of automatically identifying inappropriate, unwanted, or offensive visual content (content moderation) in uploaded photos. SageMaker is a developer platform for building custom models.",
    "referenceLinks": [],
    "difficulty": "medium",
    "isUnscored": false,
    "tags": [
      "examtopics"
    ]
  },
  {
    "id": "et-164",
    "domainId": 3,
    "questionText": "Which responsibility belongs to AWS when a company hosts its databases on Amazon EC2 instances?",
    "questionType": "single_choice",
    "options": [
      {
        "id": "a",
        "text": "Database backups"
      },
      {
        "id": "b",
        "text": "Database software patches"
      },
      {
        "id": "c",
        "text": "Operating system patches"
      },
      {
        "id": "d",
        "text": "Operating system installations."
      }
    ],
    "correctAnswers": [
      "d"
    ],
    "explanation": "When a company hosts databases on Amazon EC2 instances, AWS is responsible for the physical host infrastructure, data center security, virtualization hypervisor, and providing the base operating system installation images (AMIs). The customer is responsible for ongoing operating system patching, database software installation, patching, backups, and security.",
    "referenceLinks": [],
    "difficulty": "medium",
    "isUnscored": false,
    "tags": [
      "examtopics"
    ]
  },
  {
    "id": "et-165",
    "domainId": 4,
    "questionText": "A company wants to use Amazon S3 to store its legacy data. The data is rarely accessed. However, the data is critical and cannot be recreated. The data needs to be available for retrieval within seconds.Which S3 storage class meets these requirements MOST cost-effectively?",
    "questionType": "single_choice",
    "options": [
      {
        "id": "a",
        "text": "S3 Standard"
      },
      {
        "id": "b",
        "text": "S3 One Zone-Infrequent Access (S3 One Zone-IA)"
      },
      {
        "id": "c",
        "text": "S3 Standard-Infrequent Access (S3 Standard-IA)"
      },
      {
        "id": "d",
        "text": "S3 Glacier"
      }
    ],
    "correctAnswers": [
      "c"
    ],
    "explanation": "Amazon S3 Standard-Infrequent Access (S3 Standard-IA) is designed for data that is accessed less frequently but requires rapid access within milliseconds when requested. It stores data redundantly across multiple Availability Zones, ensuring high durability (99.999999999%) for critical non-recreatable data at a lower storage price than S3 Standard. S3 One Zone-IA stores data in only one AZ, which risks data loss if that AZ is destroyed. S3 Glacier takes minutes to hours for retrieval.",
    "referenceLinks": [],
    "difficulty": "medium",
    "isUnscored": false,
    "tags": [
      "examtopics"
    ]
  },
  {
    "id": "et-166",
    "domainId": 4,
    "questionText": "An online retail company wants to migrate its on-premises workload to AWS. The company needs to automatically handle a seasonal workload increase in a cost- effective manner.Which AWS Cloud features will help the company meet this requirement? (Choose two.)",
    "questionType": "multiple_choice",
    "options": [
      {
        "id": "a",
        "text": "Cross-Region workload deployment"
      },
      {
        "id": "b",
        "text": "Pay-as-you-go pricing"
      },
      {
        "id": "c",
        "text": "Built-in AWS CloudTrail audit capabilities"
      },
      {
        "id": "d",
        "text": "Auto Scaling policies"
      },
      {
        "id": "e",
        "text": "Centralized logging"
      }
    ],
    "correctAnswers": [
      "b",
      "d"
    ],
    "explanation": "To handle seasonal workload increases in a cost-effective manner, an online retailer benefits from Auto Scaling policies (which automatically launch additional EC2 instances during peak demand and terminate them when traffic subsides) and Pay-as-you-go pricing (paying only for the extra instances during the active spike without buying permanent hardware).",
    "referenceLinks": [],
    "difficulty": "medium",
    "isUnscored": false,
    "tags": [
      "examtopics"
    ]
  },
  {
    "id": "et-167",
    "domainId": 3,
    "questionText": "Which AWS service helps developers use loose coupling and reliable messaging between microservices?",
    "questionType": "single_choice",
    "options": [
      {
        "id": "a",
        "text": "Elastic Load Balancing"
      },
      {
        "id": "b",
        "text": "Amazon Simple Notification Service (Amazon SNS)"
      },
      {
        "id": "c",
        "text": "Amazon CloudFront"
      },
      {
        "id": "d",
        "text": "Amazon Simple Queue Service (Amazon SQS)"
      }
    ],
    "correctAnswers": [
      "d"
    ],
    "explanation": "Amazon Simple Queue Service (Amazon SQS) is a fully managed message queuing service that enables asynchronous communication and loose coupling between microservices. It buffers messages reliably between producers and consumers, allowing them to scale and operate independently without direct point-to-point connections.",
    "referenceLinks": [],
    "difficulty": "medium",
    "isUnscored": false,
    "tags": [
      "examtopics"
    ]
  },
  {
    "id": "et-168",
    "domainId": 3,
    "questionText": "A company needs to build an application that uses AWS services. The application will be delivered to residents in European Counties. The company must abide by regional regulatory requirements.Which AWS service or program should the company use to determine which AWS services meet the regional requirements?",
    "questionType": "single_choice",
    "options": [
      {
        "id": "a",
        "text": "AWS Audit Manager"
      },
      {
        "id": "b",
        "text": "AWS Shield"
      },
      {
        "id": "c",
        "text": "AWS Compliance Program"
      },
      {
        "id": "d",
        "text": "AWS Artifact"
      }
    ],
    "correctAnswers": [
      "c"
    ],
    "explanation": "The AWS Compliance Program provides information on how AWS complies with international and regional security standards and regulatory requirements (such as GDPR, ISO 27001, SOC, HIPAA), enabling customers to determine which AWS services and regions meet their specific regional compliance needs. AWS Artifact provides downloadable compliance documents.",
    "referenceLinks": [],
    "difficulty": "medium",
    "isUnscored": false,
    "tags": [
      "examtopics"
    ]
  },
  {
    "id": "et-169",
    "domainId": 3,
    "questionText": "A company needs to implement identity management for a fleet of mobile apps that are running in the AWS Cloud.Which AWS service will meet this requirement?",
    "questionType": "single_choice",
    "options": [
      {
        "id": "a",
        "text": "Amazon Cognito"
      },
      {
        "id": "b",
        "text": "AWS Security Hub"
      },
      {
        "id": "c",
        "text": "AWS Shield"
      },
      {
        "id": "d",
        "text": "AWS WAF"
      }
    ],
    "correctAnswers": [
      "a"
    ],
    "explanation": "Amazon Cognito provides user identity management, authentication, and access control for web and mobile applications. It supports user pools for sign-up and sign-in, as well as identity pools to federate with social identity providers (like Apple, Google, Facebook) or enterprise SAML/OIDC identity systems to grant temporary AWS credentials.",
    "referenceLinks": [],
    "difficulty": "medium",
    "isUnscored": false,
    "tags": [
      "examtopics"
    ]
  },
  {
    "id": "et-170",
    "domainId": 4,
    "questionText": "A company needs an Amazon EC2 instance for a rightsized database server that must run constantly for 1 year.Which EC2 instance purchasing option will meet these requirements MOST cost-effectively?",
    "questionType": "single_choice",
    "options": [
      {
        "id": "a",
        "text": "Standard Reserved Instance"
      },
      {
        "id": "b",
        "text": "Convertible Reserved Instance"
      },
      {
        "id": "c",
        "text": "On-Demand Instance"
      },
      {
        "id": "d",
        "text": "Spot Instance"
      }
    ],
    "correctAnswers": [
      "a"
    ],
    "explanation": "For a rightsized database server that must run continuously for 1 year, a Standard Reserved Instance (RI) provides the highest discount (up to 72% over On-Demand rates) in exchange for a 1-year steady-state commitment. Convertible RIs provide flexibility to change instance families at a lower discount rate; Spot instances can be interrupted; On-Demand offers no commitment discount.",
    "referenceLinks": [],
    "difficulty": "medium",
    "isUnscored": false,
    "tags": [
      "examtopics"
    ]
  },
  {
    "id": "et-171",
    "domainId": 2,
    "questionText": "A company has multiple applications and is now building a new multi-tier application. The company will host the new application on Amazon EC2 instances. The company wants the network routing and traffic between the various applications to follow the security principle of least privilege.Which AWS service or feature should the company use to enforce this principle?",
    "questionType": "single_choice",
    "options": [
      {
        "id": "a",
        "text": "Security groups"
      },
      {
        "id": "b",
        "text": "AWS Shield"
      },
      {
        "id": "c",
        "text": "AWS Global Accelerator"
      },
      {
        "id": "d",
        "text": "AWS Direct Connect gateway"
      }
    ],
    "correctAnswers": [
      "a"
    ],
    "explanation": "Security groups act as virtual firewalls at the instance (ENI) level. In a multi-tier application, security groups can reference other security groups as their source (e.g., allowing inbound traffic to the database tier only from the security group of the web/app tier), enforcing the principle of least privilege network access across tiers.",
    "referenceLinks": [],
    "difficulty": "medium",
    "isUnscored": false,
    "tags": [
      "examtopics"
    ]
  },
  {
    "id": "et-172",
    "domainId": 2,
    "questionText": "A company's web application requires AWS credentials and authorizations to use an AWS service.Which IAM entity should the company use as best practice?",
    "questionType": "single_choice",
    "options": [
      {
        "id": "a",
        "text": "IAM role"
      },
      {
        "id": "b",
        "text": "IAM user"
      },
      {
        "id": "c",
        "text": "IAM group"
      },
      {
        "id": "d",
        "text": "IAM multi-factor authentication (MFA)"
      }
    ],
    "correctAnswers": [
      "a"
    ],
    "explanation": "An IAM role is an IAM identity with permission policies that determine what the role can and cannot do in AWS, but does not have permanent credentials. Instead, when an application assumes a role, AWS provides temporary, auto-rotated security credentials, which is the AWS security best practice for granting permissions to applications and services.",
    "referenceLinks": [],
    "difficulty": "medium",
    "isUnscored": false,
    "tags": [
      "examtopics"
    ]
  },
  {
    "id": "et-173",
    "domainId": 3,
    "questionText": "A company is creating a document that defines the operating system patch routine for all the company's systems.Which AWS resources should the company include in this document? (Choose two.)",
    "questionType": "multiple_choice",
    "options": [
      {
        "id": "a",
        "text": "Amazon EC2 instances"
      },
      {
        "id": "b",
        "text": "AWS Lambda functions"
      },
      {
        "id": "c",
        "text": "AWS Fargate tasks"
      },
      {
        "id": "d",
        "text": "Amazon RDS instances"
      },
      {
        "id": "e",
        "text": "Amazon Elastic Container Service (Amazon ECS) instances"
      }
    ],
    "correctAnswers": [
      "a",
      "e"
    ],
    "explanation": "The customer is responsible for operating system patching on Amazon EC2 instances and on Amazon Elastic Container Service (Amazon ECS) instances when using the EC2 launch type (where the customer manages the underlying container host VMs). With serverless compute like AWS Lambda and AWS Fargate, or managed databases like Amazon RDS, AWS manages OS patching.",
    "referenceLinks": [],
    "difficulty": "medium",
    "isUnscored": false,
    "tags": [
      "examtopics"
    ]
  },
  {
    "id": "et-174",
    "domainId": 3,
    "questionText": "Which AWS service or feature gives a company the ability to control incoming traffic and outgoing traffic for Amazon EC2 instances?",
    "questionType": "single_choice",
    "options": [
      {
        "id": "a",
        "text": "Security groups"
      },
      {
        "id": "b",
        "text": "Amazon Route 53"
      },
      {
        "id": "c",
        "text": "AWS Direct Connect"
      },
      {
        "id": "d",
        "text": "Amazon VPC"
      }
    ],
    "correctAnswers": [
      "a"
    ],
    "explanation": "Security groups control inbound and outbound network traffic for Amazon EC2 instances at the virtual network interface level. Security groups are stateful and allow you to specify allowable protocols, ports, and source/destination IP ranges or other security groups.",
    "referenceLinks": [],
    "difficulty": "medium",
    "isUnscored": false,
    "tags": [
      "examtopics"
    ]
  },
  {
    "id": "et-175",
    "domainId": 4,
    "questionText": "A company is starting to build its infrastructure in the AWS Cloud. The company wants access to technical support during business hours. The company also wants general architectural guidance as teams build and test new applications.Which AWS Support plan will meet these requirements at the LOWEST cost?",
    "questionType": "single_choice",
    "options": [
      {
        "id": "a",
        "text": "AWS Basic Support"
      },
      {
        "id": "b",
        "text": "AWS Developer Support"
      },
      {
        "id": "c",
        "text": "AWS Business Support"
      },
      {
        "id": "d",
        "text": "AWS Enterprise Support"
      }
    ],
    "correctAnswers": [
      "b"
    ],
    "explanation": "The AWS Developer Support plan is the lowest-cost paid support tier that provides business-hours email access to Cloud Support Associates for one primary contact, general architectural guidance, and a response time target of under 12 hours for client-side issues and under 24 hours for general guidance. Basic support offers no technical support cases.",
    "referenceLinks": [],
    "difficulty": "medium",
    "isUnscored": false,
    "tags": [
      "examtopics"
    ]
  },
  {
    "id": "et-176",
    "domainId": 3,
    "questionText": "A company is migrating its public website to AWS. The company wants to host the domain name for the website on AWS.Which AWS service should the company use to meet this requirement?",
    "questionType": "single_choice",
    "options": [
      {
        "id": "a",
        "text": "AWS Lambda"
      },
      {
        "id": "b",
        "text": "Amazon Route 53"
      },
      {
        "id": "c",
        "text": "Amazon CloudFront"
      },
      {
        "id": "d",
        "text": "AWS Direct Connect"
      }
    ],
    "correctAnswers": [
      "b"
    ],
    "explanation": "Amazon Route 53 is a highly available and scalable cloud Domain Name System (DNS) web service that also acts as a domain name registrar, allowing you to register and host domain names, manage DNS records, and route internet traffic to AWS and external web endpoints.",
    "referenceLinks": [],
    "difficulty": "medium",
    "isUnscored": false,
    "tags": [
      "examtopics"
    ]
  },
  {
    "id": "et-177",
    "domainId": 4,
    "questionText": "A company needs to evaluate its AWS environment and provide best practice recommendations in five categories: cost, performance, service limits, fault tolerance, and security.Which AWS service can the company use to meet these requirements?",
    "questionType": "single_choice",
    "options": [
      {
        "id": "a",
        "text": "AWS Shield"
      },
      {
        "id": "b",
        "text": "AWS WAF"
      },
      {
        "id": "c",
        "text": "AWS Trusted Advisor"
      },
      {
        "id": "d",
        "text": "AWS Service Catalog"
      }
    ],
    "correctAnswers": [
      "c"
    ],
    "explanation": "AWS Trusted Advisor is an online tool that inspects your AWS environment and provides real-time best practice recommendations across five key categories: Cost Optimization, Performance, Security, Fault Tolerance, and Service Limits. AWS Shield and WAF are security services; Service Catalog manages IT product catalogs.",
    "referenceLinks": [],
    "difficulty": "medium",
    "isUnscored": false,
    "tags": [
      "examtopics"
    ]
  },
  {
    "id": "et-178",
    "domainId": 3,
    "questionText": "Which AWS service provides the capability to view end-to-end performance metrics and troubleshoot distributed applications?",
    "questionType": "single_choice",
    "options": [
      {
        "id": "a",
        "text": "AWS Cloud9"
      },
      {
        "id": "b",
        "text": "AWS CodeStar"
      },
      {
        "id": "c",
        "text": "AWS Cloud Map"
      },
      {
        "id": "d",
        "text": "AWS X-Ray"
      }
    ],
    "correctAnswers": [
      "d"
    ],
    "explanation": "AWS X-Ray helps developers analyze and debug distributed applications, such as those built using a microservices architecture. It provides an end-to-end trace of user requests, visual service maps, and performance metrics to identify latency bottlenecks and errors across services.",
    "referenceLinks": [],
    "difficulty": "medium",
    "isUnscored": false,
    "tags": [
      "examtopics"
    ]
  },
  {
    "id": "et-179",
    "domainId": 4,
    "questionText": "Which cloud computing benefit does AWS demonstrate with its ability to offer lower variable costs as a result of high purchase volumes?",
    "questionType": "single_choice",
    "options": [
      {
        "id": "a",
        "text": "Pay-as-you-go pricing"
      },
      {
        "id": "b",
        "text": "High availability"
      },
      {
        "id": "c",
        "text": "Global reach"
      },
      {
        "id": "d",
        "text": "Economies of scale"
      }
    ],
    "correctAnswers": [
      "d"
    ],
    "explanation": "Economies of scale is the cloud computing benefit where AWS aggregates usage from hundreds of thousands of active customers, allowing AWS to purchase hardware and power at massive bulk discounts and operate at lower unit costs, which AWS passes along to customers in the form of lower variable pay-as-you-go pricing.",
    "referenceLinks": [],
    "difficulty": "medium",
    "isUnscored": false,
    "tags": [
      "examtopics"
    ]
  },
  {
    "id": "et-180",
    "domainId": 3,
    "questionText": "Which AWS service provides threat detection by monitoring for malicious activities and unauthorized actions to protect AWS accounts, workloads, and data that is stored in Amazon S3?",
    "questionType": "single_choice",
    "options": [
      {
        "id": "a",
        "text": "AWS Shield"
      },
      {
        "id": "b",
        "text": "AWS Firewall Manager"
      },
      {
        "id": "c",
        "text": "Amazon GuardDuty"
      },
      {
        "id": "d",
        "text": "Amazon Inspector"
      }
    ],
    "correctAnswers": [
      "c"
    ],
    "explanation": "Amazon GuardDuty is an intelligent threat detection service that continuously monitors for malicious activity, anomalous behavior, and unauthorized actions across AWS accounts, workloads (EC2 instances and container clusters), and data stored in Amazon S3 buckets using machine learning and integrated threat intelligence.",
    "referenceLinks": [],
    "difficulty": "medium",
    "isUnscored": false,
    "tags": [
      "examtopics"
    ]
  },
  {
    "id": "et-181",
    "domainId": 3,
    "questionText": "Which AWS service can a company use to store and manage Docker images?",
    "questionType": "single_choice",
    "options": [
      {
        "id": "a",
        "text": "Amazon DynamoDB"
      },
      {
        "id": "b",
        "text": "Amazon Kinesis Data Streams"
      },
      {
        "id": "c",
        "text": "Amazon Elastic Container Registry (Amazon ECR)"
      },
      {
        "id": "d",
        "text": "Amazon Elastic File System (Amazon EFS)"
      }
    ],
    "correctAnswers": [
      "c"
    ],
    "explanation": "Amazon Elastic Container Registry (Amazon ECR) is a fully managed container image registry that makes it easy for developers to securely store, manage, share, and deploy Docker container images. It integrates natively with Amazon ECS, Amazon EKS, and AWS Lambda.",
    "referenceLinks": [],
    "difficulty": "medium",
    "isUnscored": false,
    "tags": [
      "examtopics"
    ]
  },
  {
    "id": "et-182",
    "domainId": 2,
    "questionText": "A company needs an automated security assessment report that will identify unintended network access to Amazon EC2 instances. The report also must identify operating system vulnerabilities on those instances.Which AWS service or feature should the company use to meet this requirement?",
    "questionType": "single_choice",
    "options": [
      {
        "id": "a",
        "text": "AWS Trusted Advisor"
      },
      {
        "id": "b",
        "text": "Security groups"
      },
      {
        "id": "c",
        "text": "Amazon Macie"
      },
      {
        "id": "d",
        "text": "Amazon Inspector"
      }
    ],
    "correctAnswers": [
      "d"
    ],
    "explanation": "Amazon Inspector is an automated vulnerability management service that continually scans Amazon EC2 workloads for software vulnerabilities (CVEs) and unintended network exposure. It provides detailed assessment findings and remediation guidance. Trusted Advisor provides high-level checks; Macie scans S3 for PII.",
    "referenceLinks": [],
    "difficulty": "medium",
    "isUnscored": false,
    "tags": [
      "examtopics"
    ]
  },
  {
    "id": "et-183",
    "domainId": 3,
    "questionText": "A global company is building a simple time-tracking mobile app. The app needs to operate globally and must store collected data in a database. Data must be accessible from the AWS Region that is closest to the user.What should the company do to meet these data storage requirements with the LEAST amount of operational overhead?",
    "questionType": "single_choice",
    "options": [
      {
        "id": "a",
        "text": "Use Amazon EC2 in multiple Regions to host separate databases"
      },
      {
        "id": "b",
        "text": "Use Amazon RDS cross-Region replication"
      },
      {
        "id": "c",
        "text": "Use Amazon DynamoDB global tables"
      },
      {
        "id": "d",
        "text": "Use AWS Database Migration Service (AWS DMS)"
      }
    ],
    "correctAnswers": [
      "c"
    ],
    "explanation": "Amazon DynamoDB global tables provide a fully managed, multi-region, multi-active database solution that automatically replicates DynamoDB tables across chosen AWS Regions. It delivers local read and write performance for globally distributed users with the least amount of operational overhead because replication is handled transparently by AWS.",
    "referenceLinks": [],
    "difficulty": "medium",
    "isUnscored": false,
    "tags": [
      "examtopics"
    ]
  },
  {
    "id": "et-184",
    "domainId": 1,
    "questionText": "Which of the following are economic advantages of the AWS Cloud? (Choose two.)",
    "questionType": "multiple_choice",
    "options": [
      {
        "id": "a",
        "text": "Increased workforce productivity"
      },
      {
        "id": "b",
        "text": "Decreased need to encrypt user data"
      },
      {
        "id": "c",
        "text": "Manual compliance audits"
      },
      {
        "id": "d",
        "text": "Simplified total cost of ownership (TCO) accounting"
      },
      {
        "id": "e",
        "text": "Faster product launches"
      }
    ],
    "correctAnswers": [
      "a",
      "e"
    ],
    "explanation": "Economic advantages of moving to the AWS Cloud include increased workforce productivity (developers spend less time on infrastructure maintenance and more time building core business value) and faster product launches (enabling companies to experiment rapidly and deliver features to market faster). Compliance audits and data encryption are still required.",
    "referenceLinks": [],
    "difficulty": "medium",
    "isUnscored": false,
    "tags": [
      "examtopics"
    ]
  },
  {
    "id": "et-185",
    "domainId": 1,
    "questionText": "Which controls does the customer fully inherit from AWS in the AWS shared responsibility model?",
    "questionType": "single_choice",
    "options": [
      {
        "id": "a",
        "text": "Patch management controls"
      },
      {
        "id": "b",
        "text": "Awareness and training controls"
      },
      {
        "id": "c",
        "text": "Physical and environmental controls"
      },
      {
        "id": "d",
        "text": "Configuration management controls"
      }
    ],
    "correctAnswers": [
      "c"
    ],
    "explanation": "Under the AWS shared responsibility model, inherited controls are controls that the customer fully inherits from AWS. Physical and environmental controls of AWS data centers and facilities (such as biometric access, video surveillance, redundant power, and HVAC) are completely managed by AWS, and the customer inherits these protections without performing any maintenance.",
    "referenceLinks": [],
    "difficulty": "medium",
    "isUnscored": false,
    "tags": [
      "examtopics"
    ]
  },
  {
    "id": "et-186",
    "domainId": 1,
    "questionText": "Which task is a customer's responsibility, according to the AWS shared responsibility model?",
    "questionType": "single_choice",
    "options": [
      {
        "id": "a",
        "text": "Management of the guest operating systems"
      },
      {
        "id": "b",
        "text": "Maintenance of the configuration of infrastructure devices"
      },
      {
        "id": "c",
        "text": "Management of the host operating systems and virtualization"
      },
      {
        "id": "d",
        "text": "Maintenance of the software that powers Availability Zones"
      }
    ],
    "correctAnswers": [
      "a"
    ],
    "explanation": "According to the AWS shared responsibility model, managing the guest operating system (including installing security patches, OS configuration, and antivirus software) on Amazon EC2 instances is the customer's responsibility. AWS manages the host operating systems, virtualization layer, network hardware, and Availability Zone infrastructure.",
    "referenceLinks": [],
    "difficulty": "medium",
    "isUnscored": false,
    "tags": [
      "examtopics"
    ]
  },
  {
    "id": "et-187",
    "domainId": 3,
    "questionText": "A company needs to deliver new website features quickly in an iterative manner to minimize the time to market.Which AWS Cloud concept does this requirement represent?",
    "questionType": "single_choice",
    "options": [
      {
        "id": "a",
        "text": "Reliability"
      },
      {
        "id": "b",
        "text": "Elasticity"
      },
      {
        "id": "c",
        "text": "Agility"
      },
      {
        "id": "d",
        "text": "High availability"
      }
    ],
    "correctAnswers": [
      "c"
    ],
    "explanation": "Agility in the cloud refers to the ability to rapidly develop, test, and release application features and products in an iterative manner to reduce time to market. Cloud computing provides on-demand access to resources, enabling teams to experiment quickly and innovate without waiting for hardware procurement.",
    "referenceLinks": [],
    "difficulty": "medium",
    "isUnscored": false,
    "tags": [
      "examtopics"
    ]
  },
  {
    "id": "et-188",
    "domainId": 1,
    "questionText": "A company wants to increase its ability to recover its infrastructure in the case of a natural disaster.Which pillar of the AWS Well-Architected Framework does this ability represent?",
    "questionType": "single_choice",
    "options": [
      {
        "id": "a",
        "text": "Cost optimization"
      },
      {
        "id": "b",
        "text": "Performance efficiency"
      },
      {
        "id": "c",
        "text": "Reliability"
      },
      {
        "id": "d",
        "text": "Security"
      }
    ],
    "correctAnswers": [
      "c"
    ],
    "explanation": "The Reliability pillar of the AWS Well-Architected Framework encompasses the ability of a workload to perform its intended function correctly and consistently, which includes the ability to recover infrastructure and resume operations quickly in the case of a natural disaster or major outage (disaster recovery design).",
    "referenceLinks": [],
    "difficulty": "medium",
    "isUnscored": false,
    "tags": [
      "examtopics"
    ]
  },
  {
    "id": "et-189",
    "domainId": 3,
    "questionText": "Which AWS service tracks API calls and user activity?",
    "questionType": "single_choice",
    "options": [
      {
        "id": "a",
        "text": "AWS Organizations"
      },
      {
        "id": "b",
        "text": "AWS Config"
      },
      {
        "id": "c",
        "text": "Amazon CloudWatch"
      },
      {
        "id": "d",
        "text": "AWS CloudTrail"
      }
    ],
    "correctAnswers": [
      "d"
    ],
    "explanation": "AWS CloudTrail tracks, logs, and records API calls, user actions, and account activity across your AWS infrastructure, including actions taken through the AWS Management Console, AWS SDKs, and AWS CLI. Amazon CloudWatch monitors metrics and alarms; AWS Config tracks resource configurations and compliance history.",
    "referenceLinks": [],
    "difficulty": "medium",
    "isUnscored": false,
    "tags": [
      "examtopics"
    ]
  },
  {
    "id": "et-190",
    "domainId": 4,
    "questionText": "Which AWS service, feature, or tool uses machine learning to continuously monitor cost and usage for unusual cloud spending?",
    "questionType": "single_choice",
    "options": [
      {
        "id": "a",
        "text": "Amazon Lookout for Metrics"
      },
      {
        "id": "b",
        "text": "AWS Budgets"
      },
      {
        "id": "c",
        "text": "Amazon CloudWatch"
      },
      {
        "id": "d",
        "text": "AWS Cost Anomaly Detection"
      }
    ],
    "correctAnswers": [
      "d"
    ],
    "explanation": "AWS Cost Anomaly Detection is a cost management feature that uses advanced machine learning models to continually monitor your cost and usage patterns, detect unusual or anomalous cloud spending spikes, and identify root causes so you can take quick action to prevent unexpected charges.",
    "referenceLinks": [],
    "difficulty": "medium",
    "isUnscored": false,
    "tags": [
      "examtopics"
    ]
  }
];
