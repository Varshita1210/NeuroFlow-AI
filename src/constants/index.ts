import { 
  Zap, 
  BarChart3, 
  BrainCircuit, 
  Cpu, 
  Sliders, 
  RefreshCw, 
  ShieldCheck, 
  LineChart 
} from 'lucide-react';

export interface PlanDetails {
  id: string;
  name: string;
  basePriceUSD: number;
  description: string;
  features: string[];
  popular?: boolean;
}

export interface CurrencyConfig {
  code: string;
  symbol: string;
  multiplier: number;
  regionalTariffAdjustment: number; // Regional tariff rate adjust
}

export const CURRENCIES: Record<string, CurrencyConfig> = {
  USD: { code: 'USD', symbol: '$', multiplier: 1.0, regionalTariffAdjustment: 1.0 },
  EUR: { code: 'EUR', symbol: '€', multiplier: 0.92, regionalTariffAdjustment: 0.95 },
  INR: { code: 'INR', symbol: '₹', multiplier: 83.0, regionalTariffAdjustment: 0.65 } // lower regional pricing power adjustment for India
};

export const PLANS: PlanDetails[] = [
  {
    id: 'starter',
    name: 'Starter',
    basePriceUSD: 29,
    description: 'Essential data automation tools for fast-growing startups and builders.',
    features: [
      '10,000 operations per month',
      '5 active workflow pipelines',
      'Standard predictive analytics',
      'Real-time data synchronization',
      'Smart insights engine (basic)',
      'Community & email support'
    ]
  },
  {
    id: 'professional',
    name: 'Professional',
    basePriceUSD: 99,
    description: 'Advanced machine learning, multi-source pipelines, and real-time monitoring.',
    features: [
      '100,000 operations per month',
      'Unlimited workflow pipelines',
      'Advanced predictive modeling',
      'Custom LLM agent logic integrations',
      'Dedicated API endpoint generation',
      'Priority support (under 1 hour SLA)',
      'SOC-2 compliant environment'
    ],
    popular: true
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    basePriceUSD: 299,
    description: 'Custom modeling, custom limits, high reliability, and dedicated VPC hosting.',
    features: [
      'Unlimited operations per month',
      'Custom LLM fine-tuning nodes',
      'Multi-region private cloud tenancy',
      'SLA-backed 99.99% system uptime',
      'Dedicated Solutions Engineer',
      'Custom security key rotation',
      'Direct DB-to-DB streaming pipelines'
    ]
  }
];

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  badge?: string;
  gradient: string;
}

export const FEATURES: FeatureItem[] = [
  {
    id: 'ai-automation',
    title: 'AI Workflow Automation',
    description: 'Run background agent actions triggered by real-time streams. Connect legacy data to LLMs effortlessly.',
    iconName: 'Zap',
    badge: 'Core Feature',
    gradient: 'from-blue-600/20 to-indigo-600/20'
  },
  {
    id: 'predictive-analytics',
    title: 'Predictive Analytics',
    description: 'Synthesize data trends, anticipate demand drops, and automate response triggers with high precision.',
    iconName: 'BarChart3',
    badge: 'Popular',
    gradient: 'from-indigo-600/20 to-purple-600/20'
  },
  {
    id: 'smart-insights',
    title: 'Smart Insights',
    description: 'Natural language summaries generated instantly from raw database states, keeping team leads informed.',
    iconName: 'BrainCircuit',
    gradient: 'from-purple-600/20 to-pink-600/20'
  },
  {
    id: 'api-integrations',
    title: 'API Integrations',
    description: 'Native, low-latency connectors for Snowflake, Databricks, PostgreSQL, Salesforce, and custom REST APIs.',
    iconName: 'Cpu',
    gradient: 'from-pink-600/20 to-rose-600/20'
  },
  {
    id: 'no-code-builder',
    title: 'No-Code Workflow Builder',
    description: 'Drag, drop, and declare logic paths. Seamlessly transition from layout design to active script generation.',
    iconName: 'Sliders',
    badge: 'Visual Editor',
    gradient: 'from-blue-600/20 to-cyan-600/20'
  },
  {
    id: 'cloud-sync',
    title: 'Cloud Sync & Mirroring',
    description: 'Always-on secure synchronization between data sources with sub-millisecond conflict resolution engine.',
    iconName: 'RefreshCw',
    gradient: 'from-cyan-600/20 to-teal-600/20'
  },
  {
    id: 'enterprise-security',
    title: 'Enterprise Security',
    description: 'End-to-end TLS 1.3 encryption, SOC-2 Type II audit logs, row-level access control, and secret masking.',
    iconName: 'ShieldCheck',
    badge: 'Secure',
    gradient: 'from-teal-600/20 to-emerald-600/20'
  },
  {
    id: 'real-time-monitoring',
    title: 'Real-Time Monitoring',
    description: 'Beautiful, low-latency dashboards updating live with query volumes, action counts, and engine states.',
    iconName: 'LineChart',
    gradient: 'from-emerald-600/20 to-blue-600/20'
  }
];

