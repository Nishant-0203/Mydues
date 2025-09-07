import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Play, Check, Users, PieChart, Bell, Brain, Shield, CreditCard, Star, ChevronDown } from "lucide-react";
import Image from "next/image";
import start from "@/public/start.png";
import { Card } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { TESTIMONIALS, FEATURES, STEPS, PRICING_PLANS, FAQ_ITEMS } from "@/lib/landing";

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
                  src={start}
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

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center space-y-6 mb-16">
            <Badge variant="outline" className="bg-white/80 text-purple-700 border-purple-200">
              Testimonials
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                What our users
              </span>
              <br />
              <span className="text-gray-800">are saying</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real stories from real users who love splitting expenses with Mydues.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {TESTIMONIALS.map((testimonial, index) => (
              <Card
                key={index}
                className="p-8 bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl rounded-2xl transition-all duration-300 hover:-translate-y-2 text-center"
              >
                <div className="space-y-6">
                  <div className="flex justify-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  
                  <blockquote className="text-gray-700 italic text-lg leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                  
                  <div className="flex flex-col items-center space-y-3">
                    <div className="w-16 h-16 rounded-full overflow-hidden">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={64}
                        height={64}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-white">
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

      {/* Footer Section */}
      <footer className="bg-gradient-to-br from-purple-50 to-blue-50 relative overflow-hidden pt-16 pb-8">
        {/* Decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-purple-200/30 rounded-full blur-2xl"></div>
          <div className="absolute bottom-10 right-20 w-48 h-48 bg-blue-200/30 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            {/* Logo and Description */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <Image
                  src="/logos/logo45.png"
                  alt="MyDues Logo"
                  width={48}
                  height={48}
                  className="h-12 w-auto"
                />
                <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  MyDues
                </span>
              </div>
              <p className="text-gray-600 leading-relaxed">
                The smartest way to split expenses with friends, roommates, and family.
              </p>
              <div className="flex space-x-5">
                <a href="#" className="text-gray-500 hover:text-purple-600 transition-colors" aria-label="GitHub">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors" aria-label="LinkedIn">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-500 hover:text-yellow-500 transition-colors" aria-label="LeetCode">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863s.235-1.357.702-1.824l4.319-4.38c.467-.467 1.125-.645 1.837-.645s1.357.195 1.823.662l2.674 2.577c.514.515 1.365.497 1.9-.038.535-.536.553-1.387.039-1.901l-2.67-2.563c-.45-.431-1.166-.975-2.001-1.339a6.744 6.744 0 0 0-2.58-.518c-1.2 0-2.358.421-3.302 1.189l-4.327 4.38c-.9.903-1.36 2.067-1.36 3.258 0 1.193.46 2.34 1.36 3.243l4.344 4.364c.95.75 2.13 1.15 3.33 1.15 1.2 0 2.34-.4 3.29-1.15l2.754-2.647c.517-.517.5-1.365-.039-1.9-.537-.533-1.387-.551-1.903-.034zM20.811 13.01H10.666c-.702 0-1.27.604-1.27 1.346s.568 1.346 1.27 1.346h10.145c.701 0 1.27-.604 1.27-1.346s-.569-1.346-1.27-1.346z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-5">Quick Links</h3>
              <ul className="space-y-3">
                <li><Link href="/dashboard" className="text-gray-600 hover:text-purple-600 transition-colors">
                  Dashboard
                </Link></li>
                <li><Link href="#features" className="text-gray-600 hover:text-purple-600 transition-colors">
                  Features
                </Link></li>
                <li><Link href="#how-it-works" className="text-gray-600 hover:text-purple-600 transition-colors">
                  How It Works
                </Link></li>
                <li><Link href="#pricing" className="text-gray-600 hover:text-purple-600 transition-colors">
                  Pricing
                </Link></li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-5">Resources</h3>
              <ul className="space-y-3">
                <li><Link href="/blog" className="text-gray-600 hover:text-purple-600 transition-colors">
                  Blog
                </Link></li>
                <li><Link href="/help" className="text-gray-600 hover:text-purple-600 transition-colors">
                  Help Center
                </Link></li>
                <li><Link href="/api" className="text-gray-600 hover:text-purple-600 transition-colors">
                  API
                </Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-5">Contact Us</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-purple-500 mt-0.5 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-gray-600">support@mydues.app</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-purple-500 mt-0.5 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-gray-600">San Francisco, CA</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Copyright */}
          <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} MyDues. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0 flex space-x-6">
              <Link href="/privacy" className="text-gray-500 hover:text-purple-600 text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-500 hover:text-purple-600 text-sm transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-gray-500 hover:text-purple-600 text-sm transition-colors">
                Cookies
              </Link>
            </div>
            <p className="mt-4 md:mt-0 text-sm text-gray-500">
              Made with ❤️ by Nishant
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
