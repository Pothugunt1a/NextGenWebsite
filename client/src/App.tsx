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