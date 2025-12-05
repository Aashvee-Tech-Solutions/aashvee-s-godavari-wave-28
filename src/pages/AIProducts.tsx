import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Brain, Database, LineChart, Bot, Sparkles, Cpu, Eye, MessageSquare, FileSearch, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const products = [
  {
    icon: Database,
    name: 'Data Learning Platform',
    tagline: 'Transform raw data into actionable intelligence',
    description: 'Our flagship AI platform that enables businesses to extract valuable insights from their data through advanced machine learning algorithms.',
    features: [
      'Automated Data Processing & Cleaning',
      'Custom Machine Learning Models',
      'Predictive Analytics Engine',
      'Real-time Data Visualization',
      'Integration with Popular Data Sources',
      'No-code Model Training Interface',
    ],
    color: 'primary',
    badge: 'Flagship Product',
  },
  {
    icon: Bot,
    name: 'AI Assistant Pro',
    tagline: 'Intelligent automation for your business',
    description: 'Advanced conversational AI that handles customer support, answers queries, and automates routine tasks with human-like understanding.',
    features: [
      '24/7 Customer Support Automation',
      'Multi-language Support (10+ languages)',
      'Custom Training on Your Data',
      'Seamless CRM Integration',
      'Sentiment Analysis',
      'Escalation to Human Agents',
    ],
    color: 'magenta',
    badge: 'Most Popular',
  },
  {
    icon: LineChart,
    name: 'Smart Analytics Dashboard',
    tagline: 'Business intelligence redefined',
    description: 'AI-powered analytics platform that provides real-time insights, trend predictions, and anomaly detection for data-driven decisions.',
    features: [
      'Real-time KPI Monitoring',
      'AI-driven Trend Prediction',
      'Anomaly Detection Alerts',
      'Custom Report Builder',
      'Multi-source Data Integration',
      'Mobile-responsive Design',
    ],
    color: 'accent',
    badge: 'Enterprise Ready',
  },
  {
    icon: Eye,
    name: 'Vision AI',
    tagline: 'See beyond the obvious',
    description: 'Computer vision solution for image and video analysis, enabling automated inspection, recognition, and classification tasks.',
    features: [
      'Object Detection & Recognition',
      'Facial Recognition System',
      'Document OCR & Processing',
      'Quality Inspection Automation',
      'Video Analytics',
      'Custom Model Training',
    ],
    color: 'primary',
    badge: 'New',
  },
  {
    icon: FileSearch,
    name: 'DocuMind AI',
    tagline: 'Intelligent document processing',
    description: 'AI-powered document understanding system that extracts, classifies, and processes information from unstructured documents.',
    features: [
      'Automated Document Classification',
      'Data Extraction & Validation',
      'Invoice & Receipt Processing',
      'Contract Analysis',
      'Compliance Checking',
      'Multi-format Support',
    ],
    color: 'magenta',
    badge: 'Enterprise',
  },
  {
    icon: MessageSquare,
    name: 'SentimentIQ',
    tagline: 'Understand your customers better',
    description: 'Advanced sentiment analysis platform that monitors brand perception across social media, reviews, and customer feedback.',
    features: [
      'Social Media Monitoring',
      'Review Sentiment Analysis',
      'Brand Health Tracking',
      'Competitor Analysis',
      'Trend Detection',
      'Automated Reports',
    ],
    color: 'accent',
    badge: 'Marketing',
  },
];

