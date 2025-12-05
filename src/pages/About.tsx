import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TeamSection from '@/components/TeamSection';
import { Sparkles, Target, Eye, Heart, Award, Users, Rocket, Brain } from 'lucide-react';

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us | Aashvee Tech Solutions - First AI Company in Andhra Pradesh</title>
        <meta name="description" content="Learn about Aashvee Tech Solutions, the first AI company in Andhra Pradesh. Meet our leadership team and discover our mission to revolutionize businesses with AI." />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        
        <main className="pt-24">
          {/* Hero Section */}
          <section className="py-20 relative overflow-hidden hero-gradient">
            <div className="absolute inset-0 neural-pattern opacity-30" />
            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-3xl mx-auto text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full ai-gradient-border text-sm font-semibold mb-6 animate-fade-in-up">
                  <Sparkles className="w-4 h-4 text-accent animate-pulse" />
                  <span className="text-gradient">First AI Company in Andhra Pradesh</span>
                </div>
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in-up delay-100">
                  Pioneering <span className="text-gradient">AI Innovation</span>
                </h1>
                <p className="text-xl text-muted-foreground animate-fade-in-up delay-200">
                  Building the future of technology from Andhra Pradesh to the world.
                </p>
              </div>
            </div>
          </section>

          {/* Story Section */}
          <section className="py-24 relative">
            <div className="container mx-auto px-4">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="animate-slide-in-left">
                  <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Story</span>
                  <h2 className="font-display text-3xl md:text-4xl font-bold mt-4 mb-6">
                    From Vision to <span className="text-gradient">Reality</span>
                  </h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      Founded in Andhra Pradesh, Aashvee Tech Solutions emerged from a bold vision: 
                      to bring world-class AI and technology solutions to businesses across India and beyond.
                    </p>
                    <p>
                      What started as a small team of passionate technologists has grown into a 
                      leading AI company, serving clients across education, enterprise, and government sectors.
                    </p>
                    <p>
                      Today, we're proud to be recognized as the first AI company in Andhra Pradesh, 
                      pioneering innovations in machine learning, data analytics, and intelligent automation.
                    </p>
                  </div>
                </div>
                
                <div className="animate-slide-in-right delay-200">
                  <div className="grid grid-cols-2 gap-6">
                    {[
                      { icon: Brain, value: '50+', label: 'AI Solutions' },
                      { icon: Users, value: '100+', label: 'Happy Clients' },
                      { icon: Award, value: '5+', label: 'Years' },
                      { icon: Rocket, value: '200+', label: 'Projects' },
                    ].map((stat, index) => (
                      <div key={index} className="p-6 rounded-2xl glass text-center card-lift">
                        <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                        <div className="font-display text-3xl font-bold text-gradient">{stat.value}</div>
                        <div className="text-sm text-muted-foreground">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Mission, Vision, Values */}
          <section className="py-24 relative bg-card/30">
            <div className="absolute inset-0 dot-pattern opacity-20" />
            <div className="container mx-auto px-4 relative z-10">
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    icon: Target,
                    title: 'Our Mission',
                    description: 'To democratize AI technology and empower businesses of all sizes with intelligent solutions that drive growth and innovation.',
                    color: 'primary',
                  },
                  {
                    icon: Eye,
                    title: 'Our Vision',
                    description: 'To be the leading AI innovation hub in South India, transforming how businesses operate and compete in the digital age.',
                    color: 'magenta',
                  },
                  {
                    icon: Heart,
                    title: 'Our Values',
                    description: 'Innovation, integrity, and impact. We believe in creating technology that not only works but makes a meaningful difference.',
                    color: 'accent',
                  },
                ].map((item, index) => (
                  <div
                    key={item.title}
                    className="p-8 rounded-3xl glass text-center animate-fade-in-up card-lift"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center ${
                      item.color === 'primary' ? 'bg-primary/20' :
                      item.color === 'magenta' ? 'bg-ai-magenta/20' : 'bg-accent/20'
                    }`}>
                      <item.icon className={`w-8 h-8 ${
                        item.color === 'primary' ? 'text-primary' :
                        item.color === 'magenta' ? 'text-ai-magenta' : 'text-accent'
                      }`} />
                    </div>
                    <h3 className="font-display text-xl font-bold mb-4">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Team Section */}
          <TeamSection />

          {/* Why Choose Us */}
          <section className="py-24 relative">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                  Why Choose <span className="text-gradient">Aashvee Tech</span>?
                </h2>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { title: 'AI-First Approach', desc: 'Every solution powered by intelligent automation' },
                  { title: 'Local Expertise', desc: 'Deep understanding of regional business needs' },
                  { title: 'End-to-End Solutions', desc: 'From strategy to implementation and support' },
                  { title: 'Proven Track Record', desc: 'Trusted by leading institutions and enterprises' },
                ].map((item, index) => (
                  <div key={index} className="p-6 rounded-2xl glass text-center animate-fade-in-up card-lift" style={{ animationDelay: `${index * 100}ms` }}>
                    <div className="w-10 h-10 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-ai-magenta flex items-center justify-center text-primary-foreground font-bold">
                      {index + 1}
                    </div>
                    <h3 className="font-display font-bold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default About;
