import { Question } from '../types';

// ============================================================
// Domain 2: Security and Compliance (30% — ~15 scored questions on exam)
// 30 practice questions covering:
//   - AWS shared responsibility model
//   - Cloud security and governance concepts
//   - Access management capabilities
//   - Security support resources
// ============================================================

export const domain2Questions: Question[] = [
  {
    id: 'd2-001',
    domainId: 2,
    questionText:
      'Under the AWS shared responsibility model, which of the following is the responsibility of AWS?',
    questionType: 'single_choice',
    options: [
      { id: 'a', text: 'Managing IAM user permissions' },
      { id: 'b', text: 'Patching the guest operating system on Amazon EC2 instances' },
      { id: 'c', text: 'Physical security of data centers' },
      { id: 'd', text: 'Encrypting application data' },
    ],
    correctAnswers: ['c'],
    explanation:
      'Under the shared responsibility model, AWS is responsible for security "of" the cloud, which includes physical security of data centers, hardware, networking, and the global infrastructure. Customers are responsible for security "in" the cloud, such as IAM, OS patching, encryption, and application-level security.',
    referenceLinks: [
      {
        text: 'AWS Shared Responsibility Model',
        url: 'https://aws.amazon.com/compliance/shared-responsibility-model/',
      },
    ],
    difficulty: 'easy',
    isUnscored: false,
    tags: ['shared-responsibility', 'aws-responsibility'],
  },
  {
    id: 'd2-002',
    domainId: 2,
    questionText:
      'Which AWS service enables you to manage encryption keys used to encrypt your data?',
    questionType: 'single_choice',
    options: [
      { id: 'a', text: 'AWS Shield' },
      { id: 'b', text: 'AWS Key Management Service (KMS)' },
      { id: 'c', text: 'AWS WAF' },
      { id: 'd', text: 'Amazon Macie' },
    ],
    correctAnswers: ['b'],
    explanation:
      'AWS Key Management Service (KMS) is a managed service that makes it easy for you to create and control the cryptographic keys that are used to protect your data. KMS integrates with most AWS services that encrypt your data, including S3, EBS, RDS, and many others.',
    referenceLinks: [
      {
        text: 'AWS Key Management Service (KMS)',
        url: 'https://aws.amazon.com/kms/',
      },
    ],
    difficulty: 'easy',
    isUnscored: false,
    tags: ['encryption', 'kms', 'security-services'],
  },
  {
    id: 'd2-003',
    domainId: 2,
    questionText:
      'Which IAM feature allows a user to access AWS services without using long-term credentials such as passwords or access keys?',
    questionType: 'single_choice',
    options: [
      { id: 'a', text: 'IAM Groups' },
      { id: 'b', text: 'IAM Policies' },
      { id: 'c', text: 'IAM Roles' },
      { id: 'd', text: 'IAM Access Analyzer' },
    ],
    correctAnswers: ['c'],
    explanation:
      'IAM Roles provide temporary security credentials for entities to access AWS services. Instead of being associated with one person, a role can be assumed by anyone who needs it. Roles eliminate the need for long-term credentials (passwords or access keys), which is a security best practice.',
    referenceLinks: [
      {
        text: 'IAM Roles',
        url: 'https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles.html',
      },
    ],
    difficulty: 'easy',
    isUnscored: false,
    tags: ['iam', 'roles', 'access-management'],
  },
  {
    id: 'd2-004',
    domainId: 2,
    questionText:
      'Which AWS service automatically detects potentially unauthorized or malicious activity in your AWS environment by analyzing events such as API calls and network traffic?',
    questionType: 'single_choice',
    options: [
      { id: 'a', text: 'AWS CloudTrail' },
      { id: 'b', text: 'Amazon GuardDuty' },
      { id: 'c', text: 'AWS Config' },
      { id: 'd', text: 'AWS Trusted Advisor' },
    ],
    correctAnswers: ['b'],
    explanation:
      'Amazon GuardDuty is a threat detection service that continuously monitors for malicious activity and unauthorized behavior to protect your AWS accounts, workloads, and data. It analyzes events across multiple AWS data sources, such as AWS CloudTrail event logs, VPC Flow Logs, and DNS logs.',
    referenceLinks: [
      {
        text: 'Amazon GuardDuty',
        url: 'https://aws.amazon.com/guardduty/',
      },
    ],
    difficulty: 'medium',
    isUnscored: false,
    tags: ['guardduty', 'threat-detection', 'security-services'],
  },
  {
    id: 'd2-005',
    domainId: 2,
    questionText:
      'What is the BEST practice for securing the AWS account root user?',
    questionType: 'single_choice',
    options: [
      { id: 'a', text: 'Use the root user for daily administrative tasks' },
      { id: 'b', text: 'Share root user credentials with trusted administrators' },
      { id: 'c', text: 'Enable multi-factor authentication (MFA) on the root user' },
      { id: 'd', text: 'Create access keys for the root user' },
    ],
    correctAnswers: ['c'],
    explanation:
      'AWS strongly recommends enabling multi-factor authentication (MFA) on the root user account. Additionally, the root user should not be used for everyday tasks. Instead, create IAM users or use IAM Identity Center for daily administrative tasks, and lock away the root user credentials.',
    referenceLinks: [
      {
        text: 'Security Best Practices in IAM',
        url: 'https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html',
      },
    ],
    difficulty: 'easy',
    isUnscored: false,
    tags: ['iam', 'root-user', 'mfa', 'best-practices'],
  },
  {
    id: 'd2-006',
    domainId: 2,
    questionText:
      'Which AWS service provides a firewall at the application layer (Layer 7) to protect web applications from common exploits like SQL injection and cross-site scripting?',
    questionType: 'single_choice',
    options: [
      { id: 'a', text: 'AWS Shield' },
      { id: 'b', text: 'Security Groups' },
      { id: 'c', text: 'AWS WAF (Web Application Firewall)' },
      { id: 'd', text: 'Network ACLs' },
    ],
    correctAnswers: ['c'],
    explanation:
      'AWS WAF is a web application firewall that helps protect your web applications or APIs against common web exploits and bots that may affect availability, compromise security, or consume excessive resources. WAF operates at Layer 7 (application layer) and lets you define customizable web security rules.',
    referenceLinks: [
      {
        text: 'AWS WAF',
        url: 'https://aws.amazon.com/waf/',
      },
    ],
    difficulty: 'medium',
    isUnscored: false,
    tags: ['waf', 'security-services', 'application-firewall'],
  },
  {
    id: 'd2-007',
    domainId: 2,
    questionText:
      'Under the shared responsibility model, which of the following is the customer\'s responsibility? (Select TWO)',
    questionType: 'multiple_choice',
    options: [
      { id: 'a', text: 'Configuring security groups and NACLs' },
      { id: 'b', text: 'Maintaining physical networking equipment' },
      { id: 'c', text: 'Managing data encryption at rest' },
      { id: 'd', text: 'Decommissioning old storage hardware' },
      { id: 'e', text: 'Patching the hypervisor' },
    ],
    correctAnswers: ['a', 'c'],
    explanation:
      'Under the shared responsibility model, customers are responsible for security "in" the cloud. This includes configuring security groups/NACLs, managing data encryption, operating system patches, application security, and identity management. AWS handles the physical infrastructure, hypervisor, and hardware.',
    referenceLinks: [
      {
        text: 'AWS Shared Responsibility Model',
        url: 'https://aws.amazon.com/compliance/shared-responsibility-model/',
      },
    ],
    difficulty: 'medium',
    isUnscored: false,
    tags: ['shared-responsibility', 'customer-responsibility'],
  },
  {
    id: 'd2-008',
    domainId: 2,
    questionText:
      'Which AWS service provides DDoS protection for applications running on AWS?',
    questionType: 'single_choice',
    options: [
      { id: 'a', text: 'AWS WAF' },
      { id: 'b', text: 'AWS Shield' },
      { id: 'c', text: 'Amazon GuardDuty' },
      { id: 'd', text: 'AWS Firewall Manager' },
    ],
    correctAnswers: ['b'],
    explanation:
      'AWS Shield provides DDoS protection. AWS Shield Standard is automatically enabled for all AWS customers at no extra cost and protects against the most common Layer 3 and Layer 4 attacks. AWS Shield Advanced provides enhanced DDoS protection for applications running on EC2, ELB, CloudFront, Global Accelerator, and Route 53.',
    referenceLinks: [
      {
        text: 'AWS Shield',
        url: 'https://aws.amazon.com/shield/',
      },
    ],
    difficulty: 'easy',
    isUnscored: false,
    tags: ['shield', 'ddos', 'security-services'],
  },
  {
    id: 'd2-009',
    domainId: 2,
    questionText:
      'Which IAM entity is used to grant permissions to AWS services to act on your behalf?',
    questionType: 'single_choice',
    options: [
      { id: 'a', text: 'IAM User' },
      { id: 'b', text: 'IAM Group' },
      { id: 'c', text: 'IAM Policy' },
      { id: 'd', text: 'IAM Role' },
    ],
    correctAnswers: ['d'],
    explanation:
      'An IAM Role is an IAM identity that you can create in your account that has specific permissions. Instead of being uniquely associated with one person, a role is intended to be assumable by anyone or any AWS service that needs it. AWS services such as EC2 or Lambda assume roles to get temporary credentials.',
    referenceLinks: [
      {
        text: 'IAM Roles',
        url: 'https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles.html',
      },
    ],
    difficulty: 'easy',
    isUnscored: false,
    tags: ['iam', 'roles', 'service-roles'],
  },
  {
    id: 'd2-010',
    domainId: 2,
    questionText:
      'Which AWS service provides a centralized view of compliance status across multiple AWS accounts?',
    questionType: 'single_choice',
    options: [
      { id: 'a', text: 'AWS Artifact' },
      { id: 'b', text: 'AWS Security Hub' },
      { id: 'c', text: 'AWS CloudTrail' },
      { id: 'd', text: 'Amazon Inspector' },
    ],
    correctAnswers: ['b'],
    explanation:
      'AWS Security Hub gives you a comprehensive view of your security state in AWS and helps you assess your environment against security industry standards and best practices. It aggregates, organizes, and prioritizes security alerts and findings from multiple AWS services and partner solutions.',
    referenceLinks: [
      {
        text: 'AWS Security Hub',
        url: 'https://aws.amazon.com/security-hub/',
      },
    ],
    difficulty: 'medium',
    isUnscored: false,
    tags: ['security-hub', 'compliance', 'security-services'],
  },
  {
    id: 'd2-011',
    domainId: 2,
    questionText:
      'Which AWS service provides on-demand access to AWS compliance reports and select online agreements?',
    questionType: 'single_choice',
    options: [
      { id: 'a', text: 'AWS Security Hub' },
      { id: 'b', text: 'AWS Artifact' },
      { id: 'c', text: 'AWS Config' },
      { id: 'd', text: 'AWS Audit Manager' },
    ],
    correctAnswers: ['b'],
    explanation:
      'AWS Artifact provides on-demand access to AWS security and compliance reports and select online agreements. You can use Artifact to download AWS compliance certifications such as ISO, PCI, and SOC reports, and manage Business Associate Addendums (BAAs) and other agreements.',
    referenceLinks: [
      {
        text: 'AWS Artifact',
        url: 'https://aws.amazon.com/artifact/',
      },
    ],
    difficulty: 'medium',
    isUnscored: false,
    tags: ['artifact', 'compliance', 'reports'],
  },
  {
    id: 'd2-012',
    domainId: 2,
    questionText:
      'Which feature of IAM lets you define fine-grained access control using JSON documents?',
    questionType: 'single_choice',
    options: [
      { id: 'a', text: 'IAM Groups' },
      { id: 'b', text: 'IAM Roles' },
      { id: 'c', text: 'IAM Policies' },
      { id: 'd', text: 'IAM Identity Center' },
    ],
    correctAnswers: ['c'],
    explanation:
      'IAM Policies are JSON documents that define permissions. A policy specifies which actions are allowed or denied on which AWS resources. Policies can be attached to users, groups, or roles. They follow the principle of least privilege — granting only the permissions required to perform a task.',
    referenceLinks: [
      {
        text: 'IAM Policies',
        url: 'https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html',
      },
    ],
    difficulty: 'easy',
    isUnscored: false,
    tags: ['iam', 'policies', 'access-management'],
  },
  {
    id: 'd2-013',
    domainId: 2,
    questionText:
      'Which AWS service records API calls made on your account and delivers log files for auditing?',
    questionType: 'single_choice',
    options: [
      { id: 'a', text: 'Amazon CloudWatch' },
      { id: 'b', text: 'AWS CloudTrail' },
      { id: 'c', text: 'AWS Config' },
      { id: 'd', text: 'AWS X-Ray' },
    ],
    correctAnswers: ['b'],
    explanation:
      'AWS CloudTrail is a service that enables governance, compliance, operational auditing, and risk auditing of your AWS account. It records API calls made on your account and delivers log files to an Amazon S3 bucket. CloudTrail provides event history of your AWS account activity.',
    referenceLinks: [
      {
        text: 'AWS CloudTrail',
        url: 'https://aws.amazon.com/cloudtrail/',
      },
    ],
    difficulty: 'easy',
    isUnscored: false,
    tags: ['cloudtrail', 'auditing', 'governance'],
  },
  {
    id: 'd2-014',
    domainId: 2,
    questionText:
      'Which AWS service continuously monitors and assesses your AWS resource configurations for compliance with desired settings?',
    questionType: 'single_choice',
    options: [
      { id: 'a', text: 'AWS CloudTrail' },
      { id: 'b', text: 'AWS Trusted Advisor' },
      { id: 'c', text: 'AWS Config' },
      { id: 'd', text: 'AWS Systems Manager' },
    ],
    correctAnswers: ['c'],
    explanation:
      'AWS Config is a service that enables you to assess, audit, and evaluate the configurations of your AWS resources. Config continuously monitors and records your AWS resource configurations and allows you to automate the evaluation of recorded configurations against desired configurations.',
    referenceLinks: [
      {
        text: 'AWS Config',
        url: 'https://aws.amazon.com/config/',
      },
    ],
    difficulty: 'medium',
    isUnscored: false,
    tags: ['config', 'compliance', 'governance'],
  },
  {
    id: 'd2-015',
    domainId: 2,
    questionText:
      'What does the principle of "least privilege" mean in the context of IAM?',
    questionType: 'single_choice',
    options: [
      { id: 'a', text: 'Grant all users administrative access for convenience' },
      { id: 'b', text: 'Grant only the minimum permissions required to perform a task' },
      { id: 'c', text: 'Grant permissions based on seniority level' },
      { id: 'd', text: 'Grant permissions only to the root account' },
    ],
    correctAnswers: ['b'],
    explanation:
      'The principle of least privilege recommends granting only the permissions required to perform a task. When you create IAM policies, follow the standard security advice of granting least privilege — that is, granting only the permissions required to perform a task. Start with minimum permissions and grant additional as needed.',
    referenceLinks: [
      {
        text: 'Grant Least Privilege',
        url: 'https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html#grant-least-privilege',
      },
    ],
    difficulty: 'easy',
    isUnscored: false,
    tags: ['iam', 'least-privilege', 'best-practices'],
  },
  {
    id: 'd2-016',
    domainId: 2,
    questionText:
      'Which AWS service uses machine learning to automatically discover, classify, and protect sensitive data such as personally identifiable information (PII)?',
    questionType: 'single_choice',
    options: [
      { id: 'a', text: 'Amazon GuardDuty' },
      { id: 'b', text: 'Amazon Macie' },
      { id: 'c', text: 'Amazon Inspector' },
      { id: 'd', text: 'AWS Secrets Manager' },
    ],
    correctAnswers: ['b'],
    explanation:
      'Amazon Macie is a fully managed data security and data privacy service that uses machine learning and pattern matching to discover and protect sensitive data stored in Amazon S3. Macie can automatically detect sensitive data such as PII, financial data, and credentials.',
    referenceLinks: [
      {
        text: 'Amazon Macie',
        url: 'https://aws.amazon.com/macie/',
      },
    ],
    difficulty: 'medium',
    isUnscored: false,
    tags: ['macie', 'data-protection', 'machine-learning'],
  },
  {
    id: 'd2-017',
    domainId: 2,
    questionText:
      'Which service provides a managed way to store, rotate, and retrieve database credentials and API keys?',
    questionType: 'single_choice',
    options: [
      { id: 'a', text: 'AWS KMS' },
      { id: 'b', text: 'AWS Systems Manager Parameter Store' },
      { id: 'c', text: 'AWS Secrets Manager' },
      { id: 'd', text: 'AWS Certificate Manager' },
    ],
    correctAnswers: ['c'],
    explanation:
      'AWS Secrets Manager helps you manage, retrieve, and rotate database credentials, application credentials, OAuth tokens, API keys, and other secrets. Secrets Manager enables you to replace hardcoded credentials with an API call, reducing the risk of credentials being compromised.',
    referenceLinks: [
      {
        text: 'AWS Secrets Manager',
        url: 'https://aws.amazon.com/secrets-manager/',
      },
    ],
    difficulty: 'medium',
    isUnscored: false,
    tags: ['secrets-manager', 'credentials', 'security-services'],
  },
  {
    id: 'd2-018',
    domainId: 2,
    questionText:
      'Which type of security control acts as a virtual firewall at the instance level in an Amazon VPC?',
    questionType: 'single_choice',
    options: [
      { id: 'a', text: 'Network ACL' },
      { id: 'b', text: 'Security Group' },
      { id: 'c', text: 'AWS WAF' },
      { id: 'd', text: 'AWS Shield' },
    ],
    correctAnswers: ['b'],
    explanation:
      'A Security Group acts as a virtual firewall for your EC2 instances to control inbound and outbound traffic at the instance level. Security groups are stateful — if you allow an inbound request, the response is automatically allowed. In contrast, Network ACLs operate at the subnet level.',
    referenceLinks: [
      {
        text: 'Amazon VPC Security Groups',
        url: 'https://docs.aws.amazon.com/vpc/latest/userguide/vpc-security-groups.html',
      },
    ],
    difficulty: 'easy',
    isUnscored: false,
    tags: ['security-groups', 'vpc', 'network-security'],
  },
  {
    id: 'd2-019',
    domainId: 2,
    questionText:
      'Which AWS service helps manage single sign-on (SSO) access to multiple AWS accounts and business applications?',
    questionType: 'single_choice',
    options: [
      { id: 'a', text: 'AWS IAM' },
      { id: 'b', text: 'AWS IAM Identity Center (formerly AWS SSO)' },
      { id: 'c', text: 'Amazon Cognito' },
      { id: 'd', text: 'AWS Directory Service' },
    ],
    correctAnswers: ['b'],
    explanation:
      'AWS IAM Identity Center (successor to AWS SSO) is where you create or connect your workforce users and centrally manage their access to all of their AWS accounts and applications. You can use multi-account permissions to manage access across AWS accounts.',
    referenceLinks: [
      {
        text: 'AWS IAM Identity Center',
        url: 'https://aws.amazon.com/iam/identity-center/',
      },
    ],
    difficulty: 'medium',
    isUnscored: false,
    tags: ['iam-identity-center', 'sso', 'access-management'],
  },
  {
    id: 'd2-020',
    domainId: 2,
    questionText:
      'What is the purpose of enabling MFA (Multi-Factor Authentication) on AWS accounts?',
    questionType: 'single_choice',
    options: [
      { id: 'a', text: 'To encrypt data at rest in S3 buckets' },
      { id: 'b', text: 'To add an extra layer of protection beyond just a password' },
      { id: 'c', text: 'To automatically back up EC2 instances' },
      { id: 'd', text: 'To enable cross-region replication' },
    ],
    correctAnswers: ['b'],
    explanation:
      'Multi-Factor Authentication (MFA) adds an extra layer of protection on top of your username and password. With MFA enabled, when a user signs in to an AWS Management Console, they will be prompted for their password (first factor) and for an authentication code from their MFA device (second factor).',
    referenceLinks: [
      {
        text: 'Using Multi-Factor Authentication (MFA) in AWS',
        url: 'https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_mfa.html',
      },
    ],
    difficulty: 'easy',
    isUnscored: false,
    tags: ['mfa', 'authentication', 'best-practices'],
  },
  {
    id: 'd2-021',
    domainId: 2,
    questionText:
      'Which AWS service automatically assesses applications for vulnerabilities or deviations from best practices?',
    questionType: 'single_choice',
    options: [
      { id: 'a', text: 'Amazon GuardDuty' },
      { id: 'b', text: 'Amazon Inspector' },
      { id: 'c', text: 'AWS Artifact' },
      { id: 'd', text: 'AWS Security Hub' },
    ],
    correctAnswers: ['b'],
    explanation:
      'Amazon Inspector is an automated security assessment service that helps improve the security and compliance of applications deployed on AWS. It automatically assesses applications for exposure, vulnerabilities, and deviations from best practices, including network accessibility and known software vulnerabilities (CVEs).',
    referenceLinks: [
      {
        text: 'Amazon Inspector',
        url: 'https://aws.amazon.com/inspector/',
      },
    ],
    difficulty: 'medium',
    isUnscored: false,
    tags: ['inspector', 'vulnerability-assessment', 'security-services'],
  },
  {
    id: 'd2-022',
    domainId: 2,
    questionText:
      'Which of the following is a characteristic of Network ACLs (Access Control Lists) in Amazon VPC?',
    questionType: 'single_choice',
    options: [
      { id: 'a', text: 'They are stateful and automatically allow return traffic' },
      { id: 'b', text: 'They operate at the instance level' },
      { id: 'c', text: 'They are stateless and evaluate both inbound and outbound rules independently' },
      { id: 'd', text: 'They can only allow traffic, not deny it' },
    ],
    correctAnswers: ['c'],
    explanation:
      'Network ACLs are stateless, meaning they evaluate both inbound and outbound rules independently. Return traffic must be explicitly allowed by rules. NACLs operate at the subnet level and support both allow and deny rules. This contrasts with Security Groups, which are stateful and operate at the instance level.',
    referenceLinks: [
      {
        text: 'Network ACLs',
        url: 'https://docs.aws.amazon.com/vpc/latest/userguide/vpc-network-acls.html',
      },
    ],
    difficulty: 'medium',
    isUnscored: false,
    tags: ['nacl', 'vpc', 'network-security'],
  },
  {
    id: 'd2-023',
    domainId: 2,
    questionText:
      'Which service allows you to centrally manage firewall rules across multiple accounts and applications?',
    questionType: 'single_choice',
    options: [
      { id: 'a', text: 'AWS Shield' },
      { id: 'b', text: 'AWS Firewall Manager' },
      { id: 'c', text: 'Amazon GuardDuty' },
      { id: 'd', text: 'AWS CloudTrail' },
    ],
    correctAnswers: ['b'],
    explanation:
      'AWS Firewall Manager is a security management service that allows you to centrally configure and manage firewall rules across your accounts and applications in AWS Organizations. It enables you to centrally manage AWS WAF rules, AWS Shield Advanced protections, security groups, and AWS Network Firewall rules.',
    referenceLinks: [
      {
        text: 'AWS Firewall Manager',
        url: 'https://aws.amazon.com/firewall-manager/',
      },
    ],
    difficulty: 'hard',
    isUnscored: false,
    tags: ['firewall-manager', 'security-services', 'multi-account'],
  },
  {
    id: 'd2-024',
    domainId: 2,
    questionText:
      'Which AWS service helps provision and manage SSL/TLS certificates for use with AWS services?',
    questionType: 'single_choice',
    options: [
      { id: 'a', text: 'AWS Secrets Manager' },
      { id: 'b', text: 'AWS Certificate Manager (ACM)' },
      { id: 'c', text: 'AWS KMS' },
      { id: 'd', text: 'AWS CloudHSM' },
    ],
    correctAnswers: ['b'],
    explanation:
      'AWS Certificate Manager (ACM) handles the complexity of creating, storing, and renewing public and private SSL/TLS certificates and keys that protect your AWS websites and applications. ACM certificates can be used with Elastic Load Balancing, CloudFront, API Gateway, and other integrated services.',
    referenceLinks: [
      {
        text: 'AWS Certificate Manager',
        url: 'https://aws.amazon.com/certificate-manager/',
      },
    ],
    difficulty: 'medium',
    isUnscored: false,
    tags: ['acm', 'certificates', 'encryption'],
  },
  {
    id: 'd2-025',
    domainId: 2,
    questionText:
      'Which security best practice involves creating individual IAM users instead of sharing one set of credentials?',
    questionType: 'single_choice',
    options: [
      { id: 'a', text: 'Least privilege' },
      { id: 'b', text: 'Defense in depth' },
      { id: 'c', text: 'Individual accountability' },
      { id: 'd', text: 'Encryption at rest' },
    ],
    correctAnswers: ['c'],
    explanation:
      'Individual accountability means creating separate IAM users for each person who needs access. This allows you to track who made what changes and when. Sharing credentials makes it impossible to track individual actions and is a security anti-pattern.',
    referenceLinks: [
      {
        text: 'IAM Best Practices',
        url: 'https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html',
      },
    ],
    difficulty: 'easy',
    isUnscored: false,
    tags: ['iam', 'best-practices', 'accountability'],
  },
  {
    id: 'd2-026',
    domainId: 2,
    questionText:
      'For an Amazon S3 bucket, which feature can be used to prevent objects from being deleted or overwritten for a specified retention period?',
    questionType: 'single_choice',
    options: [
      { id: 'a', text: 'S3 Versioning' },
      { id: 'b', text: 'S3 Object Lock' },
      { id: 'c', text: 'S3 Lifecycle policies' },
      { id: 'd', text: 'S3 Cross-Region Replication' },
    ],
    correctAnswers: ['b'],
    explanation:
      'Amazon S3 Object Lock allows you to store objects using a write-once-read-many (WORM) model. Object Lock prevents objects from being deleted or overwritten for a fixed amount of time or indefinitely. This feature helps meet regulatory requirements that require WORM storage.',
    referenceLinks: [
      {
        text: 'Amazon S3 Object Lock',
        url: 'https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lock.html',
      },
    ],
    difficulty: 'hard',
    isUnscored: false,
    tags: ['s3', 'object-lock', 'data-protection'],
  },
  {
    id: 'd2-027',
    domainId: 2,
    questionText:
      'Which AWS service provides hardware security modules (HSMs) to help you meet corporate, contractual, and regulatory compliance requirements for data security?',
    questionType: 'single_choice',
    options: [
      { id: 'a', text: 'AWS KMS' },
      { id: 'b', text: 'AWS CloudHSM' },
      { id: 'c', text: 'AWS Secrets Manager' },
      { id: 'd', text: 'AWS Shield' },
    ],
    correctAnswers: ['b'],
    explanation:
      'AWS CloudHSM provides hardware security modules (HSMs) in the AWS Cloud. CloudHSM allows you to generate and use your own encryption keys on FIPS 140-2 Level 3 validated hardware. This is useful for regulatory requirements that mandate HSM-based key management.',
    referenceLinks: [
      {
        text: 'AWS CloudHSM',
        url: 'https://aws.amazon.com/cloudhsm/',
      },
    ],
    difficulty: 'hard',
    isUnscored: false,
    tags: ['cloudhsm', 'encryption', 'compliance'],
  },
  {
    id: 'd2-028',
    domainId: 2,
    questionText:
      'What is the primary purpose of AWS Organizations Service Control Policies (SCPs)?',
    questionType: 'single_choice',
    options: [
      { id: 'a', text: 'To grant permissions to IAM users' },
      { id: 'b', text: 'To set maximum available permissions for member accounts' },
      { id: 'c', text: 'To encrypt data across all AWS services' },
      { id: 'd', text: 'To create billing reports' },
    ],
    correctAnswers: ['b'],
    explanation:
      'Service Control Policies (SCPs) are a type of organization policy that you can use to manage permissions in your organization. SCPs set the maximum permissions available to member accounts. SCPs don\'t grant permissions — they define guardrails (limits) that apply to all users and roles in the member accounts, including the root user.',
    referenceLinks: [
      {
        text: 'Service Control Policies (SCPs)',
        url: 'https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scps.html',
      },
    ],
    difficulty: 'hard',
    isUnscored: false,
    tags: ['organizations', 'scp', 'governance'],
  },
  {
    id: 'd2-029',
    domainId: 2,
    questionText:
      'Which of the following encryption options are available for Amazon S3? (Select TWO)',
    questionType: 'multiple_choice',
    options: [
      { id: 'a', text: 'Server-Side Encryption with S3 managed keys (SSE-S3)' },
      { id: 'b', text: 'Client-Side Encryption with IAM policies' },
      { id: 'c', text: 'Server-Side Encryption with KMS keys (SSE-KMS)' },
      { id: 'd', text: 'Encryption with Security Groups' },
      { id: 'e', text: 'Encryption with Network ACLs' },
    ],
    correctAnswers: ['a', 'c'],
    explanation:
      'Amazon S3 supports multiple server-side encryption options: SSE-S3 (S3-managed keys), SSE-KMS (KMS-managed keys), and SSE-C (customer-provided keys). Client-side encryption is also supported where you encrypt data before uploading. Security Groups and NACLs are network controls, not encryption mechanisms.',
    referenceLinks: [
      {
        text: 'Protecting Data Using Encryption',
        url: 'https://docs.aws.amazon.com/AmazonS3/latest/userguide/UsingEncryption.html',
      },
    ],
    difficulty: 'medium',
    isUnscored: false,
    tags: ['s3', 'encryption', 'sse'],
  },
  {
    id: 'd2-030',
    domainId: 2,
    questionText:
      'Which AWS service provides identity management for your web and mobile applications, including user sign-up, sign-in, and access control?',
    questionType: 'single_choice',
    options: [
      { id: 'a', text: 'AWS IAM' },
      { id: 'b', text: 'AWS IAM Identity Center' },
      { id: 'c', text: 'Amazon Cognito' },
      { id: 'd', text: 'AWS Directory Service' },
    ],
    correctAnswers: ['c'],
    explanation:
      'Amazon Cognito provides authentication, authorization, and user management for web and mobile apps. Users can sign in directly with a username and password, or through a third party such as Facebook, Amazon, Google, or Apple. Cognito is designed for external user identity management, unlike IAM which is for AWS resource access.',
    referenceLinks: [
      {
        text: 'Amazon Cognito',
        url: 'https://aws.amazon.com/cognito/',
      },
    ],
    difficulty: 'medium',
    isUnscored: false,
    tags: ['cognito', 'identity', 'mobile'],
  },
];
