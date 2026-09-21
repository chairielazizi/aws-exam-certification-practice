import { Question } from '../types';

export const examtopicsPart1Questions: Question[] = [
  {
    "id": "et-11",
    "domainId": 4,
    "questionText": "A company wants to review its monthly costs of using Amazon EC2 and Amazon RDS for the past year.Which AWS service or tool provides this information?",
    "questionType": "single_choice",
    "options": [
      {
        "id": "a",
        "text": "AWS Trusted Advisor"
      },
      {
        "id": "b",
        "text": "Cost Explorer"
      },
      {
        "id": "c",
        "text": "Amazon Forecast"
      },
      {
        "id": "d",
        "text": "Amazon CloudWatch"
      }
    ],
    "correctAnswers": [
      "b"
    ],
    "explanation": "AWS Cost Explorer is the AWS tool that provides detailed visualization and analysis of your AWS costs and usage over time, including reviewing monthly costs of services like Amazon EC2 and Amazon RDS for up to the past 12-14 months. AWS Trusted Advisor offers best practice recommendations across cost optimization, security, and performance, but does not provide historical cost analysis charts. Amazon Forecast is an ML service for business forecasting (e.g., retail demand). Amazon CloudWatch monitors operational performance metrics and logs, not historical billing data.",
    "referenceLinks": [],
    "difficulty": "medium",
    "isUnscored": false,
    "tags": [
      "examtopics"
    ]
  },
  {
    "id": "et-12",
    "domainId": 4,
    "questionText": "A company wants to migrate a critical application to AWS. The application has a short runtime. The application is invoked by changes in data or by shifts in system state. The company needs a compute solution that maximizes operational efficiency and minimizes the cost of running the application.Which AWS solution should the company use to meet these requirements?",
    "questionType": "single_choice",
    "options": [
      {
        "id": "a",
        "text": "Amazon EC2 On-Demand Instances"
      },
      {
        "id": "b",
        "text": "AWS Lambda"
      },
      {
        "id": "c",
        "text": "Amazon EC2 Reserved Instances"
      },
      {
        "id": "d",
        "text": "Amazon EC2 Spot Instances"
      }
    ],
    "correctAnswers": [
      "b"
    ],
    "explanation": "AWS Lambda is a serverless compute service that runs code in response to events (such as changes in data or system state) for applications with short runtimes. It maximizes operational efficiency because you do not need to manage servers, and it minimizes cost because you only pay for the compute time consumed down to the millisecond with no idle costs. EC2 On-Demand, Reserved, and Spot instances require provisioning and maintaining virtual machine servers, incurring management overhead and idle costs.",
    "referenceLinks": [],
    "difficulty": "medium",
    "isUnscored": false,
    "tags": [
      "examtopics"
    ]
  },
  {
    "id": "et-13",
    "domainId": 3,
    "questionText": "Which AWS service or feature allows users to connect with and deploy AWS services programmatically?",
    "questionType": "single_choice",
    "options": [
      {
        "id": "a",
        "text": "AWS Management Console"
      },
      {
        "id": "b",
        "text": "AWS Cloud9"
      },
      {
        "id": "c",
        "text": "AWS CodePipeline"
      },
      {
        "id": "d",
        "text": "AWS software development kits (SDKs)"
      }
    ],
    "correctAnswers": [
      "d"
    ],
    "explanation": "AWS Software Development Kits (SDKs) provide language-specific APIs and libraries (e.g., for Python, Java, JavaScript) that enable developers to connect with, program, and deploy AWS services programmatically. AWS Management Console is a browser-based graphical user interface. AWS Cloud9 is a cloud-based integrated development environment (IDE). AWS CodePipeline is a continuous delivery service for automating release pipelines.",
    "referenceLinks": [],
    "difficulty": "medium",
    "isUnscored": false,
    "tags": [
      "examtopics"
    ]
  },
  {
    "id": "et-14",
    "domainId": 4,
    "questionText": "A company plans to create a data lake that uses Amazon S3.Which factor will have the MOST effect on cost?",
    "questionType": "single_choice",
    "options": [
      {
        "id": "a",
        "text": "The selection of S3 storage tiers"
      },
      {
        "id": "b",
        "text": "Charges to transfer existing data into Amazon S3"
      },
      {
        "id": "c",
        "text": "The addition of S3 bucket policies"
      },
      {
        "id": "d",
        "text": "S3 ingest fees for each request"
      }
    ],
    "correctAnswers": [
      "a"
    ],
    "explanation": "The selection of S3 storage tiers (such as S3 Standard, S3 Standard-IA, S3 One Zone-IA, S3 Glacier, and Glacier Deep Archive) has the largest impact on cost in a data lake because storage fees represent the primary recurring expense across large data volumes. Inbound data transfer into Amazon S3 from the internet is free. Adding bucket policies is free. Request charges are minimal compared to long-term storage capacity costs across petabytes of data.",
    "referenceLinks": [],
    "difficulty": "medium",
    "isUnscored": false,
    "tags": [
      "examtopics"
    ]
  },
  {
    "id": "et-15",
    "domainId": 4,
    "questionText": "A company is launching an ecommerce application that must always be available. The application will run on Amazon EC2 instances continuously for the next12 months.What is the MOST cost-effective instance purchasing option that meets these requirements?",
    "questionType": "single_choice",
    "options": [
      {
        "id": "a",
        "text": "Spot Instances"
      },
      {
        "id": "b",
        "text": "Savings Plans"
      },
      {
        "id": "c",
        "text": "Dedicated Hosts"
      },
      {
        "id": "d",
        "text": "On-Demand Instances"
      }
    ],
    "correctAnswers": [
      "b"
    ],
    "explanation": "Savings Plans offer significant savings (up to 72%) over On-Demand pricing in exchange for a commitment to a consistent amount of compute usage (measured in $/hour) for a 1- or 3-year period. Since the ecommerce application must run continuously for 12 months with high availability, Savings Plans provide the most cost-effective and reliable pricing model. Spot Instances can be terminated with 2 minutes notice and are unsuitable for continuous production workloads. Dedicated Hosts are for compliance/licensing and are significantly more expensive. On-Demand instances lack commitment discounts.",
    "referenceLinks": [],
    "difficulty": "medium",
    "isUnscored": false,
    "tags": [
      "examtopics"
    ]
  },
  {
    "id": "et-16",
    "domainId": 3,
    "questionText": "Which AWS service or feature can a company use to determine which business unit is using specific AWS resources?",
    "questionType": "single_choice",
    "options": [
      {
        "id": "a",
        "text": "Cost allocation tags"
      },
      {
        "id": "b",
        "text": "Key pairs"
      },
      {
        "id": "c",
        "text": "Amazon Inspector"
      },
      {
        "id": "d",
        "text": "AWS Trusted Advisor"
      }
    ],
    "correctAnswers": [
      "a"
    ],
    "explanation": "Cost allocation tags are key-value labels assigned to AWS resources that organize and track resource costs on a detailed level, such as by department, cost center, business unit, or environment. Key pairs are cryptographic keys used to securely connect to EC2 instances. Amazon Inspector is an automated vulnerability management service. AWS Trusted Advisor provides general architectural recommendations across 5 pillars.",
    "referenceLinks": [],
    "difficulty": "medium",
    "isUnscored": false,
    "tags": [
      "examtopics"
    ]
  },
  {
    "id": "et-17",
    "domainId": 3,
    "questionText": "A company wants to migrate its workloads to AWS, but it lacks expertise in AWS Cloud computing.Which AWS service or feature will help the company with its migration?",
    "questionType": "single_choice",
    "options": [
      {
        "id": "a",
        "text": "AWS Trusted Advisor"
      },
      {
        "id": "b",
        "text": "AWS Consulting Partners"
      },
      {
        "id": "c",
        "text": "AWS Artifacts"
      },
      {
        "id": "d",
        "text": "AWS Managed Services"
      }
    ],
    "correctAnswers": [
      "b"
    ],
    "explanation": "AWS Consulting Partners (now part of the AWS Partner Network - APN Services Partners) are professional services firms that help customers design, architect, build, migrate, and manage their workloads on AWS. AWS Trusted Advisor is an automated tool that provides recommendations, not migration execution. AWS Artifact provides compliance reports. AWS Managed Services (AMS) operates AWS infrastructure on behalf of enterprise customers, but partner consulting provides migration assistance and expertise.",
    "referenceLinks": [],
    "difficulty": "medium",
    "isUnscored": false,
    "tags": [
      "examtopics"
    ]
  },
  {
    "id": "et-18",
    "domainId": 3,
    "questionText": "Which AWS service or tool should a company use to centrally request and track service limit increases?",
    "questionType": "single_choice",
    "options": [
      {
        "id": "a",
        "text": "AWS Config"
      },
      {
        "id": "b",
        "text": "Service Quotas"
      },
      {
        "id": "c",
        "text": "AWS Service Catalog"
      },
      {
        "id": "d",
        "text": "AWS Budgets"
      }
    ],
    "correctAnswers": [
      "b"
    ],
    "explanation": "Service Quotas allows users to centrally view and manage quotas (service limits) for AWS services from a single console, as well as request and track quota increases across AWS accounts. AWS Config tracks resource configuration changes and compliance. AWS Service Catalog allows organizations to create and manage catalogs of approved IT services. AWS Budgets lets you set custom cost and usage budgets with alerts.",
    "referenceLinks": [],
    "difficulty": "medium",
    "isUnscored": false,
    "tags": [
      "examtopics"
    ]
  },
  {
    "id": "et-19",
    "domainId": 3,
    "questionText": "Which documentation does AWS Artifact provide?",
    "questionType": "single_choice",
    "options": [
      {
        "id": "a",
        "text": "Amazon EC2 terms and conditions"
      },
      {
        "id": "b",
        "text": "AWS ISO certifications"
      },
      {
        "id": "c",
        "text": "A history of a company's AWS spending"
      },
      {
        "id": "d",
        "text": "A list of previous-generation Amazon EC2 instance types"
      }
    ],
    "correctAnswers": [
      "b"
    ],
    "explanation": "AWS Artifact is AWS's central resource for compliance-related information, providing on-demand access to AWS security and compliance reports (such as SOC reports, ISO certifications, PCI DSS) and select online agreements. It does not provide EC2 terms, spending history (Cost Explorer/Billing), or lists of previous-generation EC2 instance types.",
    "referenceLinks": [],
    "difficulty": "medium",
    "isUnscored": false,
    "tags": [
      "examtopics"
    ]
  },
  {
    "id": "et-20",
    "domainId": 3,
    "questionText": "Which task requires using AWS account root user credentials?",
    "questionType": "single_choice",
    "options": [
      {
        "id": "a",
        "text": "Viewing billing information"
      },
      {
        "id": "b",
        "text": "Changing the AWS Support plan"
      },
      {
        "id": "c",
        "text": "Starting and stopping Amazon EC2 instances"
      },
      {
        "id": "d",
        "text": "Opening an AWS Support case"
      }
    ],
    "correctAnswers": [
      "b"
    ],
    "explanation": "Changing an AWS Support plan requires signing in with the AWS account root user credentials or having explicit root-level permissions. Viewing billing, starting/stopping EC2 instances, and opening technical support cases can all be delegated to IAM users or roles with appropriate policies attached.",
    "referenceLinks": [],
    "difficulty": "medium",
    "isUnscored": false,
    "tags": [
      "examtopics"
    ]
  },
  {
    "id": "et-21",
    "domainId": 3,
    "questionText": "A company needs to simultaneously process hundreds of requests from different users.Which combination of AWS services should the company use to build an operationally efficient solution?",
    "questionType": "single_choice",
    "options": [
      {
        "id": "a",
        "text": "Amazon Simple Queue Service (Amazon SQS) and AWS Lambda"
      },
      {
        "id": "b",
        "text": "AWS Data Pipeline and Amazon EC2"
      },
      {
        "id": "c",
        "text": "Amazon Kinesis and Amazon Athena"
      },
      {
        "id": "d",
        "text": "AWS Amplify and AWS AppSync"
      }
    ],
    "correctAnswers": [
      "a"
    ],
    "explanation": "Amazon Simple Queue Service (Amazon SQS) combined with AWS Lambda creates a highly scalable, decoupled, serverless architecture that can ingest and process hundreds of concurrent requests efficiently. SQS buffers incoming requests reliably, and Lambda automatically scales up concurrency to process messages from the queue without server provisioning overhead. AWS Data Pipeline is for batch data movement. Amazon Kinesis with Athena is for streaming analytics. Amplify and AppSync are primarily for mobile/web app frontend and GraphQL API management.",
    "referenceLinks": [],
    "difficulty": "medium",
    "isUnscored": false,
    "tags": [
      "examtopics"
    ]
  },
  {
    "id": "et-22",
    "domainId": 3,
    "questionText": "What is the scope of a VPC within the AWS network?",
    "questionType": "single_choice",
    "options": [
      {
        "id": "a",
        "text": "A VPC can span all Availability Zones globally."
      },
      {
        "id": "b",
        "text": "A VPC must span at least two subnets in each AWS Region."
      },
      {
        "id": "c",
        "text": "A VPC must span at least two edge locations in each AWS Region."
      },
      {
        "id": "d",
        "text": "A VPC can span all Availability Zones within an AWS Region."
      }
    ],
    "correctAnswers": [
      "d"
    ],
    "explanation": "An Amazon Virtual Private Cloud (Amazon VPC) is logically isolated within a single AWS Region and can span all Availability Zones (AZs) within that Region. A VPC cannot span multiple AWS Regions or edge locations. Within a VPC, subnets are created inside specific Availability Zones.",
    "referenceLinks": [],
    "difficulty": "medium",
    "isUnscored": false,
    "tags": [
      "examtopics"
    ]
  },
  {
    "id": "et-23",
    "domainId": 3,
    "questionText": "Which of the following are components of an AWS Site-to-Site VPN connection? (Choose two.)",
    "questionType": "multiple_choice",
    "options": [
      {
        "id": "a",
        "text": "AWS Storage Gateway"
      },
      {
        "id": "b",
        "text": "Virtual private gateway"
      },
      {
        "id": "c",
        "text": "NAT gateway"
      },
      {
        "id": "d",
        "text": "Customer gateway"
      },
      {
        "id": "e",
        "text": "Internet gateway"
      }
    ],
    "correctAnswers": [
      "b",
      "d"
    ],
    "explanation": "An AWS Site-to-Site VPN connection connects an on-premises network to an Amazon VPC. It consists of a Virtual Private Gateway (VGW) or Transit Gateway on the AWS side, and a Customer Gateway (a physical device or software appliance) on the customer on-premises side. Storage Gateway is for hybrid cloud storage. NAT gateway enables internet access for private subnets. Internet gateway connects a VPC to the public internet.",
    "referenceLinks": [],
    "difficulty": "medium",
    "isUnscored": false,
    "tags": [
      "examtopics"
    ]
  },
  {
    "id": "et-24",
    "domainId": 3,
    "questionText": "A company needs to establish a connection between two VPCs. The VPCs are located in two different AWS Regions. The company wants to use the existing infrastructure of the VPCs for this connection.Which AWS service or feature can be used to establish this connection?",
    "questionType": "single_choice",
    "options": [
      {
        "id": "a",
        "text": "AWS Client VPN"
      },
      {
        "id": "b",
        "text": "VPC peering"
      },
      {
        "id": "c",
        "text": "AWS Direct Connect"
      },
      {
        "id": "d",
        "text": "VPC endpoints"
      }
    ],
    "correctAnswers": [
      "b"
    ],
    "explanation": "VPC peering is a networking connection between two VPCs that enables routing of traffic between them using private IPv4 or IPv6 addresses. Inter-Region VPC peering allows VPCs located in different AWS Regions to communicate directly without requiring a VPN, Direct Connect, or traversal over the public internet. AWS Client VPN connects individual user devices. AWS Direct Connect provides dedicated physical fiber lines. VPC endpoints connect VPCs privately to supported AWS services.",
    "referenceLinks": [],
    "difficulty": "medium",
    "isUnscored": false,
    "tags": [
      "examtopics"
    ]
  },
  {
    "id": "et-25",
    "domainId": 1,
    "questionText": "According to the AWS shared responsibility model, what responsibility does a customer have when using Amazon RDS to host a database?",
    "questionType": "single_choice",
    "options": [
      {
        "id": "a",
        "text": "Manage connections to the database"
      },
      {
        "id": "b",
        "text": "Install Microsoft SQL Server"
      },
      {
        "id": "c",
        "text": "Design encryption-at-rest strategies"
      },
      {
        "id": "d",
        "text": "Apply minor database patches"
      }
    ],
    "correctAnswers": [
      "a"
    ],
    "explanation": "Under the AWS shared responsibility model for managed services like Amazon RDS, AWS manages the underlying operating system, server hardware, automated software patching, and physical infrastructure. The customer remains responsible for managing database connections, user access control, database schema design, and data encryption configuration.",
    "referenceLinks": [],
    "difficulty": "medium",
    "isUnscored": false,
    "tags": [
      "examtopics"
    ]
  },
  {
    "id": "et-26",
    "domainId": 1,
    "questionText": "What are some advantages of using Amazon EC2 instances to host applications in the AWS Cloud instead of on premises? (Choose two.)",
    "questionType": "multiple_choice",
    "options": [
      {
        "id": "a",
        "text": "EC2 includes operating system patch management."
      },
      {
        "id": "b",
        "text": "EC2 integrates with Amazon VPC, AWS CloudTrail, and AWS Identity and Access Management (IAM)."
      },
      {
        "id": "c",
        "text": "EC2 has a 100% service level agreement (SLA)."
      },
      {
        "id": "d",
        "text": "EC2 has a flexible, pay-as-you-go pricing model."
      },
      {
        "id": "e",
        "text": "EC2 has automatic storage cost optimization."
      }
    ],
    "correctAnswers": [
      "b",
      "d"
    ],
    "explanation": "Amazon EC2 instances integrate natively with other AWS services such as Amazon VPC (for networking), AWS CloudTrail (for API auditing), and AWS IAM (for secure access management). Furthermore, EC2 offers flexible pay-as-you-go pricing (paying only for compute hours used). EC2 does not patch customer guest operating systems automatically, does not offer a 100% SLA, and does not automatically optimize storage costs without configuration.",
    "referenceLinks": [],
    "difficulty": "medium",
    "isUnscored": false,
    "tags": [
      "examtopics"
    ]
  },
  {
    "id": "et-27",
    "domainId": 2,
    "questionText": "A user needs to determine whether an Amazon EC2 instance's security groups were modified in the last month.How can the user see if a change was made?",
    "questionType": "single_choice",
    "options": [
      {
        "id": "a",
        "text": "Use Amazon EC2 to see if the security group was changed."
      },
      {
        "id": "b",
        "text": "Use AWS Identity and Access Management (IAM) to see which user or role changed the security group."
      },
      {
        "id": "c",
        "text": "Use AWS CloudTrail to see if the security group was changed."
      },
      {
        "id": "d",
        "text": "Use Amazon CloudWatch to see if the security group was changed."
      }
    ],
    "correctAnswers": [
      "c"
    ],
    "explanation": "AWS CloudTrail continuously logs, monitors, and retains account activity and API calls made across AWS infrastructure, including who modified an EC2 security group, when the modification was made, and from which IP address. Amazon EC2 console shows current state, not historical change logs. IAM tracks identities and permissions, not VPC resource modifications. Amazon CloudWatch monitors metrics and logs, not management event history.",
    "referenceLinks": [],
    "difficulty": "medium",
    "isUnscored": false,
    "tags": [
      "examtopics"
    ]
  },
  {
    "id": "et-28",
    "domainId": 3,
    "questionText": "Which AWS service will help protect applications running on AWS from DDoS attacks?",
    "questionType": "single_choice",
    "options": [
      {
        "id": "a",
        "text": "Amazon GuardDuty"
      },
      {
        "id": "b",
        "text": "AWS WAF"
      },
      {
        "id": "c",
        "text": "AWS Shield"
      },
      {
        "id": "d",
        "text": "Amazon Inspector"
      }
    ],
    "correctAnswers": [
      "c"
    ],
    "explanation": "AWS Shield is a managed Distributed Denial of Service (DDoS) protection service that safeguards applications running on AWS. AWS Shield Standard provides automatic protection against common layer 3 and 4 DDoS attacks for all AWS customers at no additional charge. AWS Shield Advanced provides enhanced protection for high-value assets. Amazon GuardDuty is an intelligent threat detection service. AWS WAF is a web application firewall for layer 7 attacks. Amazon Inspector scans for software vulnerabilities.",
    "referenceLinks": [],
    "difficulty": "medium",
    "isUnscored": false,
    "tags": [
      "examtopics"
    ]
  },
  {
    "id": "et-29",
    "domainId": 3,
    "questionText": "Which AWS service or feature acts as a firewall for Amazon EC2 instances?",
    "questionType": "single_choice",
    "options": [
      {
        "id": "a",
        "text": "Network ACL"
      },
      {
        "id": "b",
        "text": "Elastic network interface"
      },
      {
        "id": "c",
        "text": "Amazon VPC"
      },
      {
        "id": "d",
        "text": "Security group"
      }
    ],
    "correctAnswers": [
      "d"
    ],
    "explanation": "A security group acts as a virtual firewall for Amazon EC2 instances to control inbound and outbound network traffic at the instance (ENI) level. It is stateful (return traffic is automatically allowed). Network ACLs act as stateless firewalls at the subnet level. Amazon VPC is the networking container. Elastic Network Interface (ENI) is the virtual network card.",
    "referenceLinks": [],
    "difficulty": "medium",
    "isUnscored": false,
    "tags": [
      "examtopics"
    ]
  },
  {
    "id": "et-30",
    "domainId": 4,
    "questionText": "How does the AWS Cloud pricing model differ from the traditional on-premises storage pricing model?",
    "questionType": "single_choice",
    "options": [
      {
        "id": "a",
        "text": "AWS resources do not incur costs"
      },
      {
        "id": "b",
        "text": "There are no infrastructure operating costs"
      },
      {
        "id": "c",
        "text": "There are no upfront cost commitments"
      },
      {
        "id": "d",
        "text": "There are no software licensing costs"
      }
    ],
    "correctAnswers": [
      "c"
    ],
    "explanation": "The AWS Cloud pricing model requires no upfront cost commitments; customers pay only for the storage capacity and services they consume (variable expense vs capital expense). Traditional on-premises storage requires purchasing storage hardware, racks, and disks upfront before usage begins. Cloud resources do incur costs, operating expenses still apply, and commercial software licensing may still be required.",
    "referenceLinks": [],
    "difficulty": "medium",
    "isUnscored": false,
    "tags": [
      "examtopics"
    ]
  },
  {
    "id": "et-31",
    "domainId": 3,
    "questionText": "A company has a single Amazon EC2 instance. The company wants to adopt a highly available architecture.What can the company do to meet this requirement?",
    "questionType": "single_choice",
    "options": [
      {
        "id": "a",
        "text": "Scale vertically to a larger EC2 instance size."
      },
      {
        "id": "b",
        "text": "Scale horizontally across multiple Availability Zones."
      },
      {
        "id": "c",
        "text": "Purchase an EC2 Dedicated Instance."
      },
      {
        "id": "d",
        "text": "Change the EC2 instance family to a compute optimized instance."
      }
    ],
    "correctAnswers": [
      "b"
    ],
    "explanation": "To adopt a highly available architecture, the company should scale horizontally across multiple Availability Zones (AZs) within an AWS Region. Placing redundant instances behind an Elastic Load Balancer across different AZs ensures that if one data center or AZ fails, the application continues running seamlessly. Vertical scaling (larger instance), Dedicated Instances, or switching to compute-optimized instances still leaves a single point of failure.",
    "referenceLinks": [],
    "difficulty": "medium",
    "isUnscored": false,
    "tags": [
      "examtopics"
    ]
  },
  {
    "id": "et-32",
    "domainId": 1,
    "questionText": "A company's on-premises application deployment cycle was 3-4 weeks. After migrating to the AWS Cloud, the company can deploy the application in 2-3 days.Which benefit has this company experienced by moving to the AWS Cloud?",
    "questionType": "single_choice",
    "options": [
      {
        "id": "a",
        "text": "Elasticity"
      },
      {
        "id": "b",
        "text": "Flexibility"
      },
      {
        "id": "c",
        "text": "Agility"
      },
      {
        "id": "d",
        "text": "Resilience"
      }
    ],
    "correctAnswers": [
      "c"
    ],
    "explanation": "Agility in cloud computing refers to the speed with which organizations can develop, test, and launch applications and features. Reducing deployment cycles from weeks to days exemplifies agility, as cloud infrastructure can be provisioned in minutes. Elasticity is scaling capacity dynamically. Flexibility refers to using diverse technologies. Resilience is recovering from disruptions.",
    "referenceLinks": [],
    "difficulty": "medium",
    "isUnscored": false,
    "tags": [
      "examtopics"
    ]
  },
  {
    "id": "et-33",
    "domainId": 4,
    "questionText": "Which of the following are included in AWS Enterprise Support? (Choose two.)",
    "questionType": "multiple_choice",
    "options": [
      {
        "id": "a",
        "text": "AWS technical account manager (TAM)"
      },
      {
        "id": "b",
        "text": "AWS partner-led support"
      },
      {
        "id": "c",
        "text": "AWS Professional Services"
      },
      {
        "id": "d",
        "text": "Support of third-party software integration to AWS"
      },
      {
        "id": "e",
        "text": "5-minute response time for critical issues"
      }
    ],
    "correctAnswers": [
      "a",
      "d"
    ],
    "explanation": "AWS Enterprise Support includes a dedicated AWS Technical Account Manager (TAM) who provides proactive architectural and operational guidance, as well as support for third-party software and operating systems running on AWS. Enterprise Support has a 15-minute response time target for business-critical system down events (not 5 minutes). Professional Services is a separate consulting engagement.",
    "referenceLinks": [],
    "difficulty": "medium",
    "isUnscored": false,
    "tags": [
      "examtopics"
    ]
  },
  {
    "id": "et-34",
    "domainId": 3,
    "questionText": "A global media company uses AWS Organizations to manage multiple AWS accounts.Which AWS service or feature can the company use to limit the access to AWS services for member accounts?",
    "questionType": "single_choice",
    "options": [
      {
        "id": "a",
        "text": "AWS Identity and Access Management (IAM)"
      },
      {
        "id": "b",
        "text": "Service control policies (SCPs)"
      },
      {
        "id": "c",
        "text": "Organizational units (OUs)"
      },
      {
        "id": "d",
        "text": "Access control lists (ACLs)"
      }
    ],
    "correctAnswers": [
      "b"
    ],
    "explanation": "Service Control Policies (SCPs) in AWS Organizations specify the maximum available permissions for member accounts in an organization or Organizational Unit (OU), enabling administrators to centrally restrict access to specific AWS services and API actions across accounts. IAM policies govern individual identities within a single account. OUs group accounts logically but do not define permissions themselves without SCPs. ACLs manage network or object access.",
    "referenceLinks": [],
    "difficulty": "medium",
    "isUnscored": false,
    "tags": [
      "examtopics"
    ]
  },
  {
    "id": "et-35",
    "domainId": 3,
    "questionText": "A company wants to limit its employees' AWS access to a portfolio of predefined AWS resources.Which AWS solution should the company use to meet this requirement?",
    "questionType": "single_choice",
    "options": [
      {
        "id": "a",
        "text": "AWS Config"
      },
      {
        "id": "b",
        "text": "AWS software development kits (SDKs)"
      },
      {
        "id": "c",
        "text": "AWS Service Catalog"
      },
      {
        "id": "d",
        "text": "AWS AppSync"
      }
    ],
    "correctAnswers": [
      "c"
    ],
    "explanation": "AWS Service Catalog allows organizations to create, manage, and govern catalogs of approved AWS resources and IT services that employees are permitted to deploy, ensuring compliance with organizational standards and policies. AWS Config tracks configuration history. AWS SDKs are programmatic development tools. AWS AppSync provides managed GraphQL APIs.",
    "referenceLinks": [],
    "difficulty": "medium",
    "isUnscored": false,
    "tags": [
      "examtopics"
    ]
  },
  {
    "id": "et-36",
    "domainId": 3,
    "questionText": "An online company was running a workload on premises and was struggling to launch new products and features. After migrating the workload to AWS, the company can quickly launch products and features and can scale its infrastructure as required.Which AWS Cloud value proposition does this scenario describe?",
    "questionType": "single_choice",
    "options": [
      {
        "id": "a",
        "text": "Business agility"
      },
      {
        "id": "b",
        "text": "High availability"
      },
      {
        "id": "c",
        "text": "Security"
      },
      {
        "id": "d",
        "text": "Centralized auditing"
      }
    ],
    "correctAnswers": [
      "a"
    ],
    "explanation": "Business agility is the ability to rapidly adapt to market changes and opportunities by quickly provisioning resources, experimenting, developing new features, and scaling on demand without long hardware procurement cycles. High availability ensures uptime. Security protects assets. Centralized auditing tracks actions.",
    "referenceLinks": [],
    "difficulty": "medium",
    "isUnscored": false,
    "tags": [
      "examtopics"
    ]
  },
  {
    "id": "et-37",
    "domainId": 1,
    "questionText": "Which of the following are advantages of the AWS Cloud? (Choose two.)",
    "questionType": "multiple_choice",
    "options": [
      {
        "id": "a",
        "text": "AWS management of user-owned infrastructure"
      },
      {
        "id": "b",
        "text": "Ability to quickly change required capacity"
      },
      {
        "id": "c",
        "text": "High economies of scale"
      },
      {
        "id": "d",
        "text": "Increased deployment time to market"
      },
      {
        "id": "e",
        "text": "Increased fixed expenses"
      }
    ],
    "correctAnswers": [
      "b",
      "c"
    ],
    "explanation": "Key advantages of the AWS Cloud include the ability to quickly adjust compute capacity (elasticity to match demand) and benefiting from massive economies of scale (aggregating usage from hundreds of thousands of customers to lower prices). AWS does not manage customer-owned on-prem infrastructure. Moving to the cloud reduces deployment time and replaces fixed expenses with variable expenses.",
    "referenceLinks": [],
    "difficulty": "medium",
    "isUnscored": false,
    "tags": [
      "examtopics"
    ]
  },
  {
    "id": "et-38",
    "domainId": 4,
    "questionText": "AWS has the ability to achieve lower pay-as-you-go pricing by aggregating usage across hundreds of thousands of users.This describes which advantage of the AWS Cloud?",
    "questionType": "single_choice",
    "options": [
      {
        "id": "a",
        "text": "Launch globally in minutes"
      },
      {
        "id": "b",
        "text": "Increase speed and agility"
      },
      {
        "id": "c",
        "text": "High economies of scale"
      },
      {
        "id": "d",
        "text": "No guessing about compute capacity"
      }
    ],
    "correctAnswers": [
      "c"
    ],
    "explanation": "Benefiting from massive economies of scale is one of the six advantages of cloud computing. Because AWS aggregates usage from hundreds of thousands of customers across the globe, AWS achieves higher purchasing power and operational efficiencies, translating into lower pay-as-you-go prices and frequent price reductions.",
    "referenceLinks": [],
    "difficulty": "medium",
    "isUnscored": false,
    "tags": [
      "examtopics"
    ]
  },
  {
    "id": "et-39",
    "domainId": 4,
    "questionText": "A company has a database server that is always running. The company hosts the server on Amazon EC2 instances. The instance sizes are suitable for the workload. The workload will run for 1 year.Which EC2 instance purchasing option will meet these requirements MOST cost-effectively?",
    "questionType": "single_choice",
    "options": [
      {
        "id": "a",
        "text": "Standard Reserved Instances"
      },
      {
        "id": "b",
        "text": "On-Demand Instances"
      },
      {
        "id": "c",
        "text": "Spot Instances"
      },
      {
        "id": "d",
        "text": "Convertible Reserved Instances"
      }
    ],
    "correctAnswers": [
      "a"
    ],
    "explanation": "Standard Reserved Instances (RIs) provide the highest discount (up to 72%) compared to On-Demand pricing when running steady-state workloads with known instance attributes for a 1-year or 3-year commitment. Convertible RIs provide flexibility to change instance families but offer lower discounts. Spot Instances can be interrupted at any time and are not suitable for steady, non-interruptible database servers. On-Demand instances offer no commitment discounts.",
    "referenceLinks": [],
    "difficulty": "medium",
    "isUnscored": false,
    "tags": [
      "examtopics"
    ]
  },
  {
    "id": "et-40",
    "domainId": 3,
    "questionText": "A company is developing a mobile app that needs a high-performance NoSQL database.Which AWS services could the company use for this database? (Choose two.)",
    "questionType": "multiple_choice",
    "options": [
      {
        "id": "a",
        "text": "Amazon Aurora"
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
        "text": "Amazon DocumentDB (with MongoDB compatibility)"
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
    "explanation": "Amazon DynamoDB is a fully managed, serverless, high-performance NoSQL key-value and document database offering single-digit millisecond latency at any scale. Amazon DocumentDB is a fully managed NoSQL document database service that is compatible with MongoDB workloads. Amazon Aurora and RDS are relational databases. Amazon Redshift is a relational data warehouse.",
    "referenceLinks": [],
    "difficulty": "medium",
    "isUnscored": false,
    "tags": [
      "examtopics"
    ]
  },
  {
    "id": "et-41",
    "domainId": 1,
    "questionText": "Which tasks are the responsibility of AWS, according to the AWS shared responsibility model? (Choose two.)",
    "questionType": "multiple_choice",
    "options": [
      {
        "id": "a",
        "text": "Patch the Amazon EC2 guest operating system."
      },
      {
        "id": "b",
        "text": "Upgrade the firmware of the network infrastructure."
      },
      {
        "id": "c",
        "text": "Apply password rotation for IAM users."
      },
      {
        "id": "d",
        "text": "Maintain the physical security of edge locations."
      },
      {
        "id": "e",
        "text": "Maintain least privilege access to the root user account."
      }
    ],
    "correctAnswers": [
      "b",
      "d"
    ],
    "explanation": "Under the AWS shared responsibility model, AWS is responsible for 'security OF the cloud', which includes upgrading and patching network infrastructure firmware and maintaining the physical security of data centers and edge locations. The customer is responsible for patching EC2 guest operating systems, IAM user password policies, and managing root account credentials.",
    "referenceLinks": [],
    "difficulty": "medium",
    "isUnscored": false,
    "tags": [
      "examtopics"
    ]
  },
  {
    "id": "et-42",
    "domainId": 3,
    "questionText": "Which of the following are features of network ACLs as they are used in the AWS Cloud? (Choose two.)",
    "questionType": "multiple_choice",
    "options": [
      {
        "id": "a",
        "text": "They are stateless."
      },
      {
        "id": "b",
        "text": "They are stateful."
      },
      {
        "id": "c",
        "text": "They evaluate all rules before allowing traffic."
      },
      {
        "id": "d",
        "text": "They process rules in order, starting with the lowest numbered rule, when deciding whether to allow traffic."
      },
      {
        "id": "e",
        "text": "They operate at the instance level."
      }
    ],
    "correctAnswers": [
      "a",
      "d"
    ],
    "explanation": "Network Access Control Lists (NACLs) in Amazon VPC are stateless (inbound and outbound rules must be explicitly configured separately) and process rules in order starting from the lowest rule number, stopping immediately when a match is found. Security groups, in contrast, are stateful and evaluate all rules before permitting traffic.",
    "referenceLinks": [],
    "difficulty": "medium",
    "isUnscored": false,
    "tags": [
      "examtopics"
    ]
  },
  {
    "id": "et-43",
    "domainId": 4,
    "questionText": "A company has designed its AWS Cloud infrastructure to run its workloads effectively. The company also has protocols in place to continuously improve supporting processes.Which pillar of the AWS Well-Architected Framework does this scenario represent?",
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
        "text": "Cost optimization"
      },
      {
        "id": "d",
        "text": "Operational excellence"
      }
    ],
    "correctAnswers": [
      "d"
    ],
    "explanation": "The Operational Excellence pillar of the AWS Well-Architected Framework focuses on running and monitoring systems to deliver business value and continually improving processes and procedures. Supporting continuous improvement and running workloads effectively directly align with Operational Excellence.",
    "referenceLinks": [],
    "difficulty": "medium",
    "isUnscored": false,
    "tags": [
      "examtopics"
    ]
  },
  {
    "id": "et-44",
    "domainId": 3,
    "questionText": "Which AWS service or feature can be used to create a private connection between an on-premises workload and an AWS Cloud workload?",
    "questionType": "single_choice",
    "options": [
      {
        "id": "a",
        "text": "Amazon Route 53"
      },
      {
        "id": "b",
        "text": "Amazon Macie"
      },
      {
        "id": "c",
        "text": "AWS Direct Connect"
      },
      {
        "id": "d",
        "text": "AWS PrivateLink"
      }
    ],
    "correctAnswers": [
      "c"
    ],
    "explanation": "AWS Direct Connect establishes a dedicated, private physical network connection from an on-premises data center or office directly to AWS, bypassing the public internet to provide higher bandwidth, lower latency, and consistent network performance. Route 53 is a DNS service. Amazon Macie is a data security service. AWS PrivateLink connects VPCs to services privately over the AWS network.",
    "referenceLinks": [],
    "difficulty": "medium",
    "isUnscored": false,
    "tags": [
      "examtopics"
    ]
  },
  {
    "id": "et-45",
    "domainId": 4,
    "questionText": "A company needs to graphically visualize AWS billing and usage over time. The company also needs information about its AWS monthly costs.Which AWS Billing and Cost Management tool provides this data in a graphical format?",
    "questionType": "single_choice",
    "options": [
      {
        "id": "a",
        "text": "AWS Bills"
      },
      {
        "id": "b",
        "text": "Cost Explorer"
      },
      {
        "id": "c",
        "text": "AWS Cost and Usage Report"
      },
      {
        "id": "d",
        "text": "AWS Budgets"
      }
    ],
    "correctAnswers": [
      "b"
    ],
    "explanation": "AWS Cost Explorer provides interactive, graphical charts to visualize, understand, and manage AWS costs and usage over time, including historical spend analysis and forecasting future costs. AWS Bills shows monthly itemized billing statements. AWS Cost and Usage Report (CUR) provides raw CSV data. AWS Budgets sets alert thresholds.",
    "referenceLinks": [],
    "difficulty": "medium",
    "isUnscored": false,
    "tags": [
      "examtopics"
    ]
  },
  {
    "id": "et-46",
    "domainId": 4,
    "questionText": "A company wants to run production workloads on AWS. The company needs concierge service, a designated AWS technical account manager (TAM), and technical support that is available 24 hours a day, 7 days a week.Which AWS Support plan will meet these requirements?",
    "questionType": "single_choice",
    "options": [
      {
        "id": "a",
        "text": "AWS Basic Support"
      },
      {
        "id": "b",
        "text": "AWS Enterprise Support"
      },
      {
        "id": "c",
        "text": "AWS Business Support"
      },
      {
        "id": "d",
        "text": "AWS Developer Support"
      }
    ],
    "correctAnswers": [
      "b"
    ],
    "explanation": "AWS Enterprise Support is the top-tier support plan that provides 24/7 technical support, an AWS Technical Account Manager (TAM), a Concierge support team for billing and account inquiries, and 15-minute response times for critical system outages. Business Support includes 24/7 phone/chat support but lacks a dedicated TAM and Concierge service. Developer and Basic do not include 24/7 phone support.",
    "referenceLinks": [],
    "difficulty": "medium",
    "isUnscored": false,
    "tags": [
      "examtopics"
    ]
  },
  {
    "id": "et-47",
    "domainId": 3,
    "questionText": "Which architecture design principle describes the need to isolate failures between dependent components in the AWS Cloud?",
    "questionType": "single_choice",
    "options": [
      {
        "id": "a",
        "text": "Use a monolithic design."
      },
      {
        "id": "b",
        "text": "Design for automation."
      },
      {
        "id": "c",
        "text": "Design for single points of failure."
      },
      {
        "id": "d",
        "text": "Loosely couple components."
      }
    ],
    "correctAnswers": [
      "d"
    ],
    "explanation": "Loosely coupling components is a core AWS architectural design principle that isolates dependencies between components. By using services like Amazon SQS or EventBridge to decouple microservices, a failure in one component does not cascade and bring down other parts of the system. Monolithic designs create single points of failure.",
    "referenceLinks": [],
    "difficulty": "medium",
    "isUnscored": false,
    "tags": [
      "examtopics"
    ]
  },
  {
    "id": "et-48",
    "domainId": 3,
    "questionText": "Which AWS services are managed database services? (Choose two.)",
    "questionType": "multiple_choice",
    "options": [
      {
        "id": "a",
        "text": "Amazon Elastic Block Store (Amazon EBS)"
      },
      {
        "id": "b",
        "text": "Amazon S3"
      },
      {
        "id": "c",
        "text": "Amazon RDS"
      },
      {
        "id": "d",
        "text": "Amazon Elastic File System (Amazon EFS)"
      },
      {
        "id": "e",
        "text": "Amazon DynamoDB"
      }
    ],
    "correctAnswers": [
      "c",
      "e"
    ],
    "explanation": "Amazon Relational Database Service (Amazon RDS) and Amazon DynamoDB are fully managed database services provided by AWS. Amazon RDS automates provisioning, patching, backup, and recovery for relational database engines, while DynamoDB is a fully managed serverless NoSQL database. Amazon EBS and Amazon EFS are storage services, not databases.",
    "referenceLinks": [],
    "difficulty": "medium",
    "isUnscored": false,
    "tags": [
      "examtopics"
    ]
  },
  {
    "id": "et-49",
    "domainId": 3,
    "questionText": "A company is using the AWS Free Tier for several AWS services for an application.What will happen if the Free Tier usage period expires or if the application use exceeds the Free Tier usage limits?",
    "questionType": "single_choice",
    "options": [
      {
        "id": "a",
        "text": "The company will be charged the standard pay-as-you-go service rates for the usage that exceeds the Free Tier usage."
      },
      {
        "id": "b",
        "text": "AWS Support will contact the company to set up standard service charges."
      },
      {
        "id": "c",
        "text": "The company will be charged for the services it consumed during the Free Tier period, plus additional charges for service consumption after the Free Tier period."
      },
      {
        "id": "d",
        "text": "The company's AWS account will be frozen and can be restarted after a payment plan is established."
      }
    ],
    "correctAnswers": [
      "a"
    ],
    "explanation": "When the AWS Free Tier usage period expires or when usage limits are exceeded, AWS automatically charges the standard pay-as-you-go service rates for any usage beyond the free allowance. Accounts are not frozen, support does not manually contact customers, and retrospective charges are not applied to previous free usage.",
    "referenceLinks": [],
    "difficulty": "medium",
    "isUnscored": false,
    "tags": [
      "examtopics"
    ]
  },
  {
    "id": "et-50",
    "domainId": 3,
    "questionText": "A company recently deployed an Amazon RDS instance in its VPC. The company needs to implement a stateful firewall to limit traffic to the private corporate network. Which AWS service or feature should the company use to limit network traffic directly to its RDS instance?",
    "questionType": "single_choice",
    "options": [
      {
        "id": "a",
        "text": "Network ACLs"
      },
      {
        "id": "b",
        "text": "Security groups"
      },
      {
        "id": "c",
        "text": "AWS WAF"
      },
      {
        "id": "d",
        "text": "Amazon GuardDuty"
      }
    ],
    "correctAnswers": [
      "b"
    ],
    "explanation": "Security groups act as a virtual, stateful firewall that controls inbound and outbound network traffic directly at the instance or network interface (ENI) level, including limiting traffic to an Amazon RDS instance. Network ACLs operate at the subnet level and are stateless. AWS WAF inspects web application layer 7 traffic. Amazon GuardDuty detects threats rather than blocking traffic.",
    "referenceLinks": [],
    "difficulty": "medium",
    "isUnscored": false,
    "tags": [
      "examtopics"
    ]
  },
  {
    "id": "et-51",
    "domainId": 3,
    "questionText": "Which AWS service uses machine learning to help discover, monitor, and protect sensitive data that is stored in Amazon S3 buckets?",
    "questionType": "single_choice",
    "options": [
      {
        "id": "a",
        "text": "AWS Shield"
      },
      {
        "id": "b",
        "text": "Amazon Macie"
      },
      {
        "id": "c",
        "text": "AWS Network Firewall"
      },
      {
        "id": "d",
        "text": "Amazon Cognito"
      }
    ],
    "correctAnswers": [
      "b"
    ],
    "explanation": "Amazon Macie is a fully managed data security and privacy service that uses machine learning and pattern matching to automatically discover, classify, and protect sensitive data (such as personally identifiable information [PII] or intellectual property) stored in Amazon S3 buckets. AWS Shield provides DDoS protection. AWS Network Firewall is a stateful network firewall. Amazon Cognito provides customer identity authentication.",
    "referenceLinks": [],
    "difficulty": "medium",
    "isUnscored": false,
    "tags": [
      "examtopics"
    ]
  },
  {
    "id": "et-52",
    "domainId": 3,
    "questionText": "A company wants to improve the overall availability and performance of its applications that are hosted on AWS.Which AWS service should the company use?",
    "questionType": "single_choice",
    "options": [
      {
        "id": "a",
        "text": "Amazon Connect"
      },
      {
        "id": "b",
        "text": "Amazon Lightsail"
      },
      {
        "id": "c",
        "text": "AWS Global Accelerator"
      },
      {
        "id": "d",
        "text": "AWS Storage Gateway"
      }
    ],
    "correctAnswers": [
      "c"
    ],
    "explanation": "AWS Global Accelerator uses the AWS global network infrastructure and Anycast IP addresses to route user traffic through the closest AWS edge location and over the congestion-free AWS backbone to your applications, improving global availability and network performance by up to 60%. Amazon Connect is a contact center service. Amazon Lightsail is a simplified virtual private server platform. AWS Storage Gateway connects on-premises storage to AWS.",
    "referenceLinks": [],
    "difficulty": "medium",
    "isUnscored": false,
    "tags": [
      "examtopics"
    ]
  },
  {
    "id": "et-53",
    "domainId": 2,
    "questionText": "Which AWS service or feature identifies whether an Amazon S3 bucket or an IAM role has been shared with an external entity?",
    "questionType": "single_choice",
    "options": [
      {
        "id": "a",
        "text": "AWS Service Catalog"
      },
      {
        "id": "b",
        "text": "AWS Systems Manager"
      },
      {
        "id": "c",
        "text": "AWS IAM Access Analyzer"
      },
      {
        "id": "d",
        "text": "AWS Organizations"
      }
    ],
    "correctAnswers": [
      "c"
    ],
    "explanation": "AWS IAM Access Analyzer evaluates resource-based policies (such as S3 bucket policies, KMS keys, and IAM roles) to identify and alert you if resources are shared with external AWS accounts, federated identities, or public internet entities outside of your zone of trust. AWS Service Catalog governs approved product portfolios. Systems Manager provides operational management. AWS Organizations groups accounts.",
    "referenceLinks": [],
    "difficulty": "medium",
    "isUnscored": false,
    "tags": [
      "examtopics"
    ]
  },
  {
    "id": "et-54",
    "domainId": 1,
    "questionText": "A company does not want to rely on elaborate forecasting to determine its usage of compute resources. Instead, the company wants to pay only for the resources that it uses. The company also needs the ability to increase or decrease its resource usage to meet business requirements.Which pillar of the AWS Well-Architected Framework aligns with these requirements?",
    "questionType": "single_choice",
    "options": [
      {
        "id": "a",
        "text": "Operational excellence"
      },
      {
        "id": "b",
        "text": "Security"
      },
      {
        "id": "c",
        "text": "Reliability"
      },
      {
        "id": "d",
        "text": "Cost optimization"
      }
    ],
    "correctAnswers": [
      "d"
    ],
    "explanation": "The Cost Optimization pillar of the AWS Well-Architected Framework emphasizes adopting a consumption model—paying only for compute resources that you use and matching supply with business demand dynamically rather than over-provisioning based on forecasts. Operational excellence focuses on process improvements. Reliability focuses on fault tolerance.",
    "referenceLinks": [],
    "difficulty": "medium",
    "isUnscored": false,
    "tags": [
      "examtopics"
    ]
  },
  {
    "id": "et-55",
    "domainId": 1,
    "questionText": "A company wants to launch its workload on AWS and requires the system to automatically recover from failure.Which pillar of the AWS Well-Architected Framework includes this requirement?",
    "questionType": "single_choice",
    "options": [
      {
        "id": "a",
        "text": "Cost optimization"
      },
      {
        "id": "b",
        "text": "Operational excellence"
      },
      {
        "id": "c",
        "text": "Performance efficiency"
      },
      {
        "id": "d",
        "text": "Reliability"
      }
    ],
    "correctAnswers": [
      "d"
    ],
    "explanation": "The Reliability pillar of the AWS Well-Architected Framework encompasses the ability of a workload to perform its intended function correctly and consistently, which includes designing systems to automatically recover from failure (e.g., using multi-AZ deployments, Auto Scaling, and automated self-healing procedures). Cost optimization focuses on expense reduction. Performance efficiency focuses on resource utilization.",
    "referenceLinks": [],
    "difficulty": "medium",
    "isUnscored": false,
    "tags": [
      "examtopics"
    ]
  },
  {
    "id": "et-56",
    "domainId": 3,
    "questionText": "A large enterprise with multiple VPCs in several AWS Regions around the world needs to connect and centrally manage network connectivity between its VPCs.Which AWS service or feature meets these requirements?",
    "questionType": "single_choice",
    "options": [
      {
        "id": "a",
        "text": "AWS Direct Connect"
      },
      {
        "id": "b",
        "text": "AWS Transit Gateway"
      },
      {
        "id": "c",
        "text": "AWS Site-to-Site VPN"
      },
      {
        "id": "d",
        "text": "VPC endpoints"
      }
    ],
    "correctAnswers": [
      "b"
    ],
    "explanation": "AWS Transit Gateway acts as a central cloud router that simplifies network topology by connecting multiple Amazon VPCs across different AWS accounts and Regions, as well as on-premises networks, in a hub-and-spoke model. AWS Direct Connect provides dedicated physical connectivity. AWS Site-to-Site VPN connects on-premises to a single VPC. VPC endpoints privately connect a single VPC to supported AWS services.",
    "referenceLinks": [],
    "difficulty": "medium",
    "isUnscored": false,
    "tags": [
      "examtopics"
    ]
  },
  {
    "id": "et-57",
    "domainId": 4,
    "questionText": "Which AWS service supports the creation of visual reports from AWS Cost and Usage Report data?",
    "questionType": "single_choice",
    "options": [
      {
        "id": "a",
        "text": "Amazon Athena"
      },
      {
        "id": "b",
        "text": "Amazon QuickSight"
      },
      {
        "id": "c",
        "text": "Amazon CloudWatch"
      },
      {
        "id": "d",
        "text": "AWS Organizations"
      }
    ],
    "correctAnswers": [
      "b"
    ],
    "explanation": "Amazon QuickSight is a cloud-native, serverless Business Intelligence (BI) service that connects to data sources such as AWS Cost and Usage Reports (stored in Amazon S3) to build interactive dashboards and visual reports of billing and usage data. Amazon Athena is an interactive query service (SQL), not a dashboarding tool. CloudWatch monitors operations. Organizations manages accounts.",
    "referenceLinks": [],
    "difficulty": "medium",
    "isUnscored": false,
    "tags": [
      "examtopics"
    ]
  },
  {
    "id": "et-58",
    "domainId": 3,
    "questionText": "Which AWS service should be used to monitor Amazon EC2 instances for CPU and network utilization?",
    "questionType": "single_choice",
    "options": [
      {
        "id": "a",
        "text": "Amazon Inspector"
      },
      {
        "id": "b",
        "text": "AWS CloudTrail"
      },
      {
        "id": "c",
        "text": "Amazon CloudWatch"
      },
      {
        "id": "d",
        "text": "AWS Config"
      }
    ],
    "correctAnswers": [
      "c"
    ],
    "explanation": "Amazon CloudWatch is the AWS monitoring and observability service that automatically collects and tracks metrics, such as CPUUtilization, NetworkIn, and NetworkOut, for Amazon EC2 instances out of the box. Amazon Inspector scans EC2 instances and container images for software vulnerabilities. AWS CloudTrail records API calls. AWS Config assesses resource configurations against compliance rules.",
    "referenceLinks": [],
    "difficulty": "medium",
    "isUnscored": false,
    "tags": [
      "examtopics"
    ]
  },
  {
    "id": "et-59",
    "domainId": 4,
    "questionText": "A company is preparing to launch a new web store that is expected to receive high traffic for an upcoming event. The web store runs only on AWS, and the company has an AWS Enterprise Support plan.Which AWS resource will provide guidance about how the company should scale its architecture and operational support during the event?",
    "questionType": "single_choice",
    "options": [
      {
        "id": "a",
        "text": "AWS Abuse team"
      },
      {
        "id": "b",
        "text": "The designated AWS technical account manager (TAM)"
      },
      {
        "id": "c",
        "text": "AWS infrastructure event management"
      },
      {
        "id": "d",
        "text": "AWS Professional Services"
      }
    ],
    "correctAnswers": [
      "c"
    ],
    "explanation": "AWS Infrastructure Event Management (IEM) is a structured program included with Enterprise Support (and available for an additional fee with Business Support) where AWS experts partner with your team to review architecture, provide operational guidance, and scale infrastructure for high-traffic events like product launches or marketing campaigns. The TAM coordinates support, but IEM is the dedicated program for event scaling guidance.",
    "referenceLinks": [],
    "difficulty": "medium",
    "isUnscored": false,
    "tags": [
      "examtopics"
    ]
  },
  {
    "id": "et-60",
    "domainId": 3,
    "questionText": "A user wants to deploy a service to the AWS Cloud by using infrastructure-as-code (IaC) principles.Which AWS service can be used to meet this requirement?",
    "questionType": "single_choice",
    "options": [
      {
        "id": "a",
        "text": "AWS Systems Manager"
      },
      {
        "id": "b",
        "text": "AWS CloudFormation"
      },
      {
        "id": "c",
        "text": "AWS CodeCommit"
      },
      {
        "id": "d",
        "text": "AWS Config"
      }
    ],
    "correctAnswers": [
      "b"
    ],
    "explanation": "AWS CloudFormation is an Infrastructure as Code (IaC) service that allows you to model, provision, and manage AWS and third-party resources using declarative template files written in JSON or YAML. AWS Systems Manager provides operational runbooks and patching. AWS CodeCommit is a Git-based source control service. AWS Config tracks configuration history.",
    "referenceLinks": [],
    "difficulty": "medium",
    "isUnscored": false,
    "tags": [
      "examtopics"
    ]
  },
  {
    "id": "et-61",
    "domainId": 4,
    "questionText": "A company that has multiple business units wants to centrally manage and govern its AWS Cloud environments. The company wants to automate the creation ofAWS accounts, apply service control policies (SCPs), and simplify billing processes.Which AWS service or tool should the company use to meet these requirements?",
    "questionType": "single_choice",
    "options": [
      {
        "id": "a",
        "text": "AWS Organizations"
      },
      {
        "id": "b",
        "text": "Cost Explorer"
      },
      {
        "id": "c",
        "text": "AWS Budgets"
      },
      {
        "id": "d",
        "text": "AWS Trusted Advisor"
      }
    ],
    "correctAnswers": [
      "a"
    ],
    "explanation": "AWS Organizations enables centralized management and governance across multiple AWS accounts. It allows automated creation of new AWS accounts, application of Service Control Policies (SCPs) to restrict allowed services and actions, and consolidation of billing with volume discount benefits. Cost Explorer, Budgets, and Trusted Advisor provide analytics and recommendations, not account lifecycle governance.",
    "referenceLinks": [],
    "difficulty": "medium",
    "isUnscored": false,
    "tags": [
      "examtopics"
    ]
  },
  {
    "id": "et-62",
    "domainId": 1,
    "questionText": "Which IT controls do AWS and the customer share, according to the AWS shared responsibility model? (Choose two.)",
    "questionType": "multiple_choice",
    "options": [
      {
        "id": "a",
        "text": "Physical and environmental controls"
      },
      {
        "id": "b",
        "text": "Patch management"
      },
      {
        "id": "c",
        "text": "Cloud awareness and training"
      },
      {
        "id": "d",
        "text": "Zone security"
      },
      {
        "id": "e",
        "text": "Application data encryption"
      }
    ],
    "correctAnswers": [
      "b",
      "c"
    ],
    "explanation": "Under the AWS shared responsibility model, shared controls are controls that apply to both the infrastructure layer (managed by AWS) and customer layer (managed by the customer). Examples include patch management (AWS patches virtualization and managed service infrastructure; customer patches guest OS on EC2) and cloud awareness/training (AWS trains AWS employees; customer trains their employees). Physical security is AWS-only; application data encryption is customer-only.",
    "referenceLinks": [],
    "difficulty": "medium",
    "isUnscored": false,
    "tags": [
      "examtopics"
    ]
  },
  {
    "id": "et-63",
    "domainId": 3,
    "questionText": "A company is launching an application in the AWS Cloud. The application will use Amazon S3 storage. A large team of researchers will have shared access to the data. The company must be able to recover data that is accidentally overwritten or deleted.Which S3 feature should the company turn on to meet this requirement?",
    "questionType": "single_choice",
    "options": [
      {
        "id": "a",
        "text": "Server access logging"
      },
      {
        "id": "b",
        "text": "S3 Versioning"
      },
      {
        "id": "c",
        "text": "S3 Lifecycle rules"
      },
      {
        "id": "d",
        "text": "Encryption in transit and at rest"
      }
    ],
    "correctAnswers": [
      "b"
    ],
    "explanation": "Amazon S3 Versioning preserves, retrieves, and restores every version of every object stored in an S3 bucket. Once enabled, if an object is accidentally overwritten or deleted, you can easily recover previous versions or remove the delete marker. Server access logging tracks requests. S3 Lifecycle rules manage object tier transitions and expiration. Encryption protects data confidentiality.",
    "referenceLinks": [],
    "difficulty": "medium",
    "isUnscored": false,
    "tags": [
      "examtopics"
    ]
  },
  {
    "id": "et-64",
    "domainId": 3,
    "questionText": "A manufacturing company has a critical application that runs at a remote site that has a slow internet connection. The company wants to migrate the workload toAWS. The application is sensitive to latency and interruptions in connectivity. The company wants a solution that can host this application with minimum latency.Which AWS service or feature should the company use to meet these requirements?",
    "questionType": "single_choice",
    "options": [
      {
        "id": "a",
        "text": "Availability Zones"
      },
      {
        "id": "b",
        "text": "AWS Local Zones"
      },
      {
        "id": "c",
        "text": "AWS Wavelength"
      },
      {
        "id": "d",
        "text": "AWS Outposts"
      }
    ],
    "correctAnswers": [
      "d"
    ],
    "explanation": "AWS Outposts extends native AWS infrastructure, services, APIs, and tools directly to virtually any customer on-premises data center or co-location space. It delivers local processing with ultra-low latency and consistent hybrid operations, making it ideal for workloads sensitive to latency and intermittent network connections. Availability Zones and Local Zones are AWS-managed facilities away from the remote site.",
    "referenceLinks": [],
    "difficulty": "medium",
    "isUnscored": false,
    "tags": [
      "examtopics"
    ]
  },
  {
    "id": "et-65",
    "domainId": 3,
    "questionText": "A company wants to migrate its applications from its on-premises data center to a VPC in the AWS Cloud. These applications will need to access on-premises resources.Which actions will meet these requirements? (Choose two.)",
    "questionType": "multiple_choice",
    "options": [
      {
        "id": "a",
        "text": "Use AWS Service Catalog to identify a list of on-premises resources that can be migrated."
      },
      {
        "id": "b",
        "text": "Create a VPN connection between an on-premises device and a virtual private gateway in the VPC."
      },
      {
        "id": "c",
        "text": "Use an Amazon CloudFront distribution and configure it to accelerate content delivery close to the on-premises resources."
      },
      {
        "id": "d",
        "text": "Set up an AWS Direct Connect connection between the on-premises data center and AWS."
      },
      {
        "id": "e",
        "text": "Use Amazon CloudFront to restrict access to static web content provided through the on-premises web servers."
      }
    ],
    "correctAnswers": [
      "b",
      "d"
    ],
    "explanation": "To connect an on-premises data center with a VPC in AWS, companies can create an AWS Site-to-Site VPN connection (using a Virtual Private Gateway attached to the VPC and an on-premises Customer Gateway) or establish a dedicated AWS Direct Connect connection for high-bandwidth private connectivity. CloudFront accelerates static/dynamic web delivery, not private hybrid network connectivity.",
    "referenceLinks": [],
    "difficulty": "medium",
    "isUnscored": false,
    "tags": [
      "examtopics"
    ]
  },
  {
    "id": "et-66",
    "domainId": 2,
    "questionText": "A company wants to use the AWS Cloud to provide secure access to desktop applications that are running in a fully managed environment.Which AWS service should the company use to meet this requirement?",
    "questionType": "single_choice",
    "options": [
      {
        "id": "a",
        "text": "Amazon S3"
      },
      {
        "id": "b",
        "text": "Amazon AppStream 2.0"
      },
      {
        "id": "c",
        "text": "AWS AppSync"
      },
      {
        "id": "d",
        "text": "AWS Outposts"
      }
    ],
    "correctAnswers": [
      "b"
    ],
    "explanation": "Amazon AppStream 2.0 is a fully managed non-persistent application streaming service that allows users to securely access desktop applications from anywhere on any computer, tablet, or web browser without installing software locally. Amazon S3 is object storage. AWS AppSync provides managed GraphQL APIs. AWS Outposts provides on-premises hardware.",
    "referenceLinks": [],
    "difficulty": "medium",
    "isUnscored": false,
    "tags": [
      "examtopics"
    ]
  },
  {
    "id": "et-67",
    "domainId": 3,
    "questionText": "A company wants to implement threat detection on its AWS infrastructure. However, the company does not want to deploy additional software.Which AWS service should the company use to meet these requirements?",
    "questionType": "single_choice",
    "options": [
      {
        "id": "a",
        "text": "Amazon VPC"
      },
      {
        "id": "b",
        "text": "Amazon EC2"
      },
      {
        "id": "c",
        "text": "Amazon GuardDuty"
      },
      {
        "id": "d",
        "text": "AWS Direct Connect"
      }
    ],
    "correctAnswers": [
      "c"
    ],
    "explanation": "Amazon GuardDuty is an intelligent threat detection service that continuously monitors and analyzes AWS CloudTrail event logs, VPC Flow Logs, and DNS query logs using machine learning and anomaly detection without requiring any software, agents, or sensors to be deployed on your instances. Amazon Inspector requires an agent or SSM. VPC and Direct Connect are networking services.",
    "referenceLinks": [],
    "difficulty": "medium",
    "isUnscored": false,
    "tags": [
      "examtopics"
    ]
  },
  {
    "id": "et-68",
    "domainId": 3,
    "questionText": "Which AWS service uses edge locations?",
    "questionType": "single_choice",
    "options": [
      {
        "id": "a",
        "text": "Amazon Aurora"
      },
      {
        "id": "b",
        "text": "AWS Global Accelerator"
      },
      {
        "id": "c",
        "text": "Amazon Connect"
      },
      {
        "id": "d",
        "text": "AWS Outposts"
      }
    ],
    "correctAnswers": [
      "b"
    ],
    "explanation": "AWS Global Accelerator utilizes AWS's global network of edge locations and Anycast IP addresses to ingest traffic close to users and route it over the AWS global backbone. Amazon Aurora and Connect run within AWS Regions. AWS Outposts runs inside customer premises.",
    "referenceLinks": [],
    "difficulty": "medium",
    "isUnscored": false,
    "tags": [
      "examtopics"
    ]
  },
  {
    "id": "et-69",
    "domainId": 3,
    "questionText": "A company needs to install an application in a Docker container.Which AWS service eliminates the need to provision and manage the container hosts?",
    "questionType": "single_choice",
    "options": [
      {
        "id": "a",
        "text": "AWS Fargate"
      },
      {
        "id": "b",
        "text": "Amazon FSx for Windows File Server"
      },
      {
        "id": "c",
        "text": "Amazon Elastic Container Service (Amazon ECS)"
      },
      {
        "id": "d",
        "text": "Amazon EC2"
      }
    ],
    "correctAnswers": [
      "a"
    ],
    "explanation": "AWS Fargate is a serverless compute engine for containers that works with Amazon ECS and Amazon EKS. Fargate removes the need to provision, configure, patch, or scale virtual machine cluster instances (container hosts); you only pay for the vCPU and memory resources required to run your containers. Amazon EC2 requires managing the underlying host VMs.",
    "referenceLinks": [],
    "difficulty": "medium",
    "isUnscored": false,
    "tags": [
      "examtopics"
    ]
  },
  {
    "id": "et-70",
    "domainId": 2,
    "questionText": "Which AWS service or feature checks access policies and offers actionable recommendations to help users set secure and functional policies?",
    "questionType": "single_choice",
    "options": [
      {
        "id": "a",
        "text": "AWS Systems Manager"
      },
      {
        "id": "b",
        "text": "AWS IAM Access Analyzer"
      },
      {
        "id": "c",
        "text": "AWS Trusted Advisor"
      },
      {
        "id": "d",
        "text": "Amazon GuardDuty"
      }
    ],
    "correctAnswers": [
      "b"
    ],
    "explanation": "AWS IAM Access Analyzer uses automated reasoning to evaluate your access policies (such as IAM policies, S3 bucket policies, and KMS key policies) and provides actionable recommendations to validate policies, verify least-privilege permissions, and ensure security compliance before deploying them.",
    "referenceLinks": [],
    "difficulty": "medium",
    "isUnscored": false,
    "tags": [
      "examtopics"
    ]
  },
  {
    "id": "et-71",
    "domainId": 3,
    "questionText": "A company has a fleet of cargo ships. The cargo ships have sensors that collect data at sea, where there is intermittent or no internet connectivity. The company needs to collect, format, and process the data at sea and move the data to AWS later.Which AWS service should the company use to meet these requirements?",
    "questionType": "single_choice",
    "options": [
      {
        "id": "a",
        "text": "AWS IoT Core"
      },
      {
        "id": "b",
        "text": "Amazon Lightsail"
      },
      {
        "id": "c",
        "text": "AWS Storage Gateway"
      },
      {
        "id": "d",
        "text": "AWS Snowball Edge"
      }
    ],
    "correctAnswers": [
      "d"
    ],
    "explanation": "AWS Snowball Edge is a ruggedized physical data transfer and edge computing device equipped with on-board compute (EC2 instances and Lambda functions) and storage capacity (up to 80 TB). It is designed to run in disconnected, harsh, or maritime environments (like cargo ships at sea) to process data locally and then be shipped back to AWS for data ingestion into S3. AWS IoT Core requires continuous internet connectivity.",
    "referenceLinks": [],
    "difficulty": "medium",
    "isUnscored": false,
    "tags": [
      "examtopics"
    ]
  },
  {
    "id": "et-72",
    "domainId": 3,
    "questionText": "A retail company needs to build a highly available architecture for a new ecommerce platform. The company is using only AWS services that replicate data across multiple Availability Zones.Which AWS services should the company use to meet this requirement? (Choose two.)",
    "questionType": "multiple_choice",
    "options": [
      {
        "id": "a",
        "text": "Amazon EC2"
      },
      {
        "id": "b",
        "text": "Amazon Elastic Block Store (Amazon EBS)"
      },
      {
        "id": "c",
        "text": "Amazon Aurora"
      },
      {
        "id": "d",
        "text": "Amazon DynamoDB"
      },
      {
        "id": "e",
        "text": "Amazon Redshift"
      }
    ],
    "correctAnswers": [
      "c",
      "d"
    ],
    "explanation": "Amazon Aurora automatically replicates database volume storage across 3 Availability Zones (with 6 copies of data) within an AWS Region. Amazon DynamoDB synchronously replicates data across multiple Availability Zones automatically for high availability and fault tolerance. Amazon EC2 instances and EBS volumes are bound to a single Availability Zone unless explicitly configured in an ASG or Multi-AZ architecture.",
    "referenceLinks": [],
    "difficulty": "medium",
    "isUnscored": false,
    "tags": [
      "examtopics"
    ]
  },
  {
    "id": "et-73",
    "domainId": 3,
    "questionText": "Which characteristic of the AWS Cloud helps users eliminate underutilized CPU capacity?",
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
        "text": "Reliability"
      },
      {
        "id": "d",
        "text": "Durability"
      }
    ],
    "correctAnswers": [
      "b"
    ],
    "explanation": "Elasticity is the ability to acquire resources as you need them and release them when you no longer need them (scaling in and out dynamically). Elasticity helps users eliminate underutilized CPU capacity by automatically matching resource allocation to real-time workload demand (e.g., using EC2 Auto Scaling). Agility is speed of innovation. Reliability is fault tolerance. Durability is data longevity.",
    "referenceLinks": [],
    "difficulty": "medium",
    "isUnscored": false,
    "tags": [
      "examtopics"
    ]
  },
  {
    "id": "et-74",
    "domainId": 3,
    "questionText": "Service control policies (SCPs) manage permissions for which of the following?",
    "questionType": "single_choice",
    "options": [
      {
        "id": "a",
        "text": "Availability Zones"
      },
      {
        "id": "b",
        "text": "AWS Regions"
      },
      {
        "id": "c",
        "text": "AWS Organizations"
      },
      {
        "id": "d",
        "text": "Edge locations"
      }
    ],
    "correctAnswers": [
      "c"
    ],
    "explanation": "Service Control Policies (SCPs) in AWS Organizations manage and restrict permissions for member AWS accounts, root accounts, or Organizational Units (OUs) within the organization. They define the guardrails (maximum allowable permissions) that identity-based policies cannot exceed.",
    "referenceLinks": [],
    "difficulty": "medium",
    "isUnscored": false,
    "tags": [
      "examtopics"
    ]
  },
  {
    "id": "et-75",
    "domainId": 3,
    "questionText": "Which AWS service can be used to encrypt data at rest?",
    "questionType": "single_choice",
    "options": [
      {
        "id": "a",
        "text": "Amazon GuardDuty"
      },
      {
        "id": "b",
        "text": "AWS Shield"
      },
      {
        "id": "c",
        "text": "AWS Security Hub"
      },
      {
        "id": "d",
        "text": "AWS Key Management Service (AWS KMS)"
      }
    ],
    "correctAnswers": [
      "d"
    ],
    "explanation": "AWS Key Management Service (AWS KMS) makes it easy to create and manage cryptographic keys and control their use across a wide range of AWS services (such as Amazon EBS, S3, RDS, and DynamoDB) and in your applications to encrypt data at rest. GuardDuty detects threats. AWS Shield protects against DDoS. Security Hub aggregates security posture findings.",
    "referenceLinks": [],
    "difficulty": "medium",
    "isUnscored": false,
    "tags": [
      "examtopics"
    ]
  },
  {
    "id": "et-76",
    "domainId": 1,
    "questionText": "Which characteristics are advantages of using the AWS Cloud? (Choose two.)",
    "questionType": "multiple_choice",
    "options": [
      {
        "id": "a",
        "text": "A 100% service level agreement (SLA) for all AWS services"
      },
      {
        "id": "b",
        "text": "Compute capacity that is adjusted on demand"
      },
      {
        "id": "c",
        "text": "Availability of AWS Support for code development"
      },
      {
        "id": "d",
        "text": "Enhanced security"
      },
      {
        "id": "e",
        "text": "Increases in cost and complexity"
      }
    ],
    "correctAnswers": [
      "b",
      "d"
    ],
    "explanation": "Key advantages of the AWS Cloud include compute capacity that can be adjusted on demand (elasticity) and enhanced security provided by AWS's secure cloud infrastructure and built-in security features. AWS does not offer a 100% SLA for any service, does not write application code for customers, and reduces operational complexity and cost.",
    "referenceLinks": [],
    "difficulty": "medium",
    "isUnscored": false,
    "tags": [
      "examtopics"
    ]
  },
  {
    "id": "et-77",
    "domainId": 2,
    "questionText": "A user is storing objects in Amazon S3. The user needs to restrict access to the objects to meet compliance obligations.What should the user do to meet this requirement?",
    "questionType": "single_choice",
    "options": [
      {
        "id": "a",
        "text": "Use AWS Secrets Manager."
      },
      {
        "id": "b",
        "text": "Tag the objects in the S3 bucket."
      },
      {
        "id": "c",
        "text": "Use security groups."
      },
      {
        "id": "d",
        "text": "Use network ACLs."
      }
    ],
    "correctAnswers": [
      "b"
    ],
    "explanation": "Amazon S3 object tags are key-value pairs applied to S3 objects. In combination with IAM policies and S3 bucket policies, tags can be used to restrict access to specific objects based on compliance criteria (Attribute-Based Access Control - ABAC). Security groups and network ACLs control network traffic for VPC instances, not Amazon S3 object storage APIs.",
    "referenceLinks": [],
    "difficulty": "medium",
    "isUnscored": false,
    "tags": [
      "examtopics"
    ]
  },
  {
    "id": "et-78",
    "domainId": 3,
    "questionText": "A company wants to convert video files and audio files from their source format into a format that will play on smartphones, tablets, and web browsers.Which AWS service will meet these requirements?",
    "questionType": "single_choice",
    "options": [
      {
        "id": "a",
        "text": "Amazon Elastic Transcoder"
      },
      {
        "id": "b",
        "text": "Amazon Comprehend"
      },
      {
        "id": "c",
        "text": "AWS Glue"
      },
      {
        "id": "d",
        "text": "Amazon Rekognition"
      }
    ],
    "correctAnswers": [
      "a"
    ],
    "explanation": "Amazon Elastic Transcoder is a media transcoding cloud service designed to convert media files (audio and video) from their source formats into versions that can play on various devices such as smartphones, tablets, PCs, and web browsers. Amazon Comprehend performs natural language processing (NLP). AWS Glue is an ETL data integration service. Amazon Rekognition analyzes images and videos.",
    "referenceLinks": [],
    "difficulty": "medium",
    "isUnscored": false,
    "tags": [
      "examtopics"
    ]
  },
  {
    "id": "et-79",
    "domainId": 1,
    "questionText": "Which of the following are benefits of Amazon EC2 Auto Scaling? (Choose two.)",
    "questionType": "multiple_choice",
    "options": [
      {
        "id": "a",
        "text": "Improved health and availability of applications"
      },
      {
        "id": "b",
        "text": "Reduced network latency"
      },
      {
        "id": "c",
        "text": "Optimized performance and costs"
      },
      {
        "id": "d",
        "text": "Automated snapshots of data"
      },
      {
        "id": "e",
        "text": "Cross-Region Replication"
      }
    ],
    "correctAnswers": [
      "a",
      "c"
    ],
    "explanation": "Amazon EC2 Auto Scaling improves application health and availability by automatically detecting and replacing unhealthy instances, and optimizes performance and costs by dynamically scaling the number of EC2 instances up during demand surges and down during low-traffic periods so you only pay for what you use. It does not take automated snapshots (that is AWS Backup or Amazon Data Lifecycle Manager) nor perform Cross-Region Replication.",
    "referenceLinks": [],
    "difficulty": "medium",
    "isUnscored": false,
    "tags": [
      "examtopics"
    ]
  },
  {
    "id": "et-80",
    "domainId": 4,
    "questionText": "A company has several departments. Each department has its own AWS accounts for its applications. The company wants all AWS costs on a single invoice to simplify payment, but the company wants to know the costs that each department is incurring.Which AWS tool or feature will provide this functionality?",
    "questionType": "single_choice",
    "options": [
      {
        "id": "a",
        "text": "AWS Cost and Usage Reports"
      },
      {
        "id": "b",
        "text": "Consolidated billing"
      },
      {
        "id": "c",
        "text": "Savings Plans"
      },
      {
        "id": "d",
        "text": "AWS Budgets"
      }
    ],
    "correctAnswers": [
      "b"
    ],
    "explanation": "Consolidated billing is a feature of AWS Organizations that consolidates payment for multiple AWS accounts into a single monthly bill, providing a unified invoice while still detailing costs incurred by each individual department account and allowing volume pricing discounts across the organization. AWS Budgets sets cost thresholds. Savings Plans are compute discount commitments.",
    "referenceLinks": [],
    "difficulty": "medium",
    "isUnscored": false,
    "tags": [
      "examtopics"
    ]
  },
  {
    "id": "et-81",
    "domainId": 4,
    "questionText": "A company runs its workloads on premises. The company wants to forecast the cost of running a large application on AWS.Which AWS service or tool can the company use to obtain this information?",
    "questionType": "single_choice",
    "options": [
      {
        "id": "a",
        "text": "AWS Pricing Calculator"
      },
      {
        "id": "b",
        "text": "AWS Budgets"
      },
      {
        "id": "c",
        "text": "AWS Trusted Advisor"
      },
      {
        "id": "d",
        "text": "Cost Explorer"
      }
    ],
    "correctAnswers": [
      "a"
    ],
    "explanation": "The AWS Pricing Calculator is a web-based planning tool that allows users to model and estimate the cost of AWS services and architectural configurations before deploying workloads to AWS. AWS Budgets tracks actual spend against targets. Cost Explorer analyzes historical spend after resources have been running. Trusted Advisor checks existing deployed resources.",
    "referenceLinks": [],
    "difficulty": "medium",
    "isUnscored": false,
    "tags": [
      "examtopics"
    ]
  },
  {
    "id": "et-82",
    "domainId": 4,
    "questionText": "A company wants to eliminate the need to guess infrastructure capacity before deployments. The company also wants to spend its budget on cloud resources only as the company uses the resources.Which advantage of the AWS Cloud matches the company's requirements?",
    "questionType": "single_choice",
    "options": [
      {
        "id": "a",
        "text": "Reliability"
      },
      {
        "id": "b",
        "text": "Global reach"
      },
      {
        "id": "c",
        "text": "Economies of scale"
      },
      {
        "id": "d",
        "text": "Pay-as-you-go pricing"
      }
    ],
    "correctAnswers": [
      "d"
    ],
    "explanation": "Pay-as-you-go pricing (replacing upfront capital expenses with variable operational expenses) allows companies to spend budget on cloud resources strictly as they consume them, without requiring upfront commitments or guessing infrastructure capacity needs prior to deployment.",
    "referenceLinks": [],
    "difficulty": "medium",
    "isUnscored": false,
    "tags": [
      "examtopics"
    ]
  },
  {
    "id": "et-83",
    "domainId": 4,
    "questionText": "Which AWS service supports a hybrid architecture that gives users the ability to extend AWS infrastructure, AWS services, APIs, and tools to data centers, co- location environments, or on-premises facilities?",
    "questionType": "single_choice",
    "options": [
      {
        "id": "a",
        "text": "AWS Snowmobile"
      },
      {
        "id": "b",
        "text": "AWS Local Zones"
      },
      {
        "id": "c",
        "text": "AWS Outposts"
      },
      {
        "id": "d",
        "text": "AWS Fargate"
      }
    ],
    "correctAnswers": [
      "c"
    ],
    "explanation": "AWS Outposts brings native AWS hardware, infrastructure, APIs, and tools directly to on-premises data centers and co-location facilities, delivering a consistent hybrid cloud experience. AWS Snowmobile is an exabyte-scale physical data transport truck. Local Zones place AWS compute closer to specific metro areas. Fargate is a serverless container engine.",
    "referenceLinks": [],
    "difficulty": "medium",
    "isUnscored": false,
    "tags": [
      "examtopics"
    ]
  },
  {
    "id": "et-84",
    "domainId": 3,
    "questionText": "A company has a physical tape library to store data backups. The tape library is running out of space. The company needs to extend the tape library's capacity to the AWS Cloud.Which AWS service should the company use to meet this requirement?",
    "questionType": "single_choice",
    "options": [
      {
        "id": "a",
        "text": "Amazon Elastic Block Store (Amazon EBS)"
      },
      {
        "id": "b",
        "text": "Amazon S3"
      },
      {
        "id": "c",
        "text": "Amazon Elastic File System (Amazon EFS)"
      },
      {
        "id": "d",
        "text": "AWS Storage Gateway"
      }
    ],
    "correctAnswers": [
      "d"
    ],
    "explanation": "AWS Storage Gateway Tape Gateway (Virtual Tape Library - VTL) lets you replace physical tape libraries on premises with virtual tapes stored in Amazon S3, S3 Glacier Flexible Retrieval, and S3 Glacier Deep Archive without changing existing tape backup software workflows. EBS is block storage for EC2. S3 is object storage. EFS is a managed file system.",
    "referenceLinks": [],
    "difficulty": "medium",
    "isUnscored": false,
    "tags": [
      "examtopics"
    ]
  },
  {
    "id": "et-85",
    "domainId": 1,
    "questionText": "An online retail company has seasonal sales spikes several times a year, primarily around holidays. Demand is lower at other times. The company finds it difficult to predict the increasing infrastructure demand for each season.Which advantages of moving to the AWS Cloud would MOST benefit the company? (Choose two.)",
    "questionType": "multiple_choice",
    "options": [
      {
        "id": "a",
        "text": "Global footprint"
      },
      {
        "id": "b",
        "text": "Elasticity"
      },
      {
        "id": "c",
        "text": "AWS service quotas"
      },
      {
        "id": "d",
        "text": "AWS shared responsibility model"
      },
      {
        "id": "e",
        "text": "Pay-as-you-go pricing"
      }
    ],
    "correctAnswers": [
      "b",
      "e"
    ],
    "explanation": "For seasonal sales spikes with unpredictable demand, moving to the AWS Cloud provides Elasticity (the ability to automatically scale compute capacity up for peak holiday demand and scale down when traffic subsides) and Pay-as-you-go pricing (paying only for the temporary extra capacity during spikes without maintaining costly idle servers all year).",
    "referenceLinks": [],
    "difficulty": "medium",
    "isUnscored": false,
    "tags": [
      "examtopics"
    ]
  },
  {
    "id": "et-86",
    "domainId": 3,
    "questionText": "Which AWS service can be used to turn text into lifelike speech?",
    "questionType": "single_choice",
    "options": [
      {
        "id": "a",
        "text": "Amazon Polly"
      },
      {
        "id": "b",
        "text": "Amazon Kendra"
      },
      {
        "id": "c",
        "text": "Amazon Rekognition"
      },
      {
        "id": "d",
        "text": "Amazon Connect"
      }
    ],
    "correctAnswers": [
      "a"
    ],
    "explanation": "Amazon Polly is an AWS machine learning service that turns text into lifelike speech, allowing developers to create speech-enabled applications with natural sounding voices across dozens of languages. Amazon Kendra is an intelligent enterprise search service. Amazon Rekognition analyzes visual media. Amazon Connect is a cloud contact center service.",
    "referenceLinks": [],
    "difficulty": "medium",
    "isUnscored": false,
    "tags": [
      "examtopics"
    ]
  },
  {
    "id": "et-87",
    "domainId": 3,
    "questionText": "Which AWS service or tool can be used to capture information about inbound and outbound traffic in an Amazon VPC?",
    "questionType": "single_choice",
    "options": [
      {
        "id": "a",
        "text": "VPC Flow Logs"
      },
      {
        "id": "b",
        "text": "Amazon Inspector"
      },
      {
        "id": "c",
        "text": "VPC endpoint services"
      },
      {
        "id": "d",
        "text": "NAT gateway"
      }
    ],
    "correctAnswers": [
      "a"
    ],
    "explanation": "VPC Flow Logs is an Amazon VPC feature that captures detailed information about IP traffic going to and from network interfaces (ENIs) within your VPC, including source IP, destination IP, ports, and action (ACCEPT/REJECT). Flow log data can be published to Amazon CloudWatch Logs or Amazon S3 for security analysis and troubleshooting.",
    "referenceLinks": [],
    "difficulty": "medium",
    "isUnscored": false,
    "tags": [
      "examtopics"
    ]
  },
  {
    "id": "et-88",
    "domainId": 3,
    "questionText": "A company wants to ensure that two Amazon EC2 instances are in separate data centers with minimal communication latency between the data centers.How can the company meet this requirement?",
    "questionType": "single_choice",
    "options": [
      {
        "id": "a",
        "text": "Place the EC2 instances in two separate AWS Regions connected with a VPC peering connection."
      },
      {
        "id": "b",
        "text": "Place the EC2 instances in two separate Availability Zones within the same AWS Region."
      },
      {
        "id": "c",
        "text": "Place one EC2 instance on premises and the other in an AWS Region. Then connect them by using an AWS VPN connection."
      },
      {
        "id": "d",
        "text": "Place both EC2 instances in a placement group for dedicated bandwidth."
      }
    ],
    "correctAnswers": [
      "b"
    ],
    "explanation": "To place Amazon EC2 instances in separate physical data centers with minimal communication latency, place them in two separate Availability Zones (AZs) within the same AWS Region. Each AZ consists of one or more discrete data centers connected through low-latency, high-bandwidth private fiber networks. Cross-region VPC peering or on-premises VPN introduce significantly higher latency.",
    "referenceLinks": [],
    "difficulty": "medium",
    "isUnscored": false,
    "tags": [
      "examtopics"
    ]
  },
  {
    "id": "et-89",
    "domainId": 2,
    "questionText": "In which situations should a company create an IAM user instead of an IAM role? (Choose two.)",
    "questionType": "multiple_choice",
    "options": [
      {
        "id": "a",
        "text": "When an application that runs on Amazon EC2 instances requires access to other AWS services"
      },
      {
        "id": "b",
        "text": "When the company creates AWS access credentials for individuals"
      },
      {
        "id": "c",
        "text": "When the company creates an application that runs on a mobile phone that makes requests to AWS"
      },
      {
        "id": "d",
        "text": "When the company needs to add users to IAM groups"
      },
      {
        "id": "e",
        "text": "When users are authenticated in the corporate network and want to be able to use AWS without having to sign in a second time"
      }
    ],
    "correctAnswers": [
      "b",
      "d"
    ],
    "explanation": "A company should create an IAM user when creating AWS access credentials (such as console passwords or access keys) for individual human users, and when adding those human users to IAM groups. Applications running on EC2 or mobile devices should use IAM roles (temporary credentials), and enterprise federated users should assume roles via single sign-on (SSO).",
    "referenceLinks": [],
    "difficulty": "medium",
    "isUnscored": false,
    "tags": [
      "examtopics"
    ]
  },
  {
    "id": "et-90",
    "domainId": 3,
    "questionText": "Which AWS services should a company use to read and write data that changes frequently? (Choose two.)",
    "questionType": "multiple_choice",
    "options": [
      {
        "id": "a",
        "text": "Amazon S3 Glacier"
      },
      {
        "id": "b",
        "text": "Amazon RDS"
      },
      {
        "id": "c",
        "text": "AWS Snowball"
      },
      {
        "id": "d",
        "text": "Amazon Redshift"
      },
      {
        "id": "e",
        "text": "Amazon Elastic File System (Amazon EFS)"
      }
    ],
    "correctAnswers": [
      "b",
      "e"
    ],
    "explanation": "Amazon RDS (relational database service) and Amazon Elastic File System (Amazon EFS, a shared POSIX-compliant network file system) are designed specifically for active workloads that read and write data that changes frequently. S3 Glacier is for long-term archive. AWS Snowball is a physical bulk data transfer appliance. Amazon Redshift is an analytical data warehouse optimized for OLAP queries.",
    "referenceLinks": [],
    "difficulty": "medium",
    "isUnscored": false,
    "tags": [
      "examtopics"
    ]
  },
  {
    "id": "et-91",
    "domainId": 3,
    "questionText": "Which AWS service is used to provide encryption for Amazon EBS?",
    "questionType": "single_choice",
    "options": [
      {
        "id": "a",
        "text": "AWS Certificate Manager"
      },
      {
        "id": "b",
        "text": "AWS Systems Manager"
      },
      {
        "id": "c",
        "text": "AWS KMS"
      },
      {
        "id": "d",
        "text": "AWS Config"
      }
    ],
    "correctAnswers": [
      "c"
    ],
    "explanation": "AWS Key Management Service (AWS KMS) provides encryption keys and centralized key management for Amazon Elastic Block Store (Amazon EBS) volumes, encrypting data volumes, boot volumes, and snapshots seamlessly. AWS Certificate Manager (ACM) manages SSL/TLS certificates for websites. AWS Systems Manager manages systems. AWS Config tracks compliance.",
    "referenceLinks": [],
    "difficulty": "medium",
    "isUnscored": false,
    "tags": [
      "examtopics"
    ]
  },
  {
    "id": "et-92",
    "domainId": 3,
    "questionText": "Which AWS services make use of global edge locations? (Choose two.)",
    "questionType": "multiple_choice",
    "options": [
      {
        "id": "a",
        "text": "AWS Fargate"
      },
      {
        "id": "b",
        "text": "Amazon CloudFront"
      },
      {
        "id": "c",
        "text": "AWS Global Accelerator"
      },
      {
        "id": "d",
        "text": "AWS Wavelength"
      },
      {
        "id": "e",
        "text": "Amazon VPC"
      }
    ],
    "correctAnswers": [
      "b",
      "c"
    ],
    "explanation": "Amazon CloudFront (a global Content Delivery Network) and AWS Global Accelerator (a global network traffic optimizer) both utilize AWS's worldwide network of edge locations and Points of Presence (PoPs) to deliver low-latency performance to end users around the world. Fargate, Wavelength, and VPC operate inside Regions or telecom provider locations.",
    "referenceLinks": [],
    "difficulty": "medium",
    "isUnscored": false,
    "tags": [
      "examtopics"
    ]
  },
  {
    "id": "et-93",
    "domainId": 3,
    "questionText": "A company is operating several factories where it builds products. The company needs the ability to process data, store data, and run applications with local system interdependencies that require low latency.Which AWS service should the company use to meet these requirements?",
    "questionType": "single_choice",
    "options": [
      {
        "id": "a",
        "text": "AWS IoT Greengrass"
      },
      {
        "id": "b",
        "text": "AWS Lambda"
      },
      {
        "id": "c",
        "text": "AWS Outposts"
      },
      {
        "id": "d",
        "text": "AWS Snowball Edge"
      }
    ],
    "correctAnswers": [
      "c"
    ],
    "explanation": "AWS Outposts delivers fully managed AWS infrastructure and hardware directly onto factory floors or on-premises facilities, enabling low-latency local data processing, local storage, and tight integration with local manufacturing equipment while maintaining connection to AWS. Greengrass is for lightweight IoT devices. Snowball Edge is primarily for migration/temporary edge compute.",
    "referenceLinks": [],
    "difficulty": "medium",
    "isUnscored": false,
    "tags": [
      "examtopics"
    ]
  },
  {
    "id": "et-94",
    "domainId": 3,
    "questionText": "Which of the following is a recommended design principle for AWS Cloud architecture?",
    "questionType": "single_choice",
    "options": [
      {
        "id": "a",
        "text": "Design tightly coupled components."
      },
      {
        "id": "b",
        "text": "Build a single application component that can handle all the application functionality."
      },
      {
        "id": "c",
        "text": "Make large changes on fewer iterations to reduce chances of failure."
      },
      {
        "id": "d",
        "text": "Avoid monolithic architecture by segmenting workloads."
      }
    ],
    "correctAnswers": [
      "d"
    ],
    "explanation": "A recommended AWS architectural design principle is to avoid monolithic architecture by segmenting workloads into loosely coupled microservices. This prevents a failure in one component from cascading across the entire application and allows independent scaling and deployment of services. Designing tightly coupled components or large infrequent changes violates AWS best practices.",
    "referenceLinks": [],
    "difficulty": "medium",
    "isUnscored": false,
    "tags": [
      "examtopics"
    ]
  },
  {
    "id": "et-95",
    "domainId": 4,
    "questionText": "A company is designing its AWS workloads so that components can be updated regularly and so that changes can be made in small, reversible increments.Which pillar of the AWS Well-Architected Framework does this design support?",
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
      "c"
    ],
    "explanation": "The Operational Excellence pillar includes the design principle 'Make frequent, small, reversible changes'. By designing workloads so that components can be updated regularly in small increments, teams can continuously innovate, reduce risk, and quickly roll back changes if issues occur.",
    "referenceLinks": [],
    "difficulty": "medium",
    "isUnscored": false,
    "tags": [
      "examtopics"
    ]
  },
  {
    "id": "et-96",
    "domainId": 3,
    "questionText": "Which of the following acts as an instance-level firewall to control inbound and outbound access?",
    "questionType": "single_choice",
    "options": [
      {
        "id": "a",
        "text": "Network access control list"
      },
      {
        "id": "b",
        "text": "Security groups"
      },
      {
        "id": "c",
        "text": "AWS Trusted Advisor"
      },
      {
        "id": "d",
        "text": "Virtual private gateways"
      }
    ],
    "correctAnswers": [
      "b"
    ],
    "explanation": "Security groups act as a virtual, stateful firewall at the instance and network interface (ENI) level, controlling inbound and outbound network access for Amazon EC2 instances. Network ACLs operate at the subnet level and are stateless. Virtual private gateways connect VPNs.",
    "referenceLinks": [],
    "difficulty": "medium",
    "isUnscored": false,
    "tags": [
      "examtopics"
    ]
  },
  {
    "id": "et-97",
    "domainId": 4,
    "questionText": "A company has a workload that will run continuously for 1 year. The workload cannot tolerate service interruptions.Which Amazon EC2 purchasing option will be MOST cost-effective?",
    "questionType": "single_choice",
    "options": [
      {
        "id": "a",
        "text": "All Upfront Reserved Instances"
      },
      {
        "id": "b",
        "text": "Partial Upfront Reserved Instances"
      },
      {
        "id": "c",
        "text": "Dedicated Instances"
      },
      {
        "id": "d",
        "text": "On-Demand Instances"
      }
    ],
    "correctAnswers": [
      "a"
    ],
    "explanation": "For a non-interruptible workload running continuously for 1 year, All Upfront Reserved Instances (RIs) provide the largest discount compared to Partial Upfront, No Upfront, or On-Demand instances, because paying the entire commitment upfront maximizes the discount rate offered by AWS.",
    "referenceLinks": [],
    "difficulty": "medium",
    "isUnscored": false,
    "tags": [
      "examtopics"
    ]
  },
  {
    "id": "et-98",
    "domainId": 3,
    "questionText": "Which AWS service helps protect against DDoS attacks?",
    "questionType": "single_choice",
    "options": [
      {
        "id": "a",
        "text": "AWS Shield"
      },
      {
        "id": "b",
        "text": "Amazon Inspector"
      },
      {
        "id": "c",
        "text": "Amazon GuardDuty"
      },
      {
        "id": "d",
        "text": "Amazon Detective"
      }
    ],
    "correctAnswers": [
      "a"
    ],
    "explanation": "AWS Shield is a managed Distributed Denial of Service (DDoS) protection service that safeguards applications running on AWS. AWS Shield Standard provides automatic layer 3 and layer 4 DDoS mitigation at no extra charge. Amazon Inspector scans for vulnerabilities. Amazon GuardDuty detects threats. Amazon Detective investigates root causes.",
    "referenceLinks": [],
    "difficulty": "medium",
    "isUnscored": false,
    "tags": [
      "examtopics"
    ]
  },
  {
    "id": "et-99",
    "domainId": 1,
    "questionText": "Using AWS Config to record, audit, and evaluate changes to AWS resources to enable traceability is an example of which AWS Well-Architected Framework pillar?",
    "questionType": "single_choice",
    "options": [
      {
        "id": "a",
        "text": "Security"
      },
      {
        "id": "b",
        "text": "Operational excellence"
      },
      {
        "id": "c",
        "text": "Performance efficiency"
      },
      {
        "id": "d",
        "text": "Cost optimization"
      }
    ],
    "correctAnswers": [
      "a"
    ],
    "explanation": "Using AWS Config to record, audit, and evaluate configuration changes to AWS resources enables traceability and governance, which is a key design principle of the Security pillar ('Enable traceability'). Monitoring and auditing actions and changes in real time helps maintain a strong security posture.",
    "referenceLinks": [],
    "difficulty": "medium",
    "isUnscored": false,
    "tags": [
      "examtopics"
    ]
  },
  {
    "id": "et-100",
    "domainId": 3,
    "questionText": "Which AWS tool or feature acts as a VPC firewall at the subnet level?",
    "questionType": "single_choice",
    "options": [
      {
        "id": "a",
        "text": "Security group"
      },
      {
        "id": "b",
        "text": "Network ACL"
      },
      {
        "id": "c",
        "text": "Traffic Mirroring"
      },
      {
        "id": "d",
        "text": "Internet gateway"
      }
    ],
    "correctAnswers": [
      "b"
    ],
    "explanation": "A Network Access Control List (Network ACL) acts as a virtual firewall at the subnet level in an Amazon VPC, controlling inbound and outbound traffic for all resources residing within that subnet. Security groups operate at the individual instance/ENI level. Internet gateways connect the VPC to the internet. Traffic Mirroring copies network traffic for inspection.",
    "referenceLinks": [],
    "difficulty": "medium",
    "isUnscored": false,
    "tags": [
      "examtopics"
    ]
  }
];
