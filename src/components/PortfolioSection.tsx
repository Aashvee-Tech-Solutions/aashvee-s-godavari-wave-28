import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ExternalLink, ShoppingCart, Utensils, Receipt, Briefcase, Truck, Building } from 'lucide-react';

const projects = [
  {
    title: 'E-commerce Platform',
    category: 'Digital Commerce Solutions',
    description: 'Feature-rich online stores designed to drive sales and improve user experience with secure payment gateways and advanced analytics.',
    icon: ShoppingCart,
    color: 'primary'
  },
  {
    title: 'Food Delivery App',
    category: 'On-Demand Solutions',
    description: 'Intuitive, real-time food delivery platforms built for speed, accuracy, and customer satisfaction.',
    icon: Utensils,
    color: 'accent'
  },
  {
    title: 'Billing & Invoicing System',
    category: 'Financial Management',
    description: 'Automated financial management solutions for streamlined billing, invoicing, and payment tracking.',
    icon: Receipt,
    color: 'primary'
  },
  {
    title: 'Business CRM',
    category: 'Enterprise Solutions',
    description: 'Comprehensive customer relationship management systems to boost sales and customer engagement.',
    icon: Briefcase,
    color: 'accent'
  },
  {
    title: 'Logistics Platform',
    category: 'Supply Chain',
    description: 'End-to-end logistics management with real-time tracking, route optimization, and fleet management.',
    icon: Truck,
    color: 'primary'
  },
  {
    title: 'Real Estate Portal',
    category: 'Property Solutions',
    description: 'Modern property listing and management platforms with virtual tours and lead generation.',
    icon: Building,
    color: 'accent'
  }
];

const PortfolioSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="portfolio" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 hero-gradient" />
      <div className="absolute inset-0 hex-pattern opacity-20" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-medium mb-4">
            Our Solutions
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Our <span className="text-gradient">Product & Solutions</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our diverse portfolio of digital solutions that have transformed businesses across industries
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group relative animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative h-full p-8 rounded-3xl bg-card border border-border overflow-hidden transition-all duration-500 hover:border-primary/50 hover:transform hover:-translate-y-2">
                {/* Background gradient on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br transition-opacity duration-500 ${
                  project.color === 'primary' 
                    ? 'from-primary/10 to-transparent' 
                    : 'from-accent/10 to-transparent'
                } ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'}`} />

                {/* Content */}
                <div className="relative">
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl mb-6 flex items-center justify-center transition-all duration-300 ${
                    project.color === 'primary'
                      ? 'bg-primary/20 group-hover:bg-primary/30'
                      : 'bg-accent/20 group-hover:bg-accent/30'
                  }`}>
                    <project.icon className={`w-8 h-8 ${
                      project.color === 'primary' ? 'text-primary' : 'text-accent'
                    }`} />
                  </div>

                  {/* Category */}
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-4 ${
                    project.color === 'primary'
                      ? 'bg-primary/10 text-primary'
                      : 'bg-accent/10 text-accent'
                  }`}>
                    {project.category}
                  </span>

                  {/* Title */}
                  <h3 className="font-display text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Link */}
                  <div className="flex items-center gap-2 text-primary font-medium text-sm opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    <span>View Case Study</span>
                    <ExternalLink className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="group">
            View All Projects
            <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
