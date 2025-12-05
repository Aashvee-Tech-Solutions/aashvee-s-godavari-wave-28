import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Code, Smartphone, Brain, Layout, Cloud, Database, Palette, LineChart, Globe, Shield, Zap, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: Brain,
    title: 'AI & Machine Learning',
    description: 'Harness the power of artificial intelligence to automate processes, gain insights, and drive innovation.',
    features: ['Custom ML Models', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics', 'AI Chatbots', 'Recommendation Systems'],
    color: 'primary',
  },
  {
    icon: Code,
    title: 'Web Development',
    description: 'Modern, responsive websites and web applications built with cutting-edge technologies.',
    features: ['Custom Websites', 'E-commerce Platforms', 'Progressive Web Apps', 'API Development', 'CRM Systems', 'Portal Development'],
    color: 'magenta',
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications for iOS and Android.',
    features: ['Android Apps', 'iOS Apps', 'React Native', 'Flutter Development', 'App Maintenance', 'Store Optimization'],
    color: 'accent',
  },
  {
    icon: Layout,
    title: 'CMS Software',
    description: 'Custom content management systems tailored to your business needs.',
    features: ['Custom CMS', 'WordPress Solutions', 'Headless CMS', 'Multi-user Systems', 'Workflow Automation', 'Content Migration'],
    color: 'primary',
  },
  {
    icon: LineChart,
    title: 'Business Dashboards',
    description: 'Real-time analytics and visualization dashboards for data-driven decisions.',
    features: ['Interactive Dashboards', 'KPI Tracking', 'Data Visualization', 'Real-time Analytics', 'Custom Reports', 'BI Integration'],
    color: 'magenta',
  },
  {
    icon: Cloud,
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and migration services for modern businesses.',
    features: ['Cloud Migration', 'AWS/Azure/GCP', 'DevOps', 'Serverless Architecture', 'Microservices', 'Cloud Security'],
    color: 'accent',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Beautiful, intuitive designs that enhance user experience and engagement.',
    features: ['User Research', 'Wireframing', 'Prototyping', 'Visual Design', 'Design Systems', 'Usability Testing'],
    color: 'primary',
  },
  {
    icon: Database,
    title: 'Database Solutions',
    description: 'Robust database design, optimization, and management services.',
    features: ['Database Design', 'Performance Tuning', 'Data Migration', 'Backup Solutions', 'NoSQL/SQL', 'Data Security'],
    color: 'magenta',
  },
];

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Services | Aashvee Tech Solutions - AI & Software Development</title>
        <meta name="description" content="Comprehensive digital services including AI solutions, web development, mobile apps, CMS software, dashboards, and cloud solutions." />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        
        <main className="pt-24">
          {/* Hero Section */}
          <section className="py-20 relative overflow-hidden hero-gradient">
            <div className="absolute inset-0 neural-pattern opacity-30" />
            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-3xl mx-auto text-center">
                <span className="inline-block px-4 py-2 rounded-full ai-gradient-border text-primary text-sm font-semibold mb-6 animate-fade-in-up">
                  Our Services
                </span>
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in-up delay-100">
                  End-to-End <span className="text-gradient">Digital Solutions</span>
                </h1>
                <p className="text-xl text-muted-foreground animate-fade-in-up delay-200">
                  From AI innovation to custom software development, we deliver comprehensive solutions 
                  that transform businesses and drive growth.
                </p>
              </div>
            </div>
          </section>

          {/* Services Grid */}
          <section className="py-24 relative">
            <div className="absolute inset-0 dot-pattern opacity-20" />
            <div className="container mx-auto px-4 relative z-10">
              <div className="grid md:grid-cols-2 gap-8">
                {services.map((service, index) => (
                  <div
                    key={service.title}
                    className="group p-8 rounded-3xl glass border border-border/50 hover:border-primary/50 transition-all duration-500 animate-fade-in-up card-lift"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-start gap-6">
                      <div className={`w-16 h-16 rounded-2xl flex-shrink-0 flex items-center justify-center ${
                        service.color === 'primary' ? 'bg-primary/20' :
                        service.color === 'magenta' ? 'bg-ai-magenta/20' : 'bg-accent/20'
                      } group-hover:scale-110 transition-transform duration-300`}>
                        <service.icon className={`w-8 h-8 ${
                          service.color === 'primary' ? 'text-primary' :
                          service.color === 'magenta' ? 'text-ai-magenta' : 'text-accent'
                        }`} />
                      </div>
                      
                      <div className="flex-1">
                        <h2 className="font-display text-2xl font-bold mb-3 group-hover:text-gradient transition-all">
                          {service.title}
                        </h2>
                        <p className="text-muted-foreground mb-6">
                          {service.description}
                        </p>
                        <div className="grid grid-cols-2 gap-3">
                          {service.features.map((feature, i) => (
                            <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                              <span className={`w-1.5 h-1.5 rounded-full ${
                                service.color === 'primary' ? 'bg-primary' :
                                service.color === 'magenta' ? 'bg-ai-magenta' : 'bg-accent'
                              }`} />
                              {feature}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 relative overflow-hidden bg-gradient-to-r from-primary via-ai-magenta to-accent">
            <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.1),transparent)] animate-shimmer" />
            <div className="container mx-auto px-4 relative z-10 text-center">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
                Let's discuss how our services can help you achieve your goals.
              </p>
              <Link to="/contact">
                <Button size="xl" className="bg-white text-primary hover:bg-white/90">
                  Get Started Today
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

export default Services;
