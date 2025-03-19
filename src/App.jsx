import { Outlet, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import Settings from "./pages/Settings";
import ProductDetails from "./pages/ProductDetails";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ProductsContextProvider from "./context/ProductsContext";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });
  return (
    <QueryClientProvider client={queryClient}>
      <ProductsContextProvider>
        <div className="main-container flex">
          <Sidebar />
          <div className="flex-1">
            <Navbar />
            <div className="p-4">
              <Routes>
                <Route path="/" element={<Outlet />}>
                  <Route path="/" element={<Home />} />
                  <Route path="/:productId" element={<ProductDetails />} />
                </Route>
                <Route path="/services" element={<Services />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/settings" element={<Settings />} />
              </Routes>
            </div>
          </div>
        </div>
      </ProductsContextProvider>
    </QueryClientProvider>
  );
}

export default App;
