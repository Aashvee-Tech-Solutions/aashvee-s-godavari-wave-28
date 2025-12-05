import { Button } from '@/components/ui/button';
import { ArrowRight, Target, Lightbulb, Users } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 hero-gradient" />
      <div className="absolute inset-0 hex-pattern opacity-20" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image/Visual */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden border border-border glow-border">
              <div className="aspect-[4/3] bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-24 h-24 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                    <span className="font-display text-4xl font-bold text-primary-foreground">A</span>
                  </div>
                  <h3 className="font-display text-2xl font-bold text-foreground">Aashvee Tech Solutions</h3>
                  <p className="text-muted-foreground mt-2">Your Trusted Digital Partner</p>
                </div>
              </div>
            </div>

            {/* Floating card */}
            <div className="absolute -bottom-8 -right-8 p-6 rounded-2xl bg-card border border-border shadow-2xl shadow-primary/10 animate-float">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center">
                  <Target className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="font-bold text-foreground">5+ Years</p>
                  <p className="text-sm text-muted-foreground">Industry Experience</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-8">
            <div>
              <span className="inline-block px-4 py-2 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-medium mb-4">
                About Us
              </span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Turning Innovative Ideas Into{' '}
                <span className="text-gradient">Digital Success</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Aashvee Tech Solutions is a fast-growing tech company transforming businesses 
                with cutting-edge mobile, web, and software solutions. Our mission is to provide 
                customized, industry-focused technology that boosts efficiency, increases reach, 
                and drives measurable results.
              </p>
            </div>

            {/* Mission & Vision */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-card/50 border border-border hover:border-primary/30 transition-all group">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-display font-bold text-lg mb-2">Our Mission</h4>
                <p className="text-sm text-muted-foreground">
                  To empower businesses with innovative digital solutions that drive growth and success.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-card/50 border border-border hover:border-accent/30 transition-all group">
                <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center mb-4 group-hover:bg-accent/30 transition-colors">
                  <Lightbulb className="w-6 h-6 text-accent" />
                </div>
                <h4 className="font-display font-bold text-lg mb-2">Our Vision</h4>
                <p className="text-sm text-muted-foreground">
                  To be the leading digital transformation partner for businesses worldwide.
                </p>
              </div>
            </div>

            {/* Values */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20">
              <div className="flex items-center gap-4 mb-4">
                <Users className="w-8 h-8 text-primary" />
                <h4 className="font-display font-bold text-lg">Our Core Values</h4>
              </div>
              <div className="flex flex-wrap gap-3">
                {['Innovation', 'Integrity', 'Excellence', 'Collaboration', 'Customer Focus'].map((value) => (
                  <span 
                    key={value}
                    className="px-4 py-2 rounded-full bg-background/50 border border-border text-sm font-medium text-foreground"
                  >
                    {value}
                  </span>
                ))}
              </div>
            </div>

            <Button variant="hero" size="lg" className="group">
              Learn More About Us
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
