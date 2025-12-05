import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, Brain, Cpu, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center hero-gradient overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 neural-pattern opacity-40" />
      
      {/* Animated Orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-ai-magenta/15 rounded-full blur-[100px] animate-pulse delay-500" />
      <div className="absolute top-1/2 right-1/3 w-[300px] h-[300px] bg-accent/10 rounded-full blur-[80px] animate-pulse delay-1000" />

      {/* Floating Elements */}
      <div className="absolute top-32 right-20 animate-float">
        <div className="p-4 glass rounded-2xl">
          <Brain className="w-8 h-8 text-primary" />
        </div>
      </div>
      <div className="absolute bottom-40 left-20 animate-float-delayed delay-300">
        <div className="p-4 glass rounded-2xl">
          <Cpu className="w-8 h-8 text-ai-magenta" />
        </div>
      </div>
      <div className="absolute top-1/2 right-10 animate-float delay-500">
        <div className="p-4 glass rounded-2xl">
          <Zap className="w-8 h-8 text-accent" />
        </div>
      </div>

      <div className="container mx-auto px-4 pt-24 pb-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full ai-gradient-border animate-fade-in-up">
              <Sparkles className="w-4 h-4 text-accent animate-pulse" />
              <span className="text-sm font-semibold text-gradient">First AI Company in Andhra Pradesh</span>
            </div>

            {/* Main Heading */}
            <h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-bold leading-tight animate-fade-in-up delay-100">
              Pioneering{' '}
              <span className="text-gradient">AI Innovation</span>{' '}
              in South India
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-xl animate-fade-in-up delay-200">
              Aashvee Tech Solutions transforms businesses with cutting-edge AI, 
              custom software, and intelligent automation. From data learning to 
              enterprise dashboards — we build the future.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-300">
              <Link to="/contact">
                <Button variant="hero" size="xl" className="group w-full sm:w-auto">
                  Start Your AI Journey
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/ai-products">
                <Button variant="outline" size="xl" className="border-primary/30 hover:bg-primary/10 w-full sm:w-auto">
                  Explore AI Products
                </Button>
              </Link>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-6 pt-8 animate-fade-in-up delay-400">
              {[
                { value: '50+', label: 'AI Solutions' },
                { value: '100+', label: 'Happy Clients' },
                { value: '5+', label: 'Years Leading' },
              ].map((stat, i) => (
                <div key={i} className="text-center sm:text-left">
                  <div className="font-display text-2xl md:text-3xl font-bold text-gradient">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - AI Visual */}
          <div className="relative flex items-center justify-center animate-scale-in delay-300">
            {/* Outer rotating ring */}
            <div className="absolute w-[350px] h-[350px] md:w-[450px] md:h-[450px] rounded-full border border-primary/20 animate-spin-slow">
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-primary rounded-full animate-pulse" />
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-ai-magenta rounded-full animate-pulse delay-300" />
              <div className="absolute top-1/2 -left-2 -translate-y-1/2 w-4 h-4 bg-accent rounded-full animate-pulse delay-500" />
              <div className="absolute top-1/2 -right-2 -translate-y-1/2 w-4 h-4 bg-ai-cyan rounded-full animate-pulse delay-700" />
            </div>

            {/* Middle counter-rotating ring */}
            <div className="absolute w-[280px] h-[280px] md:w-[360px] md:h-[360px] rounded-full border border-ai-magenta/30 animate-spin-reverse" />

            {/* Inner ring */}
            <div className="absolute w-[220px] h-[220px] md:w-[280px] md:h-[280px] rounded-full border-2 border-dashed border-accent/20" />

            {/* Center Content */}
            <div className="relative w-[180px] h-[180px] md:w-[220px] md:h-[220px] rounded-full bg-gradient-to-br from-primary/30 via-ai-magenta/20 to-accent/30 flex items-center justify-center glow-box animate-pulse-glow">
              <div className="text-center">
                <Brain className="w-12 h-12 md:w-16 md:h-16 text-primary mx-auto mb-2" />
                <h2 className="font-display text-xl md:text-2xl font-bold text-foreground">AI</h2>
                <p className="text-xs md:text-sm text-accent font-medium">Powered Solutions</p>
              </div>
            </div>

            {/* Orbiting elements */}
            <div className="absolute w-full h-full animate-orbit">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 p-2 glass rounded-xl">
                <Sparkles className="w-5 h-5 text-accent" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
