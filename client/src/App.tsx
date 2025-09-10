import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "./components/ui/toaster";
import { TooltipProvider } from "./components/ui/tooltip";
import NotFound from "./pages/not-found";
import Home from "./pages/Home";
import LifeScience from "./pages/LifeScienceNew";
import Layout from "./components/Layout";
import Validation from "./pages/Validation";
import ContactInfo from "./pages/ContactInfo";
import CloudServices from "./pages/CloudServices";
import AboutPage from "./pages/About";
import Careers from "./pages/Careers";
import AIConsulting from "./pages/AIConsulting";
import ITConsulting from "./pages/ITConsulting";
import AIDataStrategy from "./pages/AIDataStrategy";
import ProcessOptimization from "./pages/ProcessOptimization";
import AIComponentsDevelopment from "./pages/AIComponentsDevelopment";
import LLMDevelopment from "./pages/LLMDevelopment";
import AIUsecaseDiscovery from "./pages/AIUsecaseDiscovery";
import AIChatbotDevelopment from "./pages/AIChatbotDevelopment";
import GenerativeAIDevelopment from "./pages/GenerativeAIDevelopment";
import AIApplicationDevelopment from "./pages/AIApplicationDevelopment";
import IntelligentSystemsDevelopment from "./pages/IntelligentSystemsDevelopment";
import AWSServices from "./pages/AWSServices";
import AzureServices from "./pages/AzureServices";
import SalesforceServices from "./pages/SalesforceServices";
import MobileDevelopment from "./pages/MobileDevelopment";
import WebDevelopment from "./pages/WebDevelopment";
import DevOpsServices from "./pages/DevOpsServices";
import DataWarehousingLakes from "./pages/DataWarehousingLakes";
import DataEngineeringETL from "./pages/DataEngineeringETL";
import BIBigDataServices from "./pages/BIBigDataServices";
import BusinessIntelligenceVisualization from "./pages/BusinessIntelligenceVisualization";
import RealTimeDataStreaming from "./pages/RealTimeDataStreaming";
import DataGovernanceMDM from "./pages/DataGovernanceMDM";
import AdvancedAnalyticsAIML from "./pages/AdvancedAnalyticsAIML";
import CoreDataScience from "./pages/CoreDataScience";
import MachineLearningServices from "./pages/MachineLearningServices";
import ArtificialIntelligenceServices from "./pages/ArtificialIntelligenceServices";

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/life-science" component={LifeScience} />
        <Route path="/validation" component={Validation} />
        <Route path="/careers" component={Careers} />
        <Route path="/contact" component={ContactInfo} />
        <Route path="/cloud-services" component={CloudServices} />
        <Route path="/about" component={AboutPage} />
        <Route path="/ai-consulting" component={AIConsulting} />
        <Route path="/it-consulting" component={ITConsulting} />
        <Route path="/ai-data-strategy" component={AIDataStrategy} />
        <Route path="/process-optimization" component={ProcessOptimization} />
        <Route path="/ai-components-development" component={AIComponentsDevelopment} />
        <Route path="/llm-development" component={LLMDevelopment} />
        <Route path="/ai-usecase-discovery" component={AIUsecaseDiscovery} />
        <Route path="/ai-chatbot-development" component={AIChatbotDevelopment} />
        <Route path="/generative-ai-development" component={GenerativeAIDevelopment} />
        <Route path="/ai-application-development" component={AIApplicationDevelopment} />
        <Route path="/intelligent-systems-development" component={IntelligentSystemsDevelopment} />
        <Route path="/aws-services" component={AWSServices} />
        <Route path="/azure-services" component={AzureServices} />
        <Route path="/salesforce-services" component={SalesforceServices} />
        <Route path="/mobile-development" component={MobileDevelopment} />
        <Route path="/web-development" component={WebDevelopment} />
        <Route path="/devops-services" component={DevOpsServices} />
        <Route path="/data-engineering-etl" component={DataEngineeringETL} />
        <Route path="/data-warehousing-lakehouse" component={DataWarehousingLakes} />
        <Route path="/business-intelligence-visualization" component={BusinessIntelligenceVisualization} />
        <Route path="/bi-big-data-services" component={BIBigDataServices} />
        <Route path="/real-time-data-streaming" component={RealTimeDataStreaming} />
        <Route path="/data-governance-mdm" component={DataGovernanceMDM} />
        <Route path="/advanced-analytics-ai-ml" component={AdvancedAnalyticsAIML} />
        <Route path="/core-data-science" component={CoreDataScience} />
        <Route path="/machine-learning-services" component={MachineLearningServices} />
        <Route path="/artificial-intelligence-services" component={ArtificialIntelligenceServices} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;