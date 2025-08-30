import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Play, Check, Users, PieChart, Bell, Brain, Shield, CreditCard, Star, ChevronDown } from "lucide-react";
import Image from "next/image";
import hero from "@/public/hero.png";
import { Card } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

// Updated features data
const FEATURES = [
  {
    title: "Smart Bill Splitting",
    Icon: PieChart,
    bg: "bg-purple-100",
    color: "text-purple-600",
    description: "Split bills equally, by percentage, or exact amounts. Perfect for any situation."
  },
  {
    title: "Group Management",
    Icon: Users,
    bg: "bg-blue-100",
    color: "text-blue-600",
    description: "Create groups with friends, assign roles, and manage expenses together seamlessly."
  },
  {
    title: "Auto Settlements",
    Icon: CreditCard,
    bg: "bg-green-100",
    color: "text-green-600",
    description: "Track who owes what and settle up with automated payment reminders."
  },
  {
    title: "Smart Reminders",
    Icon: Bell,
    bg: "bg-yellow-100",
    color: "text-yellow-600",
    description: "Never forget to collect money with gentle email reminders sent automatically."
  },
  {
    title: "AI Insights",
    Icon: Brain,
    bg: "bg-indigo-100",
    color: "text-indigo-600",
    description: "Get monthly spending insights and smart suggestions powered by AI."
  },
  {
    title: "Secure & Private",
    Icon: Shield,
    bg: "bg-red-100",
    color: "text-red-600",
    description: "Bank-level security with Clerk authentication keeps your data safe."
  }
];

// Updated steps data
const STEPS = [
  {
    label: "1",
    title: "Create a Group",
    description: "Add your friends and create a group for your shared expenses. Set roles and permissions easily."
  },
  {
    label: "2", 
    title: "Add Expenses",
    description: "Log expenses and choose how to split them - equally, by percentage, or exact amounts."
  },
  {
    label: "3",
    title: "Settle Up Smart",
    description: "Get automated reminders and AI insights. Pay back friends without the awkwardness."
  }
];

