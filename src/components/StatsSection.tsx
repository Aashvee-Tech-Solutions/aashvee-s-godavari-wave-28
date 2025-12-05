import { useEffect, useState, useRef } from 'react';
import { Globe } from 'lucide-react';

const stats = [
  { value: 500, suffix: '+', label: 'Projects Delivered' },
  { value: 150, suffix: '+', label: 'Happy Clients' },
  { value: 50, suffix: '+', label: 'Team Members' },
  { value: 99, suffix: '%', label: 'Client Satisfaction' }
];

const AnimatedCounter = ({ value, suffix }: { value: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const duration = 2000;
          const increment = value / (duration / 16);
          
          const timer = setInterval(() => {
            start += increment;
            if (start >= value) {
              setCount(value);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);

          return () => clearInterval(timer);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [value, hasAnimated]);

  return (
    <div ref={ref} className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-gradient">
      {count}{suffix}
    </div>
  );
};

const StatsSection = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-card/50">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-primary/5 rounded-full blur-[80px]" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-accent/5 rounded-full blur-[80px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Stats */}
          <div>
            <span className="inline-block px-4 py-2 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-medium mb-4">
              Our Growth
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-8">
              Our Projects <span className="text-gradient">Growing...</span>
            </h2>

            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat, index) => (
                <div 
                  key={stat.label}
                  className="p-6 rounded-2xl bg-background/50 border border-border hover:border-primary/30 transition-all duration-300"
                >
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  <p className="text-muted-foreground mt-2">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Globe visualization */}
          <div className="relative flex items-center justify-center">
            <div className="w-80 h-80 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center glow-box animate-pulse-glow">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full border border-primary/30 flex items-center justify-center">
                <Globe className="w-32 h-32 md:w-40 md:h-40 text-primary/50" />
              </div>
            </div>
            
            {/* Orbiting dots */}
            <div className="absolute w-full h-full animate-spin-slow">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-primary rounded-full glow-box" />
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-accent rounded-full" />
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-primary rounded-full" />
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-accent rounded-full glow-box" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