export interface TestimonialItem {
  id: string;
  name: string;
  designation: string;
  company: string;
  review: string;
  rating: number;
  avatar: string;
}

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 't1',
    name: 'Sarah Jenkins',
    designation: 'VP of Data Platforms',
    company: 'Stripe-like Fintech Corp',
    review: 'NeuroFlow AI completely transformed how we ingest and categorize structured logs. We replaced 24 complex custom-coded Cron microservices with three intelligent visual pipelines. Incredible speed!',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&h=120&q=80'
  },
  {
    id: 't2',
    name: 'Marcus Chen',
    designation: 'Director of Operations',
    company: 'Global Retail Systems',
    review: 'The automated predictive analytics predicted inventory shortages three days earlier than our standard legacy BI system. The ROI was clear within the first week of deployment.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80'
  },
  {
    id: 't3',
    name: 'Elena Rostova',
    designation: 'Lead Solutions Architect',
    company: 'Vercel-level SaaS Platform',
    review: 'Building API integration nodes used to consume weeks of dev time. NeuroFlows drag-and-drop workflow builder let us connect our entire CRM suite to Databricks in under four hours.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&h=120&q=80'
  }
];

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const FAQS: FaqItem[] = [
  {
    id: 'faq1',
    question: 'How does NeuroFlow AI integrate with our existing databases?',
    answer: 'NeuroFlow AI connects via secure read-only mirrors or writeback configurations using pre-built adapters for Snowflake, Databricks, PostgreSQL, MongoDB, and Salesforce. Setup takes less than five minutes using your existing security credentials.'
  },
  {
    id: 'faq2',
    question: 'Can we self-host or configure NeuroFlow AI inside our own AWS/GCP VPC?',
    answer: 'Yes! Our Enterprise tier supports private VPC deployment via single-tenant Kubernetes orchestration. Your data never leaves your secure cloud environment, fulfilling strict GDPR, HIPAA, and financial regulations.'
  },
  {
    id: 'faq3',
    question: 'How is the API pricing computed? Will we get unexpected billing overages?',
    answer: 'Unlike legacy platforms, we never charge auto-overages. When you approach 90% of your plan limit, we send you alerts and let you manually toggle pipeline throttles. Unused operation credits roll over for up to three months.'
  },
  {
    id: 'faq4',
    question: 'What models power the Predictive Analytics and Intelligent workflows?',
    answer: 'NeuroFlow AI runs on our proprietary fine-tuned model suite, combined with latency-optimized agents powered by Gemini Flash models. This allows ultra-fast processing speeds (under 40ms) for high-frequency operations.'
  },
  {
    id: 'faq5',
    question: 'Do you offer custom SLA agreements and technical onboarding assistance?',
    answer: 'Yes! Professional and Enterprise plans include dedicated technical account managers, live Slack support channels, custom logic review, and 99.9% to 99.99% uptime guarantees backed by structured service agreements.'
  }
];

export const TRUSTED_COMPANIES = [
  { name: 'Google', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/google/google-original.svg', isDevicon: true },
  { name: 'Microsoft', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoft/microsoft-original.svg', isDevicon: true },
  { name: 'Amazon', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg', isDevicon: true },
  { name: 'OpenAI', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg', isDevicon: false },
  { name: 'Adobe', logo: 'https://upload.wikimedia.org/wikipedia/commons/e/e2/Adobe_Logo.svg', isDevicon: false },
  { name: 'Spotify', logo: 'https://upload.wikimedia.org/wikipedia/commons/8/84/Spotify_Logo_Anatomy.svg', isDevicon: false },
  { name: 'Netflix', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg', isDevicon: false }
];
