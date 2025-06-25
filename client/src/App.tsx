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
import AboutPage from "./pages/About";
import Careers from "./pages/Careers";
import AIConsulting from "./pages/AIConsulting";
import ITConsulting from "./pages/ITConsulting";
import AIDataStrategy from "./pages/AIDataStrategy";
import ProcessOptimization from "./pages/ProcessOptimization";
import AIComponentsDevelopment from "./pages/AIComponentsDevelopment";
import LLMDevelopment from "./pages/LLMDevelopment";
import AIUsecase from "./pages/AIUsecase";
import AIChatbotDevelopment from "./pages/AIChatbotDevelopment";
import GenerativeAIDevelopment from "./pages/GenerativeAIDevelopment";

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/life-science" component={LifeScience} />
        <Route path="/validation" component={Validation} />
        <Route path="/careers" component={Careers} />
        <Route path="/contact" component={ContactInfo} />
        <Route path="/about" component={AboutPage} />
        <Route path="/ai-consulting" component={AIConsulting} />
        <Route path="/it-consulting" component={ITConsulting} />
        <Route path="/ai-data-strategy" component={AIDataStrategy} />
        <Route path="/process-optimization" component={ProcessOptimization} />
        <Route path="/ai-components-development" component={AIComponentsDevelopment} />
        <Route path="/llm-development" component={LLMDevelopment} />
        <Route path="/ai-usecase-discovery" component={AIUsecase} />
        <Route path="/ai-chatbot-development" component={AIChatbotDevelopment} />
        <Route path="/generative-ai-development" component={GenerativeAIDevelopment} />
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