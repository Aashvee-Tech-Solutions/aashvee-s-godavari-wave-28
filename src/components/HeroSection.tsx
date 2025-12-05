import { Button } from '@/components/ui/button';
import { ArrowRight, Phone, Code, Smartphone, Globe } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center hero-gradient overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 hex-pattern opacity-30" />
      
      {/* Floating Hexagons */}
      <div className="absolute top-20 right-10 w-32 h-32 border border-primary/20 rotate-45 animate-float opacity-50" />
      <div className="absolute bottom-40 left-10 w-24 h-24 border border-accent/20 rotate-12 animate-float delay-300 opacity-40" />
      <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-primary/10 rotate-45 animate-float delay-500" />
      
      {/* Glowing Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-[100px] animate-pulse delay-500" />

      <div className="container mx-auto px-4 pt-24 pb-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 animate-fade-in-up">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span className="text-sm text-primary font-medium">Your Perfect Digital Partner</span>
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fade-in-up delay-100">
              Empowering Businesses to{' '}
              <span className="text-gradient">Go Digital</span> &{' '}
              <span className="text-accent">Grow Global</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-xl animate-fade-in-up delay-200">
              At Aashvee Tech Solutions, we help businesses step confidently into the digital future. 
              From crafting world-class websites to building powerful mobile apps, CRM solutions, 
              and cloud-based systems — we deliver the tools you need to succeed.
            </p>

            <div className="space-y-4 animate-fade-in-up delay-300">
              <h3 className="font-display text-lg font-semibold text-foreground">We Focus On:</h3>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                    <span className="text-primary text-lg">✓</span>
                  </div>
                  <span>Quality That Lasts</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <div className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center">
                    <span className="text-accent text-lg">✓</span>
                  </div>
                  <span>Speed to Market</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-400">
              <Button variant="hero" size="xl" className="group">
                Contact Us Today
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Button>
              <div className="flex items-center gap-3 px-6 py-3 rounded-xl bg-card/50 border border-border">
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center animate-pulse-glow">
                  <Phone className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Build Your Digital Future</p>
                  <p className="font-semibold text-foreground">+91 98765 43210</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Animated Logo Circle */}
          <div className="relative flex items-center justify-center animate-scale-in delay-300">
            {/* Outer rotating ring */}
            <div className="absolute w-[400px] h-[400px] md:w-[500px] md:h-[500px] rounded-full border-2 border-primary/30 animate-spin-slow">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 bg-primary rounded-full" />
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-6 h-6 bg-accent rounded-full" />
              <div className="absolute top-1/2 -left-3 -translate-y-1/2 w-6 h-6 bg-primary rounded-full" />
              <div className="absolute top-1/2 -right-3 -translate-y-1/2 w-6 h-6 bg-accent rounded-full" />
            </div>

            {/* Middle static ring */}
            <div className="absolute w-[320px] h-[320px] md:w-[400px] md:h-[400px] rounded-full border border-primary/20 glow-border" />

            {/* Inner content */}
            <div className="relative w-[260px] h-[260px] md:w-[320px] md:h-[320px] rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center glow-box animate-float">
              <div className="text-center">
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">Aashvee</h2>
                <p className="font-display text-lg text-primary">Tech Solutions</p>
                <div className="mt-4 flex justify-center gap-4">
                  <Code className="w-6 h-6 text-accent" />
                  <Smartphone className="w-6 h-6 text-primary" />
                  <Globe className="w-6 h-6 text-accent" />
                </div>
              </div>
            </div>

            {/* Floating tech icons */}
            <div className="absolute -top-8 right-8 p-3 rounded-xl bg-card border border-border animate-float delay-200">
              <Code className="w-6 h-6 text-primary" />
            </div>
            <div className="absolute -bottom-8 left-8 p-3 rounded-xl bg-card border border-border animate-float delay-400">
              <Smartphone className="w-6 h-6 text-accent" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-card/50 to-transparent" />
    </section>
  );
};

export default HeroSection;
