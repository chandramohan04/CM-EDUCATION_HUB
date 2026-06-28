import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Courses from "./pages/Courses";
import CourseDetail from "./pages/CourseDetail";
import EnquiryForm from "./pages/EnquiryForm";
import Admin from "./pages/Admin";
import Colleges from "./pages/Colleges";
import StudentLogin from "./pages/StudentLogin";
import Register from "./pages/Register";
import StudentDashboard from "./pages/StudentDashboard";
import FloatingContact from "@/components/FloatingContact";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <FloatingContact />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/colleges" element={<Colleges />} />
          <Route path="/course/:id" element={<CourseDetail />} />
          <Route path="/enquiry" element={<EnquiryForm />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/student/login" element={<StudentLogin />} />
          <Route path="/student/register" element={<Register />} />
          <Route path="/student/dashboard" element={<StudentDashboard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