const AIProducts = () => {
  return (
    <>
      <Helmet>
        <title>AI Products | Aashvee Tech Solutions - Data Learning & AI Solutions</title>
        <meta name="description" content="Explore our AI products including Data Learning Platform, AI Assistant, Smart Analytics, and more. Cutting-edge artificial intelligence solutions for modern businesses." />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        
        <main className="pt-24">
          {/* Hero Section */}
          <section className="py-20 relative overflow-hidden hero-gradient">
            <div className="absolute inset-0 neural-pattern opacity-30" />
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-ai-magenta/15 rounded-full blur-[100px] animate-pulse delay-500" />
            
            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-3xl mx-auto text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full ai-gradient-border text-sm font-semibold mb-6 animate-fade-in-up">
                  <Cpu className="w-4 h-4 text-primary" />
                  <span className="text-gradient">AI-Powered Products</span>
                </div>
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in-up delay-100">
                  Intelligent Solutions for the{' '}
                  <span className="text-gradient">AI Era</span>
                </h1>
                <p className="text-xl text-muted-foreground animate-fade-in-up delay-200">
                  Discover our suite of AI products designed to automate, analyze, and accelerate 
                  your business operations.
                </p>
              </div>
            </div>
          </section>

          {/* Products Grid */}
          <section className="py-24 relative">
            <div className="absolute inset-0 dot-pattern opacity-20" />
            <div className="container mx-auto px-4 relative z-10">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {products.map((product, index) => (
                  <div
                    key={product.name}
                    className="group relative animate-fade-in-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="relative p-8 rounded-3xl glass border border-border/50 hover:border-primary/50 transition-all duration-500 h-full card-lift">
                      {/* Badge */}
                      <div className={`absolute -top-3 right-6 px-3 py-1 rounded-full text-xs font-bold ${
                        product.color === 'primary' ? 'bg-primary text-primary-foreground' :
                        product.color === 'magenta' ? 'bg-ai-magenta text-white' : 'bg-accent text-accent-foreground'
                      }`}>
                        {product.badge}
                      </div>

                      {/* Glow */}
                      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/10 via-ai-magenta/5 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      {/* Icon */}
                      <div className={`relative w-16 h-16 rounded-2xl mb-6 flex items-center justify-center ${
                        product.color === 'primary' ? 'bg-primary/20' :
                        product.color === 'magenta' ? 'bg-ai-magenta/20' : 'bg-accent/20'
                      } group-hover:scale-110 transition-transform duration-300`}>
                        <product.icon className={`w-8 h-8 ${
                          product.color === 'primary' ? 'text-primary' :
                          product.color === 'magenta' ? 'text-ai-magenta' : 'text-accent'
                        }`} />
                      </div>

                      {/* Content */}
                      <div className="relative">
                        <h2 className="font-display text-xl font-bold text-foreground mb-2 group-hover:text-gradient transition-all">
                          {product.name}
                        </h2>
                        <p className={`text-sm font-medium mb-4 ${
                          product.color === 'primary' ? 'text-primary' :
                          product.color === 'magenta' ? 'text-ai-magenta' : 'text-accent'
                        }`}>
                          {product.tagline}
                        </p>
                        <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                          {product.description}
                        </p>

                        {/* Features */}
                        <ul className="space-y-2 mb-6">
                          {product.features.slice(0, 4).map((feature, i) => (
                            <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                              <Sparkles className={`w-4 h-4 flex-shrink-0 ${
                                product.color === 'primary' ? 'text-primary' :
                                product.color === 'magenta' ? 'text-ai-magenta' : 'text-accent'
                              }`} />
                              {feature}
                            </li>
                          ))}
                        </ul>

                        {/* CTA */}
                        <Button variant="ghost" className="group/btn p-0 h-auto text-primary hover:text-ai-magenta">
                          Learn More 
                          <span className="ml-2 group-hover/btn:translate-x-1 transition-transform">→</span>
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 relative overflow-hidden bg-card/50">
            <div className="absolute inset-0 neural-pattern opacity-20" />
            <div className="container mx-auto px-4 relative z-10 text-center">
              <Brain className="w-16 h-16 text-primary mx-auto mb-6 animate-pulse-glow" />
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                Ready to Embrace <span className="text-gradient">AI Innovation</span>?
              </h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                Let us help you choose the right AI products for your business needs.
              </p>
              <Link to="/contact">
                <Button variant="hero" size="xl">
                  Schedule a Demo
                </Button>
              </Link>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default AIProducts;
