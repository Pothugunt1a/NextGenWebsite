// Solution cards data
export const solutions = [
  {
    id: 1,
    icon: "chart-line",
    title: "Predictive Analytics",
    description:
      "Leverage historical data to forecast trends, anticipate market shifts, and make informed strategic decisions.",
    features: [
      "Sales forecasting",
      "Inventory optimization",
      "Risk assessment",
    ],
  },
  {
    id: 2,
    icon: "robot",
    title: "Intelligent Automation",
    description:
      "Streamline workflows and reduce manual effort with AI-powered automation that adapts to changing conditions.",
    features: [
      "Process optimization",
      "Document processing",
      "Workflow automation",
    ],
  },
  {
    id: 3,
    icon: "comments",
    title: "Conversational AI",
    description:
      "Enhance customer experiences with intelligent chatbots and virtual assistants that understand natural language.",
    features: [
      "24/7 customer support",
      "Personalized interactions",
      "Multilingual capabilities",
    ],
  },
  {
    id: 4,
    icon: "brain",
    title: "Machine Learning Solutions",
    description:
      "Custom ML models that learn from your data to deliver ongoing improvements and intelligent insights.",
    features: [
      "Pattern recognition",
      "Anomaly detection",
      "Recommendation engines",
    ],
  },
  {
    id: 5,
    icon: "search-dollar",
    title: "Business Intelligence",
    description:
      "Transform raw data into actionable insights with advanced analytics and interactive visualization tools.",
    features: [
      "Interactive dashboards",
      "KPI tracking",
      "Real-time data analysis",
    ],
  },
  {
    id: 6,
    icon: "shield-alt",
    title: "AI Security Solutions",
    description:
      "Protect your digital assets with AI-powered threat detection and response capabilities.",
    features: ["Fraud detection", "Threat monitoring", "Behavioral analysis"],
  },
];

// Statistics data
export const stats = [
  {
    id: 1,
    value: 95,
    suffix: "%",
    label: "Client Satisfaction",
    icon: "👥",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80"
  },
  {
    id: 2,
    value: 120,
    suffix: "+",
    label: "Projects Completed",
    icon: "📊",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80"
  },
  {
    id: 3,
    value: 15,
    suffix: "+",
    label: "Industries Served",
    icon: "🌍",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80"
  },
  {
    id: 4,
    value: 35,
    suffix: "%",
    label: "Avg. Efficiency Gain",
    icon: "⚡",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80"
  },
];

// Testimonials data
export const testimonials = [
  {
    id: 1,
    quote:
      "RT NextGenAI's predictive analytics solution has completely transformed our inventory management. We've reduced stockouts by 78% while decreasing overall inventory costs.",
    name: "Sarah Johnson",
    position: "CTO, RetailTech Inc.",
    imageUrl:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=60&h=60&q=80",
  },
  {
    id: 2,
    quote:
      "The machine learning model developed by RT NextGenAI has improved our customer retention by 42%. Their team's expertise and support throughout the implementation was exceptional.",
    name: "Michael Chen",
    position: "VP of Operations, FinServe Global",
    imageUrl:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=60&h=60&q=80",
  },
  {
    id: 3,
    quote:
      "Implementing RT NextGenAI's conversational AI solution has reduced our customer support costs by 35% while improving satisfaction scores. A truly worthwhile investment.",
    name: "Emily Rodriguez",
    position: "Director of CX, TechSolutions Ltd",
    imageUrl:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=60&h=60&q=80",
  },
];

