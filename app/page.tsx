"use client";

import React from "react";
import { Book, Database, TrendingUp, Search, ChevronRight, LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  const handleGetStarted = () => {
    router.push("/login");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <nav className="container mx-auto flex justify-between items-center py-4 px-6">
          <div className="flex items-center space-x-2">
            <Link href="/">
              <h1 className="text-2xl font-bold text-blue-600 cursor-pointer">GitHired</h1>
            </Link>
          </div>
          <div className="flex space-x-6">
            <a href="#features" className="text-gray-700 hover:text-blue-600 transition">Features</a>
            <a href="#how-it-works" className="text-gray-700 hover:text-blue-600 transition">How It Works</a>
            <Link href="/login">
              <Button variant="outline" className="px-4 py-2">
                <LogIn className="mr-2 w-4 h-4" />
                Login
              </Button>
            </Link>
            <Button 
              onClick={handleGetStarted}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2"
            >
              Get Started
            </Button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <main>
        <section className="container mx-auto px-6 py-16 lg:py-24 grid md:grid-cols-2 items-center gap-12">
          <div className="space-y-6">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Transform Job Market Insights with Natural Language
            </h2>
            <p className="text-xl text-gray-600 max-w-xl">
              GitHired revolutionizes job market analysis by converting natural language queries into powerful SQL-driven insights.
            </p>
            <div className="flex space-x-4">
              <Button 
                onClick={handleGetStarted}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg"
              >
                Get Started
                <ChevronRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" className="px-6 py-3">
                Learn More
              </Button>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="bg-white p-6 rounded-xl shadow-2xl border border-gray-100">
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="flex items-center space-x-3 mb-4">
                  <Search className="w-6 h-6 text-blue-600" />
                  <span className="text-gray-700 font-medium">Sample Query</span>
                </div>
                <p className="text-gray-600 italic">"Show me software engineering job trends in San Francisco"</p>
              </div>
              <div className="mt-4 bg-green-50 p-4 rounded-lg">
                <div className="flex items-center space-x-3 mb-4">
                  <Database className="w-6 h-6 text-green-600" />
                  <span className="text-gray-700 font-medium">Instant Insights</span>
                </div>
                <p className="text-gray-600">Comprehensive job market analysis delivered in seconds</p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="container mx-auto px-6 py-16 lg:py-24 bg-white">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Simple. Powerful. Intelligent.
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              GitHired simplifies complex job market research by translating natural language into precise, actionable SQL queries.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Natural Language Input",
                description: "Enter job market questions in plain English, no SQL expertise required."
              },
              {
                step: "2",
                title: "NLP Query Translation",
                description: "Our advanced NLP engine converts your query into an optimized SQL statement."
              },
              {
                step: "3",
                title: "Instant Insights",
                description: "Receive comprehensive, data-driven job market insights within seconds."
              }
            ].map((item) => (
              <Card key={item.step} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="text-5xl font-bold text-blue-600 mb-4">{item.step}</div>
                  <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="container mx-auto px-6 py-16 lg:py-24 bg-gray-50">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose GitHired?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Unlock the power of intelligent job market analysis with our cutting-edge NLP-to-SQL platform.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Search className="w-12 h-12 text-blue-500" />,
                title: "Natural Language Queries",
                description: "Transform complex job market questions into precise SQL-powered insights with simple English commands."
              },
              {
                icon: <Database className="w-12 h-12 text-purple-500" />,
                title: "Comprehensive Data",
                description: "Access an extensive repository of job market data from multiple sources, delivering rich, actionable intelligence."
              },
              {
                icon: <TrendingUp className="w-12 h-12 text-green-500" />,
                title: "Advanced Analytics",
                description: "Uncover hidden job market trends, salary dynamics, and skill landscape with intelligent data processing."
              },
              {
                icon: <Book className="w-12 h-12 text-pink-500" />,
                title: "Intuitive Reporting",
                description: "Generate sophisticated reports and visualizations with natural language, making complex data effortlessly understandable."
              }
            ].map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="text-center p-6">
                  <div className="mb-4 flex justify-center">{feature.icon}</div>
                  <h3 className="font-semibold text-gray-900 text-xl mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-white border-t">
          <div className="container mx-auto px-6 py-12 grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">GitHired</h4>
              <p className="text-gray-600">Transforming job market research with NLP-powered SQL queries.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h4>
              <nav className="space-y-2">
                <a href="#features" className="text-gray-600 hover:text-blue-600">Features</a>
                <a href="#how-it-works" className="block text-gray-600 hover:text-blue-600">How It Works</a>
              </nav>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Contact</h4>
              <p className="text-gray-600">hello@githired.com</p>
            </div>
          </div>
          <div className="border-t py-4 text-center text-gray-600">
            © 2024 GitHired. All rights reserved.
          </div>
        </footer>
      </main>
    </div>
  );
}
