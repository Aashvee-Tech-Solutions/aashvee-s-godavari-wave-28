import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ExternalLink, Building2, GraduationCap, Globe, Brain, LayoutDashboard, Smartphone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const projects = [
  {
    title: 'Ungaam Enterprise Platform',
    client: 'Ungaam',
    category: 'Enterprise Software',
    description: 'Comprehensive enterprise resource planning system with AI-powered analytics and automation features.',
    icon: Building2,
    tech: ['React', 'Node.js', 'PostgreSQL', 'AI/ML'],
    color: 'primary',
  },
  {
    title: 'Abit College Management System',
    client: 'Abit College',
    category: 'Education',
    description: 'Complete college management platform with student portals, attendance tracking, and academic management.',
    icon: GraduationCap,
    tech: ['React', 'Python', 'MongoDB', 'Cloud'],
    color: 'magenta',
  },
  {
    title: 'MTEC86 Learning Portal',
    client: 'MTEC86.ac.in',
    category: 'EdTech',
    description: 'Interactive e-learning platform with course management, assessments, and progress tracking.',
    icon: Globe,
    tech: ['Next.js', 'Django', 'AWS', 'AI'],
    color: 'accent',
  },
  {
    title: 'BVCR Digital Campus',
    client: 'BVCR.edu.in',
    category: 'Education',
    description: 'Digital transformation solution for campus management with mobile apps and web portals.',
    icon: GraduationCap,
    tech: ['React Native', 'Node.js', 'Firebase'],
    color: 'primary',
  },
  {
    title: 'AI Analytics Dashboard',
    client: 'Enterprise Client',
    category: 'Data Analytics',
    description: 'Real-time business intelligence dashboard with predictive analytics and automated reporting.',
    icon: LayoutDashboard,
    tech: ['React', 'Python', 'TensorFlow', 'D3.js'],
    color: 'magenta',
  },
  {
    title: 'Data Learning Platform',
    client: 'Internal Product',
    category: 'AI Product',
    description: 'Our flagship AI platform for automated data processing and machine learning model training.',
    icon: Brain,
    tech: ['Python', 'TensorFlow', 'React', 'AWS'],
    color: 'accent',
  },
];

const Portfolio = () => {
  return (
    <>
      <Helmet>
        <title>Portfolio | Aashvee Tech Solutions - Our Work & Case Studies</title>
        <meta name="description" content="Explore our portfolio of successful projects including enterprise software, education platforms, and AI solutions for clients like Ungaam, Abit College, MTEC86, and BVCR." />
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
                  Our Portfolio
                </span>
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in-up delay-100">
                  Projects That <span className="text-gradient">Make Impact</span>
                </h1>
                <p className="text-xl text-muted-foreground animate-fade-in-up delay-200">
                  Discover how we've helped businesses transform with innovative technology solutions.
                </p>
              </div>
            </div>
          </section>

          {/* Projects Grid */}
          <section className="py-24 relative">
            <div className="absolute inset-0 dot-pattern opacity-20" />
            <div className="container mx-auto px-4 relative z-10">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                  <div
                    key={project.title}
                    className="group relative animate-fade-in-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="relative p-8 rounded-3xl glass border border-border/50 hover:border-primary/50 transition-all duration-500 h-full card-lift">
                      {/* Category Badge */}
                      <div className={`absolute -top-3 right-6 px-3 py-1 rounded-full text-xs font-bold ${
                        project.color === 'primary' ? 'bg-primary/20 text-primary' :
                        project.color === 'magenta' ? 'bg-ai-magenta/20 text-ai-magenta' : 'bg-accent/20 text-accent'
                      }`}>
                        {project.category}
                      </div>

                      {/* Glow */}
                      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/10 via-ai-magenta/5 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      {/* Icon */}
                      <div className={`relative w-14 h-14 rounded-xl mb-6 flex items-center justify-center ${
                        project.color === 'primary' ? 'bg-primary/20' :
                        project.color === 'magenta' ? 'bg-ai-magenta/20' : 'bg-accent/20'
                      } group-hover:scale-110 transition-transform duration-300`}>
                        <project.icon className={`w-7 h-7 ${
                          project.color === 'primary' ? 'text-primary' :
                          project.color === 'magenta' ? 'text-ai-magenta' : 'text-accent'
                        }`} />
                      </div>

                      {/* Content */}
                      <div className="relative">
                        <p className="text-sm text-muted-foreground mb-1">Client: {project.client}</p>
                        <h2 className="font-display text-xl font-bold text-foreground mb-3 group-hover:text-gradient transition-all">
                          {project.title}
                        </h2>
                        <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                          {project.description}
                        </p>

                        {/* Tech Stack */}
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech, i) => (
                            <span key={i} className="px-3 py-1 rounded-full text-xs bg-secondary text-secondary-foreground">
                              {tech}
                            </span>
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
          <section className="py-20 relative overflow-hidden bg-card/50">
            <div className="container mx-auto px-4 text-center">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                Have a Project in Mind?
              </h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                Let's discuss how we can help bring your vision to life.
              </p>
              <Link to="/contact">
                <Button variant="hero" size="xl">
                  Start a Project
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

export default Portfolio;
