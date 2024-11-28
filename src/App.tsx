import { Toaster } from "sonner";
import Layout from "./layout";
import { Router } from "./router";

export function App() {
  return (
    <Layout>
      <Toaster />
      <Router />
    </Layout>
  );
}
