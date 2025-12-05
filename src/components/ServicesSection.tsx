import { Code, Smartphone, Brain, Layout, Cloud, LineChart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';

const services = [
  {
    icon: Brain,
    title: 'AI Solutions',
    features: ['Machine Learning Models', 'Natural Language Processing', 'Predictive Analytics', 'AI-powered Automation'],
    color: 'primary'
  },
  {
    icon: Code,
    title: 'Web Development',
    features: ['Custom business websites', 'E-commerce solutions', 'Progressive web apps', 'API development'],
    color: 'accent'
  },
  {
    icon: Smartphone,
    title: 'Mobile Apps',
    features: ['Android development', 'iOS development', 'Cross-platform apps', 'App maintenance'],
    color: 'primary'
  },
  {
    icon: Layout,
    title: 'CMS Software',
    features: ['Custom CMS development', 'Content management', 'Workflow automation', 'Multi-user systems'],
    color: 'accent'
  },
  {
    icon: LineChart,
    title: 'Dashboards',
    features: ['Real-time analytics', 'Data visualization', 'KPI tracking', 'Custom reports'],
    color: 'primary'
  },
  {
    icon: Cloud,
    title: 'Cloud Solutions',
    features: ['Cloud migration', 'Scalable hosting', 'Data backup', '24/7 monitoring'],
    color: 'accent'
  },
];

const ServicesSection = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-white">
      {/* Background */}
      <div className="absolute inset-0 hero-gradient" />
      <div className="absolute inset-0 dot-pattern opacity-30" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold mb-4 animate-fade-in-up">
            Our Services
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground animate-fade-in-up delay-100">
            Comprehensive <span className="text-gradient">Digital Solutions</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto animate-fade-in-up delay-200">
            From AI innovation to custom software development — we deliver end-to-end solutions
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative p-6 rounded-2xl bg-white border border-border shadow-sm hover:shadow-lg hover:border-primary/30 transition-all duration-500 animate-fade-in-up card-lift"
              style={{ animationDelay: `${index * 100 + 300}ms` }}
            >
              {/* Icon */}
              <div className={`relative w-14 h-14 rounded-xl mb-5 flex items-center justify-center ${
                service.color === 'primary' ? 'bg-primary/10' : 'bg-accent/10'
              } group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className={`w-7 h-7 ${
                  service.color === 'primary' ? 'text-primary' : 'text-accent'
                }`} />
              </div>

              {/* Title */}
              <h3 className="relative font-display text-xl font-bold mb-4 text-foreground group-hover:text-gradient transition-all">
                {service.title}
              </h3>

              {/* Features */}
              <ul className="relative space-y-2">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-muted-foreground text-sm">
                    <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                      service.color === 'primary' ? 'bg-primary' : 'bg-accent'
                    }`} />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12 animate-fade-in-up delay-700">
          <Link to="/services">
            <Button size="xl" className="bg-primary hover:bg-primary/90">
              View All Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
