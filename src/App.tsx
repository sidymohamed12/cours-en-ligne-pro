
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/Login";
import StudentDashboard from "./pages/StudentDashboard";
import CoursePage from "./pages/CoursePage";
import AssignmentsPage from "./pages/AssignmentsPage";
import TeacherDashboard from "./pages/TeacherDashboard";
import MessagingPage from "./pages/MessagingPage";
import ProfilePage from "./pages/ProfilePage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard/student" element={<StudentDashboard />} />
          <Route path="/cours" element={<CoursePage />} />
          <Route path="/devoirs" element={<AssignmentsPage />} />
          <Route path="/dashboard/teacher" element={<TeacherDashboard />} />
          <Route path="/messagerie" element={<MessagingPage />} />
          <Route path="/profil" element={<ProfilePage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
