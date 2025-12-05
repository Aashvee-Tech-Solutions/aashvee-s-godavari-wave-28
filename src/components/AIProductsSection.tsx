import { Brain, Database, LineChart, Bot, Sparkles, Cpu } from 'lucide-react';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';

const products = [
  {
    icon: Database,
    name: 'Data Learning',
    description: 'Advanced machine learning platform for intelligent data analysis and predictive insights.',
    features: ['Automated Data Processing', 'Predictive Analytics', 'Custom ML Models'],
    color: 'primary',
  },
  {
    icon: Bot,
    name: 'AI Assistant',
    description: 'Intelligent conversational AI for customer support and business automation.',
    features: ['24/7 Support', 'Multi-language', 'Custom Training'],
    color: 'magenta',
  },
  {
    icon: LineChart,
    name: 'Smart Analytics',
    description: 'Real-time business intelligence with AI-powered insights and visualization.',
    features: ['Live Dashboards', 'Trend Prediction', 'Anomaly Detection'],
    color: 'accent',
  },
];

const AIProductsSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 hero-gradient" />
      <div className="absolute inset-0 neural-pattern opacity-30" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full ai-gradient-border text-sm font-semibold mb-4 animate-fade-in-up">
            <Cpu className="w-4 h-4 text-primary" />
            <span className="text-gradient">AI-Powered Products</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4 animate-fade-in-up delay-100">
            Intelligent Solutions for{' '}
            <span className="text-gradient">Modern Businesses</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto animate-fade-in-up delay-200">
            Cutting-edge AI products designed to transform your operations and drive growth
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {products.map((product, index) => (
            <div
              key={product.name}
              className="group relative animate-fade-in-up"
              style={{ animationDelay: `${index * 150 + 300}ms` }}
            >
              <div className="relative p-8 rounded-3xl glass border border-border/50 hover:border-primary/50 transition-all duration-500 h-full">
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
                  <h3 className="font-display text-xl font-bold text-foreground mb-3 group-hover:text-gradient transition-all">
                    {product.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                    {product.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Sparkles className={`w-4 h-4 ${
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

        {/* CTA */}
        <div className="text-center mt-12 animate-fade-in-up delay-700">
          <Link to="/ai-products">
            <Button variant="hero" size="xl">
              Explore All AI Products
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AIProductsSection;
