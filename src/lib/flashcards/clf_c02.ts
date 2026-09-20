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
    term: "Edge location",
    definition: "This is a site that AWS uses to cache content for faster delivery to users at any location."
  },
  {
    id: "fc-003",
    term: "Infrastructure as Code (IaC)",
    definition: "The process of managing and provisioning computer data centers through machine-readable definition files, rather than physical hardware configuration or interactive configuration tools."
  },
  {
    id: "fc-004",
    term: "AWS Snowball Edge",
    definition: "An AWS service designed for data migration and edge computing. It provides onboard storage and compute power for select AWS capabilities, enabling data collection and processing in environments with limited or no connectivity before transferring the data back to AWS."
  },
  {
    id: "fc-005",
    term: "Performance Efficiency",
    definition: "This pillar of the AWS Well-Architected Framework focuses on using computing resources efficiently to meet system requirements and maintaining that efficiency as demand changes and technologies evolve."
  },
  {
    id: "fc-006",
    term: "AWS Outposts",
    definition: "This fully managed service extends AWS infrastructure, services, APIs, and tools to virtually any customer site or co-location facility."
  },
  {
    id: "fc-007",
    term: "All Upfront Reserved Instances (AURI)",
    definition: "Purchasing option for Reserved Instances that offers the highest discount."
  },
  {
    id: "fc-008",
    term: "Security group",
    definition: "A virtual firewall that controls inbound and outbound traffic for EC2 instances."
  },
  {
    id: "fc-009",
    term: "Security",
    definition: "This pillar focuses on protecting data, systems, and assets while taking advantage of cloud technologies to improve your security posture."
  },
  {
    id: "fc-010",
    term: "Sustainability",
    definition: "This pillar focuses on minimizing environmental impacts of running cloud workloads."
  },
  {
    id: "fc-011",
    term: "AWS Shield Advanced",
    definition: "A paid service that provides enhanced DDoS attack mitigation for applications running on Amazon EC2, Elastic Load Balancing (ELB), Amazon CloudFront, AWS Global Accelerator, and Amazon Route 53."
  },
  {
    id: "fc-012",
    term: "Amazon Elastic Compute Cloud (Amazon EC2)",
    definition: "It provides resizable compute capacity in the cloud, allowing users to launch virtual servers as needed."
  },
  {
    id: "fc-013",
    term: "AWS Budgets",
    definition: "This service enables you to establish custom budgets for tracking your AWS costs and usage, sending notifications when costs or usage exceed (or are projected to exceed) your defined thresholds."
  },
  {
    id: "fc-014",
    term: "Agility",
    definition: "This Cloud Computing benefit enables faster innovation and rapid response to changing business requirements by providing quick access to IT resources."
  },
  {
    id: "fc-015",
    term: "Amazon Virtual Private Cloud (Amazon VPC)",
    definition: "This service allows you to provision a logically isolated section of the AWS Cloud where you can launch AWS resources in a virtual network that you define."
  },
  {
    id: "fc-016",
    term: "AWS Identity and Access Management (IAM)",
    definition: "This web service helps you securely control access to AWS resources."
  },
  {
    id: "fc-017",
    term: "User",
    definition: "An entity created within AWS to represent the person or application that uses it to interact with AWS."
  },
  {
    id: "fc-018",
    term: "Role",
    definition: "An IAM identity that you can create in your account that has specific permissions, but is not associated with a specific person or application."
  },
  {
    id: "fc-019",
    term: "AWS CloudTrail",
    definition: "A service that enables governance, compliance, operational auditing, and risk auditing of your AWS account by logging actions taken by a user, role, or an AWS service."
  },
  {
    id: "fc-020",
    term: "AWS Trusted Advisor",
    definition: "An online tool that provides real-time guidance to help you provision your resources following AWS best practices across cost optimization, performance, security, fault tolerance, and service limits."
  },
  {
    id: "fc-021",
    term: "Cost Optimization",
    definition: "This pillar focuses on avoiding unnecessary costs and understanding where money is spent."
  },
  {
    id: "fc-022",
    term: "AWS Lambda",
    definition: "A serverless, event-driven compute service that lets you run code without provisioning or managing servers."
  },
  {
    id: "fc-023",
    term: "Reliability",
    definition: "This pillar focuses on ensuring a workload performs its intended function correctly and consistently when expected."
  },
  {
    id: "fc-024",
    term: "Dedicated Host",
    definition: "A physical EC2 server dedicated for your use, helping you satisfy compliance requirements and use your existing server-bound software licenses."
  },
  {
    id: "fc-025",
    term: "AWS Control Tower",
    definition: "A service that offers a straightforward method to set up and govern an AWS environment that is secure and compliant with multi-account best practices."
  },
  {
    id: "fc-026",
    term: "Business Support Plan",
    definition: "This support plan offers 24/7 access to Customer Service and AWS support engineers via phone, chat, and email, with a target response time of less than 1 hour for urgent production system outages."
  },
  {
    id: "fc-027",
    term: "Enterprise Support Plan",
    definition: "This support plan includes a Technical Account Manager (TAM), 15-minute response time for business-critical system down, and 24/7 access to Senior Support Engineers."
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
    definition: "This service simplifies setting up, managing, and scaling distributed in-memory cache setups in the AWS Cloud. It eliminates the complexity of deploying and operating a distributed cache system."
  }
];