// Pricing data
const PRICING_PLANS = [
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

// FAQ data
const FAQ_ITEMS = [
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

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section - Full height, above-the-fold */}
      <section className="min-h-screen flex items-center pt-16 relative overflow-hidden">
        {/* Background with gradient and floating shapes */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50">
          <div className="absolute top-20 left-10 w-32 h-32 bg-purple-200/30 rounded-full blur-2xl"></div>
          <div className="absolute top-40 right-20 w-48 h-48 bg-blue-200/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-indigo-200/30 rounded-full blur-2xl"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Content */}
            <div className="space-y-8 text-center lg:text-left">
              <Badge variant="outline" className="bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 border-purple-200">
                Split expenses smartly with friends
              </Badge>
              
              <h1 className="text-5xl md:text-7xl font-bold">
                <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Split expenses
                </span>
                <br />
                <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  smartly
                </span>
                <br />
                <span className="text-gray-800">with friends.</span>
              </h1>
              
              <p className="text-xl text-gray-600 max-w-2xl">
                Track shared expenses, manage groups, and settle up without awkwardness — all in one app.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white border-none rounded-2xl px-8 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-200"
                >
                  <Link href="/dashboard">
                    Get Started Free
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-2 border-purple-200 text-purple-600 hover:bg-purple-50 rounded-2xl px-8 hover:border-purple-300 transition-all duration-200"
                >
                  <Link href="#how-it-works">
                    <Play className="mr-2 h-5 w-5" />
                    See Demo
                  </Link>
                </Button>
              </div>
            </div>
            
            {/* Right side - Dashboard mockup */}
            <div className="relative">
              <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-2xl p-1 hover:shadow-3xl hover:scale-[1.02] transition-all duration-300">
                <Image
                  src={hero}
                  alt="Mydues Dashboard Preview"
                  width={600}
                  height={400}
                  className="rounded-xl w-full h-auto"
                  priority
                />
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-green-400 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                ✨ AI Powered
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center space-y-6 mb-16">
            <Badge variant="outline" className="bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 border-purple-200">
              Features
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Why Mydues?
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to manage shared expenses effortlessly.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {FEATURES.map(({ title, Icon, bg, color, description }) => (
              <Card
                key={title}
                className="group p-8 text-center bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl rounded-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className={`w-16 h-16 ${bg} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`h-8 w-8 ${color}`} />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">{title}</h3>
                <p className="text-gray-600 leading-relaxed">{description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center space-y-6 mb-16">
            <Badge variant="outline" className="bg-white/80 text-purple-700 border-purple-200">
              How It Works
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Splitting expenses
              </span>
              <br />
              <span className="text-gray-800">has never been easier</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Follow these simple steps to start tracking and splitting expenses with friends.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {STEPS.map(({ description, label, title }, index) => (
              <div key={label} className="text-center space-y-6 relative">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto text-2xl font-bold text-white shadow-lg">
                  {label}
                </div>
                <h3 className="text-2xl font-bold text-gray-800">{title}</h3>
                <p className="text-gray-600 leading-relaxed">{description}</p>
                
                {/* Connection line */}
                {index < STEPS.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-0.5 bg-gradient-to-r from-purple-300 to-blue-300"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center space-y-6 mb-16">
            <Badge variant="outline" className="bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 border-purple-200">
              Pricing
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Choose your plan
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Start free, upgrade when you need more power.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {PRICING_PLANS.map((plan) => (
              <Card
                key={plan.name}
                className={`relative p-8 rounded-2xl transition-all duration-300 hover:scale-105 ${
                  plan.popular 
                    ? 'bg-gradient-to-br from-purple-500 to-blue-500 text-white shadow-2xl border-0' 
                    : 'bg-white shadow-lg hover:shadow-xl border-0'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-1">
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <div className="space-y-6">
                  <div>
                    <h3 className={`text-2xl font-bold ${plan.popular ? 'text-white' : 'text-gray-800'}`}>
                      {plan.name}
                    </h3>
                    <p className={`${plan.popular ? 'text-purple-100' : 'text-gray-600'} mt-2`}>
                      {plan.description}
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-baseline gap-2">
                      <span className={`text-4xl font-bold ${plan.popular ? 'text-white' : 'text-gray-800'}`}>
                        {plan.price}
                      </span>
                      <span className={`${plan.popular ? 'text-purple-100' : 'text-gray-600'}`}>
                        {plan.period}
                      </span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <Check className={`h-5 w-5 flex-shrink-0 ${plan.popular ? 'text-purple-200' : 'text-green-500'}`} />
                        <span className={`${plan.popular ? 'text-purple-100' : 'text-gray-600'}`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button
                    asChild
                    className={`w-full rounded-2xl transition-all duration-200 ${
                      plan.popular
                        ? 'bg-white text-purple-600 hover:bg-purple-50 shadow-lg hover:shadow-xl'
                        : 'bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white shadow-lg hover:shadow-xl hover:scale-105'
                    }`}
                  >
                    <Link href="/dashboard">
                      {plan.cta}
                    </Link>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center space-y-6 mb-16">
            <Badge variant="outline" className="bg-white/80 text-purple-700 border-purple-200">
              FAQ
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Frequently asked
              </span>
              <br />
              <span className="text-gray-800">questions</span>
            </h2>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-4">
            {FAQ_ITEMS.map((item, index) => (
              <Collapsible key={index}>
                <CollapsibleTrigger className="flex w-full items-center justify-between p-6 bg-white/80 backdrop-blur-sm rounded-2xl hover:bg-white transition-all duration-200 text-left group">
                  <span className="text-lg font-medium text-gray-800 pr-4">{item.question}</span>
                  <ChevronDown className="h-5 w-5 text-gray-500 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                </CollapsibleTrigger>
                <CollapsibleContent className="px-6 pb-6 pt-2 bg-white/80 backdrop-blur-sm -mt-2 rounded-b-2xl">
                  <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                </CollapsibleContent>
              </Collapsible>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-10 right-10 w-48 h-48 bg-white/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 text-center space-y-8 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Ready to split smarter?
          </h2>
          <p className="text-xl text-purple-100 max-w-2xl mx-auto">
            Join thousands of users who have made splitting expenses stress-free and smart.
          </p>
          <Button 
            asChild 
            size="lg" 
            className="bg-white text-purple-600 hover:bg-purple-50 rounded-2xl px-8 shadow-2xl hover:shadow-3xl hover:scale-110 transition-all duration-300 text-lg font-semibold"
          >
            <Link href="/dashboard">
              Get Started Free
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
