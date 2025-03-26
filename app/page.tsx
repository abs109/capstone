import React, { useState } from 'react';
import { Book, Database, TrendingUp, Search, ChevronRight } from 'lucide-react';

export default function HomePage() {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      icon: <Search className="w-12 h-12 text-blue-500" />,
      title: "Natural Language Queries",
      description: "Transform complex job market questions into precise SQL-powered insights with simple English commands.",
      gradient: "from-blue-500 to-blue-700"
    },
    {
      icon: <Database className="w-12 h-12 text-purple-500" />,
      title: "Comprehensive Data",
      description: "Access an extensive repository of job market data from multiple sources, delivering rich, actionable intelligence.",
      gradient: "from-purple-500 to-purple-700"
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-green-500" />,
      title: "Advanced Analytics",
      description: "Uncover hidden job market trends, salary dynamics, and skill landscape with intelligent data processing.",
      gradient: "from-green-500 to-green-700"
    },
    {
      icon: <Book className="w-12 h-12 text-pink-500" />,
      title: "Intuitive Reporting",
      description: "Generate sophisticated reports and visualizations with natural language, making complex data effortlessly understandable.",
      gradient: "from-pink-500 to-pink-700"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">GH</span>
            </div>
            <h1 className="text-2xl font-bold text-gray-800">GitHired</h1>
          </div>
          <div className="flex items-center space-x-6">
            <a href="#features" className="text-gray-600 hover:text-blue-600 transition">Features</a>
            <a href="#how-it-works" className="text-gray-600 hover:text-blue-600 transition">How It Works</a>
            <a 
              href="#contact" 
              className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full hover:opacity-90 transition"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="container mx-auto px-6 pt-24 pb-16 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-5xl font-bold text-gray-800 mb-6 leading-tight">
            Transform Natural Language into <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">SQL Intelligence</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            GitHired bridges the complexity of job market data by converting natural language queries into powerful SQL-driven insights, making data exploration intuitive and seamless.
          </p>
          <div className="flex space-x-4">
            <button className="flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full hover:opacity-90 transition">
              Explore Platform <ChevronRight className="ml-2" />
            </button>
          </div>
        </div>
        <div className="hidden md:block">
          <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="text-sm text-gray-500 mb-2">Natural Language Query:</div>
              <div className="text-lg font-semibold text-gray-800 mb-4">
                "Show me software engineering jobs in San Francisco with salaries above $150,000"
              </div>
              <div className="text-sm text-gray-500 mb-2">SQL Generated:</div>
              <code className="block bg-gray-50 p-3 rounded-md text-xs text-gray-700 overflow-x-auto">
                SELECT job_title, company, salary<br />
                FROM job_listings<br />
                WHERE job_category = 'Software Engineering'<br />
                AND location = 'San Francisco'<br />
                AND salary > 150000;
              </code>
            </div>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all group 
                ${activeFeature === index ? border-2 border-transparent bg-gradient-to-br ${feature.gradient} text-white : ''}`}
              onMouseEnter={() => setActiveFeature(index)}
            >
              <div className={mb-4 ${activeFeature === index ? 'text-white' : ''}}>
                {feature.icon}
              </div>
              <h4 className={text-xl font-semibold mb-3 ${activeFeature === index ? 'text-white' : 'text-gray-800'}}>
                {feature.title}
              </h4>
              <p className={${activeFeature === index ? 'text-white/80' : 'text-gray-600'}}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-500">&copy; 2024 GitHired. Transforming Data Intelligence.</p>
        </div>
      </footer>
    </div>
  );
}
