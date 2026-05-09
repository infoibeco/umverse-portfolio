import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { Layout } from "@/components/Layout";
import Home from "@/pages/Home";
import Films from "@/pages/Films";
import Fiction from "@/pages/Fiction";
import Archive from "@/pages/Archive";
import ArchiveAccess from "@/pages/ArchiveAccess";
import Slate from "@/pages/Slate";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/films" component={Films} />
        <Route path="/fiction" component={Fiction} />
        <Route path="/archive" component={Archive} />
        <Route path="/archive-access" component={ArchiveAccess} />
        <Route path="/slate" component={Slate} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster />
      <Router />
    </QueryClientProvider>
  );
}

export default App;
