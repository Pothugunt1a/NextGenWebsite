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
    value: "95%",
    label: "Client Satisfaction",
  },
  {
    id: 2,
    value: "120+",
    label: "Projects Completed",
  },
  {
    id: 3,
    value: "15+",
    label: "Industries Served",
  },
  {
    id: 4,
    value: "35%",
    label: "Avg. Efficiency Gain",
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
  { id: 2, name: "About", href: "#about" },
  {
    id: 3,
    name: "AI",
    href: "#ai",
    hasDropdown: true,
    dropdownItems: [
      {
        name: "AI Consulting",
        items: [
          { name: "AI and Data Strategy", href: "#ai-strategy" },
          {
            name: "Process Optimization with AI",
            href: "#process-optimization",
          },
          {
            name: "AI Use Case Discovery & Identification",
            href: "#use-case-discovery",
          },
        ],
      },
      {
        name: "AI Software Development",
        items: [
          { name: "AI Components Development", href: "#ai-components" },
          { name: "AI Academy - R&D for AI", href: "#ai-academy" },
          { name: "SOTA Research/Patents", href: "#sota-research" },
        ],
      },
      {
        name: "Generative AI",
        items: [
          { name: "Generative AI Development", href: "#generative-ai" },
          { name: "AI Chatbot Development", href: "#chatbot" },
          { name: "LLM Development and Consulting", href: "#llm-consulting" },
        ],
      },
    ],
  },
  { id: 4, name: "IT Services", href: "#it-services" },
  { id: 5, name: "Career", href: "#career" },
  { id: 6, name: "IT Consulting", href: "#it-consulting" },
  { id: 7, name: "Life Science", href: "/life-science" },
  { id: 8, name: "Validation", href: "/validation" },
  { id: 9, name: "Projects", href: "#projects" },
  { id: 10, name: "Contact", href: "#contact" },
];

// Contact info
export const contactInfo = [
  {
    id: 1,
    icon: "map-marker-alt",
    title: "Location",
    detail: "123 Innovation Ave, San Francisco, CA 94107",
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
    detail: "+1 (555) 123-4567",
  },
];

// Social links
export const socialLinks = [
  { id: 1, name: "linkedin", icon: "linkedin-in", url: "#" },
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