// Navigation links with dropdown menus
export const navLinks = [
  { id: 1, name: "Home", href: "#home" },
  { id: 2, name: "About", href: "/about" },
  {
    id: 3,
    name: "AI",
    href: "/ai-consulting",
    hasDropdown: true,
    dropdownItems: [
      {
        name: "AI Consulting",
        items: [
          { name: "AI and Data Strategy", href: "/ai-data-strategy" },
          { name: "Process Optimization with AI", href: "/process-optimization" },
          { name: "AI Usecase Discovery & Identification", href: "/ai-usecase-discovery" },
        ],
      },
      {
        name: "AI Software Development",
        items: [
          { name: "AI Components Development", href: "/ai-components-development" },
          { name: "AI Application Development", href: "/ai-application-development" },
          { name: "Intelligent Systems Development", href: "/intelligent-systems-development" },
        ],
      },
      {
        name: "Generative AI",
        items: [
          {
              name: "Generative AI Development",
              href: "/generative-ai-development",
            },
          { name: "AI Chatbot Development", href: "/ai-chatbot-development" },
          { name: "LLM Development and Consulting", href: "/llm-development" },
        ],
      },
    ],
  },
  {
    id: 4,
    name: "IT Services",
    href: "#it-services",
    hasDropdown: true,
    dropdownItems: [
      {
        name: "Cloud Services",
        items: [
          { name: "Cloud Computing", href: "/cloud-services" },
          { name: "Azure", href: "/azure-services" },
          { name: "AWS Services", href: "/aws-services" },
          { name: "Salesforce", href: "/salesforce-services" },
        ],
      },
      {
        name: "Data Science",
        items: [
          { name: "Data Analytics", href: "#data-analytics" },
          { name: "Machine Learning", href: "#machine-learning" },
          { name: "Predictive Modeling", href: "#predictive-modeling" },
        ],
      },
      {
        name: "Database",
        items: [
          { name: "BI & Big Data Overview", href: "/bi-big-data-services" },
          { name: "Data Engineering & ETL", href: "/data-engineering-etl" },
          { name: "Data Warehousing & Lakehouse", href: "/data-warehousing-lakehouse" },
          { name: "Business Intelligence & Visualization", href: "/business-intelligence-visualization" },
          { name: "Advanced Analytics & AI/ML", href: "/advanced-analytics-ai-ml" },
          { name: "Real-Time Data & Streaming", href: "/real-time-data-streaming" },
          { name: "Data Governance & MDM", href: "/data-governance-mdm" },
        ],
      },
      {
        name: "BI and Big Data",
        items: [
          { name: "Business Intelligence", href: "#business-intelligence" },
          { name: "Big Data Analytics", href: "#big-data-analytics" },
          { name: "Data Warehousing", href: "#data-warehousing" },
        ],
      },
      {
        name: "Networking and Cyber Security",
        items: [
          { name: "Network Infrastructure", href: "#network-infrastructure" },
          { name: "Cybersecurity Solutions", href: "#cybersecurity" },
          { name: "Security Audits", href: "#security-audits" },
        ],
      },
      {
        name: "Mobile Development",
        items: [
          { name: "iOS Development", href: "/mobile-development" },
          { name: "Android Development", href: "/mobile-development" },
          { name: "Cross-Platform Apps", href: "/mobile-development" },
        ],
      },
      {
        name: "Web Development",
        items: [
          { name: "Frontend Development", href: "/web-development" },
          { name: "Backend Development", href: "/web-development" },
          { name: "Full-Stack Solutions", href: "/web-development" },
        ],
      },
      {
        name: "Systems Integration",
        items: [
          { name: "API Integration", href: "#api-integration" },
          { name: "Third-Party Integrations", href: "#third-party-integrations" },
          { name: "Legacy System Modernization", href: "#legacy-modernization" },
        ],
      },
      {
        name: "ERP",
        items: [
          { name: "ERP Implementation", href: "#erp-implementation" },
          { name: "ERP Customization", href: "#erp-customization" },
          { name: "ERP Support", href: "#erp-support" },
        ],
      },
      {
        name: "DevOps",
        items: [
          { name: "CI/CD Pipeline", href: "/devops-services" },
          { name: "Infrastructure Automation", href: "/devops-services" },
          { name: "Monitoring & Deployment", href: "/devops-services" },
        ],
      },
    ],
  },
  { id: 5, name: "Career", href: "/careers" },
  { id: 6, name: "IT Consulting", href: "/it-consulting" },
  { id: 7, name: "Life Science", href: "/life-science" },
  { id: 8, name: "Validation", href: "/validation" },
  {
    id: 9,
    name: "Projects",
    href: "#projects",
    hasDropdown: true,
    dropdownItems: [
      {
        name: "Events",
        items: [
          { name: "Upcoming Events", href: "#upcoming-events" },
          { name: "Past Events", href: "#past-events" },
          { name: "Event Registration", href: "#event-registration" },
        ],
      },
      {
        name: "Videos",
        items: [
          { name: "Product Demos", href: "#product-demos" },
          { name: "Case Study Videos", href: "#case-study-videos" },
          { name: "Webinar Recordings", href: "#webinar-recordings" },
        ],
      },
      {
        name: "Blog",
        items: [
          { name: "Latest Articles", href: "#latest-articles" },
          { name: "Technical Insights", href: "#technical-insights" },
          { name: "Industry News", href: "#industry-news" },
        ],
      },
    ],
  },
];

// Contact info
export const contactInfo = [
  {
    id: 1,
    icon: "map-marker-alt",
    title: "Location",
    detail: "Bridgewater Dr, Argyle, TX 76226",
  },
  {
    id: 2,
    icon: "envelope",
    title: "Email",
    detail: "info@rtnextgenai.com",
  },
  {
    id: 3,
    icon: "phone-alt",
    title: "Phone",
    detail: "+1 (469) 666 0019",
  },
];

// Social links
export const socialLinks = [
  {
    id: 1,
    name: "linkedin",
    icon: "linkedin-in",
    url: "https://www.linkedin.com/in/venkatesh-naidu-46b59437/",
  },
  { id: 2, name: "twitter", icon: "twitter", url: "#" },
  { id: 3, name: "facebook", icon: "facebook-f", url: "#" },
  { id: 4, name: "instagram", icon: "instagram", url: "#" },
];

// Footer links
export const footerLinks = {
  solutions: [
    { name: "Predictive Analytics", href: "#solutions" },
    { name: "Intelligent Automation", href: "#solutions" },
    { name: "Conversational AI", href: "#solutions" },
    { name: "Machine Learning", href: "#solutions" },
    { name: "Business Intelligence", href: "#solutions" },
  ],
  company: [
    { name: "About Us", href: "#about" },
    { name: "Careers", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ],
  resources: [
    { name: "Case Studies", href: "#" },
    { name: "Whitepapers", href: "#" },
    { name: "Documentation", href: "#" },
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
  ],
};