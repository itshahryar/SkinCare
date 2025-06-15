import {
  Calendar,
  Video,
  CreditCard,
  User,
  FileText,
  ShieldCheck,
} from "lucide-react";

import { Bot, Brain, MessageSquare } from "lucide-react";

export const features = [
  {
    icon: <User className="h-6 w-6 text-emerald-400" />,
    title: "Create Your Profile",
    description:
      "Sign up and build your personal profile to receive vitiligo-specific insights and progress tracking.",
  },
  {
    icon: <Bot className="h-6 w-6 text-emerald-400" />,
    title: "AI Vitiligo Detector",
    description:
      "Upload your skin images and let our AI detector analyze and track vitiligo patches over time.",
  },
  {
    icon: <Brain className="h-6 w-6 text-emerald-400" />,
    title: "AI Care Recommendations",
    description:
      "Get personalized treatment suggestions and skincare routines based on your profile and detection results.",
  },
  {
    icon: <MessageSquare className="h-6 w-6 text-emerald-400" />,
    title: "AI Assistance - Chatbot",
    description:
      "Interact with our smart chatbot for instant answers, progress advice, and support around vitiligo care.",
  },
];

// JSON data for testimonials
export const testimonials = [
  {
    initials: "SP",
    name: "Sarah P.",
    role: "Patient",
    quote:
      "The video consultation feature saved me so much time. I was able to get medical advice without taking time off work or traveling to a clinic.",
  },
  {
    initials: "DR",
    name: "Dr. Robert M.",
    role: "Cardiologist",
    quote:
      "This platform has revolutionized my practice. I can now reach more patients and provide timely care without the constraints of a physical office.",
  },
  {
    initials: "JT",
    name: "James T.",
    role: "Patient",
    quote:
      "The credit system is so convenient. I purchased a package for my family, and we've been able to consult with specialists whenever needed.",
  },
];

// JSON data for credit system benefits
export const creditBenefits = [
  "Each consultation requires <strong class='text-emerald-400'>2 credits</strong> regardless of duration",
  "Credits <strong class='text-emerald-400'>never expire</strong> - use them whenever you need",
  "Monthly subscriptions give you <strong class='text-emerald-400'>fresh credits every month</strong>",
  "Cancel or change your subscription <strong class='text-emerald-400'>anytime</strong> without penalties",
];
