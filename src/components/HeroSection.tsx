import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, Brain, Cpu, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center hero-gradient overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 dot-pattern opacity-50" />
      
      {/* Soft gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-accent/10 rounded-full blur-[80px]" />

      {/* Floating Elements */}
      <div className="absolute top-32 right-20 animate-float hidden lg:block">
        <div className="p-4 bg-white rounded-2xl shadow-lg border border-border">
          <Brain className="w-8 h-8 text-primary" />
        </div>
      </div>
      <div className="absolute bottom-40 left-20 animate-float-delayed delay-300 hidden lg:block">
        <div className="p-4 bg-white rounded-2xl shadow-lg border border-border">
          <Cpu className="w-8 h-8 text-accent" />
        </div>
      </div>

      <div className="container mx-auto px-4 pt-24 pb-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/10 border border-primary/20 animate-fade-in-up">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary">First AI Company in Andhra Pradesh</span>
            </div>

            {/* Main Heading */}
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground animate-fade-in-up delay-100">
              Building Things{' '}
              <span className="text-gradient">To Do</span>{' '}
              in India
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-xl animate-fade-in-up delay-200">
              Aashvee Tech Solutions transforms businesses with cutting-edge AI, 
              custom software, and intelligent automation. From data learning to 
              enterprise dashboards — we build the future.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-300">
              <Link to="/contact">
                <Button size="xl" className="group w-full sm:w-auto bg-primary hover:bg-primary/90">
                  Start Your AI Journey
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/ai-products">
                <Button variant="outline" size="xl" className="w-full sm:w-auto border-primary/30 hover:bg-primary/5">
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
            <div className="absolute w-[300px] h-[300px] md:w-[380px] md:h-[380px] rounded-full border-2 border-primary/20 animate-spin-slow">
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-primary rounded-full" />
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-accent rounded-full" />
            </div>

            {/* Middle counter-rotating ring */}
            <div className="absolute w-[240px] h-[240px] md:w-[300px] md:h-[300px] rounded-full border border-accent/30 animate-spin-reverse" />

            {/* Center Content */}
            <div className="relative w-[160px] h-[160px] md:w-[200px] md:h-[200px] rounded-full bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 flex items-center justify-center shadow-xl animate-pulse-glow">
              <div className="text-center">
                <Brain className="w-12 h-12 md:w-14 md:h-14 text-primary mx-auto mb-2" />
                <h2 className="font-display text-lg md:text-xl font-bold text-foreground">AI</h2>
                <p className="text-xs md:text-sm text-primary font-medium">Powered</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
