import { Bell, CreditCard, PieChart, Receipt, Users } from "lucide-react";

export const FEATURES = [
  {
    title: "Group Expenses",
    Icon: Users,
    bg: "bg-green-100",
    color: "text-green-600",
    description:
      "Create groups for roommates, trips, or events to keep expenses organized.",
  },
  {
    title: "Smart Settlements",
    Icon: CreditCard,
    bg: "bg-teal-100",
    color: "text-teal-600",
    description:
      "Our algorithm minimises the number of payments when settling up.",
  },
  {
    title: "Expense Analytics",
    Icon: PieChart,
    bg: "bg-green-100",
    color: "text-green-600",
    description:
      "Track spending patterns and discover insights about your shared costs.",
  },
  {
    title: "Payment Reminders",
    Icon: Bell,
    bg: "bg-amber-100",
    color: "text-amber-600",
    description:
      "Automated reminders for pending debts and insights on spending patterns.",
  },
  {
    title: "Multiple Split Types",
    Icon: Receipt,
    bg: "bg-green-100",
    color: "text-green-600",
    description:
      "Split equally, by percentage, or by exact amounts to fit any scenario.",
  },
  {
    title: "Real‑time Updates",
    Icon: () => (
      /* custom inline icon (no Lucide equivalent) */
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <rect width="18" height="18" x="3" y="3" rx="2" />
        <path d="M9 14v8M15 14v8M9 2v6M15 2v6" />
      </svg>
    ),
    bg: "bg-teal-100",
    color: "text-teal-600",
    description:
      "See new expenses and repayments the moment your friends add them.",
  },
];

export const STEPS = [
  {
    label: "1",
    title: "Create or Join a Group",
    description:
      "Start a group for your roommates, trip, or event and invite friends.",
  },
  {
    label: "2",
    title: "Add Expenses",
    description:
      "Record who paid and how the bill should be split amongst members.",
  },
  {
    label: "3",
    title: "Settle Up",
    description: "View who owes what and log payments when debts are cleared.",
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "Ye babu rao ka style hai! With Mydues, I finally stopped getting confused about who paid for what!",
    name: "Babu Rao",
    image: "/testimonials/babubhaiya.png",
    role: "Rental Property Manager",
  },
  {
    quote:
      "Mydues's calculations are so accurate, they're even better than my scheme to double money in 25 days!",
    name: "Raju",
    image: "/testimonials/raju.jpg",
    role: "Stock Market Expert",
  },
  {
    quote:
      "If that I have Mydues, Raju wont get away with selling my shoes and coat! I'll add to his debt!",
    name: "Shyam",
    image: "/testimonials/shyam.png",
    role: "Job Searcher",
  },
];

export const PRICING_PLANS = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Perfect for getting started",
    features: [
      "Up to 3 groups",
      "Basic bill splitting",
      "Settlement tracking",
      "Email reminders",
      "Mobile app access"
    ],
    cta: "Get Started Free",
    popular: false
  },
  {
    name: "Pro",
    price: "$4.99",
    period: "per month",
    description: "For active expense sharers",
    features: [
      "Unlimited groups",
      "AI spending insights", 
      "Advanced splitting options",
      "Priority support",
      "Export data",
      "Custom categories"
    ],
    cta: "Choose Pro",
    popular: true
  },
  {
    name: "Business",
    price: "$12.99", 
    period: "per month",
    description: "For teams and organizations",
    features: [
      "Team management",
      "Bulk settlements",
      "Advanced reporting",
      "API access",
      "White-label options",
      "Dedicated support"
    ],
    cta: "Choose Business",
    popular: false
  }
];

export const FAQ_ITEMS = [
  {
    question: "Is Mydues really free?",
    answer: "Yes! Our free plan includes up to 3 groups and all basic splitting features. You can upgrade anytime for more advanced features."
  },
  {
    question: "How do I settle debts with friends?",
    answer: "Mydues tracks all balances automatically. When it's time to settle up, you'll see exactly who owes what. We send gentle reminders but you handle payments however you prefer."
  },
  {
    question: "Can I use Mydues offline?",
    answer: "While you need internet to sync data, you can view your expenses and balances offline. Any changes you make will sync when you're back online."
  },
  {
    question: "How secure is my financial data?",
    answer: "We use bank-level encryption and Clerk authentication. We never store payment information - we only track who owes what, not how they pay."
  },
  {
    question: "What happens if I cancel my subscription?",
    answer: "You can always downgrade to our free plan. Your data stays safe, you just lose access to premium features like AI insights and unlimited groups."
  }
];